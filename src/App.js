import logo from "./logo.svg";
import "./App.css";
import "./index.css";

import Navbar from "./components/navbar";
import HeroCarousel from "./components/HeroCarousel";
import LegacySection from "./components/LegacySection";
import Programs from "./components/Programs";

import WelcomeSection from "./components/WelcomeSection";
import Recruiters from "./components/Recruiters";
import Flipper from "./components/Flipper";
// import NavbarWithFlipper from "./components/NavbarWithFlipper";

import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import LatestHappenings from "./components/LatestHappenings";
import EducationPartners from "./components/EducationPartners";
import CTAButton from "./components/sticky-button";
import VisionMission from "./components/components/VisionMission";
// import BrochureForm from './components/BrochureForm';

// import stickyButton from './components/sticky-button';
// import ContactUsTab from './components/ContactUsTab';
// import HeroSection from './components/HeroSection.jsx';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
       <Navbar />
<HeroCarousel/>
      {/* Welcome (default page container, no background change) */}
      <div className="page-container">
        <CTAButton />
        
        <WelcomeSection />
      </div>

      {/* Alternating backgrounds */}
      <div className="section-alt">
        <div className="page-container">
         <VisionMission/>
        </div>
      </div>

      <div className="section-base">
        <div className="page-container">
          <LegacySection />
        </div>
      </div>

      <div className="section-alt">
        <div className="page-container">
          <Programs />
        </div>
      </div>

      <div className="section-base">
        <Recruiters />
      </div>

      <div
        className="section-alt"
        style={{ paddingLeft: "20px", paddingRight: "20px" }}
      >
        <Testimonials />
      </div>

      <div className="section-base">
        <div className="page-container">
          <LatestHappenings />
        </div>
      </div>

      <div className="section-alt">
        <div className="page-container">
          <EducationPartners />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
