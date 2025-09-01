import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import Footer from '../components/Footer';
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Navbar from "../components/navbar";
import './faculty.css'

function Faculty() {

    const facultyData = [
    {
        name: "Ms. Sonu Gupta",
        designation: "Assistant Professor, Deputy Director & TPO",
        image: "/images/faculty/Sonu-Gupta.jpg",
        aboutMe: "",
        linkedin: ""
    },
    {
        name: "Dr. Rajesh Kapoor",
        designation: "Professor",
        image: "/images/faculty/kapoor.jpg",
        aboutMe: "",
        linkedin: ""
    },
    {
        name: "Dr. Ashwini Renavikar",
        designation: "Professor",
        image: "/images/faculty/Ashwini-Mam.jpg",
        aboutMe: "",
        linkedin: ""
    },
    {
        name: "Dr. Padma Mishra",
        designation: "Associate Professor",
        image: "/images/faculty/padma.jpg",
        aboutMe: "",
        linkedin: ""
    },
    {
        name: "Dr. Sonal Sharma",
        designation: "Associate Professor",
        image: "/images/faculty/Dr.-Sonal-Sharma-350x350.jpg",
        aboutMe: "",
        linkedin: ""
    },
    {
        name: "Ms. Rashmi Vipat",
        designation: "Assistant Professor & Examination Incharge",
        image: "/images/faculty/Rashmi-Vipat1.jpg",
        aboutMe: "",
        linkedin: ""
    },
    {
        name: "Mr. Shirshendu Maitra",
        designation: "Assistant Professor & HOD Academics",
        image: "/images/faculty/Shirshendu_Maitra-350x350.jpg",
        aboutMe: "",
        linkedin: ""
    },
    {
        name: "Ms. Aprajita Singh",
        designation: "Assistant Professor",
        image: "/images/faculty/Aprajita-Singh-1-350x350.jpg",
        aboutMe: "",
        linkedin: ""
    },
    {
        name: "Ms. Rupali Jadhav",
        designation: "Assistant Professor & IQAC Coordinator",
        image: "/images/faculty/Rupali-Jadhav-350x350.jpg",
        aboutMe: "",
        linkedin: ""
    },
    {
        name: "Mr. Brijesh Pandey",
        designation: "Assistant Professor & TPO",
        image: "/images/faculty/Brijesh-sir-300x300-1.jpg",
        aboutMe: "",
        linkedin: ""
    },
    {
        name: "Ms. Kinjal Doshi",
        designation: "Assistant Professor",
        image: "/images/faculty/kinjal-doshi-1-350x350.jpg",
        aboutMe: "",
        linkedin: ""
    },
    {
        name: "Ms. Anamika Dhawan",
        designation: "Assistant Professor",
        image: "/images/faculty/anamika-350.jpg",
        aboutMe: "",
        linkedin: ""
    },
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


    const navigate = useNavigate();
   const [showForm, setShowForm] = useState(false);


    return (
        <>
        <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />



       

        <div>
            <Navbar />
            <div className='faculty-main-container'>
                
                <div className='faculty-container'>
                    <h1 className='faculty-header'>Meet Our Core Faculty!</h1>

                    {facultyData.map((faculty, index) => (
                        <div className='faculty-box' key={index}>
                            <img src={faculty.image} alt={faculty.name} />
                            <div className='faculty-details'>
                                <h2>{faculty.name}</h2>
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