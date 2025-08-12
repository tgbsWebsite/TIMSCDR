import React, { useState } from "react";
import "./MCAProgram.css";

import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";

const ProfessionalMCAProgram = () => {
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
                        <h1>MCA for Working Professionals</h1>
                        {/* Optional subtitle */}
                        {/* <p className="hero-sub">
              5 Years (10 Semesters) • Direct after 10+2 • MCA Degree
            </p> */}
                    </div>
                </div>

                {/* Program Details */}
                <div id="program-details" className="mca-container">
                    <div className="mca-text">
                        {/* 
                        <h2>MCA for Working Professionals (2 Years Master of Computer Applications Program)</h2>
                        <hr />
                        <p>
                            The Integrated MCA (Master of Computer Applications) is a comprehensive 5-year program designed for students who have completed their 10+2 education and are looking to build a strong foundation in computer science, software development, and IT management. This program combines the undergraduate and postgraduate curriculum into a streamlined and focused academic journey, eliminating the need for separate entrance procedures for a master’s degree.
                        </p> */}

                        {/* Program Highlights */}
                        <h2>About MCA for Working Professionals</h2>
                        <hr />
                        <ul className="animated-list">
                            <li><strong>FLEXIBLE WITH YOUR SCHEDULE</strong> Hybrid mode with <strong>Evening/Weekend</strong> academic sessions</li>
                            <li><strong>GLOBALLY RECOGNIZED & ACCREDITED DEGREE</strong> 2-year Program Degree approved by <strong>AICTE & DTE</strong>, conferred by the <strong>University of Mumbai</strong> and accredited by the <strong>National Board of Accreditation (NBA)</strong></li>
                            <li><strong>INDUSTRY-FOCUSED CURRICULUM</strong> Gain in-depth knowledge of <strong>IT domains</strong>, master emerging tools, and develop <strong>leadership and teamwork</strong> skills for lifelong success</li>
                            <li><strong>ACCELERATE YOUR CAREER GROWTH</strong> Unlock <strong>higher earning potential</strong> and prepare for leadership roles with skills designed for <strong>career advancement</strong></li>
                            <li><strong>EXPAND YOUR OPPORTUNITIES</strong> Gain access to better job prospects and seamlessly transition into impactful roles in technology and <strong>IT sectors</strong></li>
                            <li><strong>NETWORKING OPPORTUNITIES</strong> Learn alongside a diverse group of working professionals and gain exclusive access to the <strong>TIMSCDR Alumni Portal</strong> connecting you with a wide network of successful industry leaders and peers</li>
                            <li><strong>ACADEMIC DELIVERY</strong> by <strong>Thakur Institute of Management Studies, Career Development & Research</strong>, an Autonomous Institute affiliated with the <strong>University of Mumbai</strong> and accredited with an <strong>A+ Grade by NAAC</strong></li>
                        </ul>



                        {/* Program Benefits */}
                        <h2>Why Choose TIMSCDR?</h2>
                        <hr />
                        <ul className="animated-list">
                            <li><strong>Legacy of Excellence:</strong> Established in 2001, TIMSCDR has over 23 years of experience in shaping future-ready leaders.</li>
                            <li><strong>Expert Faculty:</strong> Learn from experienced educators and industry professionals who bring real-world insights into the classroom.</li>
                            <li><strong>Flexible Schedules:</strong> Tailored to your lifestyle, choose from online, weekend, or evening classes to balance work and study.</li>
                            <li><strong>Cutting-Edge Facilities:</strong> Access to state-of-the-art labs, libraries, and research facilities to enhance your learning experience.</li>
                            <li><strong>Industry-Relevant Skills:</strong> Our curriculum is designed to equip you with skills that are immediately applicable, giving you a competitive edge in your current or future role.</li>
                        </ul>

                        <h2>Eligibility Criteria for MCA Working Professional</h2>
                        <hr />
                        <ul className="animated-list">
                            <li><strong>Entrance Exam:</strong> The candidate must have obtained the requisite score in the MAH/MCA-CET 2025 conducted by the Competent Authority.</li>
                            <li><strong>Work Experience:</strong>
                                <ul>
                                    <li>The candidate must have a minimum of one year of full-time or regular work experience in the below-mentioned organizations.</li>
                                    <li>The candidate must be working in a registered industry or organization, which can include:</li>
                                    <ul>
                                        <li>Central or State Government organizations</li>
                                        <li>Private or Public Limited Companies</li>
                                        <li>Micro, Small, and Medium Enterprises (MSMEs)</li>
                                    </ul>
                                </ul>
                            </li>
                            <li><strong>Educational Qualification:</strong>
                                <ul>
                                    <li>The candidate must have passed a minimum three-year Bachelor’s Degree from any University recognized by the University Grants Commission (UGC) or the Association of Indian Universities (AIU).</li>
                                    <li>The degree can be in any discipline with at least 50% marks in aggregate (or equivalent). For Reserved Category, Economically Weaker Section (EWS), and Persons with Disabilities (PWD) candidates from Maharashtra State, the minimum required marks are 45% (or equivalent).</li>
                                </ul>
                            </li>
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

export default ProfessionalMCAProgram;
