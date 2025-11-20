import React, { useState } from "react";
import Navbar from "../components/navbar";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Footer from "../components/Footer";
import PageHeader from "../about/PageHeader";

const CodeOfConduct = () => {
  const [showForm, setShowForm] = useState(false);
  const [pdfSrc, setPdfSrc] = useState(
    "https://timscdrmumbai.in/wp-content/uploads/2023/06/Student-Handbook.pdf" // Student Handbook PDF
  );

  return (
    <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />
      <div className="aicte-main-container">
        <PageHeader
          title="Code of Conduct For Students"
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Code of Conduct For Students" },
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
                <img
                  src="/path-to-icons/description-icon.png"
                  alt="Document Description Icon"
                  className="icon-image blue"
                  style={{ width: '24px', height: '24px', marginRight: '0.5rem' }}
                />
                <p>Code of Conduct For Students</p>
                <img
                  src="/path-to-icons/chevron-right.png"
                  alt="Arrow Icon"
                  className="icon-image arrow"
                  style={{ width: '24px', height: '24px' }}
                />
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
      </div>
      <Footer />
    </>
  );
};

export default CodeOfConduct;
