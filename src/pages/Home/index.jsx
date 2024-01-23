import "./style.css";
import Footer from "../../components/Footer";
import WhyUs from "../../components/WhyUs";
import Banner from "../../components/Banner";
import FAQ from "../../components/FAQ";
import OurServices from "../../components/OurServices";
import Header from "../../components/Header";
import Testimony from "../../components/Testimony";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <div className="landing-page-container">
      <div className="header">
        <Navbar />
        <h1>Hero</h1>
      </div>
      <OurServices />
      <WhyUs />
      <Testimony />
      <Banner />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
