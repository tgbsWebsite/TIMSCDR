import React, { useEffect } from "react";


export default function ResearchCell() {
  useEffect(() => {
    // Scroll animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".fade-in").forEach((el) => {
      observer.observe(el);
    });

    // Smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });

    // Parallax hero
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector(".rc-hero");
      if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showYear = (year, e) => {
    document.querySelectorAll(".rc-tab").forEach((tab) =>
      tab.classList.remove("active")
    );
    e.target.classList.add("active");
    console.log("Showing data for:", year);
  };

  return (
    <div className="rc-body">
      {/* Header */}
      <header className="rc-header">
        <nav className="rc-nav rc-container">
          <div className="rc-logo">TIMSCDR</div>
          <ul className="rc-nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#research">Research</a></li>
            <li><a href="#academics">Academics</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section className="rc-hero">
        <div className="rc-container">
          <h1>Research Cell</h1>
          <p>
            Pioneering innovation through interdisciplinary research in
            Agriculture and Healthcare, fostering a culture of discovery and
            excellence.
          </p>
        </div>
      </section>

      {/* Main */}
      <main className="rc-main-content">
        <div className="rc-container">
          <div className="rc-content-wrapper">
            <div className="rc-main-section">
              <div className="rc-content-card fade-in">
                <h2 className="rc-section-title">Research and Development</h2>
                <p>
                  Research and Development (R&D) at TIMSCDR is responsible for
                  promoting a robust research culture within the Institute.
                </p>
                <p>
                  TIMSCDR aims to conduct research to meet corporate demands
                  properly and promptly.
                </p>
                <p>
                  TIMSCDR is pursuing interdisciplinary research work in the
                  domains of Agriculture and Medicine (Healthcare) in
                  association with renowned Institutes.
                </p>
              </div>

              <div className="rc-content-card fade-in">
                <h3><strong>Research Cell</strong></h3>
                <p>
                  TIMSCDR conducts R&D activities under the Research Cell. The
                  Research Cell has the following objectives:
                </p>

                <div className="rc-research-objectives">
                  <h3>Research Objectives</h3>
                  <div className="rc-objectives-grid">
                    {["To encourage Research culture...",
                      "Acquiring and working on Funded Research Projects.",
                      "To perform research in Medicine and Agriculture.",
                      "To study the role of IT in Medicine and Agriculture.",
                      "To develop interdisciplinary networks for collaborations."].map((text, i) => (
                      <div className="rc-objective-item" key={i}>
                        <div className="rc-objective-number">{i+1}</div>
                        <div className="rc-objective-text">{text}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <p>
                  The Research Committee meets twice a year and provides inputs
                  for enhancement of Research in the Institute.
                </p>
              </div>

              {/* Committee Section */}
              <div className="rc-committee-section fade-in">
                <div className="rc-year-tabs">
                  {['2024-25','2023-24','2022-23','2021-22'].map((yr,i) => (
                    <button
                      key={i}
                      className={`rc-tab ${i===0? 'active':''}`}
                      onClick={(e)=>showYear(yr,e)}
                    >
                      A.Y. {yr}
                    </button>
                  ))}
                </div>

                <div id="committee-2024-25" className="rc-committee-table-container">
                  <table className="rc-committee-table">
                    <thead>
                      <tr>
                        <th>Sr. No.</th>
                        <th>Composition</th>
                        <th>Name of Member</th>
                        <th>Designation</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Chairman</td>
                        <td>Dr. Vinita Gaikwad</td>
                        <td>Director, TIMSCDR</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Convenor</td>
                        <td>Dr. Padma Mishra</td>
                        <td>Associate Professor, TIMSCDR</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Member – Finance</td>
                        <td>Dr Ashwini Renavikar</td>
                        <td>Professor, TIMSCDR</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="rc-sidebar">
              <div className="rc-sidebar-card fade-in">
                <h3 className="rc-sidebar-title">Research Projects</h3>
                <ul className="rc-sidebar-list">
                  <li><a href="#">International Conference – ICAIM Award Winners</a></li>
                  <li className="rc-submenu">
                    <a href="#">Faculty Research Work / Publications</a>
                    <ul className="rc-submenu-list">
                      <li><a href="#">A.Y. 2024-25</a></li>
                      <li><a href="#">A.Y. 2023-24</a></li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="rc-sidebar-card fade-in">
                <h3 className="rc-sidebar-title">Journals</h3>
                <ul className="rc-sidebar-list">
                  {['2024-25','2023-24','2022-23','2021-22'].map((yr,i)=>(
                    <li key={i}><a href="#">A.Y. {yr}</a></li>
                  ))}
                </ul>
              </div>

              <div className="rc-sidebar-card fade-in">
                <h3 className="rc-sidebar-title">Conferences</h3>
                <ul className="rc-sidebar-list">
                  {['2024-25','2023-24','2022-23','2021-22'].map((yr,i)=>(
                    <li key={i}><a href="#">A.Y. {yr}</a></li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
