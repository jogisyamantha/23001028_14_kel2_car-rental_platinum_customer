import "./style.css";
import Accordion from "../Accordion";
// import { faqData } from "../../datas/FAQData";

const FAQ = () => {
  const faqData = ["1", "2"];
  return (
    <div id="faq" className="faq-container container-section">
      <div className="faq-container-left">
        <div className="faq-container-title">Frequently Asked Question</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
      <div className="faq-container-right">
        {faqData.map((item, index) => (
          <Accordion key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
