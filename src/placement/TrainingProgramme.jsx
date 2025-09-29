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
                title="Training Programme"
                crumbs={[
                  { label: 'Home', href: '/' },
                  { label: 'Training Programme' }, // current page (no href)
                ]}
              />



              <p className="ap-p">
                At TIMSCDR , training programmes are conducted for the students from the 1st semester itself to make them employable and assist them in their preparation for transition from campus to corporate.

                          </p>

              <p className="ap-p">
                The Institute undertakes following programmes besides the MCA curriculum.    
              </p>

              <h3 id="project-training" className="ap-h3">Student Development Program</h3>
              <p className="ap-p">
                A comprehensive training programme is implemented through a series of workshops, guest lectures, seminars and simulation exercises for students to become ready for the ever changing corporate landscape.TIMSCDR organizes an International conference every year to provide a platform for the students, researchers and faculty to get acquainted with the current trends and practices.Extracurricular and extension activities, student managed clubs and events give them further avenues to express themselves and develop skills beyond academics.The Institute also has a very active entrepreneurship cell.              </p>

              <h3 id="final-placement" className="ap-h3">Pre-Placement Training </h3>
              <p className="ap-p">
The Institute organizes a pre-placement training focused oncorporate ethics and etiquettes and other soft skills to give students an exposure to industry work culture, ethics and etiquettes followed in the corporate sector. They are also provided training in aptitude skills, resume writing and interview skills. Mockaptitude test, group discussion and personal interviews are conducted to evaluate preparedness of the students.
              </p>

    


            </div>
          </div>


        </main>



        {/* Or use the grid below when listing individual logos */}

      </div>
      <Footer />
    </>
  );
}
