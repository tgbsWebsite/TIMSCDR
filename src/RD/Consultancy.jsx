import React from "react";
import "./TechTonics.css";
import Footer from "../components/Footer";
import CTAButtons from "../components/sticky-button";
import Navbar from "../components/navbar";
import "./Consultancy.css";

const ongoingProjects = [
  {
    title: "MMA Website",
    description: `A Website developed for Malad Medical Association, which is one of the oldest (since 1964) and one of the largest and most active association in Mumbai covering Consultants, General Practitioners and having more than 2200 members and rendering health related services to the community through the discipline of modern medicine.`,
    team: [
      "Dr. Vinita Gaikwad, Director",
      "Ms. Kinjal Doshi, Assistant Professor",
    ],
    image: "",
  },
  {
    title: "FOCUS NGO Website",
    description: `Website for Foundation for Childrens’ Universal Support is a Non-Governmental Organization working on child welfare in India. User can give donation for different causes run by the NGO. This website is also having facility to show their different events.`,
    team: [
      "Dr. Vinita Gaikwad, Director",
      "Ms. Kinjal Doshi, Assistant Professor",
      "Ms. Anamika Dhawan, Assistant Professor",
      "Ms. Shweta Waghmare, Assistant Professor",
    ],
    image: "",
  },
  {
    title: "eToken-OPD",
    description: `Application for Health Care Centre under Lokmanya Tilak Municipal General Hospital, Sion to reduce the queues at the Health Care Centre. Using this application patient can generate the token number and accordingly visit the Health Care Centre in provided time slot.`,
    team: [
      "Dr. Vinita Gaikwad, Director",
      "Ms. Monisa Correia, Assistant Professor",
    ],
    image: "",
  },
  {
    title: "DDMM App",
    description: `For small scale dairy farmers, to help analyze milk production of cattle. Farmers can register animals, track milking and pregnancy status, and review cumulative production graphs for each animal.`,
    team: [
      "Dr. Vinita Gaikwad, Director",
      "Ms. Anamika Dhawan, Assistant Professor",
      "Ms. Kinjal Doshi, Assistant Professor",
    ],
    image: "",
  },
  {
    title: "Farmer Produce App",
    description: `Online agriculture marketplace for buying and selling agriculture produce directly from farmers to consumers. Available in English, Hindi, and Marathi.`,
    team: [
      "Dr. Vinita Gaikwad, Director",
      "Ms. Shweta Waghmare, Assistant Professor",
    ],
    image: "",
  },
];

const completedProjects = [
  {
    title: "Amrut Hospital Website",
    description: `Website for Dr. Pramod Bahekar (Amrut Hospital), Dombivli. Allows patients to book appointments online.`,
    team: [
      "Dr. Vinita Gaikwad, Director",
      "Mira Gohil, Assistant Project",
      "Ms. Kinjal Doshi, Assistant Professor",
    ],
    image: "",
  },
  {
    title: "DMI App",
    description: `Mobile app for Department Management Institute (DMI), Bihar to monitor health status of students doing survey work, and to fill daily health reports.`,
    team: [
      "Dr. Vinita Gaikwad, Director",
      "Ms. Mira Gohil, Assistant Professor",
      "Ms. Kinjal Doshi, Assistant Professor",
    ],
    image: "",
  },
  {
    title: "APSO Website",
    description: `Website for Association of Pediatric Surgeon Oncology to manage conference and membership processes for this growing organization.`,
    team: [
      "Dr. Vinita Gaikwad, Director",
      "Ms. Mira Gohil, Assistant Professor",
      "Ms. Kinjal Doshi, Assistant Professor",
    ],
    image: "",
  },
  {
    title: "Indian Carb Counter",
    description: `Nutrition calculation tool for food, for Ms. Sheryl Salis/Nurture Health Solutions.`,
    team: [
      "Dr. Vinita Gaikwad, Director",
      "Ms. Mira Gohil, Assistant Professor",
    ],
    image: "",
  },
  {
    title: 'Milk Donor Awareness Assignment',
    description: `Project on global milk donation for fragile infants in collaboration with LTMMC College and Hospital, Sion.`,
    team: [
      "Dr. Vinita Gaikwad, Director",
      "Ms. Mira Gohil, Assistant Professor",
    ],
    image: "",
  },
  {
    title: "Teratology Mobile App",
    description: `For Dr. Manjusha Paithankar to help understand teratogenic medications and their impacts.`,
    team: [
      "Dr. Vinita Gaikwad, Director",
      "Ms. Mira Gohil, Assistant Professor",
    ],
    image: "",
  },
  {
    title: "Monsoon Related Diseases App",
    description: `Citizen information app for diseases like Dengue, Malaria, Chikungunya, etc., developed jointly by TIMSCDR and MCGM.`,
    team: [
      "Dr. Vinita Gaikwad, Director",
      "Ms. Mira Gohil, Assistant Professor",
    ],
    image: "",
  },
  {
    title: "MGM Dental College & Hospital App",
    description: `Mobile app for MGM Dental College and Hospital.`,
    team: [
      "Dr. Vinita Gaikwad, Director",
      "Ms. Mira Gohil, Assistant Professor",
    ],
    image: "",
  },
  {
    title: "Dr. Jacob Diabetic App",
    description: `For Dr. Jacobs Advanced Diabetic Treatment Centre. Website is in inception stage.`,
    team: [
      "Dr. Vinita Gaikwad, Director",
      "Ms. Mira Gohil, Assistant Professor",
    ],
    image: "",
  },
  {
    title: "Beat Diabetes LTMMC Mumbai App",
    description: `For Lokmanya Tilak Municipal General Hospital and Medical College, released by Dr. Padmaja Keskar, EHO, MCGM.`,
    team: [
      "Dr. Vinita Gaikwad, Director",
      "Ms. Mira Gohil, Assistant Professor",
    ],
    image: "",
  },
];

const Consultancy = () => (
  <>
    <Navbar />
    <CTAButtons />
    <div className="Consultancy-container">
      <header className="Consultancy-header">
        <h1 className="Consultancy-title">Consultancy Cell - IgnoVision</h1>
        <p className="Consultancy-intro">
          TIMSCDR is offering consultancy services through Consultancy Cell – IgnoVision (Ignite your Vision), serving industries, service sectors, government departments, and more in niche areas of expertise.<br /><br />
          Consultancy covers feasibility studies, technology assessments, product design, process and software development, skill transfer, corporate training, and more. Selected specialized areas also offer Testing & Evaluation.<br /><br />
          The Institute is actively engaged in Corporate Trainings, Mobile App & Website Development for local clients.
        </p>
      </header>
      <section className="Consultancy-projects">
        <h2 className="Consultancy-section-title">Ongoing Projects in Consultancy</h2>
        <div className="Consultancy-list">
          {ongoingProjects.map((proj) => (
            <div className="Consultancy-project-card" key={proj.title}>
              <div className="Consultancy-project-image">
                {proj.image ? (
                  <img src={proj.image} alt={proj.title} />
                ) : (
                  <div className="Consultancy-placeholder-img">Image</div>
                )}
              </div>
              <div className="Consultancy-project-content">
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <p className="Consultancy-team">
                  <strong>Team:</strong>{" "}
                  {proj.team.map((member, i, arr) => (
                    <span key={i}>
                      {member}{i < arr.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="Consultancy-projects">
        <h2 className="Consultancy-section-title">Completed Projects in Consultancy</h2>
        <div className="Consultancy-list">
          {completedProjects.map((proj) => (
            <div className="Consultancy-project-card" key={proj.title}>
              <div className="Consultancy-project-image">
                {proj.image ? (
                  <img src={proj.image} alt={proj.title} />
                ) : (
                  <div className="Consultancy-placeholder-img">Image</div>
                )}
              </div>
              <div className="Consultancy-project-content">
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <p className="Consultancy-team">
                  <strong>Team:</strong>{" "}
                  {proj.team.map((member, i, arr) => (
                    <span key={i}>
                      {member}{i < arr.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    <Footer />
  </>
);

export default Consultancy;
