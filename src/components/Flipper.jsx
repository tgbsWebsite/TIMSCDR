import React, { useState, useEffect } from 'react';
import './Flipper.css';

function Flipper({ messages, direction = 'up', active }) {
  const [index, setIndex] = useState(0);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    if (!active) return;

    setFlip(true);
    const flipTimeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % messages.length);
      setFlip(false);
    }, 600); // animation duration

    return () => clearTimeout(flipTimeout);
  }, [active]); // only flip when "active" changes

  const current = messages[index];
  const flipClass = direction === 'up' ? 'flip-up' : 'flip-down';

  return (
    <div className="flip-card-wrapper">
      <div className={`flip-card ${flipClass} ${flip ? 'flipping' : ''}`}>
        <span className="message-type">{current.type}: </span>
        <a
          href={current.url}
          className="message-text-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {current.text}
        </a>
      </div>
    </div>
  );
}

export default function FlipperPair() {
  const leftMessages = [
    { type: "Bulletin Board", text: "Admissions open till Aug 10", url: "/admissions" },
    { type: "Bulletin Board", text: "Scholarships available for top scorers", url: "/scholarships" },
    { type: "Bulletin Board", text: "AI & Data Science course launched", url: "/courses/ai-data-science" }
  ];

  const rightMessages = [
    { type: "Message Board", text: "Placement stats 2025 released", url: "/placements" },
    { type: "Message Board", text: "100+ top recruiters onboard", url: "/recruiters" },
    { type: "Message Board", text: "Campus hiring starts Sept 5", url: "/campus-hiring" }
  ];

  const [activeSide, setActiveSide] = useState('left');

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSide((prev) => (prev === 'left' ? 'right' : 'left'));
    }, 3000); // alternate every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flipper-pair-container">
      <div className="flipper-section">
        <Flipper messages={leftMessages} direction="up" active={activeSide === 'left'} />
      </div>

      <div className="flipper-divider"></div>

      <div className="flipper-section">
        <Flipper messages={rightMessages} direction="down" active={activeSide === 'right'} />
      </div>
    </div>
  );
}
