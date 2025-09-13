import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import Footer from '../components/Footer';
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Navbar from "../components/navbar";
import './faculty.css'
import PageHeader from '../about/PageHeader';

function Faculty() {

    const facultyData = [
  {
    "name": "Ms. Sonu Gupta",
    "designation": "Assistant Professor, Deputy Director & TPO",
    "image": "/Faculties/prof. Sonu.webp",
    "aboutMe": "",
    "linkedin": ""
  },
  {
    "name": "Dr. Rajesh Kapoor",
    "designation": "Professor",
    "image": "/Faculties/dr. Rajesh.webp",
    "aboutMe": "",
    "linkedin": ""
  },
  {
    "name": "Dr. Ashwini Renavikar",
    "designation": "Professor",
    "image": "/Faculties/Dr. Ashwini Renavikar.webp",
    "aboutMe": "",
    "linkedin": ""
  },
  {
    "name": "Dr. Padma Mishra",
    "designation": "Associate Professor",
    "image": "/Faculties/dr. Padma.webp",
    "aboutMe": "",
    "linkedin": ""
  },
  {
    "name": "Dr. Sonal Sharma",
    "designation": "Associate Professor",
    "image": "/Faculties/dr.sonal sharma.webp",
    "aboutMe": "",
    "linkedin": ""
  },
  {
    "name": "Ms. Rashmi Vipat",
    "designation": "Assistant Professor & Examination Incharge",
    "image": "/Faculties/prof. Rashmi.webp",
    "aboutMe": "",
    "linkedin": ""
  },
  {
    "name": "Mr. Shirshendu Maitra",
    "designation": "Assistant Professor & HOD Academics",
    "image": "/Faculties/prof. Maitra.webp",
    "aboutMe": "",
    "linkedin": ""
  },
  {
    "name": "Ms. Aprajita Singh",
    "designation": "Assistant Professor",
    "image": "/Faculties/prof. Aprajita.webp",
    "aboutMe": "",
    "linkedin": ""
  },
  {
    "name": "Ms. Rupali Jadhav",
    "designation": "Assistant Professor & IQAC Coordinator",
    "image": "/Faculties/prof. Rupali.webp",
    "aboutMe": "",
    "linkedin": ""
  },
  {
    "name": "Mr. Brijesh Pandey",
    "designation": "Assistant Professor & TPO",
    "image": "/Faculties/prof. Brijesh.webp",
    "aboutMe": "",
    "linkedin": ""
  },
  {
    "name": "Ms. Kinjal Doshi",
    "designation": "Assistant Professor",
    "image": "/Faculties/prof. Kinjal.webp",
    "aboutMe": "",
    "linkedin": ""
  },
  {
    "name": "Ms. Anamika Dhawan",
    "designation": "Assistant Professor",
    "image": "/Faculties/prof. anamika.webp",
    "aboutMe": "",
    "linkedin": ""
  },
  {
    "name": "Ms. Rohini Bagul",
    "designation": "Assistant Professor",
    "image": "/Faculties/prof. Rohini.webp",
    "aboutMe": "",
    "linkedin": ""
  },
  {
    "name": "Ms. Shweta Waghmare",
    "designation": "Assistant Professor",
    "image": "/Faculties/prof.shweta.webp",
    "aboutMe": "",
    "linkedin": ""
  },
  {
    "name": "Ms. Thara Naveen",
    "designation": "Assistant Professor",
    "image": "/Faculties/prof. Thara.webp",
    "aboutMe": "",
    "linkedin": ""
  },
  {
    "name": "Ms. Alifiya Shaikh",
    "designation": "Assistant Professor",
    "image": "/Faculties/Alifiya.webp",
    "aboutMe": "",
    "linkedin": ""
  },
  {
    "name": "Ms. Mira Gohil",
    "designation": "Assistant Professor",
    "image": "/Faculties/prof. Mira.webp",
    "aboutMe": "",
    "linkedin": ""
  },
  {
    "name": "Dr. Shiksha Dubey",
    "designation": "Assistant Professor",
    "image": "/Faculties/prof. Shiksha.webp",
    "aboutMe": "",
    "linkedin": ""
  },
  {
    "name": "Ms. Rani Singh",
    "designation": "Associate Professor of Practice",
    "image": "/Faculties/prof. Rani.webp",
    "aboutMe": "",
    "linkedin": ""
  },
  {
    "name": "Ms. Sushmitha Mary",
    "designation": "Assistant Professor",
    "image": "/Faculties/prof.susmitha.webp",
    "aboutMe": "",
    "linkedin": ""
  },
  {
    "name": "Mr. Santosh Jain",
    "designation": "Assistant Professor",
    "image": "/Faculties/prof. Santosh.webp",
    "aboutMe": "",
    "linkedin": ""
  },
  {
    "name": "Ms. Kiran Dubey",
    "designation": "Librarian",
    "image": "/Faculties/prof. Kiran.webp",
    "aboutMe": "",
    "linkedin": ""
  }
];


    const navigate = useNavigate();
   const [showForm, setShowForm] = useState(false);


    return (
        <>
        <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />



       

        <div>
            <Navbar />
            <div className='vision-mission-container'>
                       <PageHeader
                              title="Meet Our Core Faculty!"
                              crumbs={[
                                { label: 'Home', href: '/' },
                                { label: 'Meet Our Core Faculty!' }, // current page (no href)
                              ]}
                            />
                <div className='faculty-container'>
              
                  
                    <h1 className='faculty-header'></h1>

                    {facultyData.map((faculty, index) => (
                        <div className='faculty-box' key={index}>
                            <img src={faculty.image} alt={faculty.name} />
                            <div className='faculty-details'>
                                <h3>{faculty.name}</h3>
                                <p>{faculty.designation}</p>
                                <a
                                    onClick={() => navigate('/faculty-details', { state: faculty })}
                                    className="read-more-btn"
                                >
                                    Read More →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
        </>
    );
};

export default Faculty;