import React from "react";
import "./Trail.css";
import CardData from "./CardData";
import { Display } from "./Display";
import { useParams } from "react-router-dom";

const Trail = () => {
  const { trailId } = useParams();
  // console.log("params", useParams());
  const trek = CardData.find((item) => String(item.id) === String(trailId));
  return (
    <div className="mainContainer">
      <div className="left-pages page">
        <Display item={trek} />
      </div>
      <div className="right-pages page">
        <h3>Hello{CardData.place}</h3>
      </div>
    </div>
  );
};

export default Trail;
