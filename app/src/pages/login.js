"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import paywise_logo from "../assets/paywise_logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleLogin() {
    const formData = {
      companyEmail: email,
      companyPassword: password,
    };
    console.log("Form Data: ", JSON.stringify(formData));

    fetch("https://paywise-backend.vercel.app/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Login failed");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        window.location.href = "/home";
      })
      .catch((error) => {
        console.error("Error:", error);
        setErrorMessage("Login failed. Please check your email and password.");
        setShowPopup(true);
      });
  }

  return (
    <div className="screen flex justify-center items-center h-screen w-screen">
      <div className="container w-[320px] flex flex-col pb-[30px] bg-[#ffffff] rounded-[8px] drop-shadow-2xl">
        <div className="header flex flex-col items-center gap-[9px] w-full mt-[30px]">
          <img src={paywise_logo} alt="Logo" className="w-[56px] w-[56px]" />
        </div>
        <div className="inputs flex flex-col mt-[24px] items-center">
          <div className="input mb-[24px]">
            <div className="text font-mono">Email</div>
            <input
              type="text"
              className="email w-[270px] h-[32px] border rounded-[4px] border-primary-500"
              placeholder="Enter your email here"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="input mb-[24px]">
            <div className="text font-mono">Password</div>
            <input
              type="text"
              className="password w-[270px] h-[32px] border rounded-[4px] border-primary-500"
              placeholder="Enter your password here"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
        </div>
        <div className="buttons flex flex-col items-center">
          <div
            className="button font-mono font-medium text-xl text-white bg-primary-500 rounded-[4px] flex w-[127px] h-[40px] justify-center items-center cursor-pointer mb-[24px]"
            onClick={handleLogin}
          >
            Login
          </div>
          <div className="signup text-[#797979] text-xs">
            Don't have account?{" "}
            <Link
              to="/signup"
              className="text-primary-700 cursor-pointer font-semibold underline "
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="popup fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="popup-content bg-white p-5 rounded">
            <p>{errorMessage}</p>
            <button
              className="mt-2 bg-primary-500 text-white px-4 py-2 rounded"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
