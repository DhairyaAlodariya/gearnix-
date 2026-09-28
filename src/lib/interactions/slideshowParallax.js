export default function initSlideshowParallax(signal) {
  const section = document.querySelector('.section-slideshow');
  if (!section) return;
  const layers = Array.from(section.querySelectorAll('.layer'));
  if (!layers.length) return;
  let rect = null;
  const maxMove = 20;
  const updateRect = () => {
    rect = section.getBoundingClientRect();
  };
  const applyTransform = (x, y) => {
    layers.forEach((l) => {
      const d = parseFloat(l.dataset.depth) || 0.2;
      l.style.transform = `translate3d(${-x * maxMove * d}px,${-y * maxMove * d}px,0)`;
    });
  };
  updateRect();
  window.addEventListener('resize', updateRect, { signal });
  let rafId = null,
    xR = 0,
    yR = 0;
  const onMove = (e) => {
    if (!rect) return;
    xR = Math.max(-0.5, Math.min(0.5, (e.clientX - rect.left) / rect.width - 0.5));
    yR = Math.max(-0.5, Math.min(0.5, (e.clientY - rect.top) / rect.height - 0.5));
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      applyTransform(xR * 2, yR * 2);
      rafId = null;
    });
  };
  section.addEventListener('mousemove', onMove, { signal });
  section.addEventListener('mouseleave', () => applyTransform(0, 0), { signal });
  signal.addEventListener(
    'abort',
    () => {
      if (rafId) cancelAnimationFrame(rafId);
    },
    { once: true }
  );
}
