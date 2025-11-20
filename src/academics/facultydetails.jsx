import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import Footer from '../components/Footer';
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Navbar from "../components/navbar";
import './faculty.css'
import FacultyProfile from './FacultyProfile';
import PageHeader from '../about/PageHeader';

function Faculty() {

    const facultyData = [
        {
            "name": "Ms. Sonu Gupta",
            "designation": "Assistant Professor. Deputy Director & TPO",
            "image": "./Faculties/sonu-gupta.webp",
            "aboutMe": "",
            "biography": {
                "education": [
                    "MCA from Banasthali Vidyapith, Rajasthan",
                    "B.Sc (Computer Science) from Jai Narain Vyas University, Jodhpur"
                ],
                "honorsAndAwards": [
                    "Won 1st prize as a “Best Research Paper Award” in International Conference on Advances in Information Technology & Management (ICAIM-2017)",
                    "Won “Best Educational Quality Enhancement Team President Award 2007”",
                    "2nd prize for “Students Academic Performance” organized by NCQM, Mumbai"
                ],
                "teaching": {
                    "currentCourses": [
                        "Distributed Computing and Cloud Computing",
                        "Data Structures",
                        "Database Management System",
                        "Data Science"
                    ],
                    "previousCourses": [
                        "Operating System",
                        "Object Oriented Programming Languages – C++",
                        "Distributed Systems",
                        "Project Management",
                        "Soft Skill Development"
                    ]
                },
                "publications": {
                    "researchPapers": [
                        {
                            "title": "The Study of Usage of Online Learning Resources in Medical Courses",
                            "venue": "ICAIM 2018",
                            "isbn": "978-0-9972694-3-7"
                        },
                        {
                            "title": "Study of Adoption and Implementation of Information Technology in Industrial Research in Metropolitan City",
                            "venue": "ICAIM 2017",
                            "isbn": "978-0-9972694-1-3"
                        },
                        {
                            "title": "Big Data: Characteristics, Challenges and Data Mining",
                            "venue": "ICAIM 2016",
                            "isbn": "978-0-9972694-0-6"
                        },
                        {
                            "title": "Health Informatics: An Overview of Computer Applications in Healthcare",
                            "venue": "ICAIM 2016",
                            "isbn": "978-0-9972694-0-6"
                        },
                        {
                            "title": "Open Source Learning: An Imminent Opportunity in India",
                            "venue": "ICAIM 2015",
                            "isbn": "978-93-84144-93-7"
                        },
                        {
                            "title": "Social Media Marketing",
                            "venue": "National Seminar – Emerging Trends and Future Challenges of E-Commerce and its Applications, Lachoo Memorial College of Science and Technology (Autonomous), Jodhpur"
                        },
                        {
                            "title": "Educational Data Mining: Application and Trends",
                            "venue": "National Conference – Emerging Computing Technologies in Modern era ECTME-14, S.S. Jain Subodh P.G. (Autonomous) College, Jaipur",
                            "sponsor": "AICTE and UGC"
                        },
                        {
                            "title": "Open Source Learning",
                            "venue": "National Conference – Strategies and Trends in Open Source Applications Development, Lachoo Memorial College of Science and Technology, Jodhpur"
                        },
                        {
                            "title": "Work Integrated Learning",
                            "venue": "National Seminar – Enhancing Employability of IT students through Academia Industry Interaction, TIMSCDR, Mumbai",
                            "isbn": "978-81-924218-0-3"
                        },
                        {
                            "title": "Employability and Skill Set Requirements of Newly Graduated IT Students in India: Bridging the Skill Gap",
                            "venue": "National Seminar – Enhancing Employability of IT students through Academia Industry Interaction, TIMSCDR, Mumbai",
                            "isbn": "978-81-924218-0-3"
                        },
                        {
                            "title": "Enhancing Employability Skills of Engineering Students through Industrial Training Program",
                            "venue": "National Seminar – Enhancing Employability of IT students through Academia Industry Interaction, TIMSCDR, Mumbai",
                            "isbn": "978-81-924218-0-3"
                        },
                        {
                            "title": "Computing With Green Responsibility",
                            "venue": "ICWET – 2010, International Conference held at TCET, Mumbai",
                            "isbn": "978-1-60558-812-4"
                        },
                        {
                            "title": "Leaner Software Development",
                            "venue": "INDIACOM-2008, 2nd National Conference on Computing for Nation Development, Bharati Vidyapeeth’s Institute of Computer Applications and Management, Delhi",
                            "issn": "0973-7529",
                            "isbn": "978-81-904526-2-5"
                        }
                    ],
                    "journals": [
                        {
                            "title": "Computing with Green Responsibility",
                            "venue": "ACM digital library",
                            "isbn": "978-1-60558-812-4"
                        },
                        {
                            "title": "Big Data: Characteristics, Challenges and Data Mining",
                            "venue": "International Journal of Computer Applications",
                            "issn": "0975-8887 (online)"
                        },
                        {
                            "title": "Study of Adoption and Implementation of Information Technology in Industrial Research in Metropolitan City",
                            "venue": "International Journal of Scientific & Engineering Research",
                            "issn": "2229-5518"
                        },
                        {
                            "title": "The Study of Usage of Online Learning Resources in Medical Courses",
                            "venue": "International Journal of Research in Electronics and Computer Engineering, Unit of International Institute of Organized Research (I2OR)",
                            "issn": "2348-2281 (ONLINE), 2393-9028 (PRINT)"
                        }
                    ]
                },
                "projects": {
                    "guidedProjects": [
                        "Guided more than 50 projects of MCA students"
                    ]
                },
                "certifications": [
                    "Lead Auditor ISO 9001:2015"
                ]
            }
        }
        ,

        {
            "name": "Dr. Rajesh Kapoor",
            "designation": "Professor",
            "image": "./Faculties/rajesh-kapoor.webp",
            "aboutMe": "",
            "biography": {
                "education": [
                    "PhD – Science Technology & Society Studies",
                    "M Tech – Computer Science and Data Processing",
                    "B Tech – Electronics"
                ],
                "honorsAndAwards": [],
                "teaching": {
                    "currentCourses": [],
                    "previousCourses": []
                },
                "publications": {
                    "researchPapers": [
                        {
                            "title": "Design of a Model for Accruing Social Value through Data Analytics",
                            "venue": "International Conference on Business Models and Social Entrepreneurship at TISS, Mumbai",
                            "date": "Jan 16-18, 2019"
                        },
                        {
                            "title": "A Study of The Components of State-of-The-Art Agro-Based Management Information Systems in India",
                            "venue": "Journal of Computer Technology & Applications",
                            "date": "Vol 9, Issue 2 Aug-18"
                        },
                        {
                            "title": "Logistician Dilemma: Machine Learning to the Rescue",
                            "venue": "Magazine DefInsights – Sugosha Newsletter",
                            "date": "Aug 2018"
                        },
                        {
                            "title": "The New Kid on the Block of Equipment Maintenance: Predictive Learning",
                            "venue": "Magazine DefInsights – Sugosha Newsletter",
                            "date": "Sep 1, 2018"
                        },
                        {
                            "title": "Risk and Values: Resolving the Social Dilemmas Arising From the World Wide Web",
                            "venue": "STS Conference Graz, Austria",
                            "date": "07-08 May 2018",
                            "isbn": "978-3-85125-625-3"
                        },
                        {
                            "title": "A Stochastic Model to Enhance Information Security in Software Development through Risk Management",
                            "venue": "International Journal of Engineering Science Invention Research & Development",
                            "date": "Volume 4, Issue 4, October 2017"
                        },
                        {
                            "title": "Use of the Balanced Scorecard for IT Risk Management",
                            "venue": "ISACA Journal",
                            "date": "Vol 5, September 2010"
                        },
                        {
                            "title": "Implementation of Service Oriented Architecture",
                            "venue": "e-Business The ICFAI University Press",
                            "date": "February 2006"
                        },
                        {
                            "title": "Indian ITES Industry: A Quality Perspective",
                            "venue": "e-Business, The ICFAI University Press",
                            "date": "August 2005"
                        }
                    ]
                },
                "projects": {
                    "research": [
                        "IOT Based Agriculture",
                        "Paperless Office",
                        "Personality Assessment Based on Machine Learning"
                    ],
                    "guidedProjects": [
                        "Internal guide for UI Mini projects"
                    ]
                },
                "certifications": [
                    "AI & Marketing – NPTEL",
                    "Python Programming – NPTEL",
                    "Universal Human Values – AICTE"
                ]
            }
        }

        ,
        {
            "name": "Dr. Ashwini Renavikar",
            "designation": "Professor",
            "image": null,
            "aboutMe": "",
            "biography": {
                "education": ["B.Sc., MCA, CSQA, PhD, Pursuing Post Doctorate",
                    "Experience : Total 25 years of experience (Education, Research and Industry)",
                    "Subject areas: Software Engineering and Quality Assurance, Big data analytics, AI and ML, Advanced databases, MIS",
                    "PhD guide for Samarkand State University (Uzbekistan) and UNICAF, European University. PhD thesis evaluator and examiner for Tilak Maharashtra Vidyapeeth (Faculty of computer Science)"
                ],
                "honorsAndAwards": [],
                "teaching": {
                    "currentCourses": [],
                    "previousCourses": []
                },
                "publications": {
                    "researchPapers": [
                        {
                            "title": "Analyzing the impact of GATS (General Agreement on Trade in Services) on higher education system in and around Pune city (with specific reference to professional disciplines) Educational Administration: Theory and Practice SCOPUS Indexed CARE group II, May 2024",
                            "venue": null,
                            "isbn": null
                        },
                        {
                            "title": "Technology-based KMS (Knowledge Management System) for IPR (Intellectual Property Rights) management Educational Administration: Theory and Practice, SCOPUS Indexed, May 2024",
                            "venue": null,
                            "isbn": null
                        },
                        {
                            "title": "Information Technology and its applications towards excellence in remote academics Educational Administration: Theory and Practice, SCOPUS Indexed journal, May 2024",
                            "venue": null,
                            "isbn": null
                        },
                        {
                            "title": "Computer Forensics: Issues and Challenges, Journal of Survey in Fisheries Sciences, SCOPUS Indexed, December 2023",
                            "venue": null,
                            "isbn": null
                        },
                        {
                            "title": "Technology supported CRM in Indian Banks: From Customers’ Perspective Journal of Survey in Fisheries Sciences, SCOPUS Indexed, December 2023",
                            "venue": null,
                            "isbn": null
                        },
                        {
                            "title": "Systematic Review of Project Life Cycle of AI Tools and AI enabled projects: A Study based on Best Development Practices, International in Journal on Recent and Innovation Trends in Computing and Communication, SCOPUS Indexed, October 2023",
                            "venue": null,
                            "isbn": null
                        },
                        {
                            "title": "Comparative study of tangible and intangible benefits of CMMI to selected project, product and service-based organizations, International in Journal on Recent and Innovation Trends in Computing and Communication​, SCOPUS Indexed, April 2023",
                            "venue": null,
                            "isbn": null
                        },
                        {
                            "title": "Evaluation of software testing tools based on quality assurance parameters International in Journal on Recent and Innovation Trends in Computing and Communication, SCOPUS Indexed, January 2023",
                            "venue": null,
                            "isbn": null
                        },
                        {
                            "title": "Role of Geographical Information System in managing damages on account of earthquakes, Journal of Survey in Fisheries Sciences, SCOPUS Indexed, December 2022",
                            "venue": null,
                            "isbn": null
                        },
                        {
                            "title": "Case studies in Information Technology, Journal of Survey in Fisheries Sciences, SCOPUS Indexed, December 2022",
                            "venue": null,
                            "isbn": null
                        },
                        {
                            "title": "Optimization of the database structure based on Machine Learning algorithms in case of increased data flow, Proceedings of the International Conference on Artificial Intelligence, Blockchain, Computing and Security (ICABCS 2023), SCOPUS indexed book, February 2023",
                            "venue": null,
                            "isbn": null
                        },
                        {
                            "title": "Optimization of the number of databases in the Big Data processing, Journal of Problem informatics № 1(58), 2023",
                            "venue": null,
                            "isbn": null
                        },
                        {
                            "title": "Development of the Big Data processing architecture based on distributed computing systems Informatics and energy problems, Journal of Uzbekistan, 2022",
                            "venue": null,
                            "isbn": null
                        },
                        {
                            "title": "Use of FOSS (Free and Open source) learning management systems for open and distance learning to reach the masses in India: A step towards sustainable education initiative, Symbiosis International Research Journal on Online & Distance Learning (SIRJODL), Vol 2 Issue 2, March 2020",
                            "venue": null,
                            "isbn": null
                        },
                        {
                            "title": "Role of FOSS testing tools towards cost-effective software development, International Journal of Advances in Management, Technology & Engineering Science, Vol II Issue 11(1), August 2013",
                            "venue": null,
                            "isbn": null
                        },
                        {
                            "title": "Comparative Study of e-CRM in Indian Banks with Specific reference to Banks Pune and Mumbai, Presented paper in Doctoral Colloquium, Organizer-IIM-Ahmedabad, 2011",
                            "venue": null,
                            "isbn": null
                        },
                        {
                            "title": "Conceptual Framework for e-CRM deployment in Indian Banks, Proceedings of International Conference ICTBM, Dubai 2011",
                            "venue": null,
                            "isbn": null
                        },
                        {
                            "title": "Empirical study of factors affecting success of SNS, (Social Networking Sites), Revelation, 2010",
                            "venue": null,
                            "isbn": null
                        },
                        {
                            "title": "e-CRM in Indian Banks –Myths and Realities, GIT-2010 Conference Proceedings, 2010",
                            "venue": null,
                            "isbn": null
                        },
                        {
                            "title": "Customer Relationship Marketing in Indian Cement Industry, Sinhgad Business review, Vol – 1, Issue 2, 2010",
                            "venue": null,
                            "isbn": null
                        }
                    ],
                    "journals": []
                },
                "projects": {
                    "guidedProjects": null
                },
                "certifications": ["Certified Software Quality Analyst (CSQA) – Certifying body – Quality Assurance Institute (USA)",
                    "BEC (Vantage) –Certifying body – Cambridge University across all centres worldwide"
                ]
            }
        }



        ,
        {
            "name": "Dr. Padma Mishra",
            "designation": "Professor",
            "image": "./Faculties/[file-name].webp",
            "aboutMe": "",
            "linkedin": "",
            "biography": {
                "education": [
                    "Ph.D. in Computer Science from Tilak Maharashtra Vidyapeeth, Pune",
                    "MCA from Rajiv Gandhi Institute of Technology, Mumbai",
                    "B.Sc. in Computer Science from Nagindas Khandwala College, Mumbai"
                ],
                "teaching": {
                    "currentCourses": [
                        "Skill based Lab Course AWT Lab"
                    ],
                    "previousCourses": [
                        "Advanced Java LAB",
                        "Distributed System and Cloud Computing Lab",
                        "Programming with C++",
                        "Software Testing (Manual and Automated Testing)",
                        "Operating System"
                    ]
                    
                },
          
            }
        }
        ,
        {
            "name": "Dr. Sonal Kanungo",
            "designation": "Associate Professor",
            "image": "./Faculties/dr.sonal sharma.webp",
            "aboutMe": "",
            "linkedin": "",
            "researchgate": "https://www.researchgate.net/profile/Sonal_Kanungo",
            "googleScholar": "http://lnkiy.in/sonalkanungo",
            "biography": {
                "education": [
                    "Ph.D. – Veer Narmad South Gujarat University, Surat ('High Performance Concurrency Control Technique for OODBMS')",
                    "M.Sc (IT)– Devi Ahilya Vishva Vidhyalaya Indore",
                    "B.C.A. – Devi Ahilya Vishva Vidhyalaya Indore"
                ],
                "teaching": {
                    "currentCourses": [
                        "Advance Database Management System and Data mining",
                        "Green It and Sustainability"
                    ],
                    "previousCourses": [
                        "Advance Web Designing",
                        "Object Oriented Programming",
                        "Cloud Computing",
                        "Operating System",
                        "Data Structures"
                    ]
                },
                           "publications": {
                    "researchPapers": [
                        {
                            "title": "“Analysis of Fine Granularity Locking in Complex Objects”, Educational Administration: Theory and Practice, ISSN1300-4832, E-ISSN 2148-2403, 30(5), Pg 6348-6353",
                            "venue": null,
                            "isbn": null
                        },
                        {
                            "title": "“MongoDB Oplog Archiving: Strategies and Experimental Analysis”, Educational Administration: Theory and Practice, ISSN1300-4832, E-ISSN 2148-2403, 30(5), Pg 6378-6387",
                            "venue": null,
                            "isbn": null
                        },
                        {
                            "title": "“Deep Learning based Urban Energy Forecasting Model for Residential Building Energy Efficiency”, (SCIE) Energy Exploration & Exploitation EEA-24-00066. Sage Publications https://doi.org/10.1177/01445987241257590 ISSN 0144-5987 eISSN 2048-4054",
                            "venue": null,
                            "isbn": null
                        },
                        {
                            "title": "Computer Forensics: Issues and Challenges, Journal of Survey in Fisheries Sciences, SCOPUS Indexed, December 2023",
                            "venue": null,
                            "isbn": null
                        },
                        {
                            "title": "Technology supported CRM in Indian Banks: From Customers’ Perspective Journal of Survey in Fisheries Sciences, SCOPUS Indexed, December 2023",
                            "venue": null,
                            "isbn": null
                        },
                        {
                            "title": "Systematic Review of Project Life Cycle of AI Tools and AI enabled projects: A Study based on Best Development Practices, International in Journal on Recent and Innovation Trends in Computing and Communication, SCOPUS Indexed, October 2023",
                            "venue": null,
                            "isbn": null
                        },
                        {
                            "title": "Comparative study of tangible and intangible benefits of CMMI to selected project, product and service-based organizations, International in Journal on Recent and Innovation Trends in Computing and Communication​, SCOPUS Indexed, April 2023",
                            "venue": null,
                            "isbn": null
                        },
                        {
                            "title": "Evaluation of software testing tools based on quality assurance parameters International in Journal on Recent and Innovation Trends in Computing and Communication, SCOPUS Indexed, January 2023",
                            "venue": null,
                            "isbn": null
                        },
                        {
                            "title": "Role of Geographical Information System in managing damages on account of earthquakes, Journal of Survey in Fisheries Sciences, SCOPUS Indexed, December 2022",
                            "venue": null,
                            "isbn": null
                        },
                        {
                            "title": "Case studies in Information Technology, Journal of Survey in Fisheries Sciences, SCOPUS Indexed, December 2022",
                            "venue": null,
                            "isbn": null
                        },
                        {
                            "title": "Optimization of the database structure based on Machine Learning algorithms in case of increased data flow, Proceedings of the International Conference on Artificial Intelligence, Blockchain, Computing and Security (ICABCS 2023), SCOPUS indexed book, February 2023",
                            "venue": null,
                            "isbn": null
                        },
                        {
                            "title": "Optimization of the number of databases in the Big Data processing, Journal of Problem informatics № 1(58), 2023",
                            "venue": null,
                            "isbn": null
                        },
                        {
                            "title": "Development of the Big Data processing architecture based on distributed computing systems Informatics and energy problems, Journal of Uzbekistan, 2022",
                            "venue": null,
                            "isbn": null
                        },
                        {
                            "title": "Use of FOSS (Free and Open source) learning management systems for open and distance learning to reach the masses in India: A step towards sustainable education initiative, Symbiosis International Research Journal on Online & Distance Learning (SIRJODL), Vol 2 Issue 2, March 2020",
                            "venue": null,
                            "isbn": null
                        },
                        {
                            "title": "Role of FOSS testing tools towards cost-effective software development, International Journal of Advances in Management, Technology & Engineering Science, Vol II Issue 11(1), August 2013",
                            "venue": null,
                            "isbn": null
                        },
                        {
                            "title": "Comparative Study of e-CRM in Indian Banks with Specific reference to Banks Pune and Mumbai, Presented paper in Doctoral Colloquium, Organizer-IIM-Ahmedabad, 2011",
                            "venue": null,
                            "isbn": null
                        },
                        {
                            "title": "Conceptual Framework for e-CRM deployment in Indian Banks, Proceedings of International Conference ICTBM, Dubai 2011",
                            "venue": null,
                            "isbn": null
                        },
                        {
                            "title": "Empirical study of factors affecting success of SNS, (Social Networking Sites), Revelation, 2010",
                            "venue": null,
                            "isbn": null
                        },
                        {
                            "title": "e-CRM in Indian Banks –Myths and Realities, GIT-2010 Conference Proceedings, 2010",
                            "venue": null,
                            "isbn": null
                        },
                        {
                            "title": "Customer Relationship Marketing in Indian Cement Industry, Sinhgad Business review, Vol – 1, Issue 2, 2010",
                            "venue": null,
                            "isbn": null
                        }
                    ],
                    "journals": []
                },
                "conferencePresentations": [
                    "Applications of IoT in Healthcare System, International Conference on ‘Globalisation & Sustainable Development: Interdisciplinary perspectives GSD IP-24’, April 2024",
                    "IOT in Health care: Benefits & security Issues, 2nd National Conference on Atma Nirbhar Bharat: Vision for Excellence through multidisciplinary inclusive approach, May 2023",
                    "Concurrency Versus Consistency in NOSQL Databases, Confab 360 Degree, Global Conference on Emerging Technologies, Business, Sustainable Business practice and Social Wellbeing, Dec 2022",
                    "Challenges for IOT Applications in Healthcare System, Sustainable India International Conference 2022, Dec 2022",
                    "Artificial Intelligence in Agriculture, National Seminar on ‘Recent Innovation in Science Engineering and Management RISEM-2022’, May 2022",
                    "Multi version Concurrency Control for Object Oriented Database Management System, International Conference on Advanced Computer Science and Information Technology (ICACSIT-17), Oct 2017",
                    "Issues with Concurrency Control Techniques Paper ID AET-17001, International Conference on ‘Advancement in Engineering & Technology AET-2017’, June 2017",
                    "Comparison of Generics in C++ & Java, International Interdisciplinary Conference on Changes, Challenges and Consequences in Commerce, Management, Engineering, Technology & Social Science, Mar 2014"
                ],
                "patents": [
                    "Australian Patent 2020103810, “Method for detecting fake news using grammatic transformation on neural network computer readable medium”, 27 Jan 2021",
                    "Indian Patent 202211029308, “Smart IOT enabled cloth stand for balcony”, 27 May 2022"
                ],
                "certifications": [
                    "Certification course on Introduction to IOT by NPTEL of SWAYAM- Jan-Apr 2023",
                    "Certification course on Python for Data Science by NPTEL of SWAYAM – Jan-Feb 2022",
                    "Certification Course on Cloud Computing by NPTEL of SWAYAM – Feb to Apr 2019",
                    "Certification Course in Data Science and Machine Learning using Python From IIT Roorkee – Oct 21-Nov 2021"
                ]
            }
        }
        ,
        {
            "name": "Ms. Rashmi Vipat",
            "designation": "Assistant Professor & Examination Incharge",
            "image": "./Faculties/[file-name].webp",
            "aboutMe": "",
            "linkedin": "",
            "biography": {
                "education": [
                    "MCA from Rajiv Gandhi Proudyogiki Vishwavidyalaya",
                    "B.Sc. (Electronics) from DAVV, Indore"
                ],
                "teaching": {
                    "currentCourses": [
                        "Big Data Analytics & Visualization",
                        "Mathematical Foundation of Computer Science I",
                        "Mathematical Foundation of Computer Science II"
                    ],
                    "previousCourses": [
                        "Advanced Database Techniques",
                        "Computer Organization and Architecture",
                        "Database Management System",
                        "Decision Making & Mathematical Modeling",
                        "Discrete Mathematics"
                    ]
                },
                "publications": [
                    {
                        "title": "E-waste Environmental Issues and Concerns",
                        "venue": "ICAIM-2019, TIMSCDR",
                        "isbn": "978-0-9972694-5-1"
                    },
                    {
                        "title": "Study of Farming Techniques",
                        "venue": "ICAIM-2018, TIMSCDR",
                        "isbn": "978-0-9972694-3-7"
                    },
                    {
                        "title": "Study of Use of Information Technology for Research in Basic Sciences",
                        "venue": "ICAIM-2017, TIMSCDR",
                        "isbn": "978-0-9972694-1-3"
                    },
                    {
                        "title": "Big Data Role in Education Decision Making",
                        "venue": "ICAIM-2015, TIMSCDR",
                        "isbn": "978-93-84144-93-7"
                    },
                    {
                        "title": "Assessment of students in Databases by Audit Trails: An Experimental Study",
                        "venue": "ICAIM-2015, TIMSCDR",
                        "isbn": "978-93-84144-93-7"
                    },
                    {
                        "title": "A Comparative study of White Box, Black Box and Grey Box Testing Method",
                        "venue": "ICAIM-2015, TIMSCDR",
                        "isbn": "978-93-84144-93-7"
                    },
                    {
                        "title": "Employability: Linkage with Skills",
                        "venue": "National Seminar 2012 at TIMSCDR",
                        "isbn": "978-81-924218-0-3"
                    },
                    {
                        "title": "Adaptive Query Processing",
                        "venue": "ICNDCETM – 2012, Yadavrao Tasgaonkar Institute",
                        "issn": "2277-4726"
                    },
                    {
                        "title": "Promoting business decision making in networking through group decision support systems",
                        "venue": "ICWET-2011, TCET",
                        "isbn": "978-1-4503-0449-8"
                    },
                    {
                        "title": "Latest search engine optimization techniques to increase website’s ranking in search results",
                        "venue": "ICWET-2011, TCET",
                        "isbn": "978-1-4503-0449-8"
                    },
                    {
                        "title": "Current trends in e – learning",
                        "venue": "ICWET-2011, TCET",
                        "isbn": "978-1-4503-0449-8"
                    },
                    {
                        "title": "Information technology based electronic system for rural health mission",
                        "venue": "National Conference in 2008 at Shillong"
                    }
                ],
                "projects": {
                    "guidedProjects": [
                        "Social media analytics",
                        "Visa Magnet",
                        "Stock Management"
                    ]
                }
            }
        }
        ,
        {
            "name": "Mr. Shirshendu Maitra",
            "designation": "Assistant Professor & HOD Academics",
            "image": "./Faculties/[file-name].webp",
            "aboutMe": "",
            "linkedin": "",
            "biography": {
                "education": [
                    "PhD candidate",
                    "MCA",
                    "MBA in Finance and System (Full Time)"
                ],
                "teaching": {
                    "currentCourses": [
                        "Image Processing"
                    ],
                    "previousCourses": [
                        "Data Mining"
                    ]
                },
                "publications": [
                    {
                        "title": "Heuristic search in web text mining",
                        "journals": [
                            "International Journal of Computer Applications (IJCA)",
                            "International Journal of Scientific & Engineering Research (IJSER)"
                        ]
                    }
                ],
                "projects": {
                    "guidedProjects": [
                        "Hiding of data using color combination",
                        "Problem in Databases in terms of Security"
                    ]
                },
                "certifications": [
                    "IBM SPSS"
                ]
            }
        },
        {
            name: "Ms. Aprajita Singh",
            designation: "Assistant Professor",
            image: "/images/faculty/Aprajita-Singh-1-350x350.jpg",
            aboutMe: "",
            linkedin: ""
        },
        {
            "name": "Ms. Rupali Jadhav",
            "designation": "Assistant Professor & IQAC Coordinator",
            "image": "./Faculties/[file-name].webp",
            "aboutMe": "",
            "linkedin": "",
            "biography": {
                "education": [
                    "MCA"
                ],
                "honorsAndAwards": [
                    "Best Research Paper award for students guided by me in ICAIM 2017",
                    "Second prize for Student Synapse group guided in Synapse 2018"
                ],
                "teaching": {
                    "currentCourses": [
                        "Big Data Analytics"
                    ],
                    "previousCourses": [
                        "Data Structure",
                        "Computer Graphics and Image Processing",
                        "Discrete Mathematics",
                        "Operation Research",
                        "Management Information System",
                        "Computer Network"
                    ]
                },
                "publications": {
                    "books": [
                        {
                            "title": "Vipul’s Operation Research First Edition",
                            "isbn": "978-93-83887-77-4"
                        },
                        {
                            "title": "Vipul’s Operation Research Second Edition",
                            "isbn": "978-93-84537-78-4"
                        },
                        {
                            "title": "Vipul’s Software Project Management",
                            "isbn": "978-93-84537-75-3"
                        }
                    ],
                    "booksWithInstituteName": [
                        "Techtonics Volume 5 in academic year 2015-16",
                        "Data Structure Lab Manual",
                        "Computer Graphics Lab Manual"
                    ],
                    "journals": [
                        {
                            "title": "IT Enabled Sustainable Farming Using UAVs",
                            "venue": "Journal of Microwave Engineering & Technologies, Volume 7, Issue 3",
                            "date": "May 2020",
                            "issn": "2349-9001"
                        },
                        {
                            "title": "The Study of Usage of Online Learning Resources published in Medical Courses",
                            "venue": "IJRECE",
                            "date": "March 2018"
                        },
                        {
                            "title": "Study of Use of Information Technology for Research published in Basic Sciences",
                            "venue": "IJSER Volume 8, Issue 5",
                            "date": "May 2017",
                            "issn": "2229-5519"
                        },
                        {
                            "title": "Augmented Reality: A new dimension in an immersive real world experience",
                            "venue": "IJSER Volume 8, Issue 5",
                            "date": "May 2017",
                            "issn": "2229-5519"
                        },
                        {
                            "title": "Artificial Intelligence Techniques in Computer Graphics",
                            "venue": "IJSER Volume 8, Issue 5",
                            "date": "May 2017",
                            "issn": "2229-5518"
                        },
                        {
                            "title": "Java Environment based Internet of Things in Healthcare",
                            "venue": "IJCA",
                            "date": "2016",
                            "issn": "0975–8887"
                        }
                    ],
                    "researchPapers": [
                        {
                            "title": "Sustainable agriculture using solar technology",
                            "venue": "ICAIM 2022",
                            "date": "12-13 February 2022"
                        },
                        {
                            "title": "ICT in Precision Agriculture",
                            "venue": "ICAIM 2021",
                            "date": "20-21 February 2021"
                        },
                        {
                            "title": "IT Enabled Sustainable Farming Using UAVs",
                            "venue": "ICAIM 2020",
                            "date": "8-9 February 2020"
                        },
                        {
                            "title": "Profound Study on Sensors Used in Precision Agriculture",
                            "venue": "ICAIM 2019",
                            "date": "16-17 February 2019"
                        },
                        {
                            "title": "The Study of Usage of Online Learning Resources in Medical Courses",
                            "venue": "ICAIM 2018",
                            "date": "16-18 February 2018",
                            "isbn": "978-0-9972694-3-7"
                        },
                        {
                            "title": "Artificial Intelligence Techniques in Computer Graphics",
                            "venue": "ICAIM 2017",
                            "date": "17-18 February 2017",
                            "isbn": "978-0-9972694-1-3"
                        },
                        {
                            "title": "Augmented reality: A new dimension in an Immersive real world experience",
                            "venue": "ICAIM 2017",
                            "date": "17-18 February 2017",
                            "isbn": "978-0-9972694-1-3"
                        },
                        {
                            "title": "Assessment of LCD, CRT, LED",
                            "venue": "ICAIM 2017",
                            "isbn": "978-0-9972694-1-3",
                            "date": "17-18 February 2017"
                        },
                        {
                            "title": "Study of Use of Information Technology for Research in Basic Sciences",
                            "venue": "ICAIM 2017",
                            "isbn": "978-0-9972694-1-3",
                            "date": "17-18 February 2017"
                        },
                        {
                            "title": "Study of Implication of Internet of Things (IoT) for Innovative Applications",
                            "venue": "ICAIM 2016",
                            "isbn": "978-0-9972694-0-6",
                            "date": "20-21 February 2016"
                        },
                        {
                            "title": "Java environment based internet of things in healthcare",
                            "venue": "ICAIM 2016",
                            "isbn": "978-0-9972694-0-6",
                            "date": "20-21 February 2016"
                        },
                        {
                            "title": "A study on security challenges in service oriented architecture",
                            "venue": "ICAIM 2015",
                            "isbn": "978-93-84144-93-7"
                        },
                        {
                            "title": "Challenges in clustering high dimension data",
                            "venue": "ICAIM 2015",
                            "isbn": "978-93-84144-93-7",
                            "date": "17 January 2015"
                        },
                        {
                            "title": "An overview of optimizing techniques in data mining",
                            "venue": "ICAIM 2015",
                            "isbn": "978-93-84144-93-7",
                            "date": "17 January 2015"
                        },
                        {
                            "title": "Traffic control management system based on Map reduced framework",
                            "venue": "ICWAC 2014",
                            "date": "28 February - 1 March 2014"
                        },
                        {
                            "title": "A comparative study on different types of Intrusion Detection Techniques and the application of data mining techniques to improve intrusion detection",
                            "venue": "ICWAC 2014",
                            "date": "28 February - 1 March 2014"
                        },
                        {
                            "title": "GIS and GPS based emergency response management system through satellite in road accident",
                            "venue": "ICWAC 2014",
                            "date": "28 February - 1 March 2014"
                        },
                        {
                            "title": "Enhancing employability: a long term challenge",
                            "venue": "National seminar on enhancing employability of IT student through Academia-industry Interaction",
                            "isbn": "978-81-924218-0-3"
                        },
                        {
                            "title": "Enhancing employability: perspective of educator, student and employee",
                            "venue": "National seminar on enhancing employability of IT student through Academia-industry Interaction",
                            "isbn": "978-81-924218-0-3"
                        },
                        {
                            "title": "An approach to enhance security using Vulnerability",
                            "venue": "ICWET 2012",
                            "date": "24-25 February 2012"
                        },
                        {
                            "title": "Application of Fuzzy logic to control Dam System",
                            "venue": "ICWET 2012",
                            "isbn": "973-93-80864-47-3/978-0-615-58717-2",
                            "date": "24-25 February 2012"
                        },
                        {
                            "title": "Next generation protocol IPv6",
                            "venue": "ICWET 2012",
                            "isbn": "973-93-80864-47-3/978-0-615-58717-2",
                            "date": "24-25 February 2012"
                        },
                        {
                            "title": "Role of computer in global worming",
                            "venue": "ICWET 2011",
                            "isbn": "978-1-4503-0449-8",
                            "date": "25-26 February 2012"
                        },
                        {
                            "title": "Trends in ubiquitous computing",
                            "venue": "ICWET 2011",
                            "isbn": "978-1-4503-0449-8",
                            "date": "25-26 February 2011"
                        },
                        {
                            "title": "The support of cloud computing to business Intelligence & knowledge management",
                            "venue": "Advanced Computing and Communication Technology - 11",
                            "date": "20-22 January 2011"
                        }
                    ]
                },
                "certifications": [
                    "ISO 9001-2008 Internal Auditor Course",
                    "ISO 9001-2015 Internal Auditor Course",
                    "Google Adwords Fundamental and Adwords Search certification on 16 May 2018"
                ],
                "consultancy": [
                    "Doctors workshop ICAIM 2016",
                    "Doctors workshop ICAIM 2017"
                ],
                "projects": {
                    "guidedProjects": [
                        "Internal guide for Sem IV & Sem VI Internship projects",
                        "Internal guide for Synapse Project",
                        "Internal guide for Mini projects"
                    ]
                }
            }
        },
        {
            "name": "Mr. Brijesh Pandey",
            "designation": "Assistant Professor & TPO",
            "image": "./Faculties/brijesh-pandey.webp",
            "aboutMe": "",
            "linkedin": "",
            "biography": {
                "education": [
                    "MCA",
                    "MBA (HR)"
                ],
                "honorsAndAwards": [
                    "Appreciation certificate from Infosys for valuable contribution in coordinating placement activities efficiently over the year 2021"
                ],
                "teaching": {
                    "currentCourses": [
                        "Management Information System",
                        "Digital Marketing and Business Analytics"
                    ],
                    "previousCourses": [
                        "E-Business",
                        "Business Infrastructure Management",
                        "Multimedia"
                    ]
                },
                "publications": {
                    "researchPapers": [
                        {
                            "title": "Leveraging Data Science in Healthcare",
                            "venue": "International conference on Advances in Information Technology and Management",
                            "date": "12-13 February 2022",
                            "isbn": "978-81-949693-5-8"
                        },
                        {
                            "title": "Leveraging Data Science in Healthcare",
                            "venue": "International conference on Advances in Information Technology and Management",
                            "date": "8-9 February 2020",
                            "isbn": "978-0-9972694-7-5"
                        },
                        {
                            "title": "Challenges in Water Management and Its Adverse Impacts on Ecosystems",
                            "venue": "International conference on Advances in Information Technology and Management",
                            "date": "16-18 February 2018",
                            "isbn": "978-0-9972694-3-7"
                        },
                        {
                            "title": "E-commerce Challenges and Solutions",
                            "venue": "International conference on Advances in Information Technology and Management",
                            "date": "17 January 2015",
                            "isbn": "978-93-84144-93-7"
                        },
                        {
                            "title": "Ethical Hacking: Tools, Techniques and Approaches",
                            "venue": "International conference on Advances in Information Technology and Management",
                            "date": "17 January 2015",
                            "isbn": "978-93-84144-93-7"
                        },
                        {
                            "title": "An Integrated Approach to Web Application Penetration Testing",
                            "venue": "Sustainability through Innovation & Competitive Advantage: Management and Technology Paradigms, YMT College of Management, Navi Mumbai",
                            "date": "30 November 2014"
                        },
                        {
                            "title": "Academia-Industry Interaction: A Two-way Benefit",
                            "venue": "National seminar on enhancing employability of IT students through Academia-Industry Interaction",
                            "date": "6 October 2012",
                            "isbn": "978-81-924218-0-3"
                        },
                        {
                            "title": "An Application of Integrated Approach Towards Employability",
                            "venue": "National seminar on enhancing employability of IT students through Academia-Industry Interaction",
                            "date": "6 October 2012",
                            "isbn": "978-81-924218-0-3"
                        }
                    ]
                },
                "certifications": [
                    "ISO 9001-2015 Internal Auditor Course",
                    "ISO 9001-2008 Internal Auditor Course"
                ]
            }
        }
        ,
        {
            "name": "Ms. Kinjal Doshi",
            "designation": "Assistant Professor",
            "image": "./Faculties/kinjal-doshi.webp",
            "aboutMe": "",
            "linkedin": "https://in.linkedin.com/in/kinjal-doshi-0b7a78145",
            "biography": {
                "education": [
                    "MCA"
                ],
                "teaching": {
                    "currentCourses": [
                        "Mobile Computing Lab"
                    ],
                    "previousCourses": [
                        "Web Technologies",
                        "Wireless Mobile Technology",
                        "Advanced Web Technologies",
                        "Advanced Distributed Computing",
                        "Financial Accounting and Management"
                    ]
                },
                "publications": {
                    "books": [
                        {
                            "title": "Programming with C#.NET",
                            "isbn": "978-93-81786-41-3",
                            "publisher": "Bharat Publication",
                            "prescribedBy": "Saurashtra University for B.C.A. Semester – 4",
                            "publishedYear": "2014-15"
                        },
                        {
                            "title": "Optimizing Healthcare – SEO",
                            "volume": "IV",
                            "year": "2020",
                            "isbn": "978-0-9972694-8-2",
                            "copyrightRegistrationNo": "L-93405/2020"
                        },
                        {
                            "title": "Healthcare on Cloud",
                            "volume": "6",
                            "year": "2022",
                            "isbn": "978-81-949693-6-5"
                        }
                    ]
                },
                "consultancy": {},
                "projects": [
                    {
                        "name": "FOCUS NGO",
                        "description": "Website development for Foundation for Childrens’ Universal Support"
                    },
                    {
                        "name": "Amrut Hospital",
                        "description": "Website development for Dr. Pramod Bahekar’s Amrut Hospital, Thane, Mumbai"
                    },
                    {
                        "name": "TIMSCDR Website",
                        "description": "Developed dynamic, interactive and responsive college website"
                    },
                    {
                        "name": "ICAIM Website",
                        "description": "Developed website for International Conference on Advances in Information Technology & Management, TIMSCDR, Mumbai"
                    },
                    {
                        "name": "Attendance Management Website",
                        "description": "Developed attendance and task management system for employees working in TIMSCDR during COVID–19 pandemic"
                    },
                    {
                        "name": "Website and Mobile Application for Development Management Institute (DMI)",
                        "description": "Developed website for Development Management Institute, Patna, Bihar"
                    },
                    {
                        "name": "Website maintenance of Dr. Mukesh Gupta",
                        "description": "Upgradation and Maintenance of website at Lenest hospital"
                    },
                    {
                        "name": "Online Examination System",
                        "description": "Developed Online Examination System used by students of Atmiya University in department of Computer Science based on ASP.NET using C#"
                    },
                    {
                        "name": "Online Feedback System",
                        "description": "Developed Online Feedback System used by students of Atmiya University in department of Computer Science based on ASP.NET using C#"
                    }
                ],
                "certifications": [
                    "D-Link Certified Specialist - Cleared Certification Course on 27th Aug, 2017"
                ]
            }
        }
        ,
        {
            "name": "Ms. Anamika Dhawan",
            "designation": "Assistant Professor",
            "image": "./Faculties/anamika-dhawan.webp",
            "aboutMe": "",
            "linkedin": "",
            "biography": {
                "education": [
                    "MCA from VJTI",
                    "B.Sc(Computer Science) from Ramnarain Ruia College"
                ],
                "teaching": {
                    "currentCourses": [
                        "Distributed System and Cloud Computing",
                        "Ethical Hacking"
                    ],
                    "previousCourses": [
                        "Advanced Java Programming",
                        "Robotic Process Automation",
                        "Distributed System and Cloud Computing",
                        "Computer Vision",
                        "Python"
                    ]
                },
                "publications": {
                    "researchPapers": [
                        {
                            "title": "Overcoming issues in user experience in multiplayer games",
                            "venue": "IJAERD"
                        }
                    ]
                },
                "projects": [
                    {
                        "name": "Daily Dairy Milk Monitoring Mobile Application for farmer",
                        "type": "Consultancy"
                    },
                    {
                        "name": "Color Sorter Machine",
                        "description": "The system was developed to sort products according to their respective colour",
                        "technology": "Python"
                    },
                    {
                        "name": "NGO Management System",
                        "description": "The system was developed to connect online users who may initially need help and may want to help the NGO. Agile methodology was followed for developing the system.",
                        "technologies": ["JAVA", "SQL"]
                    }
                ],
                "guidedProjects": [
                    "Internal guide for Sem IV Internship projects",
                    "Internal Guide for Synapse Project",
                    "Internal guide for Mini projects"
                ],
                "certifications": [
                    "Ionic – Build iOS, Android & Web Apps with Ionic & Angular"
                ]
            }
        }
        ,
        {
            name: "Ms. Rohini Bagul",
            designation: "Assistant Professor",
            image: "/images/faculty/rohini-350x350.jpg",
            aboutMe: "",
            linkedin: ""
        },
        {
            name: "Ms. Shweta Waghmare",
            designation: "Assistant Professor",
            image: "/images/faculty/shweta.jpg",
            aboutMe: "",
            linkedin: ""
        },
        {
            name: "Ms. Thara Naveen",
            designation: "Assistant Professor",
            image: "/images/faculty/Thara.jpg",
            aboutMe: "",
            linkedin: ""
        },
        {
            name: "Ms. Alifiya Shaikh",
            designation: "Assistant Professor",
            image: "/images/faculty/alifiya-maam.jpg",
            aboutMe: "",
            linkedin: ""
        },
        {
            name: "Ms. Mira Gohil",
            designation: "Assistant Professor",
            image: "/images/faculty/Mira.jpg",
            aboutMe: "",
            linkedin: ""
        },
        {
            name: "Dr. Shiksha Dubey",
            designation: "Assistant Professor",
            image: "/images/faculty/shiksha-350x350.jpg",
            aboutMe: "",
            linkedin: ""
        },
        {
            name: "Ms. Rani Singh",
            designation: "Associate Professor of Practice",
            image: "/images/faculty/rani-350x350.jpg",
            aboutMe: "",
            linkedin: ""
        },
        {
            name: "Ms. Sushmitha Mary",
            designation: "Assistant Professor",
            image: "/images/faculty/sushmita.jpg",
            aboutMe: "",
            linkedin: ""
        },
        {
            name: "Mr. Santosh Jain",
            designation: "Assistant Professor",
            image: "/images/faculty/santosh-350x350.jpg",
            aboutMe: "",
            linkedin: ""
        },
        {
            name: "Ms. Kiran Dubey",
            designation: "Librarian",
            image: "/images/faculty/kiran-pic.jpg",
            aboutMe: "",
            linkedin: ""
        }
    ];

    const handleSelect = (activity) => {
        setSelectedActivity(prev => prev?.id === activity.id ? null : activity);
    };
    const navigate = useNavigate();

    const [showForm, setShowForm] = useState(false);
    const [selectedFaculty, setSelectedFaculty] = useState(null);
    const [selectedActivity, setSelectedActivity] = useState(null);
    return (
        <>
            <Navbar />
            <div className='faculty-main-container'>
                {!selectedFaculty && (
                    <PageHeader
                        title="Meet Our Core Faculty!"
                        crumbs={[
                            { label: "Home", href: "/" },
                            { label: "Meet Our Core Faculty" },
                        ]}
                    />
                )}

                <div className='faculty-container'>

                    {!selectedFaculty ? (
                        <>


                            {facultyData.map((faculty, index) => (
                                <div className='faculty-box' key={index}>
                                    <img src={faculty.image} alt={faculty.name} />
                                    <div className='faculty-details'>
                                        <div className='faculty-name'>{faculty.name}</div>
                                        <div className='faculty-text'>{faculty.designation}</div>
                                        <button
                                            className="read-more-btn"
                                            onClick={() => setSelectedFaculty(faculty)}
                                        >
                                            Read More →
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </>
                    ) : (
                        <>
                            <a
                                href="#"
                                className="back-link"
                                onClick={e => {
                                    e.preventDefault();
                                    setSelectedFaculty(null); // NOT setSelectedActivity(null)
                                }}
                                aria-label="Back to activities"
                            >
                                <span className="back-arrow">←</span>
                                <span className="back-text">Back</span>
                            </a>



                            <FacultyProfile faculty={selectedFaculty} />
                        </>
                    )}

                </div>
            </div>
            <Footer />
        </>
    );
}

export default Faculty;