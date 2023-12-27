import { FaArrowLeft } from "react-icons/fa6";
import PaymentFlow from "../../assets/assets-ticketPage/PaymentFlow.png";
import Success from "../../assets/assets-ticketPage/success.png";
import Download from "../../assets/assets-ticketPage/download.png";
import Image from "../../assets/assets-ticketPage/image.png";

const Ticket = () => {
  return (
    <>
      <div style={{ background: "#f1f3ff" }}>
        <div className="d-flex pt-4 m-auto" style={{ width: "62%" }}>
          <div className="container d-flex gap-3">
            <FaArrowLeft className="mt-2" />
            <div>
              <h3>
                <b>Tiket</b>
              </h3>
              <p>Order ID: xxxxxxxx</p>
            </div>
          </div>
          <div>
            <img src={PaymentFlow} alt="Payment-Flow" style={{ width: 300 }} />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="d-flex flex-column justify-content-center align-items-center gap-3 fw-light" style={{ width: "100%" }}>
          <img src={Success} alt="" />
          <h3>
            <b>Pembayaran Berhasil!</b>
          </h3>
          <p>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
          <div></div>
        </div>
        <div className="d-flex flex-column border rounded-2 m-auto" style={{ width: "35%" }}>
          <div className="m-auto p-4" style={{ width: "90%" }}>
            <div className="d-flex justify-content-between">
              <div>
                <h5>
                  <b>Invoice</b>
                </h5>
                <p>*no invoice</p>
              </div>
              <div>
                <button className="btn d-flex gap-2 border-primary rounded-1" style={{ color: "#0D28A6" }}>
                  <img src={Download} alt="download" style={{ width: 20 }} className="m-auto" />
                  <h5 className="fs-6 m-auto">
                    <b>Unduh</b>
                  </h5>
                </button>
              </div>
            </div>
            <div className="m-auto rounded-1" style={{ background: "#EEE", width: "100%", height: 200, border: "1px dashed var(--neutral-02, #D0D0D0)" }}>
              <div className="d-flex justify-content-center gap-3 align-items-center" style={{ height: "100%" }}>
                <img src={Image} alt="" className="d-flex align-items-center" style={{ width: 25, height: 30 }} />
                PDF Viewer
                <img />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticket;
