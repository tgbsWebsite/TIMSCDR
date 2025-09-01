import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Navbar from "../components/navbar";
import './Placement.css';

const Aboutplacement = () => {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const anchors = document.querySelectorAll('a[href^="#"]');
    function handleAnchorClick(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    anchors.forEach(anchor => anchor.addEventListener("click", handleAnchorClick));

    // Animate cards on scroll
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    document.querySelectorAll(".ps-card, .ps-chart-card").forEach(card => {
      card.style.opacity = "0";
      card.style.transform = "translateY(30px)";
      card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(card);
    });

    // Cleanup
    return () => {
      anchors.forEach(anchor => anchor.removeEventListener("click", handleAnchorClick));
    };
  }, []);

  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />

      <div className="ps-body">
        {/* Hero Section */}
        

        {/* Main Content */}
        <main className="ps-main-content">
          {/* About Placement Section */}
          <section id="about" className="ps-section">
            <div className="ps-section-header">
              <h2 className="ps-section-title">About Placement</h2>
              <p className="ps-section-subtitle">TIMSCDR is renowned among MCA colleges in Mumbai for its well-established, process-driven placement system.</p>
            </div>

            <div className="ps-about-box">
              <p>
                Our proactive training and placement cell, led by <strong>Prof. Sonu Gupta</strong> and <strong>Prof. Brijesh Pandey</strong>, works year-round to train students, ensuring they become valuable assets to any company they join. Major companies like <strong>Infosys, Accenture, Asian Paints, CapGemini, Oracle</strong>, etc., regularly visit our campus, providing excellent career opportunities and options after MCA.
              </p>
            </div>

            {/* Placement Categories */}
            <div className="ps-cards-grid">
              <div className="ps-card">
                <div className="ps-card-icon">🎓</div>
                <h3>Project Training</h3>
                <p>The final semester internship (January–May) where students work as full-time employees and present their project work at the end of the semester.</p>
              </div>
              <div className="ps-card">
                <div className="ps-card-icon">💼</div>
                <h3>Final Placement</h3>
                <p>Students placed under this category join the recruiting company after completion of MCA, typically starting in July.</p>
              </div>
            </div>

            {/* Training & Placement Cell Activities */}
            <div className="ps-activities-box">
              <h3 className="ps-activities-title">Training & Placement Cell Activities</h3>
              <div className="ps-cards-grid">
                <div className="ps-activity-card">
                  <div className="ps-activity-icon">🔍</div>
                  <h4>Recruiter Identification</h4>
                  <p>Identifying and inviting potential recruiters for Project and Final Placement opportunities.</p>
                </div>
                <div className="ps-activity-card">
                  <div className="ps-activity-icon">🤝</div>
                  <h4>Coordination</h4>
                  <p>Coordinating with students and recruiters for smooth recruitment and selection processes.</p>
                </div>
                <div className="ps-activity-card">
                  <div className="ps-activity-icon">🎯</div>
                  <h4>Student Facilitation</h4>
                  <p>Facilitating students in Final Placement and providing comprehensive support.</p>
                </div>
              </div>
            </div>

            {/* Placement Process */}
            <div className="ps-process-box">
              <h3 className="ps-process-title">Placement Process</h3>
              <div className="ps-process-grid">
                <div className="ps-process-step">
                  <div className="ps-process-step-number">1</div>
                  <h4>Pre-Placement Talk</h4>
                  <p>Company introduction and role overview</p>
                </div>
                <div className="ps-process-step">
                  <div className="ps-process-step-number">2</div>
                  <h4>Aptitude Test</h4>
                  <p>Assessment of logical and analytical skills</p>
                </div>
                <div className="ps-process-step">
                  <div className="ps-process-step-number">3</div>
                  <h4>Technical Test</h4>
                  <p>Evaluation of technical knowledge and skills</p>
                </div>
                <div className="ps-process-step">
                  <div className="ps-process-step-number">4</div>
                  <h4>Personal Interview</h4>
                  <p>Final assessment and cultural fit evaluation</p>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="ps-eligibility-box">
              <h3 className="ps-eligibility-title">Eligibility & Support</h3>
              <div className="ps-eligibility-grid">
                <div>
                  <h4>Eligibility Criteria</h4>
                  <p>Students become eligible for placement as per the eligibility criteria of recruiting companies. Special efforts are made to arrange companies with no eligibility criteria as well.</p>
                </div>
                <div>
                  <h4>Post-Selection Process</h4>
                  <p>Once selection is complete, recruiters intimate selected students through the Institute's placement cell and provide necessary information and guidelines for induction.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Statistics Section */}
          <section id="statistics" className="ps-stats-section">
            <div className="ps-section-header">
              <h2 className="ps-section-title ps-text-white">Placement Statistics</h2>
              <p className="ps-section-subtitle ps-text-white-sub">Our track record speaks for itself with consistent high placement rates and satisfied students.</p>
            </div>
            <div className="ps-stats-grid">
              <div className="ps-stat-item">
                <h3>95%</h3>
                <p>Placement Rate</p>
              </div>
              <div className="ps-stat-item">
                <h3>50+</h3>
                <p>Partner Companies</p>
              </div>
              <div className="ps-stat-item">
                <h3>12LPA</h3>
                <p>Highest Package</p>
              </div>
              <div className="ps-stat-item">
                <h3>3.5LPA</h3>
                <p>Average Package</p>
              </div>
            </div>
          </section>

          {/* Charts Section */}
          <section className="ps-section">
            <div className="ps-section-header">
              <h2 className="ps-section-title">Placement Analytics</h2>
              <p className="ps-section-subtitle">Detailed insights into our placement performance across different programs and years.</p>
            </div>
            <div className="ps-charts-container">
              <div className="ps-chart-card">
                <h3 className="ps-chart-title">Placement Goals vs Achievements</h3>
                <div className="ps-chart-placeholder">MCA, BCA &amp; B.Tech Stats</div>
              </div>
              <div className="ps-chart-card">
                <h3 className="ps-chart-title">Number of Companies Visited</h3>
                <div className="ps-chart-placeholder">Annual Company Visit Trends</div>
              </div>
              <div className="ps-chart-card">
                <h3 className="ps-chart-title">Average Salary Trends</h3>
                <div className="ps-chart-placeholder">Year-wise Salary Analysis</div>
              </div>
              <div className="ps-chart-card">
                <h3 className="ps-chart-title">Sector-wise Placement</h3>
                <div className="ps-chart-placeholder">Industry Distribution</div>
              </div>
            </div>
          </section>

          {/* Recruiters Section */}
          <section id="recruiters" className="ps-recruiters-section">
            <div className="ps-section-header">
              <h2 className="ps-section-title">Our Prominent Recruiters</h2>
              <p className="ps-section-subtitle">We maintain strong partnerships with leading companies across various industries.</p>
            </div>
            <div className="ps-recruiters-grid">
              <div className="ps-recruiter-logo">TCS</div>
              <div className="ps-recruiter-logo">Infosys</div>
              <div className="ps-recruiter-logo">Wipro</div>
              <div className="ps-recruiter-logo">Accenture</div>
              <div className="ps-recruiter-logo">Cognizant</div>
              <div className="ps-recruiter-logo">HCL</div>
              <div className="ps-recruiter-logo">IBM</div>
              <div className="ps-recruiter-logo">Microsoft</div>
              <div className="ps-recruiter-logo">Amazon</div>
              <div className="ps-recruiter-logo">Google</div>
              <div className="ps-recruiter-logo">Flipkart</div>
              <div className="ps-recruiter-logo">Paytm</div>
              <div className="ps-recruiter-logo">Zomato</div>
              <div className="ps-recruiter-logo">Swiggy</div>
              <div className="ps-recruiter-logo">BYJU'S</div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="ps-contact-section">
            <h2 className="ps-section-title ps-text-white">Have Questions?</h2>
            <p className="ps-contact-desc">Get in touch with our placement team for personalized guidance and support.</p>
            <div className="ps-contact-form">
              <input type="tel" className="ps-contact-input" placeholder="Enter your phone number" />
              <button className="ps-contact-button">Connect Now</button>
            </div>
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Aboutplacement;
