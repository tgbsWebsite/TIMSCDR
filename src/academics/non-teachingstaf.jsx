import React, { useState } from 'react';
import "../components/table.css";
import Footer from '../components/Footer';
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Navbar from "../components/navbar";

const  Nonteachingfacult = () => {
  const staffData = [
    { srNo: 1, name: "Ms. Karishmma V. Singh", designation: "CEO", qualification: "MBA" },
    { srNo: 2, name: "Mr. V. N. Datta", designation: "Advisor", qualification: "B. Sc (Physics)" },
    { srNo: 3, name: "Ms. Kiran Dubey", designation: "Librarian", qualification: "M.Phil, M.Lib" },
    { srNo: 4, name: "Mr. Shailesh Sharma", designation: "Head Clerk", qualification: "B. Com" },
    { srNo: 5, name: "Mr. Abhinav Sharma", designation: "Accountant", qualification: "B.Com" },
    { srNo: 6, name: "Ms. Vanshika Mirchandani", designation: "Steno-typist", qualification: "B.Com, DBM" },
    { srNo: 7, name: "Mr. Prashant Satam", designation: "Sr. Clerk", qualification: "B.Com" },
    { srNo: 8, name: "Ms. Pritam Rane", designation: "Sr. Clerk", qualification: "B.Com" },
    { srNo: 9, name: "Mr. Vilas Shinde", designation: "DTP Operator", qualification: "H.S.C" },
    { srNo: 10, name: "Mr. Mayur Pawar", designation: "DTP Operator", qualification: "B.C.A." },
    { srNo: 11, name: "Ms. Mansi Desai", designation: "Receptionist", qualification: "F.Y.B.Com" },
    { srNo: 12, name: "Mr. Surendra Arya", designation: "Driver", qualification: "" },
    { srNo: 13, name: "Mr. Ajay Singh", designation: "Lab. Attendant", qualification: "B.A., Diploma in Hardware & Networking" },
    { srNo: 14, name: "Mr. Arvind Kumar", designation: "Lab. Attendant", qualification: "SSC" },
    { srNo: 15, name: "Mr. Vikram Baria", designation: "Peon", qualification: "9th" },
    { srNo: 16, name: "Mr. Ashok K. Prasad", designation: "Peon", qualification: "SSC" },
    { srNo: 17, name: "Mr. Mahavir Misale", designation: "Peon", qualification: "F.Y. B.A." },
    { srNo: 18, name: "Mr. Mukesh Singh", designation: "Peon", qualification: "HSC" },
    { srNo: 19, name: "Mr. Eknath Desai", designation: "Sweeper", qualification: "9th " },
    { srNo: 20, name: "Ms. Pushpa Waghela", designation: "Sweeper", qualification: "7th" },
    { srNo: 21, name: "Ms. Deepmala Patil", designation: "Sweeper", qualification: "9th" },
  ];

  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />

      <main className="main-container">
        <h1 className="heading">List of Staff Members</h1>
        <div className="tables-container">
        
          <div className="table-container">
            <table className="responsive-table">
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>Name of the member of staff</th>
                  <th>Designation</th>
                  <th>Academic Qualification</th>
                </tr>
              </thead>
              <tbody>
                {staffData.map((staff) => (
                  <tr key={staff.srNo}>
                    <td>{staff.srNo}</td>
                    <td>{staff.name}</td>
                    <td>{staff.designation}</td>
                    <td>{staff.qualification}</td>
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
export default Nonteachingfacult;