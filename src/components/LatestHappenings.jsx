import React from "react";
import "./LatestHappenings.css";

const events = [
  {
    img: "./Events/image00038.jpeg",
    title: "Sports Day Celebration",
    date: "September 25, 2025",
  },
  {
    img: "./Events/image00006.jpeg",
    title: "Vista",
    date: "October 5, 2025",
  },
  {
    img: "./Events/IMG_0585.jpeg",
    title: "Cultural Heritage Festival",
    date: "October 12, 2025",
  },
  {
    img: "./Events/image00013.jpeg",
    title: "Innovation & Entrepreneurship Workshop",
    date: "October 20, 2025",
  },
  {
    img: "./Events/IMG_0613.jpeg",
    title: "Student Science Fair",
    date: "November 2, 2025",
  },
  {
    img: "./Events/IMG_0672.jpeg",
    title: "Farewell Ceremony",
    date: "November 15, 2025",
  },
    {
    img: "./Events/image00023.jpeg",
    title: "Student Science Fair",
    date: "November 2, 2025",
  },
  {
    img: "./Events/IMG_1163.jpeg",
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
