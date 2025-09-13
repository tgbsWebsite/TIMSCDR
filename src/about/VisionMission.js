import React from "react";
import "./VisionMission.css";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import CTAButtons from "../components/sticky-button";
import PageHeader from "./PageHeader";

const VisionMission = () => {
  return (
    <>
      <Navbar />
      <CTAButtons />
      <div className="vision-mission-container">
        {/* <div className="breadcrumb">HOME / VISION & MISSION</div> */}
         <PageHeader
        title="Vision & Mission"
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Rules & Guidelines' }, // current page (no href)
        ]}
      />

        {/* Vision & Mission Section */}
      <div className="vision-section">
  <div className="vision-div">
    <div className="vision-box">
      <div>
        <h3>Our Vision</h3>
        <hr />
        <p>
          Thakur Institute of Management Studies, Career Development &
          Research will become a premier institute renowned internationally for
          providing education in software application to graduates from various disciplines.
        </p>
      </div>
      <div>
        <img
        // src="/Website_Assets/vision.jpeg"
          alt="vision - Thakur Institute of Management Studies, Career Development & Research"
        />
      </div>
    </div>

    <div className="mission-box">
      <div>
        <img
        // src="/Website_Assets/mission.jpeg"
          alt="Mission - Thakur Institute of Management Studies, Career Development & Research"
        />
      </div>
      <div>
        <h3>Our Mission</h3>
        <hr />
        <p>
          To achieve excellence in providing software education so that students can grasp
          existing as well as emerging technologies and to inculcate leadership and
          managerial qualities in them so that they can deliver results in the organization they join.
        </p>
      </div>
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
