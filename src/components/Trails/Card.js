import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "./Card.css";
import CardData from "./CardData";

const Card = ({ id, cart, img, place, level, time, price }) => {
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
          <Link to={`/trail/${id}`} className="viewMore">
            <h4>{cart}</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
