// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//    <BrowserRouter>

//    </BrowserRouter>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import VisionMissionPage from "./about/VisionMission"; // Separate page component
import "./index.css";
import EducationPolicies from "./about/Education-Policies";
import ChairmanMessage from "./about/ChairmanMessage"; // Assuming this is the path to your ChairmanMessage component
import CeoMessage from "./about/ceo";
import DirectorMesage from "./about/director";
import Governing from "./about/governing";
import Advisory from "./about/advisory";
import AcademicCouncil from "./about/academic-council";
import DevelopmentCommittee from "./about/development-committee";
import IqacCommittee from "./about/IqacCommittee";
import CellCommittee from "./about/CellCommittee";
import NispPolicy from "./about/NispPolicy";
import MCAProgram from "./program/MCA";
import IntegratedMCAProgram from "./program/IntegratedMCA";
import ProfessionalMCAProgram from "./program/ProfessionalsMCA";
import PhdAccordion from "./program/PhdAccordion";
import ContactPage from "./contact/ContactPage";
import GrievanceForm from "./contact/GrievanceForm";
import Recruitment from "./contact/Recruitment";
import Employment from "./contact/Employment";
import NoticeBoard from "./Examination/NoticeBoard";
import MCAResults from "./Examination/UniversityGazette";
import ResultAnalysis from "./Examination/ResultAnalysis";
import Convocation from "./Examination/Convocation";
import Infrastructure from "./Facilities/Infrastructure";
import InfrastructureGallery from "./Facilities/InfrastructureGallery";
import DRC from "./Facilities/DRC";
import InfrastructureDFC from "./Facilities/DRC";
import LibraryPage from "./Facilities/LibraryPage";
import LibraryInfrastructure from "./Facilities/LibraryInfrastructure";
import LibraryHolding from "./Facilities/LibraryHolding";
import LibraryRules from "./Facilities/LibraryRules";
import IMCA_Admission from "./Admissions/IMCA_Admission";
import MCA_Admission from "./Admissions/MCA_Admission";
import MCA_WorkingProfessional from "./Admissions/MCA_WorkingProfessional";
import SeatDistribution from "./Admissions/SeatDistribution";
import FeesStructure from "./Admissions/FeesStructure";
import AdmissionNotifications from "./Admissions/AdmissionNotifications";
import AICTEApproval from "./Admissions/AICTEApproval";
import StudentHandbook from "./Admissions/StudentHandbook";
import StudentMentoring from "./Admissions/StudentMentoring";
import AntiRagging from "./Admissions/AntiRagging";
import ResearchCell from "./RD/ResearchCell";
import IIC from "./RD/IIC";
import ICAIM2025 from "./RD/ICAIMPage";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about/Vision-Mission" element={<VisionMissionPage />} />
      <Route path="/about/Education-Policies" element={<EducationPolicies />} />
      <Route path="/about/chairman-message" element={<ChairmanMessage />} />
      <Route path="/about/ceo-message" element={<CeoMessage />} />
      <Route path="/about/director-message" element={<DirectorMesage />} />
      <Route path="/about/governing-council" element={<Governing />} />
      <Route path="/about/advisory" element={<Advisory />} />
      <Route path="/about/academic-council" element={<AcademicCouncil />} />
      <Route
        path="/about/development-committee"
        element={<DevelopmentCommittee />}
      />
      <Route path="/about/iqac-committee" element={<IqacCommittee />} />
      <Route path="/about/cells-and-committees" element={<CellCommittee />} />
      <Route path="/about/nisp-policy" element={<NispPolicy />} />
      <Route path="/programs/mca-program" element={<MCAProgram />} />
      <Route
        path="/programs/integrated-mca"
        element={<IntegratedMCAProgram />}
      />
      <Route
        path="/programs/mca-working-professionals"
        element={<ProfessionalMCAProgram />}
      />
      <Route path="/programs/ph-d-admission" element={<PhdAccordion />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route
        path="/contact/student-grievance-redressal"
        element={<GrievanceForm />}
      />
      <Route path="/contact/recruitment" element={<Recruitment />} />
      <Route path="/contact/employee-handbook" element={<Employment />} />
      <Route path="/notice" element={<NoticeBoard />} />
      <Route path="/examination/university-gazette" element={<MCAResults />} />
      <Route path="/examination/result-analysis" element={<ResultAnalysis />} />
      <Route path="/examination/convocation" element={<Convocation />} />
      <Route path="/facilities/infrastructure" element={<Infrastructure />} />
      <Route
        path="/facilities/infrastructure-gallery"
        element={<InfrastructureGallery />}
      />
      <Route
        path="/facilities/disability-resource-center"
        element={<InfrastructureDFC />}
      />
      <Route path="/about-library" element={<LibraryPage />} />
      <Route
        path="/infrastructure-and-facilities"
        element={<LibraryInfrastructure />}
      />
      <Route path="/timscdr-library-holding" element={<LibraryHolding />} />
      <Route path="/library-timing-and-rules" element={<LibraryRules />} />
      <Route path="/imca" element={<IMCA_Admission />} />
      <Route
        path="/master-of-computer-applications-mca"
        element={<MCA_Admission />}
      />
      <Route
        path="/mca-working-professional"
        element={<MCA_WorkingProfessional />}
      />
      <Route path="/seat-distribution" element={<SeatDistribution />} />
      <Route path="/fees-structure" element={<FeesStructure />} />
      <Route
        path="/admission-notification"
        element={<AdmissionNotifications />}
      />
          <Route
        path="/admission-notification"
        element={<AdmissionNotifications />}
      />
            <Route
        path="/aicte-approval-2"
        element={<AICTEApproval />}
      />
      <Route path="/student-handbook" element={<StudentHandbook/>}/>
      <Route path="/student-mentoring-program" element={<StudentMentoring/>}/>
      <Route path="/anti-ragging" element={<AntiRagging />} />
      <Route path="/research-cell" element={<ResearchCell />} />
      <Route path="/institution-innovation-council-iic" element={<IIC />} />
      <Route path="/icaim-2025" element={<ICAIM2025 />} />
    </Routes>
  </BrowserRouter>
);
