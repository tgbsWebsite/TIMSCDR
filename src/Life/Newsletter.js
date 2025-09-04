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
  { name: "News Letter-Jan-Mar 2025", link: "/pdf/newsletters/january-march-2025.pdf" },
  { name: "News Letter-Oct-Dec 2024", link: "/pdf/newsletters/october-dec-2024.pdf" },
  { name: "News Letter-Jul-Sept 2024", link: "/pdf/newsletters/july-september-2024.pdf" },
  { name: "News Letter-Apr-Jun 2024", link: "/pdf/newsletters/april-june-2024.pdf" },
  { name: "News Letter-Jan-Mar 2024", link: "/pdf/newsletters/january-march-2024.pdf" },
  { name: "News Letter-Oct-Dec 2023", link: "/pdf/newsletters/october-december-2023.pdf" },
  { name: "News Letter-Jul-Sept 2023", link: "/pdf/newsletters/july-september-2023.pdf" },
  { name: "News Letter-Apr-Jun 2023", link: "/pdf/newsletters/april-june-2023.pdf" },
  { name: "News Letter-Jan-Mar 2023", link: "/pdf/newsletters/january-march-2023.pdf" },
  { name: "News Letter-Oct-Dec 2022", link: "/pdf/newsletters/october-december-2022.pdf" },
  { name: "News Letter-Jul-Sept 2022", link: "/pdf/newsletters/july-september-2022.pdf" },
  { name: "News Letter-Apr-Jun 2022", link: "/pdf/newsletters/april-june-2022.pdf" },
  { name: "News Letter-Jan-Mar 2022", link: "/pdf/newsletters/january-march-2022.pdf" },
  { name: "News Letter-Oct -Nov 2021", link: "/pdf/newsletters/october-november-2021.pdf" },
  { name: "News Letter-Jul -Sep 2021", link: "/pdf/newsletters/july-september-2021.pdf" },
  { name: "News Letter-Apr-Jun-2021", link: "/pdf/newsletters/april-june-2021.pdf" },
  { name: "News Letter-Jan-Mar-2021", link: "/pdf/newsletters/january-march-2021.pdf" },
  { name: "News Letter-Oct-Dec-2020", link: "/pdf/newsletters/october-december-2020.pdf" },
  { name: "News Letter-Jul-Sep-2020", link: "/pdf/newsletters/july-september-2020.pdf" },
  { name: "News Letter-Apr-Jun-2020", link: "/pdf/newsletters/april-june-2020.pdf" },
  { name: "News Letter-Jan-Mar-2020", link: "/pdf/newsletters/january-march-2020.pdf" },
  { name: "News Letter-Oct-Dec-2019", link: "/pdf/newsletters/october-december-2019.pdf" },
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
            <h2>Newsletter</h2>
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
