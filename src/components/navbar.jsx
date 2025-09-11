import React, { useEffect, useState } from "react";
import "./navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMobileItem, setOpenMobileItem] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState({});

  // Example logo sources. Replace with actual.
  const logoSrc = "/logo.svg";
  const menuIcon = "/icons/menu.svg";
  const closeIcon = "/icons/close.svg";
  const chevronIcon = "/icons/chevron-down.svg";

  // Lock body scroll when drawer open
  useEffect(() => {
    const original = document.body.style.overflow;
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = original || "";
    return () => (document.body.style.overflow = original || "");
  }, [menuOpen]);

  // Auto flip submenu for desktop dropdown (existing logic)
  useEffect(() => {
    const dropdownItems = document.querySelectorAll(".dropdown-item");
    const adjustDirection = (item) => {
      const submenu = item.querySelector(".submenu");
      if (!submenu) return;

      submenu.classList.remove("submenu-up", "submenu-left");

      submenu.style.display = "flex";
      submenu.style.opacity = "0";
      submenu.style.visibility = "hidden";
      submenu.style.pointerEvents = "none";

      const rect = submenu.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      submenu.style.display = "";
      submenu.style.opacity = "";
      submenu.style.visibility = "";
      submenu.style.pointerEvents = "";

      const spaceRight = viewportWidth - rect.right;
      const spaceBottom = viewportHeight - rect.bottom;

      if (spaceBottom < 0 && rect.top > rect.height) {
        submenu.classList.add("submenu-up");
      }
      if (spaceRight < 0) {
        submenu.classList.add("submenu-left");
      }
    };

    const listeners = [];

    dropdownItems.forEach((item) => {
      const listener = () => adjustDirection(item);
      item.addEventListener("mouseenter", listener);
      item.addEventListener("focusin", listener);
      listeners.push({ item, listener });
    });

    return () => {
      listeners.forEach(({ item, listener }) => {
        item.removeEventListener("mouseenter", listener);
        item.removeEventListener("focusin", listener);
      });
    };
  }, []);

  // Dropdown content structure (same as you provided)
  const dropdownContent = {
    Home: [],
    About: [
      { name: "Vision & Mission", link: "/about/Vision-Mission" },
      {
        name: "Educational Organization Policies",
        link: "/about/Education-Policies",
      },
      { name: "Chairman's Message", link: "/about/chairman-message" },
      { name: "CEO's Message", link: "/about/ceo-message" },
      { name: "Director's Message", link: "/about/director-message" },
      { name: "Governing Council", link: "/about/governing-council" },
      { name: "Advisory Board", link: "/about/advisory" },
      { name: "Academic Council", link: "/about/academic-council" },
      {
        name: "College Development Committee",
        link: "/about/development-committee",
      },
      { name: "IQAC Committee", link: "/about/iqac-committee" },
      { name: " Cells And Committees", link: "/about/cells-and-committees" },
      {
        name: "Organogram",
        link: "/pdf/about/TIMSCDR-Organization-Chart-Final-1",
      },
            {
        name: "Our Policies >>",
        link: "",
        submenu: [
          { name: "Divyangjan Policy", link: "https://timscdrmumbai.in/wp-content/uploads/2022/09/TIMSCDR-DRC-Notice.pdf" },
          {
            name: (
              <>
                Energy Conservation, <br />
                Water Management And <br /> Waste Management Policy
              </>
            ),
            link: "https://timscdrmumbai.in/wp-content/uploads/2022/09/TIMSCDR-Energy-Water-Waste-Notice.pdf",
          },
          { name: "IPR Policy", link: "https://timscdrmumbai.in/wp-content/uploads/2022/10/IPR-Policy.pdf" },
          { name: "NISP Policy", link: "https://timscdrmumbai.in/national-innovation-and-startup-policy-2019-for-students-and-faculty/" },
          { name: "QIP Policy", link: "https://www.timscdrmumbai.in/wp-content/uploads/2025/04/TIMSCDR-QIP-Policy.pdf" },
        ],
      },
    ],
    Programs: [
      {
        name: "Program Educational Objectives(PEO's)",
        link: "/peo-Page",
      },
      {
        name: "Master Of Computer Applications (MCA)",
        link: "/programs/mca-program",
      },
      {
        name: "MCA For Working Professionals",
        link: "/programs/mca-working-professionals",
      },
      {
        name: "Integrated MCA",
        link: "/programs/integrated-mca",
      },
      {
        name: "Ph. D.(Technology)",
        link: "/programs/ph-d-admission",
      },
    ], // About: [ //   { name: "About US", link: "/about-us" }, //   { name: "Chairman's Message", link: "/about/chairman-message" }, //   { name: "CEO's Message", link: "/about/ceo-message" }, //   { name: "CFO's Message", link: "/about/cfo-message" }, //   { name: "Director's Message", link: "/about/director-message" }, //   { //     name: "Deputy Director's Message", //     link: "/about/deputy-director-message", //   }, //   { name: "Advisory Board", link: "/about/advisory-board" }, //   { name: "Governing Council", link: "/about/governing-council" }, //   { name: "Cells & Committee", link: "/about/cells-committee" }, // ],
    Admissions: [
      { name: "Ph.D. Admission", link: "/programs/ph-d-admission" },
      {
        name: "Master Of Computer Applications (MCA)",
        link: "/master-of-computer-applications-mca",
      },
      { name: "MCA Integrated", link: "/imca" },
      { name: "MCA Working Professional", link: "/mca-working-professional" },
      { name: "Seat Distribution", link: "/seat-distribution" },
      { name: "Fees Structure", link: "/fees-structure" },
      { name: "Admission Notification", link: "/admission-notification" },
      { name: "AICTE Approval", link: "/aicte-approval-2" },
      { name: "Student Handbook", link: "/student-handbook" },
      { name: "Code Of Conduct For Students", link: "/eligibility-criteria" },
      { name: "Student Mentoring Program", link: "/student-mentoring-program" },
      { name: "Anti Ragging", link: "/anti-ragging" },
      { name: "Admission Information", link: "/student-handbook" },
      {
        name: "Candidate Selected Against CAP Vacancy",
        link: "/code-of-conduct-for-students",
      },
    ],
    Academics: [
      { name: "Faculty List", link: "/faculty-list-2" },
      { name: "Meet Our Faculty", link: "/staff" },
      { name: "Non Teaching Staff", link: "/non-teaching-staff" },
      { name: "ERP Login", link: "/results" },
      { name: "Student Downloads", link: "/student-downloads" },
      {
        name: "NDML Academic Depository (NAD)",
        link: "https://timscdrmumbai.in/wp-content/uploads/2022/05/NDML-Academic-Depository-NAD.pdf",
      },
    ],
    Facilities: [
      { name: "Infrastructure", link: "/facilities/infrastructure" },
      {
        name: "Infrastructure Gallery",
        link: "/facilities/infrastructure-gallery",
      },
      { name: "DRC", link: "/facilities/disability-resource-center" },
      {
        name: "Learning Resource Center (Library) >>",
        link: null,
        submenu: [
          { name: "About Library", link: "/about-library" },
          {
            name: "Infrastructure and Facilities",
            link: "/infrastructure-and-facilities",
          },
          { name: "TIMSCDR Library Holding", link: "/timscdr-library-holding" },
          {
            name: "Library Timing and Rules",
            link: "/library-timing-and-rules",
          },
          { name: "Library Committee", link: "/library-committee" },
          {
            name: "Virtual Reading Resource",
            link: "/virtual-reading-resources",
          },
        ],
      },
    ],
    "R&D": [
      { name: "Research Cell", link: "/research-cell" },
      {
        name: "Institution Innovation Council (IIC)",
        link: "/institution-innovation-council-iic",
      },
      {
        name: "International Conference >>",
        link: null,
        submenu: [
          {
            name: "International Conference (ICAIM) 2025",
            link: "/icaim-2025",
          },
          {
            name: "International Conference (ICAIM) 2024",
            link: "/facilities/digital-resources",
          },
          {
            name: "International Conference (ICAIM) 2023",
            link: "/facilities/library-timings",
          },
          {
            name: "International Conference (ICAIM) 2022",
            link: "/facilities/library-timings",
          },
          {
            name: "International Conference (ICAIM) 2021",
            link: "/facilities/library-timings",
          },
          {
            name: "International Conference (ICAIM) 2020",
            link: "/facilities/library-timings",
          },
          {
            name: "International Conference (ICAIM) 2019",
            link: "/facilities/library-timings",
          },
          {
            name: "International Conference (ICAIM) 2018",
            link: "/facilities/library-timings",
          },
          {
            name: "International Conference (ICAIM) 2017",
            link: "/facilities/library-timings",
          },
          {
            name: "International Conference (ICAIM) 2016",
            link: "/facilities/library-timings",
          },
          {
            name: "International Conference (ICAIM) 2015",
            link: "/facilities/library-timings",
          },
        ],
      },
      { name: "IPR", link: "/research/collaborations" },
      { name: "TechTonics", link: "/research/TechTonics" },
      { name: "Consultancy", link: "/research/consultancy" },
      { name: "IoT Excellence", link: "/research/iot-excellence" },
    ],
    Placements: [
      {
        name: "About Placement",
        link: "/best-mca-college-in-mumbai-for-placements-about-placement",
      },
      { name: "Training Programme", link: "/training-programme" },
      { name: "Placement Data", link: "/placement-data" },
      {
        name: "Training And Placement Policy",
        link: "https://timscdrmumbai.in/wp-content/uploads/2022/10/Placement-Policy.pdf",
      },
    ],
    IQAC: [
      {
        name: "NAAC-IIQA",
        link: "https://timscdrmumbai.in/wp-content/uploads/2022/09/Institutional-Information-for-Quality-AssessmentIIQA.pdf",
      },
      {
        name: "NAAC-SSR",
        link: "https://timscdrmumbai.in/wp-content/uploads/2022/09/SELF-STUDY-REPORT-SSR.pdf",
      },
      {
        name: "NAAC Certificate",
        link: "https://timscdrmumbai.in/wp-content/uploads/2023/01/NAAC-Certificate.pdf",
      },
      {
        name: "NAAC AQAR - 2023",
        link: "https://timscdrmumbai.in/wp-content/uploads/2024/03/AQAR-2023-Submitted-to-NAAC-December-16-2023.pdf",
      },
      {
        name: "NAAC AQAR - 2024",
        link: "https://www.timscdrmumbai.in/wp-content/uploads/2025/05/AQAR-SUBMITTED-2023-24-Dec-12-2024.pdf",
      },
    ],
    Examination: [
      { name: "Notice", link: "/notice" },
      {
        name: "Result >>",
        link: "",
        submenu: [
          {
            name: "University Gazette",
            link: "/examination/university-gazette",
          },
          {
            name: "Result Analysis",
            link: "/examination/result-analysis",
          },
        ],
      },
      {
        name: "Convocation ",
        link: "/examination/convocation",
      },
    ],
    "Life@TIMSCDR": [
      {
        name: "Development Program >>",
        link: "/life/activities",
        submenu: [
          {
            name: "Faculty Development Program",
            link: "/faculty-development-programs",
          },
          {
            name: "Short Term Training Programme",
            link: "/short-term-training-programme",
          },
          {
            name: "Parent Interaction Programme",
            link: "/parent-interaction-programme",
          },
          {
            name: "Guest Lecture",
            link: "/guest-lecture-sdp-pre-placement-training",
          },
          {
            name: "SDP – Workshops & Certifications",
            link: "/student-development-program",
          },
          {
            name: "Pre Placement Training",
            link: "/pre-placement-training",
          },
        ],
      },
      {
        name: "Professional Bodies >>",
        link: null,
        submenu: [
          { name: "CSI-TIMSCDR", link: "/csi-timscdr" },
          {
            name: "IEEE-TIMSCDR",
            link: "/ieee-timscdr",
          },
          {
            name: "D-Link Academy Lab",
            link: "/d-link-academy-lab",
          },
        ],
      },
      {
        name: "Students Activity >>",
        link: "/life/clubs",
        submenu: [
          { name: "E‑Cell Ayan", link: "/life/e-cell-ayan" },
          { name: "Industrial Visit", link: "/life/industrial-visit" },
          { name: "Synapse", link: "/life/synapse" },
          { name: "VISTA", link: "/life/vista" },
          { name: "DLLE", link: "/life/dlle" },
          { name: "Green Club", link: "/life/green-club" },
        ],
      },
      {
        name: "Events >>",
        link: "/life/facilities",
        submenu: [
          { name: "Trekking", link: "/facilities/learning-resource-center" },
          { name: "Health & Hygiene", link: "/facilities/library-rules" },
          {
            name: "Clean India Campaign",
            link: "/facilities/digital-resources",
          },
          {
            name: "Social Events",
            link: "/facilities/library-timings",
          },
          {
            name: "Hackathon",
            link: "/facilities/library-timings",
          },
        ],
      },
      { name: "Dasvidaniya", link: "/life/gallery" },
      {
        name: "Publications >>",
        link: "",
        submenu: [
          { name: "Magazine-Eminence", link: "/life/magazine-eminence" },
          {
            name: "News Letter",
            link: "/life/newsletter",
          },
          {
            name: "Doctor Booklet",
            link: "/life/doctors-booklet",
          },
        ],
      },
      {
        name: "Recreational Programs >>",
        link: "/life/student-achievements",
        submenu: [
          { name: "Sports Day", link: "/facilities/library-rules" },
          {
            name: "Freshers and Farewell",
            link: "/facilities/digital-resources",
          },
          {
            name: "Cultural Events",
            link: "/facilities/library-timings",
          },
        ],
      },
      { name: "Unnat Bharat Abhiyan", link: "/life/student-testimonials" },
      {
        name: "Womens Development Cell >>",
        link: "/life/student-council",
        submenu: [
          {
            name: "Women Entrepreneurs Events",
            link: "/facilities/library-rules",
          },
          {
            name: "Women Health",
            link: "/facilities/digital-resources",
          },
          {
            name: "Self Defense",
            link: "/facilities/digital-resources",
          },
        ],
      },
      {
        name: "TIMSCDR - Celebration >>",
        link: "/life/cells-committee",
        submenu: [
          { name: "2024-25", link: "/facilities/library-rules" },
          {
            name: "2023-24",
            link: "/facilities/digital-resources",
          },
          {
            name: "2022-23",
            link: "/facilities/library-timings",
          },
          {
            name: "2021-22",
            link: "/facilities/library-timings",
          },
          {
            name: "2020-21",
            link: "/facilities/library-timings",
          },
          {
            name: "2019-20",
            link: "/facilities/library-timings",
          },
          {
            name: "2018-19",
            link: "/facilities/library-timings",
          },
          {
            name: "2017-18",
            link: "/facilities/library-timings",
          },
          {
            name: "2016-17",
            link: "/facilities/library-timings",
          },
        ],
      },
    ],
    Alumni: [
      { name: "Alumni Portal", link: "/alumni-simulation" },
      { name: "Alumni Association", link: "/alumni-talk" },
      { name: "Alumni Interaction", link: "https://alumni.tgbsmumbai.in/" },
      { name: "Our Distinguished Alumni", link: "/alumni/testimonials" },
      { name: "Alumni Testimonials", link: "/alumni/achievements" },
    ],
    Contact: [
      { name: "Contact Us", link: "/contact" },
      {
        name: "Student Grievance Redressal",
        link: "/contact/student-grievance-redressal",
      },
      {
        name: "Careers >>",
        link: "#",
        submenu: [
          { name: "Recruitment", link: "/contact/recruitment" },
          {
            name: "Employee Handbook",
            link: "/contact/employee-handbook",
          },
          {
            name: (
              <>
                AICTE-Faculty <br /> Position Qualification <br /> And
                Experience Eligibility{" "}
              </>
            ),
            link: "/facilities/library-timings",
          },
          {
            name: (
              <>
                UoM-Faculty Position <br /> Qualification And <br /> Experience
                Eligibility <br /> CONCOL/ICC/04 Of 2012{" "}
              </>
            ),
            link: "/facilities/library-timings",
          },
          {
            name: "UoM Qualification Equivalence",
            link: "/facilities/library-timings",
          },
        ],
      },
    ],
  };

  const categories = Object.keys(dropdownContent);

  return (
    <header className="main-container-navbar" role="banner">
      <div className="navbar-wrapper">
        <div className="navbar-top">
          <div className="nav-logo">
            <img src="/Website_Assets/Asset 53@4x.webp" alt="TIMSCDR" />
          </div>
          {/* Honors strip inside navbar */}
          {/* Honors strip inside navbar */}
          {/* <div className="nav-honors">
            <div className="nav-honors__track">
              <img src="/Website_Assets/Asset 17@4x.webp" alt="NAAC A+ accreditation" />
              <img src="/Website_Assets/Asset 19@4x.webp" alt="ISO certified" />
              <img src="/Website_Assets/Asset 20@4x.webp" alt="Maharashtra State Emblem" />
              <img src="/Website_Assets/Asset 21@4x.webp" alt="AICTE approved" />
              <img src="/Website_Assets/Asset 22@4x.webp" alt="University of Mumbai" />
              <img src="/Website_Assets/Asset 23@4x.webp" alt="UGC autonomous" />
              <img src="/Website_Assets/Asset 18@4x.webp" alt="UGC autonomous" />

            </div>
          </div> */}



          <div className="nav-buttons" aria-hidden={false}>
            <div className="nav-button1 button ">
              <a href="/apply">Enquire Now</a>
            </div>
            <div className="nav-button2 button">
              <a href="/download-brochure">Download Brochure</a>
            </div>
          </div>
          <button
            className="menu-button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobileMenu"
            onClick={() => setMenuOpen((s) => !s)}
          >
            <img src={menuOpen ? closeIcon : menuIcon} alt="" />
          </button>
        </div>

        {/* Desktop Navbar */}
        <nav className="navbar-menu" aria-label="Primary">

          <ul className="nav-menu">

            {categories.map((cat) =>
              cat === "Home" ? (
                <li key="Home" tabIndex={0}>
                  <a href="/">Home</a>
                </li>
              ) : (
                <li key={cat} tabIndex={0}>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    {cat}
                  </a>
                  <div
                    className="dropdown"
                    role="menu"
                    aria-label={`${cat} menu`}
                  >
                    {dropdownContent[cat].map((item, idx) =>
                      item.submenu ? (
                        <div
                          className="dropdown-item"
                          key={`${cat}-sub-${idx}`}
                          tabIndex={0}
                        >
                          <a
                            href={item.link || "#"}
                            onClick={(e) => e.preventDefault()}
                          >
                            {item.name}
                          </a>
                          <div className="submenu" role="menu">
                            {item.submenu.map((sub, sidx) => (
                              <a key={`${cat}-subitem-${sidx}`} href={sub.link}>
                                {sub.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <a key={`${cat}-item-${idx}`} href={item.link}>
                          {item.name}
                        </a>
                      )
                    )}
                  </div>
                </li>
              )
            )}

          </ul>
        </nav>
      </div>

      {/* Mobile Navbar */}
      {/* Mobile Navbar */}
      <aside
        id="mobileMenu"
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu-header">
          <div className="menu-logo">
            <img src={logoSrc} alt="TIMSCR" />
          </div>
          <img
            className="close-button"
            src={closeIcon}
            alt="Close menu"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        <div className="mobile-dropdown-container">
          {categories.map((cat) =>
            cat === "Home" ? (
              <a
                key="Home"
                className="menu-item"
                href="/"
                onClick={() => setMenuOpen(false)}
                style={{ padding: "12px 0", fontWeight: 700, display: "block" }}
              >
                Home
              </a>
            ) : (
              <React.Fragment key={cat}>
                <button
                  className={`menu-item${openMobileItem === cat ? " open" : ""}`}
                  onClick={() =>
                    setOpenMobileItem(openMobileItem === cat ? null : cat)
                  }
                  aria-expanded={openMobileItem === cat}
                >
                  <span>{cat}</span>
                  <img className="arrow" src={chevronIcon} alt="" />
                </button>
                <div
                  className={`mobile-dropdown-content${openMobileItem === cat ? " open" : ""}`}
                >
                  {dropdownContent[cat].map((item, idx) =>
                    item.submenu ? (
                      <div key={`submenu-${cat}-${idx}`}>
                        <button
                          className={`submenu-toggle${(openSubmenu[cat] ?? null) === idx ? " open" : ""}`}
                          onClick={() =>
                            setOpenSubmenu((prev) => ({
                              ...prev,
                              [cat]: (prev[cat] ?? null) === idx ? null : idx,
                            }))
                          }
                          aria-expanded={(openSubmenu[cat] ?? null) === idx}
                          style={{
                            fontWeight: "700",
                            padding: "8px 0",
                            background: "none",
                            border: "none",
                            width: "100%",
                            textAlign: "left",
                            cursor: "pointer",
                            marginBottom: "6px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          {item.name}
                        </button>
                        {(openSubmenu[cat] ?? null) === idx && (
                          <div
                            className="mobile-dropdown-content open"
                            style={{ paddingLeft: "12px" }}
                          >
                            {item.submenu.map((sub, sidx) => (
                              <a
                                key={`subitem-${cat}-${idx}-${sidx}`}
                                href={sub.link}
                                onClick={() => setMenuOpen(false)}
                              >
                                {sub.name}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <a
                        key={`item-${cat}-${idx}`}
                        href={item.link}
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    )
                  )}
                </div>
              </React.Fragment>
            )
          )}

        </div>
      </aside>
    </header>
  );
}

export default Navbar;
