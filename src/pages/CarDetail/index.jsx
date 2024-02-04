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
import {
  createOrder,
  setCurrentDataPayLoadOrder,
} from "../../redux/features/createOrderSlice";
import { DatePicker, notification, ConfigProvider, Spin } from "antd";
import dayjs from "dayjs";
import { Helmet } from "react-helmet";

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

  const [value, setValue] = useState(null);
  const [disabled] = useState(true);

  useEffect(() => {
    dispatch(carById(param.id));
  }, []);

  const handleNotFound = (event) => {
    event.target.src = ERROR_SCR;
    event.target.onerror = null;
  };

  const disabledDate = (current) => {
    const yesterday = current < dayjs().startOf("day");
    return yesterday;
  };

  const formatedPrice = (item) => {
    return new Intl.NumberFormat("id-ID").format(item);
  };

  const handleSubmit = () => {
    if (value == null) {
      api.error({
        message: "Error!!",
        description: "Silahkan isi tanggal sewa",
      });
    } else {
      const payload = {
        start_rent_at: value[0].format("YYYY-MM-DD"),
        finish_rent_at: value[1].format("YYYY-MM-DD"),
        car_id: car.id,
      };
      dispatch(createOrder(payload)).then((response) => {
        const id = response.payload.id;
        dispatch(setCurrentDataPayLoadOrder(payload));
        navigate(`/order/${id}`);
      });
    }
  };

  return (
    <div>
      <Helmet>
        <title>{`Sewa ${car.name} sekarang`}</title>
        <meta
          name="description"
          content={`Binar Car Rental, Sewa ${car.name} sekarang`}
        />
      </Helmet>
      {contextHolder}
      <div className="header-exclude-hero">
        <Navbar />
      </div>
      <SearchBar disabled={disabled} />
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
                disabledDate={disabledDate}
                placeholder={["Pilih tanggal"]}
                onChange={setValue}
                value={value}
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
