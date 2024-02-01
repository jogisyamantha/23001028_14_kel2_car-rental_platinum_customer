import logo from "../../assets/logo.png";
import "./styles.css";
import { useNavigate } from "react-router-dom";

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

  return (
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
  );
};

export default Navbar;
