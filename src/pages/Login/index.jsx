import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postLogin } from "../../redux/features/loginSlice";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "./style.css";
import Logo from "../../assets/logo.png";
import { notification, Spin } from "antd";

const Login = () => {
  const [loginPayload, setloginPayload] = useState({
    email: "",
    password: "",
  });
  const [api, contextHolder] = notification.useNotification();
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.login);
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setloginPayload({ ...loginPayload, [name]: value });
  };

  const handleLogin = () => {
    if (loginPayload.email === "" || loginPayload.password === "") {
      api["error"]({
        message: "Upps!!",
        description: "Isi semua field, jangan sampai kosong ya!!!",
      });
    } else {
      dispatch(postLogin(loginPayload))
        .unwrap()
        .then((response) => {
          // handle successful login
          console.log(response);
          const queryParams = new URLSearchParams(location.search);
          const source = queryParams.get("source");
          if (source === null) navigate(`/`);
          else navigate(`/${source}`);
        })
        .catch((error) => {
          // handle error
          console.log(error);
          api["error"]({
            message: "Upps!!",
            description:
              "Sepertinya ada yang salah dengan email atau password mu, cek kembali ya!!!",
          });
        });
    }
  };

  // useEffect(() => {
  //   if (loginState.success === true) {
  //   } else if (loginState.success === false) {
  //   }
  // }, [loginState]);

  return (
    <div className="login-container">
      {contextHolder}
      <div className="left-login">
        <div className="left-login-container">
          {/* modal === true ? <PopUpModal> : */}
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
            {loginState.loading ? (
              <div className="login-loader">
                <Spin />
              </div>
            ) : (
              <button onClick={handleLogin}>Sign In</button>
            )}
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
        <div className="right-login-container"></div>
      </div>
    </div>
  );
};

export default Login;
