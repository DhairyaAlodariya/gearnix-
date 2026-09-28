import './VideoSection.css';
export default function VideoSection() {
  return (
    <section className="section-video">
      <div className="distance">
        <div className="container-full">
          <div className="item youtube position-relative d-flex">
            <video playsInline loop muted preload="none" poster="/images/img-1-10.jpg">
              <source
                src="//nov-gearnix.myshopify.com/cdn/shop/videos/c/vp/100219c988ea480b85b23833a73cf76b/100219c988ea480b85b23833a73cf76b.HD-1080p-4.8Mbps-32987534.mp4?v=0"
                type="video/mp4"
              />
              <img src="/images/img-1-10.jpg" alt="Nov Gearnix" />
            </video>
            <div className="bg-video__cover position-absolute w-100 h-100 lazyloaded"></div>
            <div className="block-text text-center position-absolute">
              <div className="f_pr font-700 block-1 text">
                <p>Experience The Gaming Advantage With Modern Equipment</p>
              </div>
              <div className="f_df font-400 block-2 text">
                <p>Unlock Your Full Potential with the Latest Cutting-Edge Gaming Gear</p>
              </div>
              <div className="block-icon__play d-flex justify-content-center">
                <button
                  className="btn-video__play"
                  type="button"
                  aria-label="Play background video"
                >
                  <svg
                    width="11"
                    height="14"
                    viewBox="0 0 11 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M10.5 7.86602C11.1667 7.48112 11.1667 6.51887 10.5 6.13397L1.5 0.937821C0.833333 0.552921 6.10471e-07 1.03405 5.76822e-07 1.80385L1.2256e-07 12.1962C8.8911e-08 12.966 0.833333 13.4471 1.5 13.0622L10.5 7.86602Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
