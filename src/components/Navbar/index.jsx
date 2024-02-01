import logo from "../../assets/logo.png";
import "./styles.css";
import { useNavigate, useLocation, Link } from "react-router-dom";

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
        <a>Our Services</a>
        <a>Why Us</a>
        <a>Testimonial</a>
        <a>FAQ</a>
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
