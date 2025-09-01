import React, { useState } from 'react';
import "../components/table.css";
import Footer from '../components/Footer';
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Navbar from "../components/navbar";

const FacultyTable = () => {
  const facultyData = [
    {
      srNo: 1,
      name: "Ms. Sonu Gupta",
      designation: "Deputy Director, TPO",
      qualification: "M.C.A.",
      dateOfJoining: "07/07/2005",
      universityApprovalStatus: "In Process",
      timscdrExperience: "19 Years",
      totalExperience: "20 Years"
    },
    {
      srNo: 2,
      name: "Dr. Rajesh Kapur",
      designation: "Professor",
      qualification: "M.Tech, PhD",
      dateOfJoining: "13/05/2024",
      universityApprovalStatus: "Temporary",
      timscdrExperience: "6 Months",
      totalExperience: "38 Years"
    },
    {
      srNo: 3,
      name: "Dr. Ashwini Renavikar",
      designation: "Professor",
      qualification: "MCA, PhD",
      dateOfJoining: "09/07/2024",
      universityApprovalStatus: "In Process",
      timscdrExperience: "4 Months",
      totalExperience: "20 Years"
    },
    {
      srNo: 4,
      name: "Dr. Padma Mishra",
      designation: "Associate Professor",
      qualification: "MCA, PhD",
      dateOfJoining: "12/10/2021",
      universityApprovalStatus: "In Process",
      timscdrExperience: "3 Years",
      totalExperience: "8 Years"
    },
    {
      srNo: 5,
      name: "Dr. Sonal Sharma",
      designation: "Associate Professor",
      qualification: "Msc(IT), PhD",
      dateOfJoining: "12/09/2024",
      universityApprovalStatus: "In Process",
      timscdrExperience: "2 Months",
      totalExperience: "17 Years"
    },
    {
      srNo: 6,
      name: "Ms. Rashmi Vipat",
      designation: "Assistant Professor, Exam Incharge",
      qualification: "MCA",
      dateOfJoining: "02/07/2007",
      universityApprovalStatus: "Approved",
      timscdrExperience: "17 Years",
      totalExperience: "19 Years"
    },
    {
      srNo: 7,
      name: "Mr. Shirshendu Maitra",
      designation: "HoD Academic",
      qualification: "MBA & MCA",
      dateOfJoining: "01/09/2009",
      universityApprovalStatus: "Approved",
      timscdrExperience: "15 Years",
      totalExperience: "19 Years"
    },
    {
      srNo: 8,
      name: "Ms. Aprajita Singh",
      designation: "Assistant Professor",
      qualification: "MCA",
      dateOfJoining: "14/07/2008",
      universityApprovalStatus: "Approved",
      timscdrExperience: "16 Years",
      totalExperience: "22 Years"
    },
    {
      srNo: 9,
      name: "Ms. Rupali Jadhav.",
      designation: "Assistant Professor",
      qualification: "MCA",
      dateOfJoining: "17/08/2010",
      universityApprovalStatus: "Approved",
      timscdrExperience: "14 Years",
      totalExperience: "17 Years"
    },
    {
      srNo: 10,
      name: "Mr. Brijesh Kumar Pandey",
      designation: "Assistant Professor",
      qualification: "MCA,MBA(HR)",
      dateOfJoining: "05/07/2012",
      universityApprovalStatus: "Approved",
      timscdrExperience: "12 Years",
      totalExperience: "18 Years"
    },
    {
      srNo: 11,
      name: "Ms. Kinjal Doshi",
      designation: "Assistant Professor",
      qualification: "MCA",
      dateOfJoining: "08/07/2019",
      universityApprovalStatus: "In Process",
      timscdrExperience: "7 Years",
      totalExperience: "13 Years"
    },
    {
      srNo: 12,
      name: "Ms. Anamika Dhawan",
      designation: "Assistant Professor",
      qualification: "MCA",
      dateOfJoining: "15/02/2021",
      universityApprovalStatus: "In Process",
      timscdrExperience: "3 Years",
      totalExperience: "3 Years"
    },
    {
      srNo: 13,
      name: "Ms. Rohini Bagul",
      designation: "Assistant Professor",
      qualification: "MCA",
      dateOfJoining: "15/02/2021",
      universityApprovalStatus: "In Process",
      timscdrExperience: "3 Years",
      totalExperience: "5 Years"
    },
    {
      srNo: 14,
      name: "Ms. Shweta M Waghmare",
      designation: "Assistant Professor",
      qualification: "MCA",
      dateOfJoining: "15/02/2021",
      universityApprovalStatus: "In Process",
      timscdrExperience: "3 Years",
      totalExperience: "4 Years"
    },
    {
      srNo: 15,
      name: "Ms. Thara C",
      designation: "Assistant Professor",
      qualification: "MCA",
      dateOfJoining: "15/02/2021",
      universityApprovalStatus: "In Process",
      timscdrExperience: "3 Years",
      totalExperience: "3 Years"
    },
    {
      srNo: 16,
      name: "Dr. Shiksha Dubey",
      designation: "Assistant Professor",
      qualification: "Msc(IT), PhD",
      dateOfJoining: "23/01/2024",
      universityApprovalStatus: "In Process",
      timscdrExperience: "10 Months",
      totalExperience: "5 Years"
    },
    {
      srNo: 17,
      name: "Mr. Santosh Jain",
      designation: "Assistant Professor",
      qualification: "MCA",
      dateOfJoining: "07/02/2024",
      universityApprovalStatus: "In Process",
      timscdrExperience: "8 Months",
      totalExperience: "2 Years"
    },
    {
      srNo: 18,
      name: "Ms. Rani Singh",
      designation: "Associate Professor of Practice",
      qualification: "MSC",
      dateOfJoining: "13/02/2024",
      universityApprovalStatus: "Temporary",
      timscdrExperience: "8 Months",
      totalExperience: "19 Years"
    },
    {
      srNo: 19,
      name: "Ms. Alifiya Mustaque Shaikh",
      designation: "Assistant Professor",
      qualification: "MSC",
      dateOfJoining: "11/04/2022",
      universityApprovalStatus: "Temporary",
      timscdrExperience: "2 Years",
      totalExperience: "2 Years"
    },
    {
      srNo: 20,
      name: "Ms. Mira Gohil",
      designation: "Assistant Professor",
      qualification: "MCA, M.Phill",
      dateOfJoining: "06/09/2023",
      universityApprovalStatus: "Temporary",
      timscdrExperience: "1 Year",
      totalExperience: "13 Years"
    },
    {
      srNo: 21,
      name: "Ms. Susmitha Mary",
      designation: "Assistant Professor",
      qualification: "MCA",
      dateOfJoining: "15/02/2024",
      universityApprovalStatus: "Temporary",
      timscdrExperience: "8 Months",
      totalExperience: "3 Years"
    },
    {
      srNo: 22,
      name: "Mr. Shubham Mishra",
      designation: "Assistant Professor",
      qualification: "MCA",
      dateOfJoining: "11/03/2024",
      universityApprovalStatus: "Temporary",
      timscdrExperience: "7 Months",
      totalExperience: "1 Year"
    }
  ];
  

  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />

      <main className="main-container">

        <div className="tables-container">
          <h1 className="heading">List of Faculty Members</h1>

          <div className="table-container">
            <table className="responsive-table">
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>Name of the Teacher</th>
                  <th>Designation</th>
                  <th>Qualification</th>
                  <th>Date of Joining</th>
                  <th>University Approval Status</th>
                  <th>TIMSCDR Experience</th>
                  <th>Total Experience</th>
                </tr>
              </thead>
              <tbody>
                {facultyData.map((faculty) => (
                  <tr key={faculty.srNo}>
                    <td>{faculty.srNo}</td>
                    <td>{faculty.name}</td>
                    <td>{faculty.designation}</td>
                    <td>{faculty.qualification}</td>
                    <td>{faculty.dateOfJoining}</td>
                    <td>{faculty.universityApprovalStatus}</td>
                    <td>{faculty.timscdrExperience}</td>
                    <td>{faculty.totalExperience}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default FacultyTable;
