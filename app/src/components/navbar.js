import React, { useState } from "react";

export default function Navbar() {
  return (
    <nav className="nav w-screen flex justify-between gap-[2rem] p-[0 1rem] items-center bg-white p-4 z-50 fixed">
      <a href="/" className="title">
        PayWise
      </a>
      <ul className="list-none flex gap-[1rem]">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/calculateSalary">Calculate Salary</a>
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
