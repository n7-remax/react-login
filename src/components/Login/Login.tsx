import { useState } from "react";
import logo from "../../assets/logo.svg";

const REGEXP = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Login = () => {
  const [password, setPassword] = useState<string>("");
  const [passwordBlur, setPasswordBlur] = useState<Boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [emailBlur, setEmailBlur] = useState<Boolean>(false);

  const onPasswordBlur = () => {
    setPasswordBlur(true);
  };
  const onPasswordFocus = () => {
    setPasswordBlur(false);
  };
  const onEmailBlur = () => {
    setEmailBlur(true);
  };
  const onEmailFocus = () => {
    setEmailBlur(false);
  };
  console.log("emailBLur",emailBlur);
  console.log("regexp",REGEXP.test(email));
  return (
    <div className="login">
      <div className="logo">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="sign-in">
        <div className="sign-up">
          <h1>Sign In</h1>
          <p>
            Don’t have an Xcellerate account? <a href="#">Sign up now</a>
          </p>
        </div>
        <div className="form">
          <div className="input">
            <label>Email</label>
            <input
              className={
                !REGEXP.test(email) && email?.length !== 0 && emailBlur
                  ? "error"
                  : REGEXP.test(email) && emailBlur
                  ? "complete"
                  : ""
              }
              type="email"
              value={email}
              onFocus={onEmailFocus}
              onBlur={onEmailBlur}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div
              className={
                !REGEXP.test(email) && email?.length !== 0 && emailBlur
                  ? "error-password"
                  : "display-none"
              }
            >
              Invalid email
            </div>
          </div>
          <div className="input">
            <label>Password</label>
            <input
              className={
                password?.length < 4 && password?.length !== 0 && passwordBlur
                  ? "error"
                  : password?.length > 3 && password?.length !== 0 && passwordBlur? "complete":""
              }
              maxLength={35}
              value={password}
              onBlur={onPasswordBlur}
              onFocus={onPasswordFocus}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
            <a href="#">Forgot your password?</a>
            <div
              className={
                password?.length < 4 && password?.length !== 0 && passwordBlur
                  ? "error-password"
                  : "display-none"
              }
            >
              Invalid format too short
            </div>
          </div>
          <div
            className={
              email.length !== 0 && password.length !== 0 && password?.length > 3 && REGEXP.test(email)
                ? "btn"
                : "btn disabled"
            }
          >
            Sign in
          </div>
        </div>
      </div>
      <div className="links">
        <a href="#">Contact</a>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
      </div>
    </div>
  );
};

export default Login;
