import "./recruitment.css";

import React, { useState } from "react";
import Navbar from "../components/navbar";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Footer from "../components/Footer";

// Example icon imports (SVGs recommended for crisp scaling)
import iconDescription from "../assets/file_8208360.svg";
import iconChevronRight from "../assets/arrow_14090761.svg";

const Recruitment = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />
      <main className="main-container">
        <h1 className="heading">Recruitment</h1>

        <div className="grid-container">
          {/* Left Sidebar Links */}
          <section className="sidebar">
            <div className="link-list">
              <a
                href="https://timscdrmumbai.in/wp-content/uploads/2023/06/Faculty-Recruitment-Invitation-for-website-1-2.pdf"
                target="pdf-viewer"
                className="link-card blue-border"
              >
                <img className="icon blue" src={iconDescription} alt="" aria-hidden="true" />
                <p>
                  Applications are invited for the Post of Professor, Associate
                  Professor &amp; Assistant Professor
                </p>
                <img className="arrow" src={iconChevronRight} alt="" aria-hidden="true" />
              </a>

              <a
                href="https://www.timscdrmumbai.in/wp-content/uploads/2025/07/Recruitment-2025.pdf"
                target="pdf-viewer"
                className="link-card blue-border"
              >
                <img className="icon blue" src={iconDescription} alt="" aria-hidden="true" />
                <p>
                  Applications are invited for the following posts for the
                  Academic Year 2025 - 2026
                </p>
                <img className="arrow" src={iconChevronRight} alt="" aria-hidden="true" />
              </a>
            </div>
          </section>

          {/* Right Content (PDF Viewer) */}
          <section className="content">
            <div className="pdf-container">
              <iframe
                className="pdf-frame"
                name="pdf-viewer"
                src="https://timscdrmumbai.in/wp-content/uploads/2023/06/Faculty-Recruitment-Invitation-for-website-1-2.pdf"
                title="Recruitment PDF Viewer"
              ></iframe>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Recruitment;
