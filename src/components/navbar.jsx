import React, { useState, useEffect } from "react";
import "./navbar.css";
import BrochureForm from "./EnquiryForm";
import BrochureForm1 from "./brochure-form";

function Navbar() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleDownloadClick = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleEnquireClick = () => {
    setShowForm(true);
  };

  let timeoutId;

  const handleMouseEnter = (item) => {
    clearTimeout(timeoutId);
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setHoveredItem(null);
    }, 200);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (item) => {
    setDropdownOpen(dropdownOpen === item ? null : item);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        !event.target.closest(".mobile-menu") &&
        !event.target.closest(".menu-button")
      ) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [menuOpen]);

  const dropdownContent = {
   
    About: [
      { name: "Vission & Mission", link: "/VisionMission" },
      {
        name: "Educational Organization Policys",
        link: "/activities/guest-sessions",
      },
      { name: "Chairman's Message", link: "/activities/workshops" },
      { name: "CEO's Message", link: "/activities/tcei" },
      { name: "Director's Message", link: "/activities/samvedna" },
      { name: "Governing Council", link: "/activities/industrial-visits" },
      { name: "Advisory Board", link: "/activities/guest-lectures" },
      { name: "Academic Council", link: "/activities/events" },
      {
        name: "College Development Committee",
        link: "/activities/cells-committee",
      },
      { name: "IQAC Committee", link: "/activities/student-council" },
      { name: " Cells And Committees", link: "/activities/student-clubs" },
      { name: "Organogram", link: "/activities/student-achievements" },
      {
        name: "Our Policies >>",
        link: "/facilities/learning-resource-center",
        submenu: [
          { name: "Divyangjan Policy", link: "/facilities/library-rules" },
          {
            name: "Energy Conservation, Water Management And Waste Management Policy",
            link: "/facilities/digital-resources",
          },
          { name: "IPR Policy", link: "/facilities/library-timings" },
          { name: "NISP Policy", link: "/facilities/library-timings" },
          { name: "QIP Policy", link: "/facilities/library-timings" },
        ],
      },
    ],
    Programs: [
      {
        name: "Master Of Computer Applications (MCA)",
        link: "/post-graduate-diploma-management",
      },
      {
        name: "MCA For Working Professionals",
        link: "/post-graduate-diploma-management/business-analytics",
      },
      {
        name: "Integrated MCA",
        link: "/post-graduate-diploma-management/finance",
      },
      {
        name: "Ph. D.(Technology)",
        link: "/post-graduate-diploma-management/marketing",
      },
    ],
    // About: [
    //   { name: "About US", link: "/about-us" },
    //   { name: "Chairman's Message", link: "/about/chairman-message" },
    //   { name: "CEO's Message", link: "/about/ceo-message" },
    //   { name: "CFO's Message", link: "/about/cfo-message" },
    //   { name: "Director's Message", link: "/about/director-message" },
    //   {
    //     name: "Deputy Director's Message",
    //     link: "/about/deputy-director-message",
    //   },
    //   { name: "Advisory Board", link: "/about/advisory-board" },
    //   { name: "Governing Council", link: "/about/governing-council" },
    //   { name: "Cells & Committee", link: "/about/cells-committee" },
    // ],
    Admissions: [
      { name: "Ph.D. Admission", link: "/admission-process" },
      {
        name: "Master Of Computer Applications (MCA)",
        link: "/eligibility-criteria",
      },
      { name: "MCA Integrated", link: "/documents-required" },
      { name: "MCA Working Professional", link: "/scholarships" },
      { name: "Seat Distribution", link: "/fee-structure" },
      { name: "Fees Structure", link: "/faq" },
      { name: "Admission Notification", link: "/admission-process" },
      { name: "AICTE Approval", link: "/scholarships" },
      { name: "Student Handbook", link: "/documents-required" },
      { name: "Code Of Conduct For Students", link: "/eligibility-criteria" },
      { name: "Student Mentoring Program", link: "/admission-notification" },
      { name: "Anti Ragging", link: "/aicte-approval" },
      { name: "Admission Information", link: "/student-handbook" },
      {
        name: "Candidate Selected Against CAP Vacancy",
        link: "/code-of-conduct-for-students",
      },
    ],
    Academics: [
      { name: "Faculty List", link: "/academic-calendar" },
      { name: "Meet Our Faculty", link: "/syllabus" },
      { name: "Non Teaching Staff", link: "/examination" },
      { name: "ERP Login", link: "/results" },
      { name: "Student Downloads", link: "/research-development" },
      { name: "NDML Academic", link: "/research-publications" },
      { name: "Depository (NAD)", link: "/research-projects" },
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
        link: "/facilities/learning-resource-center",
        submenu: [
          { name: "Library Rules", link: "/facilities/library-rules" },
          { name: "Digital Resources", link: "/facilities/digital-resources" },
          { name: "Timings", link: "/facilities/library-timings" },
        ],
      },
    ],

    "R&D": [
      { name: "Research Cell", link: "/research/publications" },
      { name: "Institution Innovation Council (IIC)", link: "/research/cell" },
      {
        name: "International Conference >>",
        link: "/facilities/learning-resource-center",
        submenu: [
          {
            name: "International Conference (ICAIM) 2025",
            link: "/facilities/library-rules",
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
      { name: "TechTonics", link: "/research/publications" },
      { name: "Consultancy", link: "/research/projects" },
      { name: "IoT Excellence", link: "/research/collaborations" },
    ],

    Placements: [
      { name: "About Placement", link: "/placement/overview" },
      { name: "Training Programme", link: "/placement/training-developement" },
      { name: "Placement Data", link: "/placement-cell" },
      {
        name: "Training And Placement Policy",
        link: "/placement/placement-cell",
      },
    ],

    IQAC: [
      { name: "NAAC-IIQA", link: "/iqac/overview" },
      { name: "NAAC-SSR", link: "/iqac/meetings-reports" },
      { name: "NAAC Certificate", link: "/iqac/aqar" },
      { name: "NAAC AQAR - 2023", link: "/iqac/naac" },
      { name: "NAAC AQAR - 2024", link: "/iqac/committee" },
    ],

    Examination: [
      { name: "Notice", link: "/iqac/overview" },
      { name: "Result", link: "/iqac/meetings-reports" },
      {
        name: "Convocation >>",
        link: "/facilities/learning-resource-center",
        submenu: [
          { name: "University Gazette", link: "/facilities/library-rules" },
          {
            name: "Result Analysis",
            link: "/facilities/digital-resources",
          },
        ],
      },
    ],

    Life: [
      {
        name: "Development Program >>",
        link: "/life/activities",
        submenu: [
          {
            name: "Faculty Development Program",
            link: "/facilities/learning-resource-center",
          },
          {
            name: "Short Term Training Programme",
            link: "/facilities/library-rules",
          },
          {
            name: "Parent Interaction Programme",
            link: "/facilities/digital-resources",
          },
          {
            name: "Guest Lecture",
            link: "/facilities/library-timings",
          },
          {
            name: "Pre Placement Training",
            link: "/facilities/library-timings",
          },
        ],
      },

      {
        name: "Professional Bodies >>",
        link: "/life/cultural-events",
        submenu: [
          { name: "University Gazette", link: "/facilities/library-rules" },
          {
            name: "Result Analysis",
            link: "/facilities/digital-resources",
          },
        ],
      },
      {
        name: "Students Activity >>",
        link: "/life/clubs",
        submenu: [
          { name: "University Gazette", link: "/facilities/library-rules" },
          {
            name: "CSI-TIMSCDR",
            link: "/facilities/digital-resources",
          },
          {
            name: "IEEE-TIMSCDR",
            link: "/facilities/library-timings",
          },
          {
            name: "D-Link Academy Lab",
            link: "/facilities/library-timings",
          },
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
        link: "/life/student-clubs",
        submenu: [
          { name: "Magazine-Eminence", link: "/facilities/library-rules" },
          {
            name: "News Letter",
            link: "/facilities/digital-resources",
          },
          {
            name: "Doctor Booklet",
            link: "/facilities/library-timings",
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
      { name: "Student Grievance Redressal", link: "/contact/location" },
      {
        name: "Careers >>",
        link: "/contact/inquiry",
        submenu: [
          { name: "Recruitment", link: "/facilities/library-rules" },
          {
            name: "Employee Handbook",
            link: "/facilities/digital-resources",
          },
          {
            name: "AICTE-Faculty Position Qualification And Experience Eligibility",
            link: "/facilities/library-timings",
          },
          {
            name: "UoM-Faculty Position Qualification And Experience Eligibility CONCOL/ICC/04 Of 2012]",
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

  return (
    <div className="main-container-navbar">
      <div className="navbar-wrapper">
        {/* Top section: Logo + Buttons */}
        <div className="navbar-top">
          {/* Logo */}
          <div className="nav-logo">
            <a href="/">
              <img
                className="logo"
                src="/images/logo.svg"
                alt="Thakur Institute of Management Studies, Career Development & Research logo"
              />
            </a>
          </div>
          <div className="nav-buttons-container">
            <div className="nav-button2">
              <button onClick={handleDownloadClick}>Download Brochure</button>
            </div>
            <div className="nav-button1">
              <button onClick={handleEnquireClick}>Enquire Now</button>
            </div>
            {showForm && <BrochureForm setShowForm={setShowForm} />}
            {showModal && (
              <div className="modal-overlay" onClick={handleCloseModal}>
                <div
                  className="modal-content"
                  onClick={(e) => e.stopPropagation()} // prevent modal close when clicking inside
                >
                  <button className="close-button" onClick={handleCloseModal}>
                    &times;
                  </button>
                  <BrochureForm1 onClose={handleCloseModal} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Desktop Navigation */}
      <div className="nav-links-container">
        <div className="nav-links">
          {/* <div className='nav-dropdown'><a href="/activities/events" className='nav-link'>Events</a></div> */}
          <div className="nav-dropdown">
            <a
              href="/"
              className="nav-link"
              style={{ fontSize: "15px" }}
            >
              Home
            </a>
          </div>
          {dropdownContent["About"] && (
            <div
              className="nav-dropdown"
              onMouseEnter={() => handleMouseEnter("About")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="nav-link">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "15px",
                  }}
                >
                  About Us
                </div>
              </a>

              {hoveredItem === "About" && (
                <div className="dropdown">
                  {dropdownContent["About"].map((option, index) => (
                    <div key={index} className="dropdown-item">
                      <a href={option.link}>{option.name}</a>

                      {option.submenu && (
                        <div className="submenu">
                          {option.submenu.map((sub, subIndex) => (
                            <a key={subIndex} href={sub.link}>
                              {sub.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          {dropdownContent["Programs"] && (
            <div
              className="nav-dropdown"
              onMouseEnter={() => handleMouseEnter("Programs")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="nav-link">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "15px",
                  }}
                >
                  Program
                </div>
              </a>
              {hoveredItem === "Programs" && (
                <div className="dropdown">
                  {dropdownContent["Programs"].map((option, index) => (
                    <a key={index} href={option.link}>
                      {option.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}
          {dropdownContent["Admissions"] && (
            <div
              className="nav-dropdown"
              onMouseEnter={() => handleMouseEnter("Admissions")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="nav-link">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "15px",
                  }}
                >
                  Admissions
                </div>
              </a>
              {hoveredItem === "Admissions" && (
                <div className="dropdown">
                  {dropdownContent["Admissions"].map((option, index) => (
                    <a key={index} href={option.link}>
                      {option.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* <div className='nav-dropdown'><a href="/internationalisation" className='nav-link'>Internationalisation</a></div> 
                    <div className='nav-dropdown'><a href="/career" className='nav-link'>Career</a></div>
                    <div className='nav-dropdown'><a href="/blog" className='nav-link'>Blogs</a></div>
                    <div className='nav-dropdown'><a href="/contact-us" className='nav-link'>Contact Us</a></div> */}
          {dropdownContent["Academics"] && (
            <div
              className="nav-dropdown"
              onMouseEnter={() => handleMouseEnter("Academics")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="nav-link">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "15px",
                  }}
                >
                  Academics
                </div>
              </a>
              {hoveredItem === "Academics" && (
                <div className="dropdown">
                  {dropdownContent["Academics"].map((option, index) => (
                    <a key={index} href={option.link}>
                      {option.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}
          {dropdownContent["Facilities"] && (
            <div
              className="nav-dropdown"
              onMouseEnter={() => handleMouseEnter("Facilities")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="nav-link">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "15px",
                  }}
                >
                  Facilities
                </div>
              </a>

              {hoveredItem === "Facilities" && (
                <div className="dropdown">
                  {dropdownContent["Facilities"].map((option, index) => (
                    <div key={index} className="dropdown-item">
                      <a href={option.link}>{option.name}</a>

                      {option.submenu && (
                        <div className="submenu">
                          {option.submenu.map((sub, subIndex) => (
                            <a key={subIndex} href={sub.link}>
                              {sub.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {dropdownContent["R&D"] && (
            <div
              className="nav-dropdown"
              onMouseEnter={() => handleMouseEnter("R&D")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="nav-link">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "15px",
                  }}
                >
                  R & D
                </div>
              </a>

              {hoveredItem === "R&D" && (
                <div className="dropdown">
                  {dropdownContent["R&D"].map((option, index) => (
                    <div key={index} className="dropdown-item">
                      <a href={option.link}>{option.name}</a>

                      {option.submenu && (
                        <div className="submenu">
                          {option.submenu.map((sub, subIndex) => (
                            <a key={subIndex} href={sub.link}>
                              {sub.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          {dropdownContent["Placements"] && (
            <div
              className="nav-dropdown"
              onMouseEnter={() => handleMouseEnter("Placements")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="nav-link">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "15px",
                  }}
                >
                  Placements
                </div>
              </a>
              {hoveredItem === "Placements" && (
                <div className="dropdown">
                  {dropdownContent["Placements"].map((option, index) => (
                    <a key={index} href={option.link}>
                      {option.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}

          {dropdownContent["IQAC"] && (
            <div
              className="nav-dropdown"
              onMouseEnter={() => handleMouseEnter("IQAC")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="nav-link">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "15px",
                  }}
                >
                  IQAC
                  {/* <img src='/images/icons/open.webp' style={{ width: "15px", height: "15px" }} alt='Open TGBS'/> */}
                </div>
              </a>
              {hoveredItem === "IQAC" && (
                <div className="dropdown">
                  {dropdownContent["IQAC"].map((option, index) => (
                    <a key={index} href={option.link}>
                      {option.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}

          {dropdownContent["Examination"] && (
            <div
              className="nav-dropdown"
              onMouseEnter={() => handleMouseEnter("Examination")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="nav-link">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "15px",
                  }}
                >
                  Examination
                </div>
              </a>

              {hoveredItem === "Examination" && (
                <div className="dropdown">
                  {dropdownContent["Examination"].map((option, index) => (
                    <div key={index} className="dropdown-item">
                      <a href={option.link}>{option.name}</a>

                      {option.submenu && (
                        <div className="submenu">
                          {option.submenu.map((sub, subIndex) => (
                            <a key={subIndex} href={sub.link}>
                              {sub.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {dropdownContent["Life"] && (
            <div
              className="nav-dropdown"
              onMouseEnter={() => handleMouseEnter("Life")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="nav-link">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "15px",
                  }}
                >
                  Life
                </div>
              </a>

              {hoveredItem === "Life" && (
                <div className="dropdown">
                  {dropdownContent["Life"].map((option, index) => (
                    <div key={index} className="dropdown-item">
                      <a href={option.link}>{option.name}</a>

                      {option.submenu && (
                        <div className="submenu">
                          {option.submenu.map((sub, subIndex) => (
                            <a key={subIndex} href={sub.link}>
                              {sub.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {dropdownContent["Alumni"] && (
            <div
              className="nav-dropdown"
              onMouseEnter={() => handleMouseEnter("Alumni")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="nav-link">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "15px",
                  }}
                >
                  Alumni
                  {/* <img src='/images/icons/open.webp' style={{ width: "15px", height: "15px" }} alt='Open TGBS'/> */}
                </div>
              </a>
              {hoveredItem === "Alumni" && (
                <div className="dropdown">
                  {dropdownContent["Alumni"].map((option, index) => (
                    <a key={index} href={option.link}>
                      {option.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}

          {dropdownContent["Contact"] && (
            <div
              className="nav-dropdown"
              onMouseEnter={() => handleMouseEnter("Contact")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="nav-link">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "15px",
                  }}
                >
                  Examination
                </div>
              </a>

              {hoveredItem === "Contact" && (
                <div className="dropdown">
                  {dropdownContent["Contact"].map((option, index) => (
                    <div key={index} className="dropdown-item">
                      <a href={option.link}>{option.name}</a>

                      {option.submenu && (
                        <div className="submenu">
                          {option.submenu.map((sub, subIndex) => (
                            <a key={subIndex} href={sub.link}>
                              {sub.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
        <div className="nav-links">
          {/* <div className='nav-dropdown'><a href="/faq" className='nav-link'>FAQs</a></div> */}
          {/* <div className='nav-button1'><a href="https://admissions.tgbsmumbai.in/">Apply Now!</a></div> */}
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button className="menu-button" onClick={toggleMenu}>
        <img src="/images/icons/menu.webp" alt="Menu TGBS" />
      </button>

      {/* Mobile Sliding Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} id="style-1">
        {/* Mobile Menu Header with Logo & Close Button */}
        <div className="mobile-menu-header">
          <div className="menu-logo">
            <a href="/">
              <img
                src="/images/logo.webp"
                alt="Thakur Global Business School"
              />
            </a>
          </div>
          <img
            src="/images/icons/close.webp"
            className="close-button"
            onClick={toggleMenu}
            alt="Close TGBS"
          />
        </div>
        <div className="mobile-dropdown-container">
          {Object.keys(dropdownContent).map((category) => (
            <div key={category} className="mobile-dropdown">
              <div
                onClick={() => toggleDropdown(category)}
                className="menu-item"
              >
                <p>{category}</p>
                <img src="/images/icons/open.webp" alt="Open TGBS" />
              </div>
              {dropdownOpen === category && (
                <div className="mobile-dropdown-content">
                  {dropdownContent[category].map((option, index) => (
                    <a key={index} href={option.link}>
                      {option.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a href="/internationalisation" className="menu-item1">
            Internationalisation
          </a>
          <a href="/activities/events" className="menu-item1">
            Events
          </a>
          <a href="/career" className="menu-item1">
            Career
          </a>
          <a href="/faq" className="menu-item1">
            FAQs
          </a>
          <a href="/blog" className="menu-item1">
            Blogs
          </a>
          <a href="/contact" className="menu-item1">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
