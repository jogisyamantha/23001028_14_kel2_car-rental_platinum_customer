import WhyUsCard from "../WhyUsCard";
import "./style.css";
// import { whyUsData } from "../../datas/WhyUsData";
import mobilIcon from "../../../src/assets/assets-homepage/icon_complete.png";
import hargaIcon from "../../../src/assets/assets-homepage/icon_professional.png";
import layananIcon from "../../../src/assets/assets-homepage/icon_24hrs.png";
import sopirIcon from "../../../src/assets/assets-homepage/icon_professional.png";

const WhyUs = () => {
  const whyUsData = [
    {
      icon: mobilIcon,
      title: "Mobil Lengkap",
      desc: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
    },
    {
      icon: hargaIcon,
      title: "Harga Murah",
      desc: "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
    },
    {
      icon: layananIcon,
      title: "Layanan 24 Jam",
      desc: "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
    },
    {
      icon: sopirIcon,
      title: "Sopir Profesional",
      desc: "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
    },
  ];

  return (
    <div id="why-us" className="whyus-container container-section">
      <div className="whyus-header">Why Us?</div>
      <p>Mengapa harus pilih Binar Car Rental?</p>
      <div className="whyus-card-container">
        {whyUsData.map((item, index) => (
          // <WhyUsCard key={index} data={item} />
          <div className="whyus-card">
            <img src={item.icon} alt={item.title} />
            <div className="whyus-card-title">{item.title}</div>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
