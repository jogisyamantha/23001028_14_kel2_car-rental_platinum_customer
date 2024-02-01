import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postRegister } from "../../redux/features/registerSlice";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { notification, Spin } from "antd";

const Register = () => {
  const [registerPayload, setRegisterPayload] = useState({
    name: "",
    email: "",
    password: "",
    role: "admin",
  });

  const [api, contextHolder] = notification.useNotification();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registerState = useSelector((state) => state.register);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setRegisterPayload({ ...registerPayload, [name]: value });
  };

  const handleRegister = () => {
    if (
      registerPayload.email === "" ||
      registerPayload.password === "" ||
      registerPayload.name === ""
    ) {
      api["error"]({
        message: "Upps!!",
        description: "Isi semua field, jangan sampai kosong ya!!!",
      });
    } else {
      dispatch(postRegister(registerPayload))
        .unwrap()
        .then((res) => {
          // handle successful login
          navigate(`/login`);
        })
        .catch((error) => {
          // handle error
          api["error"]({
            message: "Register Failed",
            description: error,
          });
        });
    }
  };

  return (
    <div className="login-container">
      {contextHolder}
      <div className="left-login">
        <div className="left-login-container">
          <div>
            <img src={Logo} alt="dummy-logo" />
          </div>
          <div className="login-title">Sign Up</div>
          <div className="login-form">
            <div className="login-form-input">
              <label>Name*</label>
              <input
                name="name"
                type="text"
                placeholder="Nama Lengkap"
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="login-form-input">
              <label>Email*</label>
              <input
                name="email"
                type="text"
                placeholder="Contoh: johndee@gmail.com"
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="login-form-input">
              <label>Create Password*</label>
              <input
                name="password"
                type="password"
                placeholder="6+ Karakter"
                onChange={handleOnChange}
                required
              />
            </div>
          </div>
          <div>
            {registerState.loading ? (
              <div className="login-loader">
                <Spin />
              </div>
            ) : (
              <button onClick={handleRegister}>Sign In</button>
            )}
          </div>
          <div className="login-register-container">
            <div>Already have an account? </div>
            <div>
              <Link to={"/login"} className="login-link">
                Sign In here
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

export default Register;
