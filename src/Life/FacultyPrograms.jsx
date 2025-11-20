// src/pages/FacultyPrograms.jsx
import React,{useState} from "react";
import TimsHeroCarousel from "../components/TimsHeroCarousel"; 
import "./FacultyPrograms.css"; // your base page styles
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Navbar from "../components/navbar";
import PageHeader from "../about/PageHeader";
import Footer from "../components/Footer";

export default function FacultyPrograms() {
      const [showForm, setShowForm] = useState(false);
  
  return (
     <>
            <Navbar setShowForm={setShowForm} />
            {showForm && <BrochureForm setShowForm={setShowForm} />}
            <CTAButtons />
    
    <div className="tims-root bg-light text-light dark:bg-dark dark:text-dark">
      <main className="tims-container vision-mission-container tims-main">
                 <PageHeader
                title="Faculty Development Program"
                crumbs={[
                  { label: 'Home', href: '/' },
                  { label: 'Faculty Development Program' }, // current page (no href)
                ]}
              />
        <div className="tims-hero">

          
          <TimsHeroCarousel
            images={[
              "/assets/fdp/fdp-hero-1.jpg",
              "/assets/fdp/fdp-hero-2.jpg",
              "/assets/fdp/fdp-hero-3.jpg"
            ]}
            alt="TIMSCDR FDP highlights"
            interval={5000}
            height={420}
          />
        </div>

        <div className="tims-prose">
          <section className="tims-section">
            <h3 className="tims-section__heading">FDP: 2024-25</h3>
            <p className="tims-lead">
              A 2-day Faculty Development Program on "Revolutionizing Healthcare: Unlocking AI for Effective Solutions"
            </p>
            <p>
              The 2024-25 Faculty Development Program (FDP), hosted by Thakur Institute of Management Studies, Career
              Development, and Research (TIMSCDR), was held on the 6th and 7th of May. The FDP was designed to provide
              participants with the knowledge and skills necessary to leverage AI technologies in healthcare.
            </p>
            <p>
              The program commenced with an insightful session by <span className="tims-strong">Mr. Mitesh
              Lotlikar</span>, IoT Practice Head at TCS, who explored the use of Generative AI in transforming business
              operations, highlighting its significant impact on various industries. The session was very engaging and
              interactive.
            </p>
            <p>
              The second session was led by <span className="tims-strong">Mr. Saurabh Gupta</span>, Co-Founder, and
              Chief Technology Officer, and <span className="tims-strong">Mr. Mayank Gupta</span>, AI/ML Engineer at
              Metayanka. Participants explored AI-driven healthcare applications, including image and audio processing
              and advanced system development. Practical exercises enabled participants to gain hands-on experience in
              building AI models tailored for medical use cases, fostering a deeper understanding of AI's potential in
              healthcare.
            </p>
            <p>
              On Day 2, esteemed ophthalmologist <span className="tims-strong">Dr. Sabyasachi Sengupta</span> shed
              light on the everyday impact of Machine Learning, sharing examples of its use in medical diagnostics,
              treatment planning, and personalized patient care, along with the latest advancements in AI.
            </p>
            <p>
              The FDP concluded with a presentation competition, where faculty members showcased their AI-driven project
              ideas and research innovations. The faculty presentations and Valedictory Function celebrated
              participants' accomplishments, highlighting their journey of learning and skill development.
            </p>
          </section>

          <section className="tims-section">
            <h3 className="tims-section__heading">FDP: 2023-24</h3>
            <p>
              TIMSCDR organized two days Faculty Development Program (FDP) on 17 &amp; 18 Feb, 2024 on Microsoft Power
              BI in association with Spoken Tutorial, IIT Bombay. The speaker <span className="tims-strong">Mr. Harish
              G</span>., Senior Analyst from Capgemini Technology Services India Ltd. shared his expert knowledge on the
              subject. The topics covered in the FDP were Introduction to Microsoft Power BI, Power BI Desktop, Power BI
              Service, Power BI Mobile, Building Blocks of Power BI, Data Modeling, Data Visualization, Reports,
              Dashboards, Data Modelling, Advanced Visualization, Data Transformation (Query Editor), Introduction to
              DAX (Data Analysis Expressions), and Advanced DAX Functions, Advanced Visualization etc. 104 faculty
              members from various colleges participated in the program.
            </p>
          </section>

          <section className="tims-section">
            <h3 className="tims-section__heading">FDP: 2022-23</h3>
            <p>
              TIMSCDR organized two days Faculty Development Program (FDP) on 25th and 26th May 2023 on Robotic Process
              Automation (RPA) in association with Spoken Tutorial, IIT Bombay. <span className="tims-strong">Mr. Rohit
              Khot</span> explained how Robotic Process Automation (RPA) is a software that can mimic any
              computer-oriented human task, is complicated and end-to-end procedures can be automated using Robotic
              Process Automation.
            </p>
            <p>
              Various benefits of RPA like higher productivity, accuracy, consistency, better customer service, and
              better IT system management are also explained. The hands-on session was conducted using UiPath tool. A
              BOT was created for extracting data from a web page. After successfully building a full-fledged BOT, based
              on real-world use case hands-on using UiPath. It was a promising opportunity for all the participants to
              learn a new technology.
            </p>
          </section>

          <section className="tims-section">
            <h3 className="tims-section__heading">FDP: 2022-23</h3>
            <p>
              TIMSCDR organized a one-day online FDP on 23 December, 2023 on <span className="tims-strong">Robotics
              Technology</span> in association with Spoken Tutorial, IIT - Bombay. The session was conducted by <span
              className="tims-strong">Mr. Rohit Khot</span>. During this session, he explained how to make a bot on a
              Telegram app and also to control the robot with Raspberry Pi via a Telegram bot. The test was conducted
              through the Spoken tutorial after the training and passing marks was 50%. All faculties successfully
              cleared the test on Botly.
            </p>
            <p>
              It was a great opportunity for all faculty members to get introduced with Botly technology for the purpose
              of building chatbots, applications, and automating business processes. The session was interactive and all
              faculty members enjoyed this session. The FDP was attended by 115 participants.
            </p>
          </section>

          <section className="tims-section">
            <h3 className="tims-section__heading">FDP - 2021-22</h3>
            <p className="tims-lead">FDP - "Block chain &amp; Advanced Java" was conducted on January 15 - 19, 2021</p>
            <p>
              TIMSCDR organized its first online FDP from 15-19, January 2021 on <span className="tims-strong">
              Blockchain &amp; Advanced Java</span> in association with C-SI, Mumbai Chapter. The 5-day FDP was
              inaugurated by <span className="tims-strong">Dr. S.K.Srivastav</span>, Head, Dept. of CS, Panjab
              University, Chandigarh, who was the chief guest. He appreciated the institute's initiatives.
            </p>
            <p>
              The FDP was a grand success with 1400+ participants from all over the world. The first 3 days were
              dedicated to Blockchain technology and faculty got to know about blockchain and its features and use
              cases. They were also introduced to Hyperledger fabric, a tool to create Blockchain applications. The
              participants got to know about the Blockchain technology and heard about blockchain and its features and
              use-cases. He gave a fair amount of knowledge about bitcoin and practiced through the online platform. The
              faculty members were also introduced to Hyperledger Fabric, a tool to create Blockchain applications.
            </p>
            <p>
              On the 4th and 5th day, participants were introduced to Advanced Java concepts. They were introduced to
              Java 8, Java 9, and subsequent versions. Many of them were hearing the concepts for the first time.
            </p>
            <p>
              In this FDP, Dr. Manoj N.R., also delivered advanced technological knowledge that is a part of the upcoming
              MCA syllabus, starting from basics to advanced. This was a valuable session for all faculty members since
              it aligned with the revised syllabus and helped them enhance their teaching skills.
            </p>
            <p>
              As an outcome of the FDP, all faculty members gained insight into the different modern technologies like
              Angular and Node.js program and other related concepts.
            </p>
          </section>

          <section className="tims-section">
            <h3 className="tims-section__heading">FDP - 2019-20</h3>
            <p className="tims-lead">
              FDP - "Machine Learning with R" was conducted on November 27 - 29, 2019
            </p>
            <p>
              TIMSCDR conducted a three-day workshop on "Machine Learning with R" for teaching faculties on <span
              className="tims-strong">Machine Learning with R</span>, conducted by <span className="tims-strong">Dr.
              Amita Jain</span>. The session was intended to provide a comprehensive introduction to R programming, data
              visualization, and machine learning techniques, with hands-on practice. The workshop was organized by the
              Computer Society of India (CSI), Mumbai Chapter, and sponsored by <span className="tims-strong">Mr. Harish
              Mehta</span>, esteemed researcher and data scientist and <span className="tims-strong">Dr. Devesh
              Jinwala</span>.
            </p>
            <p>
              During the session, the faculty members learned about various machine learning algorithms, including
              supervised, unsupervised, and reinforcement learning. They were also introduced to practical applications
              of these techniques in real-world scenarios. The hands-on training covered a wide range of topics,
              including data preprocessing, feature engineering, and model evaluation. The session was practical and
              informative and covered the following topics: Data Import/Export using R, K-Means Clustering, Linear and
              Logistic Regression using R, Decision Tree, Random Forest, Naive Bayes Classifier and other machine
              learning algorithms. The workshop also included a brief introduction to neural networks and other advanced
              concepts. The Neural Network, Hierarchical Clustering, Artificial Neural Networks was covered on Day 3.
            </p>
            <p>
              As a result, all participants gained practical experience in implementing machine learning models with R
              Programming.
            </p>
          </section>
        </div>
      </main>
    </div>
    <Footer/>
    </>
  );
}
