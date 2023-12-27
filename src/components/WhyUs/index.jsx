import WhyUsCard from "../WhyUsCard";
import "./style.css";
import { whyUsData } from "../../datas/WhyUsData";

const WhyUs = () => {
  return (
    <div id="why-us" className="whyus-container container-section">
      <div className="whyus-header">Why Us?</div>
      <p>Mengapa harus pilih Binar Car Rental?</p>
      <div className="whyus-card-container">
        {whyUsData.map((item, index) => (
          <WhyUsCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
