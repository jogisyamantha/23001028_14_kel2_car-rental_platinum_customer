import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postLogin, setLoading } from "../../redux/features/loginSlice";
import {
  createOrder,
  setCurrentDataPayLoadOrder,
} from "../../redux/features/createOrderSlice";
import { useNavigate, Link } from "react-router-dom";
import "./style.css";
import Logo from "../../assets/logo.png";
import { notification, Spin } from "antd";
import { Helmet } from "react-helmet";

const Login = () => {
  const [loginPayload, setloginPayload] = useState({
    email: "",
    password: "",
  });
  const [api, contextHolder] = notification.useNotification();
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.login);
  const orderState = useSelector((state) => state.createOrder);
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
        .then((res) => {
          if (orderState.currentDataPayloadOrder !== null) {
            dispatch(createOrder(orderState.currentDataPayloadOrder))
              .unwrap()
              .then((res) => {
                console.log(res);
                const id = res.id;
                navigate(`/order/${id}`);
                dispatch(setLoading(false));
                dispatch(setCurrentDataPayLoadOrder(null));
              })
              .catch((err) => {
                console.log(err);
              });
          } else {
            navigate("/");
            dispatch(setLoading(false));
          }
        })
        .catch((error) => {
          api["error"]({
            message: "Upps!!",
            description:
              "Sepertinya ada yang salah dengan email atau password mu, cek kembali ya!!!",
          });
        });
    }
  };

  return (
    <div className="login-container">
      <Helmet>
        <title>Login | Binar Car Rental </title>
        <meta
          name="description"
          content="Binar Car Rental, Login dengan akunmu"
        />
      </Helmet>
      {contextHolder}
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
              <Link to={"/register"} className="login-link">
                Sign up for free
              </Link>
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
