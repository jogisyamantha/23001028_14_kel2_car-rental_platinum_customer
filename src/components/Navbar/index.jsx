import { useState } from "react";
import logo from "../../assets/logo.png";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";

const Navbar = () => {
  const token = localStorage.getItem("access_token");
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/");
  };

  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  const handleSideBar = () => {
    setIsOpenSideBar(!isOpenSideBar);
    console.log(isOpenSideBar);
  };

  return (
    <>
      <div className="navbar-container">
        <img src={logo} alt="dummy-logo" />
        <div>
          <a href="#our-service">Our Services</a>
          <a href="#why-us">Why Us</a>
          <a href="#testimonial">Testimonial</a>
          <a href="#faq">FAQ</a>
          {token ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <button onClick={handleLogin}>Login</button>
          )}
        </div>
      </div>
      <div className="navbar-side">
        <button onClick={handleSideBar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 18H21"
              stroke="#222222"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 12H21"
              stroke="#222222"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 6H21"
              stroke="#222222"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <Sidebar isOpen={isOpenSideBar} toggle={handleSideBar} />
    </>
  );
};

export default Navbar;
