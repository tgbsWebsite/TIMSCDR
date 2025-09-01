import React, { useState } from "react";
// import "./styles.css";
import Navbar from "../components/navbar";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Footer from "../components/Footer";

const PlacementData = () => {
    const [showForm, setShowForm] = useState(false);
    const [pdfSrc, setPdfSrc] = useState(
       
    );

    // Placement data URLs added as requested
    const placementData = [
        {
            label: "Placement data for Batch 2022-2024",
            url: "https://www.timscdrmumbai.in/wp-content/uploads/2024/07/Placement-data-Batch-2022-2024.pdf"
        },
        {
            label: "Placement data for Batch 2021-2023",
            url: "https://www.timscdrmumbai.in/wp-content/uploads/2024/07/Placement-data-Batch-2021-2023.pdf"
        },
        {
            label: "Placement data for Batch 2020-2022",
            url: "https://timscdrmumbai.in/wp-content/uploads/2022/12/Placement-data-Batch-2020-2022.pdf"
        },
        {
            label: "Placement data for Batch 2019-2022",
            url: "https://timscdrmumbai.in/wp-content/uploads/2022/12/Placement-data-Batch-2019-2022.pdf"
        },
        {
            label: "Placement data for Batch 2018-2021",
            url: "https://timscdrmumbai.in/wp-content/uploads/2022/12/Placement-data-Batch-2018-2021.pdf"
        }
    ];

    return (
        <>
            <Navbar setShowForm={setShowForm} />
            {showForm && <BrochureForm setShowForm={setShowForm} />}
            <CTAButtons />
            <main className="main-container">
                <h1 className="heading">Student Downloads</h1>

                <div className="grid-container">
                    {/* Left Sidebar Links */}
                    <section className="sidebar">
                        <div className="link-list">


                            {/* New placement data links */}
                            {placementData.map(({ label, url }) => (
                                <a
                                    key={url}
                                    href={url}
                                    target="pdf-viewer"
                                    rel="noreferrer"
                                    className="link-card blue-border"
                                    onClick={() => setPdfSrc(url)}
                                >
                                    <span className="material-icons icon blue">description</span>
                                    <p>{label}</p>
                                    <span className="material-icons arrow">chevron_right</span>
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
                                src={pdfSrc}
                                title="PDF Viewer"
                                width="100%"
                                height="600px"
                                frameBorder="0"
                            ></iframe>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default PlacementData;
