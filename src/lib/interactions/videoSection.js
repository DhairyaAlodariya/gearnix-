export default function initVideoSection(signal) {
  document.querySelectorAll('.section-video .item.youtube').forEach(function (section) {
    var video = section.querySelector('video'),
      btn = section.querySelector('.btn-video__play');
    if (!video || !btn) return;
    video.pause();
    section.classList.remove('is-playing');
    btn.addEventListener(
      'click',
      function () {
        if (video.paused) {
          video
            .play()
            .then(function () {
              section.classList.add('is-playing');
              btn.setAttribute('aria-label', 'Pause background video');
            })
            .catch(function () {});
        } else {
          video.pause();
          section.classList.remove('is-playing');
          btn.setAttribute('aria-label', 'Play background video');
        }
      },
      { signal }
    );
    signal.addEventListener(
      'abort',
      function () {
        video.pause();
        section.classList.remove('is-playing');
        btn.setAttribute('aria-label', 'Play background video');
      },
      { once: true }
    );
  });
}
