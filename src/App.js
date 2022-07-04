import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Trails from "./pages/Trails";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Navbarr from "./components/Navbar/Navbarr";

function App() {
  return (
    <Router>
      <Navbarr />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Routes>
        <Route path="/trails" element={<Trails />} />
      </Routes>
      <Routes>
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

{
  /*<Routes>
        <Route path="*" element={<Error />} />
      </Routes> */
}
