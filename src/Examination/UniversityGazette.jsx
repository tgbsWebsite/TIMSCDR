import React, { useState } from "react";
import "./UniversityGazette.css";
import Footer from "../components/Footer";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Navbar from "../components/navbar";

const gazetteData = [
  {
    semester: "First Half 2025",
    sections: [
      {
        title: "Regular",
        items: [
          "Gazette Copy of MASTER OF COMPUTER APPLICATIONS (SEM-I)(CHOICE BASED)(2 YEARS COURSE) EXAMINATION HELD IN MAY 2025 (FH-2025)",
          "Gazette Copy of MASTER OF COMPUTER APPLICATIONS (SEM-III)(CHOICE BASED)(2 YEARS COURSE) EXAMINATION HELD IN JUNE 2025 (FH-2025)",
          "Gazette Copy of MASTER OF COMPUTER APPLICATIONS (SEM.IV)(CHOICE BASED)(TWO YEARS) DEGREE EXAMINATION HELD IN JULY 2025 (F.H.2025)",
        ],
      },
    ],
  },
  {
    semester: "Second Half 2024",
    sections: [
      {
        title: "Regular",
        items: [
          "Gazette Copy of MCA (SEM-III)(CHOICE BASED)(2 YEARS COURSE) EXAMINATION HELD IN JANUARY 2025 (SH-2024)",
          "Gazette Copy of MCA (SEM-III)(CHOICE BASED)(2 YEARS COURSE) EXAMINATION HELD IN DECEMBER 2024 (SH-2024)",
        ],
      },
      {
        title: "KT",
        items: [
          "Gazette Copy of MCA (SEM-II)(CHOICE BASED)(2 YEARS COURSE) EXAMINATION HELD IN DECEMBER 2024 (SH-2024)",
          "Gazette Copy of MCA (SEM-II)(CHOICE BASED)(2 YEARS COURSE) EXAMINATION HELD IN DECEMBER 2024 (SH-2024)",
        ],
      },
    ],
  },
  {
    semester: "First Half 2024",
    sections: [
      {
        title: "Regular",
        items: [
          "Gazette Copy of MCA (SEM-IV)(CHOICE BASED)(2 YEARS COURSE)",
          "Gazette Copy of MCA (SEM-II)(CHOICE BASED)(2 YEARS COURSE)",
          "Gazette Copy of MCA (SEM.I Revaluation (CHOICE BASE) (2 Years) EXAM",
          "Gazette Copy of MCA (SEM.II Revaluation (CHOICE BASE) (2 Years) EXAM",
          "Gazette Copy of MCA (SEM.III Revaluation (CHOICE BASE) (2 Years) EXAM",
        ],
      },
      {
        title: "KT",
        items: ["Gazette Copy of MCA (SEM-I) KT Exam"],
      },
    ],
  },
  {
    semester: "Second Half 2023",
    sections: [
      {
        title: "Regular",
        items: [
          "Gazette Copy of MCA (SEM.I)(CHOICE BASE) (2 Years) EXAM",
          "Gazette Copy of MCA (SEM.II)(CHOICE BASE) (2 Years) EXAM",
          "Gazette Copy of MCA (SEM.III)(CHOICE BASE) (2 Years) EXAM",
        ],
      },
    ],
  },
  {
    semester: "First Half 2023",
    sections: [
      {
        title: "Regular",
        items: [
          "Gazette Copy of MCA (SEM.I)(CHOICE BASE) (2 Years) EXAM",
          "Gazette Copy of MCA (SEM.II)(CHOICE BASE) (2 Years) EXAM",
          "Gazette Copy of MCA (SEM.III)(CHOICE BASE) (2 Years) EXAM",
          "Gazette Copy of MCA (SEM.IV)(CHOICE BASE) (2 Years) EXAM",
        ],
      },
    ],
  },
  {
    semester: "Second Half 2022",
    sections: [
      {
        title: "Regular",
        items: [
          "Gazette Copy of MCA (SEM.III)(CHOICE BASE) (2 Years) EXAM-Dec 2022",
          "Gazette Copy of MCA (SEM.I)(CHOICE BASE) (2 Years) EXAM Feb 2023",
          "Gazette Copy of MCA (SEM.II)(CHOICE BASE) (2 Years) KT EXAM Feb 2023",
          "Gazette Copy of MCA (SEM.IV)(CHOICE BASE) (2 Years) KT EXAM Dec 2022",
        ],
      },
    ],
  },
  {
    semester: "First Half 2022",
    sections: [
      {
        title: "Regular",
        items: [
          "Gazette Copy of MCA (SEM.II)(CHOICE BASE) (2 Years) EXAM-Aug 2022",
          "Gazette Copy of MCA (SEM.VI)(CHOICE BASE) (3 Years) EXAM July 2022",
          "Gazette Copy of MCA (SEM.IV)(CHOICE BASE) (2 Years) EXAM July 2022",
        ],
      },
      {
        title: "KT",
        items: ["Sem – III KT MCA (2 Years)", "Sem – I KT MCA (2 Years)"],
      },
    ],
  },
  // Continue for other years here...
];

const UniversityGazette = () => {
  const [showForm, setShowForm] = useState(false);
  const [openIndex, setOpenIndex] = useState(0); // keep track of which accordion is open

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />

      <main className="ug-container ug-main">
        <h1 className="heading">University Gazette</h1>

        {gazetteData.map((section, index) => (
          <div className="ug-accordion-item" key={index}>
            <div
              className={`ug-accordion-header ${
                openIndex === index ? "open" : ""
              }`}
              onClick={() => toggleAccordion(index)}
            >
              <span className="ug-accordion-heading">
                <span className="material-icons ug-heading-icon">school</span>
                <span className="ug-heading-text">{section.semester}</span>
              </span>
              <span
                className={`material-icons ug-accordion-icon ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                expand_more
              </span>
            </div>

            <div
              className={`ug-accordion-content ${
                openIndex === index ? "open" : ""
              }`}
              style={{
                maxHeight: openIndex === index ? "1000px" : "0px",
              }}
            >
              <div className="ug-accordion-inner">
                {section.sections.map((sub, i) => (
                  <div className="ug-card" key={i}>
                    <h3>{sub.title}</h3>
                    <ul>
                      {sub.items.map((item, j) => (
                        <li key={j}>
                          <span className="material-icons ug-icon">
                            picture_as_pdf
                          </span>
                          <a href="#">{item}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </main>

      <Footer />
    </>
  );
};

export default UniversityGazette;
