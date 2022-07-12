// import React, { useRef, useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import logo from "./logo.svg";
// import "./Navbar.css";
// import { BsPersonCircle, BsCartFill } from "react-icons/bs";
// import { FaBars } from "react-icons/fa";

// const Navbar = () => {
//   const [showLinks, setShowLinks] = useState(false);
//   const linksContainerRef = useRef(null);
//   const linksRef = useRef(null);
//   const toggleLinks = () => {
//     setShowLinks(!showLinks);
//   };

//   useEffect(() => {
//     const linksHeight = linksRef.current.getBoundingClientRect().height;
//     if (showLinks) {
//       linksContainerRef.current.style.height = `${linksHeight}px`;
//     } else {
//       linksContainerRef.current.style.height = "0rem";
//     }
//   }, [showLinks]);
//   return (
//     <nav className="navbar">
//       <div className="nav-center">
//         <div className="nav-header">
//           <Link to="/">
//             <img src={logo} alt="logo" className="logo" />
//           </Link>
//           <button
//             className="nav-toggle"
//             onClick={() => setShowLinks(!showLinks)}
//           >
//             <FaBars />
//           </button>
//         </div>
//         <div className="links-container" ref={linksContainerRef}>
//           <ul className="nav-links" ref={linksRef}>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/trails">Trails</Link>
//             </li>
//             <li>
//               <Link to="/gallery">Gallery</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact</Link>
//             </li>
//           </ul>
//         </div>
//         <div className="nav-right">
//           <BsPersonCircle className="btn-nav" />
//           <BsCartFill className="btn-nav" />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
