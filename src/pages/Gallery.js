import React from "react";
import "./Gallery.css";
import Images from "../components/Gallery/Images";
import Gallery from "react-grid-gallery";

const About = () => {
  return (
    <section className="gallery-container" loading="lazy">
      <Gallery
        images={Images}
        // showCloseButton={false}
        backdropClosesModal={true}
      />
    </section>
  );
};

export default About;
