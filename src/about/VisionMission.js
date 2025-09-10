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
                • To provide holistic education for students by imbibing
                self-management to bring in social transformation
                <br />• To develop the capability of continuous learning,
                innovative business practices with ethical values.
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
