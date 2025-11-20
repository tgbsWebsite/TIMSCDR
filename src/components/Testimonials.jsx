// Testimonials.jsx
import React, { useRef, useEffect } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Amit Shah",
    title: "Software Engineer, Google",
    feedback:
      "",
    image: "/images/mayuri-tiwari.jpeg",
  },
  {
    name: "Riya Mehta",
    title: "Data Analyst, Deloitte",
    feedback:
      "",
    image: "/images/riya.jpg",
  },
  {
    name: "Nikhil Verma",
    title: "Backend Developer, Amazon",
    image: "/images/nikhil.jpg",
  },
  {
    name: "Sneha Patil",
    title: "UI/UX Designer, Microsoft",
    feedback: "Excellent mentorship and exposure to real-world projects.",
    image: "/images/sneha.jpg",
  },
];

export default function Testimonials() {
  const scrollRef = useRef(null);

  const scrollForward = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      container.scrollBy({
        left: container.offsetWidth / 2,
        behavior: "smooth",
      });
    }
  };

  const scrollBack = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      container.scrollBy({
        left: -container.offsetWidth / 2,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scrollForward();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-wrapper">
      <h2 className="testimonial-heading">Our Testimonals<hr className="about-us-divider" /></h2>
      <div className="testimonial-carousel">
        <button className="arrow left-arrow" onClick={scrollBack}>
          &#10094;
        </button>

        <div className="testimonial-scroll-container" ref={scrollRef}>
          {testimonials.map((t, index) => (
            <div className="testimonial-card" key={index}>
              <img src={t.image} alt={t.name} className="testimonial-image" />
              <div className="testimonial-content">
                <p className="testimonial-feedback">"{t.feedback}"</p>
                <p className="testimonial-name">{t.name}</p>
                <p className="testimonial-title">{t.title}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="arrow right-arrow" onClick={scrollForward}>
          &#10095;
        </button>
      </div>
    </div>
  );
}
