import "../contact/recruitment.css";

import React, { useState } from "react";
// import "./styles.css";
import Navbar from "../components/navbar";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Footer from "../components/Footer";
import PageHeader from "./PageHeader";

const Policies = () => {
    const [showForm, setShowForm] = useState(false);
    return (
        <>
            <Navbar setShowForm={setShowForm} />
            {showForm && <BrochureForm setShowForm={setShowForm} />}
            <CTAButtons />
            <main className="main-container">
         <PageHeader
        title="Our Policies"
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Our Policies' }, // current page (no href)
        ]}
      />
                <div className="grid-container">
                    {/* Left Sidebar Links */}
                    <section className="sidebar">
                        <div className="link-list">
                            <a
                                href="https://timscdrmumbai.in/wp-content/uploads/2023/06/Faculty-Recruitment-Invitation-for-website-1-2.pdf"
                                target="pdf-viewer"
                                className="link-card blue-border"
                            >
                                <span className="material-icons icon blue">description</span>
                                <p>
                                    Divyangjan Policy
                                </p>
                                <span className="material-icons arrow">chevron_right</span>
                            </a>

                            <a
                                href="https://www.timscdrmumbai.in/wp-content/uploads/2025/07/Recruitment-2025.pdf"
                                target="pdf-viewer"
                                className="link-card blue-border"
                            >
                                <span className="material-icons icon blue">description</span>
                                <p>
                                    Energy, Water & Waste Management Policy

                                </p>
                                <span className="material-icons arrow">chevron_right</span>
                            </a>
                            <a
                                href="https://www.timscdrmumbai.in/wp-content/uploads/2025/07/Recruitment-2025.pdf"
                                target="pdf-viewer"
                                className="link-card blue-border"
                            >
                                <span className="material-icons icon blue">description</span>
                                <p>
                                    IPR Policy

                                </p>
                                <span className="material-icons arrow">chevron_right</span>
                            </a>
                            <a
                                href="https://www.timscdrmumbai.in/wp-content/uploads/2025/07/Recruitment-2025.pdf"
                                target="pdf-viewer"
                                className="link-card blue-border"
                            >
                                <span className="material-icons icon blue">description</span>
                                <p>
                                    NISP Policy

                                </p>
                                <span className="material-icons arrow">chevron_right</span>
                            </a>
                            <a
                                href="https://www.timscdrmumbai.in/wp-content/uploads/2025/07/Recruitment-2025.pdf"
                                target="pdf-viewer"
                                className="link-card blue-border"
                            >
                                <span className="material-icons icon blue">description</span>
                                <p>
                                    QIP Policy


                                </p>
                                <span className="material-icons arrow">chevron_right</span>
                            </a>
                        </div>
                    </section>

                    {/* Right Content (PDF Viewer) */}
                    <section className="content">
                        <div className="pdf-container">
                            <iframe
                                className="pdf-frame"
                                name="pdf-viewer"
                                src="https://timscdrmumbai.in/wp-content/uploads/2023/06/Faculty-Recruitment-Invitation-for-website-1-2.pdf"
                                title="Recruitment PDF Viewer"
                            ></iframe>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Policies;
