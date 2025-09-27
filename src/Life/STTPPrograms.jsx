import React, { useState } from "react";
import "./FacultyPrograms.css";
import TimsHeroCarousel from "../components/TimsHeroCarousel";
import PageHeader from "../about/PageHeader";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import BrochureForm from "../components/EnquiryForm";
import CTAButton from "../components/sticky-button";

// Data extracted and structured from paste.txt
const sttpData = [
  {
    year: 2025,
    theme: "Information Technology for Sustainability – Green AI",
    dateRange: "17 June 2025 – 30 June 2025",
    audience: "Teaching and Non-Teaching (specific days)",
    summary:
      "A holistic and impactful ISTE-approved STTP blending technical expertise with wellness, engaging 23 teaching and 13 non-teaching staff, strengthening competencies in Green IT and fostering a culture of environmental responsibility and well-being.",
    days: [
      {
        date: "17 June 2025 – Teaching Staff",
        sessions: [
          "Dr. Ashwini Renavikar: Digital Identity for Research—importance of digital identity systems for credibility, collaboration, and visibility in academia and research.",
          "Dr. Arvind Dangi (Manav Rachna University): Secure and Sustainable Cloud Computing—Green IT challenges with real case studies.",
        ],
      },
      {
        date: "18 June 2025 – Teaching Staff",
        sessions: [
          "Mr. Nakul Chamariya (Senior Data Scientist, Folsippy): Deep learning basics—ChatGPT, Gemini, Copilot; encoder-decoder, transformers; BERT demo.",
          "Hands-on: Implementing LLMs in Google Colab and overview of useful online resources.",
        ],
      },
      {
        date: "19 June 2025 – Teaching Staff",
        sessions: [
          "Deep learning focus on Retrieval-Augmented Generation (RAG)—cosine similarity concepts with LangChain example.",
          "AI agents overview—lack of memory/predefined responses; single, network, supervisor, supervisor-as-tool, hierarchical, custom agents.",
          "Hands-on: Wikipedia data project; agent communication; LangGraph intro; SQL-based attendance agent project.",
        ],
      },
      {
        date: "20 June 2025 – All Teaching & Non-Teaching Staff",
        sessions: [
          "International Yoga Day with Ms. Shikha Verma—session on asanas and wellness.",
          "Elsevier session postponed; free ECG health check-up by Aditya Birla Group.",
        ],
      },
      {
        date: "23 June 2025 – All Teaching & Non-Teaching Staff",
        sessions: [
          "Mr. Vikas Gupta (VP, Bajet Project Ltd.): Harnessing Green Technology for Renewable Energy—sustainability, ecological balance, green software, circular IT economy.",
        ],
      },
      {
        date: "24 June 2025 – Teaching Staff",
        sessions: [
          "Dr. Madhulika Bangre (Indian Patent Agent): Securing Software Innovation—IPR, patent filing, innovation in academia.",
          "Mr. Kunal Khandelwal (MathWorks Pune): Hands-on Enhancing Dataset Diversity—MATLAB-Python integration and code conversion.",
        ],
      },
      {
        date: "25 June 2025 – Teaching Staff",
        sessions: [
          "Mr. Kunal Khandelwal: Explainable AI—pre-trained deep learning models in Google Colab and customization for research.",
        ],
      },
      {
        date: "26 June 2025 – Teaching Staff",
        sessions: [
          "Self-paced Elsevier Researcher Academy certifications—professional development.",
          "Prof. Mira Gohil: 3D Program of Knowledge—ancient literature, mindfulness, and meditation.",
        ],
      },
      {
        date: "27 June 2025 – Teaching Staff",
        sessions: [
          "Continued Elsevier Researcher Academy certifications.",
          "Mr. Rahul Tiwari (Senior Consultant, Microsoft): From LLM to AI—enterprise AI applications and intelligent transformation.",
        ],
      },
      {
        date: "30 June 2025 – Teaching Staff",
        sessions: [
          "Dr. Varun Menon (SCM5 Group of Institutions): Writing High-Quality Research Papers—strategies for SCOPUS/WoS; trends: GenAI, LLMs, Federated AI, Edge, Quantum, Neuromorphic; use of arXiv and global repositories.",
          "Dr. Vinod (CUSAT): Funded Project Proposal Writing—evaluation criteria, structure, benchmarking, and funding such as MSCA.",
        ],
      },
    ],
  },
  {
    year: 2024,
    theme:
      "Information Technology in Agriculture and Healthcare for Sustainability – Viksit Bharat",
    dateRange: "18 June 2024 – 29 June 2024",
    audience: "Teaching and Non-Teaching",
    days: [
      {
        date: "Day 1 – Sajan Resort (Staff Training & Team-building)",
        sessions: [
          "Outdoor activities, team bonding, and collaborative exercises.",
        ],
      },
      {
        date: "Day 2",
        sessions: [
          "Ms. Supriya Baikerikar: Yoga—postures, breathing, mindfulness for physical, mental, emotional well-being.",
          "Ms. Vineeta Gupta: Sahaja Yoga Meditation—subtle system, chakras, kundalini awakening; guided meditation for inner balance.",
        ],
      },
      {
        date: "Day 3",
        sessions: [
          "Dr. Bharat Suryawanshi: IPR—copyrights, patents, trademarks, trade secrets, protecting innovation, patent process.",
          "Dr. Yelloji Mirajkar: Aahaar Kranti—diet critique; Ayurveda-based nutrient focus; Dr. Rashmi Kulkarni: nutrition for disease prevention; Dr. Srinivasa K. Rao: biofortification and Poshan Abhiyan.",
        ],
      },
      {
        date: "Day 4",
        sessions: [
          "Mr. Rajesh Patalia: Digital Marketing—importance, tech impact, ethics.",
          "Dr. Seema Jagtap: Traditional water management—ancient India practices integrated with modern methods.",
        ],
      },
      {
        date: "Day 5",
        sessions: [
          "Mrs. Sonal Desai: Plastic RRR—reduce, recycle, reuse; minimization tips; environmental impacts.",
          "Dr. Rajesh Bansode: NEP for PG—reduce illiteracy, improve employability; foundational education’s broader societal impact.",
        ],
      },
      {
        date: "Day 6",
        sessions: [
          "Mr. Kunal Khandelwal: MATLAB—programming constructs, data processing, visualization, statistics; online training options and certification.",
        ],
      },
      {
        date: "Day 7",
        sessions: [
          "MATLAB continuation—2D/3D visualization, plots, interactive exploration; many participants certified.",
        ],
      },
      {
        date: "Day 8",
        sessions: [
          "Ms. Devanshi Sihare (Tinker Labs): Design Thinking—Empathize, Define, Ideate, Prototype, Test, Iterate; hands-on case studies on screen time and sleep disorders.",
        ],
      },
      {
        date: "Day 9",
        sessions: [
          "Mr. and Mrs. Afzal Khatri: Water and land conservation—India’s water crisis, sustainable management, AI and conscious intelligence.",
          "Ms. Anjali Mogare: AI in Healthcare—diagnostics, personalization, drug discovery; applications, challenges, careers.",
        ],
      },
      {
        date: "Day 10",
        sessions: [
          "Dr. Umakant Butkar (VB Solutions): Research Proposals—societal relevance, goals, credentials, funding agencies, expenditure.",
          "Dr. Butkar: Digital presence—Google Scholar, ResearchGate, LinkedIn; YouTube for outreach and monetization.",
          "Valedictory: Certificates awarded; address by Director, Dr. Vinita Gaikwad.",
        ],
      },
    ],
  },
  {
    year: 2023,
    theme: "Information Technology – Women Empowerment",
    dateRange: "29 May 2023 – 9 June 2023",
    audience: "Teaching and Non-Teaching",
    days: [
      {
        date: "29 May 2023",
        sessions: [
          "Ms. Anupama Singh Padhi: Diet and Health—physical, social, mental health; 7 habits; what to eat/avoid; vitamins/calcium/protein sources; millet benefits and recipes; Dr. Khadar Vali’s Siridhanya.",
          "Online: MATLAB Fundamentals—data analysis, visualization, modeling, programming.",
        ],
      },
      {
        date: "30 May 2023",
        sessions: [
          "Dr. Kamal Shah (TCET): CO-PO Mapping—PO attainment, Bloom’s alignment, direct/indirect tools; calculations using current semester data.",
        ],
      },
      {
        date: "31 May 2023",
        sessions: [
          "Dr. Rajesh Bansode (TCET): AQAR—alignment of academic and institute calendars; IQAC composition; action plan/ taken/ next year; performance indicators for papers; criteria-wise points.",
        ],
      },
      {
        date: "1 June 2023",
        sessions: [
          "Mr. Ankit Kumar (Design Tech Systems): MATLAB for Data Processing & Visualization—vectors, matrices, tables, conditional selection, organization, functions; hands-on; certificates earned.",
        ],
      },
      {
        date: "2 June 2023",
        sessions: [
          "Dr. Mukesh Gupta (LeNest): Strategy Management—business lifecycle; Porter’s positioning/trade-offs/fit; core competency; continuous benchmarking; Five Forces in education.",
          "Mrs. Bhagyashree Chemburkar: Kitchen Waste Management—segregation; composting wet waste; 5 hourly Recycle Cycle Foundation; say no to plastic.",
        ],
      },
      {
        date: "3 June 2023",
        sessions: [
          "INSEED NGO visit with Dr. Sangeeta Shirname—Adivasi village realities; survival struggles near the city; funding for basic needs.",
          "Be10X: AI Tools—presentations, email cleanup, paper reading, summarization, communication practice, Excel formulas; participation certificates.",
        ],
      },
      {
        date: "4–5 June 2023",
        sessions: [
          "Mr. Sunil Parekh: Teacher training to get best out of students—Event + Response = Outcome; laws of attraction/resonance; conscious vs subconscious mind; seven steps to success.",
        ],
      },
      {
        date: "7 June 2023",
        sessions: [
          "Ms. Madhu: Yoga—importance of exercise for vertebral column; stretches and asanas; Har Ghar Aangan and One Yoga for One World.",
          "Brahma Kumaris: Ms. Sandhya—Purpose of Life, gratitude, acceptance; Ms. Kavita—Mindset for changing times, humility, nature’s giving.",
        ],
      },
      {
        date: "8 June 2023",
        sessions: [
          "Dr. Shilpi Shah MSNIM: Writing Effective Research Papers—bibliometric and PRISMA analysis; IEEE/SCOPUS searches; filtering by facets; VOSviewer for bibliometric networks; Word developer settings for formatting.",
          "Valedictory with Director, Dr. Vinita Gaikwad; certificates distribution.",
        ],
      },
      {
        date: "9 June 2023",
        sessions: [
          "Field trip to Monteria Village—giant swing, puppet show, pottery, khat weaving, boating, swimming, rain dance; farm tour; biogas and vermicompost plants.",
        ],
      },
    ],
  },
  {
    year: 2022,
    theme: "Information Technology for Sustainability – Carbon Neutrality",
    dateRange: "6 June 2022 – 17 June 2022",
    audience: "Teaching and Non-Teaching",
    days: [
      {
        date: "6–7 June 2022",
        sessions: [
          "Director, Dr. Vinita Gaikwad: Towards Carbon Neutrality—global warming, net zero, 2030 actions, SDGs, carbon capture/use/storage.",
          "Workshop: AWS Cloud Computing (Mr. Shridhar Galande)—AWS services (IaaS, PaaS, SaaS), EC2, S3; IAM roles; security best practices.",
        ],
      },
      {
        date: "8 June 2022",
        sessions: [
          "Ms. Priti Bhandari (Alchemei): Sustainability & Carbon Neutrality—everyday carbon sources; control via reuse and e-waste segregation; real-life examples.",
          "Mr. Aniket Pate (Kwality Infosolution): Innovative Teaching—smart board usage.",
          "Energy Literacy Training: Energy Swaraj Foundation—alternative energy, efficient appliances for reduced consumption.",
        ],
      },
      {
        date: "9 June 2022",
        sessions: [
          "Art of Living (Prerna Khandelwal): Stress, seven layers of existence.",
          "Yoga Asana (Ms. Anjali): Eye, mind, neck stretches.",
          "Dr. Mohan B. Rao: Universal Human Values & Carbon Neutrality—roles, Korea/Bhutan examples, holistic approach.",
        ],
      },
      {
        date: "10 June 2022",
        sessions: [
          "Saguna Baug field trip (Neral) with Mr. Shekhar Bhatsawale—carbon sequestration, climate change, Saguna Rice Technique (SRT) without plowing/transplanting.",
        ],
      },
      {
        date: "13 June 2022",
        sessions: [
          "Mr. Gopal Krishna Jha: Yoga—full body workout.",
          "Ms. Sonu Gupta: Course Outcomes—vision/mission alignment; PEO/PO/CO mapping with academics and activities.",
        ],
      },
      {
        date: "14 June 2022",
        sessions: [
          "Ms. Vedangi Sohni: Carbon neutrality workshop—offsets, direct/indirect energy consumption, digital transformation’s positive impact on emissions reduction.",
        ],
      },
      {
        date: "15 June 2022",
        sessions: [
          "Prof. Yogendra Shastri (IIT Bombay): Sustainability & Global Warming—energy consumption, SD goals, challenges; holistic impact assessment; 12 principles.",
          "Dr. Umesh Mundlye (OIKOS): Conservation of natural resources for carbon neutrality—carbon neutrality and sequestration.",
        ],
      },
      {
        date: "16 June 2022",
        sessions: [
          "Mr. Ravin Kumar (TCS Digital Farming): Carbon Farming and Opportunities—need, challenges, holistic sustainability across sectors.",
        ],
      },
      {
        date: "17 June 2022",
        sessions: [
          "Valedictory with Dr. Abdul Moid (Director ERTL(W), STQC, MeitY)—remarks on technology’s real-life contributions; outcomes: exposure to cloud computing, carbon neutrality, solar energy alternatives.",
        ],
      },
    ],
  },
  {
    year: 2021,
    theme:
      "Information Technology for Sustainability: Blockchain Technology and Data Science",
    dateRange: "17 June 2021 – 29 June 2021",
    audience: "Online STTP",
    days: [
      {
        date: "Opening",
        sessions: [
          "Inaugural: Director, Dr. Vinita Gaikwad; Chief Guest Dr. Suresh Shan—emphasis on training in latest tech and sustainability focus.",
        ],
      },
      {
        date: "Sessions",
        sessions: [
          "Dr. Narendra Vaidya: Geriatric Care—aging population challenges, diseases like Dementia/Alzheimer’s.",
          "Mr. Deepak Pareek: Food systems—micronutrient deficiency, climate threats, pandemic challenges; need for data-driven, scalable, holistic, self-learning, transparent, real-time, collaborative, profitable systems.",
          "Mr. Dinesh Kumar Singh (TCS): Digital era, five digital forces—mobility, big data, social, cloud, AI/robotics; research scope.",
          "21 June: International Yoga Day—Mr. Chandan Mishra; full body workout and Pranayam.",
          "Mr. Jeeven Saini (Sofocle): Blockchain applicability—banking, fintech, charity, credit, cloud storage; 256-bit hash, distributed immutability.",
          "Mr. Abhishek Pandey: Cybersecurity—hacking scenarios, hacker types; awareness on cyber laws and resources.",
          "Mr. Devesh Rajadhyax (Cere Labs): Deep Learning—object/anomaly detection, face recognition, sentiment, assistants; monochrome image/text to vector to neural network.",
          "Veracitiz Solutions: Data Science in FMCG—business dynamics; predictive/prescriptive analytics for sales forecasting.",
          "Dr. Seema Purohit: Post-2020 trends—data science dominance with AI.",
          "Mr. Awab Habib Fakih: ML fundamentals—types, evaluation, benefits; Google Ads classification-based applications.",
          "Dr. Deven Shah and team: Blockchain basics; bitcoin installation/transactions; Metamask intro.",
          "Spoken Tutorial workshop (17–25 June): R, Python, PHP; TIMSCDR YouTube videos, daily assignments.",
          "Valedictory (29 June): Mr. Ravikiran Mankikar (CSI) on technology’s role during pandemic; outcome: robust online learning platform during COVID-19.",
        ],
      },
    ],
  },
  {
    year: 2020,
    theme: "Information Technology for Sustainability",
    dateRange: "15 June 2020 – 26 June 2020",
    audience: "Online STTP",
    days: [
      {
        date: "Opening",
        sessions: [
          "Inaugural: Dr. Suresh Chandra Gupta (CSI Mumbai)—CSI collaborative online programs; student tech upskilling in the pandemic.",
        ],
      },
      {
        date: "Sessions",
        sessions: [
          "Ms. Rhea Pai: Mindfulness in COVID-19—present-moment focus, mindful leaders.",
          "Dr. Sangeeta Joshi: NAAC—accreditation, QI, DVV; qualitative vs quantitative; IQAC processes for excellence.",
          "Mr. Awab Habib Fakih: Design Thinking—Blue/Red Ocean, Lotus Blossom, Prototyping; analytical + intuitive thinking.",
          "Dr. K. Ganapathy: Telemedicine/TeleHealth—digital healthcare processes; doctor-patient distance care.",
          "Dr. Milind Antani and team: Telemedicine—digital health, models, scenarios.",
          "Ms. Neeta Sharda (Art of Living): Breathing importance; Sudarshan Kriya; hands-on meditation.",
          "Mr. Jasveer Singh: IoT in Agriculture—sensor-based monitoring for smart farming.",
          "Dr. Sharon Wu: Yoga & Physiotherapy—posture and exercise during lockdown.",
          "Dr. Deven Shah: Blockchain—bitcoin, centralization myths, Ethereum, AWS blockchain services, applications.",
          "Mr. A. P. Gaurvadkar: Online teaching tools—OBS, Poll Everywhere; Super Human Educators.",
          "Ms. Suman Pai: Team Building—organizational roles for WFH teamwork.",
          "Mr. Ramaswamy Seshan: Agriculture amidst COVID-19—habits, impact, revival, organic, hydroponics/aquaponics/aeroponics.",
          "Spoken Tutorial Python 3.4.3 workshop (15–25 June): videos on TIMSCDR YouTube; daily assignments.",
          "Valedictory (26 June) with Mr. Ravikiran Mankikar (CSI).",
          "Outcome: 157 participants certified; online learning platform for skill enhancement, industry–academia exchange, IT for sustainability, and overall development via yoga/art of living.",
        ],
      },
    ],
  },
];

const YearSection = ({ item }) => {
  return (
    <section className="custom-card" id={`year-${item.year}`}>
      <h2>{item.year} – {item.theme}</h2>
      <p className="custom-highlight">Dates: {item.dateRange} • Audience: {item.audience}</p>
      {item.summary && <p>{item.summary}</p>}
      {item.days.map((d, idx) => (
        <div key={idx} className="custom-subcard">
          <h3>{d.date}</h3>
          <ul className="custom-list">
            {d.sessions.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

const STTPPrograms = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButton />
      <div className="custom-container">
        <main className="custom-main">
          <div className="tims-hero">
            <PageHeader
              title="Short Term Training Programme"
              crumbs={[
                { label: "Home", href: "/" },
                { label: "Short Term Training Programme" },
              ]}
            />
            <TimsHeroCarousel
              images={[
                "/assets/fdp/fdp-hero-1.jpg",
                "/assets/fdp/fdp-hero-2.jpg",
                "/assets/fdp/fdp-hero-3.jpg",
              ]}
              alt="TIMSCDR FDP highlights"
              interval={5000}
              height={420}
            />
          </div>

          <div className="custom-grid">
            <div>
              <section className="custom-card">
                <h2>About the Programme</h2>
                <p>
                  This ISTE-approved STTP series delivers cutting-edge technical learning aligned with sustainability, complemented by wellness and value-based sessions that enhance the holistic development of staff and institutional capacity. 
                </p>
                <p className="custom-highlight">
                  Latest edition: Two-week ISTE-approved STTP on “Information Technology for Sustainability – Green AI” held from 17 June to 30 June 2025.
                </p>
              </section>

              {sttpData
                .sort((a, b) => b.year - a.year)
                .map((item) => (
                  <YearSection key={item.year} item={item} />
                ))}
            </div>

            <div className="custom-sidebar">
              <section className="custom-card">
                <h3>ISTE Membership Certificate</h3>
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOjtvxO3VqV2m6dXqBfeiG0BoyWc1ELHh5WYgtCILyjzdHjlYQKaLtlIvcZcIG8qCpdU5saFBLISK8tGtzSF65OeK-YhopIR_gQpdXeXChPjcDk5_d48HSOUDsm389fH4HcbSgnTIulnQaabUefr4P_g5KHchWMe4QfESDdGRHG8qeL4Qxyd65NhD-YZIpXDlav6FB3AyIHSAnUrJ6-HWKkS9aIv4wOKdElxL5d5rL9XTraroD9K_8aKicsoNWir5HX5XhSFLfzpBx"
                  alt="ISTE Membership Certificate"
                  className="custom-certificate"
                />
              </section>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default STTPPrograms;
