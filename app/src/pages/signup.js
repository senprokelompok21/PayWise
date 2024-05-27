"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import paywise_logo from "../assets/paywise_logo.png";

const Signup = () => {
  const options = [
    { label: "Industry", value: "Industry" },
    { label: "Technology", value: "Technology" },
    { label: "Property", value: "Property" },
  ];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [selectedSector, setSelectedSector] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleAddressChange(event) {
    setAddress(event.target.value);
  }
  function handleSelect(event) {
    setSelectedSector(event.target.value);
  }

  function handleSignup() {
    const formData = {
      companyEmail: email,
      companyPassword: password,
      companyName: name,
      companyAddress: address,
      companySector: selectedSector,
    };

    console.log("Form Data: ", JSON.stringify(formData));

    fetch("https://paywise-backend.vercel.app/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setShowPopup(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function handleClosePopup() {
    setShowPopup(false);
  }

  return (
    <div className="screen flex justify-center items-center h-screen w-screen">
      <div className="container w-[320px] flex flex-col pb-[30px] bg-[#ffffff] rounded-[8px] drop-shadow-2xl">
        <div className="header flex flex-col items-center gap-[9px] w-full mt-[30px]">
          <img src={paywise_logo} alt="Logo" className="w-[56px] w-[56px]" />
        </div>
        <div className="inputs flex flex-col mt-[24px] ml-[24px] items-start">
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
            <div className="text font-mono">Company Name</div>
            <input
              type="text"
              className="companyName w-[270px] h-[32px] border rounded-[4px] border-primary-500"
              placeholder="Enter your company name here"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="input mb-[24px]">
            <div className="text font-mono">Company Address</div>
            <input
              type="text"
              className="companyAddress w-[270px] h-[32px] border rounded-[4px] border-primary-500"
              placeholder="Enter your addrress here"
              value={address}
              onChange={handleAddressChange}
            />
          </div>
          <div className="input mb-[24px]">
            <div className="text font-mono">Company Sector</div>
            <select
              className={`form-select w-[270px] h-[32px] border rounded-[4px] border-primary-500 ${
                selectedSector ? "text-black" : "text-[#999]"
              }`}
              onChange={handleSelect}
              value={selectedSector}
            >
              <option value="" disabled hidden>
                Select an option
              </option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
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
            onClick={handleSignup}
          >
            Sign Up
          </div>
          <div className="signup text-[#797979] text-xs">
            Already have account?{" "}
            <Link
              to="/login"
              className="text-primary-700 cursor-pointer font-semibold underline"
            >
              Login
            </Link>
          </div>
        </div>
        {showPopup && (
          <div className="popup-overlay w-full flex flex-col items-center">
            <div className="popup">
              <div className="popup-content flex flex-col items-center">
                <h2 className="font-medium">Sign Up Success</h2>
                <button
                  className="close-button bg-secondary-500 w-[90px] rounded flex justify-center items-center my-[16px] cursor-pointer"
                  onClick={handleClosePopup}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;
