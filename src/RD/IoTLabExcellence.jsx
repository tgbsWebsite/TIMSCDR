import React, { useEffect, useState } from "react";
import "./IoTLabExcellence.css";
import Footer from "../components/Footer";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Navbar from "../components/navbar";

const IoTLabExcellence = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Fade-in intersection animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

    // Counter animation
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counters = entry.target.querySelectorAll(
            ".IoTLabExcellence-stat-number"
          );
          const targets = [1000, 9, 6];
          counters.forEach((counter, idx) => {
            let current = 0;
            const increment = targets[idx] / 100;
            const timer = setInterval(() => {
              current += increment;
              counter.textContent =
                Math.floor(current) + (targets[idx] >= 1000 ? "+" : "");
              if (current >= targets[idx]) {
                counter.textContent =
                  targets[idx] + (targets[idx] >= 1000 ? "+" : "");
                clearInterval(timer);
              }
            }, 20);
          });
          statsObserver.unobserve(entry.target);
        }
      });
    });
    const statsCounter = document.querySelector(
      ".IoTLabExcellence-stats-counter"
    );
    if (statsCounter) statsObserver.observe(statsCounter);
  }, []);

  return (
    <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />

      <div className="IoTLabExcellence-container">

        {/* HERO */}
        <section className="IoTLabExcellence-hero fade-in" id="home">
          <div className="IoTLabExcellence-hero-content">
            <h2>IoT Excellence Lab</h2>
            <p>
              The Internet of Things (IoT) is about connecting devices, sensors,
              and systems to exchange real-time data. TIMSCDR’s IoT Excellence
              Lab enables hands-on learning and innovation.
            </p>
            <a href="#lab" className="IoTLabExcellence-cta-button">
              Explore Our Lab
            </a>
          </div>

          <div className="IoTLabExcellence-stats-counter">
            <div className="IoTLabExcellence-stat-item">
              <div className="IoTLabExcellence-stat-number">1000+</div>
              <div className="IoTLabExcellence-stat-label">
                Students Trained
              </div>
            </div>
            <div className="IoTLabExcellence-stat-item">
              <div className="IoTLabExcellence-stat-number">9</div>
              <div className="IoTLabExcellence-stat-label">Prototypes</div>
            </div>
            <div className="IoTLabExcellence-stat-item">
              <div className="IoTLabExcellence-stat-number">6</div>
              <div className="IoTLabExcellence-stat-label">Years Experience</div>
            </div>
          </div>
        </section>

        {/* OBJECTIVES */}
        <section className="IoTLabExcellence-objectives">
          <div className="IoTLabExcellence-section-header">
            <h3>Lab Objectives</h3>
            <p>Comprehensive IoT education with industry collaboration</p>
          </div>
          <div className="IoTLabExcellence-objectives-grid">
            {[
              ["Student Engagement", "Sessions, lectures & interactive programs"],
              ["Skills Development", "Workshops & training aligned to industry"],
              ["Industry Collaboration", "Partner projects bridging academia-industry"],
              ["Project Development", "In-house & industry real-world IoT solutions"],
              ["Quality Content", "Manuals, documentation & research"],
              ["Excellence Lab", "Continued support for IoT innovation"],
            ].map(([title, desc], idx) => (
              <div className="IoTLabExcellence-objective-card fade-in" key={idx}>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* LAB INFO */}
        <section className="IoTLabExcellence-lab-info" id="lab">
          <div className="IoTLabExcellence-section-header">
            <h3>IoT Excellence Lab</h3>
            <p>Equipped for cutting-edge IoT education & projects</p>
          </div>
          <div className="IoTLabExcellence-lab-grid">
            <div className="IoTLabExcellence-lab-details fade-in">
              <h4>Lab Infrastructure</h4>
              <p>
                Our IoT Lab is equipped with Raspberry Pi, Arduino kits,
                sensors, and project kits for hands-on IoT product development.
              </p>
              <p>
                <strong>Industry Partnership:</strong> With M/S Makerville
                Solutions (OPC) Pvt Ltd, led by Anuj Deshpande & Rituparna
                Matkar.
              </p>
              <div className="IoTLabExcellence-equipment-list">
                <span className="IoTLabExcellence-equipment-tag">
                  5 Raspberry Pi Kits
                </span>
                <span className="IoTLabExcellence-equipment-tag">
                  20 Arduino Kits
                </span>
                <span className="IoTLabExcellence-equipment-tag">
                  Various Sensors
                </span>
                <span className="IoTLabExcellence-equipment-tag">
                  Project Kits
                </span>
              </div>
            </div>

            <div className="IoTLabExcellence-inauguration-info fade-in">
              <h4>Lab Inauguration</h4>
              <div className="date">15 February 2017</div>
              <p className="person">
                Inaugurated by <br /> <strong>Dr. Sudhakar Yedla</strong> <br />
                Professor, IGIDR Mumbai
              </p>
              <p style={{ marginTop: "15px", fontSize: "0.9rem" }}>
                Also inaugurated the IoT Lab manual created under Dr. Vinita
                Gaikwad.
              </p>
            </div>
          </div>
        </section>

        {/* PROTOTYPES */}
        <section className="IoTLabExcellence-prototypes" id="prototypes">
          <div className="IoTLabExcellence-section-header">
            <h3>Prototypes Developed</h3>
            <p>Innovative IoT solutions addressing real-world issues</p>
          </div>
          <div className="IoTLabExcellence-prototypes-grid">
            {[
              "Social Distancing ID Card",
              "Smart Mask Prototype",
              "Persistence of Vision Display",
              "Home Automation",
              "Arduino Controlled Car",
              "Automated Irrigation System",
              "Water Quality Monitoring",
              "Air Quality Analyzer",
              "Motion Sensor & Buzzer",
            ].map((item, idx) => (
              <div className="IoTLabExcellence-prototype-card fade-in" key={idx}>
                <h5>{item}</h5>
                <p>
                  A prototype project showcasing IoT applications in safety,
                  automation, and monitoring.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* EVENTS */}
        <section className="IoTLabExcellence-events" id="events">
          <div className="IoTLabExcellence-section-header">
            <h3>IoT Workshops & Events</h3>
            <p>Interactive IoT training programs (2015–2022)</p>
          </div>
          <div className="IoTLabExcellence-events-timeline">
            {[
              ["2021-22", "11 Feb 2022", "Basic IoT Workshop (Online)", "130 Participants"],
              ["2020-21", "16-18 Feb 2021", "Basic IoT Workshop (Online)", "156 Participants"],
              ["2019-20", "3-7 Feb 2020", "Basic & Advanced IoT Workshop", "95 Participants"],
              ["2018-19", "11-15 Feb 2019", "Advanced IoT Workshop", "135 Participants"],
            ].map(([year, date, title, participants], idx) => (
              <div className="IoTLabExcellence-event-item fade-in" key={idx}>
                <div className="IoTLabExcellence-event-date">
                  <div className="year">{year}</div>
                  <div className="date">{date}</div>
                </div>
                <div className="IoTLabExcellence-event-content">
                  <h4>{title}</h4>
                  <p>Hands-on sessions, Arduino/RPi demos, and live projects.</p>
                  <span className="IoTLabExcellence-participants">
                    {participants}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SCHOOLS */}
        <section className="IoTLabExcellence-school-programs" id="schools">
          <div className="IoTLabExcellence-section-header">
            <h3>IoT Awareness Programs for Schools</h3>
            <p>Hands-on demos for school students</p>
          </div>

          <div className="IoTLabExcellence-schools-table-wrapper fade-in">
            <table className="IoTLabExcellence-schools-table">
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>School Name</th>
                  <th>Date</th>
                  <th>Participants</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Samata Vidya Mandir", "02/01/2021", "20 "],
                  ["Ramratna Vidya Mandir", "03/08/2019", "50 "],
                  ["Samata Vidya Mandir", "26/03/2019", "47 "],
                  ["GCC International School", "07/07/2018", "48 "],
                  ["Thakur Public School", "17/01/2018 and 19/01/2018", "116 "],
                   ["Thakur Vidya Mandir High School and Junior College", "14/12/2017 to 16/12/2017", "122"],

                ].map(([school, date, studs], idx) => (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{school}</td>
                    <td>
                      <span className="IoTLabExcellence-date-badge">{date}</span>
                    </td>
                    <td>
                      <span className="IoTLabExcellence-participants-count-table">
                        {studs}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>


        {/* CONTACT */}
        <section className="IoTLabExcellence-contact" id="contact">
          <h3>Join Our IoT Excellence Journey</h3>
          <p>Get hands-on training & real-world experience with IoT projects</p>
          <a href="#programs" className="IoTLabExcellence-cta-button">Get Started</a>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default IoTLabExcellence;
