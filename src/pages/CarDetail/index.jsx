import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";
import Terms from "./terms";
import CarType from "../../components/CarType";
import "./styles.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { carById } from "../../redux/features/carDetailSlice";
import { createOrder } from "../../redux/features/createOrderSlice";
import { DatePicker, notification, ConfigProvider, Spin } from "antd";
import dayjs from "dayjs";
import { Helmet } from "react-helmet";
import { setHistoryUrl } from "../../redux/features/loginSlice";

const CarDetail = () => {
  const ERROR_SCR =
    "https://placehold.jp/c2c2c2/ffffff/286x160.png?text=%E2%9B%9F&css=%7B%22border-radius%22%3A%22%208px%22%7D";
  const param = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { RangePicker } = DatePicker;
  const [api, contextHolder] = notification.useNotification();
  const { car } = useSelector((state) => state.detail);
  const { isLoading } = useSelector((state) => state.createOrder);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    dispatch(carById(param.id));
  }, []);

  const handleNotFound = (event) => {
    event.target.src = ERROR_SCR;
    event.target.onerror = null;
  };

  const handleChange = (date, dateString) => {
    setStartDate(dateString[0]);
    setEndDate(dateString[1]);
  };

  const disabledDate = (current) => {
    return current && current < dayjs().endOf("day");
  };

  const formatedPrice = (item) => {
    return new Intl.NumberFormat("id-ID").format(item);
  };

  const location = useLocation();

  const handleSubmit = () => {
    if (startDate == "" || endDate == "") {
      api.error({
        message: "Error!!",
        description: "Silahkan isi tanggal sewa",
      });
    } else {
      dispatch(setHistoryUrl(location.pathname));
      const payload = {
        start_rent_at: startDate,
        finish_rent_at: endDate,
        car_id: car.id,
      };
      dispatch(createOrder(payload)).then((response) => {
        const id = response.payload.id;
        navigate(`/order/${id}`);
        // console.log(response.payload.id);
      });
    }
    // console.log(startDate, endDate);
  };

  return (
    <div>
      <Helmet>
        <title>{`Binar Car Rental | ${car.name}`}</title>
        <meta
          name="description"
          content={`Binar Car Rental, Sewa ${car.name} sekarang`}
        />
      </Helmet>
      {contextHolder}
      <div className="header-exclude-hero">
        <Navbar />
      </div>
      <SearchBar />
      <div className="car-detail">
        <Terms />
        <div className="car-detail-card">
          <div className="car-detail-image">
            {car.image ? (
              <img src={car.image} onError={handleNotFound} />
            ) : (
              <img src={ERROR_SCR} />
            )}
          </div>
          <div className="car-name">
            <p>{car.name}</p>
            <CarType type={car.category} />
          </div>
          <div className="form-date">
            <p>Tentukan lama sewa mobil (max. 7 hari)</p>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#5cb85f",
                },
              }}
            >
              <RangePicker
                allowEmpty={[false, false]}
                popupStyle={{ color: "info" }}
                disabledDate={disabledDate}
                placeholder={["Pilih tanggal"]}
                onChange={(date, dateString) => handleChange(date, dateString)}
              />
            </ConfigProvider>
          </div>
          <div className="price-container">
            <p>Total:</p>
            <p>Rp. {formatedPrice(car.price)}</p>
          </div>
          {isLoading ? (
            <Spin />
          ) : (
            <button onClick={handleSubmit}>Lanjutkan Pembayaran</button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CarDetail;
