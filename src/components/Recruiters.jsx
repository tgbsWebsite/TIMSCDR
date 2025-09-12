import React from 'react';
import './Recruiters.css';

const images = [
  './images/Placements/1.webp',
  './images/Placements/2.webp',
  './images/Placements/3.webp',
  './images/Placements/4.webp',
  './images/Placements/5.webp',
  './images/Placements/6.webp',
  './images/Placements/7.webp',
  // './images/Placements/8.webp',
  './images/Placements/9.webp',
  './images/Placements/10.webp',
  './images/Placements/11.webp',
  './images/Placements/12.webp',
  './images/Placements/13.webp',
  './images/Placements/14.webp',
  './images/Placements/15.webp',
  './images/Placements/16.webp',
  './images/Placements/17.webp',
  './images/Placements/18.webp',
  './images/Placements/19.webp',
  './images/Placements/20.webp',
  './images/Placements/21.webp',
  './images/Placements/22.webp',
  './images/Placements/23.webp',
  './images/Placements/24.webp',
  './images/Placements/25.webp',
  './images/Placements/26.webp',
  './images/Placements/27.webp',
  './images/Placements/28.webp',
  './images/Placements/29.webp',
  './images/Placements/30.webp',
  './images/Placements/31.webp',
  './images/Placements/32.webp',
  './images/Placements/33.webp',
  './images/Placements/34.webp',
  './images/Placements/35.webp',
  './images/Placements/36.webp',
];

const allLogos = [...images, ...images];

function Recruiters() {
  return (
    <section className="recruiters-section">
      <h2 className="recruiters-heading">Our Recruiters<hr className="about-us-divider" /></h2>
      <div className="logo-slider" aria-label="Recruiter logos">
        <div className="logo-track">
          {allLogos.map((src, index) => (
            <div className="logo-slide" key={index}>
              <img
                src={src}
                alt={`Recruiter logo ${index % images.length + 1}`}
                loading="lazy"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Recruiters;
