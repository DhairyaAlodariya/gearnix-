export default function initImageSplit() {
  var section = document.querySelector('.section-image-split');
  if (!section) return;
  var columns = Array.from(section.querySelectorAll('.split-image__column'));
  function setActive(col) {
    columns.forEach(function (c) {
      c.classList.toggle('is-active', c === col);
      c.classList.toggle('act', c === col);
    });
  }
  if (columns.length && !section.querySelector('.split-image__column.is-active'))
    setActive(columns[0]);
  section.addEventListener('click', function (e) {
    var link = e.target.closest('.gallery-image__link');
    if (!link) return;
    e.preventDefault();
    var col = link.closest('.split-image__column');
    if (col) setActive(col);
  });
}
