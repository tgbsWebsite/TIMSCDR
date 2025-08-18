import React from "react";
import "./noticeboard.css";

const NoticeBoard = () => {
  return (
    <div className="page-wrapper">
      {/* Header */}

      {/* Main Section */}
      <main className="main">
        <div className="heading">
          <h2>Notice Board</h2>
          <p>Latest updates, announcements, and examination schedules.</p>
          <div className="divider"></div>
        </div>

        <div className="notice-box">
          <ul className="notice-list">
            <li>
              <span className="material-icons icon">campaign</span>
              <div>
                <a href="#">
                  Common Entrance Test (CET) for M.M.S./M.C.A./M.Arch/M.HMCT
                  Examination.
                </a>
                <p>Published: 2023-10-26</p>
              </div>
            </li>

            <li>
              <span className="material-icons icon">campaign</span>
              <div>
                <a href="#">
                  Admission to First Year Degree Course in Engineering &
                  Technology for A.Y. 2023-24.
                </a>
                <p>Published: 2023-10-25</p>
              </div>
            </li>

            <li>
              <span className="material-icons icon">campaign</span>
              <div>
                <a href="#">
                  Notice for Students for admission for M.M.S. & M.C.A. courses.
                </a>
                <p>Published: 2023-10-24</p>
              </div>
            </li>

            <li>
              <span className="material-icons icon">campaign</span>
              <div>
                <a href="#">
                  Circular for MHT-CET 2023 for admission to professional
                  courses.
                </a>
                <p>Published: 2023-10-23</p>
              </div>
            </li>

            <li>
              <span className="material-icons icon">campaign</span>
              <div>
                <a href="#">
                  Examination form for B.E Sem-IV (CBCS) Regular Exam for 2nd
                  Half 2023.
                </a>
                <p>Published: 2023-10-22</p>
              </div>
            </li>
          </ul>

          <div className="btn-center">
            <button className="load-btn">Load More Notices</button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div>
            <h3>About TIMSCDR</h3>
            <p>
              An ISO 9001:2015 Certified Institute committed to providing
              quality education and fostering research and development.
            </p>
            <div className="social-icons">
              <a href="#">
                <span className="material-icons">facebook</span>
              </a>
              <a href="#">
                <span className="material-icons">ondemand_video</span>
              </a>
              <a href="#">
                <span className="material-icons">school</span>
              </a>
            </div>
          </div>

          <div>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">
                  <span className="material-icons">chevron_right</span> Home
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="material-icons">chevron_right</span> About Us
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="material-icons">chevron_right</span> Courses
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="material-icons">chevron_right</span> Faculty
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="material-icons">chevron_right</span>{" "}
                  Mandatory Disclosure
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Contact Us</h3>
            <ul>
              <li>
                <span className="material-icons">location_on</span>
                Thakur Educational Campus, Kandivali (East), Mumbai - 400 101.
              </li>
              <li>
                <span className="material-icons">phone</span>
                <a href="tel:022-67308101">022-67308101/02</a>
              </li>
              <li>
                <span className="material-icons">email</span>
                <a href="mailto:timscdr@education.org">timscdr@education.org</a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Our Location</h3>
            <div className="map-box">
              <p>Map Placeholder</p>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>
            © 2024 THAKUR INSTITUTE OF MANAGEMENT STUDIES, CAREER DEVELOPMENT &
            RESEARCH. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NoticeBoard;
