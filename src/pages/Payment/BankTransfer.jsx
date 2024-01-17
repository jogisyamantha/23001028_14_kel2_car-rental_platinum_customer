import "./style.css";
const BankTransfer = () => {
  return (
    <div>
      <div className="bank-account card">
        <h3>Lakukan Transfer Ke</h3>
        <div>
          <p>BCA</p>
          <p>
            BCA Transfer <br /> a.n Binar Car Rental
          </p>
        </div>
        <div className="bank-container">
          <label>Nomor Rekening</label>
          <input type="number" value="54104257877"></input>
        </div>
        <div className="bank-container">
          <label>Total Bayar</label>
          <input type="number" value="3500000"></input>
        </div>
      </div>
      <div className="transfer-instruction card">
        <h3>Instruksi Pembayaran</h3>
        <div className="instruction-option">
          <p>ATM BCA</p>
          <p>M-BCA</p>
          <p>BCA Klik</p>
          <p>Internet Banking</p>
        </div>
        <div className="instruction-list">
          <p>Masukkan kartu ATM, lalu PIN</p>
        </div>
      </div>
    </div>
  );
};

export default BankTransfer;
