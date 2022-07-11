import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>Oops! No Page Found</h1>
        <Link to="/" className="btnHome">
          Back Home
        </Link>
      </div>
    </section>
  );
};

export default Error;
