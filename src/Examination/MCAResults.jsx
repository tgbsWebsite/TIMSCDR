import React from 'react';
import './MCAResults.css';

const MCAResults = () => {
  return (
    <div className="page-bg">
      <div className="container">
        <header className="header">
          <h1 className="title">MCA Exam Results</h1>
          <p className="subtitle">Master of Computer Applications</p>
        </header>

        <main className="main">
          {/* First Half 2025 */}
          <section>
            <h2 className="section-heading primary">
              <span className="material-icons heading-icon primary">calendar_month</span>
              <span>First Half 2025</span>
            </h2>

            <div className="cards two-col">
              {/* Regular */}
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Regular</h3>
                  <ul className="list">
                    <li className="list-item">
                      <span className="material-icons list-icon primary-strong">article</span>
                      <a href="#" className="list-link">
                        MCA (Choice Based) (Two Years Course) Sem-III
                      </a>
                    </li>
                    <li className="list-item">
                      <span className="material-icons list-icon primary-strong">article</span>
                      <a href="#" className="list-link">
                        MCA (Choice Based) (Three Years Course) Sem-V
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* KT */}
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">KT (Allowed To Keep Terms)</h3>
                  <ul className="list">
                    <li className="list-item">
                      <span className="material-icons list-icon primary-strong">article</span>
                      <a href="#" className="list-link">
                        KT Examination MCA (Two Years) Sem-I &amp; II
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Second Half 2024 */}
          <section>
            <h2 className="section-heading gray">
              <span className="material-icons heading-icon gray">calendar_month</span>
              <span>Second Half 2024</span>
            </h2>

            <div className="cards two-col">
              {/* Regular */}
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Regular</h3>
                  <ul className="list">
                    <li className="list-item">
                      <span className="material-icons list-icon gray-strong">article</span>
                      <a href="#" className="list-link">
                        MCA (Choice Based) (Two Years Course) Sem-II
                      </a>
                    </li>
                    <li className="list-item">
                      <span className="material-icons list-icon gray-strong">article</span>
                      <a href="#" className="list-link">
                        MCA (Choice Based) (Three Years Course) Sem-IV
                      </a>
                    </li>
                    <li className="list-item">
                      <span className="material-icons list-icon gray-strong">article</span>
                      <a href="#" className="list-link">
                        MCA (Revised Course) Sem-VI
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* KT */}
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">KT (Allowed To Keep Terms)</h3>
                  <ul className="list">
                    <li className="list-item">
                      <span className="material-icons list-icon gray-strong">article</span>
                      <a href="#" className="list-link">
                        KT Examination MCA (Three Years) Sem-I to V
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Archived */}
          <section className="archive">
            <h3 className="archive-title">
              <span className="material-icons archive-icon">inventory_2</span>
              <span>Archived Results</span>
            </h3>
            <p className="archive-text">
              Looking for older results?{' '}
              <a href="#" className="archive-link">Visit the results archive</a>
            </p>
          </section>
        </main>
      </div>

      <footer className="footer">
        <div className="container footer-inner">
          <p className="footer-text">© 2024 University Name. All Rights Reserved.</p>
          <div className="footer-icons">
            <a href="#" className="footer-icon-link" aria-label="Facebook">
              <i className="material-icons">facebook</i>
            </a>
            <a href="#" className="footer-icon-link" aria-label="Website">
              <i className="material-icons">public</i>
            </a>
            <a href="#" className="footer-icon-link" aria-label="About">
              <i className="material-icons">info</i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MCAResults;
