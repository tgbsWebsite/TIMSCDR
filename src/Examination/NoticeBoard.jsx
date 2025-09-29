import React, { useState } from "react";
import "./noticeboard.css";
import Footer from "../components/Footer";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Navbar from "../components/navbar";
import PageHeader from "../about/PageHeader";

// 1) Data arrays
const ACADEMICS = [
  {
    text: "University & Institute Toppers in 2nd Half 2024 MCA Exam",
    href: "https://www.timscdrmumbai.in/wp-content/uploads/2025/03/Document-83-2.pdf",
  },
  {
    text: "University and Institute Toppers of First Half 2023",
    href: "https://timscdrmumbai.in/wp-content/uploads/2024/03/Toppers-First-Half-2023.pdf",
  },
  {
    text: "Institute Toppers of TIMSCDR in Second Half 2023 MCA Sem. lll Examination",
    href: "https://www.timscdrmumbai.in/wp-content/uploads/2024/06/Institute-Topper.pdf",
  },
  {
    text: "University & Institute Topper of TIMSCDR in First half 2022 MCA Examination (MCA 3 Years)",
    href: "https://timscdrmumbai.in/wp-content/uploads/2022/12/Topper-F2022.pdf",
  },
  {
    text: "University & Institute Topper of TIMSCDR in First half 2022 MCA Examination",
    href: "https://timscdrmumbai.in/wp-content/uploads/2022/12/Topper-Notice-2.pdf",
  },
  {
    text: "University & Institute Toppers of TIMSCDR in First Half 2021 MCA Examination",
    href: "https://timscdrmumbai.in/wp-content/uploads/2021/11/Notice-No.-33-2021.pdf",
  },
  {
    text: "University & Institute Topper of TIMSCDR in second half 2021 for Sem – III and Sem – V MCA Examination",
    href: "https://timscdrmumbai.in/wp-content/uploads/2022/06/Topper-notice.pdf",
  },
  {
    text: "University & Institute Toppers of TIMSCDR in May 2019 examination (MCA Batch 2016-2019 (Choice Based) & Choice Based IV)",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/University-Institute-Toppers-of-TIMSCDR-in-May-2019-examination-MCA-Batch-2016-2019-choice-Based-choise-Based-IV.pdf",
  },
  {
    text: "University Toppers of TIMSCDR in May 2019 Examination(Choice Based Sem II)",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/University-Toppers-of-TIMSCDR-in-May-2O19-Examination.pdf",
  },
  {
    text: "University & Institute Toppers of TIMSCDR in December 2019 Examination",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/University-Institute-Toppers-of-TIMSCDR-in-December-2019-Examination.pdf",
  },
  {
    text: "CGPI to percentage conversion",
    href: "https://timscdrmumbai.in/wp-content/uploads/2022/10/1-CGPI-to-Percentage-APPLICABLE-TO-MCA.pdf",
  },
  {
    text: "MCA Manual on CBCGS",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/MCA_Manual_on_CBCGS.pdf",
  },
  {
    text: "Manual on grading system",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/Manual_on_grading_system.pdf",
  },
  {
    text: "University of Mumbai – MCA 3 year course to 2 year course Ammendment Notice",
    href: "https://timscdrmumbai.in/wp-content/uploads/2022/10/5-UOM-MCA-3-yr-to-2-Yr-ammendment-notice.pdf",
  },
];

const EXAMINATIONS = [
  {
    text: "Collection of Hall Ticket for MCA Sem. III KT (Autonomous) Examination",
    href: "https://www.timscdrmumbai.in/wp-content/uploads/2025/06/Collection_Hall_Ticket.pdf",
  },
  {
    text: "Collection of Hall Ticket for MCA Sem. I KT (Autonomous) Examination",
    href: "http://mca sem. i kt (autonomous) examination/",
  },
  {
    text: "Submission of KT Exam Form of Sem – I, II, III, IV First half 2025",
    href: "https://www.timscdrmumbai.in/wp-content/uploads/2025/03/notice.pdf",
  },
  {
    text: "End Semester Supplementary Oral Practical Exam Sem – I",
    href: "https://www.timscdrmumbai.in/wp-content/uploads/2025/03/Document-84.pdf",
  },
  {
    text: "Time table of MSE Supplementary Exam of MCA Sem – I",
    href: "https://www.timscdrmumbai.in/wp-content/uploads/2025/03/Document-81-1.pdf",
  },
  {
    text: "Submission of Online Revaluation and Photocopy Form for Second Half 2024",
    href: "https://www.timscdrmumbai.in/wp-content/uploads/2025/03/Notice-Sem-II-KT-REVALUATION.pdf",
  },
  {
    text: "Collection of Hall Ticket of MCA Bridge Course Exam",
    href: "https://www.timscdrmumbai.in/wp-content/uploads/2025/03/NOTICES-1.pdf",
  },
  {
    text: "Submission of Online Revaluation and Photocopy Form for First Half 2024",
    href: "https://www.timscdrmumbai.in/wp-content/uploads/2025/03/NOTICES-2.pdf",
  },
  {
    text: "Submission of Exam Form of Bridge Course Exam for 2nd Half 2024",
    href: "https://www.timscdrmumbai.in/wp-content/uploads/2025/03/NOTICES-3.pdf",
  },
  {
    text: "Submission of Offline Exam Form for Sem – I to IV KT Exam 2nd Half 2024",
    href: "https://www.timscdrmumbai.in/wp-content/uploads/2024/10/Exam-Form-Notice.pdf",
  },
  {
    text: "Collection of Marksheet Sem – IV",
    href: "https://www.timscdrmumbai.in/wp-content/uploads/2024/10/Marksheet-Collection-22-24.pdf",
  },
  {
    text: "Collection of Marksheet Sem – I KT and Revaluation",
    href: "https://www.timscdrmumbai.in/wp-content/uploads/2024/10/MarksheetCollection_Sem-I.pdf",
  },
  {
    text: "Submission of Online Revaluation Form for First Half 2024",
    href: "https://timscdrmumbai.in/wp-content/uploads/2024/08/Online-Revel-Form.pdf",
  },
  {
    text: "Collection of Marksheet Second Half 2023",
    href: "https://timscdrmumbai.in/wp-content/uploads/2024/08/Marksheet-Collection.pdf",
  },
  {
    text: "Sem – II Practical Examination Time Table June 2024",
    href: "https://timscdrmumbai.in/wp-content/uploads/2024/06/Sem-2-Time-Table.pdf",
  },
  {
    text: "Submission of Online Exam Forms of Bridge Course for First Half 2024",
    href: "https://timscdrmumbai.in/wp-content/uploads/2024/06/bridge-exam-forms-notice.pdf",
  },
  {
    text: "Collection of Hall Tickets for First Half 2024 (Sem – 3 KT)",
    href: "https://timscdrmumbai.in/wp-content/uploads/2024/06/Collection-of-Hall-Tickets-SEM-3-KT.pdf",
  },
  {
    text: "Submission of Online Revaluation & Photocopv forms (S.H.2023)",
    href: "https://timscdrmumbai.in/wp-content/uploads/2024/06/Online-revaluation.pdf",
  },
  {
    text: "Notice : Collection of Sem – II KT Hall Tickets of Second Half 2022 Exam",
    href: "https://timscdrmumbai.in/wp-content/uploads/2024/01/Collection-of-Hall-Tickets.pdf",
  },
  {
    text: "Notice : Collection of Sem – I and III Regular and Sem – II KT Marksheet of Second Half 2022 Exam",
    href: "https://timscdrmumbai.in/wp-content/uploads/2023/11/Collection-of-Marksheet.pdf",
  },
  {
    text: "Sem – I Toppers of Second Half 2022",
    href: "https://timscdrmumbai.in/wp-content/uploads/2023/11/Sem-1-Toppers.pdf",
  },
  {
    text: "Notice : Sem – I (Regular) & Sem. II (KT) Hall Ticket Distribution",
    href: "https://timscdrmumbai.in/wp-content/uploads/2023/03/Sem.-I-HALL-TICKETS.pdf",
  },
  {
    text: "Sem – I Theory Exam Schedule",
    href: "https://timscdrmumbai.in/wp-content/uploads/2023/03/3-Sem-I-Reg-Schedule-1T00161_SH22.pdf",
  },
  {
    text: "Sem – II KT Theory Exam Schedule",
    href: "https://timscdrmumbai.in/wp-content/uploads/2023/03/3-Sem-II-KT-Schedule-1T00162_SH22.pdf",
  },
  {
    text: "Sem – I Bridge Course Theory Exam Schedule",
    href: "https://timscdrmumbai.in/wp-content/uploads/2023/03/Sem-1-Bridge-Course.pdf",
  },
  {
    text: "Notice – Sem – I Oral, Practical Exam Schedule (Batch 2022-24)",
    href: "https://timscdrmumbai.in/wp-content/uploads/2023/03/Sem-I-practical-exam.pdf",
  },
  {
    text: "Notice – Oral, Practical & Theory Exams Commencement Dates for Sem I (Batch 2022-24)",
    href: "https://timscdrmumbai.in/wp-content/uploads/2023/03/8-Notice-SEM-1-University-Exam-Commencement.pdf",
  },
  {
    text: "Notice : Collection of Sem – IV Examination Marksheet and Certificate",
    href: "https://timscdrmumbai.in/wp-content/uploads/2023/01/Collection-of-Sem-IV-marksheet.pdf",
  },
  {
    text: "Notice :  Sem – III Hall Tickets Distribution",
    href: "https://timscdrmumbai.in/wp-content/uploads/2023/03/Sem.-III-HALL-TICKETS.pdf",
  },
  {
    text: "Sem – III Theory Exam Schedule",
    href: "https://timscdrmumbai.in/wp-content/uploads/2023/03/3-Sem-III-Reg-Schedule-1T00163_SH22.pdf",
  },
  {
    text: "Notice : Theory Exam Pattern for SH 2022 Exam",
    href: "https://timscdrmumbai.in/wp-content/uploads/2023/03/5-Written-exam-pattern.pdf",
  },
  {
    text: "Notice -Dates of submission of offline exam forms for SEM II KT Exam",
    href: "https://timscdrmumbai.in/wp-content/uploads/2022/11/IMG_20221123_0002.pdf",
  },
  {
    text: "Notice – Sem – III Oral, Practical Exam Schedule (Batch 2021-23)",
    href: "https://timscdrmumbai.in/wp-content/uploads/2023/03/Sem-3-Oral-Practical-Exam.pdf",
  },
  {
    text: "Notice – Oral, Practical & Theory Exams Commencement Dates for Sem III (Batch 2021-23)",
    href: "https://timscdrmumbai.in/wp-content/uploads/2023/03/4-Sem-3-PracticalCommencement-SubmissionDates.pdf",
  },
  {
    text: "Notice – Return of Marksheet for Correction for Sem – I (SH 2021)",
    href: "https://timscdrmumbai.in/wp-content/uploads/2022/09/20220912171327-2.pdf",
  },
  {
    text: "Notice – Collection of Marksheet for Sem – I (SH 2021)",
    href: "https://timscdrmumbai.in/wp-content/uploads/2022/09/20220912171327-1.pdf",
  },
  {
    text: "Notice – Collection of Marksheet for Sem – III and Sem – V (SH 2021)",
    href: "https://timscdrmumbai.in/wp-content/uploads/2022/09/20220912171327-1.pdf",
  },
  {
    text: "Notice-Internal Examination (Bridge Course)",
    href: "https://timscdrmumbai.in/wp-content/uploads/2022/03/Bridge-internal-exam-notice.pdf",
  },
  {
    text: "Notice-Dates for submission of online exam form of bridge Course examination for 2nd half 2021",
    href: "https://timscdrmumbai.in/wp-content/uploads/2022/03/Bridge-exam-form-notice.pdf",
  },
  {
    text: "Notice-MCA Timetable of Sem. II (KT)",
    href: "https://timscdrmumbai.in/wp-content/uploads/2021/12/20211207170127-rotated-rotated-rotated-1.pdf",
  },
  {
    text: "Notice-MCA sem-V (Regular)december 2021 examination",
    href: "https://timscdrmumbai.in/wp-content/uploads/2021/12/notice-39-2021-scaled.jpg",
  },
  { text: "Sem II University Theory Exam Notice & Guidelines", href: "" },
  {
    text: "Sem II Bridge Course Exam Timetable",
    href: "https://timscdrmumbai.in/wp-content/uploads/2021/08/Sem-2-Bridge-UOM-Exam-Timetable.pdf",
  },
  {
    text: "Sem II University Exam Timetable",
    href: "https://timscdrmumbai.in/wp-content/uploads/2021/08/Sem-II-UOM-Exam-Timetable.pdf",
  },
  {
    text: "Sem II Oral, Practical Exam Schedule",
    href: "https://timscdrmumbai.in/wp-content/uploads/2021/08/Sem-II-OR-PR-Schedule.pdf",
  },
  {
    text: "Sem II Oral, Practical Exam Notice & Guidelines",
    href: "https://timscdrmumbai.in/wp-content/uploads/2021/08/Sem-2-OR-PR-Notice-Guidelines.pdf",
  },
  {
    text: "Notice-Oral,Practical & Theory exam-sem II",
    href: "https://timscdrmumbai.in/wp-content/uploads/2021/07/TIMSCDR-notice-no-04-2021.jpg",
  },
  {
    text: "2021 Sem VI-Blackbook & Research Paper Submission Notice & Guidelines",
    href: "https://timscdrmumbai.in/wp-content/uploads/2021/06/2021-Sem-VI-Blackbook-Research-Paper-Submission-Notice-Guidelines.pdf",
  },
  {
    text: "Sem IV Second Internal Exam notice",
    href: "https://timscdrmumbai.in/wp-content/uploads/2021/05/5-Sem-IV-Internal-Exam-notice.pdf",
  },
  {
    text: "Commencement of Online Lectures for MCA Sem – II",
    href: "https://timscdrmumbai.in/wp-content/uploads/2021/05/Notice.pdf",
  },
  {
    text: "MCA Sem. I Timetable May 2021",
    href: "https://timscdrmumbai.in/wp-content/uploads/2021/05/2021-Timetable-I.pdf",
  },
  {
    text: "MCA Sem. II Timetable May 2021",
    href: "https://timscdrmumbai.in/wp-content/uploads/2021/05/2021-Timetable-II.pdf",
  },
  {
    text: "MCA Sem. III Timetable May 2021",
    href: "https://timscdrmumbai.in/wp-content/uploads/2021/05/2021-Timetable-III.pdf",
  },
  {
    text: "MCA Sem. IV Timetable May 2021",
    href: "https://timscdrmumbai.in/wp-content/uploads/2021/05/2021-Timetable-IV.pdf",
  },
  {
    text: "MCA Sem. V Timetable May 2021",
    href: "https://timscdrmumbai.in/wp-content/uploads/2021/05/2021-Timetable-V.pdf",
  },
  {
    text: "MCA Sem. I April 2021 Regular & Bridge course examination",
    href: "https://timscdrmumbai.in/wp-content/uploads/2021/05/Notice-Sem-I-exam-Final-1.pdf",
  },
  {
    text: "Guideline for Oral-Practical Examination for Semester-IV(Batch 2019-22)",
    href: "https://timscdrmumbai.in/wp-content/uploads/2021/05/Sem-IV-OR-PR-Notice.pdf",
  },
  {
    text: "Notice-Sem I exam Final",
    href: "https://timscdrmumbai.in/wp-content/uploads/2021/04/Notice-Sem-I-exam-Final-2021.pdf",
  },
  {
    text: "Rescheduling of Oral & Practical exam",
    href: "https://timscdrmumbai.in/wp-content/uploads/2021/04/Rescheduling-of-Oral-Practical-exam-apr-21.pdf",
  },
  {
    text: "University Theory Exam Schedule Sem 1",
    href: "https://timscdrmumbai.in/wp-content/uploads/2021/04/University-Theory-Exam-Schedule-Sem-1-Apr-21.pdf",
  },
  {
    text: "UOM Theory Exam Schedule Sem 1",
    href: "https://timscdrmumbai.in/wp-content/uploads/2021/04/UOM-Theory-Exam-Schedule-Sem-1-Bridge-Apr-21.pdf",
  },
  {
    text: "Oral-Practical-Theory Sem I notice",
    href: "https://timscdrmumbai.in/wp-content/uploads/2021/04/Oral-Practical-Theory-Sem-I-notice-Apr-21.pdf",
  },
  {
    text: "Oral-Practical Schedule-Guidelines- Sem 1",
    href: "https://timscdrmumbai.in/wp-content/uploads/2021/04/Oral-Practical-Schedule-Guidelines-Sem-1-April-21.pdf",
  },
  {
    text: "Oral Practical Sem I",
    href: "https://timscdrmumbai.in/wp-content/uploads/2021/04/Oral-Practical-Sem-I-Apr-2021.pdf",
  },
  {
    text: "First Internal examination scheduled from 8 March 2021 to 10 March 2021",
    href: "https://timscdrmumbai.in/wp-content/uploads/2021/03/First-Internal-examination-scheduled-from-8-March-2021-to-10-March-2021.pdf",
  },
  {
    text: "University online KT Exam(Dec 2020 – SH 2020)(from 18 Dec 2020 – 30 Dec 2020) – M.C.A. (Sem. I KT)",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/11/University-online-KT-ExamDec-2020-SH-2020-for-sem-I.pdf",
  },
  {
    text: "University online KT Exam(Dec 2020 – SH 2020) – M.C.A. (Sem. II KT)",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/11/University-online-KT-ExamDec-2020-SH-2020-for-sem-II.pdf",
  },
  {
    text: "University online KT Exam(Dec 2020 – SH 2020) – M.C.A. (Sem. IV KT)",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/11/University-online-KT-ExamDec-2020-SH-2020-for-sem-IV.pdf",
  },
  {
    text: "University online KT Exam(Dec 2020 – SH 2020) – M.C.A. (Sem. VI KT)",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/11/University-online-KT-ExamDec-2020-SH-2020-for-sem-VI.pdf",
  },
  {
    text: "University online Regular exam schedule(Dec 2020- SH2020) – M.C.A. (Sem. III Regular)",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/11/University-online-Regular-exam-scheduleDec-2020-SH2020-for-sem-III.pdf",
  },
  {
    text: "University online Regular exam schedule(Dec 2020- SH2020) – M.C.A. (Sem. V Regular)",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/11/University-online-Regular-exam-scheduleDec-2020-SH2020-for-sem-V.pdf",
  },
  {
    text: "Practical exam KT & Regular (Dec 2020 & May 2020) – M.C.A. (Sem. I KT)",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/11/Practical-exam-KT-Regular-Dec-2020-May-2020-for-sem-1-KT.pdf",
  },
  {
    text: "Practical exam KT & Regular (Dec 2020 & May 2020) – M.C.A. (Sem. III Regular & KT)",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/11/Practical-exam-KT-Regular-Dec-2020-May-2020-for-sem-III-regular-KT.pdf",
  },
  {
    text: "Practical exam KT & Regular (Dec 2020 & May 2020) – M.C.A. (Sem. V Regular)",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/11/Practical-exam-KT-Regular-Dec-2020-May-2020-sem-V-Regular.jpg",
  },
  {
    text: "University online special KT exam schedule (May 2020 – FH2020) – M.C.A. (Sem. I KT)",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/11/University-KT-exam-schedule-May-2020-FH2020-for-sem-I.pdf",
  },
  {
    text: "University online special KT exam schedule (May 2020 – FH2020) – M.C.A. (Sem. II KT)",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/11/University-KT-exam-schedule-May-2020-FH2020-for-sem-II.pdf",
  },
  {
    text: "University online special KT exam schedule (May 2020 – FH2020) – M.C.A. (Sem. III KT)",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/11/University-KT-exam-schedule-May-2020-FH2020-for-sem-III.pdf",
  },
  {
    text: "University online special KT exam schedule (May 2020 – FH2020) – M.C.A. (Sem. IV KT)",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/11/University-KT-exam-schedule-May-2020-FH2020-for-sem-IV.pdf",
  },
  {
    text: "Second lnternal Examinations 2020.",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/11/Second-lnternal-Examinations-2020.pdf",
  },
  {
    text: "Practical Exams 2020.",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/11/Practical-Exams-2020.pdf",
  },
  {
    text: "University Theory Exams 2020.",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/11/University-Theory-Exams-2020.pdf",
  },
  {
    text: "collection of 2nd half examination marksheets.",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/10/collection-of-2nd-half-examination-marksheets-oct-20-scaled.jpg",
  },
  {
    text: "List of provisional student.",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/10/List-of-provisional-student-oct-2020.pdf",
  },
  {
    text: "Guideline for First lnternal Examinations.",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/10/First-lnternal-Examinations-guideline.pdf",
  },
  {
    text: "Examination Time tables for University written examination to be held in FH 2020(MAY 2020). – M.C.A. (Sem. I)(Choice Based)",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/Sem.-I-CHOICE-FH-2020.pdf",
  },
  {
    text: "Examination Time tables for University written examination to be held in FH 2020(MAY 2020). – M.C.A. (Sem. II)(Choice Based)",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/Sem.-II-CHOICE-FH-2020.pdf",
  },
  {
    text: "Examination Time tables for University written examination to be held in FH 2020(MAY 2020). – M.C.A. (Sem. III)(Choice Based)",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/Sem.-III-CHOICE-FH-2020.pdf",
  },
  {
    text: "Examination Time tables for University written examination to be held in FH 2020(MAY 2020). – M.C.A. (Sem. IV) (Choice Based)",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/Sem.-IV-CHOICE-FH-2020.pdf",
  },
  {
    text: "Examination Time tables for University written examination to be held in FH 2020(MAY 2020). – M.C.A. (Sem. V)(Choice Base)",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/Sem.-V-CHOICE-FH-2020.pdf",
  },
  {
    text: "Submission of Online Revaluation & Photocopy forms",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/Submission-of-Online-Revaluation-Photocopy-forms-feb-2020.pdf",
  },
  {
    text: "Collection of Revatuation Marksheets (1st Half 2019).",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/Collection-of-Revatuation-Marksheets-1st-Half-2019.pdf",
  },
  {
    text: "Collection of Hall Tickets for sem II.",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/Collection-of-Hall-Tickets-for-sem-II.pdf",
  },
  {
    text: "Collection of Hall Tickets for sem I & sem III.",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/Collection-of-Hall-Tickets-for-sem-I-sem-III.pdf",
  },
  {
    text: "Collection of Hall Tickets – nov 19",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/Collection-of-Hall-Tickets-nov-19.pdf",
  },
  {
    text: "Circular for Exemption in Exam fees",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/Circular-for-Exemption-in-Exam-fees.pdf",
  },
  {
    text: "Practical exam schedule for SEM 1(choice based), SEM 6(choice based)",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/Practical-exam-schedule-for-SEM-1choice-based-SEM-6choice-based.pdf",
  },
  {
    text: "Examination Time tables for University written examination to be held in SH2019(Nov – Dec 2019). – M.C.A. (Sem. I)(Choice Based)",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/M.C.A.-Sem.-IChoice-Based.pdf",
  },
  {
    text: "Examination Time tables for University written examination to be held in SH2019(Nov – Dec 2019). – M.C.A. (Sem. II)(Choice Based)",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/M.C.A.-Sem.-IIChoice-Based.pdf",
  },
  {
    text: "Examination Time tables for University written examination to be held in SH2019(Nov – Dec 2019). – M.C.A. (Sem. III)(Choice Based)",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/M.C.A.-Sem.-IIIChoice-Based.pdf",
  },
  {
    text: "Examination Time tables for University written examination to be held in SH2019(Nov – Dec 2019). – M.C.A. (Sem. IV) (Choice Based)",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/M.C.A.-Sem.-IV-Choice-Based.pdf",
  },
  {
    text: "Examination Time tables for University written examination to be held in SH2019(Nov – Dec 2019). – M.C.A. (Sem. V)(Choice Base) (R-2018-19)",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/M.C.A.-Sem.-V-Choice-Base-R-2018-19.pdf",
  },
  {
    text: "University Practical Examination November 2019 for sem III & sem IV",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/University-Practical-Examination-November-2019-for-sem-III-sem-IV.pdf",
  },
  {
    text: "University Practical Examination November 2019 for sem V & sem II",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/University-Practical-Examination-November-2019-for-sem-V-sem-II.pdf",
  },
  {
    text: "Online exam forms submission of Sem VI KT (Choice Base) exam forms for 2nd Half 2019",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/Online-exam-forms-submission-of-Sem-VI-KT-Choice-Base-exam-forms-for-2nd-Half-2019.pdf",
  },
  {
    text: "MCA(VI) online form cicular SH 2019",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/MCAVI-online-form-cicular-SH-2019.pdf",
  },
  {
    text: "Online & hard copy of exams froms submission of KT exam forms for 2nd half 2019 new",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/Online-hardcopy-of-exams-froms-submission-of-KT-exam-forms-for-2nd-half-2019-new.pdf",
  },
  {
    text: "Online & hard copy of exams froms submission of KT exam forms for 2nd half 2019",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/Online-hardcopy-of-exams-froms-submission-of-KT-exam-forms-for-2nd-half-2019.pdf",
  },
  {
    text: "Collection of 1st Half 2019 Examination Marksheets.",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/Collection-of-1st-Half-2019-Examination-Marksheets.pdf",
  },
  {
    text: "Submission of Revalution & Photocopy forms for Semester- III & IV CBCGS (Regular & KT) of 1st half 2019 examination",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/Submission-of-Revalution-Photocopy-forms-for-Semester-III-IV-CBCGSRegular-KT-of-1st-half-2019-examination.pdf",
  },
  {
    text: "Summer – Proiect (Mini Proiect)",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/Summer-Proiect-Mini-Proiect.pdf",
  },
  {
    text: "Examination Time tables for University written examination to be held in FH2019 (May 2019). – MCA-CBSGS-Sem I",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/MCA-CBSGS-Sem-I.pdf",
  },
  {
    text: "Examination Time tables for University written examination to be held in FH2019 (May 2019). – MCA-CBSGS-Sem II",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/MCA-CBSGS-Sem-II.pdf",
  },
  {
    text: "Examination Time tables for University written examination to be held in FH2019 (May 2019). – MCA-CBSGS-Sem III",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/MCA-CBSGS-Sem-III.pdf",
  },
  {
    text: "Examination Time tables for University written examination to be held in FH2019 (May 2019). – MCA-CBSGS-Sem IV",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/MCA-CBSGS-Sem-IV.pdf",
  },
  {
    text: "Examination Time tables for University written examination to be held in FH2019 (May 2019). – MCA-CBSGS-Sem V",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/MCA-CBSGS-Sem-V.pdf",
  },
  {
    text: "Examination Time tables for University written examination to be held in FH2019 (May 2019). – MCA-Choice-Sem I",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/MCA-Choice-Sem-I.pdf",
  },
  {
    text: "Examination Time tables for University written examination to be held in FH2019 (May 2019). – MCA-Choice-Sem II",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/MCA-Choice-Sem-II.pdf",
  },
  {
    text: "Examination Time tables for University written examination to be held in FH2019 (May 2019). – MCA-Choice-Sem III",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/MCA-Choice-Sem-III.pdf",
  },
  {
    text: "Examination Time tables for University written examination to be held in FH2019 (May 2019). – MCA-Choice-Sem IV",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/MCA-Choice-Sem-IV.pdf",
  },
  {
    text: "Examination Time tables for University written examination to be held in FH2019 (May 2019). – MCA-Choice-Sem V",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/MCA-Choice-Sem-V.pdf",
  },
  {
    text: "Collection of Hall Tickets for 1st half 2019 examination",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/Collection-of-Hall-Tickets-for-1st-half-2019-examination.pdf",
  },
  {
    text: "Practical examination Time table for First Half 2019",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/Practical-examination-Time-table-for-FH2019.pdf",
  },
  {
    text: "Online submission of MCA Regular & KT exam forms for 1st half 2019",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/Online-submission-of-MCA-Regular-KT-exam-forms-for-1st-half-2019.pdf",
  },
  {
    text: "Circular MCA Practical Exam for First Half (Summer)-2019",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/Circular-MCA-Practical-Exam-for-First-Half-Summer-2019.jpg",
  },
];

const ADMISSIONS = [
  // No explicit admissions items in the provided list
];

const GENERAL = [
  {
    text: "University Convocation link for students name",
    href: "https://timscdrmumbai.in/wp-content/uploads/2021/12/IMG_0001.pdf",
  },
  {
    text: "Online verification link circular",
    href: "https://timscdrmumbai.in/wp-content/uploads/2021/12/online-verification-link-cirular.pdf",
  },
  {
    text: "University Helpline Number for Examination and Time Table related Queries in the scenario of COVID-19",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/Exam_Circular_2020.pdf",
  },
  {
    text: "Guidelines for ORAL-PRACTICAL Examination for Semester- lll(Batch 2020-22)",
    href: "https://timscdrmumbai.in/wp-content/uploads/2021/11/Notice-No.-32-2021.pdf",
  },
  {
    text: "Oral. Practical & Theorv exams for Sem. III (Bach 2020-2022)",
    href: "https://timscdrmumbai.in/wp-content/uploads/2021/11/Notice-No.-31-2021.pdf",
  },
  {
    text: "Oral, Practical & Theorv exams(Sem.-V)",
    href: "https://timscdrmumbai.in/wp-content/uploads/2021/11/Notice-No.-30-2021.pdf",
  },
  {
    text: "Guidelines for ORAL-PRACTICAL Examination for Semester- V(Batch 2019-22)",
    href: "https://timscdrmumbai.in/wp-content/uploads/2021/11/Notice-No.-29-2021.pdf",
  },
  {
    text: "Mini Proiect Submission (Sem-III)",
    href: "https://timscdrmumbai.in/wp-content/uploads/2021/11/NOTICE-No.-28-2021.pdf",
  },
  {
    text: "Notice-Online Theory Exam pattern for December 2021 examination",
    href: "https://timscdrmumbai.in/wp-content/uploads/2021/09/WhatsApp-Image-2021-09-29-at-14.40.26.jpeg",
  },
  {
    text: "2021 Sem VI-Blackbook & Research Paper Submission Notice & Guidelines",
    href: "https://timscdrmumbai.in/wp-content/uploads/2021/06/2021-Sem-VI-Blackbook-Research-Paper-Submission-Notice-Guidelines.pdf",
  },
  {
    text: "Survey form for Sem. I Students",
    href: "https://timscdrmumbai.in/wp-content/uploads/2021/04/Survey-form-for-Sem.-I-Students-Apr-21.pdf",
  },
  {
    text: "Collection Time of Marksheets",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/Collection-Time-of-Marksheets.pdf",
  },
  {
    text: "University circular of online revaluation",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/University-circular-of-online-revaluation.jpg",
  },
  {
    text: "Circular for Online Attestation and Verification System",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/12/Circular-for-Online-Attestation-and-Verification-System.jpg",
  },
  {
    text: "guidelines for Internship project.",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/guidelines-for-Internship-project.docx",
  },
  {
    text: "Project Certificate",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/ProjectCertificate-20.doc",
  },
  {
    text: "Seminar Certificate",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/Title-Page-Seminar-20.doc",
  },
  {
    text: "Title Page Project",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/Title-Page-Project-20.doc",
  },
  {
    text: "Title Page Seminar",
    href: "https://timscdrmumbai.in/wp-content/uploads/2020/08/Title-Page-Seminar-20.doc",
  },
];

const ARCHIVED = [
  // If you want items older than a certain year here, tell me the cutoff and I’ll move them verbatim.
];

const NoticeBoard = () => {
  const [sections, setSections] = useState({
    academics: true,
    examinations: true,
    admissions: true,
    general: true,
    archived: true,
  });
  const [showForm, setShowForm] = useState(false);

  const toggleSection = (name) => {
    setSections((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  // Icon paths (Freepik images placed in /public/assets/icons/)
const icons = {
  school: '/assets/education.svg',
  grading: '/assets/planning.svg',
  personAdd: '/assets/man.svg',
  campaign: '/assets/marketing.svg',
  archive: '/assets/archive.svg',
  folderOpen: '/assets/folder_16202912.svg',
  arrowRightAlt: '/assets/minus_11916053.svg',
  chevronDown: '/assets/arrow-down_4655002.svg',
};

  return (
    <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />

      <div className="nb-container">
        <PageHeader
               title="Notice Board"
               crumbs={[
                 { label: 'Home', href: '/' },
                 { label: 'Notice Board' }, // current page (no href)
               ]}
             />

        <div className="bg-custom-gray rounded shadow">
          <div className="grid-3-cols">
            {/* Left side: make entire left panel scrollable */}
            <div className="left-scroll col-span-2">
              <div className="grid-2-cols">
                {/* Academics */}
                <div>
                  <button
                    className="section-header"
                    onClick={() => toggleSection("academics")}
                  >
                    <h3 className="section-title border-orange">
                      <span className="icon-text orange">
                        <img
                          src={icons.school}
                          alt="Academics"
                          className="icon mr-3 orange-icon"
                        />
                        Academics
                      </span>
                      <img
                        src={icons.chevronDown}
                        alt=""
                        aria-hidden="true"
                        className={`icon toggle-icon ${
                          sections.academics ? "" : "rotated"
                        }`}
                      />
                    </h3>
                  </button>

                  {sections.academics && (
                    <div className="scroll-pane">
                      <ul className="section-list">
                        {ACADEMICS.map(({ text, href }, idx) => (
                          <li key={`acad-${idx}`}>
                            <a
                              href={href || "#"}
                              className="section-link orange-hover"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={icons.arrowRightAlt}
                                alt=""
                                aria-hidden="true"
                                className="icon mr-3 orange-icon"
                              />
                              <span>{text}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Examinations */}
                <div>
                  <button
                    className="section-header"
                    onClick={() => toggleSection("examinations")}
                  >
                    <h3 className="section-title border-teal">
                      <span className="icon-text teal">
                        <img
                          src={icons.grading}
                          alt="Examinations"
                          className="icon mr-3 teal-icon"
                        />
                        Examinations
                      </span>
                      <img
                        src={icons.chevronDown}
                        alt=""
                        aria-hidden="true"
                        className={`icon toggle-icon ${
                          sections.examinations ? "" : "rotated"
                        }`}
                      />
                    </h3>
                  </button>

                  {sections.examinations && (
                    <div className="scroll-pane">
                      <ul className="section-list">
                        {EXAMINATIONS.map(({ text, href }, idx) => (
                          <li key={`exam-${idx}`}>
                            <a
                              href={href || "#"}
                              className="section-link teal-hover"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={icons.arrowRightAlt}
                                alt=""
                                aria-hidden="true"
                                className="icon mr-3 teal-icon"
                              />
                              <span>{text}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Admissions */}
                <div>
                  <button
                    className="section-header"
                    onClick={() => toggleSection("admissions")}
                  >
                    <h3 className="section-title border-indigo">
                      <span className="icon-text indigo">
                        <img
                          src={icons.personAdd}
                          alt="Admissions"
                          className="icon mr-3 indigo-icon"
                        />
                        Admissions
                      </span>
                      <img
                        src={icons.chevronDown}
                        alt=""
                        aria-hidden="true"
                        className={`icon toggle-icon ${
                          sections.admissions ? "" : "rotated"
                        }`}
                      />
                    </h3>
                  </button>

                  {sections.admissions && (
                    <div className="scroll-pane">
                      <ul className="section-list">
                        {ADMISSIONS.map(({ text, href }, idx) => (
                          <li key={`adm-${idx}`}>
                            <a
                              href={href || "#"}
                              className="section-link indigo-hover"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={icons.arrowRightAlt}
                                alt=""
                                aria-hidden="true"
                                className="icon mr-3 indigo-icon"
                              />
                              <span>{text}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* General */}
                <div>
                  <button
                    className="section-header"
                    onClick={() => toggleSection("general")}
                  >
                    <h3 className="section-title border-pink">
                      <span className="icon-text pink">
                        <img
                          src={icons.campaign}
                          alt="General"
                          className="icon mr-3 pink-icon"
                        />
                        General
                      </span>
                      <img
                        src={icons.chevronDown}
                        alt=""
                        aria-hidden="true"
                        className={`icon toggle-icon ${
                          sections.general ? "" : "rotated"
                        }`}
                      />
                    </h3>
                  </button>

                  {sections.general && (
                    <div className="scroll-pane">
                      <ul className="section-list">
                        {GENERAL.map(({ text, href }, idx) => (
                          <li key={`gen-${idx}`}>
                            <a
                              href={href || "#"}
                              className="section-link pink-hover"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={icons.arrowRightAlt}
                                alt=""
                                aria-hidden="true"
                                className="icon mr-3 pink-icon"
                              />
                              <span>{text}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Archived (already scrollable list) */}
            <div className="border-left border-gray pl-8">
              <button
                className="section-header"
                onClick={() => toggleSection("archived")}
              >
                <h3 className="section-title border-green">
                  <span className="icon-text green">
                    <img
                      src={icons.archive}
                      alt="Archived"
                      className="icon mr-3 green-icon"
                    />
                    Archived Notices
                  </span>
                  <img
                    src={icons.chevronDown}
                    alt=""
                    aria-hidden="true"
                    className={`icon toggle-icon ${
                      sections.archived ? "" : "rotated"
                    }`}
                  />
                </h3>
              </button>

              {sections.archived && (
                <ul className="section-list archived-list">
                  {ARCHIVED.map(({ text, href }, idx) => (
                    <li key={`arc-${idx}`}>
                      <a
                        href={href || "#"}
                        className="section-link green-hover"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={icons.folderOpen}
                          alt=""
                          aria-hidden="true"
                          className="icon mr-3 green-icon small-icon"
                        />
                        <span className="small-text">{text}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NoticeBoard;
