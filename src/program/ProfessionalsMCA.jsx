import React, { useState } from "react";
import "./MCAProgram1.css";
import "./MCAProgram.css";
import "./MCAProgram1.css"; // NEW CSS for contact section
import Footer from "../components/Footer";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Navbar from "../components/navbar";

export default function ProfessionalMCAProgram() {
  const [showForm, setShowForm] = useState(false);

  const highlights = [
    { title: "FLEXIBLE WITH YOUR SCHEDULE ", desc: "Hybrid mode with Evening/Weekend academic sessions" },
    { title: "GLOBALLY RECOGNIZED & ACCREDITED DEGREE ", desc: "2-year Program Degree approved by AICTE & DTE, conferred by the University of Mumbai" },
    { title: "INDUSTRY-FOCUSED CURRICULUM ", desc: "Gain in-depth knowledge of IT domains, master emerging tools, and develop leadership skills" },
    { title: "ACCELERATE YOUR CAREER GROWTH ", desc: "Unlock higher earning potential and prepare for leadership roles" },
    { title: "EXPAND YOUR OPPORTUNITIES ", desc: "Seamlessly transition into impactful roles in the technology sector" },
    { title: "NETWORKING OPPORTUNITIES ", desc: "Gain exclusive access to the TIMSCDR Alumni Portal" },
    { title: "ACADEMIC DELIVERY ", desc: "By Thakur Institute of Management Studies, an A+ Grade NAAC accredited institute" },
  ];

  const eligibilityDetails = [
    {
      title: "Entrance Exam",
      desc: null,
      subpoints: ["The candidate must have obtained the requisite score in the MAH/MCA-CET 2025 conducted by the Competent Authority."]
    },
    {
      title: "Work Experience",
      desc: null,
      subpoints: [
        "The candidate must have a minimum of one year of full-time or regular work experience in the below-mentioned organizations:-.",
        "The candidate must be working in a registered industry or organization, which can include:",
        "Central or State Government organizations",
        "Private or Public Limited Companies",
        "Micro, Small, and Medium Enterprises(MSMEs). "
      ]
    },
    {
      title: "Education",
      desc: null,
      subpoints: [
        "The candidate must have passed a minimum three-year Bachelor’s Degree from any University recognized by the University Grants Commission (UGC) or the Association of Indian Universities (AIU).",
        "The degree can be in any discipline with at least 50% marks in aggregate (or equivalent). For Reserved Category, Economically Weaker Section(EWS), and Persons with Disabilities(PWD) candidates from Maharashtra State, the minimum required marks are 45% (or equivalent)."
      ]
    }
  ];

  const contacts = [
    { name: "Dr. Sonal Sharma", phone: "+91 9961686449" },
    { name: "Prof. Sonal Gupta", phone: "+91 9305791496" },
    { name: "Admissions Office", phone: "022-67308301/02" }
  ];

  return (
    <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />

      <div className="mca-page">
        {/* HERO */}
        <section>
          <div className="mca-hero">
            <h1>MCA for Working Professionals</h1>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="why-choose">
          <div className="mca-text">
            <h2>About MCA for Working Professionals</h2>
            <hr />
            <ul>
              {highlights.map((item, i) => (
                <li key={i}>
                  <div className="mca-list-point">
                    <strong>{item.title}</strong>
                    <span>{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="choose-img">
            <img src="/school-building.jpg" alt="Campus" />
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className="why-choose">
          <div className="choose-img">
            <img src="/school-building.jpg" alt="Campus" />
          </div>
          <div className="mca-text">
            <h2>Why Choose TIMSCDR?</h2>
            <hr />
            <ul>
              {highlights.map((item, i) => (
                <li key={i}>
                  <strong>{item.title}</strong>
                  <span>{item.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ELIGIBILITY */}
        <section className="eligibility">
          <div className="mca-text">
            <h2>Eligibility Criteria</h2>
            <hr />
          </div>
          <div className="eligibility-list">
            {eligibilityDetails.map((el, i) => (
              <div key={i}>
                <h4>{el.title}</h4>
                {el.desc && <p>{el.desc}</p>}
                {el.subpoints && (
                  <ul className="eligibility-subpoints">
                    {el.subpoints.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="contact-cta">
          <h2 className="cta-title">Need Help With the CET Entrance Test?</h2>
          <p className="cta-subtitle">Contact Us Today.</p>

          <div className="contact-row">
            {contacts.map((c, i) => (
              <div className="contact-block" key={i}>
                <div className="icon-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div>
                  <span className="contact-name">{c.name}</span>
                  <span className="contact-phone">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ marginRight: "4px" }}
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    {c.phone}
                  </span>
                </div>
              </div>
            ))}

          </div>
          <button className="btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg"
              width="18" height="18" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
              className="btn-icon">
              <path d="M8 2v4"></path>
              <path d="M16 2v4"></path>
              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
              <path d="M3 10h18"></path>
            </svg>
            Enquire Now
          </button>

        </section>

      </div>

      <Footer />
    </>
  );
}
