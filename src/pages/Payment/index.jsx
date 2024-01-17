import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Progress from "../../components/Progress";
import BankTransfer from "./BankTransfer";
import "./style.css";

const Payment = () => {
  return (
    <>
      <Navbar />
      <Progress />
      <div className="payment-flexbox">
        <div>
          <div className="countdown-container card">
            <div>
              <h3>Selesaikan Pembayaran Sebelum</h3>
              <p>Rabu, 14 Agustus 2022</p>
            </div>
            <div>23:59</div>
          </div>
          <BankTransfer />
        </div>
        <div className="confirmation card">
          <p>Klik konfirmasi pembayaran untuk mempercepat proses pengecekan</p>
          <button>Konfirmasi Pembayaran</button>
          <div>
            <div className="countdown-container">
              <h3>Konfirmasi Pembayaran</h3>
              <p>10:00</p>
            </div>

            <p>
              Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu
              akan segera kami cek tunggu kurang lebih 10 menit untuk
              mendapatkan konfirmasi.
            </p>
            <div>
              <p>Upload Bukti Pembayaran</p>
              <p>
                Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa
                upload bukti bayarmu
              </p>
            </div>
            <div className="preview-slip"></div>
            <button>Upload</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
