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

  // Prefix: lh- (Latest Happenings)
  return (
    <section className="lh-root">
      <h2 className="lh-heading">Latest Happenings / What’s New</h2>
      <div className="lh-grid">
        {events.map((event) => (
          <div key={event.id} className="lh-item">
            <img src={event.image} alt={event.alt} className="lh-img" />
            <div className="lh-caption">{event.alt}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LatestHappenings;
