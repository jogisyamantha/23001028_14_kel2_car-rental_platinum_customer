import { FaCheck } from "react-icons/fa";
import "./style.css";
import { useDispatch } from "react-redux";
import { setBank } from "../../redux/features/bankSlice";

const BankList = (props) => {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    props.handleCheck();
    dispatch(setBank(event.target.value));
  };
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
              onChange={handleChange}
              id="bank1"
              name="bank"
              type="radio"
              value="BCA"
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
              onChange={handleChange}
              id="bank2"
              name="bank"
              type="radio"
              value="BNI"
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
              onChange={handleChange}
              id="bank3"
              name="bank"
              type="radio"
              value="Mandiri"
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
