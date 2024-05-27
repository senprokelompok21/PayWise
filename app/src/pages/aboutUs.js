import React, { useState } from "react";
import Navbar from "../components/navbar";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="container flex flex-col justify-center align-center bg-white rounded-lg w-3/4 shadow-2xl ring-4">
          <div className="flex justify-center font-bold text-3xl m-[24px]">
            PayWise
          </div>
          <div className="mb-[8px] m-[24px]">
            At PayWise, we understand that payroll management is a critical
            aspect of human resource management in every company. Efficient and
            transparent payroll processes are key components in ensuring
            fairness, legal compliance, and employee satisfaction. However,
            manual payroll processes or using spreadsheets often leave room for
            errors and consume a significant amount of time, especially for
            companies with a large workforce.
          </div>
          <div className="m-[24px]">
            At PayWise, we are committed to revolutionizing payroll management
            by providing accurate, efficient, and user-friendly solutions that
            benefit both employees and employers. Join us in simplifying payroll
            processes and empowering employees to make informed decisions about
            their worth in the job market.
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
