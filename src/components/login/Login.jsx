import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    // <div className="login">
    <div className="loginWrapper">
      <div className="loginLeft">
        <h1 className="loginLogo">
          {" "}
          <i class="fas fa-laptop-code"></i> Dev.Connector
        </h1>
        <span className="loginDesc">
          Create your profile, share posts and get help from other developers
        </span>
      </div>
      <div className="loginRight">
        <div className="loginBox">
          <input placeholder="Email" className="loginInput" />
          <input placeholder="Password" className="loginInput" />
          <button className="loginButton">Log In</button>
          <span className="loginForgot">Forgot Password? Reset Password</span>
          {/* <button className="loginRegisterButton">Create a New Account</button> */}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Login;
