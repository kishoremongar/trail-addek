import React from "react";
import "./About.css";
import CardList from "../components/Trails/CardList";
import CardData from "../components/Trails/CardData";
import { useLocation } from "react-router-dom";

const Trails = () => {
  const location = useLocation();
  // console.log(location);
  const currentData = CardData.filter((curElem) => {
    return curElem.level === location.state;
  });
  return (
    <section className="section about-section">
      <CardList
        trailsData={location?.state === "Upcoming" ? currentData : CardData}
      />
    </section>
  );
};

export default Trails;
