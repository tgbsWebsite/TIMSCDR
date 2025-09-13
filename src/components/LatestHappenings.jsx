import React from "react";
import "./LatestHappenings.css";

const events = [
  {
    img: "",
    title: "Annual Tech Symposium",
    date: "September 25, 2025",
  },
  {
    img: "",
    title: "International Research Conference",
    date: "October 5, 2025",
  },
  {
    img: "",
    title: "Cultural Heritage Festival",
    date: "October 12, 2025",
  },
  {
    img: "",
    title: "Innovation & Entrepreneurship Workshop",
    date: "October 20, 2025",
  },
  {
    img: "",
    title: "Student Science Fair",
    date: "November 2, 2025",
  },
  {
    img: "",
    title: "Alumni Homecoming",
    date: "November 15, 2025",
  },
];

const LatestHappenings = () => {
  return (
    <div className="lh-container">
      <div className="lh-section-header">
        <h2 className="lh-section-title">Latest Happenings / What's New  <hr className="about-us-divider"/></h2>
      </div>

      <div className="lh-events-grid">
        {events.map((event, index) => (
          <div className="lh-event-card" key={index}>
            <img
              src={event.img}
              alt={event.title}
              className="lh-event-image"
            />
            <div className="lh-event-overlay">
              <div className="lh-event-title">{event.title}</div>
              <div className="lh-event-date">{event.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestHappenings;
