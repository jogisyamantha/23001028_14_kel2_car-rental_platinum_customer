import "./style.css";
import car from "../../assets/assets-homepage/img_car.png";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Hero = ({ isShowButton = true, marginTop = true }) => {
  const navigate = useNavigate();

  const handleCarList = () => {
    navigate("/car-list");
  };

  return (
    <div className={"header-banner-container"}>
      <div className="header-banner-container-left">
        <div className="header-banner-title">
          Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
        </div>
        <p>
          Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
          terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
          untuk sewa mobil selama 24 jam.
        </p>
        <div>
          {isShowButton && (
            <button onClick={handleCarList}>Mulai Sewa Mobil</button>
          )}
        </div>
      </div>
      <img src={car} alt="" />
    </div>
  );
};

export default Hero;
