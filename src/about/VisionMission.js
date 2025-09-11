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
        <h1 className="page-title">Vision & Mission</h1>

        {/* Vision & Mission Section */}
        <div className="vision-div">
          <div className="vision-box">
            <div>
              <h3>Our Vision</h3>
              <hr />
              <p>
                Thakur Institute of Management Studies, Career Development &
                Research will become a premier institute renowned   
                internationally for providing education in software application
                to graduates from various disciplines.
              </p>
            </div>
            <div>
              <img
                // src="./images/icons/vision.webp"
                alt="vision - Thakur Institute of Management Studies, Career Development & Research"
              />
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
                To achieve excellence in providing software education so that
                students can grasp existing as well as emerging technologies and
                to inculcate leadership and managerial qualities in them so that
                they can deliver results in the organization they join.
              </p>
            </div>
          </div>
        </div>

        {/* PO Section */}
      </div>
      <Footer />
    </>
  );
};

export default VisionMission;
