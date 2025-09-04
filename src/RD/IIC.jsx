import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Footer from "../components/Footer";
// import "./ResearchCell.css";


const IICPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState("");
  const [modalAlt, setModalAlt] = useState("");

  useEffect(() => {
    // Scroll animation
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -100px 0px" };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("iic-visible");
      });
    }, observerOptions);
    document.querySelectorAll(".iic-fade-in").forEach((el) => io.observe(el));

    // Parallax hero
    const onScroll = () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector(".iic-hero");
      if (hero) hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    };
    window.addEventListener("scroll", onScroll);

    // Smooth scroll
    const anchors = document.querySelectorAll('a[href^="#"]');
    const onAnchorClick = (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute("href");
      if (!href) return;
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    anchors.forEach((a) => a.addEventListener("click", onAnchorClick));

    // Cleanup
    return () => {
      window.removeEventListener("scroll", onScroll);
      anchors.forEach((a) => a.removeEventListener("click", onAnchorClick));
      io.disconnect();
    };
  }, []);

  const openModal = (src, alt) => {
    setModalSrc(src);
    setModalAlt(alt);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalSrc("");
    setModalAlt("");
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />
      <div className="container-fs">
        <h1 className="heading">Institution Innovation Council (IIC)</h1>

        {/* <section className="iic-hero" id="iic-home">
        <div className="container-fs">
          <h1>Institution Innovation Council</h1>
          <p>
            Fostering innovation and entrepreneurship ecosystem in higher education,
            empowering students and faculty to transform ideas into impactful solutions.
          </p>
        </div>
      </section> */}

        <div className="iic-content-wrapper">
          <div className="iic-main-section">
            <div className="rc-content-card iic-fade-in" id="iic-about">
              <h2 className="iic-section-title">About IIC</h2>
              <p>TIMSCDR, recognized as the best institute for MCA, has established IIC in the Academic Year 2018-2019.</p>
              <p>
                In the year 2019, the Ministry of Education (MoE) through MoE's Innovation Cell (MIC) launched the
                Institution's Innovation Council (IIC) program in collaboration with AICTE for Higher Educational
                Institutions (HEIs) to systematically foster the culture of innovation and start-up ecosystem in
                education institutions. Primarily, IIC's role is to engage large number of faculty, students and
                staff in various innovation and entrepreneurship related activities such as ideation, Problem solving,
                Proof of Concept development, Design Thinking, IPR, project handling and management at
                Pre-incubation/Incubation stage, etc., so that innovation and entrepreneurship ecosystem gets
                established and stabilized in HEIs.
              </p>
            </div>

            <div className="iic-content-card iic-fade-in">
              <h3><strong>Major Focus of IIC</strong></h3>
              <div className="iic-focus-section">
                <div className="iic-focus-grid">
                  <div className="iic-focus-item">

                    <div className="iic-focus-text">To create a vibrant local innovation ecosystem</div>
                  </div>
                  <div className="iic-focus-item">

                    <div className="iic-focus-text">Start-up/ entrepreneurship supporting Mechanism in HEIs</div>
                  </div>
                  <div className="iic-focus-item">

                    <div className="iic-focus-text">Establish Function Ecosystem for Scouting Ideas and Pre-incubation of Ideas</div>
                  </div>
                  <div className="iic-focus-item">

                    <div className="iic-focus-text">Develop better Cognitive Ability amongst Technology Students</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="iic-content-card iic-fade-in">
              <h3><strong>Functions of IIC</strong></h3>
              <ul className="iic-bullets">
                <li>Promote innovation in the Institution through multitudinous modes leading to an innovation promotion eco-system in the campus</li>
                <li>To conduct various innovation and entrepreneurship-related activities prescribed by Central MIC in time bounded fashion.</li>
                <li>Identify and reward innovations and share success stories.</li>
                <li>Organize periodic workshops/ seminars/ interactions with entrepreneurs, investors, professionals and create a mentor pool for student innovators.</li>
                <li>Network with peers and national entrepreneurship development organizations.</li>
                <li>Create an Institution's Innovation portal to highlight innovative projects carried out by institution's faculty and students.</li>
                <li>Organize Hackathons, idea competition, mini-challenges etc., with the involvement of industries.</li>
              </ul>
            </div>

            <div className="iic-content-card iic-fade-in">
              <h3><strong>Objective/Role</strong></h3>
              <div className="iic-focus-section">
                <div className="iic-focus-grid">
                  <div className="iic-focus-item">

                    <div className="iic-focus-text">
                      Engage faculty members and students in various innovation and entrepreneurship related activities such as
                      Ideation, Problem Solving, Proof of Concept Development, Design Thinking, IPR, Project Handling and Management.
                    </div>
                  </div>
                  <div className="iic-focus-item">

                    <div className="iic-focus-text">
                      Organize periodic workshops/ seminars/ interactions with entrepreneurs, investors, professionals and
                      create a mentor pool for student innovators.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="conv-table-wrapper">
              <table className="conv-table">
                <thead>
                  <tr>
                    <th>
                      Sr.
                      <span className="th-subtext">serial</span>
                    </th>
                    <th>
                      Name of Member
                      <span className="th-subtext">person</span>
                    </th>
                    <th>
                      Member Type
                      <span className="th-subtext">type</span>
                    </th>
                    <th>
                      Key Role/Position Assigned in IIC
                      <span className="th-subtext">role</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>1.</td><td>Dr. Vinita Gaikwad</td><td>Director-TIMSCDR</td><td>HOI, TIMSCDR</td></tr>
                  <tr><td>2.</td><td>Ms. Thara Chakkingal</td><td>Assistant Professor</td><td>President, IIC</td></tr>
                  <tr><td>3.</td><td>Ms. Shweta Waghmare</td><td>Assistant Professor</td><td>Convener, IIC</td></tr>
                  <tr><td>4.</td><td>Ms. Mira Gohil</td><td>Assistant Professor</td><td>Coordinator, IPR</td></tr>
                  <tr><td>5.</td><td>Dr. Padma Mishra</td><td>Assistant Professor</td><td>Innovation</td></tr>
                  <tr><td>6.</td><td>Mr. Brijesh Pandey</td><td>Assistant Professor</td><td>Internship</td></tr>
                  <tr><td>7.</td><td>Ms. Anamika Dhawan</td><td>Assistant Professor</td><td>Yukti Coordinator</td></tr>
                  <tr><td>8.</td><td>Ms. Kinjal Doshi</td><td>Assistant Professor</td><td>Social Media</td></tr>
                  <tr><td>9.</td><td>Ms. Rohini Bagul</td><td>Assistant Professor</td><td>Start-up</td></tr>
                  <tr><td>10.</td><td>Dr. Suresh Shan</td><td>External Expert</td><td>External Expert</td></tr>
                  <tr><td>11.</td><td>Mr. Vishal Sanghavi</td><td>External Expert</td><td>External Expert</td></tr>
                </tbody>
              </table>
            </div>

            {/* Roles & Responsibilities Section (separate full width) */}
            <section className="iic-roles-wrapper">
              <h2 className="iic-section-title">Roles & Responsibilities</h2>
              <div className="iic-roles-grid">
                <div className="iic-role-card">
                  <h4>President</h4>
                  <ul>
                    <li>Lead the IIC Council; custodian of IIC portal login and data/reports.</li>
                    <li>Call meetings, set agenda, monitor deliverables; main point of contact with MIC.</li>
                    <li>Respond to national coordination team and ensure decent performance.</li>
                    <li>Coordinate with MIC; ensure participation in calendar and own initiatives.</li>
                    <li>Ensure effective implementation with the Convener; update council members on portal.</li>
                    <li>Submit progress/activity reports on the IIC portal.</li>
                  </ul>
                </div>

                <div className="iic-role-card">
                  <h4>Vice-President</h4>
                  <ul>
                    <li>Build mentor pool and HR capacity for campus Innovation & Entrepreneurship.</li>
                    <li>Identify/guide early-stage entrepreneurs and student innovators.</li>
                    <li>Develop a critical mass with entrepreneurial mindset and skillset.</li>
                    <li>Enable commercialization via tech transfer, licensing and startups.</li>
                    <li>Build infrastructure and resource access for innovation.</li>
                    <li>Strengthen partnerships and create new program interventions.</li>
                  </ul>
                </div>

                <div className="iic-role-card">
                  <h4>Convener</h4>
                  <ul>
                    <li>Coordinate with President for smooth conduct of activities.</li>
                    <li>Ensure participation; prepare agenda 10 days prior with inputs from council.</li>
                    <li>Maintain documentation (photos, minutes, YouTube video) and share links.</li>
                    <li>Avoid exam clashes; coordinate across departments.</li>
                    <li>Collect inputs from members, especially external, for planning and delivery.</li>
                  </ul>
                </div>

                <div className="iic-role-card">
                  <h4>Social Media Coordinator</h4>
                  <ul>
                    <li>Create/manage IIC accounts on major platforms and post updates.</li>
                    <li>Follow/tag MIC/IIC pages; ensure students follow for first-hand info.</li>
                  </ul>
                </div>

                <div className="iic-role-card">
                  <h4>Members</h4>
                  <ul>
                    <li>Include IIC logo and wording on brochures for relevant departmental activities.</li>
                    <li>Establish Innovation Clubs with facilities and equipment for I&E activities.</li>
                    <li>Develop innovative/entrepreneurial mindset via workshops, outreach, hackathons, networking.</li>
                    <li>Encourage entrepreneurship-related research; develop I&E certificate courses.</li>
                    <li>Offer majors/minors or credit courses related to I&E and IPR.</li>
                    <li>Run 30-hour employment generation skill programs and community programs.</li>
                    <li>Coordinate with IPR Cell to generate IP revenue.</li>
                    <li>Obtain grants from Government, Non-Govt, and CSR bodies.</li>
                  </ul>
                </div>
              </div>
            </section>

          </div>

          <aside className="iic-sidebar">
            <div className="iic-sidebar-card iic-fade-in">
              <h3 className="iic-sidebar-title">Research Projects</h3>
              <ul className="iic-sidebar-list">
                <li><a href="#">International Conference – ICAIM Award Winners</a></li>
                <li className="iic-submenu">
                  <a href="#">Faculty Research Work / Publications</a>
                </li>
              </ul>
            </div>

            <div className="iic-sidebar-card iic-fade-in">
              <h3 className="iic-sidebar-title">Journals</h3>
              <ul className="iic-sidebar-list iic-year-list">
                <li><a href="#">A.Y. 2020-21</a></li>
                <li><a href="#">A.Y. 2019-20</a></li>
                <li><a href="#">A.Y. 2018-19</a></li>
                <li><a href="#">A.Y. 2017-18</a></li>
                <li><a href="#">A.Y. 2016-17</a></li>
                <li><a href="#">A.Y. 2015-16</a></li>
              </ul>
            </div>

            <div className="iic-sidebar-card iic-fade-in">
              <h3 className="iic-sidebar-title">Conferences</h3>
              <ul className="iic-sidebar-list iic-year-list">
                <li><a href="#">A.Y. 2021-22</a></li>
                <li><a href="#">A.Y. 2020-21</a></li>
                <li><a href="#">A.Y. 2019-20</a></li>
                <li><a href="#">A.Y. 2018-19</a></li>
                <li><a href="#">A.Y. 2017-18</a></li>
                <li><a href="#">A.Y. 2016-17</a></li>
                <li><a href="#">A.Y. 2015-16</a></li>
              </ul>
            </div>
          </aside>
        </div>

        {/* Full Width Certificates Section */}
        <div className="iic-certificates-section-full iic-fade-in">
          <div className="iic-content-card">
            <h3 className="iic-section-title">Certificates & Recognition</h3>
            <div className="iic-certificates-grid">
              {[
                { src: "certificate1.jpg", title: "IIC Establishment Certificate", desc: "Official recognition certificate from Ministry of Education" },
                { src: "certificate2.jpg", title: "Innovation Excellence Award", desc: "Recognition for outstanding contribution to innovation ecosystem" },
                { src: "certificate3.jpg", title: "Best Performance Certificate", desc: "Achievement award for exceptional IIC performance metrics" },
              ].map((c, idx) => (
                <div className="iic-certificate-item" key={idx}>
                  <button
                    type="button"
                    className="iic-certificate-image"
                    onClick={() => openModal(c.src, c.title)}
                    aria-label={`Open ${c.title}`}
                  >
                    <img src={c.src} alt={c.title} />
                    <div className="iic-image-overlay">
                      <span>Click to view full size</span>
                    </div>
                  </button>
                  <div className="iic-certificate-info">
                    <h4>{c.title}</h4>
                    <p>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>




        {/* Modal */}
        {modalOpen && (
          <div className="iic-modal" onClick={(e) => e.target === e.currentTarget && closeModal()}>
            <button type="button" className="iic-close" onClick={closeModal} aria-label="Close">×</button>
            <div className="iic-modal-content" role="dialog" aria-modal="true">
              <img src={modalSrc} alt={modalAlt} />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default IICPage;