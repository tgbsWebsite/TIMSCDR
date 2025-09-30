import React, { useState } from "react";
import Navbar from "../components/navbar";
import CommitteeTable from "../components/committee-table";
import "../components/table.css";
import CTAButtons from "../components/sticky-button";
import BrochureForm from "../components/brochure-form";
import Footer from "../components/Footer";
import "../components/governing.css";
import PageHeader from "./PageHeader";

const committeeDataByYear = {
  "A.Y. 2024-25": [
    {
      section: "Management",
      no: "1",
      councilPosition: "Chairman",
      name: "Shri. V.K. Singh",
      designation: "Chairman, TEG & TET",
    },
    {
      section: "Management",
      no: "2",
      councilPosition: "Member",
      name: "Mr. Jitendra R. Singh",
      designation: "Hon. Secretary, TEG & TET",
    },
    {
      section: "Management",
      no: "3",
      councilPosition: "Member",
      name: "Mr. Karan V. Singh",
      designation: "CEO (TCET, TPOLY, TIAT, TICA)",
    },
    {
      section: "Management",
      no: "4",
      councilPosition: "Member",
      name: "Ms. Karishma Singh",
      designation: "CEO (TIMSCDR)",
    },

    {
      section: "Management",
      no: "5",
      councilPosition: "Member",
      name: "Ms. Greena Karani",
      designation: "CFO (TEG)",
    },

    {
      section: "Teachers of the College",
      no: "6",
      councilPosition: "Faculty Member	",
      name: "	Ms. Sonu Gupta",
      designation: "Asst. Prof., Dy. Director & TPO, TIMSCDR",
    },
    {
      section: "Teachers of the College",
      no: "7",
      councilPosition: "Faculty Member	",
      name: "Mr. Shirshendu Maitra",
      designation: "Asst. Prof & HoD Academics, TIMSCDR",
    },
    {
      section: "Administrative Staff of the College",
      no: "8",
      councilPosition: "Member",
      name: "Mr. Shailesh Sharma",
      designation: "Office Superintendent",
    },
    {
      section: "Educationalist or Industrialist",
      no: "9",
      councilPosition: "Member",
      name: "Dr. R. R. Sedamkar",
      designation:
        "Professor, Vice Principal, IQAC Director NAAC & HOD – Ph.D. Programs, Thakur College of Engineering and Technology",
    },
    {
      section: "State Government Nominee",
      no: "10",
      councilPosition: "Member",
      name: "To be Received",
      designation: "-",
    },
    {
      section: "Principal of College",
      no: "11",
      councilPosition: "Member Secretary",
      name: "Dr. Vinita Gaikwad",
      designation: "Director, TIMSCDR",
    },
  ],
  "A.Y. 2023-24": [
    {
      section: "",
      no: 1,
      councilPosition: "Chairman",
      name: "Mr. V. K. Singh",
      designation: "Chairman, TEG & TET",
    },
    {
      section: "",
      no: 2,
      councilPosition: "Member",
      name: "Mr. Jitendra Singh",
      designation: "Hon. Secretary, TEG & TET",
    },
    {
      section: "",
      no: 3,
      councilPosition: "Member",
      name: "Mr. Karan V. Singh",
      designation: "CEO (TCET, TIMSR, TSAP)",
    },
    {
      section: "",
      no: 4,
      councilPosition: "Member",
      name: "Ms. Karishmma V. Singh",
      designation: "CEO (TIMSCDR)",
    },
    {
      section: "",
      no: 5,
      councilPosition: "Member",
      name: "Ms. Greena Karani",
      designation: "CFO (TCET, TIMSR, TIMSCDR, TSAP)",
    },
    {
      section: "",
      no: 6,
      councilPosition: "Member",
      name: "Mr. V. N. Datta",
      designation: "Development & Quality Assurance Officer",
    },
    {
      section: "",
      no: 7,
      councilPosition: "Member",
      name: "Dr. Suresh Ukarande",
      designation:
        "Principal – KJ Somaiya Institute of Engineering and Information Technology; Dean Faculty of Science & Technology – University of Mumbai",
    },
    {
      section: "",
      no: 8,
      councilPosition: "Member",
      name: "Mr. Dilip Ganeriwal",
      designation: "Managing Director, Dess Technologies",
    },
    {
      section: "",
      no: 9,
      councilPosition: "Member – Secretary",
      name: "Dr. Vinita Gaikwad",
      designation: "Director, TIMSCDR",
    },
    {
      section: "",
      no: 10,
      councilPosition: "Member",
      name: "Ms. Sonu Gupta",
      designation: "Asst. Prof. & TPO, TIMSCDR",
    },
    {
      section: "",
      no: 11,
      councilPosition: "Member",
      name: "Mr. Shirshendu Maitra",
      designation: "Asst. Prof., HoD-Aca., TIMSCDR",
    },
    {
      section: "",
      no: 12,
      councilPosition: "Member",
      name: "Ms. Rashmi Vipat",
      designation: "Asst. Prof, Exam In-charge, TIMSCDR",
    },
    {
      section: "",
      no: 13,
      councilPosition: "Member",
      name: "Dr. Padma Mishra",
      designation: "Asst. Prof, TIMSCDR",
    },
    // Add more entries as needed
  ],

  "A.Y. 2022-23": [
    {
      section: "",
      no: 1,
      name: "Mr. V. K. Singh",
      designation: "Chairman, TEG & TET",
      councilPosition: "Chairman",
    },
    {
      section: "",
      no: 2,
      name: "Mr. Jitendra Singh",
      designation: "Hon. Secretary, TEG & TET",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 3,
      name: "Mr. Karan V. Singh",
      designation: "CEO (TCET, TIMSR, TSAP)",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 4,
      name: "Ms. Karishmma V. Singh",
      designation: "CEO (TIMSCDR)",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 5,
      name: "Ms. Rhea Pai",
      designation: "COO (TCET, TIMSR, TIMSCDR, TSAP)",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 6,
      name: "Dr. Ajeet Singh",
      designation: "Western Regional Officer",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 7,
      name: "Dr. Abhay Wagh",
      designation: "Director of Technical Education",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 8,
      name: "Dr. Suresh Ukarande",
      designation:
        "Principal – ‎K J Somaiya Institute of Engineering and Information Technology; Dean Faculty of Science & Technology – University of Mumbai",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 9,
      name: "Mr. Dilip Ganeriwal",
      designation: "Managing Director, Dess Technologies",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 10,
      name: "Dr. R. R. Sedamkar",
      designation: "Dean – Academics, TCET",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 11,
      name: "Dr. Dhananjay Kalbande",
      designation: "Prof – IT Dept, SPIT",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 12,
      name: "Dr. Vinita Gaikwad",
      designation: "Director, TIMSCDR",
      councilPosition: "Member – Secretary",
    },
    {
      section: "",
      no: 13,
      name: "Ms. Mira Gohil",
      designation: "Asst. Prof. & HoD Academics, TIMSCDR",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 14,
      name: "Ms. Sonu Gupta",
      designation: "Asst. Prof. & TPO, TIMSCDR",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 15,
      name: "Dr. Pankaj Mudholkar",
      designation: "Asst. Prof., TIMSCDR",
      councilPosition: "Member",
    },
  ],
  "A.Y. 2021-22": [
    {
      section: "",
      no: 1,
      name: "Mr. V. K. Singh",
      designation: "Chairman, TEG & TET",
      councilPosition: "Chairman",
    },
    {
      section: "",
      no: 2,
      name: "Mr. Jitendra Singh",
      designation: "Hon. Secretary, TEG & TET",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 3,
      name: "Mr. Karan V. Singh",
      designation: "CEO (TCET, TIMSR, TSAP)",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 4,
      name: "Ms. Karishmma V. Singh",
      designation: "CEO (TIMSCDR)",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 5,
      name: "Ms. Rhea Pai",
      designation: "COO (TCET, TIMSR, TIMSCDR, TSAP)",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 6,
      name: "Dr. Ajeet Singh",
      designation: "Western Regional Officer",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 7,
      name: "Dr. Abhay Wagh",
      designation: "Director of Technical Education",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 8,
      name: "Dr. Suresh Ukarande",
      designation:
        "Principal – ‎K J Somaiya Institute of Engineering and Information Technology; Dean Faculty of Science & Technology – University of Mumbai",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 9,
      name: "Mr. Dilip Ganeriwal",
      designation: "Managing Director, Dess Technologies",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 10,
      name: "Dr. R. R. Sedamkar",
      designation: "Dean – Academics, TCET",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 11,
      name: "Dr. Dhananjay Kalbande",
      designation: "Prof – IT Dept, SPIT",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 12,
      name: "Dr. Vinita Gaikwad",
      designation: "Director, TIMSCDR",
      councilPosition: "Member – Secretary",
    },
    {
      section: "",
      no: 13,
      name: "Ms. Mira Gohil",
      designation: "Asst. Prof. & HoD Academics, TIMSCDR",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 14,
      name: "Ms. Sonu Gupta",
      designation: "Asst. Prof. & TPO, TIMSCDR",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 15,
      name: "Dr. Pankaj Mudholkar",
      designation: "Asst. Prof., TIMSCDR",
      councilPosition: "Member",
    },
  ],
  "A.Y. 2020-21": [
    {
      section: "",
      no: 1,
      name: "Mr. V. K. Singh",
      designation: "Chairman, TEG & TET",
      councilPosition: "Chairman",
    },
    {
      section: "",
      no: 2,
      name: "Mr. Jitendra Singh",
      designation: "Hon. Secretary, TEG & TET",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 3,
      name: "Mr. Karan V. Singh",
      designation: "CEO (TCET, TIMSR, TSAP)",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 4,
      name: "Ms. Karishmma V. Singh",
      designation: "CEO (TIMSCDR)",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 5,
      name: "Ms. Rhea Pai",
      designation: "COO (TCET, TIMSR, TIMSCDR, TSAP)",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 6,
      name: "Dr. Ajeet Singh",
      designation: "Western Regional Officer, AICTE",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 7,
      name: "Dr. Abhay Wagh",
      designation: "Director of Technical Education",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 8,
      name: "Dr. Suresh Ukarande",
      designation:
        "Principal – ‎K J Somaiya Institute of Engineering and Information Technology; Dean Faculty of Science & Technology – University of Mumbai",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 9,
      name: "Mr. Dilip Ganeriwal",
      designation: "Managing Director, Dess Technologies",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 10,
      name: "Dr. R. R. Sedamkar",
      designation: "Dean – Academics, TCET",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 11,
      name: "Dr. Dhananjay Kalbande",
      designation: "Professor, IT, SPIT",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 12,
      name: "Dr. Vinita Gaikwad",
      designation: "Director TIMSCDR",
      councilPosition: "Member- Secretary",
    },
    {
      section: "",
      no: 13,
      name: "Ms. Sonu Gupta",
      designation: "Asst. Prof., MR, TPO, TIMSCDR",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 14,
      name: "Mr. Pankaj Mudholklar",
      designation: "Asst. Prof., TIMSCDR",
      councilPosition: "Member",
    },
  ],

  "A.Y. 2019-20": [
    {
      section: "",
      no: 1,
      name: "Mr. V. K. Singh",
      designation: "Chairman, TEG & TET",
      councilPosition: "Chairman",
    },
    {
      section: "",
      no: 2,
      name: "Mr. Jitendra Singh",
      designation: "Hon. Secretary, TEG & TET",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 3,
      name: "Mr. Karan V. Singh",
      designation: "CEO (TCET, TIMSR, TSAP)",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 4,
      name: "Ms. Karishmma V. Singh",
      designation: "CEO (TIMSCDR)",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 5,
      name: "Ms. Rhea Pai",
      designation: "COO (TCET, TIMSR, TIMSCDR, TSAP)",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 6,
      name: "Dr. Ajeet Singh",
      designation: "Western Regional Officer, AICTE",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 7,
      name: "Dr. Abhay Wagh",
      designation: "Director of Technical Education",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 8,
      name: "Dr. Rajpal Hande",
      designation: "Former Director BCUD, UoM",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 9,
      name: "Mr. Avinash Singh",
      designation: "Asst. Manager, Tata Consumer",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 10,
      name: "Dr. R. R. Sedamkar",
      designation: "Dean – Academics, TCET",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 11,
      name: "Dr. Vinita Gaikwad",
      designation: "Director TIMSCDR",
      councilPosition: "Member-Secretary",
    },
    {
      section: "",
      no: 12,
      name: "Ms. Aprajita Singh",
      designation: "Dy. Director – TIMSCDR",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 13,
      name: "Ms. Sonu Gupta",
      designation: "MR, TIMSCDR",
      councilPosition: "Member",
    },
  ],
  "A.Y. 2018-19": [
    {
      section: "",
      no: 1,
      name: "Mr. V. K. Singh",
      designation: "Chairman, TEG & TET",
      councilPosition: "Chairman",
    },
    {
      section: "",
      no: 2,
      name: "Mr. Jitendra Singh",
      designation: "Hon. Secretary, TEG & TET",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 3,
      name: "Mr. Rajesh V. Singh",
      designation: "Trustee TET, CEO (TPOLY, TIAT, TICA)",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 4,
      name: "Ms. Karishmma V. Singh",
      designation: "CEO (TIMSCDR)",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 5,
      name: "Shri Pramod Naik",
      designation: "Joint Director, Technical Education – Regional Officer",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 6,
      name: "Dr. Amit Dutta",
      designation: "RO & Deputy Director – AICTE",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 7,
      name: "Dr. S. K. Ukarande",
      designation:
        "Dean Technology, UoM and Principal – K. J. Somaiya Institute of Engineering and Information Technology",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 8,
      name: "Mr. Devarajan R.",
      designation:
        "Managing Director, Globe Op Financial Services (India) Pvt. Ltd. Mumbai",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 9,
      name: "Prin. Dr. Rajpal Hande",
      designation:
        "Principal – SVKM’s Mithibai College of Arts, Chauhan Inst. Of Sc. & Amrutben Jivanlal College of Commerce and Economics",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 10,
      name: "Dr. S. M. Ganechari",
      designation: "Principal – TPOLY, Member",
      councilPosition: "Member-Secretary-TPOLY",
    },
    {
      section: "",
      no: 11,
      name: "Dr. B. K. Mishra",
      designation: "Principal, TCET, Member",
      councilPosition: "Member-Secretary-TCET",
    },
    {
      section: "",
      no: 12,
      name: "Dr. Vinita Gaikwad",
      designation: "Director TIMSCDR, Member Secretary",
      councilPosition: "Member-Secretary-TIMSCDR",
    },
    {
      section: "",
      no: 13,
      name: "Dr. R. R. Sedamkar",
      designation: "Prof, HOD-CMPN & Dean Academic TCET",
      councilPosition: "Faculty representative – TCET",
    },
    {
      section: "",
      no: 14,
      name: "Dr. Lochan Jolly",
      designation: "Prof. Dean (SSW), TCET",
      councilPosition: "Faculty representative – TCET",
    },
    {
      section: "",
      no: 15,
      name: "Mr. Pankaj Mudholkar",
      designation: "Asst. Prof., TIMSCDR",
      councilPosition: "Faculty representative – TIMSCDR",
    },
  ],
  "A.Y. 2017-18": [
    {
      section: "",
      no: 1,
      name: "Mr. V. K. Singh",
      designation: "Chairman, ZCT",
      councilPosition: "Chairman",
    },
    {
      section: "",
      no: 2,
      name: "Mr. Jitendra Singh",
      designation: "Hon. Secretary",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 3,
      name: "Mr. Rajesh V. Singh",
      designation: "CEO (TPOLY, TIAT, TICA)",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 4,
      name: "Mr. Karan Singh",
      designation: "CEO (TCET/TIMSR/TIMSCDR)",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 5,
      name: "Dr. S. K. Mahajan",
      designation: "Director, DTE",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 6,
      name: "Shri Pramod Naik",
      designation: "Jt. Director. Technical Education Regional Office",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 7,
      name: "Dr. Ramesh Unnikrishnan",
      designation: "RO, AICTE",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 8,
      name: "Prin. Dr. Rajpal Hande",
      designation:
        "Principal – SVKM’s Mithibai College of Arts, Chauhan Institute of Science & Amrutben Jivanlal College And Commerce And Economics",
      councilPosition: "Member",
    },
    {
      section: "",
      no: 9,
      name: "Dr. S. M. Ganechari",
      designation: "Principal – TPOLY, Member",
      councilPosition: "Member-Secretary-TPOLY",
    },
    {
      section: "",
      no: 10,
      name: "Dr. B. K. Mishra",
      designation: "Principal, TCET, Member",
      councilPosition: "Member-Secretary-TCET",
    },
    {
      section: "",
      no: 11,
      name: "Dr. Vinita Gaikwad",
      designation: "Director TIMSCDR, Member Secretary",
      councilPosition: "Member-Secretary-TIMSCDR",
    },
    {
      section: "",
      no: 12,
      name: "Dr. R. R. Sedamkar",
      designation: "Prof, HOD-CMPN & Dean Academic TCET",
      councilPosition: "Faculty representative – TCET",
    },
    {
      section: "",
      no: 13,
      name: "Dr. Lochan Jolly",
      designation: "Prof. Dean (SSW), TCET",
      councilPosition: "Faculty representative – TCET",
    },
    {
      section: "",
      no: 14,
      name: "Mr. Pankaj Mudholkar",
      designation: "Asst. Prof., TIMSCDR",
      councilPosition: "Faculty representative – TIMSCDR",
    },
    {
      section: "",
      no: 15,
      name: "Mr Ganesh Akoliya",
      designation: "HOD-Elect. & Telecommunication Engg. TPOLY",
      councilPosition: "Faculty representative – TPOLY",
    },
    {
      section: "",
      no: 16,
      name: "Mrs. Mily Jashank",
      designation: "Sr. Lecturer-Information Technology, TPOLY",
      councilPosition: "Faculty representative – TPOLY",
    },
  ],

  /* ... other year's data ... */

  // Add more years and their data here
};

function Governing() {
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
         <PageHeader
        title="Members of Governing Council"
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Governing Council' }, // current page (no href)
        ]}
      />
          <div className="tables-container">
            <h3 className="governing-title">
              Governing Council - {selectedYear}
            </h3>
            <CommitteeTable data={committeeDataByYear[selectedYear]} />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Governing;
