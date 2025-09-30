import React,{useState} from "react";
import "./MCAProgram.css";

import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import PageHeader from "../about/PageHeader";


const ProgramObjectives = () => {
        const [showForm, setShowForm] = useState(false);
    
    return (
    <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />
        <div className="peo-root-6qv bg-light dark-bg">


            <main className="peo-container-6qv peo-main-6qv">


                        <PageHeader
                          title="Program Educational Objectives (PEO's) "
                          crumbs={[
                            { label: "Home", href: "/" },
                            { label: "Program Educational Objectives (PEO's)" },
                          ]}
                        />

                <div className="peo-grid-6qv">
                    <div className="peo-card-6qv">
                        <h3 className="peo-card-title-6qv">PEO-1</h3>
                        <p className="peo-card-text-6qv">
                            To enable students to gain knowledge across all domains of information technology with in-depth understanding of their applications.
                        </p>
                    </div>

                    <div className="peo-card-6qv">
                        <h3 className="peo-card-title-6qv">PEO-2</h3>
                        <p className="peo-card-text-6qv">
                            To enable students to analyze problems and to design and develop software solutions using emerging tools and technologies.
                        </p>
                    </div>

                    <div className="peo-card-6qv">
                        <h3 className="peo-card-title-6qv">PEO-3</h3>
                        <p className="peo-card-text-6qv">
                            To enable students to continue Life-long learning, Research and Entrepreneurial pursuit in their chosen fields.
                        </p>
                    </div>

                    <div className="peo-card-6qv">
                        <h3 className="peo-card-title-6qv">PEO-4</h3>
                        <p className="peo-card-text-6qv">
                            To develop communication, teamwork, and leadership skills necessary to manage multidisciplinary projects and serve as responsible and ethical software professionals.
                        </p>
                    </div>
                </div>

                <h2 className="peo-subtitle-6qv">Program Outcomes (PO's)</h2>

                <div className="peo-po-stack-6qv">
                    <div className="peo-po-card-6qv">
                        <p>
                            <strong className="peo-primary-6qv">PO-1: Foundation Knowledge:</strong> Apply knowledge of mathematics, programming logic and coding fundamentals for solution architecture and problem solving. To enable students to gain knowledge across all domains of Information Technology with in-depth understanding of their applications.
                        </p>
                    </div>

                    <div className="peo-po-card-6qv">
                        <p>
                            <strong className="peo-primary-6qv">PO-2: Problem Analysis:</strong> Identify, review, formulate and analyse problems for primarily focusing on customer requirements using critical thinking frameworks.
                        </p>
                    </div>

                    <div className="peo-po-card-6qv">
                        <p>
                            <strong className="peo-primary-6qv">PO-3: Design/ Development of Solution:</strong> Design, develop and investigate problems with an innovative approach for solutions incorporating ESG/SDG goals.
                        </p>
                    </div>

                    <div className="peo-po-card-6qv">
                        <p>
                            <strong className="peo-primary-6qv">PO-4: Modern Tool Usage:</strong> Select, adapt and apply modern computational tools such as development of algorithms with an understanding of the limitations including human biases.
                        </p>
                    </div>

                    <div className="peo-po-card-6qv">
                        <p>
                            <strong className="peo-primary-6qv">PO-5: Individual and Teamwork:</strong> Function and communicate effectively as an individual or a team leader in diverse and multidisciplinary groups. Use methodologies such as agile.
                        </p>
                    </div>

                    <div className="peo-po-card-6qv">
                        <p>
                            <strong className="peo-primary-6qv">PO-6: Project Management and Finance:</strong> Use the principles of project management such as scheduling, work breakdown structure and be conversant with the principles of Finance for profitable project management.
                        </p>
                    </div>

                    <div className="peo-po-card-6qv">
                        <p>
                            <strong className="peo-primary-6qv">PO-7: Ethics:</strong> Commit to professional ethics in managing software projects with financial aspects. Learn to use new technologies for cyber security and insulate customers from malware.
                        </p>
                    </div>

                    <div className="peo-po-card-6qv">
                        <p>
                            <strong className="peo-primary-6qv">PO-7: Ethics:</strong> Commit to professional ethics in managing software projects with financial aspects. Learn to use new technologies for cyber security and insulate customers from malware.
                        </p>
                    </div>

                    <div className="peo-po-card-6qv">
                        <p>
                            <strong className="peo-primary-6qv">PO-8: Life-long Learning:</strong> Change management skills and the ability to learn, keep up with contemporary technologies and ways of working.
                        </p>
                    </div>
                </div>
            </main>

        </div>
        
      <Footer />
    </>
    );
};

export default ProgramObjectives;
