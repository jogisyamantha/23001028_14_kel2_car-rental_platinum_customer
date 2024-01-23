import Navbar from "../Navbar";
import HeaderBanner from "../HeaderBanner";
import "./style.css";

const Header = ({ hasBanner }) => {
  return (
    <div className="header-container">
      <Navbar />
      {/* <div>{hasBanner && <HeaderBanner />}</div> */}
    </div>
  );
};

export default Header;
