import React, { useState } from "react";
import "../Facilities/table-styles.css";
import Footer from "../components/Footer";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Navbar from "../components/navbar";
import PageHeader from "../about/PageHeader";


// for the rest of the page styles

export default function SeatDistribution() {
    const [showForm, setShowForm] = useState(false);

    return (
        <>
            <Navbar setShowForm={setShowForm} />
            {showForm && <BrochureForm setShowForm={setShowForm} />}
            <CTAButtons />

            <div className="seatPage">
                {/* Hero Section */}

                {/* Main Content */}
                <section className="seatPage-main">
                    <div className="seatPage-container">
                        <div className="seatPage-grid">
                            {/* Left Side - Inspiration Card */}

                            {/* Right Side - Table Section */}
                            <PageHeader
                                title="Seat Distribution"
                                crumbs={[
                                    { label: 'Home', href: '/' },
                                    { label: 'Seat Distribution' }, // current page (no href)
                                ]}
                            />                            <h2 className="seatPage-title">
                                Allocation of Seats Within Sanctioned Intake
                            </h2>


                            <div className="conv-table-wrapper">
                                <table className="conv-table">
                                    <thead>
                                        <tr>
                                            <th>Program</th>
                                            <th>Sanctioned Intake</th>
                                            <th>
                                                CAP Quota
                                                <div className="th-subtext">
                                                    Seats will be filled up through CAP only <br />
                                                    (Centralized Admission Process)
                                                </div>
                                            </th>
                                            <th>Minority Quota</th>
                                            <th>
                                                Institute Level Seats
                                                <div className="th-subtext">
                                                    Seats will be filled up Institute only
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <strong>No. of Seats as % of Sanction Intake</strong>
                                            </td>
                                            <td className="seatPage-percent">100%</td>
                                            <td className="seatPage-percent">29%</td>
                                            <td className="seatPage-percent">51%</td>
                                            <td className="seatPage-percent">20%</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>MCA</strong>
                                            </td>
                                            <td>240</td>
                                            <td>70</td>
                                            <td>122</td>
                                            <td>48</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>MCA (Integrated)</strong>
                                            </td>
                                            <td>60</td>
                                            <td>17</td>
                                            <td>31</td>
                                            <td>12</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>MCA (Working Professional)</strong>
                                            </td>
                                            <td>60</td>
                                            <td>17</td>
                                            <td>31</td>
                                            <td>12</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="seatPage-note">
                                <div className="seatPage-noteTitle">Note:</div>
                                <ul className="seatPage-noteList">
                                    <li>
                                        TIMSCDR – A Centre of Excellence for candidates aspiring for
                                        quality technical education and rewarding career. As per DTE
                                        / CET Cell notification, the admission process for 51% Hindi
                                        Linguistic Minority Quota and 29% CAP Quota will be carried
                                        out by DTE through multiple admission rounds. Candidate
                                        aspiring admission to TIMSCDR can give first option or can
                                        freeze the admission. Moreover, they also have option for
                                        admission during the vacancy subject to availability of
                                        seats.
                                    </li>
                                    <li>
                                        Institute level Seats is 20% of the Sanctioned Intake. For
                                        Admission enquiries contact at Reception in Administrative
                                        Office.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </>
    );
}
