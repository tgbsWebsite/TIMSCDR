import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";

const accordionData = [
  {
    section: "Ph.D. Admission 2024-25",
    sidebarLinks: [
      {
        title: "Advertisement",
        url: "https://www.timscdrmumbai.in/wp-content/uploads/2024/12/Final_PhD-AD-2024-25-9-6x12cm-Outline.pdf",
      },
      {
        title: "Admission Form for Academic Year 2024-2025",
        url: "https://www.timscdrmumbai.in/wp-content/uploads/2024/12/PhD-Admission_Form-24-25-New.pdf",
      },
    ],
    body: null
  },
  {
    section: "Ordinance and Circulars",
    sidebarLinks: [
      { title: "PhD Course Work Syllabus", url: "https://www.timscdrmumbai.in/wp-content/uploads/2024/11/PhD-Course-work-detail_new.pdf" },
      { title: "Circular for Research Ethics in PhD Course Work", url: "https://www.timscdrmumbai.in/wp-content/uploads/2024/11/Circular-for-Reserach-Ethics-in-Ph.D.-Course-work-1.pdf" },
      { title: "Circular for Eligibility for PhD in Faculty of Technology", url: "https://www.timscdrmumbai.in/wp-content/uploads/2024/11/4405511_Draft-UGC-PhD-regulations-2022.pdf" },
    ],
    body: null,
  },
];

export default function PhdAccordion() {
  const [showForm, setShowForm] = useState(false);
  const [activeSection, setActiveSection] = useState(accordionData[0].section);
  const [openSidebarIndex, setOpenSidebarIndex] = useState(null);
  const [activePdf, setActivePdf] = useState(
    "https://www.timscdrmumbai.in/wp-content/uploads/2024/12/Final_PhD-AD-2024-25-9-6x12cm-Outline.pdf"
  );


  const currentSectionData = accordionData.find(
    (item) => item.section === activeSection
  );

  return (
    <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />

      <div className="mca-page">
        {/* HERO SECTION */}
                <header className="mp-header">
                    <div
                        className="mp-hero-bg"
                        style={{
                            backgroundImage:
                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDpsctWlWIJYYd6kQ0-jx_uS5fAs69nyDDUwBS0m1PO9NvkzpE1f5UrASWAwqEtrtFSPGVlnazwHzwG_3OMBZ1YTlR6z-g2dUC9zb5Y17QtQyC86Duei79XxR7xUnpBq1rsJWm_awz_hirDcuhTZsCNnNz27sIGwOF7XLOluw4PS2uF0gCPaPc-DjEPyZbe1NiB8UFKgBSrQSwwZKZIAeDahAENhfD04qeWGXdrGYxfqpOnLeEDaWYPRJyM9OBq6flvCZwE35Mte48D')",
                        }}
                    >
                        <div className="mp-hero-overlay">
                            <div className="mp-title">Ph.D. Admission</div>
                            <nav className="mp-breadcrumbs">
                                <a href="/" className="mp-link">
                                    HOME
                                </a>
                                <span className="mp-divider">/</span>
                                <span className="mp-current">Ph.D. Admission</span>
                            </nav>
                        </div>
                    </div>
                </header>

        {/* INTRO CARD */}
        <div className="mca-text">
          <h2 className="center-heading">
            Doctor of Philosophy (Ph.D.) in Computer Applications
          </h2>
          <div style={{ textAlign: "center" }}>
            The Ph.D. at TIMSCDR is affiliated with the University of Mumbai and
            conducted under the Faculty of Science & Technology.
          </div>

        </div>

        {/* TWO-COLUMN LAYOUT */}
        <div className="phd-container">
          {/* LEFT SIDEBAR */}
          {/* LEFT SIDEBAR */}
          <div className="phd-sidebar">
            {accordionData.map((item, idx) => {
              const isOpen = openSidebarIndex === idx;
              return (
                <div key={item.section} className="accordion-section">
                  <button
                    className={`accordion-title ${activeSection === item.section ? "active" : ""
                      }`}
                    onClick={() => {
                      setActiveSection(item.section);
                      setOpenSidebarIndex(isOpen ? null : idx);
                      // setActivePdf(null); // reset PDF view when switching section
                    }}
                  >
                    {item.section}
                    <span className="arrow">{isOpen ? "–" : "+"}</span>
                  </button>

                  {/* Sidebar PDF Links */}
                  <div
                    className={`sidebar-links ${isOpen ? "expanded" : ""}`}
                    style={{
                      maxHeight: isOpen ? `${item.sidebarLinks.length * 65}px` : "0",
                    }}
                  >
                    <ul className="pdf-links-list">
                      {item.sidebarLinks.map((link, linkIdx) => (
                        <li
                          key={linkIdx}
                          className={`pdf-link-item ${activePdf === link.url ? "active" : ""}`}
                          onClick={() => setActivePdf(link.url)}
                        >
                          {link.title}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              );
            })}
          </div>



          {/* RIGHT PANEL - Now Static */}
          <div className="phd-content-panel">
            <div className="inner">
              {/* If PDF link was clicked, show PDF */}
              {activePdf ? (
                <iframe
                  src={activePdf}
                  title="PDF Viewer"
                  width="100%"
                  height="1000px"
                  frameBorder="0"
                ></iframe>
              ) : (
                <>
                  <h3>{currentSectionData?.section}</h3>
                  {currentSectionData?.body}
                </>
              )}
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}
