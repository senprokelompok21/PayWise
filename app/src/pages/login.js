"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import paywise_logo from "../assets/paywise_logo.png";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {};

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
            />
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
    </div>
  );
};

export default Login;
