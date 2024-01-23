import WhyUsCard from "../WhyUsCard";
import "./style.css";
// import { whyUsData } from "../../datas/WhyUsData";

const WhyUs = () => {
  const whyUsData = [
    {
      icon: "../../src/assets/assets-homepage/icon_complete.png",
      title: "Mobil Lengkap",
      desc: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
    },
    {
      icon: "../../src/assets/assets-homepage/icon_professional.png",
      title: "Harga Murah",
      desc: "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
    },
    {
      icon: "../../src/assets/assets-homepage/icon_24hrs.png",
      title: "Layanan 24 Jam",
      desc: "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
    },
    {
      icon: "../../src/assets/assets-homepage/icon_professional.png",
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
          <WhyUsCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
