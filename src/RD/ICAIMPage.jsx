import React, { useEffect, useRef, useState } from "react";
import "./icaim2025.css";
import Navbar from "../components/navbar";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Footer from "../components/Footer";

const ICAIM2025 = () => {
  // Carousel state
  const [icCurrentSlide, setIcCurrentSlide] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const icSlidesRef = useRef(null);
  const icDotsRef = useRef([]);
  const icAutoTimerRef = useRef(null);

  const icSlides = [
    {
      title: "Conference Inauguration",
      text:
        "ICAIM 2025 was inaugurated by Chief Guest Dr. Suresh Shan, Chairman of CSI, along with distinguished guests from industry and academia",
    },
    {
      title: "AI in Agriculture Sessions",
      text:
        "Expert presentations on precision farming, pest detection, climate forecasting, and crop monitoring using AI technologies",
    },
    {
      title: "Healthcare Innovation",
      text:
        "Discussions on AI in healthcare, digital public infrastructure, and personalized patient engagement",
    },
    {
      title: "Research Presentations",
      text:
        "100 research papers and 54 technical research posters presented by participants from academia and industry",
    },
    {
      title: "Awards Ceremony",
      text:
        "Recognition of outstanding research contributions in AI applications for agriculture and healthcare",
    },
  ];

  const icShowSlide = (index) => {
    const total = icSlides.length;
    let next = index;
    if (index >= total) next = 0;
    if (index < 0) next = total - 1;
    setIcCurrentSlide(next);
  };

  const icNextSlide = () => icShowSlide(icCurrentSlide + 1);
  const icPrevSlide = () => icShowSlide(icCurrentSlide - 1);
  const icGoTo = (i) => icShowSlide(i);

  useEffect(() => {
    // Auto-advance
    icAutoTimerRef.current = setInterval(() => {
      setIcCurrentSlide((prev) => (prev + 1) % icSlides.length);
    }, 5000);
    return () => clearInterval(icAutoTimerRef.current);
  }, []);

  useEffect(() => {
    // Scroll reveal intersection observer
    const options = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("ic-icaim-revealed");
      });
    }, options);

    const targets = document.querySelectorAll(".ic-icaim-scroll-reveal");
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Mobile nav toggle (placeholder if needed)
  const [icShowMenu, setIcShowMenu] = useState(false);

  return (
    <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />

      <div className="ic-icaim-page">
        <main className="ic-icaim-main">
          {/* About */}
          <section id="about" className="ic-icaim-section">
            <div className="ic-icaim-container">
              <h2 className="ic-icaim-section-title ic-icaim-icaim ic-icaim-icaim"></h2>
              <h2 className="ic-icaim-section-title ic-icaim-scroll-reveal">ICAIM 2025</h2>

              {/* Carousel */}
              <section id="carousel" className="ic-icaim-carousel-section">
                <h2 className="ic-icaim-section-title ic-icaim-scroll-reveal">ICAIM 2025</h2>
                <div className="ic-icaim-container">
                  <div className="ic-icaim-carousel-wrap">
                    <div
                      className="ic-icaim-carousel-slides"
                      ref={icSlidesRef}
                      style={{ transform: `translateX(-${icCurrentSlide * 100}%)` }}
                    >
                      {icSlides.map((s, idx) => (
                        <div className="ic-icaim-carousel-slide" key={idx}>
                          <div className="ic-icaim-carousel-content">
                            <h3>{s.title}</h3>
                            <p>{s.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <button className="ic-icaim-carousel-btn ic-icaim-prev" onClick={icPrevSlide} aria-label="Previous slide">
                      ❮
                    </button>
                    <button className="ic-icaim-carousel-btn ic-icaim-next" onClick={icNextSlide} aria-label="Next slide">
                      ❯
                    </button>

                    <div className="ic-icaim-carousel-dots" role="tablist" aria-label="Carousel Navigation">
                      {icSlides.map((_, i) => (
                        <button
                          key={i}
                          className={`ic-icaim-dot ${icCurrentSlide === i ? "ic-icaim-dot-active" : ""}`}
                          onClick={() => icGoTo(i)}
                          ref={(el) => (icDotsRef.current[i] = el)}
                          aria-label={`Go to slide ${i + 1}`}
                          aria-selected={icCurrentSlide === i}
                          role="tab"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <div className="ic-icaim-about-grid">
                <div className="ic-icaim-about-text ic-icaim-scroll-reveal">
                  <p>
                    Thakur Institute of Management Studies, Career Development and Research (TIMSCDR) organized ICAIM 2025, International
                    Conference on Advances in Information Technology and Management on 8-9 February 2025.
                  </p>

                  <p>
                    Theme of this year&apos;s conference was &quot;Leveraging Information for Sustainability in Agriculture &amp; Healthcare – Viksit Bharat&quot;. It was in
                    association with AMC (Association of Medical Consultants), MACCIA (Maharashtra Chamber of Commerce), Malad Medical Association (MMA), Global Indian Scientists
                    &amp; Technocrats Forum (GIST) and Nordic Center for Sustainable Healthcare (NCSH) Industry and Agriculture. ICAIM 2025 aims to contributing towards the vision of a
                    Viksit Bharat as it sets stage to drive in innovative IT solutions for sustainability and resilience in agriculture and healthcare in specific and all
                    other sectors in general.
                  </p>

                  <p>
                    The conference was held in a blended mode, with experts from IT, agriculture, and medicine. ICAIM 2025 explored the role of IT in promoting sustainability in
                    agriculture and healthcare, aiming to inspire innovative solutions and drive transformative changes for a &quot;Viksit Bharat.&quot; The focus was on how IT
                    can enhance productivity, efficiency, and sustainability, contributing to the vision of a developed India.
                  </p>
                </div>
              </div>

              <h3 className="ic-icaim-section-title ic-icaim-scroll-reveal ic-icaim-mt-3">Partner Organizations</h3>
              <div className="ic-icaim-partners-grid ic-icaim-scroll-reveal">
                {[
                  { name: "AMC", desc: "Association of Medical Consultants" },
                  { name: "MACCIA", desc: "Maharashtra Chamber of Commerce" },
                  { name: "MMA", desc: "Malad Medical Association" },
                  { name: "GIST", desc: "Global Indian Scientists & Technocrats Forum" },
                  { name: "NCSH", desc: "Nordic Center for Sustainable Healthcare" },
                ].map((p, idx) => (
                  <div className="ic-icaim-partner-card" key={idx}>
                    <h4>{p.name}</h4>
                    <p>{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Schedule */}
          <section id="schedule" className="ic-icaim-section ic-icaim-schedule">
            <div className="ic-icaim-container">
              <h2 className="ic-icaim-section-title ic-icaim-scroll-reveal">Conference Schedule</h2>
              <p className="ic-icaim-section-subtitle ic-icaim-scroll-reveal">Two days of intensive sessions on AI in Agriculture and Healthcare</p>

              <div className="ic-icaim-schedule-grid">
                <div className="ic-icaim-schedule-card ic-icaim-scroll-reveal">
                  <div className="ic-icaim-schedule-header">
                    <span className="ic-icaim-schedule-date">Day 1 - February 8, 2025</span>
                    <span className="ic-icaim-schedule-time">Agriculture Focus</span>
                  </div>
                  <div className="ic-icaim-schedule-content">
                    <h3>AI in Agriculture &amp; Sustainability</h3>
                    <p>
                      The inauguration of ICAIM 2025 was graced by Chief Guest Dr. Suresh Shan, Chairman of CSI, and Guests of Honor Mr. Jyotish Kumar Ghosh, Chief Sales
                      Officer of 3i Infotech Ltd, Mr. Manohar Khake, Agro Consultant, and Mr. Yelloji Mirajkar, International Convenor of GIST.
                    </p>

                    <div className="ic-icaim-speakers">
                      <h4>Key Sessions:</h4>
                      <ul>
                        <li>Welcome Address by Dr. Vinita Gaikwad, Director of TIMSCDR</li>
                        <li>AI in Agriculture presentation by Dr. Prakash Jha, Agriculture Climatology Professor at Mississippi State University</li>
                        <li>Agri bots and precision agriculture demonstration by Dr. Gopal Shinde, Head of Mechanical Engineering, Vasantrao Naik Marathwada Krishi Vidyapeeth</li>
                        <li>
                          Panel Discussion: "Leveraging Information Technology for Sustainability in Agriculture – Viksit Bharat" moderated by Mr. Dinesh Singh from TCS&apos;s
                          Digital Farming Initiative
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="ic-icaim-schedule-card ic-icaim-scroll-reveal">
                  <div className="ic-icaim-schedule-header">
                    <span className="ic-icaim-schedule-date">Day 2 - February 9, 2025</span>
                    <span className="ic-icaim-schedule-time">Healthcare Focus</span>
                  </div>
                  <div className="ic-icaim-schedule-content">
                    <h3>AI in Healthcare &amp; Digital Infrastructure</h3>
                    <p>
                      The second day was graced by Chief Guest Dr. Vivek Dwivedi, President of AMC and Orthopaedic Surgeon, and Dr. Shalin Soni, President of MMA and Physician
                      &amp; Surgeon.
                    </p>

                    <div className="ic-icaim-speakers">
                      <h4>Key Sessions:</h4>
                      <ul>
                        <li>International Speakers: Mr. Johannes Brundin and Mr. Diego Angelino from Nordic Center for Sustainable Healthcare</li>
                        <li>AI in Healthcare presentation by Mr. Santosh Chapaneri, Lead Data Scientist at UpToDate</li>
                        <li>Panel Discussion: "Digital Public Infrastructure in Healthcare" moderated by Dr. Mukesh Gupta</li>
                        <li>Doctor&apos;s Workshop: "Personalized Patient Engagement with AI"</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Pre-Conference */}
          <section id="pre-conference" className="ic-icaim-section ic-icaim-preconf">
            <div className="ic-icaim-container">
              <h2 className="ic-icaim-section-title ic-icaim-scroll-reveal">Pre-Conference Sessions</h2>
              <p className="ic-icaim-section-subtitle ic-icaim-scroll-reveal">February 6, 2025 - Student Workshops and Hackathon</p>

              <div className="ic-icaim-about-text ic-icaim-scroll-reveal">
                <p>
                  The pre-conference sessions were conducted for students by eminent personalities from Industry. The sessions included workshops on AI and blockchain in healthcare,
                  AI&apos;s role in medicine, and a comprehensive hackathon on "Driving Changes in Education, Health, and Agriculture Using AI with MATLAB."
                </p>
              </div>

              <div className="ic-icaim-preconf-table ic-icaim-scroll-reveal">
                <div className="conv-table-wrapper">
                  <table className="conv-table" aria-label="Pre-Conference Sessions">
                    <thead>
                      <tr>
                        <th scope="col">
                          Date
                          <span className="th-subtext">Schedule Day</span>
                        </th>
                        <th scope="col">
                          Time
                          <span className="th-subtext">Session Slot</span>
                        </th>
                        <th scope="col">
                          Topics
                          <span className="th-subtext">Workshop / Hackathon</span>
                        </th>
                        <th scope="col">
                          Speaker/Judges Details
                          <span className="th-subtext">Names & Roles</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>06-02-2025</td>
                        <td>10.00 am - 11.00 am</td>
                        <td>AI and blockchain in healthcare</td>
                        <td>Dr. Anand Rao</td>
                      </tr>
                      <tr>
                        <td>06-02-2025</td>
                        <td>11.00 am - 12.00 noon</td>
                        <td>AI&apos;s role in medicine</td>
                        <td>Dr. Sabhyasachi Sengupta</td>
                      </tr>
                      <tr>
                        <td>06-02-2025</td>
                        <td>1.00 pm - 5.00 pm</td>
                        <td>
                          Hackathon on "Driving Changes in Education, Health, and Agriculture Using AI with MATLAB"
                        </td>
                        <td>
                          Mr. Kunal Khandelwal<br />
                          Mr. Shrikant Manihar
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="ic-icaim-about-text ic-icaim-scroll-reveal ic-icaim-mt-2">
                <p>
                  The pre-conference session featured Dr. Anand Rao, who discussed AI and blockchain in healthcare, focusing on advancements in disease detection and secure health
                  records. Dr. Sabhyasachi Sengupta highlighted AI&apos;s role in medicine, showcasing tools like AlphaFold and emphasizing AI&apos;s potential to improve diagnostics and
                  reduce doctors&apos; administrative tasks, encouraging students to explore AI and data science for future healthcare innovations.
                </p>

                <p>
                  The ICAIM 2025 Pre-Conference Hackathon was judged by Mr. Kunal Khandelwal from MathWorks and Mr. Shrikant Manihar, former MD of Duck Creek Technologies.
                  Participants showcased their AI-driven solutions, receiving expert feedback from the judges.
                </p>

                <p>
                  Faculty members Ms. Kinjal Doshi, Ms. Anamika Dhawan, and Ms. Alifiya Shaikh from TIMSCDR conducted a workshop on App Development using MATLAB for students on 3rd and
                  4th February 2025. The workshop aimed to introduce students to the basics of app development, utilizing MATLAB&apos;s powerful features for creating functional
                  applications.
                </p>
              </div>

              <h3 className="ic-icaim-section-title ic-icaim-scroll-reveal ic-icaim-mt-3">Doctor&apos;s Workshop Topics</h3>
              <div className="ic-icaim-partners-grid ic-icaim-scroll-reveal">
                {[
                  { t: "AI Assisted Videos", s: "For Patient Awareness" },
                  { t: "Chatbot Implementation", s: "For Patient Interaction" },
                  { t: "Data Management", s: "With AI Integration" },
                  { t: "Digital Solutions", s: "AI Generated Digital Visiting Cards" },
                ].map((i, idx) => (
                  <div className="ic-icaim-partner-card" key={idx}>
                    <h4>{i.t}</h4>
                    <p>{i.s}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Research */}
          <section id="research" className="ic-icaim-section ic-icaim-research">
            <div className="ic-icaim-container">
              <h2 className="ic-icaim-section-title ic-icaim-scroll-reveal">Research Papers &amp; Publications</h2>
              <p className="ic-icaim-section-subtitle ic-icaim-scroll-reveal">
                Outstanding research contributions in AI, Agriculture, and Healthcare
              </p>

              <div className="ic-icaim-stats ic-icaim-scroll-reveal">
                {[
                  { n: "100", l: "Research Papers" },
                  { n: "54", l: "Technical Research Posters" },
                  { n: "2", l: "Conference Days" },
                  { n: "3", l: "Award Categories" },
                ].map((s, idx) => (
                  <div className="ic-icaim-stat-card" key={idx}>
                    <div className="ic-icaim-stat-number">{s.n}</div>
                    <div className="ic-icaim-stat-label">{s.l}</div>
                  </div>
                ))}
              </div>

              <p className="ic-icaim-about-text ic-icaim-center ic-icaim-scroll-reveal">
                ICAIM-2025 Proceeding published 100 Research Papers and 54 Technical Research Posters on interdisciplinary subjects, selected after a rigorous review process. Research
                papers were presented before distinguished professionals from the sectors of Agriculture, Healthcare, and IT.
              </p>

              <h3 className="ic-icaim-section-title ic-icaim-scroll-reveal ic-icaim-mt-3">Session Chairs</h3>
              <div className="ic-icaim-chairs-grid ic-icaim-scroll-reveal">
                {[
                  {
                    n: "Dr. Megharani Patil",
                    p: "Dy. Head of Department, Thakur College of Engineering and Technology (TCET)",
                  },
                  {
                    n: "Dr. Rekha Sharma",
                    p: "Associate Professor, Computer Science Software Engineering, TCET",
                  },
                  {
                    n: "Dr. Rashmi Thakur",
                    p: "Associate Professor & Associate Dean (Skill Development & Vocational Studies), TCET",
                  },
                  { n: "Dr. Suresh A. Shan", p: "Chairman, CSI – Mumbai Chapter" },
                  { n: "Dr. Aparna Deshmukh", p: "Head – Biotechnology, TCSC" },
                ].map((c, idx) => (
                  <div className="ic-icaim-chair-card" key={idx}>
                    <div className="ic-icaim-chair-name">{c.n}</div>
                    <div className="ic-icaim-chair-pos">{c.p}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Awards */}
          <section id="awards" className="ic-icaim-section ic-icaim-awards">
            <div className="ic-icaim-container">
              <h2 className="ic-icaim-section-title ic-icaim-scroll-reveal">Awards &amp; Recognition</h2>

              <div className="ic-icaim-awards-grid">
                {/* Faculty Research Paper Awards */}
                <div className="ic-icaim-award-cat ic-icaim-scroll-reveal">
                  <h3>Faculty Research Paper Awards</h3>

                  <div className="conv-table-wrapper">
                    <table className="conv-table" aria-label="Faculty Research Paper Awards">
                      <thead>
                        <tr>
                          <th scope="col">
                            Rank
                            <span className="th-subtext">Award Title</span>
                          </th>
                          <th scope="col">
                            Paper
                            <span className="th-subtext">Research Title</span>
                          </th>
                          <th scope="col">
                            Authors
                            <span className="th-subtext">List of Contributors</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Faculty - First Winner</td>
                          <td>
                            Using AI for Early Detection of CNS (Central Nervous System) anomalies in Fetus in the
                            First Trimester through Sonography Scans to Assist Rural Doctors in India
                          </td>
                          <td>
                            1. Dr Vinita Gaikwad<br />
                            2. Ms. Anamika Dhawan<br />
                            3. Dr Padma Mishra
                          </td>
                        </tr>
                        <tr>
                          <td>Faculty - First Runner up</td>
                          <td>
                            AI- Deep Learning Algorithm Based Prediction Model for Heart Disease using ECG images
                          </td>
                          <td>
                            1. Dr. Ashwini Renavikar<br />
                            2. Dr. Sonal Sharma
                          </td>
                        </tr>
                        <tr>
                          <td>Faculty - First Runner up</td>
                          <td>Machine Learning based Disease Prediction &amp; Drug Recommender System</td>
                          <td>
                            1. Dr. Shiksha Dubey<br />
                            2. Mr. Brijesh Pandey
                          </td>
                        </tr>
                        <tr>
                          <td>Faculty - First Runner up</td>
                          <td>Aspect based Sentiment Analysis of Drug Reviews</td>
                          <td>
                            1. Ms. Kinjal Doshi<br />
                            2. Dr. Falguni Parsana
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Student Research Paper Awards */}
                <div className="ic-icaim-award-cat ic-icaim-scroll-reveal">
                  <h3>Student Research Paper Awards</h3>

                  <div className="conv-table-wrapper">
                    <table className="conv-table" aria-label="Student Research Paper Awards">
                      <thead>
                        <tr>
                          <th scope="col">
                            Rank
                            <span className="th-subtext">Award Title</span>
                          </th>
                          <th scope="col">
                            Paper
                            <span className="th-subtext">Research Title</span>
                          </th>
                          <th scope="col">
                            Authors
                            <span className="th-subtext">List of Contributors</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Student - First Winner</td>
                          <td>Enhancing LLMs with Human-Behavior-Inspired Data</td>
                          <td>
                            1. Gaud Sonal Sanjay Tarawati<br />
                            2. Mojawat Devendra Mohan Sita
                          </td>
                        </tr>
                        <tr>
                          <td>Student - First Runner up</td>
                          <td>Digital Technology and Social Isolation: A Machine Learning Study of Wellbeing Patterns</td>
                          <td>
                            1. Panda Sanjana Sidhartha Sasmita
                          </td>
                        </tr>
                        <tr>
                          <td>Student - Second Runner up</td>
                          <td>Transforming Primary History Education: Development and Implementation of HistBot, an AI-Powered, Curriculum-Aligned Chatbot</td>
                          <td>
                            1. Ansari Tahera Kausar Mohd Khurdus Hasina<br />
                            2. Choudhary Akash Anil Kiran
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Technical Research Poster Awards */}
                <div className="ic-icaim-award-cat ic-icaim-scroll-reveal">
                  <h3>Technical Research Poster Awards</h3>

                  <div className="conv-table-wrapper">
                    <table className="conv-table" aria-label="Technical Research Poster Awards">
                      <thead>
                        <tr>
                          <th scope="col">
                            Rank
                            <span className="th-subtext">Award Title</span>
                          </th>
                          <th scope="col">
                            Project
                            <span className="th-subtext">Poster Title</span>
                          </th>
                          <th scope="col">
                            Authors
                            <span className="th-subtext">List of Contributors</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Student - First Winner</td>
                          <td>AgriVanni: Preserving and Transforming Farmer Knowledge Through AI</td>
                          <td>
                            1. Pundkar Hrishikesh Prakash Vimal<br />
                            2. Reddy Karthik Jaganath Shanta<br />
                            3. Redkar Sanjana Jaysing Shobha<br />
                            4. Rodrigues Royal Albert Anamarie
                          </td>
                        </tr>
                        <tr>
                          <td>Student - First Runner up</td>
                          <td>Harnessing AI for Sustainable Agriculture in India</td>
                          <td>
                            1. Mishra Rachana Amrendra Anjali<br />
                            2. Mistry Samay Ashish Aruna<br />
                            3. Mishra Rushabh Dilip Aruna<br />
                            4. Mishra Soni Ganesh Mamta
                          </td>
                        </tr>
                        <tr>
                          <td>Student - Second Runner up</td>
                          <td>YourLamp</td>
                          <td>1. Shelar Vikas Balaji</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Hackathon Awards */}
                <div className="ic-icaim-award-cat ic-icaim-scroll-reveal">
                  <h3>Hackathon Awards</h3>

                  <div className="conv-table-wrapper">
                    <table className="conv-table" aria-label="Hackathon Awards">
                      <thead>
                        <tr>
                          <th scope="col">
                            Rank
                            <span className="th-subtext">Award Title</span>
                          </th>
                          <th scope="col">
                            Project
                            <span className="th-subtext">Paper/Topic</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Student - First Winner</td>
                          <td>Sign Language Recognition</td>
                        </tr>
                        <tr>
                          <td>First Runner up</td>
                          <td>AgroShield</td>
                        </tr>
                        <tr>
                          <td>Second Runner up</td>
                          <td>Identification of Plant Disease from Leaf Images Based on Convolutional Neural Network</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default ICAIM2025;
