import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";
import Terms from "./terms";
import "./styles.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { carById } from "../../redux/features/carDetailSlice";

const CarDetail = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const { car } = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(carById(param.id));
  }, []);

  return (
    <div>
      <Navbar />
      <SearchBar />
      <div className="car-detail">
        <Terms />
        <div className="car-detail-card">
          <div className="car-detail-image">
            <img src={car.image} alt="car-image" />
          </div>
          <div className="car-name">
            <p>{car.name}</p>
            <p>{car.category}</p>
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
            <p>{car.price}</p>
          </div>
          <button>Lanjutkan Pembayaran</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CarDetail;
