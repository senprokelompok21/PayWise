import React, { useState } from "react";
import Navbar from "../components/navbar";
import StickyHeadTable from "../components/table";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container ml-[124px] flex flex-col justify-center align-center items-center w-screen h-screen ">
        <div className="title mb-[16px] font-medium">
          Employee Salary Database
        </div>
        <StickyHeadTable className="flex" />
        <div className="title my-[16px] font-medium">Data Summary Overview</div>
      </div>
    </>
  );
};

export default Home;
