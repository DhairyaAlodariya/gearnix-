export default function initCountdown() {
  var els = document.querySelectorAll('.section-countdown-weekly .countdownfree[data-countdown]');
  if (!els.length) return;
  var D = 86400000,
    H = 3600000,
    M = 60000;
  function pad(v) {
    return String(v).padStart(2, '0');
  }
  function update() {
    var now = new Date();
    els.forEach(function (el) {
      var raw = el.getAttribute('data-countdown').replace(/\//g, '-');
      if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) raw += 'T00:00:00';
      var t = new Date(raw);
      if (el.getAttribute('data-restart') === 'true' && t <= now) {
        var e2 = now - t;
        t = new Date(t.getTime() + (Math.floor(e2 / (7 * D)) + 1) * 7 * D);
      }
      var diff = Math.max(0, t - now);
      var ds = el.querySelector('[data-unit="days"]'),
        hs = el.querySelector('[data-unit="hours"]'),
        ms = el.querySelector('[data-unit="mins"]'),
        ss = el.querySelector('[data-unit="secs"]');
      if (ds) ds.textContent = pad(Math.floor(diff / D));
      if (hs) hs.textContent = pad(Math.floor((diff % D) / H));
      if (ms) ms.textContent = pad(Math.floor((diff % H) / M));
      if (ss) ss.textContent = pad(Math.floor((diff % M) / 1000));
    });
  }
  update();
  setInterval(update, 1000);
}
