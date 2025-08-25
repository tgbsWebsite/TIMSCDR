import React, { useState } from "react";
import Navbar from "../components/navbar";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Footer from "../components/Footer";

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
        <h1 className="heading">Student Handbook</h1>

        <div className="grid-container">
          {/* Left Sidebar Links */}
          <section className="sidebar">
            <div className="link-list">
              <a
                href="#"
                onClick={() => setPdfSrc("https://timscdrmumbai.in/wp-content/uploads/2023/06/Student-Handbook.pdf")} // Static PDF URL
                className="link-card blue-border"
              >
                <span className="material-icons icon blue">description</span>
                <p>Download Student Handbook</p>
                <span className="material-icons arrow">chevron_right</span>
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
