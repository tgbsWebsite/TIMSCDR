// src/components/TimsHeroCarousel.jsx
import React, { useEffect, useRef, useState } from "react";
// import "./tims-hero-carousel.css";

export default function TimsHeroCarousel({
  images = [],
  alt = "Carousel image",
  interval = 5000,
  height = 420
}) {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!images.length) return;
    const id = setInterval(() => {
      if (paused) return;
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images.length, interval, paused]);

  useEffect(() => {
    const track = trackRef.current;
    const slide = track?.children[index];
    slide?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  }, [index]);

  const go = (dir) => setIndex((i) => (i + dir + images.length) % images.length);

  return (
    <section className="tims-hero-carousel" aria-roledescription="carousel">
      <div
        className="tims-hero-carousel__viewport"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{ height }}
      >
        <div className="tims-hero-carousel__track" ref={trackRef}>
          {images.map((src, i) => (
            <figure
              key={i}
              className="tims-hero-carousel__slide"
              aria-label={`Slide ${i + 1} of ${images.length}`}
            >
              <img src={src} alt={alt} loading="eager" />
              <figcaption className="tims-hero-carousel__caption" />
            </figure>
          ))}
        </div>

        <button
          className="tims-hero-carousel__nav tims-hero-carousel__nav--prev"
          aria-label="Previous slide"
          onClick={() => go(-1)}
        >
          ‹
        </button>
        <button
          className="tims-hero-carousel__nav tims-hero-carousel__nav--next"
          aria-label="Next slide"
          onClick={() => go(1)}
        >
          ›
        </button>

        <div className="tims-hero-carousel__dots" role="tablist" aria-label="Slide dots">
          {images.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === index}
              className={"tims-hero-carousel__dot" + (i === index ? " is-active" : "")}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
