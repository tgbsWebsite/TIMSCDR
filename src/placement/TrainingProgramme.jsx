import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Navbar from "../components/navbar";
import "./TrainingProgramme.css";

const TrainingProgramme = () => {
  useEffect(() => {
    const header = document.getElementById("header");
    const onScroll = () => {
      if (header) {
        if (window.scrollY > 100) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      }
    };
    window.addEventListener("scroll", onScroll);

    const anchors = document.querySelectorAll('a[href^="#"]');
    const handleAnchorClick = (e) => {
      e.preventDefault();
      const target = document.querySelector(e.currentTarget.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    anchors.forEach((anchor) => anchor.addEventListener("click", handleAnchorClick));

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    const programCards = document.querySelectorAll(".program-card");
    programCards.forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(30px)";
      card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(card);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      anchors.forEach((anchor) => anchor.removeEventListener("click", handleAnchorClick));
      observer.disconnect();
    };
  }, []);

  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />

      {/* Training Section */}
      <section className="training-section" id="programs">
        <div className="training-content">
          <div className="training-visual">
            {/* You can optionally add visual element here */}
          </div>
          <div className="training-text">
            <h2>
              <span className="highlight">Training</span> Programme
            </h2>

            <div className="program-card">
              <div className="program-title">🎯 Student Development Program</div>
              <div className="program-description">
                A comprehensive training programme implemented through workshops, guest lectures, seminars, and simulation exercises. Students become ready for the ever-changing corporate landscape. TIMSCDR organizes international conferences to provide platforms for students, researchers, and faculty development.
              </div>
            </div>

            <div className="program-card">
              <div className="program-title">💼 Pre-Placement Training</div>
              <div className="program-description">
                Focused training on corporate ethics, etiquettes, and soft skills development. Students receive exposure to industry work culture, ethics, and professional practices. Includes aptitude skills, resume writing, interview skills, mock tests, and personal interview preparation.
              </div>
            </div>

            <div className="program-card">
              <div className="program-title">🌟 Entrepreneurship Cell</div>
              <div className="program-description">
                Active entrepreneurship initiatives providing platforms for innovation, skill development beyond academics, and real-world business experience through student-managed clubs and events.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="contact-content">
          <h2 className="contact-title">Ready to Start Your Journey?</h2>
          <p>If you have any questions, call us on</p>
          <div className="contact-number">022 - 67308301/02</div>
          <a href="#appointment" className="btn-primary">Book Appointment</a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default TrainingProgramme;
