import React from "react";
import CardData from "./CardData";
import "./Card.css";

const Card = ({ cart, img, place, level, time, price }) => {
  return (
    <div className="card-container">
      <div className="card-header">
        <img src={img} alt={place} />
      </div>
      <div className="card-info">
        <div className="card-title">
          <h3>{place}</h3>
        </div>
        <div className="card-level">
          <h4>{level}</h4>
        </div>
        <div className="card-time">
          <h4>{time}</h4>
        </div>
        <div className="card-price">
          <h4>{price}</h4>
        </div>
        <div className="cart">
          <h4>{cart}</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
