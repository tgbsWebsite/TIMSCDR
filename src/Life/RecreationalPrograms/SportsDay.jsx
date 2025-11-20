import React, { useEffect, useState, useRef } from "react";
import Footer from "../../components/Footer";
import BrochureForm from "../../components/EnquiryForm";
import CTAButtons from "../../components/sticky-button";
import Navbar from "../../components/navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../studentactivity/StaticPage.css";
import { Helmet } from "react-helmet-async";
import PageHeader from "../../about/PageHeader";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

const SportsDay = () => {
  const [data, setData] = useState({});
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const activityFullPageRef = useRef(null);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const getImageSrc = (img) => {
    if (!img) return "/default-image.jpg";
    if (img.startsWith("http") || img.startsWith("data:")) return img;
    return `data:image/jpeg;base64,${img}`;
  };
  useEffect(() => {
    fetch(`${API_URL}/sportsday-with-images`)
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
      })
      .then((result) => {
        setData(Object.fromEntries(Object.entries(result).sort(([a], [b]) => b.localeCompare(a))));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const onResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  const handleSelectActivity = (activity) => {
    setSelectedActivity((prev) => (prev?.id === activity.id ? null : activity));
  };

  const handleSelect = (activity) => {
    setSelectedActivity((prev) => (prev?.id === activity.id ? null : activity));
  };

  const centerMessage = loading
    ? "Loading Sports Day events..."
    : error
    ? error
    : Object.keys(data).length === 0
    ? "No activities found. Check back later."
    : null;

return (
    <>
      <Helmet>
        <title>E-Cell Ayan - TIMS</title>
        <meta name="description" content="Discover entrepreneurship activities at E-Cell Ayan, TIMS." />
        <meta name="keywords" content="E-Cell Ayan, entrepreneurship, TIMS, student activities, programs" />
        <link rel="canonical" href="https://timscdr.com/e-cell-ayan" />
      </Helmet>

      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm />}
      <CTAButtons />

      <div className="static-page-container">
        {selectedActivity ? (
          <div className="activity-full-page" ref={activityFullPageRef}>
            <a
              href="#"
              className="back-link"
              onClick={e => {
                e.preventDefault();
                setSelectedActivity(null);
              }}
              aria-label="Back to activities"
            >
              <span className="back-arrow">←</span>
              <span className="back-text">Back to Activities</span>
            </a>


            <div className="activity-card-container">

              <h1 className="activity-page-title">{selectedActivity.title}</h1>
              <span className="date-text">
                {(() => {
                  const d = new Date(selectedActivity.selected_date);
                  const year = d.getFullYear();
                  const month = String(d.getMonth() + 1).padStart(2, "0");
                  const day = String(d.getDate()).padStart(2, "0");
                  return `${year}-${month}-${day}`;
                })()}
              </span>
              <div className="activity-content-wrapper">
                <div className="activity-hero">
                  <div className="activity-hero">
                    <Swiper
                      slidesPerView={1}
                      loop={true}
                      autoplay={{ delay: 3500 }}
                      navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                      }}
                      modules={[Navigation, Autoplay]}
                      onSwiper={setSwiperInstance}
                      className="activity-swiper"
                    >
                      {[selectedActivity.feature_image, selectedActivity.image1, selectedActivity.image2, selectedActivity.image3, selectedActivity.image4]
                        .filter((img, idx, arr) => img && arr.indexOf(img) === idx)
                        .map((img, idx) => (
                          <SwiperSlide key={idx}>
                            <img
                              src={getImageSrc(img)}
                              alt={`${selectedActivity.title} - Image ${idx + 1}`}
                              className="activity-hero-image"
                            />
                          </SwiperSlide>
                        ))}
                      <button ref={prevRef} className="swiper-button-prev" aria-label="Previous slide"></button>
                      <button ref={nextRef} className="swiper-button-next" aria-label="Next slide"></button>
                    </Swiper>
                  </div>
  
                </div>
                <div className="activity-body">
                  <div className="activity-container">
                    {selectedActivity.selected_date && (
                      <div className="activity-date-badge"></div>
                    )}
                    <div className="activity-text-content">
                      {selectedActivity.text.split("\n").map(
                        (paragraph, idx) =>
                          paragraph.trim() && <p key={idx}>{paragraph}</p>
                      )}
                    </div>
                    {/* Uncomment below block to show gallery if images are available */}
                    {/* <div className="activity-gallery">
              <h3 className="gallery-title">Gallery</h3>
              <div className="gallery-grid">
                {[selectedActivity.image1, selectedActivity.image2, selectedActivity.image3, selectedActivity.image4]
                  .filter(img => img && img !== selectedActivity.feature_image)
                  .map((img, idx) => (
                    <img
                      key={idx}
                      src={getImageSrc(img)}
                      alt={`${selectedActivity.title} - Image ${idx + 1}`}
                      className="gallery-image"
                    />
                  ))}
              </div>
            </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <PageHeader
              title="Synapse"
              crumbs={[
                { label: "Home", href: "/" },
                { label: "Synapse" },
              ]}
            />
            {centerMessage ? (
              <div className="center-message">{centerMessage}</div>
            ) : (
              <div className="content-wrapper">
                <div className="main-content-1">
                  {Object.entries(data).map(([year, activities]) => (
                    <div key={year} id={`year-${year}`} className="year-section">
                      <h1>A.Y. {year}</h1>
                      <div className="activity-grid">
                        {activities.map((activity) => (
                          <div
                            key={activity.id}
                            className="activity-card"
                            onClick={() => handleSelect(activity)}
                            style={{ cursor: "pointer" }}
                          >
                            <img
                              src={getImageSrc(
                                activity.feature_image ||
                                activity.image1 ||
                                activity.image2 ||
                                activity.image3 ||
                                activity.image4
                              )}
                              alt={activity.title}
                              className="activity-img"
                            />
                            <div className="activity-content">
                              {activity.selected_date && (
                                <div className="activity-date">
                                  {(() => {
                                    const d = new Date(activity.selected_date);
                                    const year = d.getFullYear();
                                    const month = String(d.getMonth() + 1).padStart(2, '0');
                                    const day = String(d.getDate()).padStart(2, '0');
                                    return `${year}-${month}-${day}`;
                                  })()}

                                </div>
                              )}
                              <h3 className="activity-title">{activity.title}</h3>

                              <div className="activity-summary-wrapper">
                                <p className="activity-summary">
                                  {activity.text
                                    ? activity.text.split("\n")[0].slice(0, 120) +
                                    (activity.text.length > 120 ? "..." : "")
                                    : "No description available."}
                                </p>
                              </div>
                              <button className="activity-expand-btn" type="button">
                                <span>Read More &rarr;</span>
                                <span className="material-icons activity-expand-icon rotate-0">

                                </span>
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>


      <CTAButtons />

      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setShowForm(false)}
              aria-label="Close form"
            >×</button>
            <BrochureForm />
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};


export default SportsDay;