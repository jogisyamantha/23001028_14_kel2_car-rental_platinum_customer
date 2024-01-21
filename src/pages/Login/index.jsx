import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postLogin } from "../../redux/features/loginSlice";
import { useNavigate, useLocation } from "react-router-dom";

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
    <div>
      <label>Email:</label>
      <input name="email" type="text" onChange={handleOnChange} />
      <label>Password:</label>
      <input name="password" type="password" onChange={handleOnChange} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
