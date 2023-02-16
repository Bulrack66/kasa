import React, { useState, useEffect } from "react";
import Vector from "../../assets/big-arrow.png";
import "./Slider.scss";

export default function Slider({pictures}) {

  const [current, setCurrent] = useState(0);

  /**
   * If the current slide is the last slide, then go to the first slide, otherwise go to the next
   * slide.
   */
  const nextSlide = () => {
    setCurrent(current === pictures.length - 1 ? 0 : current + 1);
  };

  /**
   * If the current slide is the first slide, then set the current slide to the last slide, otherwise
   * set the current slide to the previous slide.
   */
  const prevSlide = () => {
    setCurrent(current === 0 ? pictures.length - 1 : current - 1);
  };

  return (
    <div className="Slider">
      <button className="vectorPrev">
        <img className='vector' src={Vector} onClick={prevSlide} alt="fleche" />
      </button>
      <button className="vectorNext">
        <img className='vector' src={Vector} onClick={nextSlide} alt="fleche" />
      </button>
      {pictures.map((img, index) => {
        return (
          <div key={index}>
            {index === current && (
              <img
                src={img}
                alt="Photos du logement"
                className="slider-image"
              />
            )}
            {index === current && (
              <strong className="image-number">
                {current + 1}/{pictures.length}
              </strong>
            )}
          </div>
        );
      })}
    </div>
  );
}