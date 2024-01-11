import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";
import Terms from "./terms";
import "./styles.css";

const CarDetail = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <div className="car-detail">
        <Terms />
        <div className="car-detail-card">
          <div className="car-detail-image">
            <img alt="car-image" />
          </div>
          <div className="car-name">
            <p>Car Name</p>
            <p>Car Type</p>
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
            <p>Price</p>
          </div>
          <button>Lanjutkan Pembayaran</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CarDetail;
