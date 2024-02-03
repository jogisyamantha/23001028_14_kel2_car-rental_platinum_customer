import "./style.css";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen, toggle }) => {
  const token = localStorage.getItem("access_token");
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/");
  };

  const sidebarClass = isOpen ? "sidebar open" : "sidebar";
  const sidebarContent = isOpen
    ? "sidebar-content-open"
    : "sidebar-content-close";

  return (
    <div className={sidebarClass}>
      <div className={sidebarContent}>
        <div className="sidebar-top ">
          <div>BCR</div>
          <button className="sidebar-close" onClick={toggle}>
            X
          </button>
        </div>
        <div>
          <a href="#our-service">Our Services</a>
        </div>
        <div>
          <a href="#why-us">Why Us</a>
        </div>
        <div>
          <a href="#testimonial">Testimonial</a>
        </div>
        <div>
          <a href="#faq">FAQ</a>
        </div>
        <div>
          {token ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <button onClick={handleLogin}>Login</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
