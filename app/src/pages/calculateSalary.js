import React, { useState } from "react";
import Navbar from "../components/navbar";

const CalculateSalary = () => {
  const options = [
    { label: "one", value: "one" },
    { label: "two", value: 2 },
    { label: "three", value: 3 },
  ];
  const [selectedOption, setSelectedOption] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  function handleSelect(event) {
    setSelectedOption(event.target.value);
  }

  function handlePredict() {
    setShowPopup(true);
  }

  function handleClosePopup() {
    setShowPopup(false);
  }

  return (
    <>
      <Navbar />
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="container flex flex-col justify-center align-center bg-white rounded-lg">
          <div className="flex justify-center font-bold text-3xl m-[24px]">
            Calculate Salary
          </div>
          <div className="inputs flex items-center justify-around mb-[24px]">
            <div className="input items-center  w-[500px] flex-col flex justify-start gap-2">
              <div className="flex">Age</div>
              <input
                type="text"
                className="border border-primary-500 rounded-lg w-full"
                placeholder="Enter your age"
              />
            </div>
            <div className="input items-center  w-[500px] flex-col flex justify-start gap-2">
              <div className="text">Experience (in year)</div>
              <input
                type="text"
                className="border border-primary-500 rounded-lg w-full"
                placeholder="Enter your work experience (in year)"
              />
            </div>
          </div>
          <div className="input items-center w-full flex flex-col gap-2">
            <div className="text">Education Level</div>
            <select
              className={`form-select mb-[16px] w-[270px] h-[32px] border rounded-[4px] border-primary-500 ${
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
          <div className="button flex flex-col items-center w-full">
            <div
              className="bg-secondary-500 w-[127px] rounded flex justify-center items-center mb-[16px] cursor-pointer"
              onClick={handlePredict}
            >
              Predict
            </div>
          </div>
          {showPopup && (
            <div className="popup-overlay w-full flex flex-col items-center">
              <div className="popup">
                <div className="popup-content flex flex-col items-center">
                  <h2 className="font-medium">Prediction Result:</h2>
                  <p>Your predicted salary is: $X,XXX</p>
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
    </>
  );
};
export default CalculateSalary;
