import "./LegacySection.css";

const LegacySection = () => {
  return (
    <section id="legacy-section" className="legacy-section">
      <h2 className="section-heading">
        24 Years of Future-First Learning. <br />
        Where minds are mentored. Where skills are sharpened.
      </h2>

      <div className="card-grid">
        <div className="card">
          <div className="card-number">0</div>
          <div className="card-label">MCA Graduates</div>
        </div>

        <div className="card">
          <div className="card-number">0</div>
          <div className="card-label">Students Enrolled</div>
        </div>

        <div className="card">
          <div className="card-number">0</div>
          <div className="card-label">Industry Recruiters</div>
        </div>

        <div className="card">
          <div className="card-number">2</div>
          <div className="card-label">Flagship MCA Programs</div>
        </div>
      </div>
    </section>
  );
};

export default LegacySection;
