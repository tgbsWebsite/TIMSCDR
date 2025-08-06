import './LatestHappenings.css';

function LatestHappenings() {
  const events = [
    { id: 1, image: '/images/event1.png', alt: 'Annual Fest' },
    { id: 2, image: '/images/event2.png', alt: 'Tech Seminar' },
    { id: 3, image: '/images/event3.png', alt: 'Cultural Day' },
    { id: 4, image: '/images/event4.png', alt: 'Sports Week' },
    { id: 5, image: '/images/event5.png', alt: 'Hackathon' },
    { id: 6, image: '/images/event6.png', alt: 'Guest Lecture' }
  ];

  return (
    <section id="hero-carousel-section" className="latest-happenings">
      <h2 className="section-heading">Latest Happenings / What’s New</h2>
      <div className="photo-grid">
        {events.map(event => (
          <div key={event.id} className="photo-item">
            <img src={event.image} alt={event.alt} />
            <div className="photo-caption">{event.alt}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LatestHappenings;
