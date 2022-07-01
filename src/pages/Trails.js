import React from "react";
import "../css/About.css";
import CardList from "../components/Trails/CardList";
import FilterSearch from "../components/Trails/FilterSearch";

const About = () => {
  return (
    <section className="section about-section">
      <FilterSearch className="filter-container" />
      <CardList />
    </section>
  );
};

export default About;
