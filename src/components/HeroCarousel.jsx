import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./HeroCarousel.css"; // for optional styling

const HeroCarousel = () => {
  return (
    <div className="hero-carousel">
      <div className="scroll-icon-wrapper">
        <div className="scroll-image-wrapper">
          {/* <button
            className="scroll-image-button"
            onClick={() =>
              document
                .getElementById("legacy-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <img src="/assets/scroll-down.png" alt="Scroll Down" />
          </button> */}
        </div>
      </div>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide-box" style={{ backgroundColor: "#1e90ff" }}>
            <h2>Image 1</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-box" style={{ backgroundColor: "#28a745" }}>
            <h2>Image 2</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-box" style={{ backgroundColor: "#ffc107" }}>
            <h2>Image 3</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-box" style={{ backgroundColor: "#070bffff" }}>
            <h2>Image 4</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
