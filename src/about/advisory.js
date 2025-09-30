import React, { useState } from "react";
import Navbar from "../components/navbar";
import "../components/table.css";
import CTAButtons from "../components/sticky-button";
import BrochureForm from "../components/brochure-form";
import Footer from "../components/Footer";
import "../components/governing.css";
import AdvisoryTable from "../components/advisory-table";
import PageHeader from "./PageHeader";

const committeeDataByYear = {
  "A.Y. 2023-24": [
    {
      section: "",
      no: 1,
      councilPosition: "Member",
      name: "Mr. Sanjay Kimbahune",
      designation: "Senior Scientist and Consultant, TCS",
    },
    {
      section: "",
      no: 2,
      councilPosition: "Member",
      name: "Mr. Sanjeev Vishwanathan",
      designation: "Director – Global Industry Relations, Wipro",
    },
    {
      section: "",
      no: 3,
      councilPosition: "Member",
      name: "Mr. Dyneshwar Kambli",
      designation: "IP Consultant, TCS",
    },
    {
      section: "",
      no: 4,
      councilPosition: "Member",
      name: "Mr. Vishwajeet Sukhija",
      designation: "Apple",
    },
    {
      section: "",
      no: 5,
      councilPosition: "Member",
      name: "Ms. Suman Pai",
      designation: "Examiner, IMC, RBNQA",
    },
    {
      section: "",
      no: 6,
      councilPosition: "Member",
      name: "Mr. V. N. Datta",
      designation: "Advisor, TEG",
    },
    {
      section: "",
      no: 7,
      councilPosition: "Member",
      name: "Ms. Sonu Gupta",
      designation: "Assistant Prof, Dy. Director & TPO, TIMSCDR",
    },
    {
      section: "",
      no: 8,
      councilPosition: "Member",
      name: "Mr. Shirshendu Maitra",
      designation: "Assistant Professor & HoD – Aca., TIMSCDR",
    },
    {
      section: "",
      no: 9,
      councilPosition: "Convenor",
      name: "Dr. Vinita Gaikwad",
      designation: "Director, TIMSCDR",
    },
    // Special Invitees
    {
      section: "Special Invitees",
      no: 10,
      councilPosition: "Member",
      name: "Ms. Rashmi Vipat",
      designation: "Asst. Prof. & Exam In-charge, TIMSCDR",
    },
    {
      section: "Special Invitees",
      no: 11,
      councilPosition: "Member",
      name: "Mr. Brijesh Pandey",
      designation: "Asst. Prof., & TPO, TIMSCDR",
    },
  ],
  "A.Y. 2022-23": [
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
      councilPosition: "Member",
      name: "Mr. Prasanna Lohar",
      designation: "Director, Association of Emerging Technologies India",
    },
    {
      section: "",
      no: 2,
      councilPosition: "Member",
      name: "Mr. Sanjay Kimbahune",
      designation: "Senior Scientist and Consultant, TCS",
    },
    {
      section: "",
      no: 3,
      councilPosition: "Member",
      name: "Mr. Dyneshwar Kambli",
      designation: "Consultant, TCS",
    },
    {
      section: "",
      no: 4,
      councilPosition: "Member",
      name: "Mr. Apurb Sinha",
      designation: "Head – CRM and Analytics (APAC), Invesco",
    },
    {
      section: "",
      no: 5,
      councilPosition: "Member",
      name: "Mr. Vishwajeet Sukhija",
      designation: "Regional Business Head – Enterprise – Apple",
    },
    {
      section: "",
      no: 6,
      councilPosition: "Member",
      name: "Mr. Vikrant Pawar",
      designation: "Head of Engg., Grab-a-Grub Services Pvt. Ltd.",
    },
    {
      section: "",
      no: 7,
      councilPosition: "Member",
      name: "Ms. Suman Pai",
      designation: "Examiner, IMC, RBNQA",
    },
    {
      section: "",
      no: 8,
      councilPosition: "Member",
      name: "Mr. V. N. Datta",
      designation: "Advisor, TEG",
    },
    {
      section: "",
      no: 9,
      councilPosition: "Convenor",
      name: "Dr. Vinita Gaikwad",
      designation: "Director, TIMSCDR",
    },

    {
      section: "Special Invitees",
      no: 10,
      councilPosition: "Member",
      name: "Ms. Sonu Gupta",
      designation: "Assistant Prof, TPO, TIMSCDR",
    },
    {
      section: "Special Invitees",
      no: 11,
      councilPosition: "Member",
      name: "Mr. Brijesh Pandey",
      designation: "Asst. Prof., & TPO, TIMSCDR",
    },
    {
      section: "Special Invitees",
      no: 12,
      councilPosition: "Member",
      name: "Ms. Mira Gohil",
      designation: "Asst. Prof. & HoD – Aca., TIMSCDR",
    },
    {
      section: "Special Invitees",
      no: 13,
      councilPosition: "Member",
      name: "Dr. Pankaj Mudholkar",
      designation: "Associate Prof. In-charge Research, TIMSCDR",
    },
  ],
  "A.Y. 2021-22": [
    {
      section: "",
      no: 1,
      councilPosition: "Member",
      name: "Mr. Sanjay Kimbahune",
      designation: "Senior Scientist and Consultant, TCS",
    },
    {
      section: "",
      no: 2,
      councilPosition: "Member",
      name: "Mr. Dyneshwar Kambli",
      designation: "Consultant, TCS",
    },
    {
      section: "",
      no: 3,
      councilPosition: "Member",
      name: "Mr. Apurb Sinha",
      designation: "Head – CRM and Analytics (APAC), Invesco",
    },
    {
      section: "",
      no: 4,
      councilPosition: "Member",
      name: "Mr. Vishwajeet Sukhija",
      designation: "Regional Business Head – Enterprise – Apple",
    },
    {
      section: "",
      no: 5,
      councilPosition: "Member",
      name: "Mr. Vikrant Pawar",
      designation: "Head of Engg. Grab-a-Grub Services Pvt. Ltd.",
    },
    {
      section: "",
      no: 6,
      councilPosition: "Member",
      name: "Ms. Suman Pai",
      designation: "Examiner, IMC, RBNQA",
    },
    {
      section: "",
      no: 7,
      councilPosition: "Member",
      name: "Mr. V. N. Datta",
      designation: "Advisor, TEG",
    },
    {
      section: "",
      no: 8,
      councilPosition: "Member",
      name: "Dr. Pankaj Mudholkar",
      designation: "In-charge Research, TIMSCDR",
    },
    {
      section: "",
      no: 9,
      councilPosition: "Member",
      name: "Ms. Sonu Gupta",
      designation: "Assistant Prof, TPO, TIMSCDR",
    },
    {
      section: "",
      no: 10,
      councilPosition: "Convenor",
      name: "Dr. Vinita Gaikwad",
      designation: "Director, TIMSCDR",
    },

    {
      section: "Special Invitees",
      no: 11,
      councilPosition: "Member",
      name: "Ms. Mira Gohil",
      designation: "Asst. Prof. & HoD – Aca., TIMSCDR",
    },
    {
      section: "Special Invitees",
      no: 12,
      councilPosition: "Member",
      name: "Mr. Shirshendu Maitra",
      designation: "Asst. Prof.",
    },
    {
      section: "Special Invitees",
      no: 13,
      councilPosition: "Member",
      name: "Mr. Brijesh Pandey",
      designation: "Asst. Prof., & TPO, TIMSCDR",
    },
  ],
  "A.Y. 2020-21": [
    {
      section: "",
      no: 1,
      councilPosition: "Member",
      name: "Dr. Deven Shah",
      designation:
        "Vice Principal – Thakur College of Engineering and Technology",
    },
    {
      section: "",
      no: 2,
      councilPosition: "Member",
      name: "Mr. Sanjay Kimbahune",
      designation: "Senior Scientist and Consultant, TCS",
    },
    {
      section: "",
      no: 3,
      councilPosition: "Member",
      name: "Mr. Dnyaneshwar Kamble",
      designation: "Leading IP & Engineering for NGN, TCS",
    },
    {
      section: "",
      no: 4,
      councilPosition: "Member",
      name: "Mr. Akshay Shah",
      designation: "Co Founder at Jhakaas Technologies Private Limited",
    },
    {
      section: "",
      no: 5,
      councilPosition: "Member",
      name: "Mr. Apurb Sinha",
      designation: "Head – CRM and Analytics (APAC), Invesco",
    },
    {
      section: "",
      no: 6,
      councilPosition: "Member",
      name: "Mr. Vishwajeet Sukhija",
      designation: "Account Executive, Microsoft",
    },
    {
      section: "",
      no: 7,
      councilPosition: "Member",
      name: "Ms. Suman Pai",
      designation: "Examiner, IMC, RBNQA",
    },
    {
      section: "",
      no: 8,
      councilPosition: "Member",
      name: "Mr. V. N. Datta",
      designation: "Advisor, TEG",
    },
    {
      section: "",
      no: 9,
      councilPosition: "Convenor",
      name: "Dr. Vinita Gaikwad",
      designation: "Director, TIMSCDR",
    },
    {
      section: "",
      no: 10,
      councilPosition: "Member",
      name: "Ms. Mira Gohil",
      designation: "Asst. Prof. & HoD Academics",
    },
    {
      section: "",
      no: 11,
      councilPosition: "Member",
      name: "Mr. Pankaj Mudholkar",
      designation: "Asst. Prof. In-charge Research, TIMSCDR",
    },
    {
      section: "",
      no: 12,
      councilPosition: "Member",
      name: "Ms. Sonu Gupta",
      designation: "Asst. Prof. & TPO",
    },
    {
      section: "",
      no: 13,
      councilPosition: "Member",
      name: "Mr. Brijesh Pandey",
      designation: "Asst. Prof & TPO",
    },
  ],

  "A.Y. 2019-20": [
  {
    section: "",
    no: 1,
    councilPosition: "Member",
    name: "Dr. Deven Shah",
    designation: "Vice Principal – Thakur College of Engineering and Technology",
  },
  {
    section: "",
    no: 2,
    councilPosition: "Member",
    name: "Mr. Sanjay Kimbahune",
    designation: "Senior Scientist and Consultant, TCS",
  },
  {
    section: "",
    no: 3,
    councilPosition: "Member",
    name: "Mr. Dyneshwar Kambli",
    designation: "Consultant, TCS",
  },
  {
    section: "",
    no: 4,
    councilPosition: "Member",
    name: "Mr. Akshay Shah",
    designation: "Co Founder at Jhakaas Technologies Private Limited",
  },
  {
    section: "",
    no: 5,
    councilPosition: "Member",
    name: "Mr. Apurb Sinha",
    designation: "Head – CRM and Analytics (APAC), Invesco",
  },
  {
    section: "",
    no: 6,
    councilPosition: "Member",
    name: "Mr. Vishwajeet Sukhija",
    designation: "Account Executive, Microsoft",
  },
  {
    section: "",
    no: 7,
    councilPosition: "Member",
    name: "Ms. Suman Pai",
    designation: "Examiner, IMC",
  },
  {
    section: "",
    no: 8,
    councilPosition: "Member",
    name: "Mr. V. N. Datta",
    designation: "Advisor, TEG",
  },
  {
    section: "",
    no: 9,
    councilPosition: "Convenor",
    name: "Dr. Vinita Gaikwad",
    designation: "Director, TIMSCDR",
  },
  {
    section: "",
    no: 10,
    councilPosition: "Member",
    name: "Mr. Pankaj Mudholkar",
    designation: "Dy. Director, TIMSCDR",
  },
  {
    section: "",
    no: 11,
    councilPosition: "Member",
    name: "Ms. Sonu Gupta",
    designation: "MR, TIMSCDR",
  },
  {
    section: "",
    no: 12,
    councilPosition: "Member",
    name: "Ms. Aprajita Singh",
    designation: "HoD Academics, TIMSCDR",
  },
  {
    section: "",
    no: 13,
    councilPosition: "Member",
    name: "Mr. Brijesh Pandey",
    designation: "TPO, TIMSCDR",
  }
],
  "A.Y. 2018-19": [
  {
    section: "",
    no: 1,
    councilPosition: "Member",
    name: "Dr Suresh Ukarande",
    designation: "Dean (Technology UoM) & Principal – K. J. Somaiya Institute of Engg. & Information Technology",
  },
  {
    section: "",
    no: 2,
    councilPosition: "Member",
    name: "Mr. Sanjay Kimbahune",
    designation: "Senior Scientist and Consultant, TCS",
  },
  {
    section: "",
    no: 3,
    councilPosition: "Member",
    name: "Mr. Sudhanshu Ojha",
    designation: "GM-D-link Academy, SAARC & NetProtect D-Link India Ltd.",
  },
  {
    section: "",
    no: 4,
    councilPosition: "Member",
    name: "Mr. Dyneshwar Kambli",
    designation: "Consultant, TCS",
  },
  {
    section: "",
    no: 5,
    councilPosition: "Member",
    name: "Mr. Bharat Mandot",
    designation: "Co Founder at Jhakaas Technologies Private Limited",
  },
  {
    section: "",
    no: 6,
    councilPosition: "Member",
    name: "Mr. Apurb Sinha",
    designation: "Head – CRM and Analytics (APAC), Invesco",
  },
  {
    section: "",
    no: 7,
    councilPosition: "Member",
    name: "Ms. Suman Pai",
    designation: "Examiner, IMC, RBNQA",
  },
  {
    section: "",
    no: 8,
    councilPosition: "Member",
    name: "Mr. Vishwajeet Sukhija",
    designation: "Account Executive, Microsoft",
  },
  {
    section: "",
    no: 9,
    councilPosition: "Member",
    name: "Mr. Hemant Kale",
    designation: "Inspector of Police – Anti Terrorist Squad",
  },
  {
    section: "",
    no: 10,
    councilPosition: "Member",
    name: "Mr. V. N. Datta",
    designation: "Advisor, TEG",
  },
  {
    section: "",
    no: 11,
    councilPosition: "Convener",
    name: "Dr. Vinita Gaikwad",
    designation: "Director, TIMSCDR",
  },
  {
    section: "",
    no: 12,
    councilPosition: "Member",
    name: "Mr. Pankaj Mudholkar",
    designation: "Dy. Director, TIMSCDR",
  },
  {
    section: "",
    no: 13,
    councilPosition: "Member",
    name: "Ms. Sonu Gupta",
    designation: "MR, TIMSCDR",
  },
  {
    section: "",
    no: 14,
    councilPosition: "Member",
    name: "Ms. Aprajita Singh",
    designation: "HoD Academics, TIMSCDR",
  },
  {
    section: "",
    no: 15,
    councilPosition: "Member",
    name: "Mr. Brijesh Pandey",
    designation: "TPO, TIMSCDR",
  }
],
  "A.Y. 2017-18":[
  {
    section: "",
    no: 1,
    councilPosition: "Member",
    name: "Mr. Sudhanshu Ojha",
    designation: "General Manager – D’Link",
  },
  {
    section: "",
    no: 2,
    councilPosition: "Member",
    name: "Mr. Dyneshwar Kambli",
    designation: "Senior Consultant – TCS",
  },
  {
    section: "",
    no: 3,
    councilPosition: "Member",
    name: "Mr. Uday Wankawala",
    designation: "Chief Business Evangelist – Lemon Ideas",
  },
  {
    section: "",
    no: 4,
    councilPosition: "Member",
    name: "Mr. Bharat Mandot",
    designation: "Co Founder – Jhakaas Technologies Pvt. Ltd.",
  },
  {
    section: "",
    no: 5,
    councilPosition: "Convenor",
    name: "Dr. Vinita Gaikwad",
    designation: "Director",
  },
  {
    section: "",
    no: 6,
    councilPosition: "Member",
    name: "Ms. Aprajita Singh",
    designation: "HOD-ACA",
  },
  {
    section: "",
    no: 7,
    councilPosition: "Member",
    name: "Mr. Brijesh Pandey",
    designation: "TPO & Asst. Professor",
  },
  {
    section: "",
    no: 8,
    councilPosition: "Member",
    name: "Mr. Pankaj Mudholkar",
    designation: "Asst. Professor",
  },
  {
    section: "",
    no: 9,
    councilPosition: "Member",
    name: "Ms. Sonu Gupta",
    designation: "Asst. Professor",
  }
],

  /* ... other year's data ... */

  // Add more years and their data here
};

function Advisory() {
  const [showForm, setShowForm] = useState(false);
  const [selectedYear, setSelectedYear] = useState("A.Y. 2023-24");

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
          <h2 className="advisory-head">Members of Advisory Board</h2>

          <div className="tables-container">
            <h3 className="governing-title">Advisory Board - {selectedYear}</h3>
            <AdvisoryTable data={committeeDataByYear[selectedYear]} />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Advisory;
