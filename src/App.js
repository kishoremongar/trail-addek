import React from "react";
import { Route, Routes } from "react-router-dom";
import "./style.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Trails from "./pages/Trails";
import Gallery from "./pages/Gallery";
import Contact from "../src/components/Contact/Contact";
import Error from "../src/components/Error/Error";
import Navbarr from "./components/Navbar/Navbarr";
import Trail from "./components/Trails/Trail";

function App() {
  return (
    <>
      <Navbarr />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="trails" element={<Trails />} />
        <Route path="trail/:trailId" element={<Trail />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
