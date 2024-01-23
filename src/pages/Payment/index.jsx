import { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Progress from "../../components/Progress";
import BankTransfer from "./BankTransfer";
import { CiImageOn } from "react-icons/ci";
import "./style.css";

const Payment = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [file, setFile] = useState(null);
  const [prevFile, setPrevFile] = useState(null);
  const [isDisplay, setIsDisplay] = useState(false);

  const handleFile = (event) => {
    const file = event.target.files[0];
    setFile(file);
    setPrevFile(URL.createObjectURL(file));
    setIsDisplay(true);
  };

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
        {!isConfirmed && (
          <div className="confirmation card">
            <p>
              Klik konfirmasi pembayaran untuk mempercepat proses pengecekan
            </p>
            <button onClick={() => setIsConfirmed(true)}>
              Konfirmasi Pembayaran
            </button>
          </div>
        )}
        {isConfirmed && (
          <div className="confirmation card">
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
                <p id="title-upload">Upload Bukti Pembayaran</p>
                <p>
                  Untuk membantu kami lebih cepat melakukan pengecekan. Kamu
                  bisa upload bukti bayarmu
                </p>
              </div>
              <div className="preview-slip">
                {isDisplay && (
                  <img src={prevFile} alt="preview" style={{ width: "100%" }} />
                )}
                {!isDisplay && (
                  <label id="label" htmlFor="image-upload">
                    <CiImageOn style={{ width: 24, height: 24 }} />
                    <input
                      id="image-upload"
                      type="file"
                      onChange={handleFile}
                      style={{ display: "none" }}
                    />
                  </label>
                )}
              </div>
              <button>Upload</button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Payment;
