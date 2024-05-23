import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Signup from "./pages/signup";
import AboutUs from "./pages/aboutUs";
import CalculateSalary from "./pages/calculateSalary";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<CalculateSalary />} />
        <Route exact path="/aboutUs" element={<AboutUs />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
