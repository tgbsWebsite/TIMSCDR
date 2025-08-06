import './Recruiters.css';

function Recruiters() {
  const recruiters = [
    'TCS', 'Infosys', 'Wipro', 'Capgemini', 'Accenture',
    'IBM', 'HCL', 'Deloitte', 'Tech Mahindra'
  ];

  // Duplicate array to fake infinite scroll
  const allRecruiters = [...recruiters, ...recruiters];

  return (
    <section className="recruiters-section">
      <h2 className="recruiters-heading">Our Recruiters</h2>
      <div className="logo-slider">
        <div className="logo-track">
          {allRecruiters.map((name, index) => (
            <div className="logo-slide placeholder" key={index}>
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Recruiters;
