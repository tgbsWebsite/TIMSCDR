import React, { useState } from "react";
import "./EnquiryForm.css";

// API URL configuration with environment variable support
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

function EnquiryForm({ setShowForm }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    course: "",
    work_experience: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      // New - production
     const response = await fetch(`${API_URL}/enquiry-data`, {

        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setMessage("Enquiry submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          state: "",
          city: "",
          course: "",
          work_experience: ""
        });
        setTimeout(() => setShowForm(false), 2000);
      } else {
        const errorData = await response.json();
        setMessage(errorData.error || "Failed to submit enquiry");
      }
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      setMessage("Network error occurred");
    }
    setIsSubmitting(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("popup-overlay")) {
      setShowForm(false);
    }
  };

  return (
    <div className="popup-overlay" onClick={handleOverlayClick}>
      <div className="popup-form">
        {/* <button
          type="button"
          className="close-x"
          onClick={() => setShowForm(false)}
        >
          ×
        </button> */}

        <h3>Fill out the form</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            required
            onChange={handleChange}
            value={formData.name}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            required
            onChange={handleChange}
            value={formData.email}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            required
            onChange={handleChange}
            value={formData.phone}
          />

          <select
            name="state"
            required
            onChange={handleChange}
            value={formData.state}
          >
            <option value="" disabled>Select State *</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
            <option value="Delhi">Delhi</option>
            <option value="Other">Other</option>
          </select>

          <input
            type="text"
            name="city"
            placeholder="City *"
            required
            onChange={handleChange}
            value={formData.city}
          />

          <select
            name="course"
            required
            onChange={handleChange}
            value={formData.course}
          >
            <option value="" disabled>Select Course Interested In *</option>
            <option value="PGDM">PGDM</option>
            <option value="MBA">MBA</option>
            <option value="Executive MBA">Executive MBA</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Data Analytics">Data Analytics</option>
            <option value="Financial Management">Financial Management</option>
            <option value="HR Management">HR Management</option>
            <option value="Operations Management">Operations Management</option>
            <option value="Other">Other</option>
          </select>

          <select
            name="work_experience"
            required
            onChange={handleChange}
            value={formData.work_experience}
          >
            <option value="" disabled>Select Work Experience *</option>
            <option value="Fresher">Fresher</option>
            <option value="1-2 Years">1-2 Years</option>
            <option value="3-5 Years">3-5 Years</option>
            <option value="5+ Years">5+ Years</option>
          </select>

          {message && (
            <div className={`enquiry-message ${message.includes('success') ? 'enquiry-success' : 'enquiry-error'}`}>
              {message}
            </div>
          )}
<div className="button-group">

<button
  type="submit"
  disabled={isSubmitting}
  className="enquiry-submit-btn"
>
  {isSubmitting ? "Submitting..." : "Submit Enquiry"}
</button>

<button
  type="button"
  onClick={() => setShowForm(false)}
  className="enquiry-cancel-btn"
>
  Cancel
</button>
</div>

        </form>
      </div>
    </div>
  );
}

export default EnquiryForm;