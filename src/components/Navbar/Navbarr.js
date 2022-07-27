import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./Navbarr.css";
import { BsPersonCircle, BsCartFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const toggle = (e) => {
    e.preventDefault();
    setShowLinks(!showLinks);
  };
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <button onClick={toggle}>
            <FaBars />
          </button>
        </div>
        <div className="links-container">
          <ul
            className="nav-links"
            id={showLinks ? "hidden" : ""}
            onClick={() => (setShowLinks(!showLinks) ? "hidden" : "")}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/trails">Trails</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <BsPersonCircle className="btn-nav" />
          <BsCartFill className="btn-nav" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
