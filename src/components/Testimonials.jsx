// Testimonials.jsx
import React, { useRef, useEffect } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Amit Shah",
    title: "Software Engineer, Google",
    feedback:
      "I would like to express my sincere gratitude to TIMSCDR for helping me at each and every step of my professional career. The Institute provided me the best possible platform and infrastructure to pursue my career interest. The. expert faculty made me industry ready, while the placement training helped me enhance my technical as well as soft skills. I was able to get an internship opportunity through college which made me stand out from others. It has given me amazing opportunities to learn, grow and explore my skills. I would like to thank TIMSCDR and all faculties and staff for making me a better person.",
    image: "/images/mayuri-tiwari.jpeg",
  },
  {
    name: "Riya Mehta",
    title: "Data Analyst, Deloitte",
    feedback:
      "TIMSCDR had been a great contributor towards the development of my career. The entire staff was very supportive and approachable with an attitude of being ever ready to help. Class room trainings along with real-time case studies, industry best practices with examples and improving communication skills with constant interactions, were extremely useful. The Green campus and infrastructure of the college is one of the finest in Mumbai. The computer labs were well equipped and available all the time. One could study in the library beyond the class timings.I am thankful to TIMSCDR for the creation of favourable conditions for successful personal and professional growth, wonderful professors and unforgettable years.",
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
      <h2 className="testimonial-heading">Our Testimonals</h2>
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
