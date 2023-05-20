import React, { useState } from "react";
import "./Login.css";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // const handleLogin = () => {
  //   console.log("Email:", email);
  //   console.log("Password:", password);

  //   if(email==='amar@123' && password==='123')
  //   {
  //        console.log("Login Sucessfull");
  //       window.location.href('/home');
  //   }
  //   else
  //   {
  //       console.log('acess denied');
  //   }
  // };

  return (
    <Container fluid className="contaier">
      <div className="login-container">
        <h2>Login Register</h2>
        <form>
          <div className="form-group">
            <input
              placeholder="Enter your email/username"
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <h6>
              <input type="checkbox" /> Remind me
            </h6>
            <h6>Forgot Password</h6>
          </div>

          <Button href="/home" type="button">
            Login
          </Button>
        </form>
        <h6>Login with social platform</h6>
        <FaGoogle size={32} />
        <FaFacebook size={32} />
      </div>
    </Container>
  );
};

export default Login;
