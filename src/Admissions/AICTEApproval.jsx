import React, { useState } from "react";
import Navbar from "../components/navbar";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Footer from "../components/Footer";
import PageHeader from "../about/PageHeader";

const AICTEApproval = () => {
    const [showForm, setShowForm] = useState(false);
    const [pdfSrc, setPdfSrc] = useState(
        "https://timscdrmumbai.in/wp-content/uploads/2023/06/Faculty-Recruitment-Invitation-for-website-1-2.pdf" // Default PDF
    );

    // List of EOA years with their corresponding PDF URLs
    const eoaYears = [
        { year: "EOA-2001-02", url: "https://timscdrmumbai.in/wp-content/uploads/2023/06/EOA-2001-02.pdf" },
        { year: "EOA-2002-03", url: "https://timscdrmumbai.in/wp-content/uploads/2023/06/EOA-2002-03.pdf" },
        { year: "EOA-2003-04", url: "https://timscdrmumbai.in/wp-content/uploads/2023/06/EOA-2003-04.pdf" },
        { year: "EOA-2004-05", url: "https://timscdrmumbai.in/wp-content/uploads/2023/06/EOA-2004-05.pdf" },
        { year: "EOA-2005-06", url: "https://timscdrmumbai.in/wp-content/uploads/2023/06/EOA-2005-06.pdf" },
        { year: "EOA-2006-07", url: "https://timscdrmumbai.in/wp-content/uploads/2023/06/EOA-2006-07.pdf" },
        { year: "EOA-2007-08", url: "https://timscdrmumbai.in/wp-content/uploads/2023/06/EOA-2007-08.pdf" },
        { year: "EOA-2008-09", url: "https://timscdrmumbai.in/wp-content/uploads/2023/06/EOA-2008-09.pdf" },
        { year: "EOA-2009-10", url: "https://timscdrmumbai.in/wp-content/uploads/2023/06/EOA-2009-10.pdf" },
        { year: "EOA-2010-11", url: "https://timscdrmumbai.in/wp-content/uploads/2023/06/EOA-2010-11.pdf" },
        { year: "EOA-2011-12", url: "https://timscdrmumbai.in/wp-content/uploads/2023/06/EOA-2011-12.pdf" },
        { year: "EOA-2012-13", url: "https://timscdrmumbai.in/wp-content/uploads/2023/06/EOA-2012-13.pdf" },
        { year: "EOA-2013-14", url: "https://timscdrmumbai.in/wp-content/uploads/2023/06/EOA-2013-14.pdf" },
        { year: "EOA-2014-15", url: "https://timscdrmumbai.in/wp-content/uploads/2023/06/EOA-2014-15.pdf" },
        { year: "EOA-2015-16", url: "https://timscdrmumbai.in/wp-content/uploads/2023/06/EOA-2015-16.pdf" },
        { year: "EOA-2016-17", url: "https://timscdrmumbai.in/wp-content/uploads/2023/06/EOA-2016-17.pdf" },
        { year: "EOA-2017-18", url: "https://timscdrmumbai.in/wp-content/uploads/2023/06/EOA-2017-18.pdf" },
        { year: "EOA-2018-19", url: "https://timscdrmumbai.in/wp-content/uploads/2023/06/EOA-2018-19.pdf" },
        { year: "EOA-2019-20", url: "https://timscdrmumbai.in/wp-content/uploads/2023/06/EOA-2019-20.pdf" },
        { year: "EOA-2020-21", url: "https://timscdrmumbai.in/wp-content/uploads/2023/06/EOA-2020-21.pdf" },
        { year: "EOA-2021-22", url: "https://timscdrmumbai.in/wp-content/uploads/2023/06/EOA-2021-22.pdf" },
        { year: "EOA-2022-23", url: "https://timscdrmumbai.in/wp-content/uploads/2023/06/EOA-2022-23.pdf" },
        { year: "EOA-2023-24", url: "https://timscdrmumbai.in/wp-content/uploads/2023/06/EOA-2023-24.pdf" },
        { year: "EOA-2024-25", url: "https://timscdrmumbai.in/wp-content/uploads/2023/06/EOA-2024-25.pdf" },
        { year: "EOA-2025-26", url: "https://timscdrmumbai.in/wp-content/uploads/2023/06/EOA-2025-26.pdf" }
    ];

    const handleLinkClick = (url) => {
        setPdfSrc(url); // Update the iframe source to the selected PDF URL
    };

    return (
        <>
            <Navbar setShowForm={setShowForm} />
            {showForm && <BrochureForm setShowForm={setShowForm} />}
            <CTAButtons />
            <div className="aicte-main-container">
                <PageHeader
                          title="AICTE Approval"
                          crumbs={[
                            { label: "Home", href: "/" },
                            { label: "AICTE Approval" },
                          ]}
                        />
                
               

                <div className="grid-container">
                    {/* Left Sidebar Links */}
                    <section className="sidebar">
                        <div className="link-list">
                            {eoaYears.map((item, index) => (
                                <a
                                    href="#"
                                    onClick={() => handleLinkClick(item.url)} // Update the iframe src on click
                                    className="link-card blue-border"
                                    key={index}
                                >
                                    <img
                                        src="/path-to-icons/description-icon.png"
                                        alt="Document Description Icon"
                                        className="icon-image blue"
                                        style={{ width: '24px', height: '24px', marginRight: '0.5rem' }}
                                    />
                                    <p>{item.year}</p>
                                    <img
                                        src="/path-to-icons/chevron-right.png"
                                        alt="Arrow Icon"
                                        className="icon-image arrow"
                                        style={{ width: '24px', height: '24px' }}
                                    />
                                </a>
                            ))}
                        </div>
                    </section>

                    {/* Right Content (PDF Viewer) */}
                    <section className="content">
                        <div className="pdf-container">
                            <iframe
                                className="pdf-frame"
                                name="pdf-viewer"
                                src={pdfSrc} // Dynamically set the PDF URL
                                title="Recruitment PDF Viewer"
                            ></iframe>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AICTEApproval;
