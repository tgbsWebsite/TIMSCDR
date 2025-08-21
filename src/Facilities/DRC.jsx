import React, { useState } from "react";
import Footer from "../components/Footer";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Navbar from "../components/navbar";

export default function InfrastructureDFC() {
  const supportItems = [
    {
      imgAlt: "A person in a wheelchair at the top of a ramp",
      imgSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB-KISfZ1HKXZ68pVJVxbo74e1fokdRUOz06GOjVltMlJFWLQdGkJraCfMwdazQ-qKTL2HaSA3MLCA1UXkPeovqqnuo6EZjwsuB89AdVyquDcYCTC0s_C7QIOogC1RBGzHWvxet2Jvdoi3eX86szaWeAo4ojgVrBDZ9yUShNfYjHrC7EScsIdhBcoPmyw0oRq2QD30QAqG2PKKsve7EqpZDa8DUe0tg5GiPiKz2JN6uXFvvI4HR1W2eQHzhoGGvluQL3Gm_wZ46Du-q",
      label: "Wheelchair",
    },
    {
      imgAlt: "A wooden staircase",
      imgSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBh7lh-WqFzNA9-FHYb1hfqN3hdB8YCLworBB_j_HWrCQAAI0InVM2jOlCfI25iqB5bLz323jpMBmh4ZkVZAOnDl6DF7Dce1skLkRbGTDG0B6mOw8ixNpOoDf2GhbEwPQaugUOb43zv5eP20dCQWSvuyQdJw3-4560iCSGY_dN0qedDxOFeVRGzCpmI9vZUYGhiYp37eMoO-nB8KFn5hYHWYUAyLmqlSIrCVWlL39KvTIqjVCkhbzmtv3NmXzQ8iEtkJC1-JhARyxq9",
      label: "Staircase",
    },
    {
      imgAlt: "The entrance of TIMSCDR building with a ramp",
      imgSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBPNcJfEZF3xLK1eyE4LpF0PexUXNmJVk1XlmVhaqQiTMQ_PJmATsa6t2218_iBfuUAIuv6rp6HMEpHdyAGTL12KZsR_Wh7gVx1gwXT64X7goS1QEycFUhQfxQfZdYP8r_-J37EpeNPnCqBs56_tZAq3FD96_c5dHbWI7OYTOTaUMqP1YgqscV4GahYVsrQmtVqEl1RNvvVHolNzaxlk7nTqglrykPnKlvRubRlrJHyp3oetM_8p4mOCjC5t5Azx1-3bsF5d71CXGbd",
      label: "Ramps",
    },
    {
      imgAlt: "A clean, accessible washroom",
      imgSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCfSlQqT98sURUFveBCSbnGZN-mNkY3YNfV5H6_NpJrAYPDk-TCq49jbgxnpME1jVMKiPyIgmAWY_hPTvu9ujP5jwNhEivXP5Mv7LgtjBTz6PlITKeKyhhiYvkO9hKQ43HZynTruH5HQzGlNu8DMMURzeISGcVlaQ35Cy_NMqyDNmdS_iNGGB4nG--im3UQK2UAco6ZiZPkyTj4BUSTNYxzkKTPYM2XnWyyuIP5DA-FgzugGMfUriF8dm88MsjLO-7wW_gbMoN2gIX_",
      label: "Washroom",
    },
  ];

  const disabilitiesFacilities = [
    "Wheel chair",
    "Barrier free access to premises and all areas, class rooms, laboratories, library etc.",
    "Special ladies and gents toilets.",
    "Extended loan period for Library books.",
    "Book bank service.",
    "Extended time for examinations.",
    "Extended time line for submissions.",
    "Reader & writer support during exams.",
    "Special seating in classrooms.",
    "Physical support for outdoor activities.",
    "Mentorship.",
  ];

  const dutyItems = [
    "Submit disability report with certificate to the DFC.",
    "Report to Faculty Mentor with disability profile and concessions required.",
    "Inform the faculty in advance of academic and other needs.",
    "Inform DFC and/or Mentor for any specific need and guidance.",
  ];

  const officeResponsibilities = [
    "Assess student's request for concessions and provide appropriate aids.",
    "Ensure confidentiality of all student information.",
    "Assist students in communicating with faculty and Mentor.",
  ];

  const facultyResponsibilities = [
    "Provide comfortable seating and condone delays.",
    "Provide reasonable instructional and testing concessions.",
    "Acknowledge student rights with dignity and respect.",
    "Maintain academic integrity and student confidentiality.",
    "Provide academic, administrative, and psychological support.",
  ];

  const navLinks = [
    "Home",
    "About Us",
    "Program",
    "Admission",
    "Academics",
    "Facilities",
    "R&D",
    "Placement",
    "IQAC",
    "Examination",
    "Life @ TIMSCDR",
    "About Alumni",
    "Contact",
  ];
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />
      <main className="dfc-main dfc-container">
        <section className="dfc-info-section">
          <h2 className="dfc-section-title text-center">
            Divyangjan Facilities Center (DFC)
          </h2>

          <div className="dfc-content-layout">
            <article className="dfc-content-main">
              <div className="dfc-article-block">
                <h3 className="dfc-subtitle with-icon">
                  <span className="material-icons dfc-icon">info</span> PURPOSE
                </h3>
                <p>
                  TIMSCDR has set up DFC to provide facilities for Divyangjans
                  for easy accessibility to its premises and services depending
                  upon the individual requirements for equal opportunities to
                  learn, participate in campus life and to successfully complete
                  the program of study. The DFC is located in the Institute’s
                  office. The Divyangjans will receive concessions and physical
                  help etc. depending upon their disabilities and based upon
                  individual needs and as specified by the regulatory
                  authorities.
                </p>
              </div>

              <div className="dfc-article-block">
                <h3 className="dfc-subtitle with-icon">
                  <span className="material-icons dfc-icon">visibility</span>{" "}
                  DISPLAY OF INFORMATION
                </h3>
                <p>
                  The information in this respect is displayed in the Admission
                  Brochure, Institute Website and on the Notice Board.
                </p>
              </div>
            </article>

            <aside className="dfc-support-sidebar">
              <h3 className="dfc-sidebar-title">Support from Institute</h3>
              <div className="dfc-support-grid">
                {supportItems.map(({ imgAlt, imgSrc, label }, index) => (
                  <div key={index} className="dfc-support-item">
                    <img
                      src={imgSrc}
                      alt={imgAlt}
                      className="dfc-support-image"
                    />
                    <p className="dfc-support-label">{label}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="dfc-facilities-section">
          <h3 className="dfc-section-title text-center">
            Facilities for Students with Disabilities
          </h3>
          <ul className="dfc-facilities-list">
            {disabilitiesFacilities.map((item, idx) => (
              <li key={idx} className="dfc-facility-item">
                <span className="material-icons dfc-check-icon">
                  check_circle
                </span>{" "}
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="dfc-responsibilities-grid">
          <article className="dfc-responsibility-block dfc-border-green">
            <h4 className="dfc-responsibility-title">STUDENTS’ DUTY</h4>
            <ul className="dfc-responsibility-list">
              {dutyItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="dfc-responsibility-block dfc-border-yellow">
            <h4 className="dfc-responsibility-title">OFFICE RESPONSIBILITY</h4>
            <ul className="dfc-responsibility-list">
              {officeResponsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="dfc-responsibility-block dfc-border-red">
            <h4 className="dfc-responsibility-title">
              FACULTY &amp; MENTOR’s RESPONSIBILITY
            </h4>
            <ul className="dfc-responsibility-list">
              {facultyResponsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </article>
        </section>
      </main>

      <Footer className="dfc-footer">
        <div className="dfc-footer-upper dfc-container">
          <div className="dfc-footer-logos">
            <img
              className="dfc-footer-logo"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvYxlIebmY23X2Vr94MSAJvztUoogJD4ZUj37KNnNjxm_MpaP-G3TJJ3GQe2srthMawM2u86G_PRlFwAX3QhxbG-BEnGBT98UObxvHIl50CzHGVkbU2uBXDpXYJA8iKroE2FNHwkcP32vPU9w-ppZjhocD5o-oNsbwxpkS2tmZIoWAy_moWmGXvyv47xJG5o7OOuY0bQ8BM6e9vKAAPxR2RnbFO-E68VCxdXgQQ7ZKWJR9kA2SNiJylDwY5AzyHK3izA2NrXNOmNWj"
              alt="Thakur Trust Logo"
            />
            <img
              className="dfc-footer-logo"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdhqeAhOfXcLvEhQM4W2c8y02BSCbscorN1WcYEBRVNK6hXqgbFOipafkzTOi9tJk9q1QDvFJicWfZPmookuI7mgOf1aC341RmyBeq2zo3dhZIGCL2qJdOLX2qV-e0J4uphDmGzy3_Tue2L0eo4ORYr85_AEYN3huAq2r8ABv8z8pKBdep5APSTb0vTDoc28boY3ofFnj_tlfVnlJjY1ChnavXc3UHuYCjQaT_7JSWMrxKDfbFmyob2gHmilBWhQfpR9v-mtgnuSYSW"
              alt="TIMSCDR Logo"
            />
          </div>
          <div className="dfc-footer-info">
            <h2>
              THAKUR INSTITUTE OF MANAGEMENT STUDIES, CAREER DEVELOPMENT &amp;
              RESEARCH
            </h2>
            <p>
              Autonomous Institute Affiliated to University of Mumbai, Approved
              by AICTE and Govt. of Maharashtra
              <br />
              ISO 21001: 2018 Certified • NBA Programme Accredited for 3 years •
              Affiliated to University of Mumbai, Approved by AICTE &amp; DTE,
              Govt. of Maharashtra
              <br />
              Thakur Educational Campus, Shyamnarayan Thakur Marg, Thakur
              Village, Kandivali (East), Mumbai - 400 101 • Tel: 022-28849112,
              28849494/91
            </p>
          </div>
        </div>

        <div className="dfc-footer-copy">
          <p>© 2024 Thakur Institute. All Rights Reserved.</p>
        </div>
      </Footer>
    </>
  );
}
