import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Footer from "../components/Footer";
import "./ResearchCell.css";

const ResearchCell = () => {
  useEffect(() => {
    // IntersectionObserver for scroll animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("rc-visible");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".rc-fade-in").forEach((el) => observer.observe(el));

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });

    // Parallax effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector(".rc-hero");
      if (hero) hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleShowYear = (year, e) => {
    document.querySelectorAll(".rc-tab").forEach((tab) => {
      tab.classList.remove("rc-active");
    });
    e.target.classList.add("rc-active");
    console.log("Showing data for:", year);
  };
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />
      <div className="container-fs">
        <h1 className="heading">Research Cell</h1>
        {/* Header */}

        {/* Hero */}


        <main className="rc-main-content">

          <div className="container-fs">

            <div className="rc-content-wrapper">
              {/* Main Left Content */}
              <div className="rc-main-section">
                {/* R&D card */}
                <div className="rc-content-card rc-fade-in" id="research">
                  <h2 className="rc-section-title">Research and Development</h2>
                  <p>
                    Research and Development (R&D) at TIMSCDR is responsible for
                    promoting a robust research culture within the Institute...
                  </p>
                  <p>
                    TIMSCDR aims to conduct research to meet corporate demands and
                    address their needs appropriately...
                  </p>
                  <p>
                    TIMSCDR is pursuing interdisciplinary research work in
                    Agriculture and Medicine (Healthcare) in association with
                    renowned institutes like KEM Hospital & Sion Hospital...
                  </p>
                </div>

                {/* Research Cell card */}
                <div className="rc-content-card rc-fade-in">
                  <h3><strong>Research Cell</strong></h3>
                  <p>
                    TIMSCDR conducts R&D activities under the Research Cell. The
                    Research Cell has the following objectives:
                  </p>

                  <div className="rc-research-objectives">
                    <h3>Research Objectives</h3>
                    <div className="rc-objectives-grid">
                      {[
                        "To encourage Research culture amongst Students and Faculty by organizing conferences and publishing research papers.",
                        "Acquiring and working on Funded Research Projects.",
                        "To perform research in the selected domains of Medicine and Agriculture.",
                        "To study the role of IT applications in Medicine and Agriculture.",
                        "To develop interdisciplinary networks with industry, government, and experts."
                      ].map((text, i) => (
                        <div className="rc-objective-item" key={i}>
                          <div className="rc-objective-number">{i + 1}</div>
                          <div className="rc-objective-text">{text}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Committee table */}
                <div className="rc-committee-section rc-fade-in">
                  <div className="rc-year-tabs">
                    {["2024-25", "2023-24", "2022-23", "2021-22"].map((year, i) => (
                      <button
                        key={i}
                        className={`rc-tab ${i === 0 ? "rc-active" : ""}`}
                        onClick={(e) => handleShowYear(year, e)}
                      >
                        A.Y. {year}
                      </button>
                    ))}
                  </div>
                  <div className="rc-committee-table-container conv-table-wrapper"> <table className="conv-table"> <thead> <tr> <th> Sr. No. <span className="th-subtext">serial</span> </th> <th> Composition <span className="th-subtext">role</span> </th> <th> Name of Member <span className="th-subtext">person</span> </th> <th> Designation <span className="th-subtext">title</span> </th> </tr> </thead> <tbody> <tr> <td>1</td> <td>Chairman</td> <td>Dr. Vinita Gaikwad</td> <td>Director, TIMSCDR</td> </tr> <tr> <td>2</td> <td>Convenor</td> <td>Dr. Padma Mishra</td> <td>Associate Professor, TIMSCDR</td> </tr> <tr> <td>3</td> <td>Member – Finance & Infrastructure Committee</td> <td>Dr Ashwini Renavikar</td> <td>Professor, TIMSCDR</td> </tr> <tr> <td>4</td> <td>Member – Research Program, Policy Development Committee</td> <td>Dr. Sonal Sharma</td> <td>Associate Professor, TIMSCDR</td> </tr> <tr> <td>5</td> <td>Member – Collaboration & Consultancy Committee</td> <td>Ms. Kinjal Doshi</td> <td>Assistant Professor, TIMSCDR</td> </tr> <tr> <td>6</td> <td>Member – IPR, Legal & Ethical Matters</td> <td>Mr. Shirshendu Maitra</td> <td>Assistant Professor, TIMSCDR</td> </tr> <tr> <td>7</td> <td>Member – Product Development, Monitoring and Commercialization</td> <td>Dr. Shiksha Dubey</td> <td>Assistant Professor, TIMSCDR</td> </tr> <tr> <td>8</td> <td>Member</td> <td>Dr. Seema Bansode Gokhe</td> <td>Prof. & Head – PSM Dept., LTMMC & LTMGH</td> </tr> <tr> <td>9</td> <td>Member</td> <td>Mr. Dinesh Kumar Singh</td> <td>TCS Innovation Lab</td> </tr> <tr> <td>10</td> <td>Member</td> <td>Dr. Mukesh Gupta</td> <td>Founder – Le'Nest Hosiptal</td> </tr> <tr> <td>11</td> <td>Member</td> <td>Dr. Vilas Jadhav</td> <td>Principal, KVK Kosbad, Palghar</td> </tr> <tr> <td>12</td> <td>Member</td> <td>Mr. Makrand Churi</td> <td>Agro Consultant</td> </tr> </tbody> </table> </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="rc-sidebar">
                <div className="rc-sidebar-card rc-fade-in">
                  <h3 className="rc-sidebar-title">Research Projects</h3>
                  <ul className="rc-sidebar-list">
                    <li><a href="#">International Conference – ICAIM Award Winners</a></li>
                    <li className="rc-submenu">
                      <a href="#">Faculty Research Work / Publications</a>
                      <ul className="rc-submenu-list">
                        <li><a href="#">A.Y. 2024-25</a></li>
                        <li><a href="#">A.Y. 2023-24</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div className="rc-sidebar-card rc-fade-in">
                  <h3 className="rc-sidebar-title">Journals</h3>
                  <ul className="rc-sidebar-list">
                    {["2024-25", "2023-24", "2022-23", "2021-22", "2020-21"].map((y, i) => (
                      <li key={i}><a href="#">A.Y. {y}</a></li>
                    ))}
                  </ul>
                </div>

                <div className="rc-sidebar-card rc-fade-in">
                  <h3 className="rc-sidebar-title">Conferences</h3>
                  <ul className="rc-sidebar-list">
                    {["2024-25", "2023-24", "2022-23", "2021-22", "2020-21"].map((y, i) => (
                      <li key={i}><a href="#">A.Y. {y}</a></li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default ResearchCell;
