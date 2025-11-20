import './VisionMission.css';


function VisionMission() {
  return (
    <section className="vision-mission-section">
      <h2 className="about-us-heading">About TIMSCDR <hr className="about-us-divider" /></h2>
     

      <div className="vision-mission-wrapper">
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            Thakur Institute of Management Studies, Career Development & Research will become a premier institute renowned internationally for providing education in software application
            to graduates from various disciplines.
          </p>
        </div>

        <div className="divider" />

        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            To achieve excellence in providing software education so that students can grasp existing as well as emerging technologies and to inculcate leadership and managerial qualities in them so that they can deliver results in the organization they join.
          </p>
        </div>
      </div>
    </section>
  );
}

export default VisionMission;
