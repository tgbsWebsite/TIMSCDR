import React, { useState, useEffect } from "react";
import "./flipper-pair.css";

function FlipperCard({ messages = [], direction = "up", active }) {
  const [index, setIndex] = useState(0);
  const [flipping, setFlipping] = useState(false);

  // Handle flipping when active toggles on
  useEffect(() => {
    if (!active || messages.length === 0) return;
    setFlipping(true);
    const flipTimeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % messages.length);
      setFlipping(false);
    }, 600);
    return () => clearTimeout(flipTimeout);
  }, [active, messages.length]);

  if (!messages.length) {
    return (
      <div className="fp-card-wrapper" aria-live="polite">
        <div className="fp-card">
          <div className="fp-card-content">
            <div className="fp-message-header">
              <div className="fp-type-badge">
                <div className="fp-badge-icon">ℹ️</div>
                <span className="fp-message-type">Updates</span>
              </div>
              <div className="fp-pulse-indicator" aria-hidden="true"></div>
            </div>
            <div className="fp-message-text-link" aria-disabled="true">
              No messages available
              <div className="fp-link-arrow">→</div>
            </div>
          </div>
          <div className="fp-card-glow"></div>
        </div>
      </div>
    );
  }

  const current = messages[index];
  const flipClass = direction === "up" ? "fp-flip-up" : "fp-flip-down";

  return (
    <div className="fp-card-wrapper" aria-live="polite">
      <div
        className={`fp-card ${flipClass} ${flipping ? "fp-flipping" : ""}`}
        aria-atomic="true"
      >
        <div className="fp-card-content">
          <div className="fp-message-header">
            <div className="fp-type-badge">
              <div className="fp-badge-icon">
                {current.type === "Bulletin Board" ? "📢" : "💼"}
              </div>
              <span className="fp-message-type">{current.type}</span>
            </div>
            <div className="fp-pulse-indicator" aria-hidden="true"></div>
          </div>

          {current.url ? (
            <a
              href={current.url}
              className="fp-message-text-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${current.type}: ${current.text}`}
            >
              {current.text}
              <div className="fp-link-arrow">→</div>
            </a>
          ) : (
            <div className="fp-message-text-link" role="note">
              {current.text}
              <div className="fp-link-arrow" aria-hidden="true">
                →
              </div>
            </div>
          )}
        </div>
        <div className="fp-card-glow"></div>
      </div>
    </div>
  );
}

export default function FlipperPair() {
  const leftMessages = [
    { type: "Bulletin Board", text: "Admissions open till Aug 10", url: "/admissions" },
    { type: "Bulletin Board", text: "Scholarships available for top scorers", url: "/scholarships" },
    { type: "Bulletin Board", text: "AI & Data Science course launched", url: "/courses/ai-data-science" },
  ];

  const rightMessages = [
    { type: "Message Board", text: "Placement stats 2025 released", url: "/placements" },
    { type: "Message Board", text: "100+ top recruiters onboard", url: "/recruiters" },
    { type: "Message Board", text: "Campus hiring starts Sept 5", url: "/campus-hiring" },
  ];

  const [activeSide, setActiveSide] = useState("left");

  // Alternate active side every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSide((prev) => (prev === "left" ? "right" : "left"));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fp-pair-container">
      <div className="fp-animated-bg" aria-hidden="true">
        <div className="fp-gradient-orb fp-orb-1"></div>
        <div className="fp-gradient-orb fp-orb-2"></div>
        <div className="fp-gradient-orb fp-orb-3"></div>
      </div>

      <div className="fp-section">
        <div className="fp-section-title">
          {/* <div className="fp-title-icon" aria-hidden="true">📋</div> */}
          {/* <h3 className="fp-title-text">Latest Updates</h3> */}
        </div>
        <FlipperCard messages={leftMessages} direction="up" active={activeSide === "left"} />
      </div>
{/* 
      <div className="fp-divider" aria-hidden="true">
        <div className="fp-divider-line"></div>
        <div className="fp-divider-icon">⚡</div>
      </div> */}

      <div className="fp-section">
        <div className="fp-section-title">
          {/* <div className="fp-title-icon" aria-hidden="true">🎯</div>
          <h3 className="fp-title-text">Career Hub</h3> */}
        </div>
        <FlipperCard messages={rightMessages} direction="down" active={activeSide === "right"} />
      </div>
    </div>
  );
}
