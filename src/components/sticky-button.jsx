import React, { useState, useEffect } from "react";
import "./cta-button.css";
import PhoneImg from "../assets/phone2.webp";
import EmailImg from "../assets/gmail.png";
import WhatsappImg from "../assets/whatsapp.png";
import LinkedInImg from "../assets/linkedin.png";
import InstagramImg from "../assets/instagram.png";
import BrochureForm from "./EnquiryForm";

// import BrochureForm from "./brochure-form";

const CTAButtons = () => {
  const [openButton, setOpenButton] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Function to handle button click in mobile mode
  const handleClick = (link) => {
    if (isMobile) {
      window.open(link, "_blank"); // Open in a new tab on mobile
    } else {
      window.location.href = link; // Open link normally on desktop
    }
  };

  return (
    <div>
      {/* Static buttons for mobile mode */}
      {isMobile && (
        <div className="mobile-static-buttons">
          <button
            className="cta-static-button"
            onClick={() => setShowForm(true)}
          >
            Download Brochure
          </button>
        </div>
      )}

      {showForm && <BrochureForm setShowForm={setShowForm} />}

      <div className="cta-container">
        <div
          className={`cta-button apply ${
            !isMobile && openButton === "apply" ? "open" : ""
          }`}
          onMouseEnter={() => !isMobile && setOpenButton("apply")}
          onMouseLeave={() => !isMobile && setOpenButton(null)}
          onClick={() => setShowForm(true)
}
        >
          <span className="icon">📝</span>
          <span className="text">Enquire Now</span>
        </div>
        <div
          className={`cta-button phone  ${
            !isMobile && openButton === "phone" ? "open" : ""
          }`}
          onMouseEnter={() => !isMobile && setOpenButton("phone")}
          onMouseLeave={() => !isMobile && setOpenButton(null)}
          onClick={() => handleClick("tel:+919920214191")}
        >
          <span className="icon">
            <img src={PhoneImg} alt="Phone - TIMSCDR" />
          </span>
          <span className="text">Call Us</span>
        </div>

        <div
          className={`cta-button email  ${
            !isMobile && openButton === "email" ? "open" : ""
          }`}
          onMouseEnter={() => !isMobile && setOpenButton("email")}
          onMouseLeave={() => !isMobile && setOpenButton(null)}
          onClick={() => handleClick("mailto:timscdr@thakureducation.org")}
        >
          <span className="icon">
            <img src={EmailImg} alt="Email - TIMSCDR" />
          </span>
          <span className="text">Email Us</span>
        </div>

        <div
          className={`cta-button whatsapp ${
            !isMobile && openButton === "whatsapp" ? "open" : ""
          }`}
          onMouseEnter={() => !isMobile && setOpenButton("whatsapp")}
          onMouseLeave={() => !isMobile && setOpenButton(null)}
          onClick={() => handleClick("https://wa.me/919324855822")}
        >
          <span className="icon">
            <img src={WhatsappImg} alt="Whatsapp - TIMSCDR" />
          </span>
          <span className="text">Whatsapp Chat</span>
        </div>

        <div
          className={`cta-button linkedin ${
            !isMobile && openButton === "linkedin" ? "open" : ""
          }`}
          onMouseEnter={() => !isMobile && setOpenButton("linkedin")}
          onMouseLeave={() => !isMobile && setOpenButton(null)}
          onClick={() =>
            handleClick(
              "https://www.linkedin.com/school/thakurinstituteofmanagementstudiescareerdevelopmentandresearch/posts/?feedView=all"
            )
          }
        >
          <span className="icon">
            <img src={LinkedInImg} alt="LinkedIn - TIMSCDR" />
          </span>
          <span className="text">LinkedIn</span>
        </div>

        <div
          className={`cta-button instagram ${
            !isMobile && openButton === "instagram" ? "open" : ""
          }`}
          onMouseEnter={() => !isMobile && setOpenButton("instagram")}
          onMouseLeave={() => !isMobile && setOpenButton(null)}
          onClick={() =>
            handleClick("https://www.instagram.com/timscdr.official")
          }
        >
          <span className="icon">
            <img src={InstagramImg} alt="Instagram - TIMSCDR" />
          </span>
          <span className="text">Instagram</span>
        </div>
      </div>
    </div>
  );
};

export default CTAButtons;
