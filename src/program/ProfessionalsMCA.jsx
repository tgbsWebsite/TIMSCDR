import React, { useState } from "react";
import "./MCAProgram1.css";
// import "./MCAProgram.css";
import Footer from "../components/Footer";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Navbar from "../components/navbar";
import PageHeader from "../about/PageHeader";

export default function ProfessionalMCAProgram() {
  const [showForm, setShowForm] = useState(false);

  const highlights = [
    { title: "FLEXIBLE WITH YOUR SCHEDULE ", desc: "Hybrid mode with Evening/Weekend academic sessions" },
    { title: "GLOBALLY RECOGNIZED & ACCREDITED DEGREE ", desc: "2-year Program Degree approved by AICTE & DTE, conferred by the University of Mumbai" },
    { title: "INDUSTRY-FOCUSED CURRICULUM ", desc: "Gain in-depth knowledge of IT domains, master emerging tools, and develop leadership skills" },
    { title: "ACCELERATE YOUR CAREER GROWTH ", desc: "Unlock higher earning potential and prepare for leadership roles" },
    { title: "EXPAND YOUR OPPORTUNITIES ", desc: "Seamlessly transition into impactful roles in the technology sector" },
    { title: "NETWORKING OPPORTUNITIES ", desc: "Gain exclusive access to the TIMSCDR Alumni Portal" },
    { title: "ACADEMIC DELIVERY ", desc: "By Thakur Institute of Management Studies, an A+ Grade NAAC accredited institute" },
  ];

  const eligibilityDetails = [
    {
      title: "Entrance Exam",
      desc: null,
      subpoints: ["The candidate must have obtained the requisite score in the MAH/MCA-CET 2025 conducted by the Competent Authority."]
    },
    {
      title: "Work Experience",
      desc: null,
      subpoints: [
        "The candidate must have a minimum of one year of full-time or regular work experience in the below-mentioned organizations:-.",
        "The candidate must be working in a registered industry or organization, which can include:",
        "Central or State Government organizations",
        "Private or Public Limited Companies",
        "Micro, Small, and Medium Enterprises(MSMEs). "
      ]
    },
    {
      title: "Education",
      desc: null,
      subpoints: [
        "The candidate must have passed a minimum three-year Bachelor’s Degree from any University recognized by the University Grants Commission (UGC) or the Association of Indian Universities (AIU).",
        "The degree can be in any discipline with at least 50% marks in aggregate (or equivalent). For Reserved Category, Economically Weaker Section(EWS), and Persons with Disabilities(PWD) candidates from Maharashtra State, the minimum required marks are 45% (or equivalent)."
      ]
    }
  ];

  const contacts = [
    { name: "Dr. Sonal Sharma", phone: "+91 9961686449" },
    { name: "Prof. Sonal Gupta", phone: "+91 9305791496" },
    { name: "Admissions Office", phone: "022-67308301/02" }
  ];
  return (
    <>
      <Navbar />
      <CTAButtons />
      <div className="ycyp-container">
        <header className="mp-header">
          <div
            className="mp-hero-bg"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDpsctWlWIJYYd6kQ0-jx_uS5fAs69nyDDUwBS0m1PO9NvkzpE1f5UrASWAwqEtrtFSPGVlnazwHzwG_3OMBZ1YTlR6z-g2dUC9zb5Y17QtQyC86Duei79XxR7xUnpBq1rsJWm_awz_hirDcuhTZsCNnNz27sIGwOF7XLOluw4PS2uF0gCPaPc-DjEPyZbe1NiB8UFKgBSrQSwwZKZIAeDahAENhfD04qeWGXdrGYxfqpOnLeEDaWYPRJyM9OBq6flvCZwE35Mte48D')",
            }}
          >
            <div className="mp-hero-overlay">
              <div className="mp-title">MCA For Working Professionals</div>
              <nav className="mp-breadcrumbs">
                <a href="/" className="mp-link">
                  HOME
                </a>
                <span className="mp-divider">/</span>
                <span className="mp-current">PROGRAM</span>
              </nav>
            </div>
          </div>
        </header>

        <main>
          <div className="ycyp-main-grid">
           <div className="ycyp-main-content">
              <div className="ycyp-main-title">
                Your Career <br /> Your Pace
              </div>
              <div className="ycyp-main-subtitle">
                Complete your MCA while being Working Professionals
              </div>
              <div className="ycyp-main-desc">
                A 2 Year Program perfectly designed for working professionals affiliated with the University of Mumbai and AICTE &amp; DTE norms approved.
              </div>
              <div className="ycyp-main-highlight">
                Last date to submit your MAH-MCA-CET 2023 is 25th Jan, 2023.
              </div>
            </div>

            <div className="ycyp-image-block">
              <img
                className="ycyp-main-image"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2d02tp_3h0hQSE_ZIwn6YV962JUb4mfbhIhaDS3rlBpY6KhB7XcbM1sRIwIsDHqFU9MlsqdxpH1Hk6HE2Iso1UJGd23yf5-bVhn-LMkcys4iYDBWqHP6QFjyR4LoV3ZugZDYLAj0QfqBs_9of2WudpaOSJ4_pEaR836OKHX1KRY1IJPMhAzNxkc-Oq4KJVzzO-oOdSAq9E6AY929VxFAsUllPbzBxjSXebeksTvigfi2jDpfUDjU-zla6X3UpEQ7Jo4pgE6OGCKqh"
                alt="A smiling man in a suit jacket, looking at the camera"
              />
            </div>
          </div>
          {/* ABOUT MCA FOR WORKING PROFESSIONAL'S */}
          <section className="ycyp-section">
            <div className="ycyp-section-header">
              ABOUT MCA FOR WORKING PROFESSIONAL'S?
            </div>
            <div className="ycyp-section-body">
              <div className="ycyp-section-row">
                <span className="ycyp-check-icon">✔</span>
                <div>
                  <span className="ycyp-bold">FLEXIBLE WITH YOUR SCHEDULE:</span> Hybrid mode with <span className="ycyp-bold">Evening/Weekend</span> academic success.
                </div>
              </div>
              <div className="ycyp-section-row">
                <span className="ycyp-check-icon">✔</span>
                <div>
                  <span className="ycyp-bold">GLOBALLY RECOGNIZED & ACCREDITED DEGREE:</span> 2-year PG Degree approved by <span className="ycyp-bold">AICTE & DTE</span>, conferred by the <span className="ycyp-bold">University of Mumbai</span> and accredited with <span className="ycyp-bold">A+ Grade by NAAC</span>.
                </div>
              </div>
              <div className="ycyp-section-row">
                <span className="ycyp-check-icon">✔</span>
                <div>
                  <span className="ycyp-bold">INDUSTRY-FOCUSED CURRICULUM:</span> Gain in-depth knowledge of <span className="ycyp-bold">IT domains</span>, master <span className="ycyp-bold">trending tools</span>, and develop <span className="ycyp-bold">leadership and teamwork</span> skills for lifelong success.
                </div>
              </div>
              <div className="ycyp-section-row">
                <span className="ycyp-check-icon">✔</span>
                <div>
                  <span className="ycyp-bold">ACCELERATE YOUR CAREER GROWTH:</span> Unlock <span className="ycyp-bold">higher earning potential</span> and prepare for leadership roles with skills designed for <span className="ycyp-bold">career advancement</span>.
                </div>
              </div>
              <div className="ycyp-section-row">
                <span className="ycyp-check-icon">✔</span>
                <div>
                  <span className="ycyp-bold">EXPAND YOUR OPPORTUNITIES:</span> Gain access to enterprise projects and seamlessly transition into impactful roles in <span className="ycyp-bold">technology</span> and <span className="ycyp-bold">IT sectors</span>.
                </div>
              </div>
              <div className="ycyp-section-row">
                <span className="ycyp-check-icon">✔</span>
                <div>
                  <span className="ycyp-bold">NETWORK OF OPPORTUNITY:</span> Learn alongside a diverse group of working professionals and gain exclusive access to the <span className="ycyp-bold">TIMSCDR Alumni</span> network, providing you with a rich network of peers and industry leaders and more!
                </div>
              </div>
              <div className="ycyp-section-row">
                <span className="ycyp-check-icon">✔</span>
                <div>
                  <span className="ycyp-bold">ACADEMIC ENTRY:</span> by <span className="ycyp-bold">Thakur Institute of Management Studies, Career Development & Research</span>, a distance education hub affiliated with the <span className="ycyp-bold">University of Mumbai</span> and accredited with an <span className="ycyp-bold">A+ Grade by NAAC</span>.
                </div>
              </div>
            </div>

          </section>
          {/* WHY CHOOSE TIMSCDR */}
          <section className="ycyp-section">
            <div className="ycyp-section-header">
              WHY CHOOSE TIMSCDR?
            </div>
            <div className="ycyp-section-body">
              <div className="ycyp-section-row">
                <span className="ycyp-check-icon">✔</span>
                <div>
                  <span className="ycyp-bold">LEGACY OF EXCELLENCE:</span> Established in 2001, TIMSCDR has over 23 years of experience in shaping future ready students.
                </div>
              </div>
              <div className="ycyp-section-row">
                <span className="ycyp-check-icon">✔</span>
                <div>
                  <span className="ycyp-bold">EXPERT FACULTY:</span> Learn from experienced educators and industry professionals who bring real-world insights into the classroom.
                </div>
              </div>
              <div className="ycyp-section-row">
                <span className="ycyp-check-icon">✔</span>
                <div>
                  <span className="ycyp-bold">FLEXIBLE SCHEDULES:</span> Tailored to your lifestyle, choose from online, weekend, or evening classes to balance work and study.
                </div>
              </div>
              <div className="ycyp-section-row">
                <span className="ycyp-check-icon">✔</span>
                <div>
                  <span className="ycyp-bold">CUTTING-EDGE RESOURCES:</span> Access to state-of-the-art labs, libraries, and research facilities to enhance your learning experience.
                </div>
              </div>
              <div className="ycyp-section-row">
                <span className="ycyp-check-icon">✔</span>
                <div>
                  <span className="ycyp-bold">CAREER-FOCUSED:</span> Our curriculum is designed to equip you with skills that are immediately applicable, giving you the competitive edge in your current or future role.
                </div>
              </div>
            </div>

          </section>
          {/* ELIGIBILITY CRITERIA */}
          <section className="ycyp-section">
            <div className="ycyp-section-header">
              ELIGIBILITY CRITERIA FOR MCA WORKING PROFESSIONAL
            </div>
            <div className="ycyp-section-body">
              <div className="ycyp-section-row">
                <span className="ycyp-check-icon">✔</span>
                <div>
                  <span className="ycyp-bold">ENTRANCE EXAM:</span> The candidate must have obtained the requisite score in the MAH-MCA-CET exam conducted by the Competent Authority.
                </div>
              </div>
              <div className="ycyp-section-row">
                <span className="ycyp-check-icon">✔</span>
                <div>
                  <div>
                    <span className="ycyp-bold">WORK EXPERIENCE:</span>
                  </div>
                  <ul className="ycyp-list">
                    <li>
                      The candidate must have a minimum of one year of full-time or regular work experience in the below-mentioned organizations.
                    </li>
                    <li>
                      The candidate must be working in a registered industry or organization, which can include:
                      <ul className="ycyp-list-inner">
                        <li>Central or State Government organizations.</li>
                        <li>Public or Private Limited companies.</li>
                        <li>Micro, Small and Medium Enterprises (MSMEs).</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="ycyp-section-row">
                <span className="ycyp-check-icon">✔</span>
                <div>
                  <span className="ycyp-bold">EDUCATIONAL QUALIFICATION:</span><br />
                  The candidate must have passed a minimum three-year Bachelor's Degree from any University recognized by the University Grants Commission (UGC) or the Association of Indian Universities (AIU).<br />
                  The candidate must have obtained a minimum of 50% marks in aggregate (or equivalent). For Reserved Category, Economically Weaker Section (EWS), and Persons with Disabilities (PwD) candidates from Maharashtra State, the minimum required marks are 45% (or equivalent).
                </div>
              </div>
            </div>

          </section>
          {/* CET Help */}
          <section className="ycyp-help-block">
            <div className="ycyp-help-title">NEED HELP WITH THE CET ENTRANCE TEST?</div>
            <div className="ycyp-help-contact">CONTACT US TODAY!</div>
          </section>
        </main>
        <div className="ycyp-footer">
          <div className="ycyp-footer-flex">
            <div className="ycyp-footer-main">CONTACT FOR MORE INFO:</div>
            <div>
              <div className="ycyp-footer-contact">DR. SONAL SHARMA</div>
              <div>+91 9969446644</div>
            </div>
            <div>
              <div className="ycyp-footer-contact">PROF. SONU GUPTA</div>
              <div>+91 9987650242</div>
            </div>
            <div>
              022-67308501/02<br />
              022-28849494
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
