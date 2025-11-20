import React, { useState } from "react";
import "./mcaPageStyles.css";
import Footer from "../components/Footer";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Navbar from "../components/navbar";

export default function IMCA_Admission() {
  const [activeTab, setActiveTab] = useState("eligibility");

  const handleTab = (tab) => () => setActiveTab(tab);
  const [showForm, setShowForm] = useState(false);

  return (


    <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />
      <div className="mca-page">
        {/* Hero Section */}
        <div className="mca-hero">
          <div className="mca-hero-content">
            <h1>Integrated MCA (IMCA)</h1>
          </div>
        </div>

        {/* Main Content */}
        <main className="mcaPage-main">
          <div className="mcaPage-container">
            {/* Program Overview */}
            <section className="mcaPage-section">
              <div className="mcaPage-programOverview">
                <div className="mcaPage-container mcaPage-overviewInner">
                  <div className="mcaPage-overviewGrid">
                    <div className="mcaPage-overviewText">
                      <p>
                        An Integrated MCA (IMCA) is a valuable program that allows students to pursue technical education immediately after completing their 12th grade. It combines undergraduate and postgraduate studies in a single, streamlined course, typically over five years.
                      </p>
                      <p>
                        This saves both time and effort compared to pursuing separate degrees.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Eligibility & Requirements */}
            <section className="mcaPage-section">
              <h2 className="mcaPage-sectionTitle">Eligibility & Requirements</h2>

              <div className="mcaPage-tabs">
                <button
                  className={`mcaPage-tabBtn ${activeTab === "eligibility" ? "is-active" : ""}`}
                  onClick={handleTab("eligibility")}
                  type="button"
                >
                  Eligibility Criteria
                </button>
                <button
                  className={`mcaPage-tabBtn ${activeTab === "documents" ? "is-active" : ""}`}
                  onClick={handleTab("documents")}
                  type="button"
                >
                  Required Documents
                </button>
                <button
                  className={`mcaPage-tabBtn ${activeTab === "process" ? "is-active" : ""}`}
                  onClick={handleTab("process")}
                  type="button"
                >
                  Admission Process
                </button>
              </div>

              {/* Tab: Eligibility */}
              {/* Tab: Eligibility */}
              <div className={`mcaPage-tabPanel ${activeTab === "eligibility" ? "is-active" : ""}`}>
                <div className="mcaPage-card">
                  <h3>Eligibility Criteria (A.Y. 2025–26)</h3>

                  <p>

                    Admission to First Year of the Five-Years Full-Time Integrated Postgraduate Degree
                    Course in Master of Computer Applications (MCA) for the A.Y. 2025–26
                  </p>

                  <p>
                    <strong>
                      For Maharashtra State Candidature Candidates, All India Candidature Candidates,
                      Union Territory of Jammu and Kashmir and Union Territory of Ladakh Migrant
                      Candidature Candidates</strong>
                    <p> The candidate should fulfill the following eligibility criteria:</p>
                  </p>

                  <ul className="mcaPage-reqList">
                    <li>(i) The candidate should be an <strong>Indian National</strong>.</li>
                    <li>
                      (ii) The candidate should have passed the <strong>10+2 examination</strong> with
                      <strong> Mathematics / Statistics / Accountancy</strong> as a compulsory subject,
                      and obtained at least <strong>45% marks</strong> (at least <strong>40% marks</strong>
                      in case of candidates belonging to the reserved category within Maharashtra State)
                      in the above subjects taken together.
                    </li>
                    <li>
                      (iii) Obtained a <strong>non-zero positive score in MH-MCA-CET-2025</strong>.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Tab: Documents */}
              <div className={`mcaPage-tabPanel ${activeTab === "documents" ? "is-active" : ""}`}>
                <div className="mcaPage-docsGrid">
                  <div className="mcaPage-docItem">
                    <strong>Certificates Required (Photocopies)</strong>
                    <ul className="mcaPage-docList">
                      <li>MAH-MCA-CET 2025 score card</li>
                      <li>Seat Allotment Letter from CET CELL (if applicable)</li>
                      <li>FC Verification letter (if applicable)</li>
                      <li>SSC & HSC mark sheets and certificates</li>
                      <li>Nationality Certificate (School Leaving / Passport / Birth Certificate)</li>
                      <li>Domicile Certificate (if applicable)</li>
                      <li>Minority Declaration / Leaving Certificate with Hindi Mother Tongue (if applicable)</li>
                      <li>Caste/Tribe Validity Certificate (if applicable)</li>
                      <li>Non-Creamy Layer Certificate valid till 31 March 2026 (if applicable)</li>
                      <li>Certificates in prescribed Proformas (A, B1, B2, etc. as applicable)</li>
                    </ul>
                  </div>

                  <div className="mcaPage-docItem">
                    <strong>On Final Admission (Originals + Copies)</strong>
                    <ul className="mcaPage-docList">
                      <li>All original certificates listed above</li>
                      <li>Affidavit for Minority Status (if applicable)</li>
                      <li>Gap Certificate (if applicable)</li>
                      <li>AICTE Anti-Ragging Undertaking (student & parent, on stamp paper)</li>
                      <li>Physical Fitness Certificate (Registered Medical Practitioner)</li>
                      <li>Five recent passport size photographs</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Tab: Process */}
              <div className={`mcaPage-tabPanel ${activeTab === "process" ? "is-active" : ""}`}>
                <div className="mcaPage-processFlow">
                  <h3 className="mcaPage-processTitle">Admission Procedure</h3>
                  <p className="mcaPage-processIntro">
                    Admissions are conducted as per the norms of the Admission Regulatory Authority (ARA) and the MH-CET Cell under DTE, Government of Maharashtra. Rules of AICTE, GoM, DTE Maharashtra, and University of Mumbai are strictly followed.
                  </p>

                  <div className="mcaPage-flowSteps">
                    <div className="mcaPage-flowStep">
                      <div className="mcaPage-flowStepNum">1</div>
                      <h4>Application</h4>
                      <p>Submit online application via CET Cell portal</p>
                    </div>
                    <div className="mcaPage-flowStep">
                      <div className="mcaPage-flowStepNum">2</div>
                      <h4>Entrance Test</h4>
                      <p>Appear for MH-MCA-CET 2025</p>
                    </div>
                    <div className="mcaPage-flowStep">
                      <div className="mcaPage-flowStepNum">3</div>
                      <h4>Merit & Allotment</h4>
                      <p>Check merit list and seat allotment</p>
                    </div>
                    <div className="mcaPage-flowStep">
                      <div className="mcaPage-flowStepNum">4</div>
                      <h4>Document Verification</h4>
                      <p>Verify and submit required certificates</p>
                    </div>
                    <div className="mcaPage-flowStep">
                      <div className="mcaPage-flowStepNum">5</div>
                      <h4>Final Admission</h4>
                      <p>Confirm admission and pay fees at institute</p>
                    </div>
                  </div>

                </div>

              </div>
            </section>
            <p className="mcaPage-processNote" style={{ textAlign: "center" }}>
              For detailed admission schedule, visit:{" "}
              <a href="https://cetcell.mahacet.org" target="_blank" rel="noopener noreferrer">
                cetcell.mahacet.org
              </a>
            </p>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
