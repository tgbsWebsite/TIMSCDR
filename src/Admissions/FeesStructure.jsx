import react, { useState } from "react";
import Footer from "../components/Footer";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Navbar from "../components/navbar";

const FeesStructure = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />
      <div className="container-fs">
        {/* Header */}
        <h2 className="heading">Fees Structure</h2>
        {/* Main Content */}
        <div className="main-content">
          {/* Left Column */}
          <div className="left-column">
            {/* Fees Details */}
            <div className="content-card">
              <h2 className="section-title">Fees Details (शुल्क विवरण)</h2>
              <hr />
              <p className="fees-description">
                Explore the MCA course duration and fees at TIMSCDR here. The
                Mumbai University MCA fees, inclusive of various charges, ensure
                accessibility to quality education, with provisions for refunds
                and financial assistance available for eligible students.
                TIMSCDR, is one of the top 10 colleges for MCA in Mumbai with
                fees approved by FRA (Fee Regulating Authority). Below is the
                approved Master in Computer Application fees for the A.Y.
                2025-26 by Fee Regulating Authority, M.S. for 1st year Students.
              </p>

              <div className="conv-table-wrapper">
                <table className="conv-table">
                  <thead>
                    <tr>
                      <th>Sr. No.</th>
                      <th>Particulars</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <strong>Tuition fees</strong>
                        <span className="th-subtext">(शिक्षण शुल्क)</span>
                      </td>
                      <td>
                        1,39,130/-
                        <span className="th-subtext">(१,३९,१३०/-)</span>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <strong>Development fees</strong>
                        <span className="th-subtext">(विकास शुल्क)</span>
                      </td>
                      <td>
                        20,870/-
                        <span className="th-subtext">(२०,८७०/-)</span>
                      </td>
                    </tr>
                    <tr className="total-row">
                      <td colSpan="2" style={{ textAlign: "center" }}>
                        <strong>Total Fees</strong>
                        <span className="th-subtext">(एकूण/कुल शुल्क)</span>
                      </td>
                      <td>
                        <strong>1,60,000/-</strong>
                        <span className="th-subtext">(१,६०,०००/-)</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Fee Refund Policy */}
            <div className="content-card">
              <h2 className="section-title">Fee Refund Policy</h2>
              <hr />
              <p className="intro-text">
                Refund of Tuition, Development fees after cancellation of
                admission:
              </p>
              <ol className="policy-list">
                <li>
                  The refund of fees before cut-off date of admission shall be
                  made within two days i.e. total fees minus the processing
                  charges of Rs.1,000/-, or refund rule shall be as per the
                  guidelines of the appropriate authorities or the State
                  Government, as the case may be.
                </li>
                <li>
                  If the admission is cancelled after the cut-off date of
                  admission declared by the Competent authority, there shall be
                  no refund.
                </li>
              </ol>
            </div>

            {/* Financial Assistance */}
            <div className="content-card">
              <h2 className="section-title">Financial Assistance</h2>
              <hr />
              <p className="fees-description">
                Financial Assistance is available as education loan for the
                bonafide students of institute from reputed banks. Interested
                students can utilize the benefit after getting admission to the
                course. Fee is chargeable per annum and is subject to revision
                from time to time as per notification from Fees Regulating
                Authority and University of Mumbai.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="sidebar">
            <div className="sidebar-card payment-card">
              <h3>Mode of Payment</h3>
              <p className="payment-description">
                Pay fees via online payment portal, scan below QR code OR
              </p>
              <div className="qr-code">
                <img
                  src="https://www.timscdrmumbai.in/wp-content/uploads/2024/07/scan-fees-qr.jpg" // <-- replace this path with your QR code image
                  alt="Payment QR Code"
                  className="qr-image"
                />
              </div>
              <button className="payment-button">Click Here</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FeesStructure;
