import React from "react";

export function Display(prop) {
  return (
    <div className="trail-info">
      <h1 className="trail-header">{prop.item.place}</h1>
      <p>Difficulty : {prop.item.level}</p>
      <p>Days : {prop.item.time}</p>
      <h5>Price : &#8377;{prop.item.price}</h5>
      <p className="description">{prop.item.description}</p>
      <button className="cta">{prop.item.cta}</button>
    </div>
  );
}
