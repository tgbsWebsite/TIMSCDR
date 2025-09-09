import React, { useState, useEffect } from "react";
import "./flipper-pair.css";

function FlipperCard({
  messages = [],
  direction = "up",
  active,
  label = "updates",
}) {
  const [index, setIndex] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const [flipCount, setFlipCount] = useState(0);

  const [remaining, setRemaining] = useState(Math.max(0, messages.length)); // total at mount

  // When the active flag turns on for a cycle, trigger a flip and decrement remaining
  useEffect(() => {
    if (!active || messages.length === 0) return;
    setFlipping(true);

    const flipTimeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % messages.length);
      setFlipCount((c) => (c + 1) % 4); // advance dot forward 0→1→2→3→0
      setFlipping(false);

      setRemaining((r) => (r > 0 ? r - 1 : 0)); // keep existing decrement if still used elsewhere
    }, 600);

    return () => clearTimeout(flipTimeout);
  }, [active, messages.length]);

  // Reset remaining if the messages array changes length
  useEffect(() => {
    setRemaining(Math.max(0, messages.length));
    setIndex(0);
  }, [messages.length]);

  if (!messages.length) {
    return (
      <div className="fp-card-wrapper" aria-live="polite">
        <div className="fp-card">
          <div className="fp-card-content">
            <div className="fp-message-header">
              <div className="fp-type-badge" aria-hidden="true">
                <div className="fp-badge-icon">
                  {current.type === "Bulletin Board" ? "📢" : "💼"}
                </div>
              </div>
              <div className="fp-pulse-indicator" aria-hidden="true"></div>
            </div>

            {/* New line: forward-moving dots below header */}
            <div
              className="fp-dot-indicator fp-dot-row"
              aria-label={`${label} progress`}
              role="img"
              aria-live="polite"
            >
              {Array.from({ length: 4 }).map((_, i) => {
                const activeDot = flipCount % 4; // forward progression
                return (
                  <span
                    key={i}
                    className={`fp-dot ${
                      i === activeDot ? "fp-dot-active" : ""
                    }`}
                    aria-hidden="true"
                  />
                );
              })}
            </div>

            <div className="fp-message-text-link" aria-disabled="true">
              No messages available
              <div className="fp-link-arrow">→</div>
            </div>
          </div>
          <div className="fp-card-glow"></div>
        </div>
        <div
          className="fp-dot-indicator fp-dot-row"
          aria-label={`${label} progress`}
          role="img"
          aria-live="polite"
        >
          {Array.from({ length: 4 }).map((_, i) => {
            const activeDot = flipCount % 4; // forward progression
            return (
              <span
                key={i}
                className={`fp-dot ${i === activeDot ? "fp-dot-active" : ""}`}
                aria-hidden="true"
              />
            );
          })}
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
            {/* Icon preserved; no visible type text */}
            <div className="fp-type-badge" aria-hidden="true">
              <div className="fp-badge-icon">
                {current.type === "Bulletin Board" ? "📢" : "💼"}
              </div>
            </div>

            {/* Live decreasing count */}
            {/* Dot indicator replaces numeric count */}

            <div className="fp-pulse-indicator" aria-hidden="true"></div>
          </div>

          {current.url ? (
            <a
              href={current.url}
              className="fp-message-text-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={current.text}
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

        <div
          className="fp-dot-indicator fp-dot-row"
          aria-label={`${label} progress`}
          role="img"
          aria-live="polite"
        >
          {Array.from({ length: 4 }).map((_, i) => {
            const activeDot = flipCount % 4; // forward progression
            return (
              <span
                key={i}
                className={`fp-dot ${i === activeDot ? "fp-dot-active" : ""}`}
                aria-hidden="true"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function FlipperPair() {
  const leftMessages = [
    {
      type: "Bulletin Board",
      text: "Admissions open till Aug 10",
      url: "/admissions",
    },
    {
      type: "Bulletin Board",
      text: "Scholarships available for top scorers ",
      url: "/scholarships",
    },
    {
      type: "Bulletin Board",
      text: "AI & Data Science course launched",
      url: "/courses/ai-data-science",
    },
  ];

  const rightMessages = [
    {
      type: "Message Board",
      text: "Placement stats 2025 released",
      url: "/placements",
    },
    {
      type: "Message Board",
      text: "100+ top recruiters onboard",
      url: "/recruiters",
    },
    {
      type: "Message Board",
      text: "Campus hiring starts Sept 5",
      url: "/campus-hiring",
    },
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
        <FlipperCard
          messages={leftMessages}
          direction="up"
          active={activeSide === "left"}
          label="left updates"
        />
      </div>

      <div className="fp-section">
        <FlipperCard
          messages={rightMessages}
          direction="down"
          active={activeSide === "right"}
          label="right updates"
        />
      </div>
    </div>
  );
}
