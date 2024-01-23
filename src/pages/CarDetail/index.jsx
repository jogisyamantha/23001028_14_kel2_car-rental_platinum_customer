import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";
import Terms from "./terms";
import "./styles.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { carById } from "../../redux/features/carDetailSlice";
import { IoPeopleOutline } from "react-icons/io5";

const CarDetail = () => {
  const ERROR_SCR =
    "https://placehold.jp/c2c2c2/ffffff/286x160.png?text=%E2%9B%9F&css=%7B%22border-radius%22%3A%22%208px%22%7D";
  const param = useParams();
  const dispatch = useDispatch();
  const { car } = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(carById(param.id));
  }, []);

  const handleNotFound = (event) => {
    event.target.src = ERROR_SCR;
    event.target.onerror = null;
  };

  const CarType = (props) => {
    if (props.type == "small") {
      return (
        <div className="type-flex">
          <IoPeopleOutline style={{ width: 12, height: 12 }} />
          <p>2-4 orang</p>
        </div>
      );
    } else if (props.type == "medium") {
      return (
        <div className="type-flex">
          <IoPeopleOutline style={{ width: 12, height: 12 }} />
          <p>4-6 orang</p>
        </div>
      );
    } else if (props.type == "large") {
      return (
        <div className="type-flex">
          <IoPeopleOutline style={{ width: 12, height: 12 }} />
          <p>6-8 orang</p>
        </div>
      );
    }
  };

  return (
    <div>
      <Navbar />
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
            <input
              type="date"
              placeholder="Pilih tanggal mulai dan tanggal akhir sewa"
            />
          </div>
          <div className="price-container">
            <p>Total:</p>
            <p>Rp. {car.price}</p>
          </div>
          <button disabled>Lanjutkan Pembayaran</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CarDetail;
