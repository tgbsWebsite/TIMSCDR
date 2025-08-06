import React from "react";
import "./VisionMission.css";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import CTAButtons from "../components/sticky-button";

const VisionMission = () => {
  return (
    <>
      <Navbar />
      <CTAButtons />
      <div className="vision-mission-container">
        {/* <div className="breadcrumb">HOME / VISION & MISSION</div> */}
        <h1 className="page-title">VISION & MISSION</h1>

        {/* Vision & Mission Section */}
        <div className="vision-div">
          <div className="vision-box">
            <div>
              <h3>Our Vision</h3>
              <hr />
              <p>
                • To emerge as an institution renowned for imparting global
                management education that shapes visionary, mindful leaders
                committed to driving transformative change, fostering innovation
                and creating a sustainable future.
              </p>
            </div>
            <div>
              <img 
              // src="./images/icons/vision.webp" 
              alt="vision - Thakur Institute of Management Studies, Career Development & Research" />
            </div>
          </div>
          <div className="mission-box">
            <div>
              <img
                // src="./images/icons/mission.webp"
                alt="Mission - Thakur Institute of Management Studies, Career Development & Research"
              />
            </div>
            <div>
              <h3>Our Mission</h3>
              <hr />
              <p>
                • To provide holistic education for students by imbibing
                self-management to bring in social transformation
                <br />• To develop the capability of continuous learning,
                innovative business practices with ethical values.
              </p>
            </div>
          </div>
        </div>
        <hr className="full-width-hr" />



        <h2 className="section-title">Program Outcomes (PO's)</h2>

        <div className="po-grid">
          <div className="po-card">
            <strong>PEO-1</strong>
            <p>
              To enable students to gain knowledge across all domains of
              Information Technology with in-depth understanding of their
              applications.
            </p>
          </div>
          <div className="po-card">
            <strong>PEO-2</strong>
            <p>
              To enable students to analyze problems and to design and develop
              software solutions using emerging tools and technologies.
            </p>
          </div>
          <div className="po-card">
            <strong>PEO-3</strong>
            <p>
              To enable students to continue Life-long learning, Research and
              Entrepreneurial pursuit in their chosen fields.
            </p>
          </div>
          <div className="po-card">
            <strong>PEO-4</strong>
            <p>
              To develop communication, teamwork, and leadership skills
              necessary to manage multidisciplinary projects and serve the
              society as responsible and ethical software professionals.
            </p>
          </div>
        </div>

        <h2 className="section-title">
          Program Educational Objectives (PEO's)
        </h2>
        <div className="peo-section">
          <div className="peo-item">
            <strong>PO-1: Foundation Knowledge</strong> Apply knowledge of
            mathematics, programming logic and coding fundamentals for solution
            architecture and problem solving. To enable students to gain
            knowledge across all domains of Information Technology with in-depth
            understanding of their applications.
          </div>
          <div className="peo-item">
            <strong>PO-2: Problem Analysis</strong> Identify, review, formulate
            and analyse problems for primarily focussing on customer
            requirements using critical thinking frameworks.
          </div>
          <div className="peo-item">
            <strong>PO-3: Design/ Development of Solution </strong> Design,
            develop and investigate problems with an innovative approach for
            solutions incorporating ESG/SDG goals.
          </div>
          <div className="peo-item">
            <strong>PO-4: Modern Tool Usage </strong> Select, adapt and apply
            modern computational tools such as development of algorithms with an
            understanding of the limitations including human biases.
          </div>
          <div className="peo-item">
            <strong>PO-5: Individual and Teamwork </strong>
            Function and communicate effectively as an individual or a team
            leader in diverse and multidisciplinary groups. Use methodologies
            such as agile.
          </div>
          <div className="peo-item">
            <strong>PO-6: Project Management and Finance </strong>
            Use the principles of project management such as scheduling, work
            breakdown structure and be conversant with the principles of Finance
            for profitable project management.
          </div>
          <div className="peo-item">
            <strong>PO-7: Ethics </strong>
            Commit to professional ethics in managing software projects with
            financial aspects. Learn to use new technologies for cyber security
            and insulate customers from malware.
          </div>
          <div className="peo-item">
            <strong>PO-7: Ethics </strong>
            Commit to professional ethics in managing software projects with
            financial aspects. Learn to use new technologies for cyber security
            and insulate customers from malware.
          </div>
          <div className="peo-item">
            <strong>PO-8: Life-long Learning </strong>
            Change management skills and the ability to learn, keep up with
            contemporary technologies and ways of working.
          </div>
        </div>

        {/* PO Section */}
      </div>
      <Footer />
    </>
  );
};

export default VisionMission;
