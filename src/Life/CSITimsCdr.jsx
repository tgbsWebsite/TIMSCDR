import React, { useEffect, useMemo, useRef, useState } from "react";
import Footer from "../components/Footer";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Navbar from "../components/navbar";
const yearsData = [
    {
        yearKey: "2024-2025",
        cards: [
            {
                header: { year: "FDP 2025", title: "Faculty Development Program" },
                sections: [
                    {
                        h3: "Healthcare Technology & MATLAB",
                        p: "TIMSCDR organized two days Faculty Development Program (FDP) between 6th to 10th January, 2025 as a transformative initiative fostering innovation and expertise in healthcare technology using MATLAB, in association with CSI, Mumbai Chapter."
                    },
                    {
                        h3: "Sessions & Experts",
                        p: "The program opened with Mr. Vivek Lolitkar (IoT Presales, TCS) on molecular structures for disease prediction and AI’s role in personalized treatments and ethics; Days 2–3 delivered deep dives into Deep Learning with MATLAB by Mr. Kunal Khandelwal (Application Engineer, MathWorks); Dr. Sabyasachi Sengupta (Ophthalmologist) shared practical ML impacts and automation; Day 5 concluded with a keynote by Dr. Suresh Shan on healthcare innovation, followed by faculty presentations and a Valedictory Function."
                    }
                ]
            },
            {
                header: { year: "ICAIM 2024/2025", title: "International Conference" },
                sections: [
                    {
                        h3: "Conference & Theme",
                        p: "TIMSCDR organized ICAIM 2025 (International Conference on Advances in Information Technology and Management) conducted 10–11 February 2024 with theme “Leveraging Information Technology for Sustainability in Agriculture and Healthcare – Women Empowerment.”"
                    },
                    {
                        h3: "Associations & Mode",
                        p: "Arranged in association with AMC (Association of Medical Consultants), MACCIA (Maharashtra Chamber of Commerce, Industry and Agriculture), and Nordic Center for Sustainable Healthcare (NCSH); ICAIM 2024 ran in blended mode with eminent participation across IT, Agriculture, and Medicine."
                    }
                ]
            },
            {
                header: { year: "VISTA 2025", title: "20th Anniversary Edition" },
                sections: [
                    {
                        h3: "Qala Innovista Theme",
                        p: "TIMSCDR, Kandivali (E), Mumbai, organized the annual technical festival VISTA-2025 themed on Qala Innovista on 20–21 February 2025 in association with CSI, Mumbai Chapter."
                    },
                    {
                        h3: "Inauguration & Milestone",
                        p: "VISTA 2025 marked the 20th anniversary of the institute’s intercollegiate festival, inaugurated by distinguished guests including Dr. Suresh Shan (CSI Chairperson), Mr. Deepak Agarwal (IT Consultant), and Mr. Kripashankar Chaube (Director, Kaltech Digital Pvt. Ltd.)."
                    }
                ]
            },
            {
                header: { year: "CSI-TechNext 2024", title: "India Academia Awards" },
                sections: [
                    {
                        h3: "Conference & Recognition",
                        p: "CSI-E-TechNext 2024 Annual Industry and Academia Conference and Awards took place at D. Y. Patil Deemed-to-be University Campus, Nerul, Navi Mumbai on 30–31 August 2024, recognizing the very best in Academics across 2022–2024."
                    },
                    {
                        h3: "TIMSCDR Awards",
                        p: "TIMSCDR received: Best Institute – Innovative Pedagogical Approaches and Tools; Best Principal of the Year – Dr. Vinita Gaikwad; Best HOD of the Year – Mr. Shirshendu Maitra; Best Faculty – Published Research (papers accepted in high‑ranking/indexed journals) – Dr. Padma Mishra."
                    }
                ]
            },
            {
                header: { year: "CDC 2025", title: "College Development Committee" },
                sections: [
                    {
                        h3: "Meeting & Presence",
                        p: "CDC meeting held on Saturday, March 15, 2025, with the presence of Dr. Suresh Shan, Chairman, CSI‑Mumbai Chapter."
                    },
                    {
                        h3: "Key Suggestions",
                        p: "Suggestions included: covering student and faculty research paper publications under CSI‑IEEE; CSI support to connect Industry Experts to teach 20% of syllabus under Track Elective courses; involvement of Industry Experts in setting Institute policies."
                    }
                ]
            }
        ]
    }
    ,
    {
        yearKey: "2023-2024",
        cards: [
            {
                header: { year: "FDP 2024", title: "Microsoft Power BI Training" },
                sections: [
                    {
                        h3: "Data Analytics & Visualization",
                        p: "TIMSCDR organized two days Faculty Development Program (FDP) on 17th and 18th January, 2024 on Microsoft Power BI in association with FOSLIPY and CSI, Mumbai Chapter."
                    },
                    {
                        h3: "Expert Training",
                        p: "Ms. Supriya Thorat, Technical Team Lead, Power BI Developer, delivered sessions covering Data Importation, Transformation, and Basic Modeling with Power BI Desktop."
                    }
                ]
            },
            {
                header: { year: "E-Day 2024", title: "Women Entrepreneurship" },
                sections: [
                    {
                        h3: "Entrepreneurship & Innovation",
                        p: "The Entrepreneurship Day and Institute Innovation Cell (IIC) poster presentation event organized by Ayan E-Cell of TIMSCDR in association with CSI, Mumbai Chapter on March 22, 2024 honored the achievements of women entrepreneurs and included a session on “How to plan for Startup and Legal & Ethical Steps”."
                    },
                    {
                        h3: "Guests of Honour",
                        p: "Shwetha Ashok (Nutritionist and Gut Guru); Krupa Joshi (Proprietor, DigiMark5); Gunjan Pai (Founder of Copylove, Copywriter & Branding Specialist, TEDx)."
                    }
                ]
            },
            {
                header: { year: "STTP 2024", title: "ISTE Approved Training Program" },
                sections: [
                    {
                        h3: "Program & Theme",
                        p: "TIMSCDR conducted a 2-week ISTE approved Short Term Training Program (STTP) in association with CSI, Mumbai Chapter from June 18–29, 2024. The theme was “Information Technology – Women Empowerment.”"
                    }
                ]
            },
            {
                header: { year: "SYNAPSE 2023-24", title: "IT for Women Empowerment" },
                sections: [
                    {
                        h3: "Innovation Showcase",
                        p: "SYNAPSE provided an opportunity for students to showcase innovative ideas and technical projects to industry experts under the theme “Using Information Technology for Women Empowerment.”"
                    },
                    {
                        h3: "Curtain Raiser",
                        p: "Organized on May 24, 2023 with 16 innovative project ideas from first-year students."
                    },
                    {
                        h3: "Final Presentation & Judges",
                        p: "Final presentation took place on October 12, 2023. The Tenth volume of SYNAPSE – Innovation Magazine was released by judges: Dr. Suresh A. Shan; Mr. Harsha Udupi; Mr. Sanjiv Viswanathan; Mr. A. Siju Rawther; Mr. Mayank Parekh; Mr. Sachit Kumar; Mr. Om Narayan Shukla."
                    }
                ]
            },
            {
                header: { year: "VISTA 2024", title: "YUVOTSAV - 19th Anniversary" },
                sections: [
                    {
                        h3: "Grand Celebration",
                        p: "VISTA 2024 marked the 19th anniversary of TIMSCDR’s intercollegiate festival, showcasing a vibrant tapestry of student talent and innovation under the “YUVOTSAV” theme."
                    },
                    {
                        h3: "Dates & Inauguration",
                        p: "Held on April 4–5, 2024 at the TEG campus; inaugurated by Mr. Khushaal Pawar, a content creator, singer, and composer."
                    }
                ]
            },
            {
                header: { year: "Guest Lectures", title: "Knowledge & Innovation" },
                sections: [
                    {
                        h3: "IPR & IP Management",
                        p: "Guest lecture on “IPR and IP Management for Start-ups” in association with CSI on Tuesday, April 02, 2024 by Mr. Janaksinh Jhala, Principal Associate at Khitan & Co."
                    },
                    {
                        h3: "Indian Knowledge System",
                        p: "Guest lecture on “Indian Knowledge System” on Tuesday, April 02, 2024 by Dr. Seema Jagtap and Ms. Priyanka Deshmukh, exploring India’s rich heritage and knowledge systems."
                    }
                ]
            }
        ]
    }
    ,
    {
        yearKey: "2022-2023",
        cards: [
            {
                header: { year: "STTP 2023", title: "ISTE Approved Training Program" },
                sections: [
                    {
                        h3: "Program & Theme",
                        p: "TIMSCDR conducted a 2-week ISTE approved Short Term Training Program (STTP) in association with CSI, Mumbai Chapter from May 29, 2023 – June 9, 2023. The theme was “Information Technology – Women Empowerment”."
                    }
                ]
            },
            {
                header: { year: "FDP 2023", title: "Robotic Process Automation" },
                sections: [
                    {
                        h3: "Two-Day FDP",
                        p: "TIMSCDR organized a two-day Faculty Development Program (FDP) on 25th and 26th May, 2023 on Robotic Process Automation (RPA) in association with FOSLIPY and CSI, Mumbai Chapter."
                    },
                    {
                        h3: "Expert Session",
                        p: "Delivered by Mr. Durvesh Bendale (Advanced Certified RPA Developer), covering how repetitive computer-oriented human tasks and end-to-end procedures can be automated using RPA."
                    }
                ]
            },
            {
                header: { year: "ICAIM 2023", title: "International Conference" },
                sections: [
                    {
                        h3: "Conference & Theme",
                        p: "ICAIM 2023 was held on 11–12 February 2023. Theme: “Leveraging Information Technology for Sustainability in Agriculture and Healthcare – Carbon Neutrality”."
                    },
                    {
                        h3: "Associations & Participation",
                        p: "Organized in association with CSI, Mumbai Chapter, AMC, MACCIA, and NCSH; eminent personalities from IT, Agriculture, and Medicine participated."
                    }
                ]
            },
            {
                header: { year: "DLLE 2023", title: "Poster Making Competition" },
                sections: [
                    {
                        h3: "Themes & Schedule",
                        p: "Offline poster competition held on 11 January 2023 on “My Right of Voting in Election” and “Women Empowerment”."
                    }
                ]
            },
            {
                header: { year: "SYNAPSE 2022", title: "Innovation Showcase" },
                sections: [
                    {
                        h3: "Theme & Evaluation",
                        p: "SYNAPSE-2022 themed “Turning Digital technology innovation into climate action – Carbon Neutrality (UN Goal 13 – Climate Action)”. Final Presentation on 11th October, 2022 featured online pitches evaluated on Innovation, Creativity, Technical and Socio-Economic Feasibility, Marketing Skills & Team Work."
                    },
                    {
                        h3: "Judges & Recognition",
                        p: "The Ninth volume of SYNAPSE – Innovation Magazine was released by judges including Dr. Suresh A. Shan and Mr. Arvind Prabhu, alongside other industry mentors who evaluated projects and awarded the best entries with cash prizes."
                    }
                ]
            },
            {
                header: { year: "VISTA 2023", title: "Intercollegiate Festival" },
                sections: [
                    {
                        h3: "Techtopia Theme",
                        p: "VISTA 2023 (18th year) was organized on 18th April 2023 at TIMSCDR campus in association with CSI, Mumbai Chapter; a platform showcasing student creativity and networking."
                    },
                    {
                        h3: "Inauguration",
                        p: "Inaugurated by Adv. Ramaswamy Seshan (Co‑Founder Partner, Vankawala & Ramaswamy Law Firm) and Ms. Ritu Advani (Founder, Avinya Kendra; former President, Giants Group of Mumbai ONE; National Secretary, Chamber for Innovators & Entrepreneurs in India)."
                    }
                ]
            },
            {
                header: { year: "E‑Day 2023", title: "Entrepreneurship Day" },
                sections: [
                    {
                        h3: "Objective & Guests",
                        p: "Organized on April 20, 2023 in association with CSI, Mumbai Chapter to instill entrepreneurship via industry experts. Guests of Honour: Ms. Jyoti Agarwal (Founder, Maa2Mom); Mr. Nishit Shah (Engineer, Industrialist & Entrepreneur); Ms. Veena Srivastava (Neuron Consultant, Shercon Designs & indi Granite, CFO)."
                    },
                    {
                        h3: "Activities",
                        p: "Events included Shark Tank, Human Tic‑Tac‑Toe, Business Quiz, Logo Quest, Big Bull vs Giant Bear, Shayari, and Traditional Day celebration."
                    }
                ]
            }
        ]
    }
    ,
    {
        yearKey: "2021-2022",
        cards: [
            {
                header: { year: "STTP 2022", title: "ISTE Approved Training Program" },
                sections: [
                    {
                        h3: "Program & Theme",
                        p: "TIMSCDR conducted a 2‑week ISTE approved STTP in association with CSI, Mumbai Chapter from 6–17 June 2022 on the theme “Information Technology for Sustainability – Carbon Neutrality”."
                    },
                    {
                        h3: "Sessions & Takeaways",
                        p: "Across 10 days, industry and academic experts conducted sessions on AWS Cloud, IT for sustainability in Carbon Sequestration and Carbon Neutrality, and non‑technical wellbeing topics such as Yoga for Holistic Development, Mindfulness, and Art of Living—offering a holistic learning experience."
                    }
                ]
            },
            {
                header: { year: "VISTA 2022", title: "Technical & Cultural Festival" },
                sections: [
                    {
                        h3: "Festival & Theme",
                        p: "The annual Technical‑cum‑Cultural Festival “VISTA 2022” was organized on 20 April 2022 on the theme “Invincible – Immortality of Technology”."
                    },
                    {
                        h3: "Inauguration",
                        p: "Inaugurated by Dr. Suresh A. Shan (Head – Digital Innovation & Future Technology, Mahindra & Mahindra Financial Services Ltd.) and Dr. Vinita Gaikwad (Director, TIMSCDR)."
                    }
                ]
            },
            {
                header: { year: "E‑Day 2022", title: "Entrepreneurship Day" },
                sections: [
                    {
                        h3: "Event Focus",
                        p: "Annual E‑Day 2022, organized by E‑Cell on 22 April 2022, promoted entrepreneurship among students."
                    },
                    {
                        h3: "Panel Discussion",
                        p: "Panel on “Entrepreneurship as Career Opportunity in Aatmanirbhar Bharat” featured panelist Mr. Arvind Prabhu (Founder, Racenext Technology Solutions)."
                    }
                ]
            },
            {
                header: { year: "SIP 2022", title: "Student Induction Program" },
                sections: [
                    {
                        h3: "CSI & Emerging Tech",
                        p: "As part of SIP, on 6 January 2022 at 10:30 AM, Dr. Suresh Shan (President, CSI‑Mumbai Chapter; CTO, Mahindra Finance) delivered a session on CSI and industry skill demands post‑COVID, covering Vision Industry 4.0 and E‑Business in India."
                    },
                    {
                        h3: "Innovation Examples",
                        p: "He discussed innovations such as 3D printers, Autonomous Vehicles, AI and IoT for security, mobility platforms, and professional behaviors in academic and industry contexts—engaging both students and faculty."
                    }
                ]
            },
            {
                header: { year: "Guest Lecture", title: "Graphology & Handwriting" },
                sections: [
                    {
                        h3: "Expert & Credentials",
                        p: "On 25 November 2021, in association with CSI, Mumbai Chapter, a lecture on “Graphology: The Case Study on Handwriting” was delivered by Nirav Vasa, a Certified Forensic Handwriting Verification Expert, Fingerprint Analyst (FBI technique), QDE, Forensic Psychologist, Criminal Profiler, Forensic Accountant & Fraud Examiner, Vimala Alphabet Practitioner, and Certified Graphologist with 18 years’ experience; practitioner with Bombay High Court and pan‑India cases."
                    },
                    {
                        h3: "Key Insights",
                        p: "Covered handwriting/brain prints, fixed vs. unfixed traits, facets of personality, and physical/attitudinal/emotional aspects; the interactive session demonstrated personality insights from signatures and writing."
                    }
                ]
            },
            {
                header: { year: "Guest Lecture", title: "Incident Response in Cyber Security" },
                sections: [
                    {
                        h3: "Topic & Speaker",
                        p: "On 16 October 2021, in association with CSI, Mumbai Chapter, Ms. Shweta Trpathi (InfoSec Practitioner & Cyber Security expert) delivered a session on Incident Response in Cyber Security."
                    },
                    {
                        h3: "Coverage & Relevance",
                        p: "Discussed cybersecurity frameworks, attack life cycle, incident response life cycle, real‑world breaches (e.g., malware), practical impacts, and password hygiene—well‑received by students."
                    }
                ]
            }
        ]
    },
    {
        yearKey: "2020-2021",
        cards: [
            {
                header: { year: "FDP 2021", title: "Blockchain & Advanced Java" },
                sections: [
                    {
                        h3: "Two-Day Online FDP",
                        p: "In association with CSI, Mumbai Chapter, an online FDP was organized between 15–16 January 2021 themed “Blockchain & Advanced Java”, introducing faculty to multiple technologies."
                    },
                    {
                        h3: "Day 1: Blockchain",
                        p: "Covered Blockchain foundations, features, Bitcoin usage with hands‑on, and an introduction to Solidity programming."
                    },
                    {
                        h3: "Day 2: Full‑Stack & Java",
                        p: "Faculties learned Angular and Node.js with hands‑on execution, and were introduced to the Java Spring Framework—delivering a strong full‑stack perspective."
                    },
                    {
                        h3: "Outcome",
                        p: "Participants reported a rich learning experience and practical exposure across blockchain and modern application development."
                    }
                ]
            },
  
            {
                header: { year: "Guest Lecture", title: "Preventing Cyber Attacks in Pandemics" },
                sections: [
                    {
                        h3: "Speaker & Context",
                        p: "A lecture by Mr. Smith Gonsalves, one of India’s youngest Cyber Security evangelists and Information Security professional, Advisor to MitKat Advisory Services and Technical Advisor for The Indian ISAC, arranged in association with CSI, Mumbai Chapter."
                    },
                    {
                        h3: "Focus Areas",
                        p: "Explored remote work’s impact on cybersecurity, trust, and data protection; COVID‑19 accelerated the need to confront digital preparedness against cyber threats."
                    },
                    {
                        h3: "Engagement",
                        p: "The interactive session was well‑received by students for its practical relevance and actionable guidance."
                    }
                ]
            },
                      {
                header: { year: "SYNAPSE 2020-21", title: "Mentored Innovation" },
                sections: [
                    {
                        h3: "Mentorship & Timeline",
                        p: "CSI Mumbai Chapter members Dr. Suresh Shan and Mr. Arbind Prabhu mentored student projects at SYNAPSE‑2020, commencing in August 2020 and concluding on 30 January 2021."
                    }
                ]
            },
        ]
    }


];

const galleryItems = [
    { id: 1, src: "/images/event-1.jpg", desc: "Inauguration ceremony at VISTA" },
    { id: 2, src: "/images/event-2.jpg", desc: "FDP hands-on MATLAB session" },
    { id: 3, src: "/images/event-3.jpg", desc: "SYNAPSE project mentoring" },
    { id: 4, src: "/images/event-4.jpg", desc: "CSI-TechNext award felicitation" }
];

function useIntersectionOnce(selector, rootMargin = "0px 0px -50px 0px") {
    const onceRef = useRef(false);
    useEffect(() => {
        const targets = Array.from(document.querySelectorAll(selector));
        if (!targets.length) return;
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add("csi-anim-on");
                    }
                });
            },
            { threshold: 0.1, rootMargin }
        );
        targets.forEach((t) => obs.observe(t));
        return () => obs.disconnect();
    }, [selector, rootMargin]);
    return onceRef;
}

export default function CSITimsCdr() {
     const [activeYear, setActiveYear] = useState(
    Array.isArray(yearsData) && yearsData.length ? yearsData[0].yearKey : "2024-2025"
  );
    const [showForm, setShowForm] = useState(false);
  

    // Smooth scroll for on-page anchors
    useEffect(() => {
        const handler = (e) => {
            const a = e.target.closest('a[href^="#"]');
            if (!a) return;
            const id = a.getAttribute("href");
            if (id.length > 1) {
                e.preventDefault();
                const target = document.querySelector(id);
                if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        };
        document.addEventListener("click", handler);
        return () => document.removeEventListener("click", handler);
    }, []);

    // Header scroll effect
    useEffect(() => {
        const header = document.getElementById("csiHeader");
        const onScroll = () => {
            if (!header) return;
            if (window.scrollY > 100) header.classList.add("csi-header-scrolled");
            else header.classList.remove("csi-header-scrolled");
        };
        window.addEventListener("scroll", onScroll);
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useIntersectionOnce(".csi-anim");

    const yearOptions = useMemo(() => yearsData.map((y) => y.yearKey), []);

    const activeCards = useMemo(() => {
        const y = yearsData.find((y) => y.yearKey === activeYear);
        return y ? y.cards : [];
    }, [activeYear]);

    return (
          <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />
        <div className="fdp23-root">




            <main className="csi-main">
                <section className="csi-section" id="about">
                    <div className="fdp23-container">
                        <h2 className="heading">CSI-TIMSCDR</h2>
                        <div className="csi-anim">
                            <p className="csi-about-text">
                                CSI offers a range of services and networking opportunities through workshop seminars, conventions and careers participated by industry experts sharing best practices and digital opportunities for development, exchanging knowledge and ideas. Topics include emerging technology trends including Service Industry, business, research, and operational achievements.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="csi-section" id="events">
                    <div className="csi-container">
                        <h2 className="csi-sec-title csi-anim">Our Events & Initiatives</h2>

                        <div className="csi-year-tabs csi-anim" role="tablist" aria-label="Year tabs">
                            {yearOptions.map((yk) => (
                                <button
                                    key={yk}
                                    role="tab"
                                    aria-selected={activeYear === yk}
                                    aria-controls={`csi-tab-${yk}`}
                                    id={`csi-tab-btn-${yk}`}
                                    className={`csi-tab-btn ${activeYear === yk ? "csi-tab-active" : ""}`}
                                    onClick={() => setActiveYear(yk)}
                                    onKeyDown={(e) => {
                                        const idx = yearOptions.indexOf(activeYear);
                                        if (e.key === "ArrowLeft" && idx > 0) setActiveYear(yearOptions[idx - 1]);
                                        if (e.key === "ArrowRight" && idx < yearOptions.length - 1) setActiveYear(yearOptions[idx + 1]);
                                    }}
                                >
                                    {yk}
                                </button>
                            ))}
                        </div>

                        <div className="csi-tab-panels">
                            {yearsData.map(({ yearKey, cards }) => (
                                <div
                                    key={yearKey}
                                    role="tabpanel"
                                    id={`csi-tab-${yearKey}`}
                                    aria-labelledby={`csi-tab-btn-${yearKey}`}
                                    className={`csi-tab-panel ${activeYear === yearKey ? "csi-tab-show" : ""}`}
                                >
                                    <div className="csi-events-grid">
                                        {cards.map((card, idx) => (
                                            <article key={idx} className="csi-event-card csi-anim">
                                                <header className="csi-event-head">
                                                    <div className="csi-event-year">{card.header.year}</div>
                                                    <div className="csi-event-title">{card.header.title}</div>
                                                </header>
                                                <div className="csi-event-body">
                                                    {card.sections.map((sec, i) => (
                                                        <div key={i} className="csi-event-sec">
                                                            <h3>{sec.h3}</h3>
                                                            <p>{sec.p}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </article>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="csi-awards" id="awards">
                    <div className="csi-container">
                        <h2 className="csi-sec-title csi-anim">CSI-TechNext India Academia Award</h2>

                        {/* CSI-TechNext note directly under the heading */}
                        <div className="csi-anim csi-award-note" style={{ marginTop: "0.5rem", marginBottom: "2rem" }}>
                            <h3 style={{ marginBottom: "0.5rem" }}>        CSI-E-TechNext 2024 Annual Industry and Academia Conference and Awards took place at D. Y. Patil, deemed to University Campus, Nerul, Navi Mumbai on 30th & 31st August 2024, recognizing excellence across College, Principal, Professor & HOD, TPO, and student projects for contributions from 2022 to 2024.
                            </h3>

                        </div>

                        <div className="csi-awards-grid">
                            {[
                                { icon: "🏆", title: "Best Institute – Innovative Pedagogical Approaches and Tools", desc: "TIMSCDR" },
                                { icon: "👨‍🏫", title: "Best Principal of the year", desc: "Dr Vinita Gaikwad" },
                                { icon: "🎓", title: "Best HOD of the year", desc: "Mr Shirshendu Maitra" },
                                { icon: "📚", title: "Best Faculty – Published Research", desc: "High‑ranking/indexed journals – Dr Padma Mishra" }
                            ].map((a, i) => (
                                <div key={i} className="csi-award-item csi-anim">
                                    <div className="csi-award-icon" aria-hidden="true">{a.icon}</div>
                                    <div className="csi-award-title">{a.title}</div>
                                    <div className="csi-award-desc">{a.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>



                <section className="csi-section">
                    <div className="csi-container">
                        <h2 className="csi-sec-title csi-anim">Event Gallery</h2>
                        <div className="csi-gallery">
                            {galleryItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="csi-gallery-item csi-anim"
                                    role="img"
                                    aria-label={item.desc}
                                >
                                    <img src={item.src} alt={item.desc} loading="lazy" className="csi-gallery-img" />
                                    <div className="csi-gallery-overlay">
                                        <span className="csi-gallery-text">{item.desc}</span>
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
