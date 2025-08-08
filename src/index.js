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
      </Routes>
    </BrowserRouter>
);
