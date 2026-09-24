import React from 'react';
import './GalleryImage.css';
export default function GalleryImage() {
  return (
    <section className="section-gallery-image">
      <div className="distance">
        <div className="container-fluid">
          <div className="gallery-grid">
            <div className="gallery-image_column">
              <div className="gallery-image__item">
                <a className="gallery-image__link" href="#">
                  <div className="respone_image">
                    <img src="/images/img-1-7_1080x.webp" alt="Vortex Reaper gaming controller" />
                  </div>
                </a>
                <div className="gallery-image__caption cap-1 left-bottom">
                  <div className="gallery-image__text1">Vortex Reaper</div>
                  <div className="gallery-image__text2">
                    <p>Unparalleled Precision and Control for the Ultimate Gaming Edge</p>
                  </div>
                  <a href="#" className="link">
                    <span>Buy Now</span>
                    <i aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="gallery-image_column">
              <div className="gallery-image__item">
                <a className="gallery-image__link" href="#">
                  <div className="respone_image">
                    <img src="/images/img-1-8_1080x.webp" alt="Quantum Pro gaming headphones" />
                  </div>
                </a>
                <div className="gallery-image__caption cap-2 left-bottom">
                  <div className="gallery-image__text1">Quantum Pro</div>
                  <div className="gallery-image__text2">
                    <p>The Quantum Pro Redefines Immersive Gaming Audio</p>
                  </div>
                  <a href="#" className="link">
                    <span>Buy Now</span>
                    <i aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
