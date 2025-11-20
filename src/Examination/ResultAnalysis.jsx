import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar'; // Adjust path as needed
import Footer from "../components/Footer";
import './ResultAnalysis.css';
import PageHeader from '../about/PageHeader';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const ResultAnalysis = () => {
  const { year } = useParams();
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedYear, setSelectedYear] = useState(year || '2024');
  const [selectedSemester, setSelectedSemester] = useState('all');

  // const availableYears = ['2024', '2023', '2022', '2021', '2020'];
  // const availableSemesters = [
  //   { value: 'all', label: 'All Semesters' },
  //   { value: '1', label: 'Semester 1' },
  //   { value: '2', label: 'Semester 2' },
  //   { value: '3', label: 'Semester 3' },
  //   { value: '4', label: 'Semester 4' }
  // ];

  useEffect(() => {
    fetchResults();
    // eslint-disable-next-line
  }, [selectedYear, selectedSemester]);

  const fetchResults = async () => {
    setLoading(true);
    setError(null);

    try {
      let url = `${API_URL}/result-analysis?year=${selectedYear}`;
      if (selectedSemester !== 'all') {
        url += `&semester=${selectedSemester}`;
      }
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch results');
      const data = await response.json();
      setResults(data);
    } catch (err) {
      setError(err.message);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleYearChange = (newYear) => {
    setSelectedYear(newYear);
    navigate(`/result-analysis/${newYear}`);
  };

  const handleSemesterChange = (newSemester) => {
    setSelectedSemester(newSemester);
  };

  const calculateStats = () => {
    if (results.length === 0) return null;

    const sgpiValues = results.map(r => parseFloat(r.sgpi)).filter(s => !isNaN(s));
    const universityRanks = results.map(r => parseInt(r.university_rank)).filter(r => !isNaN(r));
    const instituteRanks = results.map(r => parseInt(r.institute_rank)).filter(r => !isNaN(r));

    return {
      totalStudents: results.length,
      avgSGPI: sgpiValues.length ? (sgpiValues.reduce((a, b) => a + b, 0) / sgpiValues.length).toFixed(2) : 'N/A',
      bestUniversityRank: universityRanks.length ? Math.min(...universityRanks) : 'N/A',
      bestInstituteRank: instituteRanks.length ? Math.min(...instituteRanks) : 'N/A',
    };
  };

  const stats = calculateStats();

  // Consistent loading/error center message as in Trekking.jsx
  const centerMessage = loading
    ? 'Loading results...'
    : error
      ? `Error: ${error}`
      : null;

  return (
    <>
      <Navbar />
      <div className="result-analysis-container ">
        <div className="header-section">
           <PageHeader
                    title="Result Analysis"
                    crumbs={[
                      { label: "Home", href: "/" },
                      { label: "Result Analysis" },
                    ]}
                  />
          <p className="page-subtitle">Celebrating Excellence in Academic Performance,Our toppers have set benchmarks in both university ranks and institute achievements:
            TIMSCDR congratulates all achievers for their hard work and commitment towards academic excellence.</p>
          <div className="filters">
   
          </div>
        </div>
      </div>

      {centerMessage ? (
        <div className="center-message-container">
          <p className="center-message">{centerMessage}</p>
        </div>
      ) : (
        <>
          {stats && (
            <div className="stats-section">
              <h2>Statistics</h2>
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-value">{stats.totalStudents}</div>
                  <div className="stat-label">Total Students</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value">{stats.avgSGPI}</div>
                  <div className="stat-label">Average SGPI</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value">{stats.bestUniversityRank}</div>
                  <div className="stat-label">Best University Rank</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value">{stats.bestInstituteRank}</div>
                  <div className="stat-label">Best Institute Rank</div>
                </div>
              </div>
            </div>
          )}
          <div className="results-section">
            <h2>Student Results</h2>
            {results.length === 0 ? (
              <div className="no-results">
                <p>No results found for the selected criteria.</p>
              </div>
            ) : (
              <div className="results-table-container">
                <table className="results-table">
                  <thead>
                    <tr>
                      <th>Year</th>
                      <th>Semester</th>
                      <th>Student Name</th>
                      <th>SGPI</th>
                      <th>University Rank</th>
                      <th>Institute Rank</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((result, index) => (
                      <tr key={index} className="result-row">
                        <td className="year-cell">{result.year}</td>
                        <td className="semester-cell">{result.semester}</td>
                        <td className="name-cell">{result.name}</td>
                        <td className="sgpi-cell">
                          <span className={`sgpi-badge ${parseFloat(result.sgpi) >= 9 ? 'excellent' : parseFloat(result.sgpi) >= 8 ? 'good' : 'average'}`}>
                            {result.sgpi}
                          </span>
                        </td>
                        <td className="rank-cell">
                          <span className="rank-badge university">{result.university_rank}</span>
                        </td>
                        <td className="rank-cell">
                          <span className="rank-badge institute">{result.institute_rank}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </>
      )}
      {/* </div> */}
      <Footer />
    </>
  );
};

export default ResultAnalysis;
