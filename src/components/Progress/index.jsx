import { IoMdArrowBack } from "react-icons/io";
const Progress = () => {
  return (
    <div className="progress">
      <div className="back">
        <IoMdArrowBack />
        <h3>Pembayaran</h3>
      </div>
      <div className="steps">
        <div>
          <p>1</p>
          <p>Pilih Metode</p>
        </div>
        <div>
          <p>2</p>
          <p>Bayar</p>
        </div>
        <div>
          <p>3</p>
          <p>Tiket</p>
        </div>
      </div>
    </div>
  );
};

export default Progress;
