import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="btnContainer">
      <h1 className="main-text">TRAIL ADDEK</h1>
      <p className="motto main-text">
        The only escape drug you need from the city...
      </p>
      <div className="btn-center">
        <button className="btn">Learn more</button>
        <button className="btn">Upcoming trails</button>
      </div>
    </div>
  );
};

export default Hero;
