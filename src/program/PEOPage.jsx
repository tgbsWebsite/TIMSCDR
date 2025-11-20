import React, { useState } from "react";
import "./MCAProgram.css"; // optional external CSS for styling
import Navbar from "../components/navbar";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Footer from "../components/Footer";
import PageHeader from "../about/PageHeader";

export default function PEOPage() {
    const [showForm, setShowForm] = useState(false);

    return (
        <>
            <Navbar setShowForm={setShowForm} />
            {showForm && <BrochureForm setShowForm={setShowForm} />}
            <CTAButtons />
            <div className="vision-mission-container">
                      <PageHeader
                     title="Program Educational Objectives (PEO’s)"
                     crumbs={[
                       { label: 'Home', href: '/' },
                       { label: 'Program Educational Objectives (PEO’s)' }, // current page (no href)
                     ]}
                   />
                {/* Optional: a horizontal full-width divider if desired */}
                {/* <hr className="full-width-hr" /> */}

                {/* Two-column grid of PEO cards */}
                <div className="vision-section">
                <div className="po-grid">
                    <div className="po-card">
                        <strong>PEO-1</strong>
                        <p>
                            To enable students to gain knowledge across all domains of
                            Information Technology with in-depth understanding of their
                            applications.
                        </p>
                    </div>

                    <div className="po-card">
                        <strong>PEO-2</strong>
                        <p>
                            To enable students to analyze problems and to design and develop
                            software solutions using emerging tools and technologies.
                        </p>
                    </div>

                    <div className="po-card">
                        <strong>PEO-3</strong>
                        <p>
                            To enable students to continue Life-long learning, Research and
                            Entrepreneurial pursuit in their chosen fields.
                        </p>
                    </div>

                    <div className="po-card">
                        <strong>PEO-4</strong>
                        <p>
                            To develop communication, teamwork, and leadership skills necessary
                            to manage multidisciplinary projects and serve the society as
                            responsible and ethical software professionals.
                        </p>
                    </div>
                </div>
                    <div className="infra-divider" aria-hidden="true" />
                <h2 className="section-title-vs">Program Outcomes (PO's)</h2>
                <div className="peo-section">
                    <div className="peo-item">
                        <strong>PO-1: Foundation Knowledge</strong> Apply knowledge of
                        mathematics, programming logic and coding fundamentals for solution
                        architecture and problem solving. To enable students to gain
                        knowledge across all domains of Information Technology with in-depth
                        understanding of their applications.
                    </div>
                    <div className="peo-item">
                        <strong>PO-2: Problem Analysis</strong> Identify, review, formulate
                        and analyse problems for primarily focussing on customer
                        requirements using critical thinking frameworks.
                    </div>
                    <div className="peo-item">
                        <strong>PO-3: Design/ Development of Solution </strong> Design,
                        develop and investigate problems with an innovative approach for
                        solutions incorporating ESG/SDG goals.
                    </div>
                    <div className="peo-item">
                        <strong>PO-4: Modern Tool Usage </strong> Select, adapt and apply
                        modern computational tools such as development of algorithms with an
                        understanding of the limitations including human biases.
                    </div>
                    <div className="peo-item">
                        <strong>PO-5: Individual and Teamwork </strong>
                        Function and communicate effectively as an individual or a team
                        leader in diverse and multidisciplinary groups. Use methodologies
                        such as agile.
                    </div>
                    <div className="peo-item">
                        <strong>PO-6: Project Management and Finance </strong>
                        Use the principles of project management such as scheduling, work
                        breakdown structure and be conversant with the principles of Finance
                        for profitable project management.
                    </div>
                    <div className="peo-item">
                        <strong>PO-7: Ethics </strong>
                        Commit to professional ethics in managing software projects with
                        financial aspects. Learn to use new technologies for cyber security
                        and insulate customers from malware.
                    </div>
                    <div className="peo-item">
                        <strong>PO-7: Ethics </strong>
                        Commit to professional ethics in managing software projects with
                        financial aspects. Learn to use new technologies for cyber security
                        and insulate customers from malware.
                    </div>
                    <div className="peo-item">
                        <strong>PO-8: Life-long Learning </strong>
                        Change management skills and the ability to learn, keep up with
                        contemporary technologies and ways of working.
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </>
    );
}