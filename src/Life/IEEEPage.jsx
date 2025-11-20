import React, { useEffect, useMemo,useState } from "react";


import Footer from "../components/Footer";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Navbar from "../components/navbar";
const facultyCommittee = [
    { name: "Dr. Vishal Agarwal", role: "Branch Coordinator" },
    { name: "Ms. Sharmila Yadav", role: "Faculty In-Charge" },
    { name: "Ms. Rashmi Vipul", role: "Coordinator" }
];

const studentCommittee = [
    { name: "Raushan Narayan", role: "Chairperson" },
    { name: "Deva Deva", role: "Co-Chairperson" },
    { name: "Chise Jurel", role: "Secretary" },
    { name: "Rohit Patanjit", role: "Joint Secretary" },
    { name: "Agarwal Komal", role: "Treasurer" },
    { name: "Shobha Saini", role: "Joint Treasurer" },
    { name: "Jissa Khan", role: "Member" },
    { name: "Nirav Sukesh", role: "Member" },
    { name: "Suraj Kumar Gurbad", role: "Member" },
    { name: "Shardule Tosoli", role: "Member" },
    { name: "Abhishek Malik", role: "Member" }
];

const eventsData = [
    {
        title: "Amazon Alexa Workshop",
        banner: "Workshop on Amazon Alexa by Hannan Satopay (IEEE)",
        details: [
            { k: "Event", v: "Amazon Alexa: Transition and Opportunities" },
            { k: "Date", v: "8th November, 2019" },
            { k: "Time", v: "9:00 AM - 5:00 PM" },
            { k: "Venue", v: "TIMSCDR, Mumbai" }
        ],
        description:
            "The IEEE Chapter at TIMSCDR, in association with IEEE, organized a one-day workshop on “Amazon Alexa: Transition and Opportunities” by Mr. Hannan Satopay (Autodesk Tinkercad Advisor and Alexa Developer). The workshop covered voice-first UI, the 25,000+ Alexa skills ecosystem for personalized experiences, and provided structured demonstrations enabling participants to design and model future technology interactions. Attended by students from TIMSCDR and other colleges.",
        images: [
            "https://timscdrmumbai.in/wp-content/uploads/2020/06/Mumbai-SBC-and-Admin-Committee-Meet-1.jpg"
        ]
    },


    {
        title: "IEEE STEP: Student Transition Elevation Partnership",
        banner: "IEEE YP Affinity Group: STEP",
        details: [
            { k: "Event", v: "IEEE Bombay Section Young Professionals Affinity Group – STEP" },
            { k: "Date", v: "2nd March, 2019" },
            { k: "Time", v: "1:30 PM onwards" },
            { k: "Venue", v: "Thakur College of Engineering & Technology, Mumbai" },
            { k: "Participants", v: "04 students from TIMSCDR" }
        ],
        description:
            "The session provided guidance on opportunities for young professionals and graduate student members of IEEE, supporting the transition from student member to young professional. It also covered planning and implementing section-level activities and initiatives, helping attendees navigate programs, leadership pathways, and collaboration frameworks within IEEE."
    },

    {
        title: "Workshop on Actions on Google",
        banner: "Actions on Google (IEEE Committee of TCET)",
        details: [
            { k: "Event", v: "Hands-on training on Actions on Google" },
            { k: "Date", v: "6th October, 2018" },
            { k: "Time", v: "9:00 AM - 5:00 PM" },
            { k: "Venue", v: "TCET, Seminar Hall 3" },
            { k: "Organizer", v: "IEEE Committee of TCET with GDSC Galgotias University (Delhi)" },
            { k: "Participants", v: "100+ students (10 from TIMSCDR)" }
        ],
        description:
            "On 6 October 2018, Google Developer Student Club – Galgotias University Chapter (Delhi) conducted a one-day hands-on training programme on ‘Actions on Google’ organized by IEEE Committee of TCET. Actions on Google extends Google Assistant functionality and is based on Dialogflow using Google ML and AI APIs to create actions. The event featured engaging talks and interactive codelabs, ensuring every participant published at least one app to gain access to the Google Developer Community. 10 students from TIMSCDR participated and successfully developed a Google App, gaining valuable, practical experience.",
        images: []
    }, {
        title: "IEEE, Mumbai SBC and Admin Committee Meet",
        banner: "Mumbai Division IEEE SBC & Admin Committee Meet 2018",
        details: [
            { k: "Event", v: "IEEE Student Branch Counselor & Admin Committee Meet – 2018" },
            { k: "Date", v: "6th October, 2018" },
            { k: "Time", v: "9:00 AM – 4:00 PM" },
            { k: "Venue", v: "Vidyalankar School of IT, Wadala (E), Mumbai" },
            { k: "Attendees", v: "One faculty member and two students" }
        ],
        description:
            "On 6 October 2018, one faculty member along with two students attended the Mumbai Division IEEE Student Branch Counselor and Admin Committee Meet-2018 at Vidyalankar College. It offered a valuable networking opportunity with the IEEE Mumbai Chapter management committee and other IEEE student branch representatives, alongside several knowledge-gaining sessions.",
        images: [
            "https://timscdrmumbai.in/wp-content/uploads/2020/06/Mumbai-SBC-and-Admin-Committee-Meet-1.jpg"
        ]
    }




];

export default function IEEEPage() {
    // Smooth scrolling for anchor links
    useEffect(() => {
        const handler = (e) => {
            const a = e.target.closest('a[href^="#"]');
            if (!a) return;
            const id = a.getAttribute("href");
            if (id && id.length > 1) {
                e.preventDefault();
                const target = document.querySelector(id);
                if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        };
        document.addEventListener("click", handler);
        return () => document.removeEventListener("click", handler);
    }, []);

    // Intersection Observer for fade-in animations
    useEffect(() => {
        const opts = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) entry.target.classList.add("ieee-anim-play");
            });
        }, opts);
        const nodes = document.querySelectorAll(".ieee-fade-in");
        nodes.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);

    // Dynamic gradient animation for hero background
    useEffect(() => {
        let angle = 135;
        const el = document.querySelector(".ieee-hero");
        const id = setInterval(() => {
            angle = (angle + 1) % 360;
            if (el) {
                el.style.background = `linear-gradient(${angle}deg, rgba(102,126,234,0.9), rgba(118,75,162,0.9)), 
          url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)"/></svg>')`;
            }
        }, 100);
        return () => clearInterval(id);
    }, []);

    const facultyRows = useMemo(
        () => facultyCommittee.map((m, i) => (
            <tr key={i}><td>{m.name}</td><td>{m.role}</td></tr>
        )),
        []
    );
    const studentRows = useMemo(
        () => studentCommittee.map((m, i) => (
            <tr key={i}><td>{m.name}</td><td>{m.role}</td></tr>
        )),
        []
    );
    const [showForm, setShowForm] = useState(false);

    return (
        <>
            <Navbar setShowForm={setShowForm} />
            {showForm && <BrochureForm setShowForm={setShowForm} />}
            <CTAButtons />
            <div className="fdp23-root">


                <main className="ieee-main">
                    <section id="about" className="ieee-section">
                        <div className="ieee-container">
                            <h2 className="ieee-title ieee-fade-in">IEEE-TIMSCDR</h2>
                            <div className="ieee-about">
                                <div className="ieee-about-text ieee-fade-in ieee-anim-d2">
                                    <p>IEEE is the world's largest professional association dedicated to advancing technological innovation and excellence for the benefit of humanity. IEEE and its members inspire a global community through IEEE's highly cited publications, conferences, technology standards, and professional and educational activities.</p>
                                    <p>The IEEE region which began in 2010 and had members from more than 40 countries committed to advance and improve technical and support that knowledge in all domains. The members of IEEE benefit from the guidance, worksheets and societies that are planned consistently through the year.</p>
                                    <p>Through our comprehensive programs and initiatives, we provide valuable opportunities for professional growth, networking, and knowledge sharing among technology professionals worldwide.</p>
                                </div>
                                {/* <div className="ieee-about-card ieee-fade-in ieee-anim-d3">
                <h3>Professional Excellence</h3>
                <p>Connecting minds, Creating the future</p>
                <div aria-hidden="true" style={{ marginTop: "2rem", fontSize: "2rem" }}>🔬⚡🌐</div>
              </div> */}
                            </div>
                        </div>
                    </section>

                    <section className="ieee-section ieee-section-alt">
                        <div className="ieee-container">
                            <h2 className="ieee-title ieee-fade-in">Working Committee</h2>

                            <div className="ieee-committee ieee-fade-in ieee-anim-d2">
                                <h3 className="ieee-subtitle">Faculty Members</h3>
                                <div className="ieee-table-wrap">
                                    <table className="ieee-table">
                                        <thead>
                                            <tr><th>Faculty Member</th><th>Position</th></tr>
                                        </thead>
                                        <tbody>{facultyRows}</tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="ieee-committee ieee-fade-in ieee-anim-d3">
                                <h3 className="ieee-subtitle">Student Committee</h3>
                                <div className="ieee-table-wrap">
                                    <table className="ieee-table">
                                        <thead>
                                            <tr>
                                                <th>SR NO.<span className="ieee-th-sub">Member</span></th>
                                                <th>DESIGNATION</th>
                                            </tr>
                                        </thead>
                                        <tbody>{studentRows}</tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="ieee-section">
                        <div className="ieee-container">
                            <h2 className="ieee-title ieee-fade-in">Events & Workshops</h2>
                            <div className="ieee-events">
                                {eventsData.map((e, i) => (
                                    <div key={i} className={`ieee-card ieee-fade-in ieee-anim-d${i + 1}`}>
                                        <div className="ieee-card-banner">{e.banner}</div>
                                        <div className="ieee-card-body">
                                            <h3 className="ieee-card-title">{e.title}</h3>
                                            <div className="ieee-card-meta">
                                                {e.details.map((d, j) => (
                                                    <div key={j}><strong>{d.k}:</strong> {d.v}</div>
                                                ))}
                                            </div>
                                            <p className="ieee-card-text">{e.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>


            </div>
            <Footer />
        </>
    );
}
