import { FaCheck } from "react-icons/fa";
import "./style.css";

const BankList = (props) => {
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
          <label htmlFor="bank1">
            BCA Transfer
            <input
              onChange={props.handleCheck}
              id="bank1"
              name="bank"
              type="radio"
            />
            <FaCheck className="green hidden" />
          </label>
        </div>
        <hr />
        <div className="option-bank">
          <p>BNI</p>
          <label htmlFor="bank2">
            BNI Transfer
            <input
              onChange={props.handleCheck}
              id="bank2"
              name="bank"
              type="radio"
            />
            <FaCheck className="green hidden" />
          </label>
        </div>
        <hr />
        <div className="option-bank">
          <p>Mandiri</p>
          <label htmlFor="bank3">
            Mandiri Transfer
            <input
              onChange={props.handleCheck}
              id="bank3"
              name="bank"
              type="radio"
            />
            <FaCheck className="green hidden" />
          </label>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default BankList;
