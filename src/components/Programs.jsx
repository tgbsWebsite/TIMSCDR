import { Link } from 'react-router-dom';
import './Programs.css';

function Programs() {
  return (
    <section className="programs-section">
      <h2 className="programs-heading">Programs Offered</h2>

      <div className="programs-grid">
        <Link to="/programs/mca" className="program-card">
          <h3>MCA (Master of Computer Applications)</h3>
          <p>A 2-year postgraduate program focused on advanced software development and IT.</p>
        </Link>

        <Link to="/programs/working-professionals" className="program-card">
          <h3>MCA for Working Professionals</h3>
          {/* <p>Specially designed for IT professionals to upgrade while working.</p> */}
        </Link>

        <Link to="/programs/integrated-mca" className="program-card">
          <h3>Integrated MCA</h3>
          {/* <p>A dual-degree program combining BCA and MCA in one streamlined track.</p> */}
        </Link>

        <Link to="/programs/phd" className="program-card">
          <h3>Ph.D</h3>
          {/* <p>Doctoral program for research in computer science and applications.</p> */}
        </Link>
      </div>
    </section>
  );
}

export default Programs;
