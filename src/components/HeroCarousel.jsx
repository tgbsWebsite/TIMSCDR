import React from "react";
import "./HeroCarousel.css";

const HeroVideo = ({
  src = "/videos/hero.mp4",
  poster = "/images/hero-poster.jpg",
}) => {
  return (
    <section
      className="modern-carousel-container"
      role="region"
      aria-label="Hero video"
    >
      <div className="modern-carousel-wrapper">
        <div className="hero-video-frame">
          <video
            className="hero-video"
            src={src}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
