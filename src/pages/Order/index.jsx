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
import { Helmet } from "react-helmet";

const Order = () => {
  const [isChecked, setIsChecked] = useState(false);
  const order = useSelector((state) => state.getOrder.data);
  const dispatch = useDispatch();
  const param = useParams();

  useEffect(() => {
    dispatch(getOrder(param.id));
  }, []);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <Helmet>
        <title>Binar Car Rental | Order </title>
        <meta
          name="description"
          content="Binar Car Rental, Rincian pesananmu"
        />
      </Helmet>
      <div className="header-exclude-hero">
        <Navbar />
        <div className="progress-order-container">
          <Progress progress={1} />
          <OrderDetail order={order} />
        </div>
      </div>
      <div className="order-flexbox">
        <BankList handleCheck={handleCheck} />
        <PriceList isChecked={isChecked} order={order} />
      </div>
      <Footer />
    </div>
  );
};

export default Order;
