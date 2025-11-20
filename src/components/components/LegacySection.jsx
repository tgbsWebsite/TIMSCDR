import React from "react";
import "./LegacySection.css";

const LegacySection = () => {
  return (
    <div className="fs-root">
      <div className="fs-shape fs-shape-1" />
      <div className="fs-shape fs-shape-2" />
      <div className="fs-shape fs-shape-3" />

      <div className="fs-container">
        <section className="fs-hero">
          <h2 className="fs-title">24 Years of Future-First Learning</h2>
          
          <p className="fs-subtitle">
            Where minds are mentored. Where skills are sharpened.
          </p>
        </section>

        <div className="fs-grid">
          <article className="fs-card">
            <div className="fs-card-content">
              <div className="fs-number">000</div>
              <div className="fs-text">
                <div className="fs-card-title">Honors & Awards</div>
                <div className="fs-desc">
                  MCA GRADUATES have won recognition for their outstanding
                  achievements
                </div>
              </div>
              <div className="fs-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </article>

          <article className="fs-card">
            <div className="fs-card-content">
              <div className="fs-number">0</div>
              <div className="fs-text">
                <div className="fs-card-title">Student Success</div>
                <div className="fs-desc">
                  STUDENTS ENROLLED in our comprehensive MCA programs
                </div>
              </div>
              <div className="fs-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </article>

          <article className="fs-card">
            <div className="fs-card-content">
              <div className="fs-number">0</div>
              <div className="fs-text">
                <div className="fs-card-title">Industry Connect</div>
                <div className="fs-desc">
                  INDUSTRY RECRUITERS actively partner with our programs
                </div>
              </div>
              <div className="fs-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 6H16V4C16 2.89 15.11 2 14 2H10C8.89 2 8 2.89 8 4V6H4C2.89 6 2 6.89 2 8V19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM10 4H14V6H10V4Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </article>

          <article className="fs-card fs-card--highlight">
            <div className="fs-card-content">
              <div className="fs-number">2</div>
              <div className="fs-text">
                <div className="fs-card-title">Program Excellence</div>
                <div className="fs-desc">
                  FLAGSHIP MCA PROGRAMS leading the future of technology
                  education
                </div>
              </div>
              <div className="fs-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L13.09 8.26L20 9L14 14.74L15.18 21.02L12 17.27L8.82 21.02L10 14.74L4 9L10.91 8.26L12 2Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default LegacySection;
