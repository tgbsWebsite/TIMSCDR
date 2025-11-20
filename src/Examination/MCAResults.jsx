import React from 'react';
import './MCAResults.css';

const MCAResults = () => {
    return (
        <div className="mca-page">

            <h1 className="heading">University Gazette</h1>
            <main className="mca-main">
                {/* First Half 2025 */}
                <section className="mca-section">
                    <div className="mca-section-bar">
                        <span className="material-icons mca-section-icon">event</span>
                        <h2 className="mca-section-title">First Half 2025</h2>
                    </div>

                    <div className="mca-cards">
                        <div className="mca-card">
                            <h3 className="mca-card-title">Regular</h3>
                            <ul className="mca-list">
                                <li>
                                    <span className="mca-list-dot" />
                                    <a href="#" className="mca-list-link">
                                        MCA (Choice Based) (Two Years Course) Sem-III
                                    </a>
                                </li>
                                <li>
                                    <span className="mca-list-dot" />
                                    <a href="#" className="mca-list-link">
                                        MCA (Choice Based) (Three Years Course) Sem-V
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="mca-card">
                            <h3 className="mca-card-title">KT (Allowed To Keep Terms)</h3>
                            <ul className="mca-list">
                                <li>
                                    <span className="mca-list-dot" />
                                    <a href="#" className="mca-list-link">
                                        KT Examination MCA (Two Years) Sem-I &amp; II
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Second Half 2024 */}
                <section className="mca-section">
                    <div className="mca-section-bar mca-muted">
                        <span className="material-icons mca-section-icon mca-muted">event</span>
                        <h2 className="mca-section-title">Second Half 2024</h2>
                    </div>

                    <div className="mca-cards">
                        <div className="mca-card">
                            <h3 className="mca-card-title">Regular</h3>
                            <ul className="mca-list">
                                <li>
                                    <span className="mca-list-dot" />
                                    <a href="#" className="mca-list-link">
                                        MCA (Choice Based) (Two Years Course) Sem-II
                                    </a>
                                </li>
                                <li>
                                    <span className="mca-list-dot" />
                                    <a href="#" className="mca-list-link">
                                        MCA (Choice Based) (Three Years Course) Sem-IV
                                    </a>
                                </li>
                                <li>
                                    <span className="mca-list-dot" />
                                    <a href="#" className="mca-list-link">
                                        MCA (Revised Course) Sem-VI
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="mca-card">
                            <h3 className="mca-card-title">KT (Allowed To Keep Terms)</h3>
                            <ul className="mca-list">
                                <li>
                                    <span className="mca-list-dot" />
                                    <a href="#" className="mca-list-link">
                                        KT Examination MCA (Three Years) Sem-I to V
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Archived Results */}
                <section className="mca-archive">
                    <div className="mca-archive-head">
                        <div className="mca-archive-title-wrap">
                            <span className="material-icons mca-archive-icon">inventory_2</span>
                            <h3 className="mca-archive-title">Archived Results</h3>
                        </div>
                        <span className="material-icons mca-archive-toggle">expand_less</span>
                    </div>

                    <div className="mca-archive-body">
                        {/* First Half 2024 */}
                        <div className="mca-archive-group">
                            <div className="mca-archive-group-head">
                                <span className="material-icons mca-group-icon">calendar_today</span>
                                <h4 className="mca-archive-group-title">First Half 2024</h4>
                            </div>

                            <div className="mca-archive-grid">
                                <div className="mca-archive-col mca-accent">
                                    <h5 className="mca-archive-col-title">Regular</h5>
                                    <ul className="mca-list mca-small">
                                        <li>
                                            <span className="mca-list-dot mca-small" />
                                            <a href="#" className="mca-list-link">
                                                MCA (Choice Based) (Two Years Course) Sem-I
                                            </a>
                                        </li>
                                        <li>
                                            <span className="mca-list-dot mca-small" />
                                            <a href="#" className="mca-list-link">
                                                MCA (Choice Based) (Three Years Course) Sem-III
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mca-archive-col">
                                    <h5 className="mca-archive-col-title">KT</h5>
                                    <ul className="mca-list mca-small">
                                        <li>
                                            <span className="mca-list-dot mca-small" />
                                            <a href="#" className="mca-list-link">
                                                KT Examination MCA (Two Years) Sem-I
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Second Half 2023 */}
                        <div className="mca-archive-group">
                            <div className="mca-archive-group-head">
                                <span className="material-icons mca-group-icon">calendar_today</span>
                                <h4 className="mca-archive-group-title">Second Half 2023</h4>
                            </div>

                            <div className="mca-archive-grid">
                                <div className="mca-archive-col mca-accent">
                                    <h5 className="mca-archive-col-title">Regular</h5>
                                    <ul className="mca-list mca-small">
                                        <li>
                                            <span className="mca-list-dot mca-small" />
                                            <a href="#" className="mca-list-link">
                                                MCA (Choice Based) (Three Years Course) Sem-II
                                            </a>
                                        </li>
                                        <li>
                                            <span className="mca-list-dot mca-small" />
                                            <a href="#" className="mca-list-link">
                                                MCA (Revised Course) Sem-V
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mca-archive-col">
                                    <h5 className="mca-archive-col-title">KT</h5>
                                    <ul className="mca-list mca-small">
                                        <li>
                                            <span className="mca-list-dot mca-small" />
                                            <a href="#" className="mca-list-link">
                                                KT Examination MCA (Three Years) Sem-I to IV
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mca-archive-footer">
                            <a href="#" className="mca-archive-more">
                                View all archived results...
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default MCAResults;
