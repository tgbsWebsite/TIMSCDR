import React from "react";
import "./Programs.css";

export default function Programs() {
return (
<div className="ap-root">
<div className="ap-container">
<header className="ap-header">
<h1 className="ap-title">Academic Programs</h1>
</header>


    <div className="ap-radial">
      {/* Floating dots */}
      <div className="ap-floating">
        <div className="ap-dot"></div>
        <div className="ap-dot"></div>
        <div className="ap-dot"></div>
        <div className="ap-dot"></div>
      </div>

      {/* Concentric circles */}
      <div className="ap-circle ap-c4"></div>
      <div className="ap-circle ap-c3"></div>
      <div className="ap-circle ap-c2"></div>
      <div className="ap-circle ap-c1"></div>

      {/* Central hub */}
      <div className="ap-hub">
        <div className="ap-hub-title">CA</div>
        <div className="ap-hub-sub">Computer Applications</div>
      </div>

      {/* Connecting lines */}
      <div className="ap-conn ap-l1"></div>
      <div className="ap-conn ap-l2"></div>
      <div className="ap-conn ap-l3"></div>

      {/* MCA programs */}
      <div className="ap-card ap-m1">
        <h3>Regular MCA</h3>
        <p>2-year full-time comprehensive program</p>
      </div>
      <div className="ap-card ap-m2">
        <h3>Working Professional MCA</h3>
        <p>Flexible evening & weekend classes</p>
      </div>
      <div className="ap-card ap-m3">
        <h3>Integrated MCA</h3>
        <p>5-year integrated undergraduate + postgraduate</p>
      </div>

      {/* PhD connection and block */}
      <div className="ap-conn ap-phd-line"></div>
      <div className="ap-phd">
        <div className="ap-phd-title">Ph.D</div>
        <div className="ap-phd-sub"></div>
      </div>

      {/* Info panels */}
      {/* <div className="ap-info ap-info1">
        <strong>500+</strong><br />
        Graduates Successfully Placed
      </div>
      <div className="ap-info ap-info2">
        <strong>95%</strong><br />
        Industry Placement Rate
      </div> */}
    </div>
  </div>
</div>
);
}