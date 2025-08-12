import React, { useState } from "react";
import Navbar from "../components/navbar";
import "../components/table.css";
import CTAButtons from "../components/sticky-button";
import BrochureForm from "../components/brochure-form";
import Footer from "../components/Footer";
import "../components/governing.css";
import CommitteeTable from "../components/committee-table";

const committeeDataByYear = {
  "A.Y. 2024-25":[
  {
    section: "",
    no: 1,
    councilPosition: "Chairman",
    name: "Dr. Vinita Gaikwad",
    designation: "Director, TIMSCDR",
  },
  {
    section: "",
    no: 2,
    councilPosition: "Head of Department",
    name: "Mr. Shirshendu Maitra",
    designation: "Asst. Prof & HoD Academics, TIMSCDR",
  },
  {
    section: "",
    no: 3,
    councilPosition: "Teaching Staff",
    name: "Ms. Sonu Gupta",
    designation: "Asst. Prof & Dy. Director, TIMSCDR",
  },
  {
    section: "",
    no: 4,
    councilPosition: "",
    name: "Dr. Ashwini Renavikar",
    designation: "Professor, TIMSCDR",
  },
  {
    section: "",
    no: 5,
    councilPosition: "",
    name: "Dr. Padma Mishra",
    designation: "Associate Professor, TIMSCDR",
  },
  {
    section: "",
    no: 6,
    councilPosition: "",
    name: "Ms. Kinjal Doshi",
    designation: "Assistant Professor, TIMSCDR",
  },
  {
    section: "",
    no: 7,
    councilPosition: "Expert / Academicians",
    name: "Ms. Ritu Rungta",
    designation: "Associate Vice President, Xorient",
  },
  {
    section: "",
    no: 8,
    councilPosition: "",
    name: "Dr. Mukesh Gupta",
    designation: "Founder, Lenest",
  },
  {
    section: "",
    no: 9,
    councilPosition: "",
    name: "Dr. Sheetal Rathi",
    designation: "Professor & Dean, Dept of CS, TCET",
  },
  {
    section: "",
    no: 10,
    councilPosition: "",
    name: "Mr. Sanjay Kimbahune",
    designation: "Senior Researcher, Tata Consultancy Services Limited",
  },
  {
    section: "",
    no: 11,
    councilPosition: "University Nominee",
    name: "To be received",
    designation: "-",
  },
  {
    section: "",
    no: 12,
    councilPosition: "",
    name: "To be received",
    designation: "-",
  },
  {
    section: "",
    no: 13,
    councilPosition: "University Nominee",
    name: "To be received",
    designation: "-",
  },
  {
    section: "",
    no: 14,
    councilPosition: "Controller of Examination",
    name: "Ms. Rashmi Vipat",
    designation: "Assistant Professor, TIMSCDR",
  },
  {
    section: "",
    no: 15,
    councilPosition: "Member Secretary",
    name: "Ms. Rupali Jadhav",
    designation: "Assistant Professor, IQAC Coordinator, TIMSCDR",
  }
]

  /* ... other year's data ... */

  // Add more years and their data here
};

function AcademicCouncil() {
  const [showForm, setShowForm] = useState(false);
  const [selectedYear, setSelectedYear] = useState("A.Y. 2024-25");

  const handleYearClick = (year) => {
    setSelectedYear(year);
  };

  return (
    <div>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />
      <title>Governing Council | Leadership & Vision at TIMSCDR Mumbai</title>
      <meta
        name="description"
        content="Meet the Governing Council of TGBS Mumbai..."
      />
      <meta name="keywords" content="TGBS PGDM Programme" />
      <link rel="canonical" href="https://tgbsmumbai.in/governing-council" />

      <div className="governing-layout">
        <aside className="year-selector">
          <h3>Year</h3>
          <ul>
            {Object.keys(committeeDataByYear).map((year) => (
              <li
                key={year}
                className={year === selectedYear ? "active" : ""}
                onClick={() => handleYearClick(year)}
              >
                {year}
              </li>
            ))}
          </ul>
        </aside>

        <main className="table-area">
          <h2 className="page-title">Members of Academic Council</h2>

          <div className="tables-container">
            <h3 className="governing-title">Academic Council - {selectedYear}</h3>
            <CommitteeTable data={committeeDataByYear[selectedYear]} />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default AcademicCouncil;
