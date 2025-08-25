import react, { useState } from "react";
import Footer from "../components/Footer";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Navbar from "../components/navbar";

export default function AdmissionNotifications() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />
      <div className="container-fs">
        <h2 className="heading">Admission Notification</h2>
        <div className="adm-floating-elements">
          <div className="adm-floating-circle"></div>
          <div className="adm-floating-circle"></div>
          <div className="adm-floating-circle"></div>
        </div>

        <section className="adm-notifications">
          <div className="adm-notification-card">
            <div className="adm-card-header">
              <h2 className="adm-card-title">Admission Notification</h2>
            </div>
            <img
              src="https://www.timscdrmumbai.in/wp-content/uploads/2025/08/Faculty-Recruitment.jpg"
              alt="Admission Notification"
              className="adm-notification-image"
            />
            {/* <div className="adm-notification-overlay">
            <h3 className="adm-notification-title">Admission Notification</h3>
            <div className="adm-notification-details">
              <span className="adm-detail-tag">Academic Year 2025-2026</span>
              <span className="adm-detail-tag">New Admissions</span>
              <span className="adm-detail-tag">Open Category</span>
              <span className="adm-detail-tag">AICTE Approved</span>
            </div>
            <div className="adm-action-buttons">
              <a href="#apply" className="adm-btn adm-btn-primary">
                Apply Now
              </a>
              <a href="#details" className="adm-btn adm-btn-secondary">
                View Details
              </a>
            </div>
          </div> */}
          </div>

          <div className="adm-notification-card">
            <div className="adm-card-header">
              <h2 className="adm-card-title">
                Cancellation of Admission of CAP Round
              </h2>
            </div>
            <img
              src="https://www.timscdrmumbai.in/wp-content/uploads/2024/09/Admission-Cancellation.jpg"
              alt="Cancellation of Admission of CAP Round"
              className="adm-notification-image"
            />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
