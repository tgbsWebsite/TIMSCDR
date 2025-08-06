import React, { useState } from 'react';
import './WelcomeSection.css';

function WelcomeSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="welcome-section">
      <div className="welcome-container">
        <div className="welcome-logo">
          <img src="/images/logo.png" alt="Logo" />
        </div>

        <div className="welcome-text">
          <h1>Welcome to TIMSCDR</h1>
         <p>Thakur Institute of Management Studies, Career Development & Research (TIMSCDR) is the top MCA college in Mumbai, building tech leaders with vision, skill, and a strong focus on application-oriented learning since 2001.</p>
         <p>TIMSCDR combines rigorous academics with hands-on exposure through advanced labs, smart classrooms, industry interaction, and placement-focused training. Its graduates are equipped to lead, innovate, and solve real-world challenges.</p>
         <p>Backed by the legacy of the Thakur Education Group, TIMSCDR provides a thriving campus environment that fuels ambition, fosters excellence, and prepares students for the evolving tech landscape.</p>
        </div>
      </div>

      <div className="welcome-button-wrapper">
        <button className="watch-button" onClick={() => setIsOpen(true)}>
          ▶ Watch Campus Tour
        </button>
      </div>

      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/FzEudKf_8Ws?si=Wj5U8rmj6zIh4SOp" 
              title="Campus Tour"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
            <button className="close-button" onClick={() => setIsOpen(false)}>✖</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default WelcomeSection;
