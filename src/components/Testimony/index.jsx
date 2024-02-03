import "./style.css";
import Carousel from "../Carousel";

const Testimony = () => {
  return (
    <div id="testimonial" className="testimony-container container-section">
      <div className="testimony-container-top">
        <div className="testimony-container-title">Testimonial</div>
        <p>Berbagai review positif dari para pelanggan kami</p>
      </div>
      <div>
        <Carousel></Carousel>
      </div>
    </div>
  );
};

export default Testimony;
