import React, { useState } from "react";
import Navbar from "../components/navbar";

const CalculateSalary = () => {
  const options = [
    { label: "Yes", value: 1 },
    { label: "No", value: 0 },
  ];

  const [age, setAge] = useState("");
  const [experience, setExperience] = useState("");
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [prediction, setPrediction] = useState(null);

  function handleAgeChange(event) {
    setAge(event.target.value);
  }
  function handleExperienceChange(event) {
    setExperience(event.target.value);
  }
  function handleSelect1(event) {
    setSelectedOption1(event.target.value);
  }
  function handleSelect2(event) {
    setSelectedOption2(event.target.value);
  }

  function handlePredict() {
    const formData = {
      data: {
        Age: [parseInt(age, 10)],
        "Years of Experience": [parseInt(experience, 10)],
        "Education Level_Master's": [parseInt(selectedOption1, 10)],
        "Education Level_PhD": [parseInt(selectedOption2, 10)],
      },
    };

    console.log("Form Data: ", JSON.stringify(formData));

    fetch("https://padikusenpro.azurewebsites.net/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setPrediction(data.prediction[0]);
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
    <>
      <Navbar />
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="container flex flex-col justify-center align-center bg-white rounded-lg shadow-2xl ring-4">
          <div className="flex justify-center font-bold text-3xl m-[24px]">
            Calculate Salary
          </div>
          <div className="inputs flex items-center justify-around mb-[24px]">
            <div className="input items-center  w-[500px] flex-col flex justify-start gap-2">
              <div className="flex">Age (15-64 years)</div>
              <input
                type="text"
                className="border border-primary-500 rounded-lg w-full"
                placeholder="Enter your age"
                value={age}
                onChange={handleAgeChange}
              />
            </div>
            <div className="input items-center  w-[500px] flex-col flex justify-start gap-2">
              <div className="text">Experience (0-35 years)</div>
              <input
                type="text"
                className="border border-primary-500 rounded-lg w-full"
                placeholder="Enter your work experience (in year)"
                value={experience}
                onChange={handleExperienceChange}
              />
            </div>
          </div>
          <div className="input items-center w-full flex flex-col gap-2">
            <div className="text">Education Level (Master)</div>
            <select
              className={`form-select mb-[16px] w-[270px] h-[32px] border rounded-[4px] border-primary-500 ${
                selectedOption1 ? "text-black" : "text-[#999]"
              }`}
              onChange={handleSelect1}
              value={selectedOption1}
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
          <div className="input items-center w-full flex flex-col gap-2">
            <div className="text">Education Level (PhD)</div>
            <select
              className={`form-select mb-[16px] w-[270px] h-[32px] border rounded-[4px] border-primary-500 ${
                selectedOption2 ? "text-black" : "text-[#999]"
              }`}
              onChange={handleSelect2}
              value={selectedOption2}
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
                  <h2 className="font-medium">Prediction Result</h2>
                  <p>
                    Your predicted salary is: $
                    {prediction ? prediction.toFixed(2) : "Loading..."} per
                    year.
                  </p>
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
