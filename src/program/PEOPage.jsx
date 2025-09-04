import React,{useState} from "react";
import "./MCAProgram.css"; // optional external CSS for styling
import Navbar from "../components/navbar";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Footer from "../components/Footer";

export default function PEOPage() {
    const [showForm, setShowForm] = useState(false);

    return (
        <>
            <Navbar setShowForm={setShowForm} />
            {showForm && <BrochureForm setShowForm={setShowForm} />}
            <CTAButtons />
            <div className="vision-mission-container">
                <h2 className="section-title-vs">
                    Program Educational Objectives (PEO's)
                </h2>
                {/* Optional: a horizontal full-width divider if desired */}
                {/* <hr className="full-width-hr" /> */}

                {/* Two-column grid of PEO cards */}
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
            </div>
            <Footer />
        </>
    );
}