export default function initNewArrivals() {
  var section = document.querySelector('.section-new-arrivals');
  if (!section) return;
  var grid = section.querySelector('.new-arrivals-grid');
  var tabs = Array.from(section.querySelectorAll('[data-arrivals-tab]'));
  if (!grid || !tabs.length) return;
  var tabsWrap = section.querySelector('.new-arrivals-tabs');
  var products = {
    mouse: [
      {
        title: 'Eclipse RGB Gaming Mouse',
        image: '/images/6_ffe55de6-1256-45b9-bca0-00f85957e64d_540x.webp',
        secondaryImage: '/images/3_fb5a9e0b-2263-43eb-b897-afd1614451dd_540x.webp',
        price: '$164.00',
      },
      {
        title: 'Nebula Quantum Mouse',
        image: '/images/1_1cdbd369-2009-4ac1-af11-43f178a69950_540x.webp',
        secondaryImage: '/images/4_92a5ebaf-ad49-4489-b8c0-186aa464514e_540x.webp',
        price: '$222.00',
      },
      {
        title: 'Phantom Pulse Gaming Mouse',
        image: '/images/4_92a5ebaf-ad49-4489-b8c0-186aa464514e_540x.webp',
        secondaryImage: '/images/1_1cdbd369-2009-4ac1-af11-43f178a69950_540x.webp',
        price: '$192.00',
      },
      {
        title: 'Zephyr Wireless Gaming Mouse',
        image: '/images/3_fb5a9e0b-2263-43eb-b897-afd1614451dd_540x.webp',
        secondaryImage: '/images/6_ffe55de6-1256-45b9-bca0-00f85957e64d_540x.webp',
        price: '$215.00',
        comparePrice: '$236.00',
      },
    ],
    keyboard: [
      {
        title: 'Galaxy Striker Keyboard',
        image: '/images/2_3eb15383-0ff8-49c5-9fd5-bc75385bccfa_540x.webp',
        secondaryImage: '/images/5_760423b4-94cc-4aaf-9c22-84dd3fec331a_540x.webp',
        price: '$165.00',
      },
      {
        title: 'Aurora Sentinel Keyboard',
        image: '/images/5_760423b4-94cc-4aaf-9c22-84dd3fec331a_540x.webp',
        secondaryImage: '/images/2_3eb15383-0ff8-49c5-9fd5-bc75385bccfa_540x.webp',
        price: '$137.00',
      },
      {
        title: 'Nova Sync Mechanical Keyboard',
        image: '/images/5_5dcff11e-9abe-4555-abe9-043d95c2b189_540x.webp',
        secondaryImage: '/images/3_36346077-752d-4678-a552-fdda97d02184_380x.webp',
        price: '$178.00',
        comparePrice: '$205.00',
      },
      {
        title: 'RiftCore TKL Keyboard',
        image: '/images/3_36346077-752d-4678-a552-fdda97d02184_380x.webp',
        secondaryImage: '/images/5_5dcff11e-9abe-4555-abe9-043d95c2b189_540x.webp',
        price: '$149.00',
      },
    ],
    controller: [
      {
        title: 'Quantum Vanguard Controller',
        image: '/images/img-1-16_900x.webp',
        secondaryImage: '/images/img-1-7_1080x.webp',
        price: '$85.99',
      },
      {
        title: 'Vortex Reaper Controller',
        image: '/images/img-1-7_1080x.webp',
        secondaryImage: '/images/img-1-16_900x.webp',
        price: '$189.00',
      },
      {
        title: 'Pulse Raid Gamepad',
        image: '/images/img-1-6_580x.webp',
        secondaryImage: '/images/img-1-7_1080x.webp',
        price: '$128.00',
      },
      {
        title: 'StormCore Wireless Controller',
        image: '/images/img-1-16_900x.webp',
        secondaryImage: '/images/img-1-6_580x.webp',
        price: '$156.00',
        comparePrice: '$184.00',
      },
    ],
    headphone: [
      {
        title: 'Phantom Elite Headset Pro',
        image: '/images/img-1-9.webp',
        secondaryImage: '/images/img-1-8_1080x.webp',
        price: '$192.00',
      },
      {
        title: 'Quantum Pro Headphones',
        image: '/images/img-1-8_1080x.webp',
        secondaryImage: '/images/img-1-9.webp',
        price: '$215.00',
      },
      {
        title: 'NovaTune Gaming Headset',
        image: '/images/img-1-5_580x.webp',
        secondaryImage: '/images/img-1-8_1080x.webp',
        price: '$149.00',
      },
      {
        title: 'EchoStrike Wireless Headset',
        image: '/images/img-1-5_580x.webp',
        secondaryImage: '/images/img-1-9.webp',
        price: '$174.00',
      },
    ],
  };
  var mobilePicker = document.createElement('div');
  mobilePicker.className = 'new-arrivals-picker';
  mobilePicker.innerHTML =
    '<label class="new-arrivals-picker__label visually-hidden" for="new-arrivals-select">Choose category</label><select class="new-arrivals-picker__select" id="new-arrivals-select" aria-label="Choose new arrivals category"></select>';
  var mobileSelect = mobilePicker.querySelector('.new-arrivals-picker__select');
  tabs.forEach(function (tab) {
    var opt = document.createElement('option');
    opt.value = tab.getAttribute('data-arrivals-tab');
    opt.textContent = tab.textContent.trim();
    mobileSelect.appendChild(opt);
  });
  if (tabsWrap) tabsWrap.insertAdjacentElement('afterend', mobilePicker);
  function renderCards(items) {
    grid.innerHTML = items
      .map(function (item) {
        var si = item.secondaryImage || item.image;
        return (
          '<article class="arrival-card"><a href="#" class="arrival-card__media"><img class="arrival-card__image arrival-card__image--primary" src="' +
          item.image +
          '" alt="' +
          item.title +
          '" loading="lazy"><img class="arrival-card__image arrival-card__image--secondary" src="' +
          si +
          '" alt="' +
          item.title +
          ' alternate" loading="lazy"></a><div class="arrival-card__actions"><a href="#" class="arrival-card__action" aria-label="Add To Wishlist"><i class="fa-regular fa-star"></i></a><a href="#" class="arrival-card__action" aria-label="Add To Cart"><i class="fa-solid fa-cart-shopping"></i></a><a href="#" class="arrival-card__action" aria-label="Quick View"><i class="fa-regular fa-eye"></i></a></div><div class="arrival-card__body"><h3 class="arrival-card__title"><a href="#">' +
          item.title +
          '</a></h3><div class="arrival-card__rating" aria-label="Rated 5 out of 5"><span>&#9733;&#9733;&#9733;&#9733;&#9733;</span></div><div class="arrival-card__price-row"><span class="arrival-card__price">' +
          item.price +
          '</span>' +
          (item.comparePrice
            ? '<span class="arrival-card__compare">' + item.comparePrice + '</span>'
            : '') +
          '</div></div></article>'
        );
      })
      .join('');
  }
  function setActiveTab(key) {
    tabs.forEach(function (tab) {
      var isA = tab.getAttribute('data-arrivals-tab') === key;
      tab.classList.toggle('is-active', isA);
      tab.setAttribute('aria-selected', isA ? 'true' : 'false');
      tab.setAttribute('tabindex', isA ? '0' : '-1');
      if (isA && tab.id) grid.setAttribute('aria-labelledby', tab.id);
    });
    if (mobileSelect && mobileSelect.value !== key) mobileSelect.value = key;
    renderCards(products[key] || products.mouse);
  }
  tabs.forEach(function (tab, index) {
    tab.addEventListener('click', function () {
      setActiveTab(tab.getAttribute('data-arrivals-tab'));
    });
    tab.addEventListener('keydown', function (event) {
      if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
      event.preventDefault();
      var dir = event.key === 'ArrowRight' ? 1 : -1;
      var ni = (index + dir + tabs.length) % tabs.length;
      tabs[ni].focus();
      setActiveTab(tabs[ni].getAttribute('data-arrivals-tab'));
    });
  });
  mobileSelect.addEventListener('change', function () {
    setActiveTab(mobileSelect.value);
  });
  setActiveTab('mouse');
}
