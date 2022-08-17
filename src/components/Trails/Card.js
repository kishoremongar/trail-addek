import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ id, img, place, level, time, price }) => {
  return (
    <Link to={`/trail/${id}`} className="viewMore">
      <div className="card-container">
        <div className="card-header">
          <img src={img} alt={place} loading="lazy" />
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
        </div>
      </div>
    </Link>
  );
};

export default Card;
