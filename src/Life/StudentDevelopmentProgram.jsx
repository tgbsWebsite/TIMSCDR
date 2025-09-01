import React, { useState } from "react";
import Footer from "../components/Footer";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Navbar from "../components/navbar";

const programs = [
  // ==== 2023-24 ====
  {
    year: "2023-24",
    date: "02/09/2023",
    name: "Ms. Radha Singh",
    org: "Business HR Partner – West/ Corporate & Lead",
    program: "Beyond Coding: Essential Skills for a Fruitful Career",
  },
  {
    year: "2023-24",
    date: "",
    name: "Mr. Dyneshwar Kamble",
    org: "IP Consulting, Valuation and Commercialization and Indian Patent Agent",
    program: "IPR Awareness",
  },
  {
    year: "2023-24",
    date: "01/09/2023",
    name: "Ms. Jyoti Agrawal",
    org: "Founder of Maa2Mom, Community Leader, Investor, Business Advisor, Marketing Consultant",
    program: "Entrepreneurship Seminar",
  },
  {
    year: "2023-24",
    date: "",
    name: "Ms. Namrata Thakker",
    org: "Founder Entrepreneurs Excel",
    program: "",
  },
  {
    year: "2023-24",
    date: "",
    name: "Ms. Gunjali",
    org: "Founder & CMO at Flashaid",
    program: "",
  },
  {
    year: "2023-24",
    date: "31/08/2023",
    name: "Mr. Pratik Salunke",
    org: "Sahajayoga Meditation Practitioner, Operational Risk Manager in L&T",
    program: "Work life balance through Sahajayoga Meditation",
  },
  {
    year: "2023-24",
    date: "",
    name: "Mr. Pratik Salunke",
    org: "Sahajayoga Meditation Practitioner, Operational Risk Manager in L&T",
    program: "Work life balance through Sahajayoga Meditation",
  },
  {
    year: "2023-24",
    date: "",
    name: "Mr. Arun Singh",
    org: "Financial Advisor at Guide Wealth Management",
    program: "Importance of Early Investment",
  },
  {
    year: "2023-24",
    date: "30/08/2023",
    name: "Dr. Mukesh Gupta",
    org: "Founder director LeNest, Chairperson Media Communication cell, Past President AMC.",
    program: "Health Session",
  },
  {
    year: "2023-24",
    date: "29/08/2023",
    name: "Mr. Sachit Kumar",
    org: "VP Engineering, Homeville Group",
    program:
      "Your Future in Tech: Discovering Exciting Computer Science Careers",
  },
  {
    year: "2023-24",
    date: "",
    name: "Mr. Shihan Sachin Chavan",
    org: "Founder, CEO and Chief Facilitator at Business Enterprises in Martial arts, Wellness and Tourism Industry",
    program: "Self Defense",
  },
  {
    year: "2023-24",
    date: "28/08/2023",
    name: "Ms. Sheetal Panchal",
    org: "Nutritionist and Fitness Consultant",
    program: "Health 360 – Nutrition & wellness",
  },
  {
    year: "2023-24",
    date: "",
    name: "Mr. Atul Raijoli",
    org: "Founder of Lakshyavedh Institute of Leadership and excellence",
    program: "Positivity to achieve your Goals",
  },
  {
    year: "2023-24",
    date: "",
    name: "Ms. Surabhi Chavan",
    org: "Amazon Prime Video",
    program: "Navigating your journey to the Corporate World",
  },

  // ==== 2022-23 ====
  {
    year: "2022-23",
    date: "11/02/2023",
    name: "Mr. Balu Agre",
    org: "Infinity Solutions Laboratories",
    program: "Soil organic Carbon",
  },
  {
    year: "2022-23",
    date: "",
    name: "Dr. Amitava Rakshit",
    org: "Institute of Agricultural Science, Banaras Hindu University, UP-221005, India",
    program:
      "Societal relevance of soil health in defining ecosystem services that contribute to the UN sustainable development goals",
  },
  {
    year: "2022-23",
    date: "",
    name: "Mr. Chandrashekhar H. Bhadsavle",
    org: "Krishi Bhushan. Founder and Managing Trustee – Saguna Rural Foundation",
    program: "Practical carbon sequestration through agriculture",
  },
  {
    year: "2022-23",
    date: "",
    name: "Mr. Vikram Bansal",
    org: "Zerosum Technologies Pvt Ltd",
    program: "Use of Drone Technology",
  },
  {
    year: "2022-23",
    date: "09/02/2023",
    name: "Dr. Gaurav Batra",
    org: "Founder & CEO, CyberFrat",
    program: "Sensor Technology for Curbing Global Warming",
  },
  {
    year: "2022-23",
    date: "25/01/2023",
    name: "Mr. Gorakshanath Upadhyay",
    org: "Sr. Training Manager West India EBSCO Information service",
    program:
      "Developing learning & research skills USING IEEE Xplore® digital library & EBSCO Ebooks",
  },
  {
    year: "2022-23",
    date: "20/01/2023",
    name: "Dr. Yelloji Mirajkar",
    org: "GIST",
    program: "Aahar Kranti",
  },
  {
    year: "2022-23",
    date: "19/01/2023",
    name: "Mr. Arun Singh",
    org: "",
    program: "Financial Literacy",
  },

  // ==== 2021-22 ====
  {
    year: "2021-22",
    date: "11/02/2022",
    name: "Ms. Megha Mudholkar",
    org: "TIMSCDR",
    program: "Basic IoT Workshop",
  },
  {
    year: "2021-22",
    date: "09/02/2022",
    name: "Ms. Rohini Bagul",
    org: "TIMSCDR",
    program: "Workshop on Block Chain Technology",
  },
  {
    year: "2021-22",
    date: "27–31/12/2021",
    name: "Mr. Shirshendu Maitra",
    org: "Spoken Tutorial, IIT Bombay",
    program: "Java Programming",
  },

  // ==== 2020-21 ====
  {
    year: "2020-21",
    date: "16–18/02/2021",
    name: "Ms. Megha Mudholkar",
    org: "TIMSCDR",
    program: "Basic IoT Workshop",
  },
  {
    year: "2020-21",
    date: "17–18/02/2021",
    name: "Dr. Rajesh Kapur and Mr. Shirshendu Maitra",
    org: "TIMSCDR",
    program: "R Programming Workshop",
  },

  // ==== 2019-20 ====
  {
    year: "2019-20",
    date: "05–06/02/2020",
    name: "Dr. Rajesh Kapur and Mr. Shirshendu Maitra",
    org: "TIMSCDR",
    program: "R Programming Workshop",
  },
  {
    year: "2019-20",
    date: "03–04 & 07/02/2020",
    name: "Ms. Megha Mudholkar",
    org: "TIMSCDR",
    program: "Basic IoT Workshop",
  },

  // ==== 2018-19 ====
  {
    year: "2018-19",
    date: "11–15/02/2019",
    name: "Ms. Megha Mudholkar",
    org: "TIMSCDR",
    program: "Basic and Advanced IoT Workshop",
  },

  // ==== 2017-18 ====
  {
    year: "2017-18",
    date: "08–09 & 14–15/02/2018",
    name: "Ms. Megha Mudholkar & Mr. Gajendra Dixit",
    org: "TIMSCDR",
    program: "Basic and Advanced Internet of Things",
  },
  {
    year: "2017-18",
    date: "24–30/06/2018",
    name: "Mr. Vinay Raikar",
    org: "Campus Credential",
    program: "Aptitude, CV Building, Group Discussion and Personal Interview",
  },

  // ==== 2016-17 ====
  {
    year: "2016-17",
    date: "21/01/2017 to 05/08/2017",
    name: "Mr. Vinay Raikar",
    org: "Campus Credential",
    program: "Aptitude, CV Building, Group Discussion and Personal Interview",
  },
  {
    year: "2016-17",
    date: "13/02/2017 to 16/02/2017",
    name: "Ms. Megha Mudholkar & Mr. Gajendra Dixit",
    org: "TIMSCDR",
    program: "Basic and Advanced Internet of Things",
  },

  // ==== 2015-16 ====
  {
    year: "2015-16",
    date: "27/02/2016 to 31/07/2016",
    name: "Mr. Vinay Raikar",
    org: "Campus Credential",
    program: "Aptitude, CV Building, Group Discussion and Personal Interview",
  },

  // ==== 2014-15 ====
  {
    year: "2014-15",
    date: "19/08/2014 – 09/05/2014",
    name: "Ms. Megha Kapil",
    org: "Oracle",
    program: "Interview Preparation and Resume Building",
  },
  {
    year: "2014-15",
    date: "03/02/2015",
    name: "Mr. Chirag Thakkar",
    org: "Smartwayz",
    program: "Aptitude & Soft Skills",
  },

  // ==== 2013-14 ====
  {
    year: "2013-14",
    date: "03/06/2013",
    name: "Mr. Tejas Hoskatti",
    org: "Taiijas Infotech Pvt. Ltd.",
    program: "Introduction to Android, Architecture",
  },
  {
    year: "2013-14",
    date: "04/06/2013",
    name: "",
    org: "",
    program:
      "Basics of Android Application, working with Android user Interfaces",
  },
  {
    year: "2013-14",
    date: "05/06/2013",
    name: "",
    org: "",
    program: "File management in android",
  },
  {
    year: "2013-14",
    date: "06/06/2013",
    name: "",
    org: "",
    program: "Working with multimedia objects",
  },
  {
    year: "2013-14",
    date: "07/06/2013",
    name: "",
    org: "",
    program: "Working with real-time application scenarios",
  },
  {
    year: "2013-14",
    date: "10–12/09/2013",
    name: "Mr. Chirag Thakkar",
    org: "Smartwayz",
    program: "Aptitude",
  },
  { year: "2013-14", date: "01/02/2014", name: "", org: "", program: "" },
  { year: "2013-14", date: "15/02/2014", name: "", org: "", program: "" },
  { year: "2013-14", date: "01/03/2014", name: "", org: "", program: "" },
  { year: "2013-14", date: "15/03/2014", name: "", org: "", program: "" },
  { year: "2013-14", date: "05/04/2014", name: "", org: "", program: "" },
  { year: "2013-14", date: "12/04/2014", name: "", org: "", program: "" },

  // ==== 2012-13 ====
  {
    year: "2012-13",
    date: "02/07/2012",
    name: "Dr. Mikkilineni Narasimha",
    org: "Career Path Solution Pvt. Ltd.",
    program: "Aptitude Test Training",
  },
  { year: "2012-13", date: "03/07/2012", name: "", org: "", program: "" },
  { year: "2012-13", date: "04/07/2012", name: "", org: "", program: "" },
  { year: "2012-13", date: "05/07/2012", name: "", org: "", program: "" },
  { year: "2012-13", date: "07/07/2012", name: "", org: "", program: "" },
  {
    year: "2012-13",
    date: "29–31/10/2012",
    name: "Mr. Sharad",
    org: "Seed Infotech",
    program: "Interview Skills",
  },
  {
    year: "2012-13",
    date: "",
    name: "",
    org: "",
    program: "Introduction to Android",
  },
  {
    year: "2012-13",
    date: "",
    name: "",
    org: "",
    program: "Software Testing",
  },
];

const StudentDevelopmentProgram = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />
            <div
        style={{
          padding: "2.5rem 3rem",
          margin: "10rem auto 2rem auto",
          // maxWidth: "1200px",
        }}
      >
        {/* Page Heading */}
        <h1      style={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#231f54",
            fontSize: "35px",
            marginBottom: "35px"
          }}>Student Development Program</h1>

        {/* Table */}
        <div className="conv-table-wrapper">
          <table className="conv-table">
            <thead>
              <tr>
                <th>Year</th>
                <th>Date</th>
                <th>Name</th>
                <th>Organization</th>
                <th>Program Conducted</th>
              </tr>
            </thead>
            <tbody>
              {programs.map((item, index) => (
                <tr key={index}>
                  <td>{item.year}</td>
                  <td>{item.date}</td>
                  <td>{item.name}</td>
                  <td>{item.org}</td>
                  <td>{item.program}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StudentDevelopmentProgram;
