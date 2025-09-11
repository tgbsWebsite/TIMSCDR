import React from "react";
import "./HeroCarousel.css";

const HeroCarousel = ({
  src = "/images/Carasouel/TIMSCDR-head-web-1.mp4",
  poster = "/images/hero-poster.jpg",
  height = "600px",          // override per page if needed
  children,                   // optional overlay content
}) => {
  return (
    <section className="video-container">
    <section
      className="hero-video"
      style={{ "--hero-height": height }}
      aria-label="Hero video section"
    >
      <video
        className="hero-video__media"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="hero-video__overlay">
        {/* Default content; pass children to customize */}
        {children ?? (
          <div className="hero-video__content">
            <h1 className="hero-video__title"></h1>
            <p className="hero-video__subtitle">
            
            </p>
            <a className="hero-video__cta" href="/admissions">
              
            </a>
          </div>
        )}
      </div>
    </section>
    </section>
  );
};

export default HeroCarousel;
