import "..";

import React, { useState } from "react";
// import "./styles.css";
import Navbar from "../components/navbar";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Footer from "../components/Footer";


const Studentdownload = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />
      <main className="main-container">
        <h1 className="heading">Student Downloads</h1>

        <div className="grid-container">
          {/* Left Sidebar Links */}
          <section className="sidebar">
            <div className="link-list">
              <a
                href="https://www.timscdrmumbai.in/wp-content/uploads/2024/12/No-Dues.pdf."
                target="pdf-viewer"
                className="link-card blue-border"
              >
                <span className="material-icons icon blue">description</span>
                <p>
                  No Dues Certificate 
                </p>
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
                src="https://www.timscdrmumbai.in/wp-content/uploads/2024/12/No-Dues.pdf"
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

export default Studentdownload;
