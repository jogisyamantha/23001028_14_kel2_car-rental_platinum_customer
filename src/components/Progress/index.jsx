import { IoMdArrowBack } from "react-icons/io";
import "./style.css";
const Progress = () => {
  return (
    <div className="progress-container">
      <div className="back-navigation">
        <IoMdArrowBack size={24} />
        <h3>Pembayaran</h3>
      </div>
      <div className="steps">
        <div>
          <div className="number">
            <p>1</p>
          </div>
          <p>Pilih Metode</p>
        </div>
        <div>
          <div className="number">
            <p>2</p>
          </div>
          <p>Bayar</p>
        </div>
        <div>
          <div className="number">
            <p>3</p>
          </div>
          <p>Tiket</p>
        </div>
      </div>
    </div>
  );
};

export default Progress;
