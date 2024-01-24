import "./style.css";
import Accordion from "../Accordion";
// import { faqData } from "../../datas/FAQData";

const FAQ = () => {
  const faqData = [
    {
      id: 0,
      title: "Apa saja syarat yang dibutuhkan?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 1,
      title: "Berapa hari minimal sewa mobil lepas kunci?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      title: "Berapa hari sebelumnya sabaiknya booking sewa mobil?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      title: "Apakah Ada biaya antar-jemput?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      title: "Bagaimana jika terjadi kecelakaan?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

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
