// CyberHub.jsx
import React, { useEffect, useRef, useState } from 'react';
import Footer from '../components/Footer';
import CTAButtons from "../components/sticky-button";
import Navbar from "../components/navbar";
import BrochureForm from "../components/EnquiryForm";
import PageHeader from '../about/PageHeader';

// import './Library.css';

const Library = () => {
  // Tabs
    const [showForm, setShowForm] = useState(false);
  
  const [activeTab, setActiveTab] = useState('about-library');

  // Carousel
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  const itemsCount = 3;
  const intervalMs = 7000;

  const startAutoplay = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % itemsCount);
    }, intervalMs);
  };

  const stopAutoplay = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoplay();
    return () => clearInterval(intervalRef.current);
  }, []);

  const goPrev = () => {
    stopAutoplay();
    setCurrent((c) => (c - 1 + itemsCount) % itemsCount);
  };

  const goNext = () => {
    stopAutoplay();
    setCurrent((c) => (c + 1) % itemsCount);
  };

  return (
     <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />
    <div className="vision-mission-container">
         <PageHeader
        title="Learning Resource Center (Library)"
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Learning Resource Center' }, // current page (no href)
        ]}
      />

      <main className="ch-main">


        <div className="ch-tabs">
          <button
            className={`ch-tab ${activeTab === '/about-library' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('/about-library')}
          >
            About Library
          </button>
          <button
            className={`ch-tab ${activeTab === 'infrastructure' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('infrastructure')}
          >
            Infrastructure And Facilities
          </button>
          <button
            className={`ch-tab ${activeTab === 'holding' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('holding')}
          >
            IMSCDR Library Holding
          </button>
          <button
            className={`ch-tab ${activeTab === 'timing-rules' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('timing-rules')}
          >
            Library Timing And Rules
          </button>
                 <button
            className={`ch-tab ${activeTab === 'timing-rules' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('timing-rules')}
          >
            Library Committee
          </button>
          <button
            className={`ch-tab ${activeTab === 'resources' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('resources')}
          >
            Virtual Reading Resource
          </button>
        </div>

        <section className={`ch-section ${activeTab === '/about-library' ? 'is-active' : ''}`} id="/about-library">
          {/* <div className="ch-section-row">
            <div className="ch-col">
              <img
                className="ch-image ch-border-purple"
                alt="Abstract digital art with glowing circuits and nodes"
                src="[IMAGE_PLACEHOLDER_4]"
              />
            </div>
            <div className="ch-col">
              <h2 className="ch-gradient-title">Welcome to the Nexus!</h2>
              <p className="ch-body">
                Greetings, digital explorer! The Nexus is a gateway to a universe of knowledge and innovation, dedicated
                to powering learning and creativity.
              </p>
              <p className="ch-body">
                Immerse in a curated collection of digital content, cutting-edge research, and collaborative platforms.
              </p>
            </div>
          </div> */}
        </section>

        <section className={`ch-section ${activeTab === 'infrastructure' ? 'is-active' : ''}`} id="infrastructure">
          <div className="ch-section-row">
            <div className="ch-col">
              <h2 className="ch-gradient-title">Dynamic Digital Environments</h2>
              <p className="ch-body">
                Find high‑tech zones, private pods, collaborative hubs, and seamless connectivity for academic pursuits.
              </p>
            </div>
            <div className="ch-col">
              <img
                className="ch-image ch-border-blue"
                alt="Modern co-working space with futuristic lighting and monitors"
                src="[IMAGE_PLACEHOLDER_5]"
              />
            </div>
          </div>
        </section>

        <section className={`ch-section ${activeTab === 'holding' ? 'is-active' : ''}`} id="holding">
          <div className="ch-section-row">
            <div className="ch-col">
              <img
                className="ch-image ch-border-pink"
                alt="A futuristic digital display showing book covers and data"
                src="[IMAGE_PLACEHOLDER_6]"
              />
            </div>
            <div className="ch-col">
              <h2 className="ch-gradient-title">Vast Digital Repository</h2>
              <p className="ch-body">
                Access a growing digital library of over 100,000 e‑books, journals, research papers, and multimedia
                content.
              </p>
            </div>
          </div>
        </section>

        <section className={`ch-section ${activeTab === 'timing-rules' ? 'is-active' : ''}`} id="timing-rules">
          <div className="ch-section-row">
            <div className="ch-col">
              <h2 className="ch-gradient-title">Your Access Protocol</h2>

              <h3 className="ch-subtitle">Operating Hours:</h3>
              <p className="ch-body">
                Always Online: 24/7
                <br />
                Support: Mon–Fri 8 AM – 9 PM
                <br />
                Weekend Support: Sat–Sun 10 AM – 6 PM
              </p>

              <h3 className="ch-subtitle">Community Guidelines:</h3>
              <ul className="ch-list">
                <li>Maintain digital etiquette.</li>
                <li>Respect shared virtual spaces.</li>
                <li>Keep the connection secure.</li>
                <li>Share knowledge responsibly.</li>
              </ul>
            </div>
            <div className="ch-col">
              <img
                className="ch-image ch-border-purple"
                alt="Stylized digital clock interface with futuristic icons"
                src="[IMAGE_PLACEHOLDER_7]"
              />
            </div>
          </div>
        </section>

        <section className={`ch-section ${activeTab === 'resources' ? 'is-active' : ''}`} id="resources">
          <div className="ch-section-row">
            <div className="ch-col">
              <h2 className="ch-gradient-title">Unlimited Digital Access</h2>
              <p className="ch-body">
                Unlock e‑books, academic journals, databases, and multimedia content from anywhere, anytime.
              </p>
              <a className="ch-portal-btn" href="#">Access Digital Portals</a>
            </div>
            <div className="ch-col">
              <img
                className="ch-image ch-border-blue"
                alt="Person interacting with a futuristic holographic interface on multiple devices"
                src="[IMAGE_PLACEHOLDER_9]"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
    <Footer/>
    </>
  );
};

export default Library;
