import React,{useState} from "react";
import Footer from "../components/Footer";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Navbar from "../components/navbar";
import "./table-styles.css"; // your existing conv-table css

const LibraryCommittee = () => {
      const [showForm, setShowForm] = useState(false);
    
  return (
        <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />
    <section className="library-container-rules">
      <h1 className="heading">Library Committee</h1>

      <div className="conv-table-wrapper">
        <table className="conv-table">
          <thead>
            <tr>
              <th scope="col" style={{ width: "12%" }}>Sr. No</th>
              <th scope="col" style={{ width: "34%" }}>Name</th>
              <th scope="col" style={{ width: "24%" }}>Designation</th>
              <th scope="col" style={{ width: "30%" }}>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Dr. Vinita&nbsp;Gaikwad</td>
              <td>Director</td>
              <td>Chairperson</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Ms. Kiran&nbsp;Dubey</td>
              <td>Librarian</td>
              <td>Member – Secretary</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Mr. Shirshendu Maitra</td>
              <td>Asst. Professor &amp; HoD – ACA</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Ms. Rupali Jadhav</td>
              <td>Asst. Professor &amp; IQAC Coordinator</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Ms. Kinjal Doshi</td>
              <td>Asst. Professor</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Mr. Ankit Dhotre</td>
              <td>Sem II Batch A</td>
              <td>Student Representative</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Ms. Riya Maurya</td>
              <td>Sem II Batch B</td>
              <td>Student Representative</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Ms. Prerna Sharma</td>
              <td>Sem II Batch C</td>
              <td>Student Representative</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Mr. Amit Tiwari</td>
              <td>Sem II Batch D</td>
              <td>Student Representative</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default LibraryCommittee;
