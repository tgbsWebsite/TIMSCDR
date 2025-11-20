import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import BrochureForm from "../../components/EnquiryForm";
import CTAButtons from "../../components/sticky-button";
import Navbar from "../../components/navbar";
import { Helmet } from "react-helmet-async";
import "./CelebrationGallery.css";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

const CelebrationGallery = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/celebration-gallery-with-images`)
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
      })
      .then((result) => {
        // Sort years descending
        setData(Object.fromEntries(Object.entries(result).sort(([a], [b]) => b.localeCompare(a))));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const openLightbox = (event) => setSelectedEvent(event);

  const closeLightbox = () => setSelectedEvent(null);

  const centerMessage = loading
    ? "Loading celebration events..."
    : error
    ? `Error loading events: ${error}`
    : Object.keys(data).length === 0
    ? "No celebration events found. Check back later!"
    : null;

  return (
    <>
      <Helmet>
        <title>Celebration Gallery - TIMSCDR</title>
        <meta
          name="description"
          content="Explore our celebration events gallery showcasing various festivals and cultural events at TIMSCDR."
        />
        <meta name="keywords" content="celebration events, festivals, cultural events, TIMSCDR, college events" />
      </Helmet>

      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />

      {centerMessage ? (
        <div className="center-message-container">
          <p className="center-message">{centerMessage}</p>
        </div>
      ) : (
        <div className="celebration-gallery-container">
          <div className="gallery-hero-section">
            <h1>CELEBRATION GALLERY</h1>
            <p>
              Explore our Celebration Gallery to see the vibrant moments from TIMSCDR's
              various cultural events and celebrations. Our memorable occasions bring together
              students, faculty, and staff for academic excellence and community building.
            </p>
          </div>

          {Object.entries(data).map(([year, events]) => (
            <div key={year} className="academic-year-section">
              <h2 className="year-heading">Academic Year {year}</h2>

              <div className="events-grid">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="event-item"
                    onClick={() => openLightbox(event)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") openLightbox(event);
                    }}
                  >
                    <div className="event-image-container">
                      {event.celebration_photos && event.celebration_photos.length > 0 ? (
                        <img
                          src={`data:image/jpeg;base64,${event.celebration_photos[0].photo}`}
                          alt={event.event_name || event.title}
                          className="event-image"
                          loading="lazy"
                        />
                      ) : (
                        <div className="no-image-placeholder">
                          <span>📷</span>
                          <p>No Image</p>
                        </div>
                      )}
                      <div className="photo-count-badge">
                        {event.celebration_photos ? event.celebration_photos.length : 0} Photos
                      </div>
                    </div>
                    <h3 className="event-title">{event.event_name || event.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Lightbox Modal */}
          {selectedEvent && (
            <div className="lightbox-overlay" onClick={closeLightbox} role="dialog" aria-modal="true">
              <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
                  ×
                </button>
                <div className="lightbox-header">
                  <h2>{selectedEvent.event_name || selectedEvent.title}</h2>
                  <span className="academic-year-tag">{selectedEvent.academic_year}</span>
                </div>
                <div className="lightbox-photos">
                  {selectedEvent.celebration_photos && selectedEvent.celebration_photos.length > 0 ? (
                    selectedEvent.celebration_photos.map((photo, index) => (
                      <div key={photo.id || index} className="lightbox-photo">
                        <img
                          src={`data:image/jpeg;base64,${photo.photo}`}
                          alt={`${selectedEvent.event_name || selectedEvent.title} photo ${index + 1}`}
                          loading="lazy"
                        />
                      </div>
                    ))
                  ) : (
                    <p className="no-photos">No photos available for this event</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <Footer />
    </>
  );
};

export default CelebrationGallery;
