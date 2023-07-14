import React, { useState } from "react";
import "./index.css";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { FaFacebook, FaGoogle } from "react-icons/fa";

function Menu() {
  const [userLoginInfo, setUserLoginInfo] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const navigateToComponent = () => {
    navigate("/registration");
  };

  const handleLoginData = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get("http://localhost:5005/user");
      console.log(response.data);
      const registeredUsers = response.data;
      const { email, password } = userLoginInfo;
      const matchingUser = registeredUsers.find(
        (user) => user.email === email && user.password === password
      );
      if (matchingUser) {
        navigate("/");
        console.log("success");
      } else {
        console.log("Invalid User Credentials");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleLoginInfo = (event) => {
    const { name, value } = event.target;
    setUserLoginInfo((prevData) => ({
      ...userLoginInfo,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="menu-container">
        <div className="link-container">
          <button className="btn btn-danger icons2">
            <FaGoogle />
            <a href="https://accounts.google.com/signin">Login with Gmail</a>
          </button>
          <button className="btn btn-primary icons1">
            <FaFacebook />
            <a href="https://www.facebook.com/login/">Login with Facebook</a>
          </button>
        </div>
        <div className="login-form">
          <h3>Login to Shopify </h3>
          <form onSubmit={handleLoginData}>
            <input
              value={userLoginInfo.email}
              name="email"
              type="text"
              placeholder="Enter Email"
              onChange={handleLoginInfo}
            />
            <br />
            <input
              value={userLoginInfo.password}
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleLoginInfo}
            />
            <br />
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
      <div className="register-link">
        <div className="register">
          <button onClick={navigateToComponent}>Register Now</button>
        </div>
        <div className="forgot-password">Forgot Password</div>
      </div>
    </div>
  );
}

export default Menu;
