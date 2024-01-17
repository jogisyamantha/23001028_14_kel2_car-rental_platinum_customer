import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Progress from "../../components/Progress";
import OrderDetail from "./OrderDetail";
import PriceList from "./PriceList";
import BankList from "./bankList";
import "./style.css";

const Order = () => {
  return (
    <div>
      <Navbar />
      <Progress />
      <OrderDetail />
      <div className="order-flexbox">
        <BankList />
        <PriceList />
      </div>
      <Footer />
    </div>
  );
};

export default Order;
