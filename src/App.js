import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import HeroCarousel from "./components/HeroCarousel";
import LegacySection from "./components/LegacySection";
import Programs from "./components/Programs";
import VisionMission from "./components/VisionMission";
import WelcomeSection from "./components/WelcomeSection";
import Recruiters from "./components/Recruiters";
import Flipper from "./components/Flipper";
// import NavbarWithFlipper from "./components/NavbarWithFlipper";

import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import LatestHappenings from "./components/LatestHappenings";
import EducationPartners from "./components/EducationPartners";
import CTAButton from "./components/sticky-button";
// import BrochureForm from './components/BrochureForm';

// import stickyButton from './components/sticky-button';
// import ContactUsTab from './components/ContactUsTab';
// import HeroSection from './components/HeroSection.jsx';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Flipper />

      {/* <BrochureForm/> */}
      <CTAButton />
      <HeroCarousel />
      <LegacySection />
      <Programs />
      <VisionMission />
      <WelcomeSection />
      <Recruiters />
      <Testimonials />
      <LatestHappenings />
      <EducationPartners />
      <Footer />
    </div>
  );
}

export default App;
