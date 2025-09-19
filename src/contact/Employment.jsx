import "./recruitment.css";

import React, { useState } from "react";
// import "./styles.css";
import Navbar from "../components/navbar";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Footer from "../components/Footer";

  import iconDescription from "../assets/file_8208360.svg";
import iconChevronRight from "../assets/arrow_14090761.svg";


const Employment = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />
      <main className="main-container">
        <h1 className="heading">Employee Handbook</h1>

        <div className="grid-container">
          {/* Left Sidebar Links */}
          <section className="sidebar">
            <div className="link-list">
              <a
                href="https://timscdrmumbai.in/wp-content/uploads/2024/04/Employees-Handbook-2023-New-1.pdf"
                target="pdf-viewer"
                className="link-card blue-border"
              >
                <img className="icon blue" src={iconDescription} alt="" aria-hidden="true" />
                <p>Employee Handbook(2023)</p>
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

export default Employment;
