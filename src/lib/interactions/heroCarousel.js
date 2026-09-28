import Carousel from 'bootstrap/js/dist/carousel';

export default function initHeroCarousel(signal) {
  const heroCarousel = document.getElementById('heroCarousel');
  if (!heroCarousel) return;
  heroCarousel.addEventListener(
    'slide.bs.carousel',
    function (e) {
      e.relatedTarget
        .querySelectorAll('.caption-1,.caption-2,.caption-btn,.hero-product,.hero-mark')
        .forEach((el) => {
          el.style.animation = 'none';
          void el.offsetHeight;
          el.style.animation = '';
        });
    },
    { signal }
  );
  heroCarousel.addEventListener(
    'slid.bs.carousel',
    function (e) {
      document
        .querySelectorAll('.dot-color')
        .forEach((dot, i) => dot.classList.toggle('active', i === e.to));
    },
    { signal }
  );
  document.querySelectorAll('.dot-color').forEach((dot, i) => {
    dot.addEventListener(
      'click',
      () => {
        Carousel.getOrCreateInstance(heroCarousel).to(i);
      },
      { signal }
    );
  });
}
