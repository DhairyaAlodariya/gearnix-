export default function initHeroCarousel() {
  const heroCarousel = document.getElementById('heroCarousel');
  if (!heroCarousel) return;
  heroCarousel.addEventListener('slide.bs.carousel', function(e) {
    e.relatedTarget.querySelectorAll('.caption-1,.caption-2,.caption-btn,.hero-product,.hero-mark').forEach(el=>{el.style.animation='none';el.offsetHeight;el.style.animation='';});
  });
  heroCarousel.addEventListener('slid.bs.carousel', function(e) {
    document.querySelectorAll('.dot-color').forEach((dot,i)=>dot.classList.toggle('active',i===e.to));
  });
  document.querySelectorAll('.dot-color').forEach((dot,i)=>{
    dot.addEventListener('click',()=>{window.bootstrap.Carousel.getOrCreateInstance(heroCarousel).to(i);});
  });
}