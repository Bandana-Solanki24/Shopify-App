import React, { useState } from "react";
import Footer from "../Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { FaFacebook, FaGoogle } from "react-icons/fa";
import "./index.css";

function Registration() {
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInput((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      const userInfo = {
        id: Date.now(),
        firstName: userInput.firstName,
        lastName: userInput.lastName,
        email: userInput.email,
        mobile: userInput.mobile,
        password: userInput.password,
        confirmPassword: userInput.confirmPassword,
        gender: userInput.gender,
      };

      const response = await axios.post("http://localhost:5005/user", userInfo);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const loginHandle = () => {
    navigate("/menu");
  };

  return (
    <>
      <div className="registration-container">
        <div className="link-container">
          <button className="btn btn-danger icons2">
            <FaGoogle />
            <a href="">Login with Gmail</a>
          </button>
          <button className="btn btn-primary icons1">
            <FaFacebook />
            <a href="">Login with Facebook</a>
          </button>
        </div>

        <div className="registration-form">
          <h1>Register to Shopify</h1>

          <form onSubmit={handleRegistration}>
            <div className="input-container">
              <div>
                <div>
                  <label className="label-element">First Name:</label>
                  <br />
                  <input
                    className="input-element form-control"
                    type="text"
                    placeholder="Enter First Name"
                    name="firstName"
                    value={userInput.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="label-element">Email:</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter Email"
                    className="input-element form-control"
                    name="email"
                    value={userInput.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="label-element">Password:</label> <br />
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="input-element form-control"
                    name="password"
                    value={userInput.password}
                    onChange={handleInputChange}
                  />
                </div>
                <label className="label-element">Gender:</label>

                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={userInput.gender === "female"}
                  onChange={handleInputChange}
                />
                <label htmlFor="female">Female</label>

                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={userInput.gender === "male"}
                  onChange={handleInputChange}
                />
                <label htmlFor="male">Male</label>
              </div>

              <div>
                <div>
                  <label className="label-element">Last Name:</label>
                  <br />
                  <input
                    className="input-element form-control"
                    type="text"
                    placeholder="Enter Last Name"
                    name="lastName"
                    value={userInput.lastName}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="label-element">Mobile:</label>
                  <br />
                  <input
                    className="input-element form-control"
                    type="text"
                    placeholder="Enter Mobile Number"
                    name="mobile"
                    value={userInput.mobile}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="label-element">Confirm Password:</label>
                  <br />
                  <input
                    className="input-element form-control"
                    type="password"
                    placeholder="Enter Confirm Password"
                    name="confirmPassword"
                    value={userInput.confirmPassword}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="button-container">
              <button className="register-button" type="submit">
                Register
              </button>
              <button onClick={loginHandle} className="login-button">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Registration;
