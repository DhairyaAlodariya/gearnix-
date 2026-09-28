import './ImageGroup.css';
export default function ImageGroup() {
  return (
    <section className="section-img-group">
      <div className="distance">
        <div className="container-fluid">
          <div className="img-group-row">
            <div>
              <div className="img-group-media">
                <img
                  src="/images/img-1-1_1080x.webp"
                  alt="Gaming setup"
                  className="img-group-photo"
                />
                <a
                  href="https://www.youtube.com/watch?v=yQK--z_jE7M"
                  className="img-group-play"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Play story video"
                >
                  <svg
                    viewBox="0 0 11 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M10.5 7.86602C11.1667 7.48112 11.1667 6.51887 10.5 6.13397L1.5 0.937821C0.833333 0.552921 0 1.03405 0 1.80385L0 12.1962C0 12.966 0.833333 13.4471 1.5 13.0622L10.5 7.86602Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <div className="img-group-story">
                <img
                  src="/images/img-1-2_768x.webp"
                  alt="Our story background"
                  className="img-group-story-bg"
                />
                <div className="img-group-caption">
                  <div className="img-group-title">
                    <p>Our Story</p>
                  </div>
                  <div className="img-group-desc">
                    <p>
                      Driven by gaming passion, we craft the finest gear to empower players. Our
                      unwavering innovation and user focus make us an integral part of the global
                      gaming community.
                    </p>
                  </div>
                  <a href="#" className="img-group-link">
                    <span>Read More</span>
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
