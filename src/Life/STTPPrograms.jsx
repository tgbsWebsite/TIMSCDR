import React, { useEffect, useState } from "react";
import "./FacultyPrograms.css";
import CountUp from "react-countup"; // ⬅️ add this import

import Footer from "../components/Footer";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Navbar from "../components/navbar";

const STTPPrograms = () => {
  useEffect(() => {
    function reveal() {
      const reveals = document.querySelectorAll(".sttp-reveal");
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        }
      }
    }
    window.addEventListener("scroll", reveal);
    reveal();

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });

    document
      .querySelectorAll(
        ".sttp-program-card, .sttp-stat-item, .sttp-feature-card"
      )
      .forEach((card) => {
        card.addEventListener("mouseenter", function () {
          this.style.transform = "translateY(-8px)";
        });
        card.addEventListener("mouseleave", function () {
          this.style.transform = "translateY(0)";
        });
      });

    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []);

  // ====== Data Arrays ======
  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&h=400&fit=crop",
      title: "Healthcare AI & MATLAB Workshop",
      desc: "Faculty members exploring AI applications in healthcare using advanced MATLAB tools",
    },
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&h=400&fit=crop",
      title: "Microsoft Power BI Training",
      desc: "Interactive sessions on data visualization and business intelligence",
    },
    {
      src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1000&h=400&fit=crop",
      title: "Programming & Technology Workshops",
      desc: "Hands-on training in modern technologies like Python, Ruby, and Blockchain",
    },
    {
      src: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=1000&h=400&fit=crop",
      title: "Quality Assurance & Accreditation",
      desc: "NAAC and NBA accreditation training for academic excellence",
    },
    {
      src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1000&h=400&fit=crop",
      title: "IoT & Raspberry Pi Training",
      desc: "Exploring Internet of Things and embedded systems programming",
    },
  ];

  const stats = [
    { number: "9", label: "Years of Excellence" },
    { number: "500+", label: "Faculty Trained" },
    { number: "8", label: "ISTE Programs" },
    { number: "100%", label: "Success Rate" },
  ];

  const programs = [
    {
      year: "2025",
      title: "ISTE Approved STTP – 2025",
      theme: "Information Technology for Sustainability – Green AI",
      desc: "TIMSCDR organized the ISTE-approved Short Term Training Program (STTP) on Information Technology for Sustainability – Green AI from 17th to 30th June 2025. The program featured a blend of expert talks, hands-on workshops, wellness activities, and self-paced certifications, highlighting the transformative role of IT and AI in sustainable development.",
      highlights: [
        "Digital Identity for Research",
        "Secure and Sustainable Cloud Computing",
        "Deep Learning with ChatGPT, Gemini, Copilot",
        "Hands-on LLM Implementation",
        "Retrieval-Augmented Generation (RAG) and LangChain",
        "AI Agents and LangGraph",
        "International Yoga Day Celebration",
        "Green Technology for Renewable Energy",
        "Intellectual Property Rights and Software Innovation",
        "MATLAB–Python Integration and Dataset Diversity",
        "Explainable AI",
        "Elsevier Researcher Academy Certifications",
        "3D Program of Knowledge – Mindfulness & Meditation",
        "Enterprise AI Applications",
        "Research Paper Writing and Publishing in SCOPUS/WoS",
        "Funded Project Proposal Writing (MSCA and more)",
      ],
      schedule: [
        {
          date: "17th June 2025",
          sessions: [
            {
              speaker: "Dr. Ashwini Renavikar",
              topic: "Digital Identity for Research",
              details:
                "She emphasized the importance of implementing digital identity systems in academic and research contexts, highlighting their role in credibility, collaboration, and visibility.",
            },
            {
              speaker: "Dr. Arvind Dangi (Manav Rachna University)",
              topic: "Secure and Sustainable Cloud Computing",
              details:
                "He explored challenges in Green IT and illustrated them through real-world case studies.",
            },
          ],
        },
        {
          date: "18th June 2025",
          sessions: [
            {
              speaker: "Mr. Nakul Chamariya (Senior Data Scientist, Folsippy)",
              topic: "Deep Learning Basics with LLM Platforms",
              details:
                "Introduced ChatGPT, Gemini, and Copilot. Explained encoder-decoder architecture, transformers, and demonstrated the BERT model.",
            },
            {
              speaker: "Mr. Nakul Chamariya",
              topic: "Hands-on LLM Implementation",
              details:
                "Conducted practical implementation of Large Language Models in Google Colab, with resources for integrating LLMs into workflows.",
            },
          ],
        },
        {
          date: "19th June 2025",
          sessions: [
            {
              speaker: "Mr. Nakul Chamariya",
              topic: "Retrieval-Augmented Generation (RAG)",
              details:
                "Explained cosine similarity, LangChain, and concepts of similar, unrelated, and opposite similarities.",
            },
            {
              speaker: "Mr. Nakul Chamariya",
              topic: "AI Agents and LangGraph",
              details:
                "Discussed types of AI agents, memory limitations, and communication between agents. Demonstrated an SQL-based attendance agent project.",
            },
          ],
        },
        {
          date: "20th June 2025",
          sessions: [
            {
              speaker: "Ms. Shikha Verma (Certified Yoga Instructor)",
              topic: "11th International Yoga Day",
              details:
                "Conducted asanas and wellness session for all teaching and non-teaching staff.",
            },
            {
              speaker: "Aditya Birla Group",
              topic: "Free ECG Health Check-up",
              details:
                "A health check-up was organized as the Elsevier session was postponed.",
            },
          ],
        },
        {
          date: "23rd June 2025",
          sessions: [
            {
              speaker: "Mr. Vikas Gupta (VP, Bajet Project Ltd.)",
              topic: "Harnessing Green Technology for Renewable Energy",
              details:
                "Spoke on sustainability, ecological balance, green software practices, and the circular IT economy.",
            },
          ],
        },
        {
          date: "24th June 2025",
          sessions: [
            {
              speaker: "Dr. Madhulika Bangre (Indian Patent Agent)",
              topic: "Securing Software Innovation",
              details:
                "Explained intellectual property rights, patent filing processes, and the importance of innovation in academic institutions.",
            },
            {
              speaker: "Mr. Kunal Khandelwal (MathWorks, Pune)",
              topic: "Enhancing Dataset Diversity",
              details:
                "Hands-on session on MATLAB–Python integration and code conversion techniques.",
            },
          ],
        },
        {
          date: "25th June 2025",
          sessions: [
            {
              speaker: "Mr. Kunal Khandelwal",
              topic: "Explainable AI",
              details:
                "Demonstrated use of pre-trained deep learning models on Google Colab and customization for research applications.",
            },
          ],
        },
        {
          date: "26th June 2025",
          sessions: [
            {
              speaker: "Elsevier Researcher Academy",
              topic: "Self-Paced Certification Courses",
              details:
                "Teaching staff completed certifications on professional development modules.",
            },
            {
              speaker: "Prof. Mira Gohil",
              topic: "3D Program of Knowledge",
              details:
                "A reflective session blending ancient literature with mindfulness and meditation.",
            },
          ],
        },
        {
          date: "27th June 2025",
          sessions: [
            {
              speaker: "Elsevier Researcher Academy",
              topic: "Continued Certifications",
              details:
                "Staff continued with professional development certifications.",
            },
            {
              speaker: "Mr. Rahul Tiwari (Senior Consultant, Microsoft)",
              topic: "From LLM to AI",
              details:
                "Explored enterprise AI applications and intelligent transformation strategies.",
            },
          ],
        },
        {
          date: "30th June 2025",
          sessions: [
            {
              speaker: "Dr. Varun Menon (SCM5 Group of Institutions)",
              topic: "Writing High-Quality Research Papers",
              details:
                "Covered strategies for SCOPUS/WoS publishing, trending areas like GenAI, LLMs, Federated AI, Edge, Quantum, and Neuromorphic Computing. Emphasized global repositories and open-access platforms like arXiv.",
            },
            {
              speaker: "Dr. Vinod (CUSAT)",
              topic: "Funded Project Proposal Writing",
              details:
                "Shared guidelines for preparing research proposals, evaluation criteria, benchmarking metrics, and funding opportunities such as MSCA.",
            },
          ],
        },
      ],
      outcome:
        "The STTP 2025 successfully combined expert lectures, hands-on sessions, wellness activities, and certifications. Participants gained practical insights into Green AI, LLMs, cloud sustainability, research publishing, and funded project preparation. The inclusion of yoga, mindfulness, and health check-ups reinforced a holistic learning approach. The program concluded with strengthened research capabilities and heightened awareness of IT's role in sustainable development.",
    },
    // ... keep 2024, 2023, etc. as before

    {
      year: "2024",
      title: "ISTE Approved STTP – 2024",
      theme:
        "Information Technology in Agriculture and Healthcare for Sustainability – Viksit Bharat",
      desc: "TIMSCDR conducted a 2-week ISTE approved Short Term Training Program (STTP), in association with CSI, Mumbai Chapter from June 18 – June 29, 2024. The theme of this year’s STTP was Information Technology in Agriculture and Healthcare for Sustainability – Viksit Bharat. The program included staff training, expert talks, hands-on workshops, and knowledge-sharing sessions.",
      highlights: [
        "Agriculture & Healthcare Sustainability",
        "Yoga & Meditation",
        "Intellectual Property Rights",
        "Plastic RRR & Water Management",
        "MATLAB Workshops",
        "Design Thinking",
        "AI in Healthcare",
        "Research Proposals & Digital Presence",
      ],
      schedule: [
        {
          date: "18th June 2024",
          sessions: [
            {
              speaker: "Dr. Vinita Gaikwad",
              topic: "Inaugural Address",
              details:
                "Welcomed all delegates and participants, marking the beginning of the STTP.",
            },
            {
              speaker: "Sajan Resort",
              topic: "Staff Training & Team Building",
              details:
                "The first day of the Staff Training and Team-building Program was packed with thrilling activities, fun, and team bonding.",
            },
          ],
        },
        {
          date: "19th June 2024",
          sessions: [
            {
              speaker: "Ms. Supriya Baikerikar",
              topic: "Yoga Session",
              details:
                "Guided participants through physical postures, breathing exercises, and mindfulness practices aimed at enhancing physical, mental, and emotional well-being. Included gentle warm-ups, yoga postures, and a relaxing cooldown.",
            },
            {
              speaker: "Ms. Vineeta Gupta",
              topic: "Sahaja Yoga Meditation",
              details:
                "Explained the subtle system, chakras, and the awakening of kundalini energy. Demonstrated a meditation process to help participants achieve inner harmony and balance.",
            },
          ],
        },
        {
          date: "20th June 2024",
          sessions: [
            {
              speaker: "Dr. Bharat Suryawanshi",
              topic: "Intellectual Property Rights",
              details:
                "Covered copyrights, patents, trademarks, and trade secrets. Emphasized the importance of protecting innovation and provided insights into the patent application process.",
            },
            {
              speaker:
                "Dr. Yelloji Mirajkar / Dr. Rashmi Kulkarni / Dr. Srinivasa K. Rao",
              topic: "Aahaar Kranti & Nutrition",
              details:
                "Dr. Yelloji Mirajkar discussed the 'Aahaar Kranti' initiative, critiquing the Indian Diet Pyramid and advocating for a nutrient-rich diet based on Ayurvedic principles. Dr. Rashmi Kulkarni highlighted the importance of balanced nutrition in preventing diseases. Dr. Srinivasa K. Rao discussed biofortification under the 'Poshan Abhiyan' scheme.",
            },
          ],
        },
        {
          date: "21st June 2024",
          sessions: [
            {
              speaker: "Mr. Rajesh Patalia",
              topic: "Digital Marketing",
              details:
                "Discussed digital marketing’s importance, its technological impact, and the need for ethical practices in the digital age.",
            },
            {
              speaker: "Dr. Seema Jagtap",
              topic: "Water Management",
              details:
                "Highlighted traditional water management techniques from ancient India and advocated integrating these sustainable practices with modern methods for effective water resource management.",
            },
          ],
        },
        {
          date: "22nd June 2024",
          sessions: [
            {
              speaker: "Mrs. Sonal Desai",
              topic: "Plastic RRR",
              details:
                "Stressed the importance of reducing, recycling, and reusing plastic to support sustainability. Provided practical tips for minimizing plastic use and highlighted its environmental impacts.",
            },
            {
              speaker: "Dr. Rajesh Bansode",
              topic: "National Education Policy (NEP)",
              details:
                "Discussed the implementation of NEP for postgraduate programs. Emphasized its goal to reduce illiteracy and improve employability by enhancing foundational education and its broader impact on society.",
            },
          ],
        },
        {
          date: "24th June 2024",
          sessions: [
            {
              speaker: "Mr. Kunal Khandelwal",
              topic: "MATLAB – Data Processing & Analysis",
              details:
                "Provided an overview of MATLAB’s programming constructs and its applications for data processing, visualization, and statistical analysis. Participants practiced using MATLAB’s built-in functions and explored online training options, including 'Clean and Prepare Data for Analysis,' with encouragement to pursue certifications.",
            },
          ],
        },
        {
          date: "25th June 2024",
          sessions: [
            {
              speaker: "Mr. Kunal Khandelwal",
              topic: "MATLAB – Visualization Workshop",
              details:
                "Demonstrated MATLAB’s visualization functions, guiding participants in creating and customizing 2D and 3D plots such as line graphs, scatter plots, histograms, and surface plots. Participants practiced advanced graphics capabilities for interactive data exploration. A significant number of participants earned certifications.",
            },
          ],
        },
        {
          date: "26th June 2024",
          sessions: [
            {
              speaker: "Ms. Devanshi Sihare (Tinker Labs)",
              topic: "Design Thinking",
              details:
                "Led a one-day workshop introducing the Design Thinking lifecycle—Empathize, Define, Ideate, Prototype, Test, and Iterate—through case studies. Participants tackled issues like reducing screen time and mitigating sleep disorders in groups, applying creative problem-solving techniques.",
            },
          ],
        },
        {
          date: "27th June 2024",
          sessions: [
            {
              speaker: "Mr. & Mrs. Afzal Khatri",
              topic: "Water & Land Conservation",
              details:
                "Discussed India’s water crisis, the need for sustainable management, and highlighted successful conservation projects. Advocated the use of AI and conscious intelligence for environmental care.",
            },
            {
              speaker: "Ms. Anjali Mogare",
              topic: "AI in Healthcare",
              details:
                "Explored AI’s role in healthcare, covering advancements in diagnostics, personalized treatments, and drug discovery. Provided insights into career opportunities in AI and healthcare.",
            },
          ],
        },
        {
          date: "28th June 2024",
          sessions: [
            {
              speaker: "Dr. Umakant Butkar (VB Solutions)",
              topic: "Research Proposals",
              details:
                "Explained how to craft effective research proposals, stressing societal relevance, clear goals, and strong academic credentials. Covered major funding agencies and expenditure planning.",
            },
            {
              speaker: "Dr. Umakant Butkar",
              topic: "Enhancing Digital Presence",
              details:
                "Focused on leveraging platforms like Google Scholar, ResearchGate, LinkedIn, and YouTube for academic outreach, visibility, and even financial opportunities.",
            },
          ],
        },
        {
          date: "29th June 2024",
          sessions: [
            {
              speaker: "Dr. Vinita Gaikwad",
              topic: "Valedictory Function",
              details:
                "Concluded the STTP with a valedictory ceremony, graced by the Director. Certificates were awarded to all participants.",
            },
          ],
        },
      ],
    },
    {
      year: "2023",
      title: "ISTE Approved STTP – 2023",
      theme: "Information Technology – Women Empowerment",
      desc: "TIMSCDR conducted a 2-week ISTE approved Short Term Training Program (STTP), in association with CSI, Mumbai Chapter from May 29, 2023 – June 9, 2023. The theme of this year’s STTP was Information Technology – Women Empowerment. The STTP started with our Director, Dr. Vinita Gaikwad address, wherein she welcomed all delegates and participants.",
      highlights: [
        "Women Empowerment through IT",
        "Diet & Nutrition with Millets",
        "MATLAB Fundamentals & Data Visualization",
        "CO-PO Mapping",
        "AQAR & IQAC Practices",
        "Strategy Management",
        "Kitchen Waste Management",
        "AI Tools for Productivity",
        "NLP & Mind Training",
        "Yoga & Wellbeing",
        "Brahma Kumaris – Purpose of Life & Mindset",
        "Research Paper Writing & Bibliometric Tools",
        "Industrial & NGO Visits",
        "Team Bonding Field Trips",
      ],
      schedule: [
        {
          date: "29th May 2023",
          sessions: [
            {
              speaker:
                "Ms. Anupama Singh Padhi (Founder CEO at Dhaani Foods & Dhaanikala)",
              topic: "Diet Session",
              details:
                "She discussed what is health in terms of physical, social and mental health. She provided 7 habits to healthy lifestyle and mentioned the diet that specifies what to eat and what not to eat. Various sources of vitamins, calcium and proteins were discussed. Millet is one of the important food sources with high nutrition, high fiber and low Glycemic index. She introduced Indian Village Man, Dr Khadar Vali who relentlessly works in reviving 'Siridhanya' (positive millets) and explained the importance of switching to millets. She also shared various millet recipes.",
            },
            {
              speaker: "All Faculty Members",
              topic: "MATLAB Fundamentals Online Course",
              details:
                "Explored the topics of data analysis, visualization, modeling and programming.",
            },
          ],
        },
        {
          date: "30th May 2023",
          sessions: [
            {
              speaker: "Dr. Kamal Shah (VP at TCET)",
              topic: "CO-PO Mapping",
              details:
                "She talked about PO attainment, finding and bridging the gap. Explained that CO should be mapped to revised Bloom’s Taxonomy. Using current semester subject data, she explained how to calculate CO-PO mapping values. She discussed attainment tools, direct tools, and indirect tools used for CO-PO mapping.",
            },
          ],
        },
        {
          date: "31st May 2023",
          sessions: [
            {
              speaker: "Dr. Rajesh Bansode (Professor in IT, TCET)",
              topic: "Annual Quality Assurance Report (AQAR)",
              details:
                "He explained how AQAR is filled, the importance of aligning academic and institute calendars, and providing reasons for deviations. He discussed IQAC composition, and stressed including action plans, actions taken, and next steps. He highlighted performance indicators in question paper design, and criteria-wise considerations for AQAR. Faculty noted down the important points.",
            },
          ],
        },
        {
          date: "1st June 2023",
          sessions: [
            {
              speaker:
                "Mr. Ankit Kumar (Application Engineer, Design Tech Systems Pvt. Ltd.)",
              topic: "MATLAB for Data Processing and Visualization",
              details:
                "Explained analysis and visualization with vectors, matrices, tables of data, conditional data selection, organizing data, and increasing automation with functions. Faculty members completed hands-on activities and successfully earned the MATLAB Fundamentals certificate.",
            },
          ],
        },
        {
          date: "2nd June 2023",
          sessions: [
            {
              speaker:
                "Dr. Mukesh Gupta (Founder Director, LeNest; Chairperson Media Communication Cell; Past President AMC)",
              topic: "Strategy Management",
              details:
                "Started with the life cycle of business. Explained Michael Porter’s steps in strategic management: creating unique and valuable position, making trade-offs, and aligning for the right fit. Stressed defining core competency, continuous benchmarking, and using Porter’s Five Forces model for analyzing teaching-learning processes.",
            },
            {
              speaker: "Mrs. Bhagyashree Chemburkar",
              topic: "Kitchen Waste Management",
              details:
                "Explained that every household should manage garbage by segregating dry and wet waste. Wet waste can be used for composting, while dry waste can be managed by organizations like Recycle Cycle Foundation. Encouraged saying 'No to plastic'.",
            },
          ],
        },
        {
          date: "3rd June 2023",
          sessions: [
            {
              speaker: "Dr. Sangeeta Shirname (Founder of INSEED NGO)",
              topic: "NGO Visit – Adiwasi Village, Janu Pada, Kandivali East",
              details:
                "Faculty and staff visited an underprivileged tribal village school. Understood the survival struggles, lack of facilities and opportunities. Dr. Sangeeta explained how INSEED collects funds and resources for basic needs.",
            },
            {
              speaker: "Mr. Aditya K (Be10X)",
              topic: "AI Tools",
              details:
                "Introduced AI tools for presentations, email filtering, research paper reading, summarization, communication practice, and Excel tasks. Faculty received participation certificates.",
            },
          ],
        },
        {
          date: "4th – 5th June 2023",
          sessions: [
            {
              speaker:
                "Mr. Sunil Parekh (International success coach, NLP practitioner, Founder of Rise Development Academy)",
              topic: "Teacher Training – NLP & Mindset",
              details:
                "Delivered a 2-day session on 'How can a teacher be trained to get best out of students.' Introduced the formula Event + Response = Outcome. Spoke about Law of Attraction, Law of Resonance, and workings of conscious vs subconscious mind. Shared 'Seven Steps to Success' formula.",
            },
          ],
        },
        {
          date: "7th June 2023",
          sessions: [
            {
              speaker: "Ms. Madhu (Yoga Trainer)",
              topic: "Yoga Session",
              details:
                "Focused on strengthening the vertebral column through stretching exercises and Asanas. Promoted 'Har Ghar Aangan Yoga' and 'One Yoga for One World'.",
            },
            {
              speaker:
                "Brahma Kumaris (Ms. Sandhya Sister & Ms. Kavita Sister)",
              topic: "Purpose of Life & Mindset for Changing Times",
              details:
                "Ms. Sandhya stressed gratitude as life’s highest wealth and accepting people as they are. Ms. Kavita emphasized humility and aligning with nature’s giving quality.",
            },
          ],
        },
        {
          date: "8th June 2023",
          sessions: [
            {
              speaker: "Dr. Shilpi Shah (MSNIM)",
              topic: "Research Paper Writing",
              details:
                "Covered Bibliometric Analysis, Prisma Analysis, and use of SCOPUS and IEEE for research searches. Demonstrated applying filters by subject, country, publication, and citations. Introduced VOSVIEWER for bibliometric visualization. Explained formatting papers using Word developer tools.",
            },
            {
              speaker: "Dr. Vinita Gaikwad",
              topic: "Valedictory Function",
              details:
                "Concluded the STTP with certificate distribution to all participants.",
            },
          ],
        },
        {
          date: "9th June 2023",
          sessions: [
            {
              speaker: "TIMSCDR Faculty & Staff",
              topic: "Field Trip – Monteria Village, Kalote Khalapur, Raigad",
              details:
                "Enjoyed activities like giant swing, puppet show, pottery, khat weaving, boating, swimming, and rain dance. Learned about farm tours, biogas plants, and vermicomposting. The trip ended with sweet memories.",
            },
          ],
        },
      ],
    },
    {
      year: "2022",
      title: "ISTE Approved STTP – 2022",
      theme: "Information Technology for Sustainability – Carbon Neutrality",
      desc: "TIMSCDR conducted a 2 week ISTE approved STTP in association with CSI, Mumbai Chapter from 6 – 17 June 2022. The theme of this year’s STTP was Information Technology for Sustainability- Carbon Neutrality. The STTP started with our Director, Dr. Vinita Gaikwad address, wherein she welcomed all delegates and participants. She conducted session on “Towards Carbon neutrality”. She discussed global warming, net zero carbon emission, action needed by 2030 and sustainable developments goals. She also discussed several methods of carbon capturing, utilization and storage.",
      highlights: [
        "AWS Cloud Computing Workshop",
        "Sustainability and Carbon Neutrality",
        "Innovative Teaching Methods",
        "Energy Literacy Training",
        "Art of Living & Yoga Asana",
        "Universal Human Values",
        "Field Trip – Saguna Baug",
        "Course Outcomes & CO-PO Mapping",
        "Carbon Neutrality Workshop",
        "Sustainability and Global Warming",
        "Conservation of Natural Resources",
        "Carbon Farming Opportunities",
        "Valedictory Function",
      ],
      schedule: [
        {
          date: "6th – 7th June 2022",
          sessions: [
            {
              speaker: "Mr. Shridhar Galande",
              topic: "AWS Cloud Computing Workshop",
              details:
                "He discussed about AWS service provided by the Amazon and it uses in distributed IT infrastructure in different IT resources available on demand. Also he discussed various services such as infrastructure as a service (IaaS), platform as a service (PaaS) and packaged software as a service (SaaS), AWS EC2 – Elastic Compute Cloud, AWS S3 – Simple Storage Service and also hands-on exercises based on IAM roles to grant access to AWS accounts by relying on short-term credentials, a security best practice.",
            },
          ],
        },
        {
          date: "8th June 2022",
          sessions: [
            {
              speaker:
                "Ms. Priti Bhandari (Founder Alchemei-Environment Initiatives)",
              topic: "Sustainability and Carbon Neutrality",
              details:
                "She explained from scratch from where carbon generates in our daily uses and she focused on how to control carbon emission by reusing the old gadgets, at individual level and how segregating the e-waste helps. She was able to draw attention of the participants by giving her real life examples.",
            },
            {
              speaker: "Mr. Aniket Pate (Kwality Infosolution)",
              topic: "Innovative Teaching Method",
              details:
                "He explained how the Smart board can be used for teaching innovatively.",
            },
            {
              speaker: "Energy Swaraj Foundation",
              topic: "Energy Literacy Training",
              details:
                "Faculties went through online materials from Energy Swaraj Foundation with practical explanation on the alternative sources of energy and making efficient home and office appliances using substitutes to reduce energy consumption.",
            },
          ],
        },
        {
          date: "9th June 2022",
          sessions: [
            {
              speaker:
                "Prerna Khandelwal (Consultant, Life Skills Trainer & Life Coach)",
              topic: "Art of Living",
              details:
                "Incorporated exercises and shared her experiences about what stress is and what the 7 layers of existence Body, Breath, Mind, Intellectual, Memory, ego, and self are.",
            },
            {
              speaker: "Ms. Anjali",
              topic: "Yoga Asana",
              details:
                "Exercises on eyes, mind and neck stretching to relax the body were practiced.",
            },
            {
              speaker:
                "Dr. Mohan B. Rao (Professor & Associate Dean, IES Management College & Research Centre)",
              topic: "Universal Human Values and Carbon Neutrality",
              details:
                "He discussed the role of humans and the responsibilities towards carbon neutrality by sharing the experiences of Korea and Bhutan, how Bhutan follows a holistic approach to handle carbon emission by applying holistic views.",
            },
          ],
        },
        {
          date: "10th June 2022",
          sessions: [
            {
              speaker: "Mr. Shekhar Bhatsawale",
              topic: "Field Trip – Saguna Baug, Neral",
              details:
                "Conducted an interactive session on carbon sequestration and gave in-depth knowledge on climate change and the role of human activities in climate change. Further he talked on Saguna Rice Techniques (SRT), how it can be used to cultivate rice without plowing, pudding and transplanting rice on permanent raised beds.",
            },
          ],
        },
        {
          date: "13th June 2022",
          sessions: [
            {
              speaker: "Mr. Gopal Krishna Jha",
              topic: "Yoga Session",
              details:
                "A full body workout was practised by all under the guidance of the yoga instructor.",
            },
            {
              speaker: "Ms. Sonu Gupta (Assistant Professor, TIMSCDR)",
              topic: "Course Outcomes",
              details:
                "She explained about the institute’s vision and mission and how to deal with syllabus, co-curricular activities and extra-curricular activities to achieve PEO, PO and CO Mapping.",
            },
          ],
        },
        {
          date: "14th June 2022",
          sessions: [
            {
              speaker: "Ms. Vedangi Sohni",
              topic: "Workshop on Carbon Neutrality",
              details:
                "She talked about how carbon offsets allow us to balance out our emission and she also explained direct, indirect ways of consumption of energy. She also highlighted on how digital transformation has brought many benefits that also have a positive impact on the fight against climate change and reduce CO2 emissions.",
            },
          ],
        },
        {
          date: "15th June 2022",
          sessions: [
            {
              speaker:
                "Prof. Yogendra Shastri (Dept. of Chemical Engineering, IIT Bombay)",
              topic: "Sustainability and Global Warming",
              details:
                "He highlighted topics on Energy consumption, how it has played a crucial role in climate change and how the Energy plays an important role in the development of the society. He spoke on Sustainable development goals and its challenges in Sustainable engineering by giving some example on UN Sustainable growth. A holistic approach is essential in impact assessment and 12 principles of them.",
            },
            {
              speaker:
                "Dr. Umesh Mundlye (Director, OIKOS Water Management Pvt Ltd.)",
              topic:
                "Conservation of Natural Resources – A Solution for Sustainable Carbon Neutrality",
              details:
                "He elucidated about carbon neutrality and Carbon sequestration.",
            },
          ],
        },
        {
          date: "16th June 2022",
          sessions: [
            {
              speaker:
                "Mr. Ravin Kumar (Product Leader, TCS Digital Farming Initiative)",
              topic:
                "Carbon Farming and Potential Opportunities for Farmers and Agri Value Chain Players",
              details:
                "He spoke on carbon farming and why carbon farming is needed, challenges in carbon farming, and the need for sustainability in food production. He talked on the areas to achieve sustainability holistically and about the positive and negative contributions of each sector.",
            },
          ],
        },
        {
          date: "17th June 2022",
          sessions: [
            {
              speaker:
                "Dr. Abdul Moid (Director, ERTL(W) Mumbai, STQC DTE, Ministry of Electronics & Information Technology, Govt. of India)",
              topic: "Valedictory Function",
              details:
                "In his short speech he briefed about how technology contributes in real life in the current pandemic situation.",
            },
          ],
        },
      ],
      outcome:
        "As an outcome of the STTP 2022 participants got an appropriate learning platform to enhance the knowledge and skills about the latest technologies like cloud computing and also got a exposure to few very relevant topic of the modern world like carbon neutrality and alternative solar energy.",
    },
    {
      year: "2021",
      title: "ISTE Approved Online STTP – 2021",
      theme:
        "Information Technology for Sustainability : Blockchain Technology and Data Science",
      desc: "TIMSCDR conducted a 2 week ISTE approved STTP in association with CSI, Mumbai Chapter and Spoken tutorial, IIT from 17 – 29 June 2021. The theme of this year’s STTP was Information Technology for Sustainability: Blockchain Technology and Data Science. The STTP started with a speech by our Director, Dr. Vinita Gaikwad wherein she welcomed all delegates and participants and discussed the entire schedule of STTP and what the participants can expect to learn from it. STTP was inaugurated by Dr. Suresh Shan, Head – Innovation & Future Technologies BITS, Mahindra & Mahindra Financial Services Limited. He applauded the efforts taken by the Institute to train the staff and students on latest technology and emphasized about the need to focus on sustainability in the current times.",
      highlights: [
        "Geriatric Care",
        "Food System Challenges & Data Driven Transformation",
        "Digital Era & Research Opportunities",
        "International Yoga Day",
        "Blockchain Applications",
        "Cyber Security Awareness",
        "Deep Learning Applications",
        "Data Science in FMCG",
        "Emerging Trends Post COVID",
        "Machine Learning Fundamentals",
        "Blockchain Hands-on (Bitcoin & Metamask)",
        "Workshops on R, Python, PHP (Spoken Tutorial)",
        "Valedictory Function",
      ],
      schedule: [
        {
          date: "17th June 2021",
          sessions: [
            {
              speaker: "Dr. Vinita Gaikwad (Director, TIMSCDR)",
              topic: "Inaugural Speech",
              details:
                "She welcomed all delegates and participants and discussed the entire schedule of STTP and what the participants can expect to learn from it.",
            },
            {
              speaker:
                "Dr. Suresh Shan (Head – Innovation & Future Technologies BITS, Mahindra & Mahindra Financial Services Limited)",
              topic: "Inaugural Address",
              details:
                "He applauded the efforts taken by the Institute to train the staff and students on latest technology and emphasized about the need to focus on sustainability in the current times.",
            },
          ],
        },
        {
          date: "17th June 2021",
          sessions: [
            {
              speaker:
                "Dr. Narendra Vaidya (Hon. President of Aastha Foundation, Aurangabad)",
              topic: "Geriatric Care",
              details:
                "He briefed everybody about Geriatric Care and talked about its significance as the share of Indian population over the age of 60 is projected to increase from 8 per cent to nearly 20 per cent in 2050. He talked about various challenges while caring for old age patients and various diseases associated with age such as Dementia, Alzeimer’s.",
            },
            {
              speaker:
                "Mr. Deepak Pareek (Author, Expert Digital Transformation, Entrepreneur, Technology Pioneer – World Economic Forum)",
              topic: "Food System Challenges & Transformation",
              details:
                "He spoke about unevenly distributed food pyramid, micronutrient deficiency in coming decades, threats due to climate change, disturbances in environment, challenges in pandemic situation and current challenges of food chain. The food system needs fundamental transformation which has to be Data driven, insightful, scalable, holistic, distributed, self-learning, transparent, real-time, collaborated and profitable.",
            },
            {
              speaker:
                "Mr. Dinesh Kumar Singh (Group Leader, Digital Farming Initiative, TCS)",
              topic: "Digital Era & Research Opportunities",
              details:
                "He talked from the starting of Digital era and its impact in todays world. He discussed about research in digital age and problems & opportunities associated with it. He talked about 5 main digital forces – mobility, big data, social media, cloud, AI & robotics and scope of research in all these areas.",
            },
          ],
        },
        {
          date: "21st June 2021",
          sessions: [
            {
              speaker:
                "Mr. Chandan Mishra (Yoga Instructor, Ground ‘N’ Pound MMA & Let’s Play Foundation)",
              topic: "International Yoga Day",
              details:
                "A full body workout along with Pranayam was practised by all under the guidance of the yoga instructor.",
            },
          ],
        },
        {
          date: "22nd June 2021",
          sessions: [
            {
              speaker:
                "Mr. Jeeven Saini (Co-Founder & CEO, Sofocle Innovation Labs Pvt. Ltd.)",
              topic: "Blockchain Applications",
              details:
                "He discussed practical use and applicability of Blockchain in various domains such as banking, financial fintech, charity, credit history, cloud storage etc. He explained in detail how use of 256 bit hash functions and its distributed nature makes it tamper proof and immutable.",
            },
          ],
        },
        {
          date: "23rd June 2021",
          sessions: [
            {
              speaker:
                "Mr. Abhishek Pandey (Cyber Security Engineer, Cyber SECURE)",
              topic: "Cyber Security Awareness",
              details:
                "He explained about common hacking scenarios such as Mobikwik system and types of crackers like black hat hacker, gray hat hackers, script kiddies, state/nation sponsored hackers. He concluded his session by making everyone aware about government cyber laws and how an individual can fight against cyber attacks and shared resources such as reportphising.in and cybercrime.gov.in etc.",
            },
          ],
        },
        {
          date: "24th June 2021",
          sessions: [
            {
              speaker:
                "Mr. Devesh Rajadhyax (Founder & CEO, Cere Labs Pvt. Ltd.)",
              topic: "Deep Learning Applications",
              details:
                "He started the session with introduction to Deep Learning and its applications of object detection, anomaly detection, face recognition, sentiment analysis, virtual assistant etc. He took a case study of a monochrome image detection and text and demonstrated how they are processed to converted into a vector and then fed into a deep learning neural network.",
            },
          ],
        },
        {
          date: "25th June 2021",
          sessions: [
            {
              speaker:
                "Mr. Jacky Patel (Director Analytics Solutions, Veracitiz Solutions) & Mr. Satyajit Garewal (Team Lead, Analytics Solutions, Veracitiz Solutions)",
              topic: "Data Science in FMCG",
              details:
                "Mr. Satyajit started the session with how business dynamics have changed in real life scenarios regarding goverment norms, workforce well- being, decision intellignce, digital global leadership, value chain system etc. Taking example of a use case of FMCG he demonstrated how data analytics is used in predictive and prescriptive analysis to forecast sales of a product in future.",
            },
          ],
        },
        {
          date: "26th June 2021",
          sessions: [
            {
              speaker:
                "Dr. Seema Purohit (Principal, Deccan Education Society’s Brihan Maharashtra College of Commerce)",
              topic: "Emerging Trends Post COVID",
              details:
                "She started her session with how life around the globe has changed during the COVID pandemic and how it has also impacted the IT sector. She also showed report on ‘Emerging trends from and after 2020’ published by AIM and Analytixlabs in December 2020 and discussed how data science with other technologies such as AI will be the most dominant technology in coming times.",
            },
          ],
        },
        {
          date: "27th June 2021",
          sessions: [
            {
              speaker: "Mr. Awab Habib Fakih (Entrepreneur and Educator)",
              topic: "Machine Learning Fundamentals",
              details:
                "He started session with fundamentals of machine learning and future of machine learning. He elaborated upon concepts of what are the types of machine learning, segments of machine learning, methods of evluating machine learning and benefits of machine learning. He also explained Google Ads on the basis of classification, suggesstions, browsing history of customer to increase the revenue of business.",
            },
          ],
        },
        {
          date: "28th June 2021",
          sessions: [
            {
              speaker:
                "Dr. Deven Shah (Vice-Principal, TCET) with PhD associates Ms. Neeraj Khairwal & Mr. Sandip Bankar",
              topic: "Blockchain Hands-on (Bitcoin & Metamask)",
              details:
                "He started the session with blockchain technology basics. Ms. Neeraj Khairwal explained bitcoin installation and transactions using commands. Later Mr. Sandip Bankar gave a brief introduction of bitcoin and metamask (A crypto wallet & gateway to blockchain apps).",
            },
          ],
        },
        {
          date: "17th – 25th June 2021",
          sessions: [
            {
              speaker:
                "TIMSCDR Faculty in association with Spoken Tutorial, IIT-Bombay",
              topic: "Workshops on R, Python, PHP",
              details:
                "In between the multiple sessions by the erudite personalities who shared their insights on sustainability there was a workshop on the chosen subjects by the faculty members like R, Python, PHP etc. in association with Spoken tutorial, IIT-Bombay between 17 -25 June at various time slots. The knowledge enhancing videos developed by Spoken Tutorials were uploaded in the TIMSCDR YouTube channel and based on that daily assignments were given.",
            },
          ],
        },
        {
          date: "29th June 2021",
          sessions: [
            {
              speaker: "Mr. Ravikiran Mankikar (Chairman, CSI Mumbai Chapter)",
              topic: "Valedictory Function",
              details:
                "In his short speech he briefed about how technology contributes in real life in the current pandemic situation.",
            },
          ],
        },
      ],
      outcome:
        "As an outcome of the online STTP 2021 participants got an appropriate online Learning platform to enhance the knowledge and skills during the pandemic of COVID-19.",
    },
    {
      year: "2020",
      title: "ISTE Approved Online STTP – 2020",
      theme: "Information Technology for Sustainability",
      desc: "TIMSCDR organized for the first time its STTP online between 15 – 26 June 2020 themed on Information Technology for Sustainability, approved by ISTE, New Delhi and Spoken Tutorial, IIT-Bombay, in association with CSI, Mumbai. The programme was enriched with talks from eminent personalities in various domains.",
      highlights: [
        "Mindfulness in the COVID-19 Scenario",
        "Systematic Data Organization & Presentation (NAAC Processes)",
        "Design Thinking Approaches",
        "Telemedicine & TeleHealth",
        "Telemedicine – A Road Less Travelled",
        "Art of Living – Sudarshan Kriya",
        "IoT Applications in Agriculture",
        "Yoga and Physiotherapy",
        "Blockchain Technology",
        "Online Open Source Tools for Educators",
        "Team Building",
        "Agriculture amidst COVID-19",
        "Workshop on Python 3.4.3 (Spoken Tutorial, IIT-Bombay)",
        "Valedictory Function",
      ],
      schedule: [
        {
          date: "15th June 2020",
          sessions: [
            {
              speaker:
                "Dr. Suresh Chandra Gupta (Honorary Head, CSI – Mumbai Chapter)",
              topic: "Inaugural Address",
              details:
                "He explained the various collaborative online programs which are conducted by CSI Mumbai chapter and discussed how CSI helps students to enhance their skills in technology in the current pandemic situation.",
            },
            {
              speaker: "Ms. Rhea Pai (COO, Thakur Education Group)",
              topic: "Mindfulness in the COVID-19 Scenario",
              details:
                "She explained how mindfulness can be used to focus attention on the present moment and knowing your inner self. She emphasized the importance of self-management to nurture mindful leaders needed to handle complex problems with a calm mind.",
            },
          ],
        },
        {
          date: "16th June 2020",
          sessions: [
            {
              speaker:
                "Dr. Sangeeta Joshi (Professor & Technical Advisor, Director, IQAC & NAAC Convener, VIT)",
              topic: "Systematic Data Organization & Presentation",
              details:
                "She explained the NAAC accreditation process in detail, the importance of accreditation, and elaborated on Data Verification and Validation with examples, covering qualitative and quantitative analysis.",
            },
            {
              speaker:
                "Dr. Sangeeta Joshi (Professor & Technical Advisor, VIT)",
              topic:
                "Inculcating Mindset for Developing Processes and Systems for NAAC",
              details:
                "She explained in detail about IQAC and the processes institutions must follow to achieve excellence.",
            },
          ],
        },
        {
          date: "17th June 2020",
          sessions: [
            {
              speaker:
                "Mr. Awab Habib Fakih (Educator, Edupreneur, Startup Mentor)",
              topic: "Design Thinking",
              details:
                "He explained how to approach problems with Blue Ocean and Red Ocean strategies, Lotus Blossom techniques, and prototyping methods. He emphasized the balance of analytical and intuitive thinking.",
            },
          ],
        },
        {
          date: "18th June 2020",
          sessions: [
            {
              speaker:
                "Dr. K. Ganapathy (Professor of Neurosurgery, Director, Apollo Tele Health Services, Chennai)",
              topic: "Telemedicine & TeleHealth",
              details:
                "He explained how telemedicine delivers healthcare services where distance is critical and how technology helps in the digital healthcare ecosystem.",
            },
            {
              speaker:
                "Dr. Milind Antani (Lead, Pharma, Lifescience & Healthcare Practice) with Mr. Darren Punnen & Ms. Shreya Shenolikar",
              topic: "Telemedicine – A Road Less Travelled by a Doctor",
              details:
                "They discussed the 'New Beginning in Medicine' in the pandemic context, covering digital health, telemedicine processes, models, and applications.",
            },
          ],
        },
        {
          date: "22nd June 2020",
          sessions: [
            {
              speaker: "Ms. Neeta Sharda (Faculty, Art of Living)",
              topic: "Art of Living – Sudarshan Kriya",
              details:
                "She spoke about proper breathing, lifestyle diseases, and the benefits of Sudarshan Kriya. An online hands-on breathing and meditation session was conducted.",
            },
          ],
        },
        {
          date: "23rd June 2020",
          sessions: [
            {
              speaker:
                "Mr. Jasveer Singh (Founder & CEO, Sense IT Out Intelligent Pvt. Ltd.)",
              topic: "IoT – Introduction and Applications",
              details:
                "He explained IoT applications in agriculture, focusing on smart agriculture using sensor-based systems for monitoring crops, soil, storage, and production.",
            },
            {
              speaker: "Dr. Sharon Wu (Physiotherapist)",
              topic: "Yoga and Physiotherapy",
              details:
                "She explained the importance of posture and exercise during lockdown and demonstrated stretching exercises and physiotherapy techniques.",
            },
          ],
        },
        {
          date: "24th June 2020",
          sessions: [
            {
              speaker: "Dr. Deven Shah (Vice Principal, TCET)",
              topic: "Blockchain Technology",
              details:
                "He explained bitcoins, centralization, Ethereum, drawbacks, interoperability, AWS blockchain services, and applications of blockchain.",
            },
            {
              speaker: "Mr. A.P. Gaurvadkar (TPO, RIT)",
              topic: "Online Open Source Tools for Educators",
              details:
                "He introduced tools such as OBS and Poll Everywhere to help educators connect with students online and enhance virtual teaching.",
            },
          ],
        },
        {
          date: "25th June 2020",
          sessions: [
            {
              speaker:
                "Ms. Suman Pai (Communication Expert, RBNQA Senior Examiner)",
              topic: "Team Building",
              details:
                "She explained the role of organizations in preparing team members during the pandemic and shared examples of handling teamwork in remote work culture.",
            },
            {
              speaker: "Mr. Ramaswamy Seshan (Co-Founder, Nine D Agrotech)",
              topic: "Agriculture amidst COVID-19",
              details:
                "He explained the impact of COVID-19 on agriculture, eating habits, organic farming, and how IT can enable hydroponics, aquaponics, and aeroponics.",
            },
          ],
        },
        {
          date: "15th – 25th June 2020",
          sessions: [
            {
              speaker:
                "TIMSCDR Faculty in association with Spoken Tutorial, IIT-Bombay",
              topic: "Workshop on Python 3.4.3",
              details:
                "A hands-on workshop conducted with Spoken Tutorial, IIT-Bombay. Knowledge videos were uploaded on TIMSCDR YouTube channel with daily assignments.",
            },
          ],
        },
        {
          date: "26th June 2020",
          sessions: [
            {
              speaker: "Mr. Ravikiran Mankikar (Chairman, CSI Mumbai Chapter)",
              topic: "Valedictory Function",
              details:
                "He briefed about how technology contributes in real life in the current pandemic situation.",
            },
          ],
        },
      ],
      outcome:
        "As an outcome of the online STTP 2020, about 157 participants from all over India were certified after strict evaluation of feedback and assignments. Participants gained an online learning platform to enhance knowledge and skills during the COVID-19 pandemic, a forum for industry–academia interaction, and an opportunity to study the role of IT in sustainability while also benefitting from holistic sessions like Yoga and Art of Living.",
    },
  ];

  // const features = [
  //   {
  //     icon: "🎯",
  //     title: "Industry Expert Sessions",
  //     desc: "Learn from leading professionals in technology, sustainability, and research from top organizations like TCS, Microsoft, IIT, and more.",
  //   },
  //   {
  //     icon: "🌱",
  //     title: "Sustainability Focus",
  //     desc: "Every program emphasizes sustainable practices, green technology, and environmental responsibility in IT applications.",
  //   },
  //   {
  //     icon: "🧘",
  //     title: "Holistic Development",
  //     desc: "Integration of wellness sessions including yoga, meditation, mindfulness, and stress management for overall well-being.",
  //   },
  //   {
  //     icon: "💻",
  //     title: "Hands-on Training",
  //     desc: "Practical workshops on latest technologies including AI, blockchain, cloud computing, data science, and IoT applications.",
  //   },
  //   {
  //     icon: "🏆",
  //     title: "ISTE Certification",
  //     desc: "All programs are ISTE approved, providing recognized certification and professional development credits.",
  //   },
  //   {
  //     icon: "🤝",
  //     title: "Industry Collaboration",
  //     desc: "Strong partnerships with CSI Mumbai Chapter, leading tech companies, and research institutions for comprehensive learning.",
  //   },
  // ];

  // ====== JSX ======
  const [showForm, setShowForm] = useState(false);
  const [carouselIdx, setCarouselIdx] = React.useState(0); // current slide index

  return (
    <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />
      <div className="fdp23-root">
        {/* Navbar */}

        {/* Hero */}

        {/* Stats */}

        {/* Programs */}
        <section className="sttp-programs-section" id="programs">
          <div className="fdp23-container">
            <h2 className="sttp-section-title sttp-reveal">
              Training Programs
            </h2>
            <p className="sttp-section-desc sttp-reveal">
              Comprehensive professional development programs designed to
              enhance teaching excellence and technological expertise
            </p>
            {/* ================= CAROUSEL SECTION ================= */}
            <section className="fdp23-carousel-section">
              <div className="fdp23-container">
                {/* <h2 className="fdp23-section-title">Program Highlights</h2> */}

                {/* Carousel wrapper */}
                <div className="fdp23-carousel-container">
                  {/* Carousel slides track (moves left/right based on index) */}
                  <div
                    className="fdp23-carousel-track"
                    style={{ transform: `translateX(-${carouselIdx * 100}%)` }}
                  >
                    {carouselImages.map((img, i) => (
                      <div className="fdp23-carousel-slide" key={i}>
                        <img
                          src={img.src}
                          alt={img.title}
                          className="fdp23-carousel-img"
                        />
                        {/* Optional caption below image */}
                        {/* 
                  <div className="fdp23-carousel-caption">
                    <h3>{img.title}</h3>
                    <p>{img.desc}</p>
                  </div> 
                  */}
                      </div>
                    ))}
                  </div>

                  {/* Prev button */}
                  <button
                    className="fdp23-carousel-btn fdp23-carousel-prev"
                    onClick={() =>
                      setCarouselIdx(
                        (carouselIdx - 1 + carouselImages.length) %
                          carouselImages.length
                      )
                    }
                  >
                    ❮
                  </button>

                  {/* Next button */}
                  <button
                    className="fdp23-carousel-btn fdp23-carousel-next"
                    onClick={() =>
                      setCarouselIdx((carouselIdx + 1) % carouselImages.length)
                    }
                  >
                    ❯
                  </button>

                  {/* Indicators (dots) */}
                  <div className="fdp23-carousel-indicators">
                    {carouselImages.map((_, i) => (
                      <span
                        key={i}
                        className={`fdp23-carousel-indicator${
                          i === carouselIdx ? " fdp23-active" : ""
                        }`}
                        onClick={() => setCarouselIdx(i)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>
            <section className="sttp-stats-section" id="stats">
              <div className="sttp-container">
                <h2 className="sttp-section-title sttp-reveal">
                  Program Impact
                </h2>
                <p className="sttp-stats-desc sttp-reveal">
                  Delivering excellence in faculty development and technology
                  education
                </p>
                <div className="sttp-stats-grid">
                  {stats.map((stat, i) => (
                    <div key={i} className="sttp-stat-item sttp-reveal">
                      <span className="sttp-stat-number">{stat.number}</span>

                      <div className="sttp-stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <div className="sttp-programs-grid">
              {programs.map((prog, i) => (
                <div key={i} className="sttp-program-card sttp-reveal">
                  <div className="sttp-program-year">{prog.year}</div>
                  <h3 className="sttp-program-title">{prog.title}</h3>
                  <p className="sttp-program-theme">"{prog.theme}"</p>
                  <p className="sttp-program-desc">{prog.desc}</p>

                  {/* If program has fullContent (2024) */}
                  {prog.fullContent && (
                    <div className="sttp-program-fullcontent">
                      {prog.fullContent.map((day, d) => (
                        <div key={d} className="sttp-fullcontent-day">
                          <h4>{day.day}</h4>
                          <p>{day.details}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* If program has schedule (2025) */}
                  {prog.schedule && (
                    <div className="sttp-program-schedule">
                      {prog.schedule.map((day, d) => (
                        <div key={d} className="sttp-schedule-day">
                          <h4>{day.date}</h4>
                          <ul>
                            {day.sessions.map((s, k) => (
                              <li key={k}>
                                <strong>{s.speaker}</strong> –{" "}
                                <em>{s.topic}</em>
                                <p>{s.details}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="sttp-program-highlights">
                    {prog.highlights.map((h, j) => (
                      <span key={j} className="sttp-program-highlight">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        {/* <section className="sttp-features-section" id="features">
        <div className="sttp-container">
          <h2 className="sttp-section-title sttp-reveal">Program Features</h2>
          <div className="sttp-features-grid">
            {features.map((f, i) => (
              <div key={i} className="sttp-feature-card sttp-reveal">
                <div className="sttp-feature-icon">{f.icon}</div>
                <h3 className="sttp-feature-title">{f.title}</h3>
                <p className="sttp-feature-description">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      </div>
      <Footer />
    </>
  );
};

export default STTPPrograms;
