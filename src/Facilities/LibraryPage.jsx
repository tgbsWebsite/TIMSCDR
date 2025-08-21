import React,{useState} from "react";
import Footer from "../components/Footer";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Navbar from "../components/navbar";

export default function LibraryPage() {
      const [showForm, setShowForm] = useState(false);
    
  return (
    <>
     <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />
    <main className="library-main">
      <section className="library-intro-section">
        <div className="library-container">
          <div className="library-title-wrapper">
            <h2 className="heading">Our Library</h2>
          </div>
          <div className="library-info-image-row">
            <div className="library-description-wrapper">
              <p className="library-description">
                TIMSCDR Library is located on the 2nd floor. It is air-conditioned
                and has sections such as a digital library, reading room, circulation
                counter, cupboards for books and CDs, and display rack for journals
                and magazines. TIMSCDR continuously updates its learning resources by
                increasing the number of books and other reading materials such as
                journals, magazines, audio-visual materials, and newspapers. Easy access
                to all library resources by the students is ensured.
              </p>
            </div>
            <div className="library-image-wrapper">
              <img
                className="library-image"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt60e1TxnhJnhSa39HhBlSPCbnLclcmTNMdhw7ccqUYPXvNXEWem-ZjKwTiSVju4s7wMupN_ss-Q33jgIflQY3bKy-4CIuaqIEgrQAV2-1AyM1D7DONFVgIjagIBghqLaRR9lLT-N8R3oHbB5bJUyxvEFdx_OwGdkU2ZS6uL2gQL7a3JDKuCDF1DT0Y5LKRew1j9tjEhcClTMUBXxKVK947uAfa20D0qYh_sqAt_tyE6Tvblv-UONG0lAVWhlD90kLb_CvB4XhqN6-"
                alt="A spacious library with rows of bookshelves and students studying at tables."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="library-collection-section">
        <div className="library-container text-center">
          <h3 className="collection-title">Collection</h3>
          <div className="collection-grid">
            <div className="collection-card">
              <p className="collection-label">Text Books</p>
              <p className="collection-value">13,483+</p>
            </div>
            <div className="collection-card">
              <p className="collection-label">References books</p>
              <p className="collection-value">900+</p>
            </div>
            <div className="collection-card">
              <p className="collection-label">e-Books</p>
              <p className="collection-value">4200+</p>
            </div>
            <div className="collection-card">
              <p className="collection-label">National Journals</p>
              <p className="collection-value">1 printed</p>
            </div>
            <div className="collection-card">
              <p className="collection-label">International Journals</p>
              <p className="collection-value">5 printed</p>
            </div>
            <div className="collection-card">
              <p className="collection-label">IEEE International e-journal</p>
              <p className="collection-value">190 online</p>
            </div>
            <div className="collection-card">
              <p className="collection-label">Magazines</p>
              <p className="collection-value">3</p>
            </div>
            <div className="collection-card">
              <p className="collection-label">Newspapers</p>
              <p className="collection-value">6</p>
              <p className="collection-note">(English, Hindi, Marathi)</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer/>
    </>
  );
}
