import React, { useState, useEffect } from "react";
import "./Slider.css";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import SliderData from "./SliderData";

function Slider() {
  const [slider, setSlider] = useState(SliderData);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const lastIndex = SliderData.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, SliderData]);

  useEffect(() => {
    let autoSlider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(autoSlider);
    };
  }, [index]);
  return (
    <section className="slider-section">
      <div className="slider-container">
        {SliderData.map((bgImg, bgImgIndex) => {
          const { id, image, name } = bgImg;
          let position = "nextSlide";
          if (bgImgIndex === index) {
            position = "activeSlide";
          }
          if (
            bgImgIndex === index - 1 ||
            (index === 0 && bgImgIndex === SliderData.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Slider;
