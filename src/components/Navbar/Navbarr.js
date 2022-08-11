import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.svg";
import "./Navbarr.css";
import { BsPersonCircle, BsCartFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  let activeStyle = {
    color: "var(--border-bottom)",
    borderBottom: "1px solid var(--border-bottom)",
  };
  const toggle = (e) => {
    e.preventDefault();
    setShowLinks(!showLinks);
  };
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <NavLink to="/">
            <img src={logo} alt="logo" className="logo" />
          </NavLink>
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
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/trails"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Trails
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Contact
              </NavLink>
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
