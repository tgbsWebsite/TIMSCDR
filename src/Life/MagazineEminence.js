import React, { useState } from "react";
import Navbar from "../components/navbar";
// import Footer from "../components/footer";
import PdfViewer from "../components/pdf-viewer"; // Import PdfViewer component
import CTAButtons from "../components/sticky-button";
// import { Helmet } from "react-helmet-async";
import BrochureForm from "../components/brochure-form";
import Footer from "../components/Footer";

const MagazineEminence = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

// Now pdfData contains Magazines instead of Newsletters:
const pdfData = [
  {
    name: "Magazine Eminence 2023-24",
    link: "https://www.timscdrmumbai.in/wp-content/uploads/2024/11/Colleage-Magazine-24-InSide-Low-1.pdf",
  },
  {
    name: "Magazine Eminence 2022-23",
    link: "https://timscdrmumbai.in/wp-content/uploads/2023/11/Colleage-Magazine-23.pdf",
  },
  {
    name: "Magazine Eminence 2021-22",
    link: "https://timscdrmumbai.in/wp-content/uploads/2023/04/College-Magazine-22-Sample-Copy.pdf",
  },
  {
    name: "Magazine Eminence 2020-21",
    link: "https://timscdrmumbai.in/wp-content/uploads/2022/09/Colleage-Magazine-21-Final.pdf",
  },
  {
    name: "Magazine Eminence 2019-20",
    link: "https://timscdrmumbai.in/wp-content/uploads/2021/10/Colleage-Magazine-2020.pdf",
  },
  {
    name: "Magazine Eminence 2018-19",
    link: "https://timscdrmumbai.in/wp-content/uploads/2021/10/Colleage-Magazine-2019.pdf",
  },
  {
    name: "Magazine Eminence 2017-18",
    link: "https://timscdrmumbai.in/wp-content/uploads/2021/10/College-Magazine-2018.pdf",
  },
  {
    name: "Magazine Eminence 2016-17",
    link: "https://timscdrmumbai.in/wp-content/uploads/2021/10/Colleage-Magazine-2016-17-7.pdf",
  },
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
            <h2>Magazine-Eminence</h2>
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

export default MagazineEminence;
