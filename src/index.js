import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";

// App shell
import App from "./App";

// About
import VisionMissionPage from "./about/VisionMission";
import EducationPolicies from "./about/Education-Policies";
import ChairmanMessage from "./about/ChairmanMessage";
import CeoMessage from "./about/ceo";
import DirectorMesage from "./about/director";
import Governing from "./about/governing";
import Advisory from "./about/advisory";
import AcademicCouncil from "./about/academic-council";
import DevelopmentCommittee from "./about/development-committee";
import IqacCommittee from "./about/IqacCommittee";
import CellCommittee from "./about/CellCommittee";
import NispPolicy from "./about/NispPolicy";

// Programs
import MCAProgram from "./program/MCA";
import IntegratedMCAProgram from "./program/IntegratedMCA";
import ProfessionalMCAProgram from "./program/ProfessionalsMCA";
import PhdAccordion from "./program/PhdAccordion";


// Contact
import ContactPage from "./contact/ContactPage";
import GrievanceForm from "./contact/GrievanceForm";
import Recruitment from "./contact/Recruitment";
import Employment from "./contact/Employment";

// Examination
import NoticeBoard from "./Examination/NoticeBoard";
import MCAResults from "./Examination/UniversityGazette";
import ResultAnalysis from "./Examination/ResultAnalysis";
import Convocation from "./Examination/Convocation";

// Facilities
import Infrastructure from "./Facilities/Infrastructure";
import InfrastructureGallery from "./Facilities/InfrastructureGallery";
import DRC from "./Facilities/DRC";                 // If DRC and InfrastructureDFC are the same, keep only one import
import InfrastructureDFC from "./Facilities/DRC";    // Duplicates DRC import; consider removing one if unintended

// Academics
import FacultyTable from "./academics/facultytable";
import Faculty from "./academics/facultydetails";
import Nonteachingfaculty from "./academics/non-teachingstaf";
import Studentdownload from "./academics/studentdownload";

// Placement
import AboutPlacement from "./placement/Aboutplacement";
import TrainingProgramme from "./placement/TrainingProgramme";
import PlacementData from "./placement/Placementdata";

// R&D
import IoTLabExcellence from "./RD/IoTLabExcellence";
import TechTonics from "./RD/TechTonics";
import Consultancy from "./RD/Consultancy";
import ResearchCell from "./RD/ResearchCell";
import IIC from "./RD/IIC";
import ICAIM2025 from "./RD/ICAIMPage";

// Library
import LibraryPage from "./Facilities/LibraryPage";
import LibraryInfrastructure from "./Facilities/LibraryInfrastructure";
import LibraryHolding from "./Facilities/LibraryHolding";
import LibraryRules from "./Facilities/LibraryRules";

// Admissions
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

// Life @
import FacultyPrograms from "./Life/FacultyPrograms";
import STTPPrograms from "./Life/STTPPrograms";
import ParentInteractionProgramme from "./Life/ParentInteractionProgramme ";
import GuestLectureTable from "./Life/GuestLectureTable";
import StudentDevelopmentProgram from "./Life/StudentDevelopmentProgram";
import PrePlacementTraining from "./Life/PrePlacementTraining ";
import Admin from "./admin/Admin";
import AdminLogin from "./admin/AdminLogin";
import IndustrialVisits from "./Life/studentactivity/IndustrialVisits";
import ECellAyan from "./Life/studentactivity/E-CellAyan";
import Synapse from "./Life/studentactivity/Synapse";
import Vista from "./Life/studentactivity/Vista";
import DLLE from "./Life/studentactivity/DLLE";
import GreenClub from "./Life/studentactivity/GreenClub";
import Trekking from "./Life/Events/Trekking";
import SocialEvents from "./Life/Events/SocialEvents";
import Hackathon from "./Life/Events/Hackathon";
import HealthHygiene from "./Life/Events/Health&Hygiene";
import CleanIndiaCampaign from "./Life/Events/CleanIndiaCampaign";
import SelfDefence from "./Life/WomensCell/Selfdefence";
import WomenEntrepreneurs from "./Life/WomensCell/WomenEnterpreneurs";
import WomenHealth from "./Life/WomensCell/WomenHealth";
import BharatAbhiyan from "./Life/UnnatBharatAbhiyan/BharatAbhiyan";
import CulturalDay from "./Life/RecreationalPrograms/CulturalDay";
import FreshersFarewell from "./Life/RecreationalPrograms/Freshers&Farewell";
import SportsDay from "./Life/RecreationalPrograms/SportsDay";
import PEOPage from "./program/PEOPage";

// Celebration Gallery - Updated
import CelebrationGallery from "./Life/celebration/CelebrationGallery";
import Y from "./Life/yuvostav/Yuvostav";
import CodeOfConduct from "./Admissions/CodeOfConduct";






// Optional Web Vitals (uncomment when needed)
// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HelmetProvider>
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<App />} />

        {/* ADMINPANEL */}
        <Route path="/admin-login-timscdr" element={<AdminLogin />} />
        <Route path="/admin-timscdr" element={<Admin />} />

        {/* About */}
        <Route path="/about/Vision-Mission" element={<VisionMissionPage />} />
        <Route path="/about/Education-Policies" element={<EducationPolicies />} />
        <Route path="/about/chairman-message" element={<ChairmanMessage />} />
        <Route path="/about/ceo-message" element={<CeoMessage />} />
        <Route path="/about/director-message" element={<DirectorMesage />} />
        <Route path="/about/governing-council" element={<Governing />} />
        <Route path="/about/advisory" element={<Advisory />} />
        <Route path="/about/academic-council" element={<AcademicCouncil />} />
        <Route path="/about/development-committee" element={<DevelopmentCommittee />} />
        <Route path="/about/iqac-committee" element={<IqacCommittee />} />
        <Route path="/about/cells-and-committees" element={<CellCommittee />} />
        <Route path="/about/nisp-policy" element={<NispPolicy />} />

        {/* Programs */}
        <Route path="/peo-Page" element={<PEOPage />} />
        <Route path="/programs/mca-program" element={<MCAProgram />} />
        <Route path="/programs/integrated-mca" element={<IntegratedMCAProgram />} />
        <Route path="/programs/mca-working-professionals" element={<ProfessionalMCAProgram />} />
        <Route path="/programs/ph-d-admission" element={<PhdAccordion />} />

        {/* Contact */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/contact/student-grievance-redressal" element={<GrievanceForm />} />
        <Route path="/contact/recruitment" element={<Recruitment />} />
        <Route path="/contact/employee-handbook" element={<Employment />} />

        {/* Examination */}
        <Route path="/notice" element={<NoticeBoard />} />
        <Route path="/examination/university-gazette" element={<MCAResults />} />
        <Route path="/examination/result-analysis" element={<ResultAnalysis />} />
        <Route path="/examination/convocation" element={<Convocation />} />

        {/* Facilities */}
        <Route path="/facilities/infrastructure" element={<Infrastructure />} />
        <Route path="/facilities/infrastructure-gallery" element={<InfrastructureGallery />} />
        <Route path="/facilities/disability-resource-center" element={<InfrastructureDFC />} />

        {/* Library */}
        <Route path="/about-library" element={<LibraryPage />} />
        <Route path="/infrastructure-and-facilities" element={<LibraryInfrastructure />} />
        <Route path="/timscdr-library-holding" element={<LibraryHolding />} />
        <Route path="/library-timing-and-rules" element={<LibraryRules />} />

        {/* Admissions */}
        <Route path="/imca" element={<IMCA_Admission />} />
        <Route path="/master-of-computer-applications-mca" element={<MCA_Admission />} />
        <Route path="/mca-working-professional" element={<MCA_WorkingProfessional />} />
        <Route path="/seat-distribution" element={<SeatDistribution />} />
        <Route path="/fees-structure" element={<FeesStructure />} />
        <Route path="/admission-notification" element={<AdmissionNotifications />} />
        <Route path="/aicte-approval-2" element={<AICTEApproval />} />
        <Route path="/student-handbook" element={<StudentHandbook />} />
        <Route path="/code-of-conduct" element={<CodeOfConduct/>}/>
        <Route path="/student-mentoring-program" element={<StudentMentoring />} />
        <Route path="/anti-ragging" element={<AntiRagging />} />

        {/* R&D */}
        <Route path="/research-cell" element={<ResearchCell />} />
        <Route path="/institution-innovation-council-iic" element={<IIC />} />
        <Route path="/icaim-2025" element={<ICAIM2025 />} />
        <Route path="/research/iot-excellence" element={<IoTLabExcellence />} />
        <Route path="/research/techtonics" element={<TechTonics />} />
        <Route path="/research/consultancy" element={<Consultancy />} />

        {/* Academics */}
        <Route path="/faculty-list-2" element={<FacultyTable />} />
        <Route path="/staff" element={<Faculty />} />
        <Route path="/non-teaching-staff" element={<Nonteachingfaculty />} />
        <Route path="/student-downloads" element={<Studentdownload />} />
      
        {/* Placement */}
        <Route path="/best-mca-college-in-mumbai-for-placements-about-placement" element={<AboutPlacement />} />
        <Route path="/training-programme" element={<TrainingProgramme />} />
        <Route path="/placement-data" element={<PlacementData />} />

        {/* Life @ */}
        <Route path="/life/industrial-visit" element={<IndustrialVisits />} />
        <Route path="/life/e-cell-ayan" element={<ECellAyan />} />
        <Route path="/life/synapse" element={<Synapse />} />
        <Route path="/life/vista" element={<Vista />} />
        <Route path="/life/dlle" element={<DLLE />} />
        <Route path="/life/green-club" element={<GreenClub />} />

        <Route path="/life/trekking" element={<Trekking />} />
        <Route path="/life/socialevents" element={<SocialEvents />} />
        <Route path="/life/hackathon" element={<Hackathon />} />
        <Route path="/life/health-hygiene" element={<HealthHygiene />} />
        <Route path="/life/clean-india-campaign" element={<CleanIndiaCampaign />} />

        <Route path="/life/selfdefence" element={<SelfDefence />} />
        <Route path="/life/womenentepreneurs" element={<WomenEntrepreneurs />} />
        <Route path="/life/womenhealth" element={<WomenHealth />} />

        <Route path="/life/bharatabhiyan" element={<BharatAbhiyan />} />

       <Route path="/life/yuvostav" element={<Y/>}/>


        <Route path="/life/culturalday" element={<CulturalDay />} />
        <Route path="/life/fresher-farewell" element={<FreshersFarewell />} />
        <Route path="/life/sportsday" element={<SportsDay />} />

 {/* Celebration Gallery - Updated Route */}
        <Route path="/celebration_events" element={<CelebrationGallery />} />



        <Route path="/faculty-development-programs" element={<FacultyPrograms />} />
        <Route path="/short-term-training-programme" element={<STTPPrograms />} />
        <Route path="/parent-interaction-programme" element={<ParentInteractionProgramme />} />
        <Route path="/guest-lecture-sdp-pre-placement-training" element={<GuestLectureTable />} />
        <Route path="/student-development-program" element={<StudentDevelopmentProgram />} />
        <Route path="/pre-placement-training" element={<PrePlacementTraining />} />
      </Routes>
    </BrowserRouter>
  </HelmetProvider>
);

// Optional: Start measuring performance (uncomment to enable)
// import reportWebVitals from "./reportWebVitals";
// reportWebVitals(console.log);
