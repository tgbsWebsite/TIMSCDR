import React, { useEffect, useState } from "react";
import "./navbar.css";
import BrochureForm from "./EnquiryForm";
import BrochureForm1 from "./brochure-form";
import { useLocation } from "react-router-dom"; // v6 hook
import FlipperPair from "./Flipper";





function Navbar() {
   const location = useLocation();
  const isHome = location.pathname === "/"; // show flipper only on home
  const [menuOpen, setMenuOpen] = useState(false);
    const [openMobileItem, setOpenMobileItem] = useState(null);
    const [openSubmenu, setOpenSubmenu] = useState({});
      const [showForm, setShowForm] = useState(false);
      const [showModal, setShowModal] = useState(false);
  
      const handleDownloadClick = () => setShowModal(true);
        const handleCloseModal = () => setShowModal(false);
          const handleEnquireClick = () => {
      setShowForm(true);
    };
  
  
    // Example logo sources. Replace with actual.
    const logoSrc = "/logo.svg";
    const menuIcon = "/icons/menu.svg";
    const closeIcon = "/icons/close.svg";
    const chevronIcon = "/icons/chevron-down.svg";
  
    // Helper: render label + chevron image if label ends with ">>"
    const WithChevron = ({ label }) => {
      const isString = typeof label === "string";
      const hasArrow = isString && /\s*>>\s*$/.test(label);
      const text = isString ? label.replace(/\s*>>\s*$/, "") : label;
  
      return (
        <span style={{ display: "flex", alignItems: "center" }}>
          <span>{text}</span>
          {hasArrow ? (
            <img
              src="/images/icons/arrow_8978139.svg"
              alt=""
              width={14}
              height={14}
              style={{ marginLeft: "auto", opacity: 0.85 }}
            />
          ) : null}
        </span>
      );
    };
  
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
  

  // Dropdown content
  const dropdownContent = {
    Home: [],
    About: [
      { name: "Vision & Mission", link: "/about/Vision-Mission" },
      { name: "PEOs & POs", link: "/peo-Page" },
      { name: "Educational Organization Policies", link: "/about/Education-Policies" },
      {
        name: "Messages >>",
        link: "",
        submenu: [
          { name: "Chairman's Message", link: "/about/chairman-message" },
          { name: "CEO's Message", link: "/about/ceo-message" },
          { name: "Director's Message", link: "/about/director-message" },
        ],
      },
      {
        name: "Governance >>",
        link: "",
        submenu: [
          { name: "Governing Council", link: "/about/governing-council" },
          { name: "Advisory Board", link: "/about/advisory" },
          { name: "Academic Council", link: "/about/academic-council" },
          { name: "College Development Committee", link: "/about/development-committee" },],
      },




      // { name: "IQAC Committee", link: "/about/iqac-committee" },
      { name: " Cells And Committees", link: "/about/cells-and-committees" },
      { name: "Organogram", link: "/pdf/about/TIMSCDR-Organization-Chart-Final-1" },
      { name: "Our Policies", link: "/policies" },

    ],
    Programs: [
      { name: "Master Of Computer Applications (MCA)", link: "/programs/mca-program" },
      { name: "MCA For Working Professionals", link: "/programs/mca-working-professionals" },
      { name: "Integrated MCA", link: "/programs/integrated-mca" },
      { name: "Ph. D.(Technology)", link: "/programs/ph-d-admission" },
    ],
    Admissions: [
      { name: "Admission Process", link: "/admission-process" },
      { name: "Seat Distribution", link: "/seat-distribution" },
      // { name: "Fees Structure", link: "/fees-structure" },
      { name: "AICTE Approval", link: "/aicte-approval-2" },
      { name: "Admission Notification", link: "/admission-notification" },

      { name: "Student Handbook", link: "/student-handbook" },
      { name: "Code Of Conduct For Students", link: "/code-of-conduct" },
      { name: "Student Mentoring Program", link: "/student-mentoring-program" },
      { name: "Anti Ragging", link: "/anti-ragging" },
      { name: "Candidate Selected Against CAP Vacancy", link: "/code-of-conduct-for-students" },
      { name: "Student Grievance Redressal", link: "/contact/student-grievance-redressal" },
    ],
    Academics: [
      // { name: "Faculty List", link: "/faculty-list-2" },
      { name: "Meet Our Faculty", link: "/staff" },
      { name: "Non Teaching Staff", link: "/non-teaching-staff" },
      // { name: "ERP Login", link: "/results" },
      { name: "Academic Calendar", link: "/student-downloads" },
      { name: "Academic Depository (NAD)", link: "https://timscdrmumbai.in/wp-content/uploads/2022/05/NDML-Academic-Depository-NAD.pdf" },
    ],
    Facilities: [
      { name: "Infrastructure", link: "/facilities/infrastructure" },
      // { name: "Infrastructure Gallery", link: "/facilities/infrastructure-gallery" },
      { name: "DRC", link: "/facilities/disability-resource-center" },
      {
        name: "Learning Resource Center (Library) >>",
        link: null,
        submenu: [
          { name: "About Library", link: "/about-library" },
          { name: "Infrastructure and Facilities", link: "/infrastructure-and-facilities" },
          { name: "TIMSCDR Library Holding", link: "/timscdr-library-holding" },
          { name: "Library Timing and Rules", link: "/library-timing-and-rules" },
          { name: "Library Committee", link: "/library-committee" },
          { name: "Virtual Reading Resource", link: "/virtual-reading-resources" },
        ],
      },
    ],
    "R&D": [
      { name: "Research Cell", link: "/research-cell" },
      { name: "Institution Innovation Council (IIC)", link: "/institution-innovation-council-iic" },
      {
        name: "International Conference >>",
        link: null,
        submenu: [
          { name: "International Conference (ICAIM) 2025", link: "/icaim-2025" },
          { name: "International Conference (ICAIM) 2024", link: "/facilities/digital-resources" },
          { name: "International Conference (ICAIM) 2023", link: "/facilities/library-timings" },
          { name: "International Conference (ICAIM) 2022", link: "/facilities/library-timings" },
          { name: "International Conference (ICAIM) 2021", link: "/facilities/library-timings" },
          { name: "International Conference (ICAIM) 2020", link: "/facilities/library-timings" },
          { name: "International Conference (ICAIM) 2019", link: "/facilities/library-timings" },
          { name: "International Conference (ICAIM) 2018", link: "/facilities/library-timings" },
          { name: "International Conference (ICAIM) 2017", link: "/facilities/library-timings" },
          { name: "International Conference (ICAIM) 2016", link: "/facilities/library-timings" },
          { name: "International Conference (ICAIM) 2015", link: "/facilities/library-timings" },
        ],
      },
      { name: "Institution Innovation Council (IIC)", link: "/institution-innovation-council-iic" },
      { name: "IPR", link: "/research/collaborations" },
      {
        name: "Research Publications >>",
        link: null,
        submenu: [
          { name: "Faculty Publications", link: "/icaim-2025" },
          { name: "Student Publications", link: "/facilities/digital-resources" },
          { name: "TechTonics", link: "/research/TechTonics" },
        ],
      },
      {
        name: "Consultancy >>",
        link: null,
        submenu: [
          { name: "Consultancy / Research Projects", link: "/research/consultancy" },
          { name: "Doctor Booklet", link: "/life/doctors-booklet" },
        ],
      },

      { name: "RITL Excellence Lab", link: "/research/iot-excellence" },
    ],
    Placements: [
      { name: "About Placement", link: "/best-mca-college-in-mumbai-for-placements-about-placement" },
      { name: "Training Programme", link: "/training-programme" },
      { name: "Placement Data", link: "/placement-data" },
      { name: "Training And Placement Policy", link: "https://timscdrmumbai.in/wp-content/uploads/2022/10/Placement-Policy.pdf" },
    ],


    IQAC: [
      { name: "IQAC Guidelines", link: "" },
      { name: "IQAC Committee", link: "https://timscdrmumbai.in/wp-content/uploads/2022/09/Institutional-Information-for-Quality-AssessmentIIQA.pdf" },
      {
        name: "IQAC Committee >>",
        link: null,
        submenu: [
          { name: "IQAC MoM", link: "/" },
        ],
      },
      {
        name: "NAAC >>",
        link: null,
        submenu: [
          { name: "NAAC Certificate", link: "https://timscdrmumbai.in/wp-content/uploads/2023/01/NAAC-Certificate.pdf" },
          { name: "NAAC-IIQA", link: "https://timscdrmumbai.in/wp-content/uploads/2022/09/Institutional-Information-for-Quality-AssessmentIIQA.pdf" },
          { name: "NAAC-SSR", link: "https://timscdrmumbai.in/wp-content/uploads/2022/09/SELF-STUDY-REPORT-SSR.pdf" },
          { name: "NAAC AQAR", link: "/naac-aqar" },


        ],
      },

    ],
    Examination: [
      { name: "Notice", link: "/notice" },
      {
        name: "Result >>",
        link: "",
        submenu: [
          { name: "University Gazette", link: "/examination/university-gazette" },
          { name: "Result Analysis", link: "/examination/result-analysis" },
        ],
      },
      { name: "Convocation ", link: "/examination/convocation" },
    ],

    Faculty: [
      { name: "Faculty Development Program", link: "/faculty-development-programs" },
      { name: "Short Term Training Programme", link: "/short-term-training-programme" },
      { name: "Achievements & Recognitions", link: "/" },
      { name: "Employee Handbook", link: "/" },
    
    ],
    "Life@TIMSCDR": [
      {
        name: "Development Program >>",
        link: "/life/activities",
        submenu: [


          { name: "Parent Interaction Programme", link: "/parent-interaction-programme" },
          { name: "Guest Lecture", link: "/guest-lecture-sdp-pre-placement-training" },
          { name: "SDP – Workshops & Certifications", link: "/student-development-program" },
          { name: "Pre Placement Training", link: "/pre-placement-training" },
        ],
      },
      {
        name: "Professional Bodies >>",
        link: null,
        submenu: [
          { name: "CSI-TIMSCDR", link: "/csi-timscdr" },
          { name: "IEEE-TIMSCDR", link: "/ieee-timscdr" },
          { name: "D-Link Academy Lab", link: "/d-link-academy-lab" },
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
          { name: "Trekking", link: "/life/trekking" },
          { name: "Health & Hygiene", link: "/life/health-hygiene" },
          { name: "Clean India Campaign", link: "/life/clean-india-campaign" },
          { name: "Social Events", link: "/life/socialevents" },
          { name: "Hackathon", link: "/life/hackathon" },
        ],
      },
     
      {
        name: "Publications >>",
        link: "",
        submenu: [
          { name: "Magazine-Eminence", link: "/life/magazine-eminence" },
          { name: "News Letter", link: "/life/newsletter" },

        ],
      },
      { name: "Yuvostav", link: "/life/yuvostav" },
      {
        name: "Recreational Programs >>",
        link: "",
        submenu: [
          { name: "Sports Day", link: "/life/sportsday" },
          { name: "Freshers and Farewell", link: "/life/fresher-farewell" },
          { name: "Cultural Events", link: "/life/culturalday" },
        ],
      },
      { name: "Unnat Bharat Abhiyan", link: "/life/bharatabhiyan" },
      {
        name: "Womens Development Cell >>",
        link: "/life/student-council",
        submenu: [
          { name: "Women Entrepreneurs Events", link: "/life/womenentepreneurs" },
          { name: "Women Health", link: "/life/womenhealth" },
          { name: "Self Defense", link: "/life/selfdefence" },
        ],
      },
      {
        name: "TIMSCDR - Celebration Gallery",
        link: "/celebration_events",
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
        name: "Careers >>",
        link: "#",
        submenu: [
          { name: "Recruitment", link: "/contact/recruitment" },
          { name: "Employee Handbook", link: "/contact/employee-handbook" },
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
          { name: "UoM Qualification Equivalence", link: "/facilities/library-timings" },
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
               <img src="/logo.svg" alt="TIMSCDR" />
             </div>

             <div className="navButtons_uivMadflows " aria-hidden={false}>
               <div className="navBtn_enquire_uivMadflows">
                 <button onClick={handleDownloadClick} className="uivMadflows_button">Download Brochure</button>
               </div>
               <div className="navBtn_brochure_uivMadflows orange">
                 <button className="uivMadflows_button" onClick={handleEnquireClick}>Enquire Now</button>
               </div>
               {showForm && <BrochureForm setShowForm={setShowForm} />}
               {showModal && (
                 <div className="modal-overlay" onClick={handleCloseModal}>
                   <div
                     className="modal-content"
                     onClick={(e) => e.stopPropagation()} // prevent modal close when clicking inside
                   >
                     {/* <button className="close-button" onClick={handleCloseModal}>
                       &times;
                     </button> */}
                     <BrochureForm1 onClose={handleCloseModal} />
                   </div>
                 </div>
               )}
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
                     <div className="dropdown" role="menu" aria-label={`${cat} menu`}>
                       {dropdownContent[cat].map((item, idx) =>
                         item.submenu ? (
                           <div className="dropdown-item" key={`${cat}-sub-${idx}`} tabIndex={0}>
                             <a href={item.link || "#"} onClick={(e) => e.preventDefault()}>
                               <WithChevron label={item.name} />
                             </a>
                             <div className="submenu" role="menu">
                               {item.submenu.map((sub, sidx) => (
                                 <a key={`${cat}-subitem-${sidx}`} href={sub.link}>
                                   <WithChevron label={sub.name} />
                                 </a>
                               ))}
                             </div>
                           </div>
                         ) : (
                           <a key={`${cat}-item-${idx}`} href={item.link}>
                             <WithChevron label={item.name} />
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
      {/* Home-only Flipper */}
      {isHome && <FlipperPair />}

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
                     className={`mobile-dropdown-content${openMobileItem === cat ? " open" : ""
                       }`}
                   >
                     {dropdownContent[cat].map((item, idx) =>
                       item.submenu ? (
                         <div key={`submenu-${cat}-${idx}`}>
                           <button
                             className={`submenu-toggle${(openSubmenu[cat] ?? null) === idx ? " open" : ""
                               }`}
                             onClick={() =>
                               setOpenSubmenu((prev) => ({
                                 ...prev,
                                 [cat]:
                                   (prev[cat] ?? null) === idx ? null : idx,
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
                             <WithChevron label={item.name} />
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
                                   <WithChevron label={sub.name} />
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
                           <WithChevron label={item.name} />
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
