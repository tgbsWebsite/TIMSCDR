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

      <main className="vision-mission-container">
        <PageHeader
          title="Vision & Mission"
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Rules & Guidelines" },
          ]}
        />

        {/* Vision & Mission */}
        <section className="vm-section">
          {/* Vision */}
          <article className="vm-block vm-block--reverse">
            <div className="vm-media">
              <img
                src="/Website_Assets/vision.webp"
                loading="lazy"
                alt="Vision illustration for Thakur Institute"
                className="vm-img"
              />
            </div>
            <div className="vm-content">
              <h2>Our Vision</h2>
              <div className="vm-underline" aria-hidden="true" />
              <p>
                Thakur Institute of Management Studies, Career Development & Research will become a premier institute renowned internationally for providing education in software application to graduates from various disciplines.
              </p>
            </div>
          </article>

          {/* Mission */}
          <article className="vm-block">
            <div className="vm-media">
              <img
                src="/Website_Assets/mission.webp"
                loading="lazy"
                alt="Mission illustration for Thakur Institute"
                className="vm-img"
              />
            </div>
            <div className="vm-content">
              <h2 >Our Mission</h2>
              <div className="vm-underline" aria-hidden="true" />
              <p >
               To achieve excellence in providing software education so that students can grasp existing as well as emerging technologies and to inculcate leadership and managerial qualities in them so that they can deliver results in the organization they join.
              </p>
            </div>
          </article>
        </section>


      </main>

      <Footer />
    </>
  );
};

export default VisionMission;
