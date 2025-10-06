import React from "react";
import "./Programs.css";

const academicPrograms = [
  {
    title: "MCA",
    bg: "./images/Academics/MCA.webp",
    description: "A 2 - Year Full Time Comprehensive Programme",
    class: "flipcard-mountains"
  },
  {
    title: "Integrated MCA",
    bg: "./images/Academics/MCA_Int.webp",
    description: "A combined undergraduate and postgraduate program in computer applications designed for advanced professional skills.",
    class: "flipcard-nightsky"
  },
  {
    title: "MCA Working Professional",
    bg: "./images/Academics/MCA_WP.webp",
    description: "Flexible MCA track tailored for working individuals to accelerate tech careers.",
    class: "flipcard-oceanwaves"
  },
  {
    title: "Ph. D",
    bg: "./images/Academics/PHD.webp",
    description: "Doctoral research program advancing Computer Science theory and innovation.",
    class: "flipcard-forestpath"
  }
];

const Programs = () => (
  <section className="academic-programs-section">
    <h2 className="recruiters-heading">Academic Programs<hr className="about-us-divider"/></h2>
    <div className="flipcard-container">
      {academicPrograms.map((program, i) => (
        <div className={`flipcard-card ${program.class}`} key={i}>
          <div className="flipcard-card-inner">
            <div
              className="flipcard-card-front"
              style={{ backgroundImage: `url('${program.bg}')` }}
            >
              <h2 className="flipcard-title">{program.title}</h2>
            </div>
            <div className="flipcard-card-back">
              <p className="flipcard-description">{program.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Programs;
