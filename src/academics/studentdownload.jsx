import "..";

import React, { useState } from "react";
// import "./styles.css";
import Navbar from "../components/navbar";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Footer from "../components/Footer";
import PageHeader from "../about/PageHeader";
import iconDescription from "../assets/file_8208360.svg";
import iconChevronRight from "../assets/arrow_14090761.svg";



const Studentdownload = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />
      <main className="vision-mission-container">
        <PageHeader
          title="Student Downloads"
          crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Student Downloads' }, // current page (no href)
          ]}
        />


        <div className="grid-container">
          {/* Left Sidebar Links */}
          <section className="sidebar">
            <div className="link-list">
              <a
                href="https://www.timscdrmumbai.in/wp-content/uploads/2024/12/No-Dues.pdf."
                target="pdf-viewer"
                className="link-card blue-border"
              >
               <img className="icon blue" src={iconDescription} alt="" aria-hidden="true" />
                <p>
                  No Dues Certificate
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
