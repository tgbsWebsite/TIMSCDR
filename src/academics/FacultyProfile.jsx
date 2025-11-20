import React from "react";
import "./FacultyProfile.css";

export default function FacultyProfile({ faculty }) {
  if (!faculty) return null;

  const {
    name,
    designation,
    image,
    biography: {
      education = [],
      honorsAwards = [],
      teaching = {},
      publications = [],
      journals = [],
      projects = {},
      certifications = []
    } = {},
  } = faculty;

  return (
    <div className="faculty-details-container">
      <div className="faculty-grid">
        <div className="faculty-sidebar">
          <div className="faculty-card">
            <div className="faculty-image-wrapper">
              <img src={image} alt={`${name} profile`} className="faculty-image" />
            </div>
            <div className="faculty-name">{name}</div>
            <div className="faculty-position">{designation}</div>
          </div>
        </div>

        <div className="faculty-details">

          <div className="faculty-div">
            <div className="faculty-div-title">

              Biography
            </div>

            <div className="faculty-subdiv">
              <h3 className="faculty-subtitle">
                Education
              </h3>
              <ul className="faculty-list">
                {education.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="faculty-subdiv">
              <h3 className="faculty-subtitle">
                Honors & Awards
              </h3>
              <ul className="faculty-list">
                {honorsAwards.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="light-divider" />
          <div className="faculty-div">
            <div className="faculty-div-title">

              Teaching
            </div>

            <div className="faculty-subdiv">
              <h3 className="faculty-subtitle">

                Current Courses
              </h3>
              <ul className="faculty-list">
                {(teaching.currentCourses || []).map((course, idx) => (
                  <li key={idx}>{course}</li>
                ))}
              </ul>
            </div>

            <div className="faculty-subdiv">
              <h3 className="faculty-subtitle">

                Previous Courses
              </h3>
              <ul className="faculty-list">
                {(teaching.previousCourses || []).map((course, idx) => (
                  <li key={idx}>{course}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="light-divider" />
          <div className="faculty-div">
            <div className="faculty-div-title">Publication</div>

            <div className="faculty-subdiv">
              <h3 className="faculty-subtitle">Research Papers</h3>
              <ul className="faculty-list">
                {publications.researchPapers && publications.researchPapers.map(({ title, venue, date, isbn }, idx) => (
                  <li key={idx}>
                    {'\u2018' + title + '\u2019'}, {venue} {date} {isbn ? `, ISBN: ${isbn}` : ''}
                  </li>
                ))}
              </ul>
            </div>

            {publications.journals && publications.journals.length > 0 && (
              <div className="faculty-subdiv">
                <h3 className="faculty-subtitle mt-6">Journals</h3>
                <ul className="faculty-list">
                  {publications.journals.map(({ title, venue, date, issn }, idx) => (
                    <li key={idx}>
                      {'\u2018' + title + '\u2019'}, {venue} {date} {issn ? `, ISSN: ${issn}` : ''}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {publications.books && publications.books.length > 0 && (
              <div className="faculty-subdiv">
                <h3 className="faculty-subtitle mt-6">Books</h3>
                <ul className="faculty-list">
                  {publications.books.map(({ title, isbn }, idx) => (
                    <li key={idx}>
                      {'\u2018' + title + '\u2019'}{isbn ? `, ISBN: ${isbn}` : ''}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {publications.booksWithInstituteName && publications.booksWithInstituteName.length > 0 && (
              <div className="faculty-subdiv">
                <h3 className="faculty-subtitle mt-6">List of Books / Monographs / Edited Books published</h3>
                <ul className="faculty-list">
                  {publications.booksWithInstituteName.map((bookTitle, idx) => (
                    <li key={idx}>{bookTitle}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="light-divider" />
          <div className="faculty-div">
            <div className="faculty-div-title">Projects & Certifications</div>

            {projects.guidedProjects && (
              <div className="faculty-subdiv">
                <h3 className="faculty-subtitle">Guided Projects</h3>
                 <ul className="faculty-list">
                <li>{projects.guidedProjects}</li>
                </ul>
              </div>
            )}

            {certifications.length > 0 && (
              <div className="faculty-subdiv">
                <h3 className="faculty-subtitle">Certifications</h3>
                <ul className="faculty-list">
                  {certifications.map((cert, idx) => (
                    <li key={idx}>{cert}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
