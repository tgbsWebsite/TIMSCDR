import React from "react";
import "./Education-Policies.css";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import CTAButtons from "../components/sticky-button";

const EducationPolicies = () => {
  return (
    <>
      <Navbar />
      <CTAButtons />
      <div className="Education-Policies-container">
        <h1 className="page-title">Educational Organization Policy </h1>
        {/* Content Layout */}
        <div className="vision-box">
          <img
            // src={InspiringImage}
            alt="Inspiring Creativity"
          />

          {/* Right Column - Paragraph */}
          <div className="policy-text">
            <p>
              We, the staff, faculty and management of Thakur Institute of
              Management Studies, Career Development and Research are committed
              to offer excellence in software education, in inclusive and
              conducive academic environment for holistic development of our
              students. We work as a team and interact with students in
              pro-active manner to achieve our Educational Organization
              Objectives and fulfill all academic, statutory and regulatory
              requirements. We strive for continual improvement of our
              Educational Organizations Management System.
            </p>
          </div>
        </div>
        <h1 className="sub-page-title">Strategic Plan</h1>
        <hr/>
        <div className="timeline">
            <div className="timeline-item">
                Continual improvement in all Institutional processes
            </div>
            <div className="timeline-item">
                Develop conducive academic environment to inculcate global
                competencies among students.
            </div>
            <div className="timeline-item">
                Promote culture of research and entrepreneurship
            </div>
            <div className="timeline-item">
                Enhance Industry-Institute interaction via collaboration with
                National & International organizations.
            </div>
            <div className="timeline-item">
                Develop socially conscientious students.
            </div>
          </div>
        </div>
      <Footer />
    </>
  );
};

export default EducationPolicies;
