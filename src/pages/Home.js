import React from "react";
import Hero from "../components/Home/Hero";
import Slider from "../components/Home/Slider";

const Home = () => {
  return (
    <main className="homeContainer">
      <Slider />
      <Hero />
    </main>
  );
};

export default Home;
