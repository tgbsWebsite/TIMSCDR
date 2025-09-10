import './LatestHappenings.css';

function LatestHappenings() {
  const events = [
    { id: 1, image: '/Events/image00108.jpeg', alt: 'Annual Fest' },
    { id: 2, image: '/Seminar/00002.jpeg', alt: 'Tech Seminar' },
    { id: 3, image: '/Events/IMG_0649.jpeg', alt: 'Cultural Day' },
    { id: 4, image: '/Events/IMG20250317111126.jpg', alt: 'Sports Week' },
    { id: 5, image: '/Events/image00060.jpeg', alt: 'Hackathon' },
    { id: 6, image: '/Seminar/IMG_9612.jpeg', alt: 'Guest Lecture' }
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
