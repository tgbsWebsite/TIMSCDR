import React, { useState } from "react";
import "./brochure-form1.css";

function BrochureForm1({ onClose }) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const link = document.createElement("a");
      link.href = "../pdf/TGBS Brochure A.Y.25-27.pdf";
      link.download = "TGBS Brochure A.Y.25-27.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      onClose(); // ✅ close modal after submission
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="popup-form1">
      <div className="form-container">
        <h3>Fill out the form to download the brochure</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            onChange={handleChange}
          />
          <button type="submit">Submit & Download</button>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
}

export default BrochureForm1;
