import React, { useState } from "react";
import "./Convocation.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel styles
import { Carousel } from "react-responsive-carousel";
import Footer from "../components/Footer";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Navbar from "../components/navbar";
// DATA ARRAYS

const convocationCeremonies = [

  {
    batch: "Batch 2018-2021",
    ceremony: "16th Degree distribution on Feb 1, 2022, for 177 graduates.",
  },
  {
    batch: "Batch 2017-2020",
    ceremony: "15th Degree distribution on Mar 4, 2021, for 113 graduates.",
  },
  {
    batch: "Batch 2016-2019",
    ceremony: "Degree distribution on Nov 14, 2019, for 109 graduates.",
    chiefGuest: "Mr. Sumit Mukhija",
  },
  {
    batch: "Batch 2015-2018",
    ceremony: "13th Convocation Ceremony on Feb 2, 2019, for 115 graduates.",
  },
  {
    batch: "Batch 2014-2017",
    ceremony: "12th Convocation Ceremony on Mar 10, 2018, for 99 graduates.",
  },
];

const awards2024 = [
  {
    rank: "First",
    name: "Ms. Jinal Gala",
    award: "Smt. Nimnadevi Memorial Award",
  },
  {
    rank: "Second",
    name: "Ms. Muskan Akbar Ali",
    award: "Smt. Indradevi Memorial Award",
  },
  {
    rank: "Third",
    name: "Ms. Neelu Kewat",
    award: "Smt. Prabhavatidevi S. Singh Memorial Award",
  },
];

const awards2019 = [
  { rank: "First", name: "Mr. Vivek Singh", award: "Smt. Indiradevi Memorial" },
  { rank: "Second", name: "Ms. Mansi Naik", award: "Smt. Indiradevi Memorial" },
  {
    rank: "Third",
    name: "Ms. Ankita Batel",
    award: "Smt. Prabhavatidevi S. Singh",
  },
];

const awards2020 = [
  {
    rank: "First",
    name: "Ms. Aishwarya Salvi",
    award: "Smt. Indiradevi Memorial",
  },
  {
    rank: "Second",
    name: "Ms. Swapnali Patil",
    award: "Smt. Indiradevi Memorial",
  },
  {
    rank: "Third",
    name: "Ms. Bhagyashree Gaikwad",
    award: "Smt. Prabhavatidevi S. Singh",
  },
];

const awards2018_2021 = [
  {
    rank: "First",
    name: "Mr. Rahul Kewat",
    award: "Shri Zagdu Singh Memorial Award",
  },
  {
    rank: "Second",
    name: "Ms. Mayuri Tiwari",
    award: "Smt. Indradevi Memorial Award",
  },
  {
    rank: "Third",
    name: "Mr. Mayank Kothari",
    award: "Shri Shyamnarayan Singh Memorial Award",
  },
];

const awards2017_2020 = [
  {
    rank: "First",
    name: "Ms. Crina Joshi",
    award: "Smt. Nimnadevi Memorial Award",
  },
  {
    rank: "Second",
    name: "Mr. Suraj Patel",
    award: "Sri. Ramnarayan Singh Memorial Award",
  },
  {
    rank: "Third",
    name: "Ms. Sonia Deora",
    award: "Smt. Prabhavatidevi S. Singh Memorial Award for 2017-2020",
  },
];

const awards2015_2018 = [
  {
    rank: "First",
    name: "Mr. Adithya Kanchan",
    award: "Smt. Nimnadevi Memorial Award",
  },
  {
    rank: "Second",
    name: "Ms. Anagha Patwardhan",
    award: "Sri. Ramnarayan Singh Memorial Award",
  },
  {
    rank: "Third",
    name: "Ms. Mansi Shah",
    award: "Smt. Prabhavatidevi S. Singh Memorial Award",
  },
];
const batch2019_2022Guests = [
  {
    name: "Mr. Ravi Kajaria",
    title: "Founder & Digital Transformation Lead at Granuler",
  },

  { name: "Mr. Lalit Popli", title: "COO ARCON" },
  {
    name: "Mr. Vishwajeet Sukhija",
    title: "Ex-Microsoft, Startup Founder, Sales & Marketing Strategy",
  },
  { name: "Ms. Jyoti Agrawal", title: "Founder Maa2Mom" },
  {
    name: "Ms. Anupama (Singh) Padhi",
    title: "Founder CEO at DhaaniFoods & Dhaanikala",
  },
];

const awards2014_2017 = [
  {
    rank: "First",
    name: "Ms. Bhavika Vartak",
    award: "Smt. Nimnadevi Memorial Award",
  },
  {
    rank: "Second",
    name: "Mr. Tanmay Sakpal",
    award: "Sri. Ramnarayan Singh Memorial Award",
  },
  {
    rank: "Third",
    name: "Ms. Anagha Baikar",
    award: "Smt. Prabhavatidevi S. Singh Memorial Award",
  },
];

const batch2015_2018Guests = [
  {
    name: "Mr. Suhas Mhaskar",
    title:
      "Business & Technology Leader, CIO & Executive Partner, Octave, CEO, Accent Technovation",
    role: "Chief Guest",
  },
  {
    name: "Dr. Dhananjay Kalbande",
    title: "Chairman – Adhoc – Board of Studies, MCA, UoM",
    role: "Guest of Honor",
  },
  {
    name: "Mr. Apurb Sinha",
    title: "SVP – Head CRM & Analytics-Asia Pacific, Invesco Ltd.",
    role: "Guest of Honor",
  },
];

const batch2014_2017Guests = [
  {
    name: "Dr. Lavesh R. Jadhav",
    title: "M.B.B.S.-MUM, MCPS, FACEE",
  },
  {
    name: "Dr. Dhananjay Kalbande",
    title: "Chairman – Adhoc – Board of Studies, MCA, UoM",
  },
];

const batch2013_2016Guests = [
  {
    name: "Dr. Vivek Bhartiya",
    title: "Principal Consultant & Enterprise Architect, TCS",
  },
  {
    name: "Mr. Sudhanshu Ojha",
    title: "General Manager, D-Link",
  },
  {
    name: "Mr. Vikram Bansal",
    title: "Deputy General Manager, Tata Advanced Systems Ltd.",
  },
];

const batch2012_2015Guests = [
  {
    name: "Mr. Mayur Dainait",
    title: "CIO - Lupin",
  },
  {
    name: "Dr. Rushikesh Joshi",
    title: "Professor - IIT Mumbai",
  },
  {
    name: "Mr. Durga Prasad Tiwari",
    title: "President - Sales & Distribution, Veez Capital & Parkyourbills",
  },
];

const directorGuests = [
  { name: "Dr. A.K. Singh", title: "(Director General)" },
  { name: "Dr. Pankaj Natu", title: "(Director, TIMSCDR)" },
];

export default function Convocation() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />
      <div className="conv-bg-main">
        <header>
          <Carousel
            autoPlay
            infiniteLoop
            emulateTouch
            showThumbs={false}
            showStatus={false}
            interval={4000}
            className="conv-carousel"
          >
            <div>
              <img style={{ marginTop: "50px", objectFit: "cover" }}
                src="/images/IMG_1171.jpeg" alt="Graduates throwing caps"
              />
            </div>
            {/* <div>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdzRizeSxjTMLnTcO9ijr-DeiRMAt2GTxw4nqvyUHvmxOHwIdR_rYBjUSyucliItp5f8PRxdc6Ft9vAf2qPYg7MZls-ZRSIQwjD4aVQUbTMUUqpcsD8KvJPS1TbK3pAntPpcQRS2q7mNmkuOYw3aKwp7-EgLYxE7BK6BayyUVgFITFSZblR2dcpr8dszD6nusZohHOe3_Va7q0hw9h52nOuLBKLNiahPhekJN6xPbz0-aMBGhmDvWMwGQbuzuJF7-Mr4y_ULjIDfjq"
                alt="Group photo at convocation"
              />
            </div> */}
            {/* Add more images as needed */}
          </Carousel>
        </header>
        <main className="conv-main">
          <section className="conv-section-rounded mb-large">
            <div className="convocado-grid">
              <div>
                <h2 className="heading">Convocation</h2>
                <p className="conv-section-desc">
                  "Graduation Day!! This is a much awaited event in every
                  students life, as it gives the returns to the efforts put in
                  by them throughout their academic endeavor. It gives a sense
                  of achievement and a sense of responsibility towards
                  fulfilling further commitments.
                </p>
                {/* <div className="conv-chief-guest-card">
                  <h3 className="conv-guest-title">
                    <span className="material-symbols-outlined conv-icon">
                      star
                    </span>
                    Chief Guest
                  </h3>
                  <p className="conv-guest-name">Mr. Sumit Mukhija</p>
                  <p className="conv-guest-desc">
                    Director &amp; Leader, Digital Transformation &amp; AI, KPMG
                    India
                  </p>
                </div> */}
              </div>
              <div>
                <img
                  alt="Group photo"
                  className="convocado-event-img"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdzRizeSxjTMLnTcO9ijr-DeiRMAt2GTxw4nqvyUHvmxOHwIdR_rYBjUSyucliItp5f8PRxdc6Ft9vAf2qPYg7MZls-ZRSIQwjD4aVQUbTMUUqpcsD8KvJPS1TbK3pAntPpcQRS2q7mNmkuOYw3aKwp7-EgLYxE7BK6BayyUVgFITFSZblR2dcpr8dszD6nusZohHOe3_Va7q0hw9h52nOuLBKLNiahPhekJN6xPbz0-aMBGhmDvWMwGQbuzuJF7-Mr4y_ULjIDfjq"
                />
              </div>
            </div>
          </section>

          {/* 2022-2024 Batch */}
          <section className="conv-card">
            <h3 className="conv-batch-title">
              <span className="material-symbols-outlined conv-batch-icon">
                school
              </span>
              Degree Distribution for Batch 2022-2024
            </h3>
            <p className="conv-batch-desc">
              11th Degree distribution for Batch 2022-2024 was conducted on May
              2, 2025. First three rankers of the Batch 2022-2024 were
              felicitated with Memento and certificates as per the given list:
            </p>
            {/* <div className="conv-guest-box mb-medium">
              <h4 className="conv-guest-title">
                <span className="material-symbols-outlined conv-icon">
                  star
                </span>{" "}
                Guest of Honor
              </h4>
              <p className="conv-guest-name">
                Esteemed faculty members and academicians
              </p>
              <p className="conv-guest-desc">
                Presided over the ceremony and conferred the degrees.
              </p>
            </div> */}
            <h4 className="conv-awards-title">Academic Awards AY 2024-25</h4>
            <div className="conv-table-wrapper">
              <table className="conv-table">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Name of the student</th>
                    <th>Name of Award</th>
                  </tr>
                </thead>
                <tbody>
                  {awards2024.map((a) => (
                    <tr key={a.rank}>
                      <td>{a.rank}</td>
                      <td>{a.name}</td>
                      <td>{a.award}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="conv-graduates-summary conv-summary-indigo">
              Total of <strong>131 graduates </strong>received their degree
              certificates from the Batch 2022-2024.
            </p>
          </section>
          {/* 2022-2024 Batch */}
          <section className="conv-card">
            <h3 className="conv-batch-title">
              <span className="material-symbols-outlined conv-batch-icon">
                school
              </span>
              Degree Distribution for Batch 2022-2024
            </h3>
            <p className="conv-batch-desc">
              11th Degree distribution for Batch 2022-2024 was conducted on May
              2, 2025. First three rankers of the Batch 2022-2024 were
              felicitated with Memento and certificates as per the given list:
            </p>
            {/* <div className="conv-guest-box mb-medium">
              <h4 className="conv-guest-title">
                <span className="material-symbols-outlined conv-icon">
                  star
                </span>{" "}
                Guest of Honor
              </h4>
              <p className="conv-guest-name">
                Esteemed faculty members and academicians
              </p>
              <p className="conv-guest-desc">
                Presided over the ceremony and conferred the degrees.
              </p>
            </div> */}
            <h4 className="conv-awards-title">Academic Awards AY 2024-25</h4>
            <div className="conv-table-wrapper">
              <table className="conv-table">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Name of the student</th>
                    <th>Name of Award</th>
                  </tr>
                </thead>
                <tbody>
                  {awards2024.map((a) => (
                    <tr key={a.rank}>
                      <td>{a.rank}</td>
                      <td>{a.name}</td>
                      <td>{a.award}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="conv-graduates-summary conv-summary-indigo">
              Total of <strong>131 graduates </strong>received their degree
              certificates from the Batch 2022-2024.
            </p>
          </section>

          {/* 2019-2022 & 2020-2022 Batch */}
          <section className="conv-card">
            <h3 className="conv-batch-title">
              <span className="material-symbols-outlined conv-batch-icon">
                groups
              </span>
              Degree Distribution for Batch 2019-2022 &amp; 2020-2022
            </h3>
            <p className="conv-batch-desc">
              9th Degree distribution for batch 2019-2022 & batch 2020-2022 was
              conducted on April 21, 2023. The Guests of Honor Mr. Ravi Kajaria
              (Founder & Digital Transformation Lead at Granuler), Mr. Lalit
              Popli (COO ARCON), Ms. Jyoti Agrawal (Founder Maa2Mom), Ms.
              Anupama (Singh) Padhi (Founder CEO at DhaaniFoods & Dhaanikala)
              and Mr. Vishwajeet Sukhija (Ex-Microsoft, Startup Founder, Sales &
              Marketing Strategy) graced the occasion with their presence and
              awarded degrees to the graduating students.
            </p>
            <div className="conv-guest-box-green mb-medium">
              <h4 className="conv-guest-title-green">
                <span className="material-symbols-outlined conv-icon-green">
                  star
                </span>{" "}
                Guests of Honor
              </h4>
              <div className="conv-guests-grid">
                {batch2019_2022Guests.map((g) => (
                  <div key={g.name}>
                    <p className="conv-guest-green-name">{g.name}</p>
                    <p className="conv-guest-green-title">{g.title}</p>
                  </div>
                ))}
              </div>
              {/* <div className="conv-directors">
                {directorGuests.map((d) => (
                  <p className="conv-director-name" key={d.name}>
                    {d.name}{" "}
                    <span className="conv-director-title">{d.title}</span>
                  </p>
                ))}
              </div> */}
            </div>
            <h4 className="conv-awards-title center">
              Academic Awards AY 2021-22
            </h4>
            <div className="conv-twobatches-grid">
              <div>
                <h5 className="conv-batch-label">Batch 2019-2022</h5>
                <div className="conv-table-wrapper">
                  <table className="conv-table">
                    <thead>
                      <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Award</th>
                      </tr>
                    </thead>
                    <tbody>
                      {awards2019.map((a) => (
                        <tr key={a.rank}>
                          <td>{a.rank}</td>
                          <td>{a.name}</td>
                          <td>{a.award}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <h5 className="conv-batch-label">Batch 2020-2022</h5>
                <div className="conv-table-wrapper">
                  <table className="conv-table">
                    <thead>
                      <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Award</th>
                      </tr>
                    </thead>
                    <tbody>
                      {awards2020.map((a) => (
                        <tr key={a.rank}>
                          <td>{a.rank}</td>
                          <td>{a.name}</td>
                          <td>{a.award}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <p className="conv-graduates-summary conv-summary-green">
              Total of <strong>297 (113+184) graduates</strong> received their
              degree certificates from the batch 2019-2022 & batch 2020-2022.
            </p>
          </section>

          {/* 2018-2021 Batch */}
          <section className="conv-card">
            <h3 className="conv-batch-title">
              <span className="material-symbols-outlined conv-batch-icon">
                school
              </span>
              Degree Distribution for Batch 2018-2021
            </h3>
            <p className="conv-batch-desc">
              8th Degree distribution for batch 2018-2021 started on February 1,
              2022. First three rankers of the batch 2018-2021 to be felicitated
              with trophy and certificates as per the given list:
            </p>
            {/* <div className="conv-guest-box mb-medium">
              <h4 className="conv-guest-title">
                <span className="material-symbols-outlined conv-icon">
                  star
                </span>{" "}
                Guest of Honor
              </h4>
              <p className="conv-guest-name">
                Esteemed faculty members and academicians
              </p>
              <p className="conv-guest-desc">
                Presided over the ceremony and conferred the degrees.
              </p>
            </div> */}
            <h4 className="conv-awards-title">Academic Awards AY 2018-2021</h4>
            <div className="conv-table-wrapper">
              <table className="conv-table">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Name of the student</th>
                    <th>Name of Award</th>
                  </tr>
                </thead>
                <tbody>
                  {awards2018_2021.map((a) => (
                    <tr key={a.rank}>
                      <td>{a.rank}</td>
                      <td>{a.name}</td>
                      <td>{a.award}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="conv-graduates-summary conv-summary-indigo">
              Total of <strong>117 graduates </strong>received their degree
              certificates from the Batch 2018-2021.
            </p>
          </section>

          {/* 2017-2020 Batch */}
          <section className="conv-card">
            <h3 className="conv-batch-title">
              <span className="material-symbols-outlined conv-batch-icon">
                school
              </span>
              Degree Distribution for Batch 2017-2020
            </h3>
            <p className="conv-batch-desc">
              7th Degree distribution for batch 2017-2020 started on March 4,
              2021. First three rankers of the batch 2017-2020 were felicitated
              with trophy and certificates as per the given list:
            </p>

            {/* <div className="conv-guest-box mb-medium">
              <h4 className="conv-guest-title">
                <span className="material-symbols-outlined conv-icon">
                  star
                </span>{" "}
                Guest of Honor
              </h4>
              <p className="conv-guest-name">
                Esteemed faculty members and academicians
              </p>
              <p className="conv-guest-desc">
                Presided over the ceremony and conferred the degrees.
              </p>
            </div> */}
            <h4 className="conv-awards-title">Academic Awards AY 2017-2020</h4>
            <div className="conv-table-wrapper">
              <table className="conv-table">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Name of the student</th>
                    <th>Name of Award</th>
                  </tr>
                </thead>
                <tbody>
                  {awards2017_2020.map((a) => (
                    <tr key={a.rank}>
                      <td>{a.rank}</td>
                      <td>{a.name}</td>
                      <td>{a.award}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="conv-graduates-summary conv-summary-indigo">
              Total of <strong>113 graduates </strong>received their degree
              certificates from the Batch 2017-2020.
            </p>
          </section>

          {/* 2016-2019 Batch */}
          <section className="conv-card">
            <h3 className="conv-batch-title">
              <span className="material-symbols-outlined conv-batch-icon">
                school
              </span>
              Degree Distribution for Batch 2016-2019
            </h3>
            <p className="conv-batch-desc">
              Degree distribution for batch 2016-2019 was conducted on December
              14, 2019.
            </p>
            {/* <div className="conv-guest-box mb-medium">
              <h4 className="conv-guest-title">
                <span className="material-symbols-outlined conv-icon">
                  star
                </span>{" "}
                Guest of Honor
              </h4>
              <p className="conv-guest-name">
                Esteemed faculty members and academicians
              </p>
              <p className="conv-guest-desc">
                Presided over the ceremony and conferred the degrees.
              </p>
            </div> */}
            {/* <h4 className="conv-awards-title">Academic Awards AY 2018-2021</h4>
            <div className="conv-table-wrapper">
              <table className="conv-table">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Name of the student</th>
                    <th>Name of Award</th>
                  </tr>
                </thead>
                <tbody>
                  {awards2018_2021.map((a) => (
                    <tr key={a.rank}>
                      <td>{a.rank}</td>
                      <td>{a.name}</td>
                      <td>{a.award}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div> */}
            <p className="conv-graduates-summary conv-summary-indigo">
              Total of <strong>109 graduates </strong>received their degree
              certificates from the Batch 2016-2019.
            </p>
          </section>

          {/* 2014-2017 Batch */}
          <section className="conv-card">
            <h3 className="conv-batch-title">
              <span className="material-symbols-outlined conv-batch-icon">
                school
              </span>
              Degree Distribution for Batch 2015-2018
            </h3>
            <p className="conv-batch-desc">
              8th Degree distribution for batch 2018-2021 started on February 1,
              2022. First three rankers of the batch 2018-2021 to be felicitated
              with trophy and certificates as per the given list:
            </p>
            {/* <div className="conv-guest-box mb-medium">
              <h4 className="conv-guest-title">
                <span className="material-symbols-outlined conv-icon">
                  star
                </span>{" "}
                Guest of Honor
              </h4>
              <p className="conv-guest-name">
                Esteemed faculty members and academicians
              </p>
              <p className="conv-guest-desc">
                Presided over the ceremony and conferred the degrees.
              </p>
            </div> */}
            <h4 className="conv-awards-title">Academic Awards AY 2018-2021</h4>
            <div className="conv-table-wrapper">
              <table className="conv-table">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Name of the student</th>
                    <th>Name of Award</th>
                  </tr>
                </thead>
                <tbody>
                  {awards2018_2021.map((a) => (
                    <tr key={a.rank}>
                      <td>{a.rank}</td>
                      <td>{a.name}</td>
                      <td>{a.award}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="conv-graduates-summary conv-summary-indigo">
              Total of <strong>117 graduates </strong>received their degree
              certificates from the Batch 2018-2021.
            </p>
          </section>

          {/* 2015-2018 Batch */}
          <section className="conv-card">
            <h3 className="conv-batch-title">
              <span className="material-symbols-outlined conv-batch-icon">
                groups
              </span>
              Degree Distribution for Batch 2014-2017
            </h3>
            <p className="conv-batch-desc">
              4th Convocation Ceremony for batch 2014-2017 was conducted on
              March 10th, 2018. The chief guest Dr. Suresh Ukarande
              (Coordinator, Faculty of Technology, University of Mumbai), guest
              of honor(s) Dr. Lavesh R. Jadhav (M.B.B.S.-MUM, MCPS, FACEE) and
              Dr. Dhananjay Kalbande (Chairman – Adhoc – Board of Studies, MCA,
              UoM) graced the occasion with their presence and awarded degrees
              to the graduating students.
            </p>
            <div className="conv-guest-box-green mb-medium">
              <h4 className="conv-guest-title-green">
                <span className="material-symbols-outlined conv-icon-green">
                  star
                </span>{" "}
                Guests of Honor
              </h4>
              <div className="conv-guests-grid">
                {batch2014_2017Guests.map((g) => (
                  <div key={g.name}>
                    <p className="conv-guest-green-name">{g.name}</p>
                    <p className="conv-guest-green-title">{g.title}</p>
                  </div>
                ))}
              </div>
            </div>
            <h4 className="conv-awards-title center">
              Academic Awards AY 2017-18
            </h4>
            <div>
              <p className="conv-batch-desc">
                TIMSCDR has started Academic Award for the 1st, 2nd & 3rd
                rankers from AY 2017-18. <br />
                First three rankers of the batch 2014-17 were felicitated with
                trophy and certificates as per the given list:
              </p>
              <div className="conv-table-wrapper">
                <table className="conv-table">
                  <thead>
                    <tr>
                      <th>Rank</th>
                      <th>Name</th>
                      <th>Award</th>
                    </tr>
                  </thead>
                  <tbody>
                    {awards2014_2017.map((a) => (
                      <tr key={a.rank}>
                        <td>{a.rank}</td>
                        <td>{a.name}</td>
                        <td>{a.award}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="conv-graduates-summary conv-summary-green">
              Total of <strong>92 graduates</strong> received their degree
              certificates from the batch 2014-2017.
            </p>
          </section>

          {/* ---------------- Batch 2013-2016 ---------------- */}
          <section className="conv-card">
            <h3 className="conv-batch-title">
              <span className="material-symbols-outlined conv-batch-icon">
                groups
              </span>
              Degree Distribution for Batch 2013-2016
            </h3>
            <p className="conv-batch-desc">
              TIMSCDR has conducted 3rd Convocation Ceremony for batch 2013-2016
              on February 25th, 2017. Dr. Vivek Bhartiya (Principal Consultant &
              Enterprise Architect, TCS), Mr. Sudhanshu Ojha (General Manager,
              D-Link), and Mr. Vikram Bansal (Deputy General Manager at Tata
              Advanced Systems Ltd.) graced the occasion with their presence and
              awarded degrees to the graduating students.
            </p>
            <div className="conv-guest-box-green mb-medium">
              <h4 className="conv-guest-title-green">
                <span className="material-symbols-outlined conv-icon-green">
                  star
                </span>{" "}
                Guests of Honor
              </h4>
              <div className="conv-guests-grid">
                {batch2013_2016Guests.map((g) => (
                  <div key={g.name}>
                    <p className="conv-guest-green-name">{g.name}</p>
                    <p className="conv-guest-green-title">{g.title}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="conv-graduates-summary conv-summary-green">
              Total of <strong>116 graduates</strong> received their degree
              certificates from the batch 2013-2016.
            </p>
          </section>

          {/* ---------------- Batch 2012-2015 ---------------- */}
          <section className="conv-card">
            <h3 className="conv-batch-title">
              <span className="material-symbols-outlined conv-batch-icon">
                groups
              </span>
              Degree Distribution for Batch 2012-2015
            </h3>
            <p className="conv-batch-desc">
              TIMSCDR has conducted Convocation for batch 2012-2015 in February
              2016. Mr. Mayur Dainait (CIO - Lupin), Dr. Rushikesh Joshi
              (Professor - IIT Mumbai), and Mr. Durga Prasad Tiwari (President -
              Sales & Distribution, Veez Capital & Parkyourbills) graced the
              occasion with their presence and awarded degrees to the graduating
              students.
            </p>
            <div className="conv-guest-box-green mb-medium">
              <h4 className="conv-guest-title-green">
                <span className="material-symbols-outlined conv-icon-green">
                  star
                </span>{" "}
                Guests of Honor
              </h4>
              <div className="conv-guests-grid">
                {batch2012_2015Guests.map((g) => (
                  <div key={g.name}>
                    <p className="conv-guest-green-name">{g.name}</p>
                    <p className="conv-guest-green-title">{g.title}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="conv-graduates-summary conv-summary-green">
              Total of <strong>130 graduates</strong> received their degree
              certificates from the batch 2012-2015.
            </p>
          </section>

          {/* Previous Ceremonies
          <section className="conv-card">
            <h3 className="conv-prev-title">
              <span className="material-symbols-outlined conv-batch-icon">
                history
              </span>
              Previous Convocation Ceremonies
            </h3>
            <div className="conv-ceremony-list">
              {convocationCeremonies.map((cer, idx) => (
                <div key={cer.batch} className="conv-ceremony-card">
                  <h4>{cer.batch}</h4>
                  <p>{cer.ceremony}</p>
                  {cer.chiefGuest && (
                    <div className="conv-chief-guest-last">
                      <span className="material-symbols-outlined conv-ceremony-star">
                        star
                      </span>
                      Chief Guest: {cer.chiefGuest}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section> */}
        </main>
      </div>
      <Footer />
    </>
  );
}
