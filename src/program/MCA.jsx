import React, {useState} from "react";
import "./MCAProgram.css"; // optional external CSS for styling
import Navbar from "../components/navbar";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Footer from "../components/Footer";

const MCAProgram = () => {
  const [showForm, setShowForm] = useState(false);
    return (
        <>
            <Navbar setShowForm={setShowForm} />
            {showForm && <BrochureForm setShowForm={setShowForm} />}
            <CTAButtons />
            <section className="common-section">
                {/* Hero Banner */}
                <div className="mca-hero">
                    <div className="mca-hero-content">
                        <h1>Masters of Computer Applications (MCA)</h1>
                        {/* <p>
                            Affiliated to University of Mumbai | Approved by AICTE & DTE | 2 Years Full Time
                        </p>
                        <a href="#program-details" className="btn-primary">Know More</a> */}
                    </div>
                </div>

                {/* Program Details Two-Column Layout */}
                <div id="program-details" className="mca-container">
                    <div className="mca-text">
                        <h2>Masters of Computer Applications</h2>
                        <p>
                            The Masters of Computer Applications (MCA) is a 2 years full time Post-graduate Program affiliated to University of Mumbai and approved by AICTE and DTE. The program prepares graduates from any discipline; Science, Commerce and Arts with mathematics at the 10 plus 2 levels or at the graduation level to become Computer Application professionals who can serve in varied sectors. The Program includes Information Technology skills, for the graduates, necessary to meet the current industry requirements.
                        </p>
                        <p>
                            One of the leading MCA institutes in Mumbai, TIMSCDR provides holistic development of the graduates during the MCA master degree course. Several co-curricular and extra-curricular activities are conducted to instil innovative thinking, managerial and leadership skills and attitude of empathy and social responsibility amongst the graduates. The industry interactions are arranged through guest talks, expert sessions, workshops and seminars on emerging technologies. Opportunities to interact with professionals from the domains of Agriculture, Healthcare and Information Technology make the experience of pursuing MCA post graduation program at TIMSCDR unique.
                        </p>
                    </div>
                    <div className="mca-image">
                        <img
                            src="https://via.placeholder.com/600x400?text=MCA+Students+at+TIMSCDR"
                            alt="MCA Students at TIMSCDR"
                        />

                    </div>
                </div>

                {/* Highlights Row */}
                {/* <div className="mca-highlights">
                    <div className="highlight-card">🎓 2 Years Full Time</div>
                    <div className="highlight-card">🏛 University of Mumbai Affiliated</div>
                    <div className="highlight-card">✅ AICTE & DTE Approved</div>
                    <div className="highlight-card">👩‍💻 Open to All Disciplines</div>
                    <div className="highlight-card">🚀 Industry-Oriented Skills</div>
                </div> */}
            </section>
            <Footer/>
        </>
    );
};

export default MCAProgram;
