import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Progress from "../../components/Progress";
import PriceList from "./PriceList";
import BankList from "./bankList";
import "./style.css";

const Payment = () => {
  return (
    <div>
      <Navbar />
      {/* <Progress /> */}
      <div className="order-detail">
        <h3>Detail Pesanan</h3>
        <div className="detail-container">
          <div>
            <p>Nama/Tipe Mobil</p>
            <p>mobil</p>
          </div>
          <div>
            <p>Kategori</p>
            <p>medium</p>
          </div>
          <div>
            <p>Tanggal Mulai Sewa</p>
            <p>01-01-2024</p>
          </div>
          <div>
            <p>Tanggal Akhir Sewa</p>
            <p>01-01-2024</p>
          </div>
        </div>
      </div>
      <BankList />
      <PriceList />
      <Footer />
    </div>
  );
};

export default Payment;
