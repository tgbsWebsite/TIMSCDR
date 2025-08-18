import React, { useState } from "react";
// import "./styles.css";
import Navbar from "../components/navbar";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Footer from "../components/Footer";

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
          <h1 className="heading">Student Grievance Redressal</h1>

          <form action="#" method="POST" className="form">
            <div className="contact-right">
              {/* Name & Email */}
              <div className="form-grid">
                <div className="form-group">
                  <label className="label" htmlFor="name">
                    Your Name <span className="required">*</span>
                  </label>
                  <div className="input-icon">
                    <input
                      className="input"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="label" htmlFor="email">
                    Your Email <span className="required">*</span>
                  </label>
                  <div className="input-icon">
                    <input
                      className="input"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Mobile */}
              <div className="form-group">
                <label className="label" htmlFor="mobile">
                  Your Mobile Number
                </label>
                <div className="input-icon">
                  <input
                    className="input"
                    type="tel"
                    id="mobile"
                    name="mobile"
                    placeholder="123-456-7890"
                  />
                </div>
              </div>

              {/* Stakeholders & Categories */}
              <div className="form-row">
                <div className="form-group">
                  <label className="label" htmlFor="stakeholders">
                    Select Stakeholders
                  </label>
                  <select
                    id="stakeholders"
                    name="stakeholders"
                    className="select"
                  >
                    <option>Faculty</option>
                    <option>Administration</option>
                    <option>Student Council</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="label" htmlFor="categories">
                    Select Categories
                  </label>
                  <select id="categories" name="categories" className="select">
                    <option>Academic</option>
                    <option>Financial</option>
                    <option>Infrastructure</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              {/* Comment */}
              <div className="form-group">
                <label className="label" htmlFor="comment">
                  Comment
                </label>
                <textarea
                  className="input"
                  id="comment"
                  name="comment"
                  rows="4"
                  placeholder="Describe your grievance in detail..."
                ></textarea>
              </div>

              {/* Submit */}
              <div className="form-actions">
                <button type="submit" className="btn">
                  Submit Grievance
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GrievanceForm;
