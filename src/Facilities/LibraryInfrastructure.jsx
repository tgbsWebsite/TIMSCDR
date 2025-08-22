
import React, { useState } from "react";
import Footer from "../components/Footer";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Navbar from "../components/navbar";
// import "./Infrastructure.css";

// NOTE: In index.html (public folder), add link:
// <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

export default function LibraryInfrastructure() {
    const [showForm, setShowForm] = useState(false);

    return (
        <>
            <Navbar setShowForm={setShowForm} />
            {showForm && <BrochureForm setShowForm={setShowForm} />}
            <CTAButtons />
            <div className="infra-body">

                {/* MAIN */}
                <main className="infra-main">
                    <h1 className="infra-title heading">Infrastructure and Facilities</h1>
                    {/* Book Stacking Area */}
                    <section className="infra-section">
                        <div className="infra-book-stack">
                            <div className="infra-book-content">
                                <h2 className="infra-heading">Book Stacking Area</h2>
                                <ul className="infra-list">
                                    <li><span className="infra-bold">Capacity:</span> 15,000 Books</li>
                                    <li>Subject wise labelled cupboards.</li>
                                    <li>Collection of CDs/DVDs procured along with books &amp; periodicals.</li>
                                    <li>
                                        6 National and International Journals, 190 IEEE ASPP International e‑journals,
                                        and student project reports for research support.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* General Reading Section */}
                    <section className="infra-section">
                        <div className="infra-card-large">
                            <div className="infra-two-col">
                                <div className="infra-text-block">
                                    <h2 className="infra-heading">General Reading Section</h2>
                                    <p className="infra-subtext">Seating Capacity: 100 in a fully air-conditioned room.</p>
                                    <div className="infra-resource-list">
                                        <p className="infra-bold">Resources available:</p>
                                        <div className="infra-resource-grid">
                                            <span className="infra-resource-item"><span className="material-icons">article</span> Newspapers</span>
                                            <span className="infra-resource-item"><span className="material-icons">wysiwyg</span> Notice Board</span>
                                            <span className="infra-resource-item"><span className="material-icons">menu_book</span> Journals</span>
                                            <span className="infra-resource-item"><span className="material-icons">auto_stories</span> Magazines</span>
                                            <span className="infra-resource-item"><span className="material-icons">book</span> Encyclopedias</span>
                                            <span className="infra-resource-item"><span className="material-icons">library_books</span> Handbooks</span>
                                            <span className="infra-resource-item"><span className="material-icons">translate</span> Dictionaries</span>
                                            <span className="infra-resource-item"><span className="material-icons">spellcheck</span> Thesaurus</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="infra-image-wrapper">
                                    <img
                                        className="infra-image"
                                        //   src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1pcsA11yLlnOgtt5lyU2c2Gs_REq1nLZJL--e2WZHtK01swQeH8FZUs9zJY-Q-p4PPbZ20Or7qpRTIiv7C3RNIuqSIDBZVQtTY0H366LtWnfia4v0jyZvQP30wqzFPGFkcS4X6fM3n5hNDd0FJ2WA3JW1lHpZwjFkqomSvluOprrWkq0JjNS5G9iyZPL2HNJtDmfhTm28Ph_mSWgOJBbGIl3BmnSuOQvvEnRc392fgHNtiiR5-2tIg_0qMBtUEiPadACzo88Jk3M"
                                        alt="Modern library reading area"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="infra-divider" aria-hidden="true" />

                    {/* Digital Library */}
                    <section className="infra-section">
                        <h2 className="infra-heading center">Digital Library</h2>
                        <div className="infra-card-grid">
                            <div className="infra-card">
                                <div className="infra-card-header">
                                    <span className="material-icons">desktop_windows</span>
                                    <h3 className="infra-card-title">Desktops</h3>
                                </div>
                                <p className="infra-card-text">
                                    9 DELL OptiPlex i3 desktops with 18.5-inch LCD monitors and high-speed internet (100 Mbps).
                                </p>
                            </div>
                            <div className="infra-card">
                                <div className="infra-card-header">
                                    <span className="material-icons">laptop_mac</span>
                                    <h3 className="infra-card-title">Laptop Connectivity</h3>
                                </div>
                                <p className="infra-card-text">4 connection points for laptops.</p>
                            </div>
                            <div className="infra-card">
                                <div className="infra-card-header">
                                    <span className="material-icons">ac_unit</span>
                                    <h3 className="infra-card-title">Comfort &amp; Capacity</h3>
                                </div>
                                <p className="infra-card-text">Fully air-conditioned with a seating capacity of 13.</p>
                            </div>
                            <div className="infra-card">
                                <div className="infra-card-header">
                                    <span className="material-icons">wifi</span>
                                    <h3 className="infra-card-title">E-Resources Access</h3>
                                </div>
                                <p className="infra-card-text">
                                    Access to e-resources via a 100 Mbps leased line. Students can search for books through Koha – OPAC.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Library Services */}
                    <section className="infra-section">
                        <h2 className="infra-heading center">Library Services</h2>
                        <div className="infra-card-medium">
                            <div className="infra-services-grid">
                                <span className="infra-service"><span className="material-icons">check_circle</span> News Paper Clipping Service</span>
                                <span className="infra-service"><span className="material-icons">check_circle</span> Current Awareness Service</span>
                                <span className="infra-service"><span className="material-icons">check_circle</span> Reference Service</span>
                                <span className="infra-service"><span className="material-icons">check_circle</span> Referral Service</span>
                                <span className="infra-service"><span className="material-icons">check_circle</span> Indexing Service through OPAC</span>
                                <span className="infra-service"><span className="material-icons">check_circle</span> New Arrival Display</span>
                                <span className="infra-service"><span className="material-icons">check_circle</span> Access to back issues of Journals</span>
                                <span className="infra-service"><span className="material-icons">check_circle</span> Book Bank Service</span>
                                <span className="infra-service"><span className="material-icons">check_circle</span> Best Reader Award</span>
                                <span className="infra-service"><span className="material-icons">check_circle</span> Book Reader Club</span>
                            </div>
                        </div>
                    </section>
                </main>

                {/* FOOTER */}
                <Footer/>
            </div>
        </>
    );
}
