import React, { useState } from "react";
import "./MCAProgram1.css";
// import "./MCAProgram.css";
import Footer from "../components/Footer";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Navbar from "../components/navbar";
import PageHeader from "../about/PageHeader";

export default function ProfessionalMCAProgram() {
    const [showForm, setShowForm] = useState(false);


    return (
        <>
            <Navbar />
            <CTAButtons />
            <div className="ycyp-container">
                <header className="mp-header">
                    <div
                        className="mp-hero-bg"
                        style={{
                            backgroundImage:
                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDpsctWlWIJYYd6kQ0-jx_uS5fAs69nyDDUwBS0m1PO9NvkzpE1f5UrASWAwqEtrtFSPGVlnazwHzwG_3OMBZ1YTlR6z-g2dUC9zb5Y17QtQyC86Duei79XxR7xUnpBq1rsJWm_awz_hirDcuhTZsCNnNz27sIGwOF7XLOluw4PS2uF0gCPaPc-DjEPyZbe1NiB8UFKgBSrQSwwZKZIAeDahAENhfD04qeWGXdrGYxfqpOnLeEDaWYPRJyM9OBq6flvCZwE35Mte48D')",
                        }}
                    >
                        <div className="mp-hero-overlay">
                            <div className="mp-title">Integrated MCA</div>
                            <nav className="mp-breadcrumbs">
                                <a href="/" className="mp-link">
                                    HOME
                                </a>
                                <span className="mp-divider">/</span>
                                <span className="mp-current">Integrated MCA</span>
                            </nav>
                        </div>
                    </div>
                </header>

                <main>
                    <div className="ycyp-main-grid" style={{ marginTop: "16px" }}>
                        <div className="ycyp-main-content">
                            <div className="ycyp-main-title">
                                Integrated MCA <br /> (5 years Master of Computer Applications Program)
                            </div>
                            <div className="ycyp-main-subtitle" style={{ marginTop: "16px" }}>
                                The Integrated MCA (Master of Computer Applications) is a comprehensive 5-year program designed for students who have completed their 10+2 education and are looking to build a strong foundation in computer science, software development, and IT management.
                            </div>
                            <div className="ycyp-main-desc" style={{ marginTop: "12px" }}>
                                This program combines the undergraduate and postgraduate curriculum into a streamlined and focused academic journey, eliminating the need for separate entrance procedures for a master’s degree.
                            </div>
                        </div>

                        <div className="ycyp-image-block">
                            <img
                                className="ycyp-main-image"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2d02tp_3h0hQSE_ZIwn6YV962JUb4mfbhIhaDS3rlBpY6KhB7XcbM1sRIwIsDHqFU9MlsqdxpH1Hk6HE2Iso1UJGd23yf5-bVhn-LMkcys4iYDBWqHP6QFjyR4LoV3ZugZDYLAj0QfqBs_9of2WudpaOSJ4_pEaR836OKHX1KRY1IJPMhAzNxkc-Oq4KJVzzO-oOdSAq9E6AY929VxFAsUllPbzBxjSXebeksTvigfi2jDpfUDjU-zla6X3UpEQ7Jo4pgE6OGCKqh"
                                alt="A smiling man in a suit jacket, looking at the camera"
                            />
                        </div>
                    </div>

                    {/* ABOUT MCA FOR WORKING PROFESSIONAL'S */}
                    <section className="ycyp-section">
                        <div className="ycyp-section-header">
                            PROGRAM HIGHLIGHTS
                        </div>
                        <div className="ycyp-section-body">
                            <div className="ycyp-section-row">
                                <span className="ycyp-check-icon">✔</span>
                                <div>
                                    <span className="ycyp-bold">DURATION: </span>5 Years (10 Semesters).
                                </div>
                            </div>
                            <div className="ycyp-section-row">
                                <span className="ycyp-check-icon">✔</span>
                                <div>
                                    <span className="ycyp-bold">ELIGIBILITY:</span> 10+2 in any stream
                                </div>
                            </div>
                            <div className="ycyp-section-row">
                                <span className="ycyp-check-icon">✔</span>
                                <div>
                                    <span className="ycyp-bold">DEGREE AWARDED: </span> After 5 years successful completion – MCA (Master of Computer Applications)
                                </div>
                            </div>
                            <div className="ycyp-section-row">
                                <span className="ycyp-check-icon">✔</span>
                                <div>
                                    <span className="ycyp-bold">CURRICULUM: </span> A blend of theory, practical, projects, and industry exposure
                                </div>

                            </div>
                        </div>

                    </section>
                    {/* WHY CHOOSE TIMSCDR */}
                    <section className="ycyp-section">
                        <div className="ycyp-section-header">
                            BENEFITS OF INTEGRATED MCA
                        </div>
                        <div className="ycyp-section-body">
                            <div className="ycyp-section-row">
                                <span className="ycyp-check-icon">✔</span>
                                <div>
                                    <span className="ycyp-bold">EARLY SPECIALIZATION:</span> Start your IT career path right after high school.
                                </div>
                            </div>
                            <div className="ycyp-section-row">
                                <span className="ycyp-check-icon">✔</span>
                                <div>
                                    <span className="ycyp-bold">INDUSTRY-ALIGNED CURRICULUM:</span> Courses are regularly updated in line with current tech trends like AI, Data Science, Cybersecurity, Cloud Computing, and more.
                                </div>
                            </div>
                            <div className="ycyp-section-row">
                                <span className="ycyp-check-icon">✔</span>
                                <div>
                                    <span className="ycyp-bold">COST AND TIME EFFICIENT:</span> One continuous program reduces the time and cost of pursuing separate degrees.
                                </div>
                            </div>
                            <div className="ycyp-section-row">
                                <span className="ycyp-check-icon">✔</span>
                                <div>
                                    <span className="ycyp-bold">INTERNSHIPS & PROJECTS:</span> Hands-on training through real-world projects and internships in leading IT firms.
                                </div>
                            </div>
                            <div className="ycyp-section-row">
                                <span className="ycyp-check-icon">✔</span>
                                <div>
                                    <span className="ycyp-bold">CAREER-READY GRADUATES:</span> Equips students with skills in software development, database management, system design, mobile and web applications, and more.
                                </div>
                            </div>
                        </div>


                    </section>

                    {/* CET Help */}
                    <section className="ycyp-help-block">
                        <div className="ycyp-help-title">NEED HELP WITH THE CET ENTRANCE TEST?</div>
                        <div className="ycyp-help-contact">CONTACT US TODAY!</div>
                    </section>
                </main>
                <div className="ycyp-footer">
                    <div className="ycyp-footer-flex">
                        <div className="ycyp-footer-main">CONTACT FOR MORE INFO:</div>
                        <div>
                            <div className="ycyp-footer-contact">DR. SONAL SHARMA</div>
                            <div>+91 9969446644</div>
                        </div>
                        <div>
                            <div className="ycyp-footer-contact">PROF. SONU GUPTA</div>
                            <div>+91 9987650242</div>
                        </div>
                        <div>
                            022-67308501/02<br />
                            022-28849494
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
}
