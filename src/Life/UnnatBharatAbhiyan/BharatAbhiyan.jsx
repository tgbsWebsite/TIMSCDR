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

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

const BharatAbhiyan = () => {
  const [data, setData] = useState({});
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/bharatabhiyan-with-images`)
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

  const centerMessage = loading
    ? "Loading Bharat Abhiyan programs..."
    : error
    ? error
    : Object.keys(data).length === 0
    ? "No activities found. Check back later."
    : null;

  return (
    <>
      <Helmet>
        <title>Bharat Abhiyan - TIMSCDR</title>
        <meta name="description" content="Discover our Bharat Abhiyan initiatives and community service programs at TIMSCDR." />
      </Helmet>

      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />

      {centerMessage ? (
        <div className="center-message-container">
          <p className="center-message">{centerMessage}</p>
        </div>
      ) : (
        <div className="visit-main-container">
          <div className="visit-container">
            <div
              className={`list-container ${selectedActivity ? "shrink" : "full"} ${
                windowWidth <= 800
                  ? selectedActivity
                    ? "hide-on-mobile"
                    : "full-on-mobile"
                  : ""
              }`}
            >
              <h1 className="visit-header">Bharat Abhiyan Programs</h1>
              {Object.entries(data).map(([year, activities]) => (
                <div key={year}>
                  <h2>Academic Year {year}</h2>
                  {activities.map((activity) => (
                    <h3
                      key={activity.id}
                      className={`visit-title ${
                        selectedActivity && selectedActivity.id === activity.id ? "selected" : ""
                      }`}
                      onClick={() => handleSelectActivity(activity)}
                    >
                      {activity.title}
                    </h3>
                  ))}
                </div>
              ))}
            </div>

            {selectedActivity && (
              <div className={`details-container ${windowWidth <= 800 ? "full-on-mobile" : ""}`}>
                <div className="detail-header">
                  <h2>{selectedActivity.title}</h2>
                  <img
                    src="/close.png"
                    alt="Close"
                    className="visit-close"
                    onClick={() => setSelectedActivity(null)}
                  />
                </div>

                <p>
                  <strong>Date:</strong>{" "}
                  {new Date(selectedActivity.selected_date).toLocaleDateString("en-IN")}
                </p>

               
                {(selectedActivity.feature_image ||
                  selectedActivity.image1 ||
                  selectedActivity.image2 ||
                  selectedActivity.image3 ||
                  selectedActivity.image4) && (
                  <div className="detail-carousel">
                    <Swiper
                      modules={[Navigation, Autoplay]}
                      spaceBetween={10}
                      slidesPerView={1}
                      navigation={{}}
                      autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                      loop
                      onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                      }}
                      onSwiper={setSwiperInstance}
                    >
                      {[selectedActivity.feature_image, selectedActivity.image1, selectedActivity.image2, selectedActivity.image3, selectedActivity.image4]
                        .filter(Boolean)
                        .map((img, idx) => (
                          <SwiperSlide key={idx}>
                            <img
                              src={`data:image/jpeg;base64,${img}`}
                              alt={`Bharat Abhiyan Program ${idx + 1}`}
                              className="visit-carousel-img"
                            />
                          </SwiperSlide>
                        ))}
                    </Swiper>
                    <img ref={prevRef} src="/left.png" alt="Previous" className="custom-prev swiper-icons" />
                    <img ref={nextRef} src="/right.png" alt="Next" className="custom-next swiper-icons" />
                  </div>
                )}
                 <p>{selectedActivity.text}</p>

              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default BharatAbhiyan;