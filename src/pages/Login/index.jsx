import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postLogin } from "../../redux/features/loginSlice";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "./style.css";
import Logo from "../../assets/logo.png";
import LoginPage from "../../assets/assets-login/landingpage.png";

const Login = () => {
  const [loginPayload, setloginPayload] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.login);
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setloginPayload({ ...loginPayload, [name]: value });
  };

  const handleLogin = () => {
    dispatch(postLogin(loginPayload));
  };

  useEffect(() => {
    if (loginState.success) {
      const queryParams = new URLSearchParams(location.search);
      const source = queryParams.get("source");
      console.log("source", source);
      if (source === null) navigate(`/`);
      else navigate(`/${source}`);
    }
  }, [loginState]);

  return (
    <div className="login-container">
      <div className="left-login">
        <div className="left-login-container">
          <div>
            <img src={Logo} alt="dummy-logo" />
          </div>
          <div className="login-title">Welcome Back!</div>
          <div className="login-form">
            <div className="login-form-input">
              <label>Email</label>
              <input
                name="email"
                type="text"
                placeholder="Contoh: johndee@gmail.com"
                onChange={handleOnChange}
              />
            </div>
            <div className="login-form-input">
              <label>Password</label>
              <input
                name="password"
                type="password"
                placeholder="6+ Karakter"
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div>
            <button onClick={handleLogin}>Sign In</button>
          </div>
          <div className="login-register-container">
            <div>Don't have an account? </div>
            <div>
              <Link to={"/register"}>Sign up for free</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="right-login">
        <div className="right-login-container">
          <div className="right-login-title">Binar Car Rental</div>
          <div>
            <img src={LoginPage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
