import Success from "../../assets/assets-ticketPage/success.png";
import Download from "../../assets/assets-ticketPage/download.png";
import Progress from "../../components/Progress";
import Navbar from "../../components/Navbar";
import pdfDummy from "./success-payment.pdf";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { getFilePlugin } from "@react-pdf-viewer/get-file";

const WORKER_URL = `https://unpkg.com/pdfjs-dist@2.1.266/build/pdf.worker.min.js`;
const Ticket = () => {
  const getFilePluginInstance = getFilePlugin();

  return (
    <>
      <div className="header-payment">
        <Navbar />
        <Progress progress={3} />
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
                <a className="btn d-flex gap-2 border-primary rounded-1" href={pdfDummy} style={{ color: "#0D28A6" }}>
                  <img src={Download} alt="download" style={{ width: 20 }} className="m-auto" />
                  <h5 className="fs-6 m-auto">
                    <b>Unduh</b>
                  </h5>
                </a>
              </div>
            </div>
            <div className="m-auto rounded-1" style={{ background: "#EEE", width: "100%", height: 400, border: "1px dashed var(--neutral-02, #D0D0D0)" }}>
              <Worker workerUrl={WORKER_URL}>
                <Viewer plugins={[getFilePluginInstance]} fileUrl={pdfDummy} />
              </Worker>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticket;
