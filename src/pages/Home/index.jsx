import "./style.css";
// import Footer from "../../components/Footer";
// import WhyUs from "../../components/WhyUs";
// import Banner from "../../components/Banner";
// import FAQ from "../../components/FAQ";
// import OurServices from "../../components/OurServices";
// import Testimony from "../../components/Testimony";
// import Navbar from "../../components/Navbar";
// import Hero from "../../components/Hero";
import { Helmet } from "react-helmet";
import { lazy } from "react";

const Footer = lazy(() => import("../../components/Footer"));
const Navbar = lazy(() => import("../../components/Navbar"));
const Hero = lazy(() => import("../../components/Hero"));
const WhyUs = lazy(() => import("../../components/WhyUs"));
const Banner = lazy(() => import("../../components/Banner"));
const FAQ = lazy(() => import("../../components/FAQ"));
const Testimony = lazy(() => import("../../components/Testimony"));
const OurServices = lazy(() => import("../../components/OurServices"));

const Home = () => {
  return (
    <div className="landing-page-container">
      <Helmet>
        <title>Binar Car Rental | Home </title>
        <meta
          name="description"
          content="Binar Car Rental, Sewa dan Rental terbaik di lokasimu"
        />
      </Helmet>
      <div className="header">
        <Navbar />
        <Hero />
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
