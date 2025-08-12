import React, { useState } from "react";
import Navbar from "../components/navbar";
import "../components/table.css";
import CTAButtons from "../components/sticky-button";
import BrochureForm from "../components/brochure-form";
import Footer from "../components/Footer";
import "../components/governing.css";
import DevelopmentCommitteeTable from "../components/iqac-table";

const committeeDataByYear = {
  "A.Y. 2024-25": [
  {
    section: "",
    no: 1,
    councilPosition: "Chairperson",
    name: "Ms. Karishma Singh",
    designation: "CEO, TIMSCDR",
  },
  {
    section: "",
    no: 2,
    councilPosition: "Member",
    name: "Mr. V. N. Datta",
    designation: "Advisor- (TEG)",
  },
  {
    section: "",
    no: 3,
    councilPosition: "Member",
    name: "Mr. Shirshendu Maitra",
    designation: "Asst. Prof. HoD-Academics",
  },
  {
    section: "",
    no: 4,
    councilPosition: "Local Member – Education",
    name: "Dr. Uday Pandit Khot",
    designation: "Professor – SFIT",
  },
  {
    section: "",
    no: 5,
    councilPosition: "Local Member – Industry",
    name: "Dr. Suresh Shan",
    designation: "Chairman CSI",
  },
  {
    section: "",
    no: 6,
    councilPosition: "Local Member – Research",
    name: "Mr. Sanjay Kimbahune",
    designation: "Senior Researcher, Tata Consultancy Services Limited",
  },
  {
    section: "",
    no: 7,
    councilPosition: "Local Members – Social Service",
    name: "Mr. Harsha Udipi",
    designation: "Social Service",
  },
  {
    section: "",
    no: 8,
    councilPosition: "Coordinator Quality Assurance",
    name: "Ms. Rupali Jadhav",
    designation: "Asst. Prof., Coordinator IQAC",
  },
  {
    section: "",
    no: 9,
    councilPosition: "Member – Teachers",
    name: "Ms. Sonu Gupta",
    designation: "Asst. Prof., Dy. Director & TPO",
  },
  {
    section: "",
    no: 10,
    councilPosition: "Member – Teachers",
    name: "Ms. Rashmi Vipat",
    designation: "Asst. Prof., In-charge Examinations",
  },
  {
    section: "",
    no: 11,
    councilPosition: "Member – Teachers",
    name: "Dr. Padma Mishra",
    designation: "Assoc. Professor",
  },
  {
    section: "",
    no: 12,
    councilPosition: "Member – Non-Teaching",
    name: "Mr. Shailesh Sharma",
    designation: "Office Superintendent",
  },
  {
    section: "",
    no: 13,
    councilPosition: "College Student Council",
    name: "Ms. Siddhi Kotre",
    designation: "Student – 2nd Year MCA",
  },
  {
    section: "",
    no: 14,
    councilPosition: "College Student Council",
    name: "Mr. Akash Chaudhary",
    designation: "Student – 2nd Year MCA",
  },
  {
    section: "",
    no: 15,
    councilPosition: "Member – Secretary",
    name: "Dr. Vinita G.",
    designation: "Director, TIMSCDR",
  }
],
  "A.Y. 2023-24": [
  {
    section: "",
    no: 1,
    councilPosition: "Chairperson",
    name: "Ms. Karishmma V. Singh",
    designation: "CEO – TIMSCDR",
  },
  {
    section: "",
    no: 2,
    councilPosition: "Member",
    name: "Asst. Prof. Shirshendu Maitra",
    designation: "Asst. Prof. & HoD – Academics",
  },
  {
    section: "",
    no: 3,
    councilPosition: "Member – Teachers",
    name: "Asst. Prof. Sonu Gupta",
    designation: "Dy Director & TPO",
  },
  {
    section: "",
    no: 4,
    councilPosition: "Member – Teachers",
    name: "Ms. Rashmi Vipat",
    designation: "Exam In-charge",
  },
  {
    section: "",
    no: 5,
    councilPosition: "Member – Teachers",
    name: "Dr. Padma Mishra",
    designation: "Asst. Prof.",
  },
  {
    section: "",
    no: 6,
    councilPosition: "Member – Non-Teaching",
    name: "Mr. Shailesh Sharma",
    designation: "Head Clerk",
  },
  {
    section: "",
    no: 7,
    councilPosition: "Local Member – Research",
    name: "Dr. Uday Pandit Khot",
    designation: "Professor, SFIT",
  },
  {
    section: "",
    no: 8,
    councilPosition: "Local Member – Education",
    name: "Dr. Dhananjay Kalbande",
    designation: "Professor – SPIT",
  },
  {
    section: "",
    no: 9,
    councilPosition: "Local Member – Industry",
    name: "Dr, Suresh Shan, Head",
    designation: "Innovation & Future Technologies Business Information Technology Solutions (BITS), Mahindra & Mahindra Ltd.",
  },
  {
    section: "",
    no: 10,
    councilPosition: "Local Member – Social",
    name: "Mr. Harsha Udipi",
    designation: "Member – Soch Sayani – Social Work",
  },
  {
    section: "",
    no: 11,
    councilPosition: "Coordinator Quality Assurance",
    name: "Ms. Rupali Jadhav",
    designation: "Asst. Prof. & WDC In-charge",
  },
  {
    section: "",
    no: 12,
    councilPosition: "Member – Students Council",
    name: "Ms. Muskan Akbar Ali",
    designation: "Student – 2nd Year MCA",
  },
  {
    section: "",
    no: 13,
    councilPosition: "Member – Students Council",
    name: "Mr. Gaurav Yadav",
    designation: "Student – 2nd Year MCA",
  },
  {
    section: "",
    no: 14,
    councilPosition: "Member – Secretary",
    name: "Dr. Vinita G.",
    designation: "Director",
  }
],

  "A.Y. 2022-23": [
  {
    section: "",
    no: 1,
    councilPosition: "Chairperson",
    name: "Ms. Karishmma V. Singh",
    designation: "CEO – TIMSCDR",
  },
  {
    section: "",
    no: 2,
    councilPosition: "Member",
    name: "Mr. V. N. Datta",
    designation: "Advisor- TEG",
  },
  {
    section: "",
    no: 3,
    councilPosition: "Member",
    name: "Ms. Mira Gohil",
    designation: "Asst. Prof. & HoD – Academics",
  },
  {
    section: "",
    no: 4,
    councilPosition: "Local Member – Research",
    name: "Dr. Uday Pandit Khot",
    designation: "Professor, SFIT",
  },
  {
    section: "",
    no: 5,
    councilPosition: "Local Member – Education",
    name: "Dr. Dhananjay Kalbande",
    designation: "Professor – SPIT",
  },
  {
    section: "",
    no: 6,
    councilPosition: "Local Member – Industry",
    name: "Dr. Suresh Shan",
    designation:
      "Head – Innovation & Future Technologies Business Information Technology Solutions (BITS), Mahindra & Mahindra Ltd.",
  },
  {
    section: "",
    no: 7,
    councilPosition: "Local Members – Social Service (NGO)",
    name: "Ms. Meenal Mohadikar",
    designation: "President AUP",
  },
  {
    section: "",
    no: 8,
    councilPosition: "Coordinator Quality Assurance",
    name: "Ms. Rupali Jadhav",
    designation: "Asst. Prof. & WDC In-charge",
  },
  {
    section: "",
    no: 9,
    councilPosition: "Member – Teachers",
    name: "Ms. Sonu Gupta",
    designation: "Asst. Prof. & TPO",
  },
  {
    section: "",
    no: 10,
    councilPosition: "Member",
    name: "Dr. Pankaj Mudholkar",
    designation: "Associate Prof. & R & D In-charge",
  },
  {
    section: "",
    no: 11,
    councilPosition: "Member",
    name: "Ms. Rashmi Vipat",
    designation: "Asst. Prof. & Exam In-charge",
  },
  {
    section: "",
    no: 12,
    councilPosition: "Member – Non-Teaching",
    name: "Mr. Shailesh Sharma",
    designation: "Head Clerk",
  },
  {
    section: "",
    no: 13,
    councilPosition: "Member – Students Council",
    name: "Ms. Pranali Dalal",
    designation: "Student – 2nd Year MCA",
  },
  {
    section: "",
    no: 14,
    councilPosition: "Member – Students Council",
    name: "Mr. Akhilesh Kushwaha",
    designation: "Student – 2nd Year MCA",
  },
  {
    section: "",
    no: 15,
    councilPosition: "Member – Secretary",
    name: "Dr. Vinita G.",
    designation: "Director",
  }
],
  "A.Y. 2021-22": [
  {
    section: "",
    no: 1,
    councilPosition: "Chairperson",
    name: "Ms. Karishmma V. Singh",
    designation: "CEO – TIMSCDR",
  },
  {
    section: "",
    no: 2,
    councilPosition: "Member",
    name: "Mr. V. N. Datta",
    designation: "Advisor- TIMSCDR",
  },
  {
    section: "",
    no: 3,
    councilPosition: "Member",
    name: "Ms. Mira Gohil",
    designation: "Asst. Prof. & HoD – Academics",
  },
  {
    section: "",
    no: 4,
    councilPosition: "Member – Teachers",
    name: "Dr. Pankaj Mudholkar",
    designation: "Asst. Prof. & R & D In-charge",
  },
  {
    section: "",
    no: 5,
    councilPosition: "Member",
    name: "Ms. Sonu Gupta",
    designation: "Asst. Prof. & TPO",
  },
  {
    section: "",
    no: 6,
    councilPosition: "Member",
    name: "Ms. Rashmi Vipat",
    designation: "Asst. Prof. & Exam In-charge",
  },
  {
    section: "",
    no: 7,
    councilPosition: "Member",
    name: "Ms. Rupali Jadhav",
    designation: "Asst. Prof. & WDC In-charge",
  },
  {
    section: "",
    no: 8,
    councilPosition: "Member – Non-Teaching",
    name: "Mr. Shailesh Sharma",
    designation: "Head Clerk",
  },
  {
    section: "",
    no: 9,
    councilPosition: "Local Member – Research",
    name: "Dr. Uday Pandit Khot",
    designation: "Professor, SFIT",
  },
  {
    section: "",
    no: 10,
    councilPosition: "Local Member – Education",
    name: "Dr. Dhananjay Kalbande",
    designation: "Professor – SPIT",
  },
  {
    section: "",
    no: 11,
    councilPosition: "Local Member – Industry",
    name: "Dr. Suresh Shan",
    designation: "Head – Innovation & Future Technologies Business Information Technology Solutions (BITS), Mahindra & Mahindra Ltd.",
  },
  {
    section: "",
    no: 12,
    councilPosition: "Local Members – Social Service (NGO)",
    name: "Ms. Meenal Mohadikar",
    designation: "President AUP",
  },
  {
    section: "",
    no: 13,
    councilPosition: "Member – Students Council",
    name: "Ms. Muskan Shaikh",
    designation: "Student – 3rd Year MCA",
  },
  {
    section: "",
    no: 14,
    councilPosition: "Member – Students Council",
    name: "Mr. Malav Shah",
    designation: "Student – 2nd Year MCA",
  },
  {
    section: "",
    no: 15,
    councilPosition: "Member – Secretary",
    name: "Dr. Vinita G.",
    designation: "Director",
  }
],
  "A.Y. 2020-21": [
  {
    section: "",
    no: 1,
    councilPosition: "Chairperson",
    name: "Ms. Karishmma V. Singh",
    designation: "CEO – TIMSCDR",
  },
  {
    section: "",
    no: 2,
    councilPosition: "Member",
    name: "Mr. V. N. Datta",
    designation: "Advisor- TIMSCDR",
  },
  {
    section: "",
    no: 3,
    councilPosition: "Member",
    name: "Ms. Sreeja S. S.",
    designation: "Asst. Prof. & HoD – Academics",
  },
  {
    section: "",
    no: 4,
    councilPosition: "Member – Teachers",
    name: "Mr. Pankaj Mudholkar",
    designation: "Asst. Prof. & R& In-charge",
  },
  {
    section: "",
    no: 5,
    councilPosition: "Member",
    name: "Ms. Sonu Gupta",
    designation: "Asst. Prof., MR & TPO",
  },
  {
    section: "",
    no: 6,
    councilPosition: "Member",
    name: "Ms. Rashmi Vipat",
    designation: "Asst. Prof. & Exam In-charge",
  },
  {
    section: "",
    no: 7,
    councilPosition: "Member",
    name: "Mr. Shirshendu Maitra",
    designation: "Asst. Prof.",
  },
  {
    section: "",
    no: 8,
    councilPosition: "Member – Non-Teaching",
    name: "Mr. Shailesh Sharma",
    designation: "Head Clerk",
  },
  {
    section: "",
    no: 9,
    councilPosition: "Local Member – Research",
    name: "Dr. Uday Pandit Khot",
    designation: "Professor, SFIT",
  },
  {
    section: "",
    no: 10,
    councilPosition: "Local Member – Education",
    name: "Dr. Dhananjay Kalbande",
    designation: "Professor – SPIT",
  },
  {
    section: "",
    no: 11,
    councilPosition: "Local Member – Industry",
    name: "Dr. Suresh Shan",
    designation: "Head – Innovation & Future Technologies Business Information Technology Solutions (BITS), Mahindra & Mahindra Ltd.",
  },
  {
    section: "",
    no: 12,
    councilPosition: "Local Members – Social Service (NGO)",
    name: "Ms. Meenal Mohadikar",
    designation: "President AUP",
  },
  {
    section: "",
    no: 13,
    councilPosition: "Coordinator Quality Assurance",
    name: "Ms. Rupali Jadhav",
    designation: "Asst. Prof. & WDC In-charge",
  },
  {
    section: "",
    no: 14,
    councilPosition: "Student Council",
    name: "Ms. Muskan Shaikh",
    designation: "Student – 2nd Year MCA",
  },
  {
    section: "",
    no: 15,
    councilPosition: "Student Council",
    name: "Mr. Manthan Mirgal",
    designation: "Student – 2nd year MCA",
  },
  {
    section: "",
    no: 16,
    councilPosition: "Member – Secretary",
    name: "Dr. Vinita G.",
    designation: "Director",
  }
],

  "A.Y. 2019-20": [
  {
    section: "",
    no: 1,
    councilPosition: "Chairperson",
    name: "Ms. Karishmma V. Singh",
    designation: "CEO – TIMSCDR",
  },
  {
    section: "",
    no: 2,
    councilPosition: "Member",
    name: "Mr. V. N. Datta",
    designation: "Advisor- TIMSCDR",
  },
  {
    section: "",
    no: 3,
    councilPosition: "Member",
    name: "Ms. Sreeja S. S.",
    designation: "Asst. Prof. & HoD – Academics",
  },
  {
    section: "",
    no: 4,
    councilPosition: "Member – Teachers",
    name: "Mr. Pankaj Mudholkar",
    designation: "Asst. Prof. & R&D In-charge",
  },
  {
    section: "",
    no: 5,
    councilPosition: "Member",
    name: "Ms. Rashmi Vipat",
    designation: "Asst. Prof. & Exam In-charge",
  },
  {
    section: "",
    no: 6,
    councilPosition: "Member",
    name: "Mr. Shirshendu Maitra",
    designation: "Asst. Prof.",
  },
  {
    section: "",
    no: 7,
    councilPosition: "Member – Non-Teaching",
    name: "Mr. Shailesh Sharma",
    designation: "Senior Clerk",
  },
  {
    section: "",
    no: 8,
    councilPosition: "Local Member – Education",
    name: "Dr. Dhananjay Kalbande",
    designation: "Professor, SPIT",
  },
  {
    section: "",
    no: 9,
    councilPosition: "Local Member – Industry",
    name: "Dr. Suresh Shan",
    designation: "Head – Innovation & Future Technologies Business Information Technology Solutions (BITS)",
  },
  {
    section: "",
    no: 10,
    councilPosition: "Local Member – Research",
    name: "Dr. Uday Pandit Khot",
    designation: "Professor, SFIT",
  },
  {
    section: "",
    no: 11,
    councilPosition: "Local Members – Social Service (NGO)",
    name: "Ms. Meenal Mohardikar",
    designation: "President AUP",
  },
  {
    section: "",
    no: 12,
    councilPosition: "Coordinator Quality Assurance",
    name: "Ms. Aprajita Singh",
    designation: "Asst. Prof. (Dy. Director)",
  },
  {
    section: "",
    no: 13,
    councilPosition: "GS – College Student Council",
    name: "Ms. Rachana Patel",
    designation: "Student – 3rd Year MCA",
  },
  {
    section: "",
    no: 14,
    councilPosition: "Member – College Student Council",
    name: "Mr. Durgesh",
    designation: "Student – 3rd Year MCA",
  },
  {
    section: "",
    no: 15,
    councilPosition: "Member – Secretary",
    name: "Dr. Vinita G.",
    designation: "Director",
  }
],
  "A.Y. 2018-19": [
  {
    section: "",
    no: 1,
    councilPosition: "Chairperson",
    name: "Ms. Karishmma V. Singh",
    designation: "CEO – TIMSCDR",
  },
  {
    section: "",
    no: 2,
    councilPosition: "Member",
    name: "Mr. V. N. Datta",
    designation: "Advisor- TIMSCDR",
  },
  {
    section: "",
    no: 3,
    councilPosition: "Member",
    name: "Ms. Aprajita Singh",
    designation: "Asst. Prof. & HoD – Academics",
  },
  {
    section: "",
    no: 4,
    councilPosition: "Member – Teachers",
    name: "Mr. Pankaj Mudholkar",
    designation: "Asst. Prof. & Deputy Director",
  },
  {
    section: "",
    no: 5,
    councilPosition: "Member",
    name: "Ms. Rashmi Vipat",
    designation: "Asst. Prof. & Exam In-charge",
  },
  {
    section: "",
    no: 6,
    councilPosition: "Member",
    name: "Mr. Shirshendu Maitra",
    designation: "Asst. Prof.",
  },
  {
    section: "",
    no: 7,
    councilPosition: "Member – Non Teaching",
    name: "Mr. Shailesh Sharma",
    designation: "Senior Clerk",
  },
  {
    section: "",
    no: 8,
    councilPosition: "Local Members – Education",
    name: "Dr. Dhananjay Kalbande",
    designation: "Professor, IT , SPIT",
  },
  {
    section: "",
    no: 9,
    councilPosition: "Local Members – Industry",
    name: "Mr. Bharat Mandot",
    designation: "CEO – Stelcore Ltd.",
  },
  {
    section: "",
    no: 10,
    councilPosition: "Local Members – Research",
    name: "Mr. Dinesh Singh",
    designation: "Group Leader – TCS Innovation Lab",
  },
  {
    section: "",
    no: 11,
    councilPosition: "Local Members – Social Service (NGO)",
    name: "Arch. Satish Kolvankar",
    designation: "Architect",
  },
  {
    section: "",
    no: 12,
    councilPosition: "Coordinator Quality Assurance",
    name: "Ms. Sonu Gupta",
    designation: "Asst. Prof. & MR-TIMSCDR",
  },
  {
    section: "",
    no: 13,
    councilPosition: "President – College Student Council",
    name: "Ms. Charmi Shah",
    designation: "Student – 2nd Year MCA",
  },
  {
    section: "",
    no: 14,
    councilPosition: "Secretary – College Student Council",
    name: "Mr. Omkar Sawant",
    designation: "Student – 2nd Year MCA",
  },
  {
    section: "",
    no: 15,
    councilPosition: "Member – Secretary",
    name: "Dr. Vinita G.",
    designation: "Director",
  },
],
"A.Y. 2017-18" : [
  {
    section: "",
    no: 1,
    councilPosition: "Chairperson",
    name: "Mr. V. K. Singh",
    designation: "Chairman – TEG",
  },
  {
    section: "",
    no: 2,
    councilPosition: "Member",
    name: "Mr. Jitendra Singh",
    designation: "Secretary – TEG",
  },
  {
    section: "",
    no: 3,
    councilPosition: "Member",
    name: "Mr. Karan Singh",
    designation: "CEO – ZCT",
  },
  {
    section: "",
    no: 4,
    councilPosition: "Member",
    name: "Mr. Vipul Gandhi",
    designation: "CA",
  },
  {
    section: "",
    no: 5,
    councilPosition: "Member",
    name: "S. M. Ganechari",
    designation: "Principal, TPOLY",
  },
  {
    section: "",
    no: 6,
    councilPosition: "Member",
    name: "Mr. V. N. Datta",
    designation: "Advisor- TIMSCDR",
  },
  {
    section: "",
    no: 7,
    councilPosition: "Member – Teachers",
    name: "Mr. Pankaj Mudholkar",
    designation: "Asst. Prof.",
  },
  {
    section: "",
    no: 8,
    councilPosition: "Member",
    name: "Ms. Sonu Gupta",
    designation: "Asst. Prof. & MR",
  },
  {
    section: "",
    no: 9,
    councilPosition: "Member",
    name: "Ms. Sreeja S. S.",
    designation: "Asst. Prof.",
  },
  {
    section: "",
    no: 10,
    councilPosition: "Member – Non Teaching",
    name: "Mr. Shailesh Sharma",
    designation: "Senior Clerk",
  },
  {
    section: "",
    no: 11,
    councilPosition: "Member – Secretary",
    name: "Dr. Vinita G.",
    designation: "Director",
  }
]


  /* ... other year's data ... */

  // Add more years and their data here
};

function DevelopmentCommittee() {
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
          <h2 className="page-title">Members of College Development Committee</h2>

          <div className="tables-container">
            <h3 className="governing-title">College Development Committee - {selectedYear}</h3>
            <DevelopmentCommitteeTable data={committeeDataByYear[selectedYear]} />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default DevelopmentCommittee;
