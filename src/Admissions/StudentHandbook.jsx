import React, { useState } from "react";
import Navbar from "../components/navbar";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Footer from "../components/Footer";
import PageHeader from "../about/PageHeader";
import iconDescription from "../assets/file_8208360.svg";
import iconChevronRight from "../assets/arrow_14090761.svg";


const StudentHandbook = () => {
  const [showForm, setShowForm] = useState(false);
  const [pdfSrc, setPdfSrc] = useState(
    "https://timscdrmumbai.in/wp-content/uploads/2023/06/Student-Handbook.pdf" // Student Handbook PDF
  );

  return (
    <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />
      <main className="main-container">
        <PageHeader
          title="Student Handbook"
          crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Student Handbook' }, // current page (no href)
          ]}
        />



        <div className="grid-container">
          {/* Left Sidebar Links */}
          <section className="sidebar">
            <div className="link-list">
              <a
                href="#"
                onClick={() => setPdfSrc("https://timscdrmumbai.in/wp-content/uploads/2023/06/Student-Handbook.pdf")} // Static PDF URL
                className="link-card blue-border"
              >
                 <img className="icon blue" src={iconDescription} alt="" aria-hidden="true" />
                <p>Download Student Handbook</p>
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
                src={pdfSrc} // Dynamically set the PDF URL
                title="Student Handbook PDF Viewer"
              ></iframe>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default StudentHandbook;
