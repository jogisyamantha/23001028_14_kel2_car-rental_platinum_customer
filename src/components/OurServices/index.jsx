import imgService from "../../assets/assets-homepage/img_service.png";
import "./style.css";
import iconTick from "../../assets/assets-homepage/icon_tick.png";

const OurServices = () => {
  const ourServiceDatas = [
    "Sewa Mobil Dengan Supir di Bali 12 Jam",
    "Sewa Mobil Lepas Kunci di Bali 24 Jam",
    "Sewa Mobil Jangka Panjang Bulanan",
    "Gratis Antar - Jemput Mobil di Bandara",
    "Layanan Airport Transfer / Drop In Out",
  ];

  return (
    <div id="our-service" className="our-service-container container-section">
      <img src={imgService} alt="" />
      <div className="our-service-container-right">
        <div className="our-service-title">
          Best Car Rental for any kind of trip in (Lokasimu)!
        </div>
        <p className="our-service-desc ">
          Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih
          murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
          pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
          dll.
        </p>
        <div className="our-service-list-container">
          {ourServiceDatas.map((item, id) => (
            <div key={id} className="our-service-list">
              <img src={iconTick} alt="" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
