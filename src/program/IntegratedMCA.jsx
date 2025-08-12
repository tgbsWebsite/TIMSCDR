import React, { useState } from "react";
import "./MCAProgram.css";

import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";

const IntegratedMCAProgram = () => {
    const [showForm, setShowForm] = useState(false);

    return (
        <>
            {/* Navbar */}
            <Navbar setShowForm={setShowForm} />

            {/* Brochure Form Modal */}
            {showForm && <BrochureForm setShowForm={setShowForm} />}

            {/* Sticky CTA Buttons */}
            <CTAButtons />

            {/* Main Section */}
            <section className="common-section">

                {/* Hero Banner */}
                <div className="mca-hero">
                    <div className="mca-hero-content">
                        <h1>Integrated MCA</h1>
                        {/* Optional subtitle */}
                        {/* <p className="hero-sub">
              5 Years (10 Semesters) • Direct after 10+2 • MCA Degree
            </p> */}
                    </div>
                </div>

                {/* Program Details */}
                <div id="program-details" className="mca-container">
                    <div className="mca-text">

                        <h2>Integrated MCA (5 years Master of Computer Applications Program)</h2>
                        <hr />
                        <p>
                            The Integrated MCA (Master of Computer Applications) is a comprehensive 5-year program designed for students who have completed their 10+2 education and are looking to build a strong foundation in computer science, software development, and IT management. This program combines the undergraduate and postgraduate curriculum into a streamlined and focused academic journey, eliminating the need for separate entrance procedures for a master’s degree.
                        </p>

                        {/* Program Highlights */}
                        <h2>Program Highlights</h2>
                        <hr />
                        <ul className="animated-list">
                            <li>Duration: 5 Years (10 Semesters)</li>
                            <li>Eligibility: 10+2 in any stream</li>
                            <li>Degree Awarded: After 5 years successful completion – MCA (Master of Computer Applications)</li>
                            <li>Curriculum: A blend of theory, practical, projects, and industry exposure</li>
                        </ul>

                        {/* Program Benefits */}
                        <h2 >Benefits of Integrated MCA</h2>
                        <hr />
                        <ul className="animated-list">
                            <li><b>Early Specialization:</b> Start your IT career path right after high school.</li>
                            <li><b>Industry-Aligned Curriculum:</b> Courses are regularly updated in line with current tech trends like AI, Data Science, Cybersecurity, Cloud Computing, and more.</li>
                            <li><b>Cost and Time Efficient:</b> One continuous program reduces the time and cost of pursuing separate degrees.</li>
                            <li><b>Internships & Projects:</b> Hands-on training through real-world projects and internships in leading IT firms.</li>
                            <li><b>Career-Ready Graduates:</b> Equips students with skills in software development, database management, system design, mobile and web applications, and more.</li>
                        </ul>

                    </div>

                    {/* Image (optional) */}
                    {/* <div className="mca-image">
            <img
              src="https://via.placeholder.com/500x350?text=Integrated+MCA+Students"
              alt="Integrated MCA Students"
            />
          </div> */}
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </>
    );
};

export default IntegratedMCAProgram;
