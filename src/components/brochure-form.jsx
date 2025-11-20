import React, { useState } from "react";
import "./brochure-form1.css";

// API URL configuration with environment variable support
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

function BrochureForm1({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      // Save data to database first
      const response = await fetch(`${API_URL}/brochure-data`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });


      if (response.ok) {
        setMessage("Data saved successfully!");

        // Then trigger PDF download
        const link = document.createElement("a");
        link.href = "../pdf/TGBS Brochure A.Y.25-27.pdf";
        link.download = "TGBS Brochure A.Y.25-27.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Reset form and close modal
        setFormData({ name: "", email: "", phone: "" });
        setTimeout(() => onClose(), 1500);
      } else {
        const errorData = await response.json();
        setMessage(errorData.error || "Failed to save data");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("Network error occurred");
    }

    setIsSubmitting(false);
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
