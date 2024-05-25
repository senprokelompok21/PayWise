"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Signup = () => {
  const options = [
    { label: "one", value: "one" },
    { label: "two", value: 2 },
    { label: "three", value: 3 },
  ];
  const [selectedOption, setSelectedOption] = useState("");
  function handleSelect(event) {
    setSelectedOption(event.target.value);
  }

  return (
    <div className="screen flex justify-center items-center h-screen w-screen">
      <div className="container w-[320px] flex flex-col pb-[30px] bg-[#ffffff] rounded-[8px] drop-shadow-2xl">
        <div className="header flex flex-col items-center gap-[9px] w-full mt-[30px]">
          <div className="logo">#PayWise Logo#</div>
        </div>
        <div className="inputs flex flex-col mt-[24px] ml-[24px] items-start">
          <div className="input mb-[24px]">
            <div className="text font-mono">Email</div>
            <input
              type="text"
              className="email w-[270px] h-[32px] border rounded-[4px] border-primary-500"
              placeholder="Enter your email here"
            />
          </div>
          <div className="input mb-[24px]">
            <div className="text font-mono">Company Name</div>
            <input
              type="text"
              className="companyName w-[270px] h-[32px] border rounded-[4px] border-primary-500"
              placeholder="Enter your company name here"
            />
          </div>
          <div className="input mb-[24px]">
            <div className="text font-mono">Company Address</div>
            <input
              type="text"
              className="companyAddress w-[270px] h-[32px] border rounded-[4px] border-primary-500"
              placeholder="Enter your addrress here"
            />
          </div>
          <div className="input mb-[24px]">
            <div className="text font-mono">Company Sector</div>
            <select
              className={`form-select w-[270px] h-[32px] border rounded-[4px] border-primary-500 ${
                selectedOption ? "text-black" : "text-[#999]"
              }`}
              onChange={handleSelect}
              value={selectedOption}
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
            />
          </div>
        </div>
        <div className="buttons flex flex-col items-center">
          <div className="button font-mono font-medium text-xl text-white bg-primary-500 rounded-[4px] flex w-[127px] h-[40px] justify-center items-center cursor-pointer mb-[24px]">
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
      </div>
    </div>
  );
};

export default Signup;
