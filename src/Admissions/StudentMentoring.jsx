import React from 'react';
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import CTAButtons from "../components/sticky-button";
import PageHeader from '../about/PageHeader';

const StudentMentoringProgram = () => {
  return (
    <>
      <Navbar />
      <CTAButtons />


      <div className="smp-container">


        <div className="smp-content">
          <div className="smp-header text-center">
            <PageHeader
              title="Student Mentoring Program"
              crumbs={[
                { label: "Home", href: "/" },
                { label: "Student Mentoring Program" },
              ]}
            />
            <h1 className="smp-title"></h1>
            <div className="smp-intro">
              TIMSCDR offers a comprehensive Student Mentoring Program for students pursuing an MCA master degree. After the admission process is complete, every student is assigned a faculty mentor for the entire duration of the MCA program. These mentors interact with students regularly to assess and identify problem areas in their learning and development processes, guiding them throughout their MCA master degree journey.
            </div>
          </div>

          <div className="smp-subheader text-center">
            <h2 className="smp-subtitle">Duties &amp; Responsibilities</h2>
          </div>

          <div className="smp-cards-grid">
            <div className="smp-card">
              <h3 className="smp-card-title">Duties/ Responsibilities of Mentor</h3>
              <p className="smp-card-desc">
                The mentor has to play the role of a self designated guardian to the assigned mentees. The mentor has to create overall wellbeing of their mentees and has to make sure that any personal information shared by the mentee with them in good faith is not divulged to anyone else. They have to –
              </p>
              <ul className="smp-list">
                <li>  <span className="ycyp-check-icon">✔</span> Conduct an orientation meeting for the assigned mentees and brief them about the process of Student Mentoring Program</li>
                <li><span className="ycyp-check-icon">✔</span> Collect all required data of mentees &amp; update it regularly</li>
                <li><span className="ycyp-check-icon">✔</span> Keep track of attendance, academic performance and behavioral aspects of the mentee</li>
                <li><span className="ycyp-check-icon">✔</span> Discuss ideas about the mentee from H&amp;D, academics, examination department etc</li>
                <li><span className="ycyp-check-icon">✔</span> Help mentees resolve academic or personal issues</li>
                <li><span className="ycyp-check-icon">✔</span> Guide mentees in academic projects and research papers</li>
                <li><span className="ycyp-check-icon">✔</span> Identify mentees with specific skills and refer them to relevant committees</li>
                <li><span className="ycyp-check-icon">✔</span> Support mentees academically and emotionally</li>
                <li><span className="ycyp-check-icon">✔</span> Interact with parents about progress of their ward when needed</li>
              </ul>
            </div>

            <div className="smp-card">
              <h3 className="smp-card-title">Duties/Responsibilities of the Mentees</h3>
              <p className="smp-card-desc">
                The Student Mentoring Program cannot be effective if it is not embraced by mentees wholeheartedly. The mentees should:
              </p>
              <ul className="smp-list">
                <li><span className="ycyp-check-icon">✔</span> Provide all personal and other details required by the mentor</li>
                <li><span className="ycyp-check-icon">✔</span> Attend meetings regularly and engage in quality interaction</li>
                <li><span className="ycyp-check-icon">✔</span> Share attendance, exam, and activity details proactively</li>
                <li><span className="ycyp-check-icon">✔</span> Share confidence in the mentor and seek advice whenever required</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StudentMentoringProgram;
