import "./style.css";

const BankList = () => {
  return (
    <div className="bank-card">
      <h3>Pilih Bank Transfer</h3>
      <p>
        Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau
        Mobile Banking
      </p>
      <div>
        <div className="option-bank">
          <p>BCA</p>
          <label>BCA Transfer</label>
          <input type="checkbox" />
        </div>
        <div className="option-bank">
          <p>BNI</p>
          <label>BNI Transfer</label>
          <input type="checkbox" />
        </div>
        <div className="option-bank">
          <p>Mandiri</p>
          <label>Mandiri Transfer</label>
          <input type="checkbox" />
        </div>
      </div>
    </div>
  );
};

export default BankList;
