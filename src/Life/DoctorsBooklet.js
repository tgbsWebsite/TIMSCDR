import React, { useState } from "react";
import Navbar from "../components/navbar";
// import Footer from "../components/footer";
import PdfViewer from "../components/pdf-viewer"; // Import PdfViewer component
import CTAButtons from "../components/sticky-button";
// import { Helmet } from "react-helmet-async";
import BrochureForm from "../components/brochure-form";
import Footer from "../components/Footer";

const DoctorsBooklet = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

// Now pdfData contains Magazines instead of Newsletters:
const pdfData = [
  { name: "Doctor Book 2024", link: "https://www.timscdrmumbai.in/wp-content/uploads/2024/08/Doctor-Book-2024-Vol-VIII.pdf" },
  { name: "Doctor Book 2023", link: "https://www.timscdrmumbai.in/wp-content/uploads/2023/07/Doctor-Book-2023-Vol-VII.pdf" },
  { name: "Doctor Book 2022", link: "https://timscdrmumbai.in/wp-content/uploads/2021/04/Doctor-Book-2022-Vol-VI-Final.pdf" },
  { name: "Doctor Book 2021", link: "https://timscdrmumbai.in/wp-content/uploads/2021/04/Doctor-Book-2021.pdf" },
  { name: "Doctor Book 2020", link: "https://timscdrmumbai.in/wp-content/uploads/2021/04/Doctor-Book-2020.pdf" },
  { name: "Doctor Book 2019", link: "https://timscdrmumbai.in/wp-content/uploads/2021/04/Doctor-Book-2019.pdf" },
  { name: "Doctor Book 2018", link: "https://timscdrmumbai.in/wp-content/uploads/2021/04/Doctor-Book-2018.pdf" },
  { name: "Doctor Book 2017", link: "https://timscdrmumbai.in/wp-content/uploads/2021/04/Doctor-Book-2017.pdf" },
];



  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const handlePdfClick = (link) => {
  window.open(link, "_blank");
};


  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />
      {/* <Helmet>
        <title>Newsletter | Stay Updated with TGBS Mumbai</title>
        <meta
          name="description"
          content="Subscribe to the TGBS Mumbai newsletter for the latest updates, events & insights. Stay informed about campus news & industry trends. Sign up now!"
        />
        <meta name="keywords" content="PGDM Course Mumbai" />
        <link rel="canonical" href="https://tgbsmumbai.in/newsletter" />
      </Helmet> */}
      <div className="pdf-list-container">
        {!selectedPdf ? (
          <div className="pdf-list-section">
            <h2>Doctor Booklet</h2>
            <div className="pdf-list">
              {pdfData.map((pdf, index) => (
                <p
                  key={index}
                  className="pdf-item"
                  onClick={() => handlePdfClick(pdf.link)}
                >
                  {pdf.name}
                </p>
              ))}
            </div>
          </div>
        ) : (
          <div className="pdf-viewer-section">
            <img
              src="./images/icons/close.webp"
              alt="Close"
              onClick={() => setSelectedPdf(null)}
              className="close-button"
            />
            <div className="pdf-view">
              <PdfViewer file={selectedPdf} />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default DoctorsBooklet;
