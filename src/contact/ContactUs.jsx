import React from "react";
import "./ContactPage.css"; // Import external CSS

const ReachOutForm = () => {
  return (
    <>
      <h1 className="heading">CONTACT US</h1>
      <div className="container">
        <form className="form">
          {/* Name Field */}
          <div className="form-group">
            <label htmlFor="name" className="label">
              Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              className="input"
              placeholder="Your Name"
            />
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email" className="label">
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="input"
              placeholder="Your Email"
            />
          </div>

          {/* Phone No. Field */}
          <div className="form-group">
            <label className="label">Phone No.</label>
            <div className="phone-flex">
              <div className="select-container">
                <label htmlFor="country-code" className="sub-label">
                  Country Code
                </label>
                <select id="country-code" className="select">
                  <option>+91 India</option>
                  <option>+1 USA</option>
                  <option>+44 UK</option>
                </select>
              </div>
              <div className="input-container">
                <input
                  type="tel"
                  id="phone"
                  className="input"
                  placeholder="Phone No."
                />
              </div>
            </div>
          </div>

          {/* Message Field */}
          <div className="form-group">
            <label htmlFor="message" className="label">
              Your Message <span className="required">*</span>
            </label>
            <input
              type="text"
              id="message"
              className="input"
              placeholder="Your Message"
            />
          </div>

          {/* Submit Button */}
          <div className="form-actions">
            <button type="submit" className="btn">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ReachOutForm;
