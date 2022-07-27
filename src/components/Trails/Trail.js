import React from "react";
import "./Trail.css";
import CardData from "./CardData";
import { Display } from "./Display";
import { useParams } from "react-router-dom";

const Trail = () => {
  const { trailId } = useParams();
  // console.log("params", useParams());
  const trek = CardData.find((item) => String(item.id) === String(trailId));
  const [items, setItems] = React.useState(trek);
  return (
    <div className="mainContainer">
      <div className="left-trail" key={items.id}>
        <img src={items.img} alt={items.place} className="trail-img" />
      </div>
      <div className="right-trail">
        <Display item={trek} />
      </div>
    </div>
  );
};

export default Trail;
