import './EducationPartners.css';

function EducationPartners() {
  return (
    <div className="edu-circle-logos">
  <h2 className="edu-section-heading">Awards and Recognition<hr className="about-us-divider" /></h2>
  <div className="circle-grid">
    {['logo1.png', 'logo2.png', 'logo3.png', 'logo4.png', 'logo5.png'].map((logo, i) => (
      <div className="circle-card" key={i}>
        <img src={`/images/educationpartner/${logo}`} alt={`Partner ${i + 1}`} />
      </div>
    ))}
  </div>
</div>


  );
}

export default EducationPartners;
