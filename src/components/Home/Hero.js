import React from "react";
import { useState } from "react";
import CardData from "../Trails/CardData";
import "./Hero.css";

const Hero = () => {
  // const [itemsUpcom, setItemsUpcom] = useState(CardData);
  // const filterUpcoming = (cate, item) => {
  //   if (cate === "Upcoming") {
  //     setItemsUpcom(CardData);
  //     return console.log("Upcoming");
  //   }
  //   const updateLevels = CardData.filter((curElem) => {
  //     return curElem.level === cate;
  //   });
  //   setItemsUpcom(updateLevels);
  // };
  // if (category === "Upcoming") {
  //   setItems(upComing);
  // }
  // const upComing = CardData.filter((curElem) => {
  //   return curElem.level === "Upcoming";
  // });
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

/*{<div className="btn-center">
        <button className="btn">Learn more</button>
        <button className="btn">Upcoming trails</button>
      </div>
    {allLevel.map((curElem, index) => {
          return (
            <button
              className="btn"
              onClick={() => filterLevels(curElem)}
              key={index}
            >
              {curElem}
            </button>} 
            <div className="btn-center">
        <button className="btn" onClick={() => filterUpcoming()}>
          Learn more
        </button>
      </div>*/
