import React, { useEffect, useState } from "react";
import "./TechTonics.css";
import Footer from "../components/Footer";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Navbar from "../components/navbar";

const volumes = [
  { vol: 21, url: "https://www.timscdrmumbai.in/wp-content/uploads/2025/03/Tech-Tonic-Vol.-21-Web.pdf" },
  { vol: 20, url: "https://www.timscdrmumbai.in/wp-content/uploads/2024/08/Tech-Tonic-Vol.-20.pdf" },
  { vol: 19, url: "https://timscdrmumbai.in/wp-content/uploads/2024/03/Tech-Tonic-Vol.-19-2024-Low.pdf" },
  { vol: 18, url: "https://timscdrmumbai.in/wp-content/uploads/2024/01/Tech-Tonic-Cover-Vol.-18-2023-index.pdf" },
  { vol: 17, url: "https://timscdrmumbai.in/wp-content/uploads/2024/01/tech-tonics-index-vol-17.pdf" },
  { vol: 16, url: "https://timscdrmumbai.in/wp-content/uploads/2024/01/tech-tonics-vol-16-index.pdf" },
  { vol: 15, url: "https://timscdrmumbai.in/wp-content/uploads/2022/08/Tech-Tonic-Vol.-15-2021-Final.pdf" },
  { vol: 14, url: "https://timscdrmumbai.in/wp-content/uploads/2022/08/Tech-Tonic-Vol-14-Final-2021.pdf" },
  { vol: 13, url: "https://timscdrmumbai.in/wp-content/uploads/2022/08/Tech-Tonic-Vol-13-Final-2021.pdf" },
  { vol: 12, url: "https://timscdrmumbai.in/wp-content/uploads/2022/08/Tech-Tonic-Vol.-12-2020-Final.pdf" },
  { vol: 11, url: "https://timscdrmumbai.in/wp-content/uploads/2021/02/TechTonics-Vol-11a.pdf" },
  { vol: 10, url: "https://timscdrmumbai.in/wp-content/uploads/2020/08/TechTonic-Vol-10.pdf" },
  { vol: 9, url: "https://timscdrmumbai.in/wp-content/uploads/2020/08/TechTonic-Vol-9.pdf" },
  { vol: 8, url: "https://timscdrmumbai.in/wp-content/uploads/2020/08/TechTonic-Vol-8.pdf" },
  { vol: 7, url: "https://timscdrmumbai.in/wp-content/uploads/2020/08/TechTonic-Vol-7.pdf" },
  { vol: 6, url: "https://timscdrmumbai.in/wp-content/uploads/2020/08/TechTonic-Vol-6.pdf" },
  { vol: 5, url: "https://timscdrmumbai.in/wp-content/uploads/2020/08/TechTonic-Vol-5.pdf" },
  { vol: 4, url: "https://timscdrmumbai.in/wp-content/uploads/2020/08/TechTonic-Vol-4.pdf" },
  { vol: 3, url: "https://timscdrmumbai.in/wp-content/uploads/2020/08/TechTonic-Vol-3.pdf" },
  { vol: 2, url: "https://timscdrmumbai.in/wp-content/uploads/2020/08/TechTonic-Vol-2.pdf" },
  { vol: 1, url: "https://timscdrmumbai.in/wp-content/uploads/2020/08/TechTonic-Vol-1.pdf" },
];

const ZIP_DOWNLOAD_LINK = "https://www.timscdrmumbai.in/wp-content/uploads/2025/03/TechTonics_All_Volumes.zip"; // Replace with actual URL

const TechTonics = () => {
  
  const [showForm, setShowForm] = useState(false);

  return (

    <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />
      <main className="TechTonics-container">
        <section className="TechTonics-intro">
          <h1 className="TechTonics-title">Research Journal – TechTonics</h1>
          <p className="TechTonics-description">
            TechTonics is a biannual research journal which publishes a collection of scholarly research papers written by students of MCA on various advanced technologies.
            TechTonics is allocated the ISSN 2455-071X by National Science Library (NSL). The research journal aims to inculcate the ability to think and elaborate new ideas amongst the students in the dynamic field of Information Technology.
          </p>
        </section>

        <section className="TechTonics-volumes">
         

          <h2 className="TechTonics-subtitle">Available Volumes</h2>
          <ul className="TechTonics-volume-list">
            {volumes.map(({ vol, url }) => (
              <li key={vol} className="TechTonics-volume-item">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="TechTonics-volume-link"
                >
                  TechTonics Vol {vol}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TechTonics;
