import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import "./ResultAnalysis.css";
import BrochureForm from "../components/EnquiryForm";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import CTAButtons from "../components/sticky-button";

const ResultAnalysis = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />
      <div className="body-bg">
        <main className="container main-container">
          <div className="main-card">
            <h1 className="heading">Result Analysis</h1>
            <div className="result-list">
              {/* Academic Year 2023-24 */}
              <div className="result-item">
                <div>
                  <h3 className="result-year">Academic Year 2023-24</h3>
                  <p className="result-desc">
                    View the detailed result analysis for the academic year
                    2023-24.
                  </p>
                </div>
                <Link className="result-link" to="/table">
                  View Results
                  <span className="material-icons result-arrow">
                    arrow_forward
                  </span>
                </Link>
              </div>

              {/* Academic Year 2022-23 */}
              <div className="result-item">
                <div>
                  <h3 className="result-year">Academic Year 2022-23</h3>
                  <p className="result-desc">
                    View the detailed result analysis for the academic year
                    2022-23.
                  </p>
                </div>
                <Link className="result-link" to="/table-2022">
                  View Results
                  <span className="material-icons result-arrow">
                    arrow_forward
                  </span>
                </Link>
              </div>

              {/* Academic Year 2021-22 */}
              <div className="result-item">
                <div>
                  <h3 className="result-year">Academic Year 2021-22</h3>
                  <p className="result-desc">
                    View the detailed result analysis for the academic year
                    2021-22.
                  </p>
                </div>
                <Link className="result-link" to="/table-2021">
                  View Results
                  <span className="material-icons result-arrow">
                    arrow_forward
                  </span>
                </Link>
              </div>

              {/* Academic Year 2020-21 */}
              <div className="result-item">
                <div>
                  <h3 className="result-year">Academic Year 2020-21</h3>
                  <p className="result-desc">
                    View the detailed result analysis for the academic year
                    2020-21.
                  </p>
                </div>
                <Link className="result-link" to="/table-2020">
                  View Results
                  <span className="material-icons result-arrow">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default ResultAnalysis;
