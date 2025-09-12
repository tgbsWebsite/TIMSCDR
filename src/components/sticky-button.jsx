import React, { useEffect } from "react";
import "./cta-button.css";

const CTAButton = () => {
  useEffect(() => {
    // Create animated particles
    const particlesContainer = document.getElementById("tims-particles");
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "tims-particle";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.top = Math.random() * 100 + "%";
      particle.style.animationDelay = Math.random() * 6 + "s";
      particle.style.animationDuration = Math.random() * 4 + 4 + "s";
      particlesContainer.appendChild(particle);
    }

    // Add event listeners for CTA buttons
    const buttons = document.querySelectorAll(".tims-cta-button");
    buttons.forEach((button) => {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        const text = this.querySelector(".tims-text").textContent;

        // Add click ripple effect
        const ripple = document.createElement("div");
        ripple.style.position = "absolute";
        ripple.style.borderRadius = "50%";
        ripple.style.background = "rgba(255, 255, 255, 0.6)";
        ripple.style.transform = "scale(0)";
        ripple.style.animation = "tims-ripple 0.6s linear";
        ripple.style.left = "50%";
        ripple.style.top = "50%";
        ripple.style.width = ripple.style.height = "20px";
        ripple.style.marginLeft = ripple.style.marginTop = "-10px";

        this.style.position = "relative";
        this.appendChild(ripple);

        setTimeout(() => {
          this.removeChild(ripple);
        }, 600);

        showNotification(`${text} activated! 🚀`);
      });

      // Subtle tilt effect on hover
      button.addEventListener("mousemove", function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        this.style.transform = `scale(1.05) rotateX(${y / 10}deg) rotateY(${x / 10
          }deg)`;
      });

      button.addEventListener("mouseleave", function () {
        this.style.transform = "";
      });
    });

    // Mobile static button interaction
    // const mobileButton = document.querySelector(".tims-cta-static-button");
    // if (mobileButton) {
    //   mobileButton.addEventListener("click", (e) => {
    //     e.preventDefault();
    //     showNotification("📥 Brochure download initiated!");
    //   });
    // }

    // Notification function
    function showNotification(message) {
      const notification = document.createElement("div");
      notification.style.cssText = `
          position: fixed;
          top: 30px;
       
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(20px);
          color: white;
          padding: 15px 25px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 500;
          z-index: 10000;
          border: 1px solid rgba(255, 255, 255, 0.1);
          animation: tims-slideInRight 0.3s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      `;
      notification.textContent = message;

      document.body.appendChild(notification);

      setTimeout(() => {
        notification.style.animation = "tims-slideOutRight 0.3s ease";
        setTimeout(() => {
          document.body.removeChild(notification);
        }, 300);
      }, 3000);
    }

    // Intersection Observer for feature cards fade in up
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = "tims-fadeInUp 0.6s ease forwards";
        }
      });
    }, observerOptions);

    document.querySelectorAll(".tims-feature-card").forEach((card, index) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(30px)";
      card.style.animationDelay = `${index * 0.1}s`;
      observer.observe(card);
    });

    // Cleanup event listeners on unmount - optional here as no dependencies
  }, []);

  return (
    <>
      <div className="tims-floating-shapes">
        <div className="tims-shape tims-shape-1"></div>
        <div className="tims-shape tims-shape-2"></div>
        <div className="tims-shape tims-shape-3"></div>
      </div>

      <div className="tims-particles" id="tims-particles"></div>

      <div className="">
        <div className="tims-mobile-static-buttons">
          <button className="tims-cta-static-button tims-pulse">
            📥 Download Brochure
          </button>
        </div>

        <div className="tims-cta-container">
          <div className="tims-cta-button tims-apply" tabIndex={0}>
            <span className="tims-icon">
              <div className="tims-icon-placeholder">📝</div>
            </span>
            <span className="tims-text">Enquire Now</span>
          </div>

          <div className="tims-cta-button tims-phone" role="button" tabIndex={0} aria-label="Call Us">
            <span className="tims-icon" aria-hidden="true">
              <img src="/Website_Assets/call_3735213.png" alt="" width="30" height="30" />
            </span>
            <span className="tims-text">Call Us</span>
          </div>


          <div className="tims-cta-button tims-email" tabIndex={0}>
            <span className="tims-icon">
              <img src="/Website_Assets/mail_4175251.png" alt="" width="30" height="30" />            </span>
            <span className="tims-text">Email Us</span>
          </div>
          
          <div className="tims-cta-button tims-whatsapp" tabIndex={0}>
            <span className="tims-icon">
              <img src="/Website_Assets/whatsapp_11378621.png" alt="" width="30" height="30" />
            </span>
            <span className="tims-text">WhatsApp</span>
          </div>

          <div className="tims-cta-button tims-linkedin" tabIndex={0}>
            <span className="tims-icon">
              <div className="tims-icon-placeholder">💼</div>
            </span>
            <span className="tims-text">LinkedIn</span>
          </div>

          <div className="tims-cta-button tims-instagram" tabIndex={0}>
            <span className="tims-icon">
              <div className="tims-icon-placeholder">📷</div>
            </span>
            <span className="tims-text">Instagram</span>
          </div>
          
          <div className="tims-cta-button tims-facebook" tabIndex={0}>
            <span className="tims-icon">
              <div className="tims-icon-placeholder">👍</div>
            </span>
            <span className="tims-text">Facebook</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTAButton;
