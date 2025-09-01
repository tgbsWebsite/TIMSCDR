import React, { useState } from "react";
import "./FacultyPrograms.css";
import Footer from "../components/Footer";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Navbar from "../components/navbar";

const ParentInteractionProgramme = () => {
  const benefits = [
    "It helps the parents to know the strengths and weakness of their ward so as to support them for their better placements.",
    "It provides a platform for the parents to interact with the faculty members to clarify their doubts and share their suggestions for the overall development of their ward.",
  ];

  const images = [
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDY-L-K8pWz2wK8fG9s0G7v6H8pQ9c8r7tY5U6U4N7L5e6F3c2D1B9r0g9hY8jA7k6C4l5mZ2n3pD0X2s1a7b4iC9nO8gR7P6Q_I4kX1jB9zH0kG3nL1vX8gS1a2b3c4d5e6f7g8h9i0j",
      alt: "Parents and teachers in a discussion",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7xJ5kY2zW1xX9zV8tU7s6R5q4p3O2n1M0l9k8j7H6g5F4d3C2b1A0z9Y8x7w6v5U4t3S2r1Q0P9o8N7m6L5K4j3I2h1g0F9e8D7c6B5a4z3y2x1w",
      alt: "A speaker addressing parents",
    },
  ];
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />
      <div className="pip-body">
        {/* Main Section */}
        <main className="pip-main">
          <div className="pip-card">
            <h2 className="pip-heading">Parent Interaction Programme</h2>

            <div className="pip-grid">
              {/* Left Content */}
              <div className="pip-content">
                <p>
                  The Parent Interaction Programme is organized to make the
                  parents aware about the vision and mission of the institute,
                  academic discipline, rules and regulations of the institute,
                  University examination system, co-curricular and
                  extra-curricular activities, training and placement
                  activities, mentoring system etc. It helps in creating a
                  common platform for the parents, teachers and students to work
                  for the betterment of the student’s academic career.
                </p>

                <h3 className="pip-subheading">
                  Why Parent Interaction Program is useful?
                </h3>

                <ul className="pip-list">
                  {benefits.map((point, index) => (
                    <li key={index}>
                      {/* <span className="pip-icon"></span> */}
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Images */}
              <div className="pip-images">
                {images.map((img, i) => (
                  <img key={i} src={img.src} alt={img.alt} />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default ParentInteractionProgramme;
