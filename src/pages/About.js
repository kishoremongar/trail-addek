import React from "react";
import "../css/About.css";
import aboutUs from "./aboutUs.svg";

const About = () => {
  return (
    <section className="container">
      <div className="left-aboutUs">
        <img src={aboutUs} alt="hero" className="about-img" />
      </div>
      <div className="right-aboutUs">
        <h2 className="title-aboutUs">About Us</h2>
        <p className="about-info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          sed accusantium deserunt dolor officia autem rem quo natus, ducimus
          asperiores obcaecati, voluptatibus accusamus. Sit aspernatur assumenda
          voluptatum ipsa beatae ducimus unde pariatur numquam optio
          perspiciatis eum tempora quisquam, dolore qui!
        </p>
        <p className="about-info">
          Photos Clicked By Abner &copy; {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
};

export default About;
