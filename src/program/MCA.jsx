import React, { useState } from "react";
import "./MCAProgram.css"; // optional external CSS for styling
import Navbar from "../components/navbar";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Footer from "../components/Footer";

const MCAProgram = () => {
    const [showForm, setShowForm] = useState(false);
    return (
        <>
            <Navbar setShowForm={setShowForm} />
            {showForm && <BrochureForm setShowForm={setShowForm} />}
            <CTAButtons />
            <div className="mp-body">
                <header className="mp-header">
                    <div
                        className="mp-hero-bg"
                        style={{
                            backgroundImage:
                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDpsctWlWIJYYd6kQ0-jx_uS5fAs69nyDDUwBS0m1PO9NvkzpE1f5UrASWAwqEtrtFSPGVlnazwHzwG_3OMBZ1YTlR6z-g2dUC9zb5Y17QtQyC86Duei79XxR7xUnpBq1rsJWm_awz_hirDcuhTZsCNnNz27sIGwOF7XLOluw4PS2uF0gCPaPc-DjEPyZbe1NiB8UFKgBSrQSwwZKZIAeDahAENhfD04qeWGXdrGYxfqpOnLeEDaWYPRJyM9OBq6flvCZwE35Mte48D')",
                        }}
                    >
                        <div className="mp-hero-overlay">
                            <div className="mp-title">PROGRAM</div>
                            <nav className="mp-breadcrumbs">
                                <a href="/" className="mp-link">
                                    HOME
                                </a>
                                <span className="mp-divider">/</span>
                                <span className="mp-current">PROGRAM</span>
                            </nav>
                        </div>
                    </div>
                </header>

                <main className="mp-main">
                    <div className="mp-content-wrapper">
                        <h2 className="mp-heading">Masters of Computer Applications</h2>
                        <div className="mp-text-content">
                            <p>
                                The Masters of Computer Applications (MCA) is a 2 years full time
                                Post-graduate Program affiliated to University of Mumbai and
                                approved by AICTE and DTE. The program prepares graduates from any
                                discipline; Science, Commerce and Arts with mathematics at the 10
                                plus 2 levels or at the graduation level to become Computer
                                Application professionals who can serve in varied sectors. The
                                Program includes Information Technology skills, for the
                                graduates, necessary to meet the current industry requirements.
                            </p>
                            <p>
                                One of the leading MCA institutes in Mumbai, TIMSCDR provides
                                holistic development of the graduates during the MCA master degree
                                course. Several co-curricular and extra-curricular activities are
                                conducted to instil innovative thinking, managerial and leadership
                                skills and attitude of empathy and social responsibility amongst
                                the graduates. The industry interactions are arranged through guest
                                talks, expert sessions, workshops and seminars on emerging
                                technologies. Opportunities to interact with professionals from
                                the domains of Agriculture, Healthcare and Information Technology
                                make the experience of pursuing MCA post graduation program at
                                TIMSCDR unique.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
};

export default MCAProgram;
