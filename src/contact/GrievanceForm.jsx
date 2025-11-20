import React, { useState } from "react";
// import "./styles.css";
import Navbar from "../components/navbar";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Footer from "../components/Footer";
import PageHeader from "../about/PageHeader";

const GrievanceForm = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      {" "}
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />
      <div className="contact-container">
        <div className="contact-left">
          <PageHeader
            title="Student Grievance Redressal"
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Student Grievance Redressal" },
            ]}
          />

          <h1 className="heading"></h1>

          <div >
            <div className="gf-form-wrapper">
              <div className="gf-header">


              </div>
              <form className="gf-form">
                <div className="gf-grid-two-cols">
                  <div className="gf-form-group">
                    <label className="gf-label" htmlFor="name">
                      Your Name <span className="gf-required">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      className="gf-input"
                      required
                    />
                  </div>
                  <div className="gf-form-group">
                    <label className="gf-label" htmlFor="email">
                      Your Email <span className="gf-required">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="gf-input"
                      required
                    />
                  </div>
                </div>

                <div className="gf-form-group">
                  <label className="gf-label" htmlFor="mobile">
                    Your Mobile Number
                  </label>
                  <input
                    id="mobile"
                    type="tel"
                    placeholder="123-456-7890"
                    className="gf-input"
                  />
                </div>

                <div className="gf-grid-two-cols">
                  <div className="gf-form-group">
                    <label className="gf-label" htmlFor="stakeholders">
                      Select Stakeholders
                    </label>
                    <div className="gf-select-wrapper">
                      <select id="stakeholders" className="gf-select">
                        <option>Faculty</option>
                        <option>Student</option>
                        <option>Staff</option>
                        <option>Parent</option>
                      </select>
                      <span className="material-icons gf-select-icon">expand_more</span>
                    </div>
                  </div>
                  <div className="gf-form-group">
                    <label className="gf-label" htmlFor="categories">
                      Select Categories
                    </label>
                    <div className="gf-select-wrapper">
                      <select id="categories" className="gf-select">
                        <option>Academics</option>
                        <option>Administration</option>
                        <option>Facilities</option>
                        <option>Other</option>
                      </select>
                      <span className="material-icons gf-select-icon">expand_more</span>
                    </div>
                  </div>
                </div>

                <div className="gf-form-group">
                  <label className="gf-label" htmlFor="comment">
                    Comment
                  </label>
                  <textarea
                    id="comment"
                    placeholder="Describe your grievance in detail..."
                    className="gf-textarea"
                    rows="4"
                  ></textarea>
                </div>

                <div className="gf-form-submit-wrapper">
                  <button type="submit" className="gf-submit-button">
                    <span className="material-icons gf-submit-icon">send</span>
                    Submit Grievance
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GrievanceForm;
