import React, { useEffect, useRef, useState } from 'react';
import './ICAIMPage.css';

const ICAIMPage = () => {
  const headerRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('day1');

  useEffect(() => {
    const onScroll = () => {
      if (!headerRef.current) return;
      if (window.scrollY > 100) {
        headerRef.current.classList.add('icaim25-header--scrolled');
      } else {
        headerRef.current.classList.remove('icaim25-header--scrolled');
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const options = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('icaim25-fade-in--visible');
      });
    }, options);

    document.querySelectorAll('.icaim25-fade-in').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleAnchorClick = (e, selector) => {
    e.preventDefault();
    const target = document.querySelector(selector);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileMenuOpen(false);
  };

  const navLink = (href, label) => (
    <li>
      <a href={href} className="icaim25-nav-link" onClick={(e) => handleAnchorClick(e, href)}>
        {label}
      </a>
    </li>
  );

  const scheduleTab = (key, label) => (
    <div
      role="button"
      tabIndex={0}
      onClick={() => setActiveTab(key)}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActiveTab(key)}
      className={`icaim25-schedule-tab ${activeTab === key ? 'icaim25-schedule-tab--active' : ''}`}
    >
      {label}
    </div>
  );

  const onSubmitContact = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    e.currentTarget.reset();
  };

  return (
    <>
      <section className="icaim25-hero" id="home">
        <div className="icaim25-hero-content">
          <div className="icaim25-hero-text">
            <div className="icaim25-conference-date">February 8-9, 2025</div>
            <h1>International Conference on Advances in Information Technology and Management</h1>
            <p className="icaim25-hero-subtitle">
              ICAIM 2025 - Leveraging Information for Sustainability in Agriculture &amp; Healthcare – Viksit Bharat
            </p>

            <div className="icaim25-hero-stats">
              <div className="icaim25-stat">
                <span className="icaim25-stat-number">100+</span>
                <span className="icaim25-stat-label">Research Papers</span>
              </div>
              <div className="icaim25-stat">
                <span className="icaim25-stat-number">54</span>
                <span className="icaim25-stat-label">Posters</span>
              </div>
              <div className="icaim25-stat">
                <span className="icaim25-stat-number">2</span>
                <span className="icaim25-stat-label">Days</span>
              </div>
              <div className="icaim25-stat">
                <span className="icaim25-stat-number">5+</span>
                <span className="icaim25-stat-label">Partners</span>
              </div>
            </div>

            <div className="icaim25-hero-actions">
              <a href="#about" className="icaim25-btn icaim25-btn--primary" onClick={(e) => handleAnchorClick(e, '#about')}>
                <i className="fas fa-info-circle" />
                Learn More
              </a>
              <a
                href="#schedule"
                className="icaim25-btn icaim25-btn--outline"
                onClick={(e) => handleAnchorClick(e, '#schedule')}
              >
                <i className="fas fa-calendar" />
                View Schedule
              </a>
            </div>
          </div>

          <div className="icaim25-hero-visual">
            <div className="icaim25-conference-image">
              <i className="fas fa-microchip" />
            </div>
          </div>
        </div>
      </section>

      <section className="icaim25-theme-banner">
        <h2>Conference Theme</h2>
        <p>"Leveraging Information for Sustainability in Agriculture &amp; Healthcare – Viksit Bharat"</p>
      </section>

      <section className="icaim25-about icaim25-fade-in" id="about">
        <div className="icaim25-about-container">
          <div className="icaim25-about-content">
            <h2>About ICAIM 2025</h2>
            <p>
              The Thakur Institute of Management Studies, Career Development and Research (TIMSCDR) organized ICAIM 2025, focusing
              on leveraging information technology for sustainability in agriculture and healthcare, contributing to the vision of
              Viksit Bharat.
            </p>
            <p>
              The conference was held in a blended mode, bringing together experts from IT, agriculture, and medicine to explore
              innovative solutions and drive transformative changes for a developed India.
            </p>
          </div>

          <div className="icaim25-partners-section">
            <h3>In Association With</h3>
            <div className="icaim25-partners-grid">
              <div className="icaim25-partner-card">
                <strong>AMC</strong>
                <p>Association of Medical Consultants</p>
              </div>
              <div className="icaim25-partner-card">
                <strong>MACCIA</strong>
                <p>Maharashtra Chamber of Commerce</p>
              </div>
              <div className="icaim25-partner-card">
                <strong>MMA</strong>
                <p>Malad Medical Association</p>
              </div>
              <div className="icaim25-partner-card">
                <strong>GIST</strong>
                <p>Global Indian Scientists &amp; Technocrats Forum</p>
              </div>
              <div className="icaim25-partner-card">
                <strong>NCSH</strong>
                <p>Nordic Center for Sustainable Healthcare</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="icaim25-speakers icaim25-fade-in" id="speakers">
        <div className="icaim25-section-header">
          <h2>Distinguished Speakers</h2>
          <p>Leading experts from academia and industry sharing insights on IT, agriculture, and healthcare</p>
        </div>

        <div className="icaim25-speakers-grid">
          {[
            {
              icon: 'fas fa-user-tie',
              name: 'Dr. Suresh Shan',
              title: 'Chairman, CSI Mumbai Chapter',
              desc:
                'Chief Guest for Day 1 inauguration, leading expert in computer science and information systems.',
            },
            {
              icon: 'fas fa-user-md',
              name: 'Dr. Vivek Dwivedi',
              title: 'President, AMC & Orthopaedic Surgeon',
              desc: 'Chief Guest for Day 2, advocating for latest innovations in healthcare technology.',
            },
            {
              icon: 'fas fa-seedling',
              name: 'Dr. Prakash Jha',
              title: 'Agriculture Climatology Professor, Mississippi State University',
              desc: 'Expert in AI applications in agriculture, precision farming, and climate forecasting.',
            },
            {
              icon: 'fas fa-robot',
              name: 'Dr. Gopal Shinde',
              title:
                'Head, Mechanical Engineering Dept, Vasantrao Naik Marathwada Krishi Vidyapeeth',
              desc: 'Specialist in agri-bots, drone components, and precision agriculture systems.',
            },
            {
              icon: 'fas fa-stethoscope',
              name: 'Dr. Shalin Soni',
              title: 'President, MMA & Physician & Surgeon',
              desc:
                'Advocate for AI implementation in healthcare with focus on constructive impact.',
            },
            {
              icon: 'fas fa-chart-bar',
              name: 'Mr. Santosh Chapaneri',
              title: 'Lead Data Scientist, UpToDate',
              desc: 'Expert in AI healthcare applications, emphasizing clinician integration and ethics.',
            },
            {
              icon: 'fas fa-globe',
              name: 'Mr. Johannes Brundin',
              title: 'Nordic Center for Sustainable Healthcare',
              desc: 'International speaker on sustainable healthcare practices and digital transformation.',
            },
            {
              icon: 'fas fa-laptop-code',
              name: 'Mr. Jyotish Kumar Ghosh',
              title: 'Chief Sales Officer, 3i Infotech Ltd',
              desc: 'Technology leader with expertise in enterprise IT solutions and digital innovation.',
            },
            {
              icon: 'fas fa-microscope',
              name: 'Dr. Anand Rao',
              title: 'Healthcare Technology Expert',
              desc:
                'Specialist in AI and blockchain applications in healthcare and secure health records.',
            },
          ].map((s) => (
            <div className="icaim25-speaker-card" key={s.name}>
              <div className="icaim25-speaker-image">
                <i className={s.icon} />
              </div>
              <div className="icaim25-speaker-info">
                <h3>{s.name}</h3>
                <p className="icaim25-speaker-title">{s.title}</p>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="icaim25-schedule icaim25-fade-in" id="schedule">
        <div className="icaim25-section-header">
          <h2>Conference Schedule</h2>
          <p>Two days of insightful sessions, workshops, and networking opportunities</p>
        </div>

        <div className="icaim25-schedule-wrap">
          <div className="icaim25-schedule-tabs">
            {scheduleTab('day1', 'Day 1 - Feb 8')}
            {scheduleTab('day2', 'Day 2 - Feb 9')}
            {scheduleTab('pre', 'Pre-Conference')}
          </div>

          <div className="icaim25-schedule-content">
            {activeTab === 'day1' && (
              <div className="icaim25-tab-panel">
                <div className="icaim25-schedule-item">
                  <div className="icaim25-schedule-time">Opening</div>
                  <div className="icaim25-schedule-details">
                    <h4>Inauguration Ceremony</h4>
                    <div className="icaim25-schedule-speaker">
                      Chief Guest: Dr. Suresh Shan, Chairman CSI
                    </div>
                    <p>
                      Welcome address by Dr. Vinita Gaikwad, Director TIMSCDR. Highlighting significance of AI in agriculture and
                      healthcare.
                    </p>
                  </div>
                </div>

                <div className="icaim25-schedule-item">
                  <div className="icaim25-schedule-time">Session 1</div>
                  <div className="icaim25-schedule-details">
                    <h4>AI in Agriculture</h4>
                    <div className="icaim25-schedule-speaker">
                      Dr. Prakash Jha, Mississippi State University
                    </div>
                    <p>
                      Transforming precision farming, pest detection, climate forecasting, and crop monitoring with live project
                      examples.
                    </p>
                  </div>
                </div>

                <div className="icaim25-schedule-item">
                  <div className="icaim25-schedule-time">Session 2</div>
                  <div className="icaim25-schedule-details">
                    <h4>Agri-bots and Precision Agriculture</h4>
                    <div className="icaim25-schedule-speaker">
                      Dr. Gopal Shinde, Vasantrao Naik Marathwada Krishi Vidyapeeth
                    </div>
                    <p>
                      Designing agri-bots, drone components, AGVs, and RFID-based livestock health management systems.
                    </p>
                  </div>
                </div>

                <div className="icaim25-schedule-item">
                  <div className="icaim25-schedule-time">Panel</div>
                  <div className="icaim25-schedule-details">
                    <h4>Leveraging IT for Sustainability in Agriculture – Viksit Bharat</h4>
                    <div className="icaim25-schedule-speaker">
                      Moderated by Mr. Dinesh Singh, TCS Digital Farming Initiative
                    </div>
                    <p>
                      Discussion on climate change, agricultural automation, AI, Blockchain, and IoT solutions for sustainable
                      agriculture.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'day2' && (
              <div className="icaim25-tab-panel">
                <div className="icaim25-schedule-item">
                  <div className="icaim25-schedule-time">Opening</div>
                  <div className="icaim25-schedule-details">
                    <h4>Day 2 Inauguration</h4>
                    <div className="icaim25-schedule-speaker">
                      Chief Guest: Dr. Vivek Dwivedi, President AMC
                    </div>
                    <p>Focus on empowering doctors with latest innovations for better healthcare delivery.</p>
                  </div>
                </div>

                <div className="icaim25-schedule-item">
                  <div className="icaim25-schedule-time">Session 1</div>
                  <div className="icaim25-schedule-details">
                    <h4>AI in Healthcare</h4>
                    <div className="icaim25-schedule-speaker">
                      Mr. Santosh Chapaneri, Lead Data Scientist, UpToDate
                    </div>
                    <p>
                      Role of clinicians in AI integration, ensuring accuracy, ethics, and effectiveness in healthcare solutions.
                    </p>
                  </div>
                </div>

                <div className="icaim25-schedule-item">
                  <div className="icaim25-schedule-time">International</div>
                  <div className="icaim25-schedule-details">
                    <h4>Sustainable Healthcare Practices</h4>
                    <div className="icaim25-schedule-speaker">
                      Mr. Johannes Brundin &amp; Mr. Diego Angelino, NCSH
                    </div>
                    <p>
                      Online international speaker session on sustainable healthcare practices and digital transformation.
                    </p>
                  </div>
                </div>

                <div className="icaim25-schedule-item">
                  <div className="icaim25-schedule-time">Panel</div>
                  <div className="icaim25-schedule-details">
                    <h4>Digital Public Infrastructure in Healthcare</h4>
                    <div className="icaim25-schedule-speaker">
                      Moderated by Dr. Mukesh Gupta, AMC
                    </div>
                    <p>
                      Discussion on transformative role of digital infrastructure, technological advancements, and interdisciplinary
                      collaboration.
                    </p>
                  </div>
                </div>

                <div className="icaim25-schedule-item">
                  <div className="icaim25-schedule-time">Workshop</div>
                  <div className="icaim25-schedule-details">
                    <h4>Personalized Patient Engagement with AI</h4>
                    <div className="icaim25-schedule-speaker">TIMSCDR Faculty</div>
                    <p>
                      Hands-on workshop covering AI-assisted videos, chatbots, data management, and digital visiting cards for
                      doctors.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'pre' && (
              <div className="icaim25-tab-panel">
                <div className="icaim25-table-category">Research Papers Awards</div>

                <div className="conv-table-wrapper">
                  <table className="conv-table">
                    <thead>
                      <tr>
                        <th style={{ width: '20%' }}>
                          Award Category
                          <span className="th-subtext">Faculty &amp; Student</span>
                        </th>
                        <th style={{ width: '45%' }}>Research Paper</th>
                        <th style={{ width: '35%' }}>Authors</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><div className="icaim25-award-pos icaim25-award-pos--winner">Faculty-First Winner</div></td>
                        <td><div className="icaim25-paper-title">Using AI for Early Detection of CNS (Central Nervous System) anomalies in Fetus in the First Trimester through Sonography Scans to Assist Rural Doctors in India</div></td>
                        <td>
                          <ul className="icaim25-author-list">
                            <li>1. Dr Vinita Gaikwad</li>
                            <li>2. Ms. Anamika Dhawan</li>
                            <li>3. Dr Padma Mishra</li>
                          </ul>
                        </td>
                      </tr>
                      {/* ...remaining rows unchanged... */}
                    </tbody>
                  </table>
                </div>

                <div className="icaim25-table-category">Technical Research Poster Awards</div>

                <div className="conv-table-wrapper">
                  <table className="conv-table">
                    <thead>
                      <tr>
                        <th style={{ width: '20%' }}>Award Category</th>
                        <th style={{ width: '45%' }}>Technical Research Poster</th>
                        <th style={{ width: '35%' }}>Authors</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><div className="icaim25-award-pos icaim25-award-pos--winner">Student-First Winner</div></td>
                        <td><div className="icaim25-paper-title">AgriVanni: Preserving and Transforming Farmer Knowledge Through AI</div></td>
                        <td>
                          <ul className="icaim25-author-list">
                            <li>1. Pundkar Hrishikesh Prakash Vimal</li>
                            <li>2. Reddy Karthik Jaganath Shanta</li>
                            <li>3. Redkar Sanjana Jaysing Shobha</li>
                            <li>4. Rodrigues Royal Albert Anamarie</li>
                          </ul>
                        </td>
                      </tr>
                      {/* ...remaining rows unchanged... */}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="icaim25-awards icaim25-fade-in" id="awards">
        <div className="icaim25-section-header">
          <h2>Awards &amp; Recognition</h2>
          <p>Celebrating excellence in research papers, technical posters, and hackathon innovations</p>
        </div>

        <div className="icaim25-awards-container">
          <div className="icaim25-awards-table-container">
            <div className="icaim25-table-category">Research Papers Awards</div>

            <div className="conv-table-wrapper">
              <table className="conv-table">
                <thead>
                  <tr>
                    <th style={{ width: '20%' }}>
                      Award Category
                      <span className="th-subtext">Faculty &amp; Student</span>
                    </th>
                    <th style={{ width: '45%' }}>Research Paper</th>
                    <th style={{ width: '35%' }}>Authors</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><div className="icaim25-award-pos icaim25-award-pos--winner">Faculty-First Winner</div></td>
                    <td><div className="icaim25-paper-title">Using AI for Early Detection of CNS (Central Nervous System) anomalies in Fetus in the First Trimester through Sonography Scans to Assist Rural Doctors in India</div></td>
                    <td>
                      <ul className="icaim25-author-list">
                        <li>1. Dr Vinita Gaikwad</li>
                        <li>2. Ms. Anamika Dhawan</li>
                        <li>3. Dr Padma Mishra</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td><div className="icaim25-award-pos icaim25-award-pos--runner">Faculty-First Runner up</div></td>
                    <td><div className="icaim25-paper-title">AI- Deep Learning Algorithm Based Prediction Model for Heart Disease using ECG images</div></td>
                    <td>
                      <ul className="icaim25-author-list">
                        <li>1. Dr. Ashwini Renavikar</li>
                        <li>2. Dr. Sonal Sharma</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td><div className="icaim25-award-pos icaim25-award-pos--runner">Faculty-First Runner up</div></td>
                    <td><div className="icaim25-paper-title">Machine Learning based Disease Prediction &amp; Drug Recommender System</div></td>
                    <td>
                      <ul className="icaim25-author-list">
                        <li>1. Dr. Shiksha Dubey</li>
                        <li>2. Mr. Brijesh Pandey</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td><div className="icaim25-award-pos icaim25-award-pos--runner">Faculty-First Runner up</div></td>
                    <td><div className="icaim25-paper-title">Aspect based Sentiment Analysis of Drug Reviews</div></td>
                    <td>
                      <ul className="icaim25-author-list">
                        <li>1. Ms. Kinjal Doshi</li>
                        <li>2. Dr. Falguni Parsana</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td><div className="icaim25-award-pos icaim25-award-pos--winner">Student-First Winner</div></td>
                    <td><div className="icaim25-paper-title">Enhancing LLMs with Human-Behavior-Inspired Data</div></td>
                    <td>
                      <ul className="icaim25-author-list">
                        <li>1. Gaud Sonal Sanjay Tarawati</li>
                        <li>2. Mojawat Devendra Mohan Sita</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td><div className="icaim25-award-pos icaim25-award-pos--runner">Student–First Runner up</div></td>
                    <td><div className="icaim25-paper-title">Digital Technology and Social Isolation: A Machine Learning Study of Wellbeing Patterns</div></td>
                    <td>
                      <ul className="icaim25-author-list">
                        <li>1. Panda Sanjana Sidhartha Sasmita</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td><div className="icaim25-award-pos icaim25-award-pos--runner">Student-Second Runner up</div></td>
                    <td><div className="icaim25-paper-title">Transforming Primary History Education: Development and Implementation of HistBot, an AI-Powered, Curriculum-Aligned Chatbot</div></td>
                    <td>
                      <ul className="icaim25-author-list">
                        <li>1. Ansari Tahera Kausar Mohd Khurdus Hasina</li>
                        <li>2. Choudhary Akash Anil Kiran</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="icaim25-table-category">Technical Research Poster Awards</div>

            <div className="conv-table-wrapper">
              <table className="conv-table">
                <thead>
                  <tr>
                    <th style={{ width: '20%' }}>Award Category</th>
                    <th style={{ width: '45%' }}>Technical Research Poster</th>
                    <th style={{ width: '35%' }}>Authors</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><div className="icaim25-award-pos icaim25-award-pos--winner">Student-First Winner</div></td>
                    <td><div className="icaim25-paper-title">AgriVanni: Preserving and Transforming Farmer Knowledge Through AI</div></td>
                    <td>
                      <ul className="icaim25-author-list">
                        <li>1. Pundkar Hrishikesh Prakash Vimal</li>
                        <li>2. Reddy Karthik Jaganath Shanta</li>
                        <li>3. Redkar Sanjana Jaysing Shobha</li>
                        <li>4. Rodrigues Royal Albert Anamarie</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td><div className="icaim25-award-pos icaim25-award-pos--runner">Student-First Runner up</div></td>
                    <td><div className="icaim25-paper-title">Harnessing AI for Sustainable Agriculture in India</div></td>
                    <td>
                      <ul className="icaim25-author-list">
                        <li>1. Mishra Rachana Amrendra Anjali</li>
                        <li>2. Mistry Samay Ashish Aruna</li>
                        <li>3. Mishra Rushabh Dilip Aruna</li>
                        <li>4. Mishra Soni Ganesh Mamta</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td><div className="icaim25-award-pos icaim25-award-pos--runner">Student-Second Runner up</div></td>
                    <td><div className="icaim25-paper-title">YourLamp</div></td>
                    <td>
                      <ul className="icaim25-author-list">
                        <li>1. Shelar Vikas Balaji</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="icaim25-table-category">🏆 Hackathon Champions</div>
            <div className="conv-table-wrapper">
              <table className="conv-table">
                <thead>
                  <tr>
                    <th style={{ width: '30%' }}>
                      Award Category
                      <span className="th-subtext">Hackathon podium</span>
                    </th>
                    <th style={{ width: '70%' }}>Hackathon Team Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Student-First Winner</td>
                    <td>Sign Language Recognition</td>
                  </tr>
                  <tr>
                    <td>First Runner up</td>
                    <td>AgroShield</td>
                  </tr>
                  <tr>
                    <td>Second Runner up</td>
                    <td>Identification of Plant Disease from Leaf Images Based on Convolutional Neural Network</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ICAIMPage;
