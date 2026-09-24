import React from 'react';
import './HeroSlideshow.css';
export default function HeroSlideshow() {
  return (
    <div className="section-slideshow">
      <div className="hero-distance distance" style={{ '--bg-gradient-time': '25s' }}>
        <div className="container-full">
          <div
            id="heroCarousel"
            className="carousel carousel-fade hero-carousel position-relative"
            data-bs-ride="carousel"
            data-bs-interval="7000"
          >
            <div className="carousel-inner">
              <div className="carousel-item hero-item-1">
                <div className="hero-slide">
                  <img
                    src="/images/s-1-1.png"
                    alt="Gaming background 1"
                    className="hero-bg-image"
                  />
                  <div className="cap_content container-fluid">
                    <div className="hero-product caption-img-element-1">
                      <div className="w-100 img_animate">
                        <picture className="layer w-100" data-depth="0.2">
                          <img
                            src="/images/s-1-1-img_1440x.webp"
                            alt="Gaming Mouse"
                            className="w-100"
                          />
                        </picture>
                      </div>
                    </div>
                    <div className="hero-mark" aria-hidden="true"></div>
                    <div className="hero-content content position-absolute content-1">
                      <h1 className="caption-animate caption-1">
                        Elevate Your Experience
                        <br />
                        With Top-Tier Gaming Gear
                      </h1>
                      <p className="caption-animate caption-2">
                        Discover the Cutting-Edge Gear That Will Revolutionize Your Gaming Journey
                      </p>
                      <div className="caption-animate caption-btn d-flex align-items-center justify-content-start">
                        <a href="#" className="hero-cta">
                          <span>Shop The Collection</span>
                          <i className="hero-cta-arrow" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item active hero-item-2">
                <div className="hero-slide">
                  <img
                    src="/images/s-1-2.png"
                    alt="Gaming background 2"
                    className="hero-bg-image"
                  />
                  <div className="cap_content container-fluid">
                    <div className="hero-product caption-img-element-2">
                      <div className="w-100 img_animate">
                        <picture className="layer w-100" data-depth="0.2">
                          <img
                            src="/images/s-1-2-img_1440x.webp"
                            alt="Gaming Headset"
                            className="w-100"
                          />
                        </picture>
                      </div>
                    </div>
                    <div className="hero-mark" aria-hidden="true"></div>
                    <div className="hero-content content position-absolute content-2">
                      <h1 className="caption-animate caption-1">
                        Elevate Your Experience
                        <br />
                        With Top-Tier Gaming Gear
                      </h1>
                      <p className="caption-animate caption-2">
                        Discover the Cutting-Edge Gear That Will Revolutionize Your Gaming Journey
                      </p>
                      <div className="caption-animate caption-btn d-flex align-items-center justify-content-start">
                        <a href="#" className="hero-cta">
                          <span>Shop The Collection</span>
                          <i className="hero-cta-arrow" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item hero-item-3">
                <div className="hero-slide">
                  <img
                    src="/images/s-1-3.png"
                    alt="Gaming background 3"
                    className="hero-bg-image"
                  />
                  <div className="cap_content container-fluid">
                    <div className="hero-product caption-img-element-3">
                      <div className="w-100 img_animate">
                        <picture className="layer w-100" data-depth="0.2">
                          <img
                            src="/images/s-1-3-img_1440x.webp"
                            alt="Gaming Keyboard"
                            className="w-100"
                          />
                        </picture>
                      </div>
                    </div>
                    <div className="hero-mark" aria-hidden="true"></div>
                    <div className="hero-content content position-absolute content-3">
                      <h1 className="caption-animate caption-1">
                        Elevate Your Experience
                        <br />
                        With Top-Tier Gaming Gear
                      </h1>
                      <p className="caption-animate caption-2">
                        Discover the Cutting-Edge Gear That Will Revolutionize Your Gaming Journey
                      </p>
                      <div className="caption-animate caption-btn d-flex align-items-center justify-content-start">
                        <a href="#" className="hero-cta">
                          <span>Shop The Collection</span>
                          <i className="hero-cta-arrow" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slideshow-dot-cus position-absolute" style={{ '--bottom': '30px' }}>
              <button
                className="nav-slider hero-arrow hero-arrow-prev pointer"
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide="prev"
                aria-label="Previous"
              >
                <span className="rbb-icon-direction-36" aria-hidden="true"></span>
              </button>
              <div className="carousel-indicators hero-indicators">
                <button
                  type="button"
                  className="dot-color"
                  data-bs-target="#heroCarousel"
                  data-bs-slide-to="0"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  className="dot-color active"
                  data-bs-target="#heroCarousel"
                  data-bs-slide-to="1"
                  aria-current="true"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  className="dot-color"
                  data-bs-target="#heroCarousel"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <button
                className="nav-slider hero-arrow hero-arrow-next pointer"
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide="next"
                aria-label="Next"
              >
                <span className="rbb-icon-direction-39" aria-hidden="true"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
