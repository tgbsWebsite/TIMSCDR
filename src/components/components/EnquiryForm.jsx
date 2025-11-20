import React, { useState } from "react";
import "./EnquiryForm.css"; // Make sure this includes the sliding styles

function BrochureForm({ setShowForm }) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://tgbsmumbai.in/api/brochure-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const link = document.createElement("a");
      link.href = "../pdf/TGBS Brochure A.Y.25-27.pdf";
      link.download = "TGBS Brochure A.Y.25-27.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setShowForm(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleOverlayClick = (e) => {
    // Close only when clicking outside the form
    if (e.target.classList.contains("popup-overlay")) {
      setShowForm(false);
    }
  };

  return (
    <div className="popup-overlay" onClick={handleOverlayClick}>
      <div className="popup-form" onClick={(e) => e.stopPropagation()}>
        <h3>Fill out the form</h3>
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

          <select
            name="course"
            required
            onChange={handleChange}
            defaultValue=""
          >
            <option value="" disabled selected>
              Select State
            </option>
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
            <option value="Andaman and Nicobar Islands">
              Andaman and Nicobar Islands
            </option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Dadra and Nagar Haveli and Daman and Diu">
              Dadra and Nagar Haveli and Daman and Diu
            </option>
            <option value="Delhi">Delhi</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Ladakh">Ladakh</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Puducherry">Puducherry</option>
          </select>

          <input
            type="text"
            name="city"
            placeholder="City"
            required
            onChange={handleChange}
          />

          <select
            name="course"
            required
            onChange={handleChange}
            defaultValue=""
          >
            <option value="" disabled>
              Select Course Interested In
            </option>
            <option value="MCA">MCA</option>
            <option value="MCA for Working Professional">
              MCA for Working Professional
            </option>
            <option value="MCA Integrated">MCA Integrated</option>
            <option value="Ph.D. in Computer Application">
              Ph.D. in Computer Application
            </option>
          </select>

          <select
            name="course"
            required
            onChange={handleChange}
            defaultValue=""
          >
            <option value="" disabled>
              Select Work Experience
            </option>
            <option value="Fresher">Fresher</option>
            <option value="MBA">1-2 Years</option>
            <option value="PGDM">3+ Years</option>
          </select>
          <div className="button-group">
            <button type="submit">Submit</button>
            <button type="button" onClick={() => setShowForm(false)}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BrochureForm;
