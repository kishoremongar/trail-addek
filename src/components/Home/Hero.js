import React from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";

const Hero = ({ upcomingFilter, allLevel, setItems }) => {
  let navigate = useNavigate();
  return (
    <div className="btnContainer">
      <h1 className="main-text">TRAIL ADDEK</h1>
      <p className="motto main-text">
        The only escape drug you need from the city...
      </p>
      <div className="btn-center">
        <button
          className="btn"
          onClick={() => navigate("/trails", { state: "Upcoming" })}
        >
          Upcoming
        </button>
        <button className="btn">Learn more</button>
      </div>
    </div>
  );
};

export default Hero;
