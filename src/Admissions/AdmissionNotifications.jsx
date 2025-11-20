import React, { useState } from "react";
import Navbar from "../components/navbar";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Footer from "../components/Footer";
import PageHeader from "../about/PageHeader";

const AICTEApproval = () => {
  const [showForm, setShowForm] = useState(false);
  const [imgSrc, setImgSrc] = useState('https://www.timscdrmumbai.in/wp-content/uploads/2025/09/Admission-Notification.jpeg');
  // List of EOA years with their corresponding PDF URLs
  const eoaYears = [
    { year: "Notification in Newspapers for Institute Level seats", url: "https://www.timscdrmumbai.in/wp-content/uploads/2025/09/Admission-Notification.jpeg" },
    { year: "Notification in Newspapers Against CAP seats", url: "https://www.timscdrmumbai.in/wp-content/uploads/2025/09/AdmissionNotification.jpg" },

  ];
  const handleLinkClick = (url) => {
    setImgSrc(url);
  };


  return (
    <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />
      <div className="aicte-main-container">
        <PageHeader
          title="Admission Notification"
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Admission Notification" },
          ]}
        />



        <div className="grid-container">
          {/* Left Sidebar Links */}
          <section className="sidebar">
            <div className="link-list">
              {eoaYears.map((item, index) => (
                <a
                  href="#"
                  onClick={() => handleLinkClick(item.url)} // Update the iframe src on click
                  className="link-card blue-border"
                  key={index}
                >
                  <img
                    src="/path-to-icons/description-icon.png"
                    alt="Document Description Icon"
                    className="icon-image blue"
                    style={{ width: '24px', height: '24px', marginRight: '0.5rem' }}
                  />
                  <p>{item.year}</p>
                  <img
                    src="/path-to-icons/chevron-right.png"
                    alt="Arrow Icon"
                    className="icon-image arrow"
                    style={{ width: '24px', height: '24px' }}
                  />
                </a>
              ))}
            </div>
          </section>

          {/* Right Content (PDF Viewer) */}
          <section className="content">
            <div className="image-container">
              <img
                src={imgSrc}
                alt="Selected Notification"
                style={{ width: '100%', maxHeight: '100vh', objectFit: 'contain' }}
                className="image-display"
              />
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AICTEApproval;
