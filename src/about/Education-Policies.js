import React from "react";
import "./Education-Policies.css";

import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import CTAButtons from "../components/sticky-button";
import PageHeader from "./PageHeader";

const EducationalPolicy = () => {
  return (
    <>
      <Navbar />
      <CTAButtons />


      <div className="eo-page">
        {/* Simple nav bar */}

        {/* Main content */}
        <main className="eo-container eo-main">
          
          <div className="eo-section">
            <h2 className="eo-title"></h2>
                  <PageHeader
        title="Educational Organization Policy"
        crumbs={[{ label: "Home", href: "/" }, { label: "Educational Organization Policy" }]}
      />
            <p className="eo-text">
              We, at Thakur Institute of Management Studies, Career Development
              &amp; Research are committed to offer excellence in software
              education, in inclusive and conducive academic environment for
              holistic development of our students. We work as a team and
              interact with students in pro-active manner to achieve our
              Educational Organization Objectives and fulfill all academic,
              statutory and regulatory requirements. We strive for continual
              improvement of our Educational Organizations Management System.
            </p>

            <h3 className="eo-subtitle">Strategic Plan</h3>
            <ol className="eo-olist">
              <li>Continual improvement in all Institutional processes</li>
              <li>
                Develop conducive academic environment to inculcate global
                competencies among students.
              </li>
              <li>Promote culture of research and entrepreneurship</li>
              <li>
                Enhance Industry–Institute Interaction via collaboration with
                National &amp; International organizations.
              </li>
              <li>Develop socially conscientious students.</li>
            </ol>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default EducationalPolicy;
