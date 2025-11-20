import React, { useState } from "react";
import "./AccordionSidebar.css";
import "../components/table.css"; // uses your existing table CSS
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";

// Year-wise data for Advisory Committee
const advisoryCommitteeDataByYear = {
    "A.Y. 2024-25": [
        { no: 1, name: "Dr. Vinita Gaikwad", designation: "Director" },
        { no: 2, name: "Ms. Anamika Dhawan", designation: "Asst. Professor" },
        { no: 3, name: "Mr. Shailesh Sharma", designation: "Office Superintendent" },
        { no: 4, name: "Mr. Mayur Pawar", designation: "Placement Co-Ordinator" },
        { no: 5, name: "Mr. Arvind Kumar", designation: "Officiating Lab Asst." },
    ],
    "A.Y. 2023-24": [
        { no: 1, name: "Dr. Vinita Gaikwad", designation: "Director" },
        { no: 2, name: "Ms. Anamika Dhawan", designation: "Asst. Professor" },
        { no: 3, name: "Mr. Shailesh Sharma", designation: "Head Clerk" },
        { no: 4, name: "Mr. Mayur Pawar", designation: "DTP Operator" },
        { no: 5, name: "Mr. Arvind Kumar", designation: "Officiating Lab Asst." },
    ],
    "A.Y. 2022-23": [
        { no: 1, name: "Dr. Vinita Gaikwad", designation: "Director" },
        { no: 2, name: "Dr. Megha Mudholkar", designation: "Asst. Professor" },
        { no: 3, name: "Mr. Shailesh Sharma", designation: "Head Clerk" },
        { no: 4, name: "Mr. Mayur Pawar", designation: "DTP Operator" },
        { no: 5, name: "Mr. Arvind Kumar", designation: "Lab Attendant" },
    ],
    "A.Y. 2021-22": [
        { no: 1, name: "Dr. Vinita Gaikwad", designation: "Director" },
        { no: 2, name: "Dr. Megha Mudholkar", designation: "Asst. Professor" },
        { no: 3, name: "Mr. Shailesh Sharma", designation: "Head Clerk" },
        { no: 4, name: "Ms. Ashwini Deore", designation: "Lab Assistant" },
        { no: 5, name: "Mr. Arvind Kumar", designation: "Lab Attendant" },
    ],
    "A.Y. 2020-21": [
        { no: 1, name: "Dr. Vinita Gaikwad", designation: "Director" },
        { no: 2, name: "Mr. Pankaj Mudholkar", designation: "Asst. Professor" },
        { no: 3, name: "Ms. Rupali Jadhav", designation: "Asst. Professor" },
        { no: 4, name: "Mr. Shailesh Sharma", designation: "Sr. Clerk" },
        { no: 5, name: "Mr. Prashant Satam", designation: "Sr. Clerk" },
    ],
    "A.Y. 2019-20": [
        { no: 1, name: "Dr. Vinita Gaikwad", designation: "Director" },
        { no: 2, name: "Mr. Pankaj Mudholkar", designation: "Asst. Professor" },
        { no: 3, name: "Ms. Rupali Jadhav", designation: "Asst. Professor" },
        { no: 4, name: "Mr. Shailesh Sharma", designation: "Sr. Clerk" },
        { no: 5, name: "Mr. Prashant Satam", designation: "Sr. Clerk" },
    ],
};


const minorityCellDataByYear = {
    "A.Y. 2024-25": [
        { no: 1, name: "Dr. Vinita Gaikwad", designation: "Director" },
        { no: 2, name: "Mr. Brijesh Pandey", designation: "Asst. Professor & TPO" },
        { no: 3, name: "Mr. Shailesh Sharma", designation: "Head Clerk" },
        { no: 4, name: "Mr. Ansari Aman Asrar", designation: "Student (2nd Year)" },
        { no: 5, name: "Mr. Dennis Aryan John", designation: "Student (2nd Year)" },
        { no: 6, name: "Ms. Fernandes Josephin Patrick", designation: "Student (2nd Year)" }
    ],
    "A.Y. 2023-24": [
        { no: 1, name: "Dr. Vinita Gaikwad", designation: "Director" },
        { no: 2, name: "Mr. Brijesh Pandey", designation: "Asst. Professor & TPO" },
        { no: 3, name: "Mr. Shailesh Sharma", designation: "Head Clerk" },
        { no: 4, name: "Ms. Ariba Parvez Akhtar", designation: "Student (2nd Year)" },
        { no: 5, name: "Mr. Jose Joy Chacko", designation: "Student (2nd Year)" },
        { no: 6, name: "Mr. Clinton John Solaimuthu", designation: "Student (2nd Year)" }
    ],
    "A.Y. 2022-23": [
        { no: 1, name: "Dr. Vinita Gaikwad", designation: "Director" },
        { no: 2, name: "Mr. Brijesh Pandey", designation: "Asst. Professor & TPO" },
        { no: 3, name: "Mr. Shailesh Sharma", designation: "Head Clerk" },
        { no: 4, name: "Dsouza Soney Xavier", designation: "Student (2nd Year)" },
        { no: 5, name: "Gudhka Meet Girish", designation: "Student (2nd Year)" },
        { no: 6, name: "Shaikh Mohammed Shahrukh Shehzaad", designation: "Student (2nd Year)" }
    ],
    "A.Y. 2021-22": [
        { no: 1, name: "Dr. Vinita Gaikwad", designation: "Director" },
        { no: 2, name: "Mr. Brijesh Pandey", designation: "Asst. Professor & TPO" },
        { no: 3, name: "Mr. Shailesh Sharma", designation: "Head Clerk" },
        { no: 4, name: "Mr. Khan Mohd Amir Lukman", designation: "Student (2nd Year)" },
        { no: 5, name: "Ms. Rimsha Siddiqui", designation: "Student (1st Year)" }
    ],
    "A.Y. 2020-21": [
        { no: 1, name: "Dr. Vinita Gaikwad", designation: "Director" },
        { no: 2, name: "Mr. Brijesh Pandey", designation: "Asst. Professor & TPO" },
        { no: 3, name: "Mr. Shailesh Sharma", designation: "Sr. Clerk" },
        { no: 4, name: "Ms. Shreya Mahendra Mehta", designation: "Student (3rd Year)" },
        { no: 5, name: "Mr. Khan Mohd Amir Lukman", designation: "Student (1st Year)" }
    ],
    "A.Y. 2019-20": [
        { no: 1, name: "Dr. Vinita Gaikwad", designation: "Director" },
        { no: 2, name: "Mr. Brijesh Pandey", designation: "Asst. Professor & TPO" },
        { no: 3, name: "Mr. Shailesh Sharma", designation: "Sr. Clerk" },
        { no: 4, name: "Mr. Melvin George Mathew", designation: "Student (3rd Year)" },
        { no: 5, name: "Ms. Shreya Mahendra Mehta", designation: "Student (2nd Year)" }
    ]
};


const grievanceCommitteeDataByYear = {
    "A.Y. 2024-25": [
        { no: 1, position: "Chairman", name: "Dr. Vinita Gaikwad", designation: "Director" },
        { no: 2, position: "Ombudsman", name: "Ms. Sonu Gupta", designation: "Assistant Professor & TPO" },
        { no: 3, position: "Member", name: "Mr. Shirshendu Maitra", designation: "Asst. Professor & HOD-ACA" },
        { no: 4, position: "Member", name: "Ms. Rashmi Vipat", designation: "Assistant Professor & Exam In-charge" },
        { no: 5, position: "Member", name: "Mr. Shailesh Sharma", designation: "Head Clerk" }
    ],

    "A.Y. 2023-24": [
        { no: 1, position: "Chairman", name: "Dr. Vinita Gaikwad", designation: "Director" },
        { no: 2, position: "Ombudsman", name: "Ms. Sonu Gupta", designation: "Assistant Professor & TPO" },
        { no: 3, position: "Member", name: "Mr. Shirshendu Maitra", designation: "Asst. Professor & HOD-ACA" },
        { no: 4, position: "Member", name: "Ms. Rashmi Vipat", designation: "Assistant Professor & Exam In-charge" },
        { no: 6, position: "Member", name: "Mr. Shailesh Sharma", designation: "Head Clerk" },
    ],
    "A.Y. 2023-22": [
        { no: 1, position: "Chairman", name: "Dr. Vinita Gaikwad", designation: "Director" },
        { no: 2, position: "Ombudsman", name: "Ms. Sonu Gupta", designation: "Assistant Professor & TPO" },
        { no: 3, position: "Member", name: "Mr. Pankaj Mudholkar", designation: "Assistant Professor" },
        { no: 4, position: "Member", name: "Ms. Rashmi Vipat", designation: "Assistant Professor & Exam In-charge" },
        { no: 6, position: "Member", name: "Mr. Shailesh Sharma", designation: "Head Clerk" }
    ],

    "A.Y. 2021-22": [
        { no: 1, position: "Chairman", name: "Dr. Vinita Gaikwad", designation: "Director" },
        { no: 2, position: "Ombudsman", name: "Ms. Sonu Gupta", designation: "Assistant Professor & TPO" },
        { no: 3, position: "Member", name: "Mr. Pankaj Mudholkar", designation: "Assistant Professor" },
        { no: 4, position: "Member", name: "Ms. Rashmi Vipat", designation: "Assistant Professor & Exam In-charge" },
        { no: 6, position: "Member", name: "Mr. Shailesh Sharma", designation: "Head Clerk" }
    ],

    "A.Y. 2020-21": [
        { no: 1, position: "Chairman", name: "Dr. Vinita Gaikwad", designation: "Director" },
        { no: 2, position: "Ombudsman", name: "Ms. Sonu Gupta", designation: "Assistant Professor & TPO" },
        { no: 3, position: "Member", name: "Mr. Pankaj Mudholkar", designation: "Assistant Professor" },
        { no: 4, position: "Member", name: "Ms. Rashmi Vipat", designation: "Assistant Professor & Exam In-charge" },
        { no: 6, position: "Member", name: "Mr. Shailesh Sharma", designation: "Head Clerk" }
    ],

    "A.Y. 2019-20": [
        { no: 1, position: "Chairman", name: "Dr. Vinita Gaikwad", designation: "Director" },
        { no: 2, position: "Ombudsman", name: "Ms. Sonu Gupta", designation: "Assistant Professor & MR" },
        { no: 3, position: "Member", name: "Mr. Pankaj Mudholkar", designation: "Assistant Professor" },
        { no: 4, position: "Member", name: "Ms. Rashmi Vipat", designation: "Assistant Professor & Exam In-charge" },
        { no: 6, position: "Member", name: "Mr. Shailesh Sharma", designation: "Senior Clerk" }
    ],


    "A.Y. 2018-19": [
        { no: 1, position: "Chairman", name: "Dr. Vinita Gaikwad", designation: "Director" },
        { no: 2, position: "Ombudsman", name: "Ms. Sonu Gupta", designation: "Assistant Professor & MR" },
        { no: 3, position: "Member", name: "Mr. Pankaj Mudholkar", designation: "Assistant Professor" },
        { no: 4, position: "Member", name: "Ms. Rashmi Vipat", designation: "Assistant Professor & Exam In-charge" },
        { no: 6, position: "Member", name: "Mr. Shailesh Sharma", designation: "Senior Clerk" }
    ],

    "A.Y. 2017-18": [
        { no: 1, position: "Chairman", name: "Dr. Vinita Gaikwad", designation: "Director" },
        { no: 2, position: "Ombudsman", name: "Ms. Sonu Gupta", designation: "Assistant Professor & MR" },
        { no: 3, position: "Member", name: "Mr. Pankaj Mudholkar", designation: "Assistant Professor" },
        { no: 4, position: "Member", name: "Ms. Rashmi Vipat", designation: "Assistant Professor & Exam In-charge" },
        { no: 6, position: "Member", name: "Mr. Shailesh Sharma", designation: "Senior Clerk" }
    ],

};

const internalCompliantCommitteeDataByYear = {
    "A.Y. 2024-25": [
        { no: 1, position: "Presiding Officer", name: "Ms. Rashmi Vipat", designation: "Asst. Professor & Exam In charge" },
        { no: 2, position: "Member", name: "Mr. Shirshendu Maitra", designation: "Assistant Professor & HOD-ACA, TIMSCDR" },
        { no: 3, position: "Member", name: "Ms. Rupali Jadhav", designation: "Asst. Professor" },
        { no: 4, position: "Member", name: "Mr. Shailesh Sharma", designation: "Head Clerk" },
        { no: 5, position: "Member", name: "Ms. Pritam Rane", designation: "Sr. Clerk" },
        { no: 6, position: "Member", name: "Mr. Mohd. Afzal Nandolia", designation: "Student (2nd year)" },
        { no: 7, position: "Member", name: "Ms. Fernandes Josephine", designation: "Student (2nd Year)" },
        { no: 8, position: "Member", name: "Mr. Gupta Omkar", designation: "Student (2nd year)" },
        { no: 9, position: "Non-Government Organization", name: "Dr. Sangeeta Shirname", designation: "Socialist (Inseed NGO)" }
    ],
    "A.Y. 2023-24": [
        { no: 1, position: "Presiding Officer", name: "Ms. Rashmi Vipat", designation: "Asst. Professor & Exam In charge" },
        { no: 2, position: "Member", name: "Mr. Shirshendu Maitra", designation: "Assistant Professor & HOD-ACA, TIMSCDR" },
        { no: 3, position: "Member", name: "Ms. Rupali Jadhav", designation: "Asst. Professor" },
        { no: 4, position: "Member", name: "Mr. Shailesh Sharma", designation: "Head Clerk" },
        { no: 5, position: "Member", name: "Ms. Pritam Rane", designation: "Sr. Clerk" },
        { no: 6, position: "Member", name: "Ms. Priya Singh", designation: "Student (2nd year)" },
        { no: 7, position: "Member", name: "Ms. Ariba Akhtar", designation: "Student (2nd Year)" },
        { no: 8, position: "Member", name: "Mr. Sandeep Yadav", designation: "Student (2nd year)" },
        { no: 9, position: "Non-Government Organization", name: "Dr. Sangeeta Shirname", designation: "Socialist (Inseed NGO)" }
    ],

    "A.Y. 2022-23": [
        { no: 1, position: "Presiding Officer", name: "Ms. Rashmi Vipat", designation: "Asst. Professor & Exam In charge" },
        { no: 2, position: "Member", name: "Ms. Rupali Jadhav", designation: "Asst. Professor" },
        { no: 3, position: "Member", name: "Mr. Pankaj Mudholkar", designation: "Asst. Professor" },
        { no: 4, position: "Member", name: "Mr. Shailesh Sharma", designation: "Head Clerk" },
        { no: 5, position: "Member", name: "Ms. Pritam Rane", designation: "Sr. Clerk" },
        { no: 6, position: "Member", name: "Ms. Verma Swati Gopal", designation: "Student (2nd year)" },
        { no: 7, position: "Member", name: "Mr. Vishwakarma Sandeep Ramesh", designation: "Student (2nd Year)" },
        { no: 8, position: "Member", name: "Ms. Harshika Naik", designation: "Student (2nd year)" },
        { no: 9, position: "Non-Government Organization", name: "Ms. Rohini Kulkarni", designation: "Socialist (Swadhar NGO)" }
    ],

    "A.Y. 2021-22": [
        { no: 1, position: "Presiding Officer", name: "Ms. Rashmi Vipat", designation: "Asst. Professor & Exam In charge" },
        { no: 2, position: "Member", name: "Ms. Rupali Jadhav", designation: "Asst. Professor" },
        { no: 3, position: "Member", name: "Mr. Pankaj Mudholkar", designation: "Asst. Professor" },
        { no: 4, position: "Member", name: "Mr. Shailesh Sharma", designation: "Head Clerk" },
        { no: 5, position: "Member", name: "Ms. Pritam Rane", designation: "Sr. Clerk" },
        { no: 6, position: "Member", name: "Mr. Manthan Mirgal", designation: "Student (3rd year)" },
        { no: 7, position: "Member", name: "Ms. Nisha Maurya", designation: "Student (2nd Year)" },
        { no: 8, position: "Member", name: "Mr. Malav Shah", designation: "Student (2nd year)" },
        { no: 9, position: "Non-Government Organization", name: "Ms. Rohini Kulkarni", designation: "Socialist (Swadhar NGO)" }
    ],
    "A.Y. 2020-21": [
        { no: 1, position: "Presiding Officer", name: "Ms. Aprajita Singh", designation: "Deputy Director" },
        { no: 2, position: "Member", name: "Ms. Sreeja S. S.", designation: "Asst. Professor, HOD-ACA" },
        { no: 3, position: "Member", name: "Mr. Pankaj Mudholkar", designation: "Asst. Professor" },
        { no: 4, position: "Member", name: "Mr. Rakesh Kale", designation: "Head Clerk" },
        { no: 5, position: "Member", name: "Ms. Pritam Rane", designation: "Sr. Clerk" },
        { no: 6, position: "Member", name: "Mr. Manthan Mirgal", designation: "Student (2nd year)" },
        { no: 7, position: "Member", name: "Ms. Ana Gadala", designation: "Student (2nd year)" },
        { no: 8, position: "Member", name: "Mr. Rahul Kewat", designation: "Student (3rd year)" },
        { no: 9, position: "Non-Government Organization", name: "Ms. Rohini Kulkarni", designation: "Socialist (Swadhar NGO)" }
    ],

    "A.Y. 2019-20": [
        { no: 1, position: "Presiding Officer", name: "Ms. Aprajita Singh", designation: "Asst. Prof., Deputy Director, HOD-ACA" },
        { no: 2, position: "Member", name: "Ms. Sreeja S. S.", designation: "Asst. Professor" },
        { no: 3, position: "Member", name: "Mr. Pankaj Mudholkar", designation: "Asst. Professor" },
        { no: 4, position: "Member", name: "Mr. Rakesh Kale", designation: "Head Clerk" },
        { no: 5, position: "Member", name: "Ms. Pritam Rane", designation: "Sr. Clerk" },
        { no: 6, position: "Member", name: "Mr. Rishabh Singh", designation: "Student (3rd year)" },
        { no: 7, position: "Member", name: "Ms. Anuja Naik", designation: "Student (3rd year)" },
        { no: 8, position: "Member", name: "Mr. Rahul Kewat", designation: "Student (2nd year)" },
        { no: 9, position: "Non-Government Organization", name: "Ms. Rohini Kulkarni", designation: "Socialist (Swadhar NGO)" }
    ],

    "A.Y. 2018-19": [
        { no: 1, position: "Presiding Officer", name: "Ms. Rashmi Vipat", designation: "Asst. Professor & Exam In charge" },
        { no: 2, position: "Member", name: "Ms. Rupali Jadhav", designation: "Asst. Professor" },
        { no: 3, position: "Member", name: "Mr. Pankaj Mudholkar", designation: "Asst. Professor" },
        { no: 4, position: "Member", name: "Mr. Shailesh Sharma", designation: "Head Clerk" },
        { no: 5, position: "Member", name: "Ms. Pritam Rane", designation: "Sr. Clerk" },
        { no: 6, position: "Member", name: "Ms. Charmi Shah", designation: "Student (3rd year)" },
        { no: 7, position: "Member", name: "Ms. Janice Fernandes", designation: "Student (2nd Year)" },
        { no: 8, position: "Member", name: "Mr. Subheesh Sukumaran", designation: "Student (2nd year)" },
        { no: 9, position: "Non-Government Organization", name: "Ms. Rohini Kulkarni", designation: "Socialist (Swadhar NGO)" }
    ],

    "A.Y. 2017-18": [
        { no: 1, position: "Presiding Officer", name: "Ms. Rashmi Vipat", designation: "Asst. Professor & Exam In charge" },
        { no: 2, position: "Member", name: "Ms. Rupali Jadhav", designation: "Asst. Professor" },
        { no: 3, position: "Member", name: "Mr. Pankaj Mudholkar", designation: "Asst. Professor" },
        { no: 4, position: "Member", name: "Mr. Shailesh Sharma", designation: "Head Clerk" },
        { no: 5, position: "Member", name: "Ms. Pritam Rane", designation: "Sr. Clerk" },
        { no: 6, position: "Member", name: "Mr. Keith Machado", designation: "Student (3rd year)" },
        { no: 7, position: "Member", name: "Ms. Sayali Gharat", designation: "Student (2nd Year)" },
        { no: 8, position: "Member", name: "Mr. Charmi Shah", designation: "Student (2nd year)" },
        { no: 9, position: "Non-Government Organization", name: "Ms. Rohini Kulkarni", designation: "Socialist (Swadhar NGO)" }
    ]



};

const antiRaggingCommitteeDataByYear = {
    "A.Y. 2024-25": [
        { no: 1, position: "Head of the Institute", name: "Dr. Vinita Gaikwad", designation: "Director" },
        { no: 2, position: "Police Administration", name: "Mr. Narayan Patil", designation: "Head Constable, Mumbai Police" },
        { no: 3, position: "Local Media", name: "Mr. Wasim Sheikh", designation: "Journalist (HT)" },
        { no: 4, position: "Non Government Organization", name: "Dr. Sangeeta Shirname", designation: "Socialist (Inseed NGO)" },
        { no: 5, position: "Faculty Members", name: "Ms. Rupali Jadhav", designation: "Asst. Professor" },
        { no: 6, position: "Member", name: "Mr. Shirshendu Maitra", designation: "Asst. Professor" },
        { no: 7, position: "Parents", name: "Mr. Vijay Chaudhari", designation: "Retd. Assistant Sub Inspector" },
        { no: 8, position: "Member", name: "Mr. Ashok Salunkhe", designation: "Creative Manager, Ascent Meditech" },
        { no: 9, position: "Students", name: "Mr. Nikhil Chaudhari", designation: "2nd Year student" },
        { no: 10, position: "Member", name: "Ms. Riddhi Kesharwani", designation: "2nd Year student" },
        { no: 11, position: "Hostel", name: "Mr. Alok Singh", designation: "Hostel Warden" },
        { no: 12, position: "Non – teaching staff", name: "Mr. Shailesh Sharma", designation: "Head Clerk (Secretary)" },
        { no: 13, position: "Member", name: "Mr. Prashant Satam", designation: "Sr. Clerk" }
    ],

    "A.Y. 2023-24": [
        { no: 1, position: "Head of the Institute", name: "Dr. Vinita Gaikwad", designation: "Director" },
        { no: 2, position: "Police Administration", name: "Mr. Narayan Patil", designation: "Head Constable, Mumbai Police" },
        { no: 3, position: "Local Media", name: "Mr. Wasim Sheikh", designation: "Journalist (HT)" },
        { no: 4, position: "Non Government Organization", name: "Dr. Sangeeta Shirname", designation: "Socialist (Inseed NGO)" },
        { no: 5, position: "Faculty Members", name: "Ms. Rupali Jadhav", designation: "Asst. Professor" },
        { no: 6, position: "Member", name: "Mr. Shirshendu Maitra", designation: "Asst. Professor" },
        { no: 7, position: "Parents", name: "Mr. Vijay Chaudhari", designation: "Retd. Assistant Sub Inspector" },
        { no: 8, position: "Member", name: "Mr. Ashok Salunkhe", designation: "Creative Manager, Ascent Meditech" },
        { no: 9, position: "Students", name: "Mr. Nikhil Chaudhari", designation: "2nd Year student" },
        { no: 10, position: "Member", name: "Ms. Riddhi Kesharwani", designation: "2nd Year student" },
        { no: 11, position: "Hostel", name: "Mr. Alok Singh", designation: "Hostel Warden" },
        { no: 12, position: "Non – teaching staff", name: "Mr. Shailesh Sharma", designation: "Head Clerk (Secretary)" },
        { no: 13, position: "Member", name: "Mr. Prashant Satam", designation: "Sr. Clerk" }
    ],
    "A.Y. 2022-23": [
        { no: 1, position: "Head of the Institute", name: "Dr. Vinita Gaikwad", designation: "Director" },
        { no: 2, position: "Police Administration", name: "Mr. Narayan Patil", designation: "Head Constable, Mumbai Police" },
        { no: 3, position: "Local Media", name: "Mr. Wasim Sheikh", designation: "Journalist (HT)" },
        { no: 4, position: "Non Government Organization", name: "Ms. Rohini Kulkarni", designation: "Socialist (Swadhar NGO)" },
        { no: 5, position: "Faculty Members", name: "Ms. Rupali Jadhav", designation: "Asst. Professor" },
        { no: 6, position: "Faculty Members", name: "Mr. Shirshendu Maitra", designation: "Asst. Professor" },
        { no: 7, position: "Parents", name: "Mr. Ramkrishna Sawant", designation: "Retd. Assistant Sub Inspector" },
        { no: 8, position: "Parents", name: "Mr. Ashok Salunkhe", designation: "Creative Manager, Ascent Meditech" },
        { no: 9, position: "Students", name: "Maruf Zaheen Basharat", designation: "2nd Year student" },
        { no: 10, position: "Students", name: "Mhaske Shruti Subhash", designation: "2nd Year student" },
        { no: 11, position: "Hostel", name: "Mr. Rajesh Singh", designation: "Hostel Warden" },
        { no: 12, position: "Non – teaching staff", name: "Mr. Shailesh Sharma", designation: "Head Clerk (Secretary)" },
        { no: 13, position: "Non – teaching staff", name: "Mr. Prashant Satam", designation: "Sr. Clerk" }
    ],


    "A.Y. 2021-22": [
        { no: 1, position: "Head of the Institute", name: "Dr. Vinita Gaikwad", designation: "Director" },
        { no: 2, position: "Police Administration", name: "Mr. Machindranath Chavan", designation: "Sr. Police Inspector (Crime Branch)" },
        { no: 3, position: "Local Media", name: "Mr. Wasim Sheikh", designation: "Journalist (HT)" },
        { no: 4, position: "Non Government Organization", name: "Ms. Snehali Vaidya", designation: "Socialist (Swadhar NGO)" },
        { no: 5, position: "Faculty Members", name: "Ms. Rupali Jadhav", designation: "Asst. Professor" },
        { no: 6, position: "Faculty Members", name: "Mr. Shirshendu Maitra", designation: "Asst. Professor" },
        { no: 7, position: "Parents", name: "Mr. Hemant Kale", designation: "Mumbai Police Inspector" },
        { no: 8, position: "Parents", name: "Ms. Sunetra Prabhu", designation: "Service (MTNL)" },
        { no: 9, position: "Students", name: "Mr. Archin Joshi", designation: "2nd Year student" },
        { no: 10, position: "Students", name: "Mr. Anurag Singh", designation: "3rd Year student" },
        { no: 11, position: "Hostel", name: "Mr. Rajesh Singh", designation: "Hostel Warden" },
        { no: 12, position: "Non – teaching staff", name: "Mr. Shailesh Sharma", designation: "Head Clerk (Secretary)" },
        { no: 13, position: "Non – teaching staff", name: "Mr. Prashant Satam", designation: "Sr. Clerk" }
    ],

    "A.Y. 2020-21": [
        { no: 1, position: "Head of the Institute", name: "Dr. Vinita Gaikwad", designation: "Director" },
        { no: 2, position: "Police Administration", name: "Mr. Machindranath Chavan", designation: "Sr. Police Inspector (Crime Branch)" },
        { no: 3, position: "Local Media", name: "Mr. Wasim Sheikh", designation: "Journalist (HT)" },
        { no: 4, position: "Non Government Organization", name: "Ms. Snehali Vaidya", designation: "Socialist (Swadhar NGO)" },
        { no: 5, position: "Faculty Members", name: "Ms. Rupali Jadhav", designation: "Asst. Professor" },
        { no: 6, position: "Faculty Members", name: "Mr. Shirshendu Maitra", designation: "Asst. Professor" },
        { no: 7, position: "Parents", name: "Mr. Hemant Kale", designation: "Mumbai Police Inspector" },
        { no: 8, position: "Parents", name: "Ms. Sunetra Prabhu", designation: "Service (MTNL)" },
        { no: 9, position: "Students", name: "Ms. Tanvi Chavan", designation: "2nd Year student" },
        { no: 10, position: "Students", name: "Mr. Mahesh Shinde", designation: "2nd Year student" },
        { no: 11, position: "Hostel", name: "Mr. Rajesh Singh", designation: "Hostel Warden" },
        { no: 12, position: "Non – teaching staff", name: "Mr. Shailesh Sharma", designation: "Head Clerk (Secretary)" },
        { no: 13, position: "Non – teaching staff", name: "Mr. Prashant Satam", designation: "Sr. Clerk" }
    ],

    "A.Y. 2019-20": [
        { no: 1, position: "Head of the Institute", name: "Dr. Vinita Gaikwad", designation: "Director" },
        { no: 2, position: "Police Administration", name: "Mr. Machindranath Chavan", designation: "Sr. Police Inspector (Crime Branch)" },
        { no: 3, position: "Local Media", name: "Mr. Wasim Sheikh", designation: "Journalist (HT)" },
        { no: 4, position: "Non Government Organization", name: "Ms. Snehali Vaidya", designation: "Socialist (Swadhar NGO)" },
        { no: 5, position: "Faculty Members", name: "Ms. Rupali Jadhav", designation: "Asst. Professor" },
        { no: 6, position: "Faculty Members", name: "Mr. Shirshendu Maitra", designation: "Asst. Professor" },
        { no: 7, position: "Parents", name: "Mr. Hemant Kale", designation: "Mumbai Police Inspector" },
        { no: 8, position: "Parents", name: "Ms. Sunetra Prabhu", designation: "Service (MTNL)" },
        { no: 9, position: "Students", name: "Ms. Tanvi Chavan", designation: "1st Year student" },
        { no: 10, position: "Students", name: "Mr. Mahesh Shinde", designation: "1st Year student" },
        { no: 11, position: "Hostel", name: "Mr. Rajesh Singh", designation: "Hostel Warden" },
        { no: 12, position: "Non – teaching staff", name: "Mr. Shailesh Sharma", designation: "Head Clerk (Secretary)" },
        { no: 13, position: "Non – teaching staff", name: "Mr. Prashant Satam", designation: "Sr. Clerk" }
    ],

    "A.Y. 2018-19": [
        { no: 1, position: "Head of the Institute", name: "Dr. Vinita Gaikwad", designation: "Director" },
        { no: 2, position: "Police Administration", name: "Mr. Machindranath Chavan", designation: "Sr. Police Inspector (Crime Branch)" },
        { no: 3, position: "Local Media", name: "Mr. Wasim Sheikh", designation: "Journalist (HT)" },
        { no: 4, position: "Non Government Organization", name: "Ms. Snehali Vaidya", designation: "Socialist (Swadhar NGO)" },
        { no: 5, position: "Faculty Members", name: "Ms. Rupali Jadhav", designation: "Asst. Professor" },
        { no: 6, position: "Faculty Members", name: "Mr. Shirshendu Maitra", designation: "Asst. Professor" },
        { no: 7, position: "Parents", name: "Mr. Hemant Kale", designation: "Mumbai Police Inspector" },
        { no: 8, position: "Parents", name: "Ms. Sunetra Prabhu", designation: "Service (MTNL)" },
        { no: 9, position: "Students", name: "Mr. Rolstan D’souza", designation: "Student (1st year)" },
        { no: 10, position: "Students", name: "Ms. Anuja Naik", designation: "Student (2nd year)" },
        { no: 11, position: "Hostel", name: "Mr. Rajesh Singh", designation: "Hostel Warden" },
        { no: 12, position: "Non – teaching staff", name: "Mr. Rakesh Kale", designation: "Head Clerk (Secretary)" },
        { no: 13, position: "Non – teaching staff", name: "Mr. Shailesh Sharma", designation: "Sr. Clerk" }
    ],

    "A.Y. 2017-18": [
        { no: 1, position: "Head of the Institute", name: "Dr. Vinita Gaikwad", designation: "Director" },
        { no: 2, position: "Police Administration", name: "Mr. Machindranath Chavan", designation: "Sr. Police Inspector (Crime Branch)" },
        { no: 3, position: "Local Media", name: "Mr. Wasim Sheikh", designation: "Journalist (HT)" },
        { no: 4, position: "Non Government Organization", name: "Ms. Snehali Vaidya", designation: "Socialist (Swadhar NGO)" },
        { no: 5, position: "Faculty Members", name: "Ms. Rupali Jadhav", designation: "Asst. Professor" },
        { no: 6, position: "Faculty Members", name: "Mr. Shirshendu Maitra", designation: "Asst. Professor" },
        { no: 7, position: "Parents", name: "Mr. Hemant Kale", designation: "Mumbai Police Inspector" },
        { no: 8, position: "Parents", name: "Ms. Sunetra Prabhu", designation: "Service (MTNL)" },
        { no: 9, position: "Students", name: "Ms. Anuja Naik", designation: "Student (1st year)" },
        { no: 10, position: "Students", name: "Ms. Chandni Gupta", designation: "Student (2nd year)" },
        { no: 11, position: "Hostel", name: "Mr. Rajesh Singh", designation: "Hostel Warden" },
        { no: 12, position: "Non – teaching staff", name: "Mr. Rakesh Kale", designation: "Head Clerk (Secretary)" },
        { no: 13, position: "Non – teaching staff", name: "Ms. Shailesh Sharma", designation: "Sr. Clerk" }
    ],




    // Add other academic years as per data
};




const committeeData = [
    {
        title: "Advisory Committee for Equal Opportunity and SC / ST Committee",
        items: [
            "Advisory Committee for Equal Opportunity and SC / ST Committee",
            "Notice and Circular of Advisory Committee for Equal Opportunity and SC / ST Committee (A.Y. 2022-23 to A.Y. 2024-25)",
            "Minutes of Meeting of Advisory Committee for Equal Opportunity and SC / ST Committee (A.Y. 2022-23 to A.Y. 2024-25)",
            "Minutes of Meeting of Minority Cell (A.Y. 2022-2023 to A.Y. 2019-20)",
        ],
    },
    {
        title: "Minority Cell",
        items: [
            "Members of Minority Cell",
            "Minutes of Meeting of Minority Cell (A,Y. 2023-24 to A.Y. 2024-25)",
            "Minutes of Meeting of Minority Cell (A,Y. 2022-23 to A.Y. 2019-20)",
        ],
    },
    {
        title: "Grievance Redressal Committee",
        items: [
            "Members of Grievance Redressal Committee",
            "Minutes of Meeting of Grievance Redressal Committee (A.Y. 2023-2024 to A.Y. 2024-25)",
            "Minutes of Meeting of Grievance Redressal Committee (A.Y. 2022-2023 to A.Y. 2017-18)"
        ],
    },

    {
        title: "Internal Compliant Committee",
        items: ["Members of Internal Complaint Committee", "Minutes of Meeting of Internal Complaint Committee A.Y. 2023-24 to A.Y. 2024-2025)", "Minutes of Meeting of Internal Complaint Committee A.Y. 2017-18 to A.Y.2022-2023)"],
    },
    {
        title: "Anti-Ragging Committee",
        items: ["Members of Anti Ragging Committee", "Minutes of Meeting of Anti Ragging Committee (A.Y. 2023-24 to A.Y.2024-25)", "Minutes of Meeting of Anti Ragging Committee (A.Y. 2016-17 to A.Y.2022-23)"],
    },
];





export default function AccordionCommittees() {

    const [showForm, setShowForm] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    const [selectedContent, setSelectedContent] = useState(
        "Advisory Committee for Equal Opportunity and SC / ST Committee"
    );


    const [selectedYear, setSelectedYear] = useState(
        Object.keys(advisoryCommitteeDataByYear)[0]
    );
    // default year

    const toggleAccordion = (index) => {
        setActiveIndex((prev) => (prev === index ? null : index));
    };

    const handleItemClick = (item) => {
        setSelectedContent(item);
    };

    const renderSelectedContent = () => {
        if (selectedContent === "Members of Minority Cell") {
            const years = Object.keys(minorityCellDataByYear);

            return (
                //styles from Education-Policies.css
                <div className="Education-Policies-container common-section">
                    
                    <h3 className="page-title">Members of Minority Cell</h3> 

                    {/* Year Selector */}
                    <div style={{ marginBottom: "16px" }}>
                        {years.map((year) => (
                            <button
                                key={year}
                                onClick={() => setSelectedYear(year)}
                                style={{
                                    marginRight: "8px",
                                    marginTop: "6px",
                                    padding: "10px 12px",
                                    backgroundColor:
                                        selectedYear === year ? "#15477A" : "#f1f5f9",
                                    color: selectedYear === year ? "#fff" : "#15477A",
                                    border: "none",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                }}
                            >
                                {year}
                            </button>
                        ))}
                    </div>

                    {/* Table */}
                    <table className="responsive-table">
                        <thead>
                            <tr>
                                <th>Sr. No.</th>
                                <th>Name of the Official</th>
                                <th>Designation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {minorityCellDataByYear[selectedYear].map((member) => (
                                <tr key={member.no}>
                                    <td>{member.no}</td>
                                    <td>{member.name}</td>
                                    <td>{member.designation}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        }

        if (

            selectedContent ===
            "Advisory Committee for Equal Opportunity and SC / ST Committee"
        ) {
            const years = Object.keys(advisoryCommitteeDataByYear);

            return (
                <div className="table-container">
                    <h3 className="governing-title">Members of SC / ST Committee</h3>

                    {/* Year Selector */}
                    <div style={{ marginBottom: "16px" }}>
                        {years.map((year) => (
                            <button
                                key={year}
                                onClick={() => setSelectedYear(year)}
                                style={{
                                    marginRight: "8px",
                                    marginTop: "6px",
                                    padding: "10px 12px",
                                    backgroundColor:
                                        selectedYear === year ? "#15477A" : "#f1f5f9",
                                    color: selectedYear === year ? "#fff" : "#15477A",
                                    border: "none",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                }}
                            >
                                {year}
                            </button>
                        ))}
                    </div>

                    {/* Table */}
                    <table className="responsive-table">
                        <thead>
                            <tr>
                                <th>Sr. No.</th>
                                <th>Name of the Official</th>
                                <th>Designation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {advisoryCommitteeDataByYear[selectedYear].map((member) => (
                                <tr key={member.no}>
                                    <td>{member.no}</td>
                                    <td>{member.name}</td>
                                    <td>{member.designation}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );


        }

        if (selectedContent === "Members of Grievance Redressal Committee") {
            const years = Object.keys(grievanceCommitteeDataByYear);

            return (
                <div className="table-container">
                    <h3 className="governing-title">Members of Grievance Redressal Committee</h3>

                    {/* Year Selector */}
                    <div style={{ marginBottom: "16px" }}>
                        {years.map((year) => (
                            <button
                                key={year}
                                onClick={() => setSelectedYear(year)}
                                style={{
                                    marginRight: "8px",
                                    padding: "10px 12px",
                                    marginTop: "6px",
                                    backgroundColor: selectedYear === year ? "#15477A" : "#f1f5f9",
                                    color: selectedYear === year ? "#fff" : "#15477A",
                                    border: "none",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                }}
                            >
                                {year}
                            </button>
                        ))}
                    </div>

                    {/* Table */}
                    <table className="responsive-table">
                        <thead>
                            <tr>
                                <th>Sr. No.</th>
                                <th>	Position as per AICTE</th>
                                <th>Member</th>
                                <th>Designation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {grievanceCommitteeDataByYear[selectedYear].map((member) => (
                                <tr key={member.no}>
                                    <td>{member.no}</td>
                                    <td>{member.position}</td>
                                    <td>{member.name}</td>
                                    <td>{member.designation}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        }

        if (selectedContent === "Members of Internal Complaint Committee") {
            const years = Object.keys(internalCompliantCommitteeDataByYear);

            return (
                <div className="table-container">
                    <h3 className="governing-title">Members of Internal Compliant Committee</h3>

                    {/* Year Selector */}
                    <div style={{ marginBottom: "16px" }}>
                        {years.map((year) => (
                            <button
                                key={year}
                                onClick={() => setSelectedYear(year)}
                                style={{
                                    marginRight: "8px",
                                    marginTop: "6px",
                                    padding: "10px 12px",
                                    backgroundColor:
                                        selectedYear === year ? "#15477A" : "#f1f5f9",
                                    color: selectedYear === year ? "#fff" : "#15477A",
                                    border: "none",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                }}
                            >
                                {year}
                            </button>
                        ))}
                    </div>

                    {/* Table */}
                    <table className="responsive-table">
                        <thead>
                            <tr>
                                <th>Sr. No.</th>
                                <th>Position as per AICTE</th>
                                <th>Member</th>
                                <th>Designation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(internalCompliantCommitteeDataByYear[selectedYear] || []).map((member) => (
                                <tr key={member.no}>
                                    <td>{member.no}</td>
                                    <td>{member.position}</td>
                                    <td>{member.name}</td>
                                    <td>{member.designation}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            );
        }

        if (selectedContent === "Members of Anti Ragging Committee") {
            const years = Object.keys(antiRaggingCommitteeDataByYear);

            return (
                <div className="table-container">
                    <h3 className="governing-title">Members of Anti Ragging Committee</h3>

                    {/* Year Selector */}
                    <div style={{ marginBottom: "16px" }}>
                        {years.map((year) => (
                            <button
                                key={year}
                                onClick={() => setSelectedYear(year)}
                                style={{
                                    marginRight: "8px",
                                    marginTop: "6px",
                                    padding: "10px 12px",
                                    backgroundColor: selectedYear === year ? "#15477A" : "#f1f5f9",
                                    color: selectedYear === year ? "#fff" : "#15477A",
                                    border: "none",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                }}
                            >
                                {year}
                            </button>
                        ))}
                    </div>

                    {/* Table */}
                    <table className="responsive-table">
                        <thead>
                            <tr>
                                <th>Sr. No.</th>
                                <th>Position as per AICTE</th>
                                <th>Member</th>
                                <th>Designation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(antiRaggingCommitteeDataByYear[selectedYear] || []).map((member) => (
                                <tr key={member.no}>
                                    <td>{member.no}</td>
                                    <td>{member.position}</td>
                                    <td>{member.name}</td>
                                    <td>{member.designation}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        }




        return <p>{selectedContent}</p>;
    };

    return (
        <>
            <Navbar setShowForm={setShowForm} />
            {showForm && <BrochureForm setShowForm={setShowForm} />}
            <CTAButtons />

            <h2 className="section-heading">Committee Panel</h2>

            <div className="container-cs">
                <div className="sidebar">
                    {committeeData.map((section, index) => (
                        <div key={index} className="accordion-section">
                            <button
                                className="accordion-title"
                                onClick={() => toggleAccordion(index)}
                            >
                                {section.title}
                                <span>{activeIndex === index ? "−" : "+"}</span>
                            </button>
                            {activeIndex === index && (
                                <div className="accordion-content">
                                    {section.items.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className={`accordion-item ${selectedContent === item ? "active" : ""}`}
                                            onClick={() => handleItemClick(item)}
                                        >
                                            {item}
                                        </div>

                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="dynamic-panel">{renderSelectedContent()}</div>
            </div>

            <Footer />
        </>
    );
}
