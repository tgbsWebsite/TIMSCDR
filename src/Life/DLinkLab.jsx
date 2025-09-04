import React,{useState} from "react";
import Footer from "../components/Footer";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Navbar from "../components/navbar";

export default function DLinkLab() {
      const [showForm, setShowForm] = useState(false);
    
  return (
    <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />
    <div className="dla-page">
      <div className="ieee-container">
        <h1 className="heading">D-Link Academy Lab</h1>

        <p className="dla-desc">
          To become a globally recognized certified specialist in Networking, lab for Switches has
          been installed in association with D-link Academy Global Center of Excellence. The lab
          provides the necessary infrastructure for D-Link Academy DCS Switches Certification. Hands
          on Training programme include network essentials, switch operation, VLAN, Spanning tree
          protocol, switch stacking, routing and switching feathers. Faculty members underwent
          hands-on training for certifying in D-Link Academy DCS Switches Certification in May 2017,
          provided by D-Link Academy.
        </p>

        <div className="dla-images">
          <div className="dla-image-card">
            <div className="dla-image" aria-label="Lab photo placeholder" />
          </div>
          <div className="dla-image-card">
            <div className="dla-image" aria-label="Lab photo placeholder" />
          </div>
        </div>
      </div>
    </div>
        <Footer />
    </>
  );
}
