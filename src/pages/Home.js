import React from "react";
import { useState } from "react";
import Hero from "../components/Home/Hero";
import Slider from "../components/Home/Slider";
import CardData from "../components/Trails/CardData";

const Home = () => {
  return (
    <main className="homeContainer">
      <Slider />
      <Hero />
    </main>
  );
};

export default Home;
