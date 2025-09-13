import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Footer from "../components/Footer";
import PageHeader from "../about/PageHeader";

export default function StudentMentoring() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });

    // Scroll effect on header


  }, []);

  const [showForm, setShowForm] = useState(false);


  return (
    <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />
    <div>
      {/* Header */}


      {/* Hero Section */}


      {/* Main Content */}
      <main className="smp-main-content">
        {/* Program Overview */}
        <div className="smp-content-card">
               <PageHeader
                    title="Student Mentoring Program"
                    crumbs={[
                      { label: 'Home', href: '/' },
                      { label: 'Student Mentoring Program' }, // current page (no href)
                    ]}
                  />
        
        
          <p className="smp-description">
            TIMSCDR offers a comprehensive Student Mentoring Program for students pursuing an MCA master degree. After the admission process is complete, every student is assigned a faculty mentor for the entire duration of the MCA program. These mentors interact with students regularly to assess and identify problem areas in their learning and development processes, guiding them throughout their MCA master degree journey.
          </p>
        </div>

        {/* Duties and Responsibilities */}
        <div className="smp-content-card">
          <h2 className="smp-section-title">Duties & Responsibilities</h2>
          <hr/>
          <div className="smp-duties-section">
            {/* Mentor Duties */}
            <div className="smp-duties-card smp-mentor-duties">
              <h3>Duties/ Responsibilities of Mentor</h3>
              <p className="smp-text">
                The mentor has to play the role of a self designated guardian to the assigned mentees. The mentor has to ensure overall wellbeing of their mentees and has to make sure that any personal information shared by the mentee with them in good faith is not divulged to anyone else. They have to –
              </p>
              <ul className="smp-duties-list">
                <li>Conduct an orientation meeting for the assigned mentees and brief them about the process of Student Mentoring Program</li>
                <li>Collect all required data of mentees & update it regularly</li>
                <li>Keep track of attendance, academic performance and behavioral aspects of the mentee</li>
                <li>Obtain data about the mentee from HoD Academics, examination department etc</li>
                <li>Help mentees resolve academic or personal issues</li>
                <li>Guide mentees in academic projects and research papers</li>
                <li>Identify mentees with specific skills and refer them to relevant committees</li>
                <li>Support mentees academically and emotionally</li>
                <li>Interact with parents about progress of their ward when needed</li>
              </ul>
            </div>

            {/* Mentee Duties */}
            <div className="smp-duties-card smp-mentee-duties">
              <h3>Duties/Responsibilities of the Mentees</h3>
              <p className="smp-text">
                The Student Mentoring Program cannot be effective if it is not embraced by mentees wholeheartedly. The mentees should –
              </p>
              <ul className="smp-duties-list">
                <li>Provide all personal and other details required by the mentor</li>
                <li>Attend meetings regularly and engage in quality interaction</li>
                <li>Share attendance, exam, and activity details proactively</li>
                <li>Have confidence in the mentor and seek advice whenever required</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
    <Footer/>
    </>
  );
}
