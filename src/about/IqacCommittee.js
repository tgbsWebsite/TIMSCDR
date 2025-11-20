import React, { useState } from "react";
import Navbar from "../components/navbar";
import "../components/table.css";
import CTAButtons from "../components/sticky-button";
import BrochureForm from "../components/brochure-form";
import Footer from "../components/Footer";
import "../components/governing.css";
import DevelopmentCommitteeTable from "../components/development-committee-table";


const committeeDataByYear = {
  "A.Y. 2024-25": [
  {
    section: "",
    no: 1,
    councilPosition: "Chairperson- IQAC",
    name: "Dr. Vinita Gaikwad",
    designation: "Director",
  },
  {
    section: "",
    no: 2,
    councilPosition: "Nominee from Management",
    name: "Mr. V. N. Datta",
    designation: "Advisor- TIMSCDR",
  },
  {
    section: "",
    no: 3,
    councilPosition: "Coordinator IQAC",
    name: "Ms. Rupali Jadhav",
    designation: "Assistant Professor",
  },
  {
    section: "",
    no: 4,
    councilPosition: "Teacher Representative",
    name: "Ms. Sonu Gupta",
    designation: "Asst. Prof., Dy. Director & TPO",
  },
  {
    section: "",
    no: 5,
    councilPosition: "Teacher Representative",
    name: "Ms. Rashmi Vipat",
    designation: "Asst. Prof. & Coordinator Examination",
  },
  {
    section: "",
    no: 6,
    councilPosition: "Teacher Representative",
    name: "Mr. Shirshendu Maitra",
    designation: "Asst. Prof. & Coordinator FDP, CSI, IEEE",
  },
  {
    section: "",
    no: 7,
    councilPosition: "Teacher Representative",
    name: "Ms. Kinjal D.",
    designation: "Asst. Professor",
  },
  {
    section: "",
    no: 8,
    councilPosition: "Teacher Representative",
    name: "Ms. Mira Gohil",
    designation: "Asst. Professor",
  },
  {
    section: "",
    no: 9,
    councilPosition: "Member from Administration",
    name: "Mr. Shailesh Sharma",
    designation: "Office Superintendent",
  },
  {
    section: "",
    no: 10,
    councilPosition: "Member from Administration",
    name: "Ms. Priam Rane",
    designation: "Senior Clerk",
  },
  {
    section: "",
    no: 11,
    councilPosition: "Nominee from Industry (Education)",
    name: "Dr. Gopal Pardeshi",
    designation: "IQAC Co-ordinator, Thadomal Shahani Engg. College, Bandra.",
  },
  {
    section: "",
    no: 12,
    councilPosition: "Nominee from Industry",
    name: "Mr. Sanjiv Vishanathan",
    designation: "Director, Global Analytics, Wipro Limited",
  },
  {
    section: "",
    no: 13,
    councilPosition: "Nominee from Local Society",
    name: "Ms. Sangeeta Shirname",
    designation: "Executive member, Inseed NGO",
  },
  {
    section: "",
    no: 14,
    councilPosition: "Nominee from Local Alumni",
    name: "Mr. Prashant Nair",
    designation: "Credera (TA Digital), Senior Specialist- II",
  },
  {
    section: "",
    no: 15,
    councilPosition: "Nominee from Local Student",
    name: "Mr. Akshay Valsala",
    designation: "Student, Sem I AY 2024-25",
  }
],
  "A.Y. 2023-24": [
  {
    section: "",
    no: 1,
    councilPosition: "Chairperson- IQAC",
    name: "Dr. Vinita Gaikwad",
    designation: "Director",
  },
  {
    section: "",
    no: 2,
    councilPosition: "Nominee from Management",
    name: "Mr. V. N. Datta",
    designation: "Advisor- TIMSCDR",
  },
  {
    section: "",
    no: 3,
    councilPosition: "Teacher Representative",
    name: "Ms. Sonu Gupta",
    designation: "Asst. Prof. & Dy. Director & TPO",
  },
  {
    section: "",
    no: 4,
    councilPosition: "Teacher Representative",
    name: "Ms. Rashmi Vipat",
    designation: "Asst. Prof. & Coordinator Examination",
  },
  {
    section: "",
    no: 5,
    councilPosition: "Teacher Representative",
    name: "Mr. Shirshendu Maitra",
    designation: "Asst. Prof. & Coordinator FDP, CSI, IEEE",
  },
  {
    section: "",
    no: 6,
    councilPosition: "Teacher Representative",
    name: "Ms. Thara C.",
    designation: "Asst. Professor",
  },
  {
    section: "",
    no: 7,
    councilPosition: "Nominee from Industry",
    name: "Ms. Jyoti Agarwal",
    designation: "Maa2Mom",
  },
  {
    section: "",
    no: 8,
    councilPosition: "Member from Administration",
    name: "Mr. Shailesh Sharma",
    designation: "Senior Clerk",
  },
  {
    section: "",
    no: 9,
    councilPosition: "Member from Administration",
    name: "Ms. Priam Rane",
    designation: "Senior Clerk",
  },
  {
    section: "",
    no: 10,
    councilPosition: "Nominee from Local Society",
    name: "Ms. Anupama Padhi",
    designation: "Dhaani Foods – CEO & Founder",
  },
  {
    section: "",
    no: 11,
    councilPosition: "Nominee from Local Alumni",
    name: "Ms. Vertika Chandra",
    designation: "Alumni",
  },
  {
    section: "",
    no: 12,
    councilPosition: "Nominee from Local Student",
    name: "Ms. Kshatriya Ananya Sunil",
    designation: "Student Sem I AY 2023-24",
  },
  {
    section: "",
    no: 13,
    councilPosition: "Coordinator IQAC",
    name: "Ms. Rupali Jadhav",
    designation: "Assistant Professor",
  }
],

  "A.Y. 2022-23": [
  {
    section: "",
    no: 1,
    councilPosition: "Chairperson- IQAC",
    name: "Dr. Vinita Gaikwad",
    designation: "Director",
  },
  {
    section: "",
    no: 2,
    councilPosition: "Nominee from Management",
    name: "Mr. V. N. Datta",
    designation: "Advisor- TIMSCDR",
  },
  {
    section: "",
    no: 3,
    councilPosition: "Teacher Representative",
    name: "Mr. Pankaj Mudholkar",
    designation: "Asst. Prof. & Coordinator Research & Development",
  },
  {
    section: "",
    no: 4,
    councilPosition: "Teacher Representative",
    name: "Ms. Rashmi Vipat",
    designation: "Asst. Prof. & Coordinator Examination",
  },
  {
    section: "",
    no: 5,
    councilPosition: "Teacher Representative",
    name: "Mr. Shirshendu Maitra",
    designation: "Asst. Prof. & Coordinator FDP, CSI, IEEE",
  },
  {
    section: "",
    no: 6,
    councilPosition: "Nominee from Industry",
    name: "Mr. Arvind Prabhu",
    designation: "Director- RaceNext Information Solutions Pvt.Ltd.",
  },
  {
    section: "",
    no: 7,
    councilPosition: "Member from Administration",
    name: "Mr. Shailesh Sharma",
    designation: "Senior Clerk",
  },
  {
    section: "",
    no: 8,
    councilPosition: "Member from Administration",
    name: "Ms. Priam Rane",
    designation: "Senior Clerk",
  },
  {
    section: "",
    no: 9,
    councilPosition: "Nominee from Local Society",
    name: "Ms. Meenal Mohardikar",
    designation: "President AUP",
  },
  {
    section: "",
    no: 10,
    councilPosition: "Nominee from Local Alumni",
    name: "Ms. Vertika Chandra",
    designation: "Alumni",
  },
  {
    section: "",
    no: 11,
    councilPosition: "Nominee from Local Student",
    name: "Mr. Banarjee Arindam",
    designation: "Student",
  },
  {
    section: "",
    no: 12,
    councilPosition: "Coordinator IQAC",
    name: "Ms. Rupali Jadhav",
    designation: "Assistant Professor & IQAC Coordinator",
  }
],
  "A.Y. 2021-22": [
  {
    section: "",
    no: 1,
    councilPosition: "Chairperson- IQAC",
    name: "Dr. Vinita Gaikwad",
    designation: "Director",
  },
  {
    section: "",
    no: 2,
    councilPosition: "Nominee from Management",
    name: "Mr. V. N. Datta",
    designation: "Advisor- TIMSCDR",
  },
  {
    section: "",
    no: 3,
    councilPosition: "Teacher Representative",
    name: "Mr. Pankaj Mudholkar",
    designation: "Asst. Prof. & Coordinator Research & Development",
  },
  {
    section: "",
    no: 4,
    councilPosition: "Teacher Representative",
    name: "Ms. Rashmi Vipat",
    designation: "Asst. Prof. & Coordinator Examination",
  },
  {
    section: "",
    no: 5,
    councilPosition: "Teacher Representative",
    name: "Mr. Shirshendu Maitra",
    designation: "Asst. Prof. & Coordinator FDP, CSI, IEEE",
  },
  {
    section: "",
    no: 6,
    councilPosition: "Nominee from Industry",
    name: "Mr. Arvind Prabhu",
    designation: "Director- RaceNext Information Solutions Pvt.Ltd.",
  },
  {
    section: "",
    no: 7,
    councilPosition: "Member from Administration",
    name: "Mr. Shailesh Sharma",
    designation: "Senior Clerk",
  },
  {
    section: "",
    no: 8,
    councilPosition: "Member from Administration",
    name: "Ms. Priam Rane",
    designation: "Senior Clerk",
  },
  {
    section: "",
    no: 9,
    councilPosition: "Nominee from Local Society",
    name: "Ms. Meenal Mohardikar",
    designation: "President AUP",
  },
  {
    section: "",
    no: 10,
    councilPosition: "Nominee from Local Alumni",
    name: "Ms. Vertika Chandra",
    designation: "Alumni",
  },
  {
    section: "",
    no: 11,
    councilPosition: "Nominee from Local Student",
    name: "Ms. Muskan Shaikh",
    designation: "Student",
  },
  {
    section: "",
    no: 12,
    councilPosition: "Coordinator IQAC",
    name: "Ms. Rupali Jadhav",
    designation: "Assistant Professor & IQAC Coordinator",
  }
],
  "A.Y. 2020-21": [
  {
    section: "",
    no: 1,
    councilPosition: "Chairperson- IQAC",
    name: "Dr. Vinita Gaikwad",
    designation: "Director",
  },
  {
    section: "",
    no: 2,
    councilPosition: "Nominee from Management",
    name: "Mr. V. N. Datta",
    designation: "Advisor- TIMSCDR",
  },
  {
    section: "",
    no: 3,
    councilPosition: "Teacher Representative",
    name: "Ms. Sreeja S.S.",
    designation: "Asst. Prof. & HoD – Academics",
  },
  {
    section: "",
    no: 4,
    councilPosition: "Teacher Representative",
    name: "Mr. Pankaj Mudholkar",
    designation: "Asst. Prof. & Coordinator Research & Development",
  },
  {
    section: "",
    no: 5,
    councilPosition: "Teacher Representative",
    name: "Ms. Rashmi Vipat",
    designation: "Asst. Prof. & Coordinator Examination",
  },
  {
    section: "",
    no: 6,
    councilPosition: "Teacher Representative",
    name: "Mr. Shirshendu Maitra",
    designation: "Asst. Prof. & Coordinator FDP, CSI, IEEE",
  },
  {
    section: "",
    no: 7,
    councilPosition: "Nominee from Industry",
    name: "Mr. Arvind Prabhu",
    designation: "Director- RaceNext Information Solutions Pvt.Ltd.",
  },
  {
    section: "",
    no: 8,
    councilPosition: "Member from Administration",
    name: "Mr. Shailesh Sharma",
    designation: "Senior Clerk",
  },
  {
    section: "",
    no: 9,
    councilPosition: "Member from Administration",
    name: "Ms. Priam Rane",
    designation: "Senior Clerk",
  },
  {
    section: "",
    no: 10,
    councilPosition: "Nominee from Local Society",
    name: "Ms. Meenal Mohardikar",
    designation: "President AUP",
  },
  {
    section: "",
    no: 11,
    councilPosition: "Nominee from Local Alumni",
    name: "Ms. Vertika Chandra",
    designation: "Alumni",
  },
  {
    section: "",
    no: 12,
    councilPosition: "Nominee from Local Student",
    name: "Ms. Muskan Shaikh",
    designation: "Student",
  },
  {
    section: "",
    no: 13,
    councilPosition: "Coordinator IQAC",
    name: "Ms. Rupali Jadhav",
    designation: "Assistant Professor & IQAC Coordinator",
  }
],

  "A.Y. 2019-20": [
  {
    section: "",
    no: 1,
    councilPosition: "Chairperson- IQAC",
    name: "Dr. Vinita Gaikwad",
    designation: "Director",
  },
  {
    section: "",
    no: 2,
    councilPosition: "Nominee from Management",
    name: "Mr. V. N. Datta",
    designation: "Advisor- TIMSCDR",
  },
  {
    section: "",
    no: 3,
    councilPosition: "Teacher Representative",
    name: "Ms. Sreeja S.S.",
    designation: "Asst. Prof. & HoD – Academics",
  },
  {
    section: "",
    no: 4,
    councilPosition: "Teacher Representative",
    name: "Mr. Pankaj Mudholkar",
    designation: "Asst. Prof. & Coordinator Research & Development",
  },
  {
    section: "",
    no: 5,
    councilPosition: "Teacher Representative",
    name: "Ms. Rashmi Vipat",
    designation: "Asst. Prof. & Coordinator Examination",
  },
  {
    section: "",
    no: 6,
    councilPosition: "Teacher Representative",
    name: "Mr. Shirshendu Maitra",
    designation: "Asst. Prof. & Coordinator FDP, CSI, IEEE",
  },
  {
    section: "",
    no: 7,
    councilPosition: "Nominee from Industry",
    name: "Mr. Arvind Prabhu",
    designation: "Director- RaceNext Information Solutions Pvt.Ltd.",
  },
  {
    section: "",
    no: 8,
    councilPosition: "Member from Administration",
    name: "Mr. Shailesh Sharma",
    designation: "Senior Clerk",
  },
  {
    section: "",
    no: 9,
    councilPosition: "Member from Administration",
    name: "Ms. Priam Rane",
    designation: "Senior Clerk",
  },
  {
    section: "",
    no: 10,
    councilPosition: "Nominee from Local Society",
    name: "Ms. Meenal Mohardikar",
    designation: "President AUP",
  },
  {
    section: "",
    no: 11,
    councilPosition: "Nominee from Local Alumni",
    name: "Ms. Vertika Chandra",
    designation: "Alumni",
  },
  {
    section: "",
    no: 12,
    councilPosition: "Nominee from Local Student",
    name: "Ms. Muskan Shaikh",
    designation: "Student",
  },
  {
    section: "",
    no: 13,
    councilPosition: "Coordinator IQAC",
    name: "Ms. Rupali Jadhav",
    designation: "Assistant Professor & IQAC Coordinator",
  }
]


  /* ... other year's data ... */

  // Add more years and their data here
};

function IqacCommittee() {
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
          <h2 className="page-title">Members of IQAC Committee</h2>

          <div className="tables-container">
            <h3 className="governing-title">IQAC Committee - {selectedYear}</h3>
            <DevelopmentCommitteeTable data={committeeDataByYear[selectedYear]} />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default IqacCommittee;
