import React, { useState } from "react";
import ReachOutForm from "./ContactUs";
import "./ContactPage.css";
import Navbar from "../components/navbar";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Footer from "../components/Footer";

const ContactPage = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />
      <div className="contact-container">
        {/* Left Side - Form */}
        <div className="contact-left">
          <ReachOutForm />
        </div>

        {/* Right Side - Info */}
        <div className="contact-right">
          {/* Campus Image */}
          <div className="map-container">
            <iframe
              title="Timscdr Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.746050642683!2d72.87145682511212!3d19.206291047869513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b70c257276b9%3A0x15ee980e87a0bb9f!2sTIMSCDR%20-%20Thakur%20Institute%20of%20Management%20Studies%2C%20Career%20Development%20%26%20Research!5e0!3m2!1sen!2sin!4v1754377663830!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Address */}
          <div className="info-section">
            <h2 className="info-heading">Address</h2>
            <p className="info-text">
              Thakur Institute of Management Studies, Career Development and
              Research
              <br />
              Thakur Educational Campus, Shyamnarayan Thakur Marg, Thakur
              Village, Kandivali East, Mumbai, Maharashtra 400101
            </p>
          </div>

          {/* Get in Touch */}
          <div className="info-section">
            <h2 className="info-heading">Get in Touch</h2>
            <p className="info-text">
              <strong>Office:</strong> 022 - 2884 0484 / 91 - 022 - 67308301 /
              02
            </p>
            <p className="info-text">
              <strong>Fax:</strong> 022 - 28852527
            </p>
            <p className="info-text">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:timscdr@thakureducation.org"
                className="info-link"
              >
                timscdr@thakureducation.org
              </a>
            </p>
            <p className="info-text">
              <strong>Website:</strong>{" "}
              <a
                href="https://www.timscdrmumbai.in"
                target="_blank"
                rel="noopener noreferrer"
                className="info-link"
              >
                https://www.timscdrmumbai.in
              </a>
            </p>
          </div>

          {/* Social Media */}
          <div className="info-section">
            <h2 className="info-heading">Follow Us</h2>
            <div className="socials">
              <a href="#" className="social-link">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-facebook-square fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactPage;
