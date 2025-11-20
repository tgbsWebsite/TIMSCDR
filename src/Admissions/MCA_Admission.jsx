import React, { useState } from "react";
import "./mcaPageStyles.css";
import Footer from "../components/Footer";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Navbar from "../components/navbar";

export default function MCA_Admission() {
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
                        <h1>Master of Computer Applications (MCA)</h1>
                    </div>
                </div>

                {/* Main Content */}
                <section className="mcaPage-section">
                    <div className="mcaPage-programOverview">
                        <div className="mcaPage-container mcaPage-overviewInner">
                            <div className="mcaPage-overviewGrid">
                                <div className="mcaPage-overviewText">
                                    <p>
                                        Thakur Institute of Management Studies, Career Development & Research (TIMSCDR) offers AICTE-approved Master of Computer Applications (MCA) program. MCA is a postgraduate degree program designed to provide students with a comprehensive understanding of computer science and its applications in the real world. The MCA program has a duration of 2 years with the total intake at TIMSCDR Mumbai is 240 seats. Six months of industry internship is provided in the last semester of the course. The mode of the program will be offline.
                                    </p>
                                    <p>
                                        As the demand for skilled IT professionals continues to grow across industries, the MCA program equips students with the technical expertise and problem-solving abilities needed to meet the evolving challenges of the digital world. Graduates of this program are well-prepared for careers as software developers, system analysts, IT consultants, database administrators, and other key roles in both the public and private sectors. The curriculum is designed to foster innovation, critical thinking, and a deep understanding of modern computing systems, making MCA an ideal choice for individuals seeking to build a dynamic and rewarding career in information technology.
                                    </p>
                                </div>

                                {/* <div className="mcaPage-overviewHighlights">
                <div className="mcaPage-highlightItem">
                  <div className="mcaPage-highlightIcon">★</div>
                  <p>Real-World Projects with latest technologies</p>
                </div>
                <div className="mcaPage-highlightItem">
                  <div className="mcaPage-highlightIcon">★</div>
                  <p>6-Month Professional Internship</p>
                </div>
                <div className="mcaPage-highlightItem">
                  <div className="mcaPage-highlightIcon">★</div>
                  <p>Dedicated Career Support & Placements</p>
                </div>
                <div className="mcaPage-highlightItem">
                  <div className="mcaPage-highlightIcon">★</div>
                  <p>AICTE Recognized Curriculum</p>
                </div>
              </div> */}
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
                        >
                            Eligibility Criteria
                        </button>
                        <button
                            className={`mcaPage-tabBtn ${activeTab === "documents" ? "is-active" : ""}`}
                            onClick={handleTab("documents")}
                        >
                            Required Documents
                        </button>
                        <button
                            className={`mcaPage-tabBtn ${activeTab === "process" ? "is-active" : ""}`}
                            onClick={handleTab("process")}
                        >
                            Admission Process
                        </button>
                    </div>

                    {/* Tab: Eligibility */}
                    <div className={`mcaPage-tabPanel ${activeTab === "eligibility" ? "is-active" : ""}`}>
                        <div className="mcaPage-eligibilityCards">
                            <div className="mcaPage-card">
                                <div className="mcaPage-cardHeader">
                                    <div className="mcaPage-cardNumber">1</div>
                                    <h3>First Year Admission</h3>
                                </div>
                                <div className="mcaPage-reqText">
                                    <p>
                                        Admission to the First Year of Two-years full-time Post Graduate Degree
                                        course in Master of Computer Applications (MCA) for the academic year
                                        2025-26.
                                    </p>
                                    <p>
                                        For Maharashtra State Candidature Candidates, All India Candidature
                                        Candidates, Union Territory of Jammu and Kashmir and Union Territory of
                                        Ladakh Migrant Candidature Candidates.
                                    </p>
                                    <p><strong>The candidate should fulfill the following eligibility criteria:</strong></p>
                                    <ul className="mcaPage-reqList">
                                        <li>The candidate should be a citizen of India.</li>
                                        <li>
                                            Should have passed any graduation degree (e.g.: B.E. or B.Tech. or B.Sc
                                            or B.Com. or B.A. or B. Voc. or BCA etc.,) preferably with Mathematics
                                            at 10+2 level or at Graduation level and obtained at least fifty per
                                            cent marks (at least forty-five per cent in case of candidates of
                                            Reserved Categories, Economically Weaker Section and Persons with
                                            Disability category belonging to the Maharashtra State) in the qualifying
                                            examination.
                                        </li>
                                        <li>
                                            Should have obtained non-zero score in MAH-MCA-CET 2025 conducted by the
                                            Competent Authority.
                                        </li>
                                        <li>
                                            Non-Resident Indian (NRI) or Overseas Citizen of India (OCI) or Person
                                            of Indian Origin (PIO), Children of Indian workers in the Gulf countries,
                                            Foreign National Candidature Candidates.
                                        </li>
                                        <li>
                                            The candidate should have passed any graduation degree (e.g.: B.E. or
                                            B.Tech. or B.Sc or B.Com. or B.A. or B. Voc. or BCA etc.,) preferably
                                            with Mathematics at 10+2 level or at Graduation level and obtained at
                                            least fifty per cent marks in the qualifying examination.
                                        </li>
                                        <li>
                                            Any other eligibility criteria and requirement declared from time to time
                                            by the appropriate authority as defined under the Act.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mcaPage-card">
                                <div className="mcaPage-cardHeader">
                                    <div className="mcaPage-cardNumber">2</div>
                                    <h3>Second Year (Lateral Entry) Admission</h3>
                                </div>
                                <div className="mcaPage-reqText">
                                    <p>
                                        Admission to the Second Year (Lateral Entry) of the MCA programme for the
                                        academic year 2025–26.
                                    </p>
                                    <p>
                                        <strong>
                                            Maharashtra State Candidature Candidates and All India Candidature
                                            Candidates </strong>
                                    </p>
                                    <ul className="mcaPage-reqList">
                                        <li>The candidate should be a citizen of India.</li>
                                        <li>
                                            The candidate should have passed B.Tech. (Computer Science and
                                            Engineering (CSE) or Information Technology (IT)) or B.E. (Computer
                                            Science and Engineering (CSE) or Information Technology (IT)) or Bachelor
                                            of Computer Applications (BCA) (4 years).
                                        </li>
                                        <li>
                                            Any other eligibility criteria and requirement declared from time to
                                            time by the appropriate authority as defined under the Act.
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
                                <strong>On Final Admission (Originals + Copies)</strong>
                                <ul className="mcaPage-docList">
                                    <li>All original certificates mentioned above with attested photocopies of the same.</li>
                                    <li>Affidavit for Minority Status on a ₹100/- non-judicial stamp paper in institute specified format (only for Linguistic Minority candidates).</li>
                                    <li>Gap Certificate for the break after completion of Graduation examination on a ₹100/- non-judicial stamp paper in institute specified format (if applicable).</li>
                                    <li>AICTE Anti-Ragging undertaking by student as well as parents on ₹100/- non-judicial Stamp Paper duly notarized in AICTE specified format.</li>
                                    <li>Physical Fitness Certificate from a registered Medical Practitioner.</li>
                                    <li>Five recent passport size colour photographs.</li>
                                    <li>Any other relevant document.</li>
                                </ul>
                            </div>

                        </div>
                    </div>


                    {/* Tab: Process */}
                    <div className={`mcaPage-tabPanel ${activeTab === "process" ? "is-active" : ""}`}>
                        <div className="mcaPage-processFlow">
                            <h3 className="mcaPage-processTitle">Admission Process</h3>
                            <p className="mcaPage-processIntro">
                                Admissions for the Master in Computer Applications (MCA) program are conducted as per the norms of the Admission Regulatory Authority (ARA) and the MH-CET Cell under the Directorate of Technical Education (DTE), Government of Maharashtra (GoM). The rules and regulations prescribed by the All India Council for Technical Education (AICTE), Government of Maharashtra, DTE Maharashtra, and the University of Mumbai are strictly followed. Admissions are based on the eligibility criteria and merit in the respective entrance examinations. All admissions are carried out according to the schedule published in leading newspapers and on the MH-CET cell website.
                            </p>

                            <div className="mcaPage-flowSteps">
                                <div className="mcaPage-flowStep">
                                    <div className="mcaPage-flowStepNum">1</div>
                                    <h4>Application</h4>
                                    <p>Submit online application</p>
                                </div>
                                <div className="mcaPage-flowStep">
                                    <div className="mcaPage-flowStepNum">2</div>
                                    <h4>MCA-CET</h4>
                                    <p>Appear for entrance exam</p>
                                </div>
                                <div className="mcaPage-flowStep">
                                    <div className="mcaPage-flowStepNum">3</div>
                                    <h4>Merit & Allotment</h4>
                                    <p>Check merit list</p>
                                </div>
                                <div className="mcaPage-flowStep">
                                    <div className="mcaPage-flowStepNum">4</div>
                                    <h4>Verification</h4>
                                    <p>Submit documents</p>
                                </div>
                                <div className="mcaPage-flowStep">
                                    <div className="mcaPage-flowStepNum">5</div>
                                    <h4>Admission</h4>
                                    <p>Confirm and pay fees</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </>
    );
}
