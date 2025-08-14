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
import VisionMissionPage from './about/VisionMission'; // Separate page component
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
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about/Vision-Mission" element={<VisionMissionPage />} />
        <Route path="/about/Education-Policies" element={<EducationPolicies />} />
        <Route path="/about/chairman-message" element={<ChairmanMessage/>}/>
        <Route path="/about/ceo-message" element={<CeoMessage/>}/>
        <Route path="/about/director-message" element={<DirectorMesage/>}/>
        <Route path="/about/governing-council" element={<Governing/>} />
        <Route path="/about/advisory" element={<Advisory/>} />
        <Route path="/about/academic-council" element={<AcademicCouncil/>} />
        <Route path="/about/development-committee" element={<DevelopmentCommittee/>} />
        <Route path="/about/iqac-committee" element={<IqacCommittee/>} />
        <Route path="/about/cells-and-committees" element={<CellCommittee/>} />
        <Route path="/about/nisp-policy" element={<NispPolicy/>} />
        <Route path="/programs/mca-program" element={<MCAProgram/>}/>
        <Route path="/programs/integrated-mca" element={<IntegratedMCAProgram/>} />
        <Route path="/programs/mca-working-professionals" element={<ProfessionalMCAProgram/>} />
        <Route path="/programs/ph-d-admission"  element={<PhdAccordion/>}/>
      </Routes>
    </BrowserRouter>
);
