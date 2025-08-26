import React, { useState, useEffect } from 'react';
import './ICAIMPage.css';

const ICAIM2025 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      title: 'Grand Inauguration',
      description:
        'Chief Guest Dr. Suresh Shan, Chairman of CSI, inaugurated ICAIM 2025 with distinguished guests from industry and academia.',
    },
    {
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      title: 'AI in Agriculture',
      description:
        'Dr. Prakash Jha from Mississippi State University showcased transformative AI applications in precision farming and crop monitoring.',
    },
    {
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      title: 'Healthcare Innovation',
      description:
        'Dr. Vivek Dwivedi, President of AMC, emphasized empowering doctors with latest AI innovations for better healthcare delivery.',
    },
    {
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      title: 'Research Excellence',
      description:
        '100 research papers and 54 technical posters showcased cutting-edge innovations in AI applications across multiple domains.',
    },
  ];

  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const moveSlide = (direction) => {
    setCurrentSlide((prev) => {
      let next = prev + direction;
      if (next >= totalSlides) next = 0;
      if (next < 0) next = totalSlides - 1;
      return next;
    });
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <header className="icaim-header">
        <div className="icaim-nav-container">
          <div className="icaim-logo">ICAIM 2025</div>
          <nav className="icaim-nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#partners">Partners</a></li>
            <li><a href="#sessions">Sessions</a></li>
            <li><a href="#awards">Awards</a></li>
            <li><a href="#contact">Contact</a></li>
          </nav>
          <div className="icaim-mobile-toggle">☰</div>
        </div>
      </header>

      <section className="icaim-hero" id="home">
        <div className="icaim-floating-element icaim-floating-1"></div>
        <div className="icaim-floating-element icaim-floating-2"></div>
        <div className="icaim-floating-element icaim-floating-3"></div>

        <div className="icaim-hero-content">
          <div className="icaim-hero-badge">February 8-9, 2025 | TIMSCDR</div>
          <h1>ICAIM 2025</h1>
          <div className="icaim-hero-theme">"Leveraging Information for Sustainability in Agriculture &amp; Healthcare – Viksit Bharat"</div>
          <div className="icaim-hero-subtitle">International Conference on Advances in Information Technology and Management</div>
          <a href="#about" className="icaim-hero-cta">
            <span>Explore Conference</span> <span>→</span>
          </a>
        </div>
      </section>

      <main className="icaim-main-content">
        <section className="icaim-section icaim-carousel-section">
          <div className="icaim-container">
            <div className="icaim-section-header">
              <div className="icaim-section-badge">Conference Highlights</div>
              <h2 className="icaim-section-title" style={{ color: 'white' }}>Experience ICAIM 2025</h2>
              <p className="icaim-section-subtitle" style={{ color: 'rgba(255,255,255,0.9)' }}>
                Witness groundbreaking presentations and collaborative discussions
              </p>
            </div>

            <div className="icaim-carousel-container">
              <div
                className="icaim-carousel-track"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div className="icaim-carousel-slide" key={index}>
                    <img src={slide.image} alt={slide.title} />
                    <div className="icaim-slide-overlay">
                      <h3 className="icaim-slide-title">{slide.title}</h3>
                      <p className="icaim-slide-description">{slide.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="icaim-carousel-nav icaim-carousel-prev" onClick={() => moveSlide(-1)}>
                ‹
              </button>
              <button className="icaim-carousel-nav icaim-carousel-next" onClick={() => moveSlide(1)}>
                ›
              </button>
              <div className="icaim-carousel-dots">
                {slides.map((_, idx) => (
                  <div
                    key={idx}
                    className={`icaim-carousel-dot ${currentSlide === idx ? 'active' : ''}`}
                    onClick={() => goToSlide(idx)}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Additional sections like About, Partners, Sessions, Awards to be similarly implemented with unique icaim- prefixes */}
      </main>

      <footer className="icaim-footer" id="contact">
        <div className="icaim-container">
          <div className="icaim-footer-grid">
            <div className="icaim-footer-section">
              <h3>TIMSCDR</h3>
              <p>Thakur Institute of Management Studies, Career Development and Research</p>
              <p>Organizing ICAIM 2025 - International Conference on Advances in Information Technology and Management</p>
            </div>
            <div className="icaim-footer-section">
              <h3>Conference Details</h3>
              <p><strong>Dates:</strong> February 8-9, 2025</p>
              <p><strong>Mode:</strong> Blended Conference</p>
              <p><strong>Theme:</strong> "Leveraging Information for Sustainability in Agriculture &amp; Healthcare – Viksit Bharat"</p>
            </div>
            <div className="icaim-footer-section">
              <h3>Key Partners</h3>
              <ul className="icaim-footer-links">
                <li>AMC - Association of Medical Consultants</li>
                <li>MACCIA - Maharashtra Chamber of Commerce</li>
                <li>MMA - Malad Medical Association</li>
                <li>GIST - Global Indian Scientists &amp; Technocrats Forum</li>
                <li>NCSH - Nordic Center for Sustainable Healthcare</li>
              </ul>
            </div>
          </div>
          <div className="icaim-footer-bottom">
            <p>© 2025 ICAIM - TIMSCDR. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ICAIM2025;
