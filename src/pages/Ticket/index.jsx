import Success from "../../assets/assets-ticketPage/success.png";
import Download from "../../assets/assets-ticketPage/download.png";
import Progress from "../../components/Progress";

import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
const Ticket = () => {
  const [file, setFile] = useState(null);
  const [timestamp, setTimestamp] = useState(Date.now());

  useEffect(() => {
    setFile(localStorage.getItem("slip"));
  }, []);

  useEffect(() => {
    setTimestamp(Date.now());
  }, [file]);

  // Fungsi untuk menangani unduhan gambar
  const handleDownload = () => {
    if (file) {
      const fileName = "slip_pembayaran.png"; // Atur nama file yang diunduh di sini
      const aTag = document.createElement("a");
      aTag.href = file;
      aTag.setAttribute("download", fileName);
      document.body.appendChild(aTag);
      aTag.click();
      document.body.removeChild(aTag);
    } else {
      console.error("File tidak tersedia untuk diunduh.");
    }
  };

  return (
    <>
      <div className="header-payment">
        <Navbar />
        <Progress progress={3} />
      </div>
      <div className="mt-5">
        <div
          className="d-flex flex-column justify-content-center align-items-center gap-3 fw-light"
          style={{ width: "100%" }}
        >
          <img src={Success} alt="" />
          <h3>
            <b>Pembayaran Berhasil!</b>
          </h3>
          <p>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
          <div></div>
        </div>
        <div
          className="d-flex flex-column border rounded-2 m-auto"
          style={{ width: "35%" }}
        >
          <div className="m-auto p-4" style={{ width: "90%" }}>
            <div className="d-flex justify-content-between">
              <div>
                <h5>
                  <b>Invoice</b>
                </h5>
                <p>*no invoice</p>
              </div>
              <div>
                <button
                  className="btn d-flex gap-2 border-primary rounded-1"
                  style={{ color: "#0D28A6" }}
                  onClick={handleDownload}
                >
                  <img
                    src={Download}
                    alt="download"
                    style={{ width: 20 }}
                    className="m-auto"
                  />
                  <h5 className="fs-6 m-auto">
                    <b>Unduh</b>
                  </h5>
                </button>
              </div>
            </div>
            <div
              className="m-auto rounded-1"
              style={{
                background: "#EEE",
                width: "100%",
                height: 200,
                border: "1px dashed var(--neutral-02, #D0D0D0)",
              }}
            >
              <img
                key={timestamp}
                src={file}
                style={{ width: "100%", height: "13rem" }}
                alt=""
              />
              <img />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticket;
