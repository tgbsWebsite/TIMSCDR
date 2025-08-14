import React, { useState } from "react";
import "./MCAProgram1.css";

import Footer from "../components/Footer";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Navbar from "../components/navbar";
import ContactCTA from "./ContactCTA";

export default function IntegratedMCAProgram() {
    const [showForm, setShowForm] = useState(false);

    const highlights = [
        { title: "DURATION", desc: "5 Years (10 Semesters)" },
        { title: "ELIGIBILITY", desc: "10+2 in any stream" },
        { title: "DEGREE AWARDED", desc: "After 5 years successful completion – MCA (Master of Computer Applications)" },
        { title: "CURRICULUM", desc: "A blend of theory, practical, projects, and industry exposure" }
    ];
    const benefits = [
        { title: "EARLY SPECIALIZATION", desc: "Start your IT career path right after high school." },
        { title: "INDUSTRY-ALIGNED CURRICULUM", desc: "Courses are regularly updated in line with current tech trends like AI, Data Science, Cybersecurity, Cloud Computing, and more." },
        { title: "COST AND TIME EFFICIENT", desc: "One continuous program reduces the time and cost of pursuing separate degrees." },
        { title: "INTERNSHIPS & PROJECTS", desc: "Hands-on training through real-world projects and internships in leading IT firms." },
        { title: "CAREER-READY GRADUATES", desc: "Equips students with skills in software development, database management, system design, mobile and web applications, and more." }
    ];

    const contacts = [
        { name: "Dr. Sonal Sharma", phone: "+91 9961686449" },
        { name: "Prof. Sonal Gupta", phone: "+91 9305791496" },
        { name: "Admissions Office", phone: "022-67308301/02" }
    ];

    return (
        <>
            <Navbar setShowForm={setShowForm} />
            {showForm && <BrochureForm setShowForm={setShowForm} />}
            <CTAButtons />

            <div className="mca-page">


                {/* HERO */}
                <section>
                    <div className="mca-hero">
                        <h1>Integrated MCA</h1>
                    </div>
                </section>




                {/* ABOUT PROGRAM */}
                <section className="why-choose">
                    <section>
                        <div className="mca-text">
                            <h2 className="center-heading">
                                Integrated MCA (5 years Master of Computer Applications Program)
                            </h2>

                            <p>The Integrated MCA (Master of Computer Applications) is a comprehensive 5-year program designed for students who have completed their 10+2 education and are looking to build a strong foundation in computer science, software development, and IT management. This program combines the undergraduate and postgraduate curriculum into a streamlined and focused academic journey, eliminating the need for separate entrance procedures for a master’s degree.</p>
                        </div>
                    </section>
                    <div className="mca-text">

                        <h2>Program Highlights</h2>
                        <hr />
                        <ul>
                            {highlights.map((item, i) => (
                                <li key={i}>
                                    <strong>{item.title}:</strong> {item.desc}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="choose-img">
                        <img src="/school-building.jpg" alt="Campus" />
                    </div>
                </section>

                {/* BENEFITS */}
                <section className="why-choose">
                    <div className="choose-img">
                        <img src="/school-building.jpg" alt="Campus" />
                    </div>
                    <div className="mca-text">
                        <h2>Benefits of Integrated MCA</h2>
                        <hr />
                        <ul>
                            {benefits.map((item, i) => (
                                <li key={i}>
                                    <strong>{item.title}:</strong> {item.desc}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <ContactCTA contacts={contacts} />;
            </div>

            <Footer />
        </>
    );
}
