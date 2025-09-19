import React, { useEffect } from "react";
import './ResultAnalysis.css'

export default function ResultAnalysis() {
  useEffect(() => {
    // Simple dropdown toggle (replacing Alpine.js)
    const btn = document.querySelector(".ra-user-toggle");
    const menu = document.querySelector(".ra-user-menu");
    const onDocClick = (e) => {
      if (!menu || !btn) return;
      if (btn.contains(e.target)) {
        menu.classList.toggle("is-open");
      } else if (!menu.contains(e.target)) {
        menu.classList.remove("is-open");
      }
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
    <div className="ra-root ra-font-display ra-bg-light ra-text-primary">

      <main>


        <section className="ra-body">
          <div className="vision-mission-container">
            <div className="ra-grid">
              <aside className="ra-aside">
                <div className="ra-aside-list">
                  {[
                    "Result Analysis Academic year 2023-24",
                    "Result Analysis Academic year 2022-23",
                    "Result Analysis Academic year 2021-22",
                    "Result Analysis Academic year 2020-21",
                    "Result Analysis Academic year 2019-20",
                    "Result Analysis Academic year 2018-19",
                    "Result Analysis Academic year 2017-18",
                    "Result Analysis Academic year 2016-17",
                    "Result Analysis Academic year 2015-16",
                  ].map((label, i) => (
                    <button key={i} className="ra-aside-btn">
                      <span className="ra-aside-text">{label}</span>
                      <span className="material-icons ra-aside-chevron">chevron_right</span>
                    </button>
                  ))}
                </div>
              </aside>

              <section className="ra-content">
                <div className="ra-card">
                  <div>
                    <nav aria-label="Breadcrumb" className="ra-breadcrumb">
                      <ol className="ra-breadcrumb-list">
                        <li className="ra-breadcrumb-item">
                          <a className="ra-breadcrumb-link" href="#">Home</a>
                          <span className="material-icons ra-breadcrumb-sep">chevron_right</span>
                        </li>
                        <li className="ra-breadcrumb-current">
                          Result Analysis (A.Y. 2023-24)
                        </li>
                      </ol>
                    </nav>

                    <h2 className="ra-section-title">Semester wise Analysis</h2>
                    <p className="ra-section-subtitle">Second Half 2023 (Dec 23) Examination</p>

                    <div className="ra-table-wrap">
                      <table className="ra-table">
                        <thead className="ra-thead">
                          <tr>
                            <th className="ra-th" scope="col">Semester</th>
                            <th className="ra-th" scope="col">No. of Student Appeared</th>
                            <th className="ra-th" scope="col">No. of Student Passed</th>
                            <th className="ra-th" scope="col">Institute Percentage</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="ra-tr">
                            <td className="ra-td ra-td-strong">Sem III</td>
                            <td className="ra-td">59</td>
                            <td className="ra-td">59</td>
                            <td className="ra-td">100%</td>
                          </tr>
                          <tr className="ra-tr">
                            <td className="ra-td ra-td-strong">Sem I</td>
                            <td className="ra-td">120</td>
                            <td className="ra-td">119</td>
                            <td className="ra-td">99.17%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h2 className="ra-section-title">Topper Information (A.Y. -2023-24)</h2>
                    <p className="ra-section-subtitle">Semester wise</p>

                    <div className="ra-table-wrap">
                      <table className="ra-table">
                        <thead className="ra-thead">
                          <tr>
                            <th className="ra-th" scope="col">Year</th>
                            <th className="ra-th" scope="col">Semester</th>
                            <th className="ra-th" scope="col">Name</th>
                            <th className="ra-th" scope="col">SGPI</th>
                            <th className="ra-th" scope="col">University Rank</th>
                            <th className="ra-th" scope="col">Institute Rank</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="ra-tr">
                            <td className="ra-td ra-td-strong" rowSpan={3}>Dec 2023 Exam</td>
                            <td className="ra-td ra-td-strong" rowSpan={3}>Sem III</td>
                            <td className="ra-td">MS. GURAV PRERANA PRAMOD</td>
                            <td className="ra-td">9.55</td>
                            <td className="ra-td">-</td>
                            <td className="ra-td">1</td>
                          </tr>
                          <tr className="ra-tr">
                            <td className="ra-td">MR. TANAWADE PRASAD SUNIL</td>
                            <td className="ra-td">9.36</td>
                            <td className="ra-td">-</td>
                            <td className="ra-td">2</td>
                          </tr>
                          <tr className="ra-tr">
                            <td className="ra-td">MS. PATIL TEJAL SUNIL</td>
                            <td className="ra-td">9.27</td>
                            <td className="ra-td">-</td>
                            <td className="ra-td">3</td>
                          </tr>

                          <tr className="ra-tr">
                            <td className="ra-td ra-td-strong" rowSpan={3}>Dec 2023 Exam</td>
                            <td className="ra-td ra-td-strong" rowSpan={3}>Sem I</td>
                            <td className="ra-td">MR. ANJARLEKAR ATHARVA PRAMOD</td>
                            <td className="ra-td">9.73</td>
                            <td className="ra-td">-</td>
                            <td className="ra-td">1</td>
                          </tr>
                          <tr className="ra-tr">
                            <td className="ra-td">MS. JADHAV PRATIKSHA SANJAY</td>
                            <td className="ra-td">9.68</td>
                            <td className="ra-td">-</td>
                            <td className="ra-td">2</td>
                          </tr>
                          <tr className="ra-tr">
                            <td className="ra-td">MS. GUPTA MUSKAN DINESH</td>
                            <td className="ra-td">9.64</td>
                            <td className="ra-td">-</td>
                            <td className="ra-td">3</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
      {/* Head tags needed in index.html:
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      */}
    </div>
  );
}
