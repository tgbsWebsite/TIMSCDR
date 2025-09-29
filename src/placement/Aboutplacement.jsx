import React, { useEffect, useState } from "react";
import "./Placement.css";
import PageHeader from "../about/PageHeader";
import Navbar from "../components/navbar";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Footer from "../components/Footer";
import Recruiters from "../components/Recruiters";

export default function AboutPlacement() {
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    const htmlEl = document.documentElement;
    const stored = localStorage.getItem("theme");
    if (stored === "dark") htmlEl.classList.add("dark");
    else htmlEl.classList.remove("dark");
  }, []);

  const toggleTheme = () => {
    const htmlEl = document.documentElement;
    htmlEl.classList.toggle("dark");
    localStorage.setItem("theme", htmlEl.classList.contains("dark") ? "dark" : "light");
  };

  return (
    <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />
      <div className="ap-root ">
        <main className="vision-mission-container ap-container">
          <div className="ap-grid-1">
            <div className="ap-col-span-2">
              <PageHeader
                title="About Placement"
                crumbs={[
                  { label: 'Home', href: '/' },
                  { label: 'About Placement' }, // current page (no href)
                ]}
              />



              <p className="ap-p">
                TIMSCDR is renowned among MCA colleges in Mumbai with placement for its well-established, process-driven placement system. Its proactive training and placement cell, led by Prof. Sonu Gupta and Prof. Brijesh Pandey, works year-round to train students, ensuring they become valuable assets to any company they join. Major companies like Infosys, Accenture, Asian Paints, CapGemini, Oracle, etc., regularly visit our campus, providing excellent career opportunities and options after MCA.
              </p>

              <p className="ap-p">
                TIMSCDR students pursuing MCA are eligible for placement under two categories:
              </p>

              <h3 id="project-training" className="ap-h3">Project Training</h3>
              <p className="ap-p">
                The final semester, as per MCA curriculum is internship (January– May) in which the students work as full time employees and present their project work at the end of the semester.
              </p>

              <h3 id="final-placement" className="ap-h3">Final Placement</h3>
              <p className="ap-p">
                The students placed under this category join the recruiting company after completion of MCA i.e. in July.
              </p>

              <p className="ap-p">
                The Training and Placement Cell, engages the students in various technical and soft skills training activities to train them for better performance in Industry. Members of placement cell are involved in:
              </p>

              <ul className="ap-list">
                <li>Identifying and inviting potential recruiters for Project and Final Placement.</li>
                <li>Coordinating with students and recruiters for smooth conduction of recruitment and selection process.</li>
                <li>Facilitating students in Final Placement</li>
              </ul>

              <p className="ap-p">The placement process usually consists of following steps:</p>

              <ul className="ap-list">
                <li>Pre Placement Talk</li>
                <li>Aptitude Test</li>
                <li>Technical Test</li>
                <li>Personal interview</li>
              </ul>

              <p className="ap-p">
                Students become eligible for placement as per the eligibility criteria of recruiting company. Special efforts are taken to arrange for companies with no eligibility criteria also.
              </p>

              <p className="ap-p">
                Once the selection process is over, recruiters intimate selected students through Institute’s placement cell and provide necessary information and guideline for induction and placement. The above mentioned process is common for project training and for final placement.
              </p>

              <p className="ap-strong">
                The graph below indicate internship and placement statistics...
              </p>
            </div>
          </div>

          <div className="ap-mt-12">
            <div className="ap-grid-2">
              <div className="ap-card">
                <img
                  className="ap-img"
                  alt="Placement graph as of May, 2025"
                  src="https://www.timscdrmumbai.in/wp-content/uploads/2025/06/Total-Placed-Graph.jpg" />
              </div>
              <div className="ap-card">
                <img
                  className="ap-img"
                  alt="Company visited graph"
                  src="https://www.timscdrmumbai.in/wp-content/uploads/2025/06/Company-Visited-Graph.jpg" />
              </div>
              <div className="ap-card">
                <img
                  className="ap-img"
                  alt="Internship graph as of May, 2025"
                  src="https://www.timscdrmumbai.in/wp-content/uploads/2025/06/Average-Salary-Graph.jpg" />
              </div>
              <div className="ap-card">
                <img
                  className="ap-img"
                  alt="MCA batch graph"
                  src="https://www.timscdrmumbai.in/wp-content/uploads/2025/06/Internship-Graph.jpg" />
              </div>
            </div>
          </div>
        </main>



        {/* Or use the grid below when listing individual logos */}
        <Recruiters />
      </div>
      <Footer />
    </>
  );
}
