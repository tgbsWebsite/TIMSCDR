import React from "react";
import "./LatestHappenings.css";

const events = [
  {
    img: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=400&h=300&fit=crop&crop=entropy",
    title: "Annual Tech Symposium",
    date: "September 25, 2025",
  },
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=entropy",
    title: "International Research Conference",
    date: "October 5, 2025",
  },
  {
    img: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&h=300&fit=crop&crop=entropy",
    title: "Cultural Heritage Festival",
    date: "October 12, 2025",
  },
  {
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop&crop=entropy",
    title: "Innovation & Entrepreneurship Workshop",
    date: "October 20, 2025",
  },
  {
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=entropy",
    title: "Student Science Fair",
    date: "November 2, 2025",
  },
  {
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop&crop=entropy",
    title: "Alumni Homecoming",
    date: "November 15, 2025",
  },
];

const LatestHappenings = () => {
  return (
    <div className="lh-container">
      <div className="lh-section-header">
        <h2 className="lh-section-title">Latest Happenings / What's New</h2>
        <div className="lh-section-subtitle"></div>
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
