import React, { useState } from "react";
import Footer from "../components/Footer";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Navbar from "../components/navbar";


const guestLectures = [
  {
    year: "2024-2025",
    data: [
      {
        date: "07/03/2025",
        name: "Ms. Malvika Sinha",
        company: "Agile Coach at British Telecom Group",
        type: "Agile Transformation & Leadership Development",
      },
      {
        date: "25/02/2025",
        name: "Ms. Gunjali Sahai",
        company: "TEDx Speaker, Entrepreneur",
        type: "Fireside Chat – How to scale your Business",
      },
      {
        date: "25/02/2025",
        name: "Ms. Jyoti Agarwal",
        company: "Founder, Maa2Mom & Dumbledo",
        type: "",
      },
      {
        date: "09/02/2025",
        name: "Mr. Santosh Chapaneri",
        company: "Lead Data Scientist, Uptodate",
        type: "AI in Healthcare",
      },
      {
        date: "08/02/2025",
        name: "Dr. Gopal Shinde",
        company:
          "Head of Dept. (Mech. Engg), Dept of Farm Machinery & Power Engineering, Vasantrao Naik Marathwada Krishi Vidyapeeth Parbhani",
        type: "IT in Agriculture for Sustainability",
      },
      {
        date: "08/02/2025",
        name: "Dr. Prakash Jha",
        company: "Agriculture Climatology Professor, Director, Scientist",
        type: "AI in Agriculture",
      },
      {
        date: "06/02/2025",
        name: "Dr. Sabhyasachi Sengupta",
        company:
          "Well published Ophthalmologist, Founder – Chief Medical Writer – Lead Biostatistician at Sengupta’s Research Academy",
        type: "AI in Medicine",
      },
      {
        date: "06/02/2025",
        name: "Dr. Anand Rao",
        company:
          "GIST, Global Artificial Intelligence Lead in PwC, Leads AI and Emerging Technology",
        type: "AI and Blockchain applications in healthcare",
      },
      {
        date: "13/12/2024",
        name: "Mr. Tarun Kaushik",
        company: "Gillette Mach 3",
        type: "Interview Preparation and Personality Development",
      },
      {
        date: "13/12/2024",
        name: "Ms. Vinath Hegde",
        company: "Ex. Sr General Manager @ Eureka Forbes",
        type: "Women’s Hygiene & Personality Development",
      },
      {
        date: "13/12/2024",
        name: "Mr. Abhishek Pandey",
        company: "Consultant Coach, CEO, Bhaltiyog",
        type: "Universal Virtues of Life",
      },
      {
        date: "13/12/2024",
        name: "Mr. Usman Khan",
        company: "Senior Counsellor, IAE Global India Pvt Ltd",
        type: "Career Counselling Session on Overseas Education",
      },
      {
        date: "13/12/2024",
        name: "Mr. Rishi Agarwal",
        company: "exCTO – 3i Infotech",
        type: "Expert Talk on Innovation Development & Technology Readiness Level (TRL)",
      },
      {
        date: "25/10/2024",
        name: "Dr. Mukesh Gupta",
        company:
          "Founder director LeNest, Chairperson Media Communication cell, Past President AMC.",
        type: "Women Safety Against Sexual Harassment",
      },
      {
        date: "03/10/2024",
        name: "Mr. Amar Srivastav",
        company: "Senior Consultant – Deloitte",
        type: "Career in Quality Engineering",
      },
      {
        date: "28/09/2024",
        name: "Mr. Hemrup Chaitanya Das",
        company: "ISKON",
        type: "Finding Youth North Star",
      },
      {
        date: "27/09/2024",
        name: "Ms. Vinath Hegde",
        company: "Ex. Sr General Manager @ Eureka Forbes",
        type: "Personality Development and Menstrual Hygiene",
      },
      {
        date: "27/09/2024",
        name: "Ms. Yukti Mehandiratta",
        company: "Leader & Inspirational Speaker",
        type: "Workshop on Public Speaking",
      },
      {
        date: "27/09/2024",
        name: "Ms. Pooja Sinha",
        company: "Sr. IT Project Manager, CGI Canada",
        type: "Online session on Career Abroad & Certifications",
      },
      {
        date: "27/09/2024",
        name: "Ms. Sonu Gupta",
        company: "Dy. Director, Assistant Professor, TPO TIMSCDR",
        type: "LinkedIn Profile and Resume Preparation",
      },
      {
        date: "26/09/2024",
        name: "Mr. Kunal Ranade",
        company: "Sr. Manager at ICICI Direct, TIMSCDR Alumnus Batch 2017",
        type: "Career in Digital Marketing",
      },
      {
        date: "26/09/2024",
        name: "Dr. Mukesh Gupta",
        company:
          "Founder director LeNest, Chairperson Media Communication cell, Past President AMC.",
        type: "Session on Strategy Management",
      },
      {
        date: "25/09/2024",
        name: "Ms. Sapna Yadav",
        company: "Counselor, TEG",
        type: "Mindfulness and Mental Well-being: Tools for Everyday Life",
      },
      {
        date: "25/09/2024",
        name: "Mr. Arun Singh",
        company: "MBA in Finance",
        type: "Early Investments",
      },
      {
        date: "25/09/2024",
        name: "Ms. Aprajita Singh",
        company: "Assistant Professor, TIMSCDR",
        type: "Session on UHV1",
      },
      {
        date: "25/09/2024",
        name: "Mr. Vinod D.",
        company: "Safety Officer",
        type: "Session on Fire Fighting Drill",
      },
      {
        date: "25/09/2024",
        name: "Mr. & Mrs. Afzal Khatri",
        company: "Environmentalist",
        type: "Water & Land Conservation",
      },
      {
        date: "24/09/2024",
        name: "Dr. Awab Fakih",
        company: "Director of Student Alliance LLP",
        type: "Awareness Program on Intellectual Property Rights",
      },
      {
        date: "24/09/2024",
        name: "Mr. Shihan Sachin Chavan",
        company: "Founder & CEO – Karayobics",
        type: "Self Defence",
      },
      {
        date: "24/09/2024",
        name: "Dr. Seema Srivastava",
        company: "Ongoing practicing Physician",
        type: "General Health and Hygiene Related Issues",
      },
      {
        date: "24/09/2024",
        name: "Dr. Vineet Vaidya",
        company: "Professor at TCSC",
        type: "Green Club",
      },
      {
        date: "24/09/2024",
        name: "Mr. Sanjeev Jha",
        company: "Audit Manager @ Volkswagen Group Technology Solutions India",
        type: "Career in Cyber Security",
      },
      {
        date: "24/09/2024",
        name: "Dr. Kartik Nagarajan",
        company:
          "(ISRO Network Co-Ordinator) and Associate Professor at Pillai HOC College of Engineering and Technology",
        type: "Design Thinking",
      },
      {
        date: "24/09/2024",
        name: "Mr. Prashant Pandey",
        company: "Ernest & Young GDS as Manager – Digital Transformation",
        type: "Career in Artificial Intelligence & Machine Learning (AIML)",
      },
      {
        date: "21/08/2024",
        name: "Dr. Nilesh Lele",
        company:
          "President of the Chamber for Advancement of Small and Medium Businesses",
        type: "Entrepreneurship Empowered: A day of recognition",
      },
      {
        date: "19/07/2024",
        name: "Dr. Sagar Pawar",
        company:
          "Resource Person & Consultant, Founder – Servicee Healspace Pvt Ltd",
        type: "Pathways to Success: Entrepreneurial Insights and Inspiration",
      },
    ],
  },
  {
    year: "2023-2024",
    data: [
      {
        date: "02/04/2024",
        name: "Dr. Seema Jagtap",
        company: "Professor at TCET",
        type: "Guiding students on IKS",
      },
      {
        date: "02/04/2024",
        name: "Ms. Priyanka Deshmukh",
        company: "",
        type: "",
      },
      {
        date: "02/04/2024",
        name: "Mr. Janaksinh Jhala",
        company: "Principal Associate at Khaitan & Co",
        type: "Guiding students on IPR",
      },
      {
        date: "20/03/2024",
        name: "Mr. Abhay Naik",
        company: "Director, Engineering @ Elevate K-12",
        type: "Guiding students on Building innovative solutions",
      },
      {
        date: "01/03/2024",
        name: "Mr. Ajay Singh",
        company: "Senior Director of Engineering, Flipkart",
        type: "Campus to Corporate transition, Importance of soft skills",
      },
      {
        date: "22/02/2024",
        name: "Ms. Madhu Raina Pande",
        company: "Additional Director, Choose Wise",
        type: "Career guidance on foreign University admission",
      },
      {
        date: "08/02/2024",
        name: "Ms. Anupama (Singh) Padhi",
        company: "Founder, CEO, DhaaniFoods & Dhaanikala",
        type: "Millet Health Benefits",
      },
      {
        date: "08/02/2024",
        name: "Dr. Vilas Jadhav",
        company: "Sr. Scientist & Head – Krishi Vigyan Kendra, Palghar",
        type: "Role of KVK in Empowering Women in Rural India",
      },
      {
        date: "07/02/2024",
        name: "Er. Anuja Divate",
        company: "Subject Matter Specialist – Krishi Vigyan Kendra, Palghar",
        type: "Women Empowerment in Rural Areas through Millet Processing",
      },
      {
        date: "06/02/2024",
        name: "Ms. Jennifer Dhuri",
        company: "Dietician and Nutritionist",
        type: "Role of Good Health and Diet in Empowering Women",
      },
      {
        date: "05/02/2024",
        name: "Ms. Rupali Deshmukh",
        company: "Scientist, Food & Nutrition – Krishi Vigyan Kendra, Palghar",
        type: "Role of Women Empowerment in Health, Finance & Literacy",
      },
      {
        date: "08/12/2023",
        name: "Mr. Vinay Raikar",
        company: "Founder of Campus Credentials",
        type: "Session on Aptitude and Technical Skill",
      },
      {
        date: "02/09/2023",
        name: "Ms. Radha Singh",
        company: "Business HR Partner – West/ Corporate & Lead",
        type: "Beyond Coding: Essential Skills for a Fruitful Career",
      },
      {
        date: "02/09/2023",
        name: "Mr. Dyneshwar Kamble",
        company:
          "IP Consulting, Valuation and Commercialization, Indian Patent Agent",
        type: "IPR Awareness",
      },
      {
        date: "01/09/2023",
        name: "Ms. Jyoti Agrawal",
        company:
          "Founder of Maa2Mom, Community Leader, Investor, Business Advisor, Marketing Consultant",
        type: "Entrepreneurship Seminar",
      },
      {
        date: "01/09/2023",
        name: "Ms. Namrata Thakker",
        company: "Founder, Entrepreneurs Excel",
        type: "Entrepreneurship Seminar",
      },
      {
        date: "01/09/2023",
        name: "Ms. Gunjali",
        company: "Founder & CMO at Flashaid",
        type: "Entrepreneurship Seminar",
      },
      {
        date: "31/08/2023",
        name: "Mr. Pratik Salunke",
        company:
          "Sahajayoga Meditation Practitioner, Operational Risk Manager at L&T",
        type: "Work-life balance through Sahajayoga Meditation",
      },
      {
        date: "31/08/2023",
        name: "Mr. Arun Singh",
        company: "Financial Advisor at Guide Wealth Management",
        type: "Importance of Early Investment",
      },
      {
        date: "30/08/2023",
        name: "Dr. Mukesh Gupta",
        company:
          "Founder Director LeNest, Chairperson Media Communication cell, Past President AMC",
        type: "Health Session",
      },
      {
        date: "29/08/2023",
        name: "Ms. Bhagyashri Chemburkar",
        company: "Waste Management Trainer",
        type: "Waste Management",
      },
      {
        date: "29/08/2023",
        name: "Mr. Sachit Kumar",
        company: "VP Engineering, Homeville Group",
        type: "Your Future in Tech: Discovering Exciting Computer Science Careers",
      },
      {
        date: "29/08/2023",
        name: "Mr. Shihan Sachin Chavan",
        company:
          "Founder, CEO & Chief Facilitator at Business Enterprises in Martial Arts, Wellness & Tourism Industry",
        type: "Self Defense",
      },
      {
        date: "28/08/2023",
        name: "Ms. Sheetal Panchal",
        company: "Nutritionist and Fitness Consultant",
        type: "Health 360 – Nutrition & Wellness",
      },
      {
        date: "28/08/2023",
        name: "Mr. Atul Raijoli",
        company:
          "Founder of Lakshyavedh Institute of Leadership and Excellence",
        type: "Positivity to achieve your Goals",
      },
      {
        date: "28/08/2023",
        name: "Ms. Surabhi Chavan",
        company: "Amazon Prime Video",
        type: "Navigating your journey to the Corporate World for 2023-24",
      },
    ],
  },
  {
    year: "2022-2023",
    data: [
      {
        date: "11/01/2023",
        name: "Mr. Balu Agre",
        company: "Infinity Solutions Laboratories",
        type: "Soil organic Carbon",
      },
      {
        date: "11/01/2023",
        name: "Dr. Amitava Rakshit",
        company:
          "Institute of Agricultural Science, Banaras Hindu University, UP",
        type: "Societal relevance of soil health in defining ecosystem services that contribute to the UN sustainable development goals",
      },
      {
        date: "11/01/2023",
        name: "Mr. Chandrashekhar H. Bhadsavle",
        company:
          "Founder & Managing Trustee – Saguna Rural Foundation, Krishi Bhushan",
        type: "Practical carbon sequestration through agriculture",
      },
      {
        date: "11/01/2023",
        name: "Mr. Vikram Bansal",
        company: "Zerosum Technologies Pvt Ltd",
        type: "Use of Drone Technology",
      },
      {
        date: "09/02/2023",
        name: "Dr. Gaurav Batra",
        company: "Founder & CEO, CyberFrat",
        type: "Sensor Technology for Curbing Global Warming",
      },
      {
        date: "25/01/2023",
        name: "Mr. Gorakshanath Upadhyay",
        company: "Sr. Training Manager, West India EBSCO Information Service",
        type: "Developing learning & research skills USING IEEE Xplore® digital library & EBSCO Ebooks",
      },
      {
        date: "20/01/2023",
        name: "Dr. Yelloji Mirajkar",
        company: "GIST",
        type: "Aahar Kranti",
      },
      {
        date: "19/01/2023",
        name: "Mr. Arun Singh",
        company: "",
        type: "Financial Literacy",
      },
      {
        date: "29/11/2022",
        name: "Dr. Mansi Patil",
        company: "Faculty, Victoria University, Australia",
        type: "ESPEN Clinical Nutrition",
      },
      {
        date: "28/11/2022",
        name: "Ms. Payal Khandelval",
        company: "Art of Living",
        type: "Yoga",
      },
      {
        date: "28/11/2022",
        name: "Mr. Vipul Parekh",
        company: "Software Developer, Low Code Evangelist",
        type: "Low code no Code",
      },
      {
        date: "28/11/2022",
        name: "Dr. Priti S Vyavahare",
        company: "Medico by profession",
        type: "Warli painting",
      },
      {
        date: "28/11/2022",
        name: "Mr. Aloke Ghosh",
        company: "Founder, Finadvisorsllp",
        type: "What are the expectations from industry from fresher",
      },
      {
        date: "25/11/2022",
        name: "Mr. Awab Fakih",
        company:
          "Assistant Professor, Anjuman I Islam Kalsekar Technical Campus",
        type: "Importance of IPR",
      },
      {
        date: "25/11/2022",
        name: "Shihan Sachin Chavan",
        company: "CEO & Founder, KARAYOBICS",
        type: "Elimination of Violence against Women",
      },
      {
        date: "25/11/2022",
        name: "Dr. Mukesh Gupta",
        company: "Gynecologist & Obstetrician, Le Nest Hospital",
        type: "Health Session",
      },
      {
        date: "23/11/2022",
        name: "Dr. Sadhaya Save",
        company: "Professor, TCET",
        type: "Universal Human Values",
      },
      {
        date: "23/11/2022",
        name: "Mr. Pramod Mishra",
        company: "Sr. Customer Success Manager, VoicePlug (Alumnus)",
        type: "Business, Technology and the way forward…",
      },
      {
        date: "23/11/2022",
        name: "Mr. Sunil Parekh",
        company:
          "International Success Coach, Mind Trainer & NLP Practitioner, Rise Development Academy",
        type: "Unleashing your Highest Potential",
      },
      {
        date: "14/09/2022",
        name: "Mr. Uday Wankawala",
        company: "CEO, AIC Rambhau Mhalgi Prabodhini Foundation",
        type: "Entrepreneurship opportunities for student and faculty",
      },
      {
        date: "07/09/2022",
        name: "Mr. Vijay Talele",
        company: "Management Consultant and Advisor, Startup Incubators",
        type: "Innovation/Prototype Validation – Converting Innovation into a Startup",
      },
      {
        date: "07/09/2022",
        name: "Ms. Yukti Mehandiratta",
        company: "Founder & CEO, SBY Academy",
        type: "Angel Investment/VC Funding Opportunity for Early Stage Entrepreneurs",
      },
      {
        date: "06/09/2022",
        name: "Mr. Vishal Sanghavi",
        company: "MD & CEO, Cybersetu India Pvt Ltd & Setu Infocom",
        type: "Accelerators/Incubation – Opportunities for Students & Faculties – Early Stage Entrepreneurs",
      },
    ],
  },
  {
    year: "2021-2022",
    data: [
      {
        date: "03/10/2022",
        name: "Mr. Shihan Sachin Chavan, Founder & CEO",
        company: "BUJUTSU",
        type: "Training on self defense",
      },
      {
        date: "03/08/2022",
        name: "Dr. Nilima Vaidya Bhamare, Gynaecologist",
        company: "Matushree Maternity Surgical & General Nursing Home",
        type: "Women’s Menstrual Health – Guest talk",
      },
      {
        date: "01/12/2022",
        name: "B K Shivani, Senior Rajyoga Teacher",
        company: "Brahma Kumaris",
        type: "LIVE Talk for Youth – Is Spirituality relevant today? (National Youth Day)",
      },
      {
        date: "01/06/2022",
        name: "Dr. Mukesh Gupta, Gynecologist & Obstetrician",
        company: "Le Nest Hospital",
        type: "Healthy Mind – Healthy Body",
      },
      {
        date: "01/06/2022",
        name: "Dr. Suresh Shan",
        company: "CSI",
        type: "CSI & New Technology & Skill demands from Industry post Covid",
      },
      {
        date: "01/06/2022",
        name: "Ms. Sayali Naik, Sports Nutritionist",
        company: "Bullseye",
        type: "Healthy Diet",
      },
      {
        date: "01/06/2022",
        name: "Mr. Shyam Prasad Rajasekaran, Co-Founder & CEO",
        company: "VegRoute / Veg Route Agri Tech Pvt Ltd, Chennai",
        type: "Workshop on Entrepreneurship Skill, Attitude and Behavior Development",
      },
      {
        date: "01/05/2022",
        name: "Mrs. Pooja Panjabi, Counselling Psychologist & Therapist",
        company: "",
        type: "Mind Management",
      },
      {
        date: "01/05/2022",
        name: "Dr. Kamal Shah, Vice-Principal, Professor, Dean (R&D), HoD-PG Programs",
        company: "TCET",
        type: "Process of Innovation Development & Technology Readiness Level (TRL) and Commercialization of Lab Technologies & Tech-Transfer",
      },
      {
        date: "01/05/2022",
        name: "Mr. Awab Fakih, Director",
        company: "Student Alliance LLP",
        type: "Research paper Literature Review",
      },
      {
        date: "01/04/2022",
        name: "Ms. Swati Verma (Alumnus), Senior Analyst",
        company: "Accenture Pvt Ltd",
        type: "Discussion on Emerging Technologies",
      },
      {
        date: "01/04/2022",
        name: "Dr. Anupama Gawade, Associate Professor & Head Department of Accountancy",
        company: "Shankar Narayan College of Arts & Commerce",
        type: "Universal Human Values",
      },
      {
        date: "01/04/2022",
        name: "Dr. Raghvendra Dubey, Dean Academic Affairs",
        company:
          "Matoshri Education Society & Jagdamba Education Society Group of Institution, Yeola",
        type: "Indian Knowledge system",
      },
      {
        date: "01/04/2022",
        name: "Mr. Kaushik Mohanraj, Director",
        company: "Balzecan Technology, Malaysia",
        type: "Cloud enabled Digital Transformation (Conceptual) & Introduction to Cloud (Technical)",
      },
      {
        date: "01/03/2022",
        name: "Ms. Vertika Chandra (Alumnus), Director of Services & System Analyst",
        company: "Cresco International",
        type: "Industry Expectation from Fresher",
      },
      {
        date: "11/30/2021",
        name: "Mr. Sunil Deshmukh, Associate Certified Coach (ACC)",
        company: "International Coaching Federation (ICF – USA)",
        type: "Entrepreneurship and Innovation as Career Opportunity",
      },
      {
        date: "11/30/2021",
        name: "Mr. Unmesh Kulkarni",
        company: "Oceanic Circles",
        type: "Entrepreneurship and Innovation as Career Opportunity",
      },
      {
        date: "11/25/2021",
        name: "Mr. Nirav Vasa, Certified Forensic Handwriting Verification Expert",
        company: "Bombay High Court",
        type: "Graphology: The Case Study on Handwriting",
      },
      {
        date: "11/22/2021",
        name: "Mr. Vishal Sanghvi, MD & CEO",
        company: "Cybersetu India Pvt Ltd",
        type: "My Story – Motivational Session by Successful Innovator",
      },
      {
        date: "11/18/2021",
        name: "Mr. Devraj Raut, Cricket Performance Analyst",
        company: "India U-19 Team, BCCI",
        type: "My Story – Motivational Session by Successful Entrepreneur",
      },
      {
        date: "10/30/2021",
        name: "Dr. Ela Manoj Dedhia, Former Principal & HoD – Textiles and Fashion Technology",
        company: "College of Home Science Nirmala Niketan, Univ. of Mumbai",
        type: "Peer Pressure – UHV session",
      },
      {
        date: "10/25/2021",
        name: "Ms. Manasi Palencheri, HR Manager",
        company: "Flair Labs",
        type: "Virtual Recruitment Process – What you need to Know",
      },
      {
        date: "10/16/2021",
        name: "Ms. Shweta Tripathi, Infosec Security Practitioner",
        company: "CyberSmith SECURE",
        type: "Incident response in Cyber Security",
      },
      {
        date: "10/16/2021",
        name: "Dr. Raghvendra Dubey, Dean Academic Affairs",
        company:
          "Matoshri Education Society & Jagdamba Education Society Group of Institution, Yeola",
        type: "Basic Aspiration",
      },
      {
        date: "09/30/2021",
        name: "Ms. Manisha Salvi",
        company: "Responsible Netism",
        type: "Cyber crime and safety",
      },
      {
        date: "09/18/2021",
        name: "Dr. Mohan Rao, Professor & Associate Dean",
        company: "IES College of Management",
        type: "Exploring our Aspirations and Concerns",
      },
      {
        date: "09/18/2021",
        name: "Ms. Misba Khan (Alumnus), Executive II",
        company: "Asian Paints Ltd",
        type: "Campus to Corporate Transition",
      },
      {
        date: "09/18/2021",
        name: "Mr. Manish Kini (Alumnus), Full Stack Developer",
        company: "IPixels Agency Pvt Ltd",
        type: "Campus to Corporate Transition",
      },
      {
        date: "09/18/2021",
        name: "Mr. Sumit Kumbhar (Alumnus), Software Developer",
        company: "Chenoa Information Services",
        type: "Campus to Corporate Transition",
      },
      {
        date: "09/18/2021",
        name: "Ms. Shraddha Ghatge (Alumnus), Software Developer",
        company: "BNP Paribas",
        type: "Campus to Corporate Transition",
      },
      {
        date: "09/18/2021",
        name: "Ms. Anuja Naik (Alumnus), Associate Software Engineer",
        company: "Accenture",
        type: "Campus to Corporate Transition",
      },
    ],
  },
  {
    year: "2020-2021",
    data: [
      {
        date: "05/15/2021",
        name: "Mr. Ajay Vishwakarma, Team Lead",
        company: "Insolutions Global Limited",
        type: "Academic Projects – Tips to do Better",
      },
      {
        date: "03/08/2021",
        name: "Dr. Mukesh Gupta, Gynecologist & Obstetrician",
        company: "Le Nest Hospital",
        type: "Women Health and Entrepreneurship",
      },
      {
        date: "03/08/2021",
        name: "Dr. Anjali Tayde, Homeopath & Founder",
        company: "ARTHITA Bags",
        type: "Women Health and Entrepreneurship",
      },
      {
        date: "03/02/2021",
        name: "Dr. Sujata Dhopte, Associate Professor",
        company: "M.K. Sanghvi College of Commerce & Economics",
        type: "The Woman Power Sutras",
      },
      {
        date: "02/08/2021",
        name: "Mr. Ramnik Bansal, Life Coach, Public Speaker & Youth Mentor",
        company: "",
        type: "Enchant the Real High",
      },
      {
        date: "02/05/2021",
        name: "Dr. Sita Rambrahamam, Senior Data Scientist",
        company: "Tata Consultancy Services",
        type: "Machine Learning, Artificial Intelligence and Beyond",
      },
      {
        date: "02/04/2021",
        name: "Lt. Cdr. Arun Varghese",
        company: "Tata Consultancy Services",
        type: "Virtual Tour to TCS Green Building Initiatives",
      },
      {
        date: "01/28/2021",
        name: "Mr. Sachin Mali, Data Platform Manager",
        company: "Schlumberger",
        type: "Data Engineering on Cloud",
      },
      {
        date: "09/19/2020",
        name: "Mr. Prasenjith Roy",
        company: "Netmagic",
        type: "Indian Tech Start-ups",
      },
      {
        date: "09/11/2020",
        name: "Mrs. Teju Nageswari",
        company: "Nsmiles",
        type: "Behavioral Skills",
      },
      {
        date: "08/28/2020",
        name: "Mr. Rahul Puri, Co-founder",
        company: "Anvira Edustation",
        type: "IoT: A new age of Intelligence",
      },
      {
        date: "08/28/2020",
        name: "Mr. Jayesh Sharma",
        company: "",
        type: "IoT: A new age of Intelligence",
      },
      {
        date: "07/02/2020",
        name: "Mr. Pritesh Jain",
        company: "Surfboard India",
        type: "Tools, Resources and Concepts Every Beginner Programmer Should Know for 2020-21",
      },
    ],
  },

  // … repeat for 2022-23, 2021-22, etc.
];

export default function GuestLectureTable() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />
      <div className="guest-lectures-page">
        <h2 className="pip-heading">Guest Lecture</h2>

        {guestLectures.map((batch, i) => (
          <div key={i} className="conv-table-wrapper">
            <h3 style={{ margin: "1rem", fontWeight: "600" }}>
              Academic Year {batch.year}
            </h3>
            <table className="conv-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Company</th>
                  <th>Type of interaction</th>
                </tr>
              </thead>
              <tbody>
                {batch.data.map((row, j) => (
                  <tr key={j}>
                    <td>{row.date}</td>
                    <td>{row.name}</td>
                    <td>{row.company}</td>
                    <td>{row.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
