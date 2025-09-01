import React, { useState } from "react";
import "./FacultyPrograms.css";
import CountUp from "react-countup"; // ⬅️ add this import

import Footer from "../components/Footer";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Navbar from "../components/navbar";

const carouselImages = [
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&h=400&fit=crop",
    title: "Healthcare AI & MATLAB Workshop",
    desc: "Faculty members exploring AI applications in healthcare using advanced MATLAB tools",
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&h=400&fit=crop",
    title: "Microsoft Power BI Training",
    desc: "Interactive sessions on data visualization and business intelligence",
  },
  {
    src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1000&h=400&fit=crop",
    title: "Programming & Technology Workshops",
    desc: "Hands-on training in modern technologies like Python, Ruby, and Blockchain",
  },
  {
    src: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=1000&h=400&fit=crop",
    title: "Quality Assurance & Accreditation",
    desc: "NAAC and NBA accreditation training for academic excellence",
  },
  {
    src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1000&h=400&fit=crop",
    title: "IoT & Raspberry Pi Training",
    desc: "Exploring Internet of Things and embedded systems programming",
  },
];

const stats = [
  { number: "300+", label: "Faculty Members Trained" },
  { number: "15+", label: "Programs Conducted" },
  { number: "9+", label: "Years of Excellence" },
  { number: "24", label: "ISO Certified Members" },
];

const programs = [
  {
    year: "FDP 2024-25",
    title: "Revolutionizing Healthcare: Integrating AI for Effective Solutions",
    desc: "The 2024-25 Faculty Development Program (FDP), hosted by Thakur Institute of Management Studies, Career Development, and Research, took place from January 6 to 10, 2025. This transformative initiative aimed to foster innovation and expertise in healthcare technology through advanced tools like MATLAB.",
    details: [
      "Day 1: Mr. Vivek Lolitkar, IoT Presales expert at TCS, explored molecular structures for disease prediction and AI’s pivotal role in healthcare advancements, including personalized treatments and ethical considerations.",
      "Days 2-3: Mr. Kunal Khandelwal, Application Engineer at MathWorks, led sessions on Deep Learning concepts using MATLAB, including AI-driven healthcare applications, image/audio processing, and advanced image analysis like bounding boxes and feature extraction.",
      "Day 4: Dr. Sabyasachi Sengupta highlighted the everyday impact of Machine Learning with practical examples of automation across sectors, enhancing efficiency and quality of life.",
      "Day 5: Dr. Suresh Shan delivered the keynote on healthcare innovation, followed by faculty presentations and the Valedictory Function celebrating participants’ achievements, skill enhancement, and innovation journey.",
    ],
    highlights: ["MATLAB", "Deep Learning", "Healthcare AI", "5 Days"],
  },

  {
    year: "FDP 2023-24",
    title: "Microsoft Power BI Workshop",
    desc: "TIMSCDR organized two days Faculty Development Program (FDP) on 17 & 18 Jan, 2024 on Microsoft Power BI in association with Computer Society of India. The workshop was delivered by Ms. Supriya Thorat, a Technical Team Leader, Foslipy consulting services.",
    details: [
      "Coverage: Data Importation and Transformation, Basic Modeling, Essential Visualization and Dashboard Creation, Intermediate Data Modeling and DAX Functions, Advanced Visualization and Customization, Collaboration, Publishing, and Sharing.",
      "Foslipy Consultancy Services issued certificates to participants.",
    ],
    highlights: [
      "Power BI",
      "Data Visualization",
      "CSI Association",
      "Certification",
    ],
  },
  {
    year: "FDP 2022-23",
    title: "Robotic Process Automation (RPA)",
    desc: "TIMSCDR organized two days Faculty Development Program (FDP) on 25th and 26th May, 2023 on Robotic Process Automation (RPA) in association with FOSLIPY. Mr. Durvesh Bendale, who is Advanced Certified RPA developer, delivered the session.",
    details: [
      "Focus: How repetitive computer oriented human tasks and complicated end-to-end procedures can be automated using RPA.",
      "Covered tools like UiPath, Automation Anywhere and Blue Prism.",
      "Successfully built a full-fledged BOT based on real world use cases.",
    ],
    highlights: ["RPA", "UiPath", "Automation Anywhere", "Blue Prism"],
  },
  {
    year: "FDP 2021-22",
    title: "Ruby Technology & Spoken Tutorial",
    desc: "TIMSCDR organized a one-day online FDP on 23 December, 2021 on Ruby Technology in association with Spoken Tutorial, IIT-Bombay. Faculty members were introduced to different aspects of Ruby from the online portal of Spoken Tutorial.",
    details: [
      "Faculty members gained insight into Ruby technology for building desktop applications, static websites, data processing services, and automation tools.",
      "Included a 45-minute online test with 40% minimum passing marks - all faculties successfully cleared the test.",
    ],
    highlights: ["Ruby", "IIT Bombay", "Spoken Tutorial", "Online Assessment"],
  },
  {
    year: "FDP 2020-21",
    title: "Blockchain & Advanced Java",
    desc: "TIMSCDR organized its first online FDP between 15-16 January, 2021 on Blockchain & Advanced Java in association with CSI, Mumbai Chapter and Institute Innovation Council (IIC). The programme was conducted by Dr. Manish Kumar Jain, International Corporate Trainer.",
    details: [
      "Day 1: Introduction to Blockchain technology, features and applications, Bitcoin knowledge and wallet creation, Solidity programming",
      "Day 2: Angular and Node.js introduction with hands-on practice, Spring Framework concepts",
    ],
    highlights: ["Blockchain", "Advanced Java", "Angular", "Node.js"],
  },
  {
    year: "FDP 2019-20",
    title: "Machine Learning with R Programming",
    desc: "Two day Faculty Development Program (FDP) was conducted on 27/11/2019 and 29/11/2019 on Machine Learning with R conducted by Anvira Edustation. The training was conducted by Mr. Rahul Puri (Co-founder & CEO), Mr. Harsh Jalan (Assistant Researcher), and Mr. Sunny DSouza.",
    details: [
      "Day 1: Machine learning basics, R programming fundamentals, Iris Data Classification using LDA, KNN, CART, Random Forest and SVM",
      "Day 2: Linear & Logistic Regression, K-means Clustering, Meanshift Clustering, Artificial Neural Networks",
    ],
    highlights: [
      "Machine Learning",
      "R Programming",
      "Anvira Edustation",
      "Classification",
    ],
  },
  {
    year: "FDP 2018-19",
    title: "Quality Improvement - NAAC Accreditation Process",
    desc: "Conducted on 26-27 November 2018. The objective was to make faculty members aware of the NAAC Accreditation Process covering all seven criteria comprehensively.",
    details: [
      "Mr. Parag Shah - NAAC Criteria 4 (Infrastructure) & 6 (Governance)",
      "Dr. Sanjay Gaikwad - Criteria 5 (Student Support) & 7 (Institutional Values)",
      "Mr. Peeyush Pahade - Criteria 1-3 (Curricular, Teaching-learning, Research)",
    ],
    highlights: ["NAAC", "Quality Improvement", "Accreditation", "7 Criteria"],
  },
  {
    year: "FDP 2018-19",
    title: "Python Workshop",
    desc: "TIMSCDR conducted a remote live assisted 3-Day workshop on 'Basic Programming using Python' for faculty members in association with FOSSEE IIT Bombay from 13-15 December 2018.",
    details: [
      "Format: Video lectures of IIT Bombay were broadcasted, quizzes conducted using Yaksh online test platform, Q&A sessions answered by FOSSEE team remotely.",
      "10 faculty members received certificates from FOSSEE, IIT Bombay.",
    ],
    highlights: ["Python", "IIT Bombay", "Spoken Tutorial", "Certification"],
  },
];

// ✅ Main component
export default function FacultyPrograms() {
  const [carouselIdx, setCarouselIdx] = React.useState(0); // current slide index
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />
      <div className="fdp23-root">
        {/* ================= PROGRAMS SECTION ================= */}
        <section className="fdp23-programs-section" id="fdp23-programs">
          <div className="fdp23-container">
            <h2 className="fdp23-section-title">
              Faculty Development Programs
            </h2>
            <p className="fdp23-section-desc">
              Our Faculty Development Programmes (FDPs) are designed to enhance
              the knowledge and skills of our faculty members in alignment with
              the latest advancements in the MCA syllabus Mumbai University.
              These FDPs cover a wide range of topics, ensuring our educators
              are well-equipped to provide high-quality education to students
              pursuing their MCA degrees.
            </p>
            {/* ================= CAROUSEL SECTION ================= */}
            <section className="fdp23-carousel-section">
              <div className="fdp23-container">
                {/* <h2 className="fdp23-section-title">Program Highlights</h2> */}

                {/* Carousel wrapper */}
                <div className="fdp23-carousel-container">
                  {/* Carousel slides track (moves left/right based on index) */}
                  <div
                    className="fdp23-carousel-track"
                    style={{ transform: `translateX(-${carouselIdx * 100}%)` }}
                  >
                    {carouselImages.map((img, i) => (
                      <div className="fdp23-carousel-slide" key={i}>
                        <img
                          src={img.src}
                          alt={img.title}
                          className="fdp23-carousel-img"
                        />
                        {/* Optional caption below image */}
                        {/* 
                  <div className="fdp23-carousel-caption">
                    <h3>{img.title}</h3>
                    <p>{img.desc}</p>
                  </div> 
                  */}
                      </div>
                    ))}
                  </div>

                  {/* Prev button */}
                  <button
                    className="fdp23-carousel-btn fdp23-carousel-prev"
                    onClick={() =>
                      setCarouselIdx(
                        (carouselIdx - 1 + carouselImages.length) %
                          carouselImages.length
                      )
                    }
                  >
                    ❮
                  </button>

                  {/* Next button */}
                  <button
                    className="fdp23-carousel-btn fdp23-carousel-next"
                    onClick={() =>
                      setCarouselIdx((carouselIdx + 1) % carouselImages.length)
                    }
                  >
                    ❯
                  </button>

                  {/* Indicators (dots) */}
                  <div className="fdp23-carousel-indicators">
                    {carouselImages.map((_, i) => (
                      <span
                        key={i}
                        className={`fdp23-carousel-indicator${
                          i === carouselIdx ? " fdp23-active" : ""
                        }`}
                        onClick={() => setCarouselIdx(i)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ================= STATS SECTION ================= */}
            <section className="fdp23-stats-section" id="fdp23-stats">
              <div className="fdp23-container">
                <h2 className="fdp23-section-title fdp23-stats-title">
                  Our Impact
                </h2>
                <p className="fdp23-stats-desc">
                  Transforming education through innovative faculty development
                </p>

                {/* Grid of stats */}
                <div className="fdp23-stats-grid">
                  {stats.map((s, i) => {
                    // Extract number and check if it has "+"
                    const num = parseInt(s.number.replace(/\D/g, ""), 10);
                    const hasPlus = s.number.includes("+");

                    return (
                      <div className="fdp23-stat-item" key={i}>
                        <span className="fdp23-stat-number">
                          {/* Animated number */}
                          <CountUp end={num} duration={1.5} separator="," />
                          {hasPlus ? "+" : ""}
                        </span>
                        <span className="fdp23-stat-label">{s.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Program cards grid */}
            <div className="fdp23-programs-grid">
              {programs.map((p, j) => (
                <div className="fdp23-program-card" key={j}>
                  <span className="fdp23-program-year">{p.year}</span>
                  <h3 className="fdp23-program-title">{p.title}</h3>
                  <p className="fdp23-program-desc">{p.desc}</p>

                  {/* Details list */}
                  <ul className="fdp23-program-details">
                    {p.details.map((li, k) => (
                      <li key={k}>{li}</li>
                    ))}
                  </ul>

                  {/* Highlights tags */}
                  <div className="fdp23-program-highlights">
                    {p.highlights.map((h, i) => (
                      <span className="fdp23-program-highlight" key={i}>
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
