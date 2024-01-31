import { useSelector, useDispatch } from "react-redux";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Progress from "../../components/Progress";
import OrderDetail from "./OrderDetail";
import PriceList from "./PriceList";
import BankList from "./BankList";
import { getOrder } from "../../redux/features/getOrderSlice";
import { useParams } from "react-router-dom";
import "./style.css";
import { useState, useEffect } from "react";

const Order = () => {
  const [isChecked, setIsChecked] = useState(false);
  const order = useSelector((state) => state.getOrder.data);
  const dispatch = useDispatch();
  const param = useParams();

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    dispatch(getOrder(param.id));
  }, []);

  // console.log(data.id);
  // console.log(order);

  return (
    <div>
      <Navbar />
      <Progress progress={1} />
      <OrderDetail order={order} />
      <div className="order-flexbox">
        <BankList handleCheck={handleCheck} />
        <PriceList isChecked={isChecked} order={order} />
      </div>
      <Footer />
    </div>
  );
};

export default Order;
