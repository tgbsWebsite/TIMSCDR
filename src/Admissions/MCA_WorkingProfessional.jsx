import React, { useState } from "react";
import "./mcaPageStyles.css";
import Footer from "../components/Footer";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Navbar from "../components/navbar";

export default function MCA_WorkingProfessional() {
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
                        <h1>MCA Working Professional</h1>

                    </div>
                </div>

                {/* Program Overview */}
                <section className="mcaPage-section">
                    <div className="mcaPage-programOverview">
                        <div className="mcaPage-container mcaPage-overviewInner">
                            <div className="mcaPage-overviewGrid">
                                <div className="mcaPage-overviewText">
                                    <p>
                                        A “Working Professional” means employees of registered
                                        industries or organizations (Central/State), Private or
                                        Public Limited Companies, or MSMEs with a minimum of one
                                        year of full-time or regular experience. The MCA Working
                                        Professional course is tailored to balance work and study,
                                        with classes conducted in the evenings or at convenient
                                        timings aligned with industry schedules.
                                    </p>
                                    <p>
                                        The course follows the AICTE-approved structure and provides
                                        professionals the opportunity to enhance their technical and
                                        managerial skills while continuing their employment. Classes
                                        are conducted in regular face-to-face mode as per AICTE
                                        norms.
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
                            className={`mcaPage-tabBtn ${activeTab === "eligibility" ? "is-active" : ""
                                }`}
                            onClick={handleTab("eligibility")}
                        >
                            Eligibility Criteria
                        </button>
                        <button
                            className={`mcaPage-tabBtn ${activeTab === "documents" ? "is-active" : ""
                                }`}
                            onClick={handleTab("documents")}
                        >
                            Required Documents
                        </button>
                        <button
                            className={`mcaPage-tabBtn ${activeTab === "process" ? "is-active" : ""
                                }`}
                            onClick={handleTab("process")}
                        >
                            Admission Process
                        </button>
                    </div>

                    {/* Tab: Eligibility */}
                    <div
                        className={`mcaPage-tabPanel ${activeTab === "eligibility" ? "is-active" : ""
                            }`}
                    >
                        <div className="mcaPage-eligibilityCards">
                            <div className="mcaPage-card">
                                <div className="mcaPage-cardHeader">
                                    <div className="mcaPage-cardNumber">1</div>
                                    <h3>First Year Admission (Working Professionals)</h3>
                                </div>
                                <div className="mcaPage-reqText">
                                    <p>
                                        Admission to the First Year of the Professional MCA program for
                                        Working Professionals for academic year 2025–26.
                                    </p>
                                    <ul className="mcaPage-reqList">
                                        <li>The candidate should be a citizen of India.</li>
                                        <li>
                                            Should have passed any graduation degree (B.E., B.Tech., B.Sc,
                                            B.Com, B.A, B.Voc, BCA, etc.) preferably with Mathematics at 10+2
                                            or at graduation level with at least 50% marks (45% for Reserved
                                            Categories, EWS, PwD of Maharashtra).
                                        </li>
                                        <li>
                                            Candidate must be a working professional in a registered
                                            industry/organization (Central/State), Private/Public Limited
                                            Company, or MSME located within 50 km of the institute.
                                        </li>
                                        <li>
                                            Must have at least one year of full-time/regular work experience in
                                            such organization.
                                        </li>
                                        <li>
                                            Course duration as decided by affiliating University/Institute.
                                        </li>
                                        <li>
                                            Classes will be conducted in evening/flexible timings aligned with
                                            industry schedules.
                                        </li>
                                        <li>
                                            Mode of conduct: Regular Face-to-Face as per AICTE norms (AICTE/AB/Academic/2020-21, dated 13th Aug 2020).
                                        </li>
                                        <li>
                                            Minimum admission required: 1/3 of approved intake for the course.
                                        </li>
                                        <li>
                                            One seat reserved in every Institute for candidates working in
                                            Central Govt. organizations/companies/autonomous bodies purely on
                                            merit. Vacant seat transferred to General category.
                                        </li>
                                        <li>
                                            If admissions fall below 1/3 after pre cut-off, candidates will be
                                            transferred strictly on merit to a nearby institute within 50 km
                                            (same/different course if vacancy exists).
                                        </li>
                                        <li>
                                            Provisional admission stands cancelled if no seat is secured during
                                            transfer.
                                        </li>
                                        <li>
                                            Institutes with admissions below 1/3 after pre cut-off must refund
                                            full fees within 2 days of cancellation/transfer.
                                        </li>
                                        <li>
                                            Any other criteria/requirements as declared by AICTE or competent
                                            authority from time to time.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tab: Documents */}
                    <div className={`mcaPage-tabPanel ${activeTab === "documents" ? "is-active" : ""}`}>
                        <div className="mcaPage-docsGrid">
                            <div className="mcaPage-docItem">
                                <strong>List of photocopies of Certificates to be submitted:</strong>
                                <ul className="mcaPage-docList">
                                    <li>MAH-MCA-CET 2025 score card.</li>
                                    <li>Seat Allotment Letter from the CET CELL (if applicable).</li>
                                    <li>FC Verification letter (if applicable).</li>
                                    <li>Statement of marks & certificate of SSC, HSC and Graduation (all semester/year).</li>
                                    <li>Migration and Provisional Passing Certificate for those candidates who passed from any University other than the University of Mumbai.</li>
                                    <li>Certificate of Indian Nationality (School Leaving Certificate indicating the Nationality of the candidate as ‘Indian’ / Valid Indian Passport / Birth Certificate of the candidate indicating the place of birth in India.)</li>
                                    <li>Domicile Certificate (if applicable), clearly indicating the place of permanent residence of the candidate or father or mother or husband.</li>
                                    <li>Declaration of the Candidate for the Hindi Linguistic Minority Community or Leaving Certificate having information pertaining to Mother tongue Hindi (Minority Candidates).</li>
                                    <li>Caste/Tribe Validity Certificate (if applicable).</li>
                                    <li>Non-Creamy Layer Certificate valid up to 31 March 2026 (if applicable).</li>
                                    <li>Certificates in Proforma A, B1, B2, C, D, E, G1, G2, J, K, L, M, O, U, V, W1 & W2 as applicable (Mentioned in DTE/CET cell brochure).</li>
                                    <li>Any other relevant document.</li>
                                </ul>
                            </div>

                            <div className="mcaPage-docItem">
                                <strong>Documents Required on Final Admission (Originals + Copies)</strong>
                                <ul className="mcaPage-docList">
                                    <li>
                                        All original certificates mentioned above with attested photocopies of the
                                        same.
                                    </li>
                                    <li>
                                        Affidavit for Minority Status on a ₹100/- non-judicial stamp paper in
                                        institute specified format (only for Linguistic Minority candidates).
                                    </li>
                                    <li>
                                        Gap Certificate for the break after completion of Graduation examination
                                        on a ₹100/- non-judicial stamp paper in institute specified format (if
                                        applicable).
                                    </li>
                                    <li>
                                        AICTE Anti-Ragging undertaking by student as well as parents on ₹100/-
                                        non-judicial Stamp Paper duly notarized in AICTE specified format.
                                    </li>
                                    <li>
                                        Physical Fitness Certificate from a registered Medical Practitioner.
                                    </li>
                                    <li>Five recent passport size colour photographs.</li>
                                    <li>Any other relevant document.</li>
                                </ul>
                            </div>


                        </div>
                    </div>

                    {/* Tab: Process */}
                    <div
                        className={`mcaPage-tabPanel ${activeTab === "process" ? "is-active" : ""
                            }`}
                    >
                        <div className="mcaPage-processFlow">
                            <h3 className="mcaPage-processTitle">Admission Process</h3>
                            <p className="mcaPage-processIntro">
                                Admissions for the MCA Working Professional program are carried
                                out under the Admission Regulatory Authority (ARA) and MH-CET
                                Cell, DTE Maharashtra, following AICTE and University of Mumbai
                                norms. Admissions are merit-based and conducted as per the
                                official schedule published by CET Cell.
                            </p>

                            <div className="mcaPage-flowSteps">
                                <div className="mcaPage-flowStep">
                                    <div className="mcaPage-flowStepNum">1</div>
                                    <h4>Application</h4>
                                    <p>Submit application via CET Cell portal</p>
                                </div>
                                <div className="mcaPage-flowStep">
                                    <div className="mcaPage-flowStepNum">2</div>
                                    <h4>Verification</h4>
                                    <p>Submit documents & certificates</p>
                                </div>
                                <div className="mcaPage-flowStep">
                                    <div className="mcaPage-flowStepNum">3</div>
                                    <h4>Merit & Allotment</h4>
                                    <p>Seats allotted as per merit and rules</p>
                                </div>
                                <div className="mcaPage-flowStep">
                                    <div className="mcaPage-flowStepNum">4</div>
                                    <h4>Confirmation</h4>
                                    <p>Confirm admission by paying fees</p>
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
            <Footer />
        </>
    );
}
