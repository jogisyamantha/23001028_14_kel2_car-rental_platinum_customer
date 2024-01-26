import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Progress from "../../components/Progress";
import BankTransfer from "./BankTransfer";
import { slipUpload } from "../../redux/features/slipUploadSlice";
import { CiImageOn } from "react-icons/ci";
import { Statistic } from "antd";
import "./style.css";
import dayjs from "dayjs";

const Payment = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [file, setFile] = useState(null);
  const [prevFile, setPrevFile] = useState(null);
  const [isDisplay, setIsDisplay] = useState(false);
  const { Countdown } = Statistic;
  const dispatch = useDispatch();
  const { id } = useParams();

  const deadline = dayjs().add(1, "day");
  const deadlineHour = dayjs().add(1, "day").format("HH:mm");
  const deadlineMinute = dayjs().add(10, "minute");

  const handleFile = (event) => {
    const file = event.target.files[0];
    setFile(file);
    setPrevFile(URL.createObjectURL(file));
    setIsDisplay(true);
  };

  const handleUpload = () => {
    const form = new FormData();
    form.append("slip", file);

    dispatch(slipUpload(id, form));
  };

  return (
    <>
      <Navbar />
      <Progress orderId={id} />
      <div className="payment-flexbox">
        <div>
          <div className="countdown-container card">
            <div>
              <h3>Selesaikan Pembayaran Sebelum</h3>
              <p>
                {deadline.format("dddd, DD MMM YYYY")} jam {deadlineHour} WIB
              </p>
            </div>
            <Countdown
              value={deadline}
              valueStyle={{
                fontSize: "18px",
                backgroundColor: "red",
                color: "white",
              }}
            />
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
                <Countdown
                  value={deadlineMinute}
                  format="mm : ss"
                  valueStyle={{
                    fontSize: "14px",
                    backgroundColor: "red",
                    color: "white",
                  }}
                />
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
              <button onClick={handleUpload}>Upload</button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Payment;
