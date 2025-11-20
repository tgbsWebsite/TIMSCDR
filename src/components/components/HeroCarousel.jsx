import React from "react";
import "./HeroCarousel.css";

const HeroCarousel = ({
  src = "/images/Carasouel/head-511.mp4",
  poster = "/images/hero-poster.jpg",
  height = "600px",
}) => {
  return (
    <section className="video-container" style={{ "--hero-height": height }}>
      <video
        className="video-media"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
      />
    </section>
  );
};

export default HeroCarousel;