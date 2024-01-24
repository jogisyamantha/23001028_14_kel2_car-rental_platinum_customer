import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./style.css";
const Progress = ({ orderId }) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="progress-container">
      <div className="back-navigation">
        <IoMdArrowBack
          style={{ cursor: "pointer" }}
          onClick={handleBack}
          size={24}
        />
        <div>
          <h3>Pembayaran</h3>
          {orderId ? <p>ORDER ID: {orderId}</p> : null}
        </div>
      </div>
      <div className="steps">
        <div>
          <div className="number">
            <p>1</p>
          </div>
          <p>Pilih Metode</p>
        </div>
        <hr />
        <div>
          <div className="number">
            <p>2</p>
          </div>
          <p>Bayar</p>
        </div>
        <hr />
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
