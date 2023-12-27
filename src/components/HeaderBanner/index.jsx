import "./style.css";
import car from "../../assets/images/img_car.png";
import Button from "../Button";

const HeaderBanner = () => {
  return (
    <div className="header-banner-container">
      <div className="header-banner-container-left">
        <div className="header-banner-title">
          Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
        </div>
        <p>
          Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
          terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
          untuk sewa mobil selama 24 jam.
        </p>
        <Button name={"Mulai Sewa Mobil"} to={"/search-car"}></Button>
      </div>
      <img src={car} alt="" />
    </div>
  );
};

export default HeaderBanner;
