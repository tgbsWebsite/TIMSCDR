import React, { useState } from "react";
import Navbar from "../components/navbar";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Footer from "../components/Footer";
import PageHeader from "../about/PageHeader";
export default function AntiRagging() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />
      <div className="anti-container">

        {/* Header */}
        <div className="ari-header">
          <PageHeader
            title="Anti-Ragging"
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Anti-Ragging" },
            ]}
          />

          {/* <div className="ari-emergency-contact">
          <h4>Emergency Helpline</h4>
          <p>Report ragging incidents immediately - Your safety is our priority</p>
        </div> */}
        </div>

        {/* Alert Banner */}
        {/* <div className="ari-alert-banner">
        <div>Ragging is a CRIME</div>
        <p>Any form of ragging is strictly prohibited and punishable by law</p>
      </div> */}

        {/* Grid Section */}
        <div className="ai-main-container">

          <div className="ai-content-wrapper">
            <main className="ai-main-content">


              <section className="ai-section ai-notification-section">
                <div className="ai-section-content-flex">
                  <div className="ai-text-content">
                    <p className="ai-section-text">
                      As per the notification of All India Council for Technical Education (AICTE) dated 25.03.2009 in
                      connection with prevention and prohibition of ragging in technical Institutions, universities
                      including deemed to be universities imparting technical education, notify that:
                    </p>
                    <div className="ai-info-box">
                      <p className="ai-info-text">
                        All the concerned persons are requested to make note that ragging is totally banned and anyone found guilty of ragging and/or abetting ragging is liable to be punished.
                      </p>
                    </div>
                    <div className="ai-links-box">
                      <h3 className="ai-links-title">Links from AICTE</h3>
                      <ul className="ai-links-list">
                        <li>
                          <a href="#" target="_blank" rel="noopener noreferrer" className="ai-link-primary">
                            Procedures and destinations for anti-ragging.
                            <span className="material-symbols-outlined ai-external-link-icon">open_in_new</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <p className="ai-section-text alternate-text">
                      Prevention and prohibition of Ragging in technical Institutions, Universities including/Deemed to be Universities imparting technical education (Notification Dated 01.07.2009).
                    </p>
                  </div>

                  <div className="ai-image-container">
                    <img
                      src="background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuDpsctWlWIJYYd6kQ0-jx_uS5fAs69nyDDUwBS0m1PO9NvkzpE1f5UrASWAwqEtrtFSPGVlnazwHzwG_3OMBZ1YTlR6z-g2dUC9zb5Y17QtQyC86Duei79XxR7xUnpBq1rsJWm_awz_hirDcuhTZsCNnNz27sIGwOF7XLOluw4PS2uF0gCPaPc-DjEPyZbe1NiB8UFKgBSrQSwwZKZIAeDahAENhfD04qeWGXdrGYxfqpOnLeEDaWYPRJyM9OBq6flvCZwE35Mte48D&quot;);"
                      alt="AICTE Logo"
                      className="ai-right-image"
                    />
                  </div>
                </div>
              </section>


              <section className="ai-section ai-maharashtra-act-section">
                <div className="ai-section-title">Maharashtra State Act against ragging</div>
                <p className="ai-section-text font-semibold">
                  Maharashtra Prohibition of Ragging Act 1999 <span className="font-normal">which is in effect from 15th May 1999
                    has the following provisions for Action against Ragging.</span>
                </p>
                <ul className="ai-list">
                  <li>Ragging within or outside of any educational institution is prohibited.</li>
                  <li>
                    Whosoever directly or indirectly commits, participates in, abets, or propagates ragging within or outside any educational institution shall, on conviction, be punished with imprisonment for a term up to 2 years and shall also be liable to a fine of Rs.10,000 and the student
                  </li>
                  <li>
                    Any student convicted of an offence of ragging shall be dismissed from the education for five years from the date of order of such dismissal.
                  </li>
                  <li>
                    Whenever any student or, as the case may be, the parent or guardian or a teacher of an educational institution complains, in writing, of ragging to the head of the educational institution, the head of that educational institution shall, without prejudice to the foregoing provisions, within seven days of the receipt of the complaint, enquire into the matter mentioned in the complaint and if, prima facie, it is found true, suspend the student who is accused of the offence and shall, immediately, forward the complaint to the police station having jurisdiction over the area in which the educational institution is situated, for further action.
                  </li>
                  <li>
                    At the head of the educational institution fails or neglects to act in the manner specified in section 'd' above when a complaint of ragging is made, such person shall be deemed to have abetted the offence and shall, on conviction, be punished as provided for in section 'b' above.
                  </li>
                </ul>
                <p className="ai-section-text font-bold">MAHARASHTRA ACT NO. XXXIII OF 1999.</p>
              </section>

              <section className="ai-section ai-ragging-prevention-section">
                <div className="ai-section-title">Ragging Prevention at TIMSCDR</div>
                <ul className="ai-list">
                  <li>Anti-ragging Squad is constituted at our Institute.</li>
                  <li>We have Telephone Nos. of individual members put on College Notice Board. In case of any emergency student can contact the authority.</li>
                  <li>Wardens/care-staff members are doing the necessary counseling.</li>
                </ul>
                <button className="ai-report-button">REPORT INCIDENT</button>
              </section>
            </main>

          </div>
        </div>

        {/* Anti-Ragging Squad */}
        <div className="ari-table-container">
          <h3>Anti-Ragging Squad</h3>
          <div className="conv-table-wrapper">
            <table className="conv-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dr. Vinita Gaikwad</td>
                  <td>Director</td>
                  <td>Squad Leader</td>
                </tr>
                <tr>
                  <td>Mr. Shirshendu Maitra</td>
                  <td>Assistant Professor & HOD-ACA</td>
                  <td>Academic Coordinator</td>
                </tr>
                <tr>
                  <td>Ms. Rohini Bagul</td>
                  <td>Assistant Professor</td>
                  <td>Faculty Representative</td>
                </tr>
                <tr>
                  <td>Mr. Shailesh Sharma</td>
                  <td>Head Clerk</td>
                  <td>Administrative Support</td>
                </tr>
                <tr>
                  <td>Ms. Gupta Jyoti Chandrakant</td>
                  <td>Second Year Student</td>
                  <td>Student Representative</td>
                </tr>
                <tr>
                  <td>Mr. Singh Saurabh Suryanath</td>
                  <td>Second Year Student</td>
                  <td>Student Representative</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Anti-Ragging Committee */}
        <div className="ari-table-container">
          <h3>Anti-Ragging Committee</h3>
          <p className="ari-committee-note">
            The 'Anti Ragging Committee' is constituted with the following members
            for the academic year 2023-24
          </p>
          <div className="conv-table-wrapper">
            <table className="conv-table">
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>Member</th>
                  <th>Designation</th>
                  <th>Position as per AICTE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Dr. Vinita Gaikwad</td>
                  <td>Director</td>
                  <td>Head of the Institute</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Mr. Narayan Patil</td>
                  <td>Head Constable, Mumbai Police</td>
                  <td>Police Administration</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Mr. Wasim Sheikh</td>
                  <td>Journalist (HT)</td>
                  <td>Local Media</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Dr. Sangeeta Shirname</td>
                  <td>Socialist (Inseed NGO)</td>
                  <td>Non Government Organization</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Ms. Rupali Jadhav</td>
                  <td>Asst. Professor</td>
                  <td>Faculty Members</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Mr. Shirshendu Maitra</td>
                  <td>Asst. Professor</td>
                  <td>Faculty Members</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Mr. Vijay Chaudhari</td>
                  <td>Retd. Assistant Sub Inspector</td>
                  <td>Parents</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Mr. Ashok Salunkhe</td>
                  <td>Creative Manager, Ascent Meditech</td>
                  <td>Parents</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Mr. Nikhil Chaudhari</td>
                  <td>2nd Year student</td>
                  <td>Students</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Ms. Riddhi Kesharwani</td>
                  <td>2nd Year student</td>
                  <td>Students</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Mr. Alok Singh</td>
                  <td>Hostel Warden</td>
                  <td>Hostel</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Mr. Shailesh Sharma</td>
                  <td>Head Clerk (Secretary)</td>
                  <td>Non – teaching staff</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Mr. Prashant Satam</td>
                  <td>Sr. Clerk</td>
                  <td>Non – teaching staff</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}
