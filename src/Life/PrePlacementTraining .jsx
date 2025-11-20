// PrePlacementTraining.jsx
import React, { useState } from "react";
import "./FacultyPrograms.css";
import Footer from "../components/Footer";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Navbar from "../components/navbar";

const prePlacementPrograms = [
  {
    year: "2023-24",
    date: "17/02/2024 to 29/06/2024",
    name: "Mr. Vinay Raikar",
    company: "Campus Credential",
    type: "Pre-Placement Training Session",
  },
  {
    year: "2020-21",
    date: "17/08/2020 to 21/08/2020",
    name: [
      "Ms. Aparna Kulkarni",
      "Ms. Rekha Desai",
      "Mr. Arvind Prabhu",
      "Dr. Suresh Shan",
      "Mr. Akshay Shah",
      "Ms. Juveri Mukherjee",
      "Mr. Apurb Sinha",
      "Mr. Viral Sangvi",
      "Mr. Rakeshkumar Y",
      "Mr. Abhay Naik",
      "Mr. Gaurav Singh",
      "Mr. Sandeep Singh",
      "Mr. Prashant Nair",
      "Mr. Vighanesh Surve",
      "Mr. Vishaldeep Jain",
      "Mr. Nikunj Jakhotia",
    ],
    company: [
      "Tata Communications",
      "Nelito Systems",
      "RaceNext",
      "Mahindra & Mahindra",
      "iWeb Technology Sol.",
      "AurionPro",
      "Invesco Ltd",
      "Nomura India Pvt Ltd",
      "Elevate K-12",
      "1 Pay",
      "Mumbai Monorail",
      "Larsen & Toubro Info.",
      "Willis Towers Watson",
      "Capgemini",
      "Accenture",
    ],
    type: "Mock Virtual Interview Sessions",
  },
  {
    year: "2020-21",
    date: "14/08/2020",
    name: "Ms. Kanupriya Manchanda & Mr. Sunil ManSingh",
    company: "InfoBeans & FactFinder",
    type: "Virtual Interviews – What You Need to Know",
  },
  {
    year: "2020-21",
    date: "07/07/2020",
    name: "Mr. Sanket Prabhu",
    company: "The Turnover Tribe",
    type: "LinkedIn for Job Seekers: Get Noticed, Get Hired",
  },
  {
    year: "2019-20",
    date: "15/06/2020 to 03/10/2020",
    name: "Mr. Apurb Sinha",
    company: "Invesco Ltd",
    type: "Salesforce Training",
  },
  {
    year: "2018-19",
    date: "16/03/2019 to 30/06/2019",
    name: "Mr. Vinay Raikar",
    company: "Campus Credential",
    type: "Pre-Placement Training Programme",
  },
  {
    year: "2017-18",
    date: "24/02/2018 to 30/06/2018",
    name: "Mr. Vinay Raikar",
    company: "Campus Credential",
    type: "Aptitude, CV Building, Group Discussion and Personal Interview",
  },
];

const PrePlacementTraining = () => {
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
        <h2
          style={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#231f54",
            fontSize: "35px",
            marginBottom: "35px"
          }}
        >
          Pre Placement Training
        </h2>
        <div className="conv-table-wrapper">
          <table className="conv-table">
            <thead>
              <tr>
                <th>Year</th>
                <th>Date</th>
                <th>Name</th>
                <th>Company</th>
                <th>Type of Interaction</th>
              </tr>
            </thead>
            <tbody>
              {prePlacementPrograms.map((item, index) => (
                <tr key={index}>
                  <td>{item.year}</td>
                  <td>{item.date}</td>
                  <td>
                    {Array.isArray(item.name)
                      ? item.name.map((n, i) => <div key={i}>{n}</div>)
                      : item.name}
                  </td>
                  <td>
                    {Array.isArray(item.company)
                      ? item.company.map((c, i) => <div key={i}>{c}</div>)
                      : item.company}
                  </td>
                  <td>{item.type}</td>
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

export default PrePlacementTraining;
