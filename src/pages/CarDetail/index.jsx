import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";
import Terms from "./terms";
import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";

const CarDetail = () => {
  const [car, setCar] = useState([]);

  useEffect(() => {
    carById();
  }, []);

  const carById = () => {
    axios
      .get(`https://api-car-rental.binaracademy.org/customer/car/3208`)
      .then((res) => {
        console.log(res.data);
        setCar(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
