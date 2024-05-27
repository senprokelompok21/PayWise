import React, { useState } from "react";
import paywise_logo from "../assets/paywise_logo.png";

export default function Navbar() {
  return (
    <nav className="nav w-screen flex justify-between gap-[2rem] p-[0 1rem] items-center bg-white p-4 z-50 fixed">
      <img
        src={paywise_logo}
        alt="Logo"
        className="w-[40px] w-[40px]"
        href="/"
      />
      <ul className="list-none flex gap-[1rem]">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/">Calculate Salary</a>
        </li>
        <li>
          <a href="/aboutUs">About Us</a>
        </li>
      </ul>
      <ul className="list-none flex gap-[1rem]">
        <li>
          <a
            className="px-4 py-2 border border-primary-500 rounded-lg"
            href="/login"
          >
            Login
          </a>
        </li>
        <li>
          <a
            className="px-4 py-2 bg-primary-500 text-white rounded-lg"
            href="/signup"
          >
            Sign Up
          </a>
        </li>
      </ul>
    </nav>
  );
}
