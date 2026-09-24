// Re-trigger animations on slide change
const heroCarousel = document.getElementById('heroCarousel');
if (heroCarousel) {
    heroCarousel.addEventListener('slide.bs.carousel', function (e) {
        const incoming = e.relatedTarget;
        incoming.querySelectorAll('.caption-1, .caption-2, .caption-btn, .hero-product, .hero-mark').forEach((el) => {
            el.style.animation = 'none';
            el.offsetHeight; // reflow
            el.style.animation = '';
        });
    });

    heroCarousel.addEventListener('slid.bs.carousel', function (e) {
        document.querySelectorAll('.dot-color').forEach((dot, i) => {
            dot.classList.toggle('active', i === e.to);
        });
    });

    document.querySelectorAll('.dot-color').forEach((dot, i) => {
        dot.addEventListener('click', () => {
            const carousel = bootstrap.Carousel.getOrCreateInstance(heroCarousel);
            carousel.to(i);
        });
    });
}

(() => {
            const section = document.querySelector('.section-slideshow');
            if (!section) return;

            const layers = Array.from(section.querySelectorAll('.layer'));
            if (!layers.length) return;

            let rect = null;
            const maxMove = 20;

            const updateRect = () => {
                rect = section.getBoundingClientRect();
            };

            const applyTransform = (xRatio, yRatio) => {
                layers.forEach((layer) => {
                    const depth = parseFloat(layer.dataset.depth) || 0.2;
                    const moveX = -xRatio * maxMove * depth;
                    const moveY = -yRatio * maxMove * depth;
                    layer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
                });
            };

            updateRect();
            window.addEventListener('resize', updateRect);

            let rafId = null;
            let xRatio = 0;
            let yRatio = 0;

            const onMove = (event) => {
                if (!rect) return;
                const x = (event.clientX - rect.left) / rect.width - 0.5;
                const y = (event.clientY - rect.top) / rect.height - 0.5;
                xRatio = Math.max(-0.5, Math.min(0.5, x));
                yRatio = Math.max(-0.5, Math.min(0.5, y));
                if (rafId) return;
                rafId = requestAnimationFrame(() => {
                    applyTransform(xRatio * 2, yRatio * 2);
                    rafId = null;
                });
            };

            const onLeave = () => {
                applyTransform(0, 0);
            };

            section.addEventListener('mousemove', onMove);
            section.addEventListener('mouseleave', onLeave);
        })();

(() => {
            const menuButtons = Array.from(document.querySelectorAll('.menu-toggle-btn'));
            const mobileNav = document.getElementById('mobileNav');
            const mobileSearchTrigger = document.querySelector('.mobile-search-trigger');

            if (!menuButtons.length || !mobileNav) return;

            const searchForm = mobileNav.querySelector('.mobile-nav-search');
            const searchInput = mobileNav.querySelector('.mobile-nav-search-input');
            const searchClear = mobileNav.querySelector('.mobile-nav-search-clear');
            const panelsWrap = mobileNav.querySelector('.mobile-nav-panels');
            const resultsBlock = mobileNav.querySelector('.mobile-nav-results');
            const resultsList = mobileNav.querySelector('.mobile-nav-results-list');
            const panelElements = Array.from(mobileNav.querySelectorAll('.mobile-menu-panel'));
            const nextButtons = Array.from(mobileNav.querySelectorAll('.mobile-panel-next'));
            const backButtons = Array.from(mobileNav.querySelectorAll('.mobile-panel-back'));
            const panelMap = new Map(panelElements.map((panel) => [panel.dataset.panel, panel]));
            const linkEntries = Array.from(mobileNav.querySelectorAll('.mobile-menu-panel a')).map((link) => {
                const panel = link.closest('.mobile-menu-panel');
                return {
                    href: link.getAttribute('href') || '#',
                    label: link.textContent.trim(),
                    panel: panel?.dataset.panel || 'root',
                    panelTitle: panel?.dataset.title || 'Menu',
                    searchText: `${link.textContent} ${panel?.dataset.title || ''}`.toLowerCase(),
                };
            });
            const searchableEntries = [...linkEntries];
            let panelStack = ['root'];

            const syncButtons = (isOpen) => {
                menuButtons.forEach((button) => {
                    button.classList.toggle('is-active', isOpen);
                    button.setAttribute('aria-expanded', String(isOpen));
                });
            };

            const escapeHtml = (value) => value
                .replaceAll('&', '&amp;')
                .replaceAll('<', '&lt;')
                .replaceAll('>', '&gt;')
                .replaceAll('"', '&quot;')
                .replaceAll("'", '&#39;');

            const setActivePanel = (panelId) => {
                panelElements.forEach((panel) => {
                    panel.classList.toggle('is-active', panel.dataset.panel === panelId);
                });
            };

            const resetPanels = () => {
                panelStack = ['root'];
                setActivePanel('root');
            };

            const openPanel = (panelId) => {
                if (!panelMap.has(panelId)) return;
                if (panelStack[panelStack.length - 1] !== panelId) {
                    panelStack.push(panelId);
                }
                setActivePanel(panelId);
            };

            const goBackToPanel = (panelId) => {
                if (!panelMap.has(panelId)) {
                    resetPanels();
                    return;
                }

                const stackIndex = panelStack.lastIndexOf(panelId);
                panelStack = stackIndex >= 0 ? panelStack.slice(0, stackIndex + 1) : ['root', panelId];
                setActivePanel(panelId);
            };

            const clearSearchState = () => {
                if (searchInput) {
                    searchInput.value = '';
                }
                if (searchClear) {
                    searchClear.hidden = true;
                }
                if (resultsBlock) {
                    resultsBlock.hidden = true;
                }
                if (resultsList) {
                    resultsList.innerHTML = '';
                }
                if (panelsWrap) {
                    panelsWrap.hidden = false;
                }
                mobileNav.classList.remove('is-searching');
            };

            const renderResults = (matches) => {
                if (!resultsList) return;

                if (!matches.length) {
                    resultsList.innerHTML = '<li class="mobile-nav-empty">No matching items found.</li>';
                    return;
                }

                resultsList.innerHTML = matches.map((item) => `
                    <li>
                        <a href="${escapeHtml(item.href)}" data-result-link="true">
                            <span>${escapeHtml(item.label)}</span>
                            <small>${escapeHtml(item.panelTitle)}</small>
                        </a>
                    </li>
                `).join('');

                resultsList.querySelectorAll('a').forEach((link) => {
                    link.addEventListener('click', closeMenu);
                });
            };

            const filterMenu = () => {
                if (!searchInput || !resultsBlock || !panelsWrap) return;

                const term = searchInput.value.trim().toLowerCase();
                if (searchClear) {
                    searchClear.hidden = !term;
                }

                if (!term) {
                    clearSearchState();
                    resetPanels();
                    return;
                }

                const matches = searchableEntries.filter((item) => item.searchText.includes(term));
                renderResults(matches);
                panelsWrap.hidden = true;
                resultsBlock.hidden = false;
                mobileNav.classList.add('is-searching');
            };

            const closeMenu = () => {
                syncButtons(false);
                mobileNav.classList.remove('is-open');
                mobileNav.setAttribute('aria-hidden', 'true');
                document.body.classList.remove('mobile-nav-open');
                clearSearchState();
                resetPanels();
            };

            const openMenu = () => {
                syncButtons(true);
                mobileNav.classList.add('is-open');
                mobileNav.setAttribute('aria-hidden', 'false');
                document.body.classList.add('mobile-nav-open');
                setActivePanel(panelStack[panelStack.length - 1] || 'root');
            };

            const focusSearch = () => {
                if (!searchInput) return;
                window.requestAnimationFrame(() => {
                    searchInput.focus();
                });
            };

            menuButtons.forEach((button) => {
                button.addEventListener('click', (event) => {
                    event.stopPropagation();
                    if (mobileNav.classList.contains('is-open')) {
                        closeMenu();
                        return;
                    }
                    openMenu();
                });
            });

            nextButtons.forEach((button) => {
                button.addEventListener('click', () => {
                    openPanel(button.dataset.target || 'root');
                });
            });

            backButtons.forEach((button) => {
                button.addEventListener('click', () => {
                    goBackToPanel(button.dataset.target || 'root');
                });
            });

            searchForm?.addEventListener('submit', (event) => {
                event.preventDefault();
                filterMenu();
            });

            searchInput?.addEventListener('input', filterMenu);

            searchClear?.addEventListener('click', () => {
                clearSearchState();
                resetPanels();
                searchInput?.focus();
            });

            mobileSearchTrigger?.addEventListener('click', (event) => {
                event.stopPropagation();
                if (!mobileNav.classList.contains('is-open')) {
                    openMenu();
                }
                clearSearchState();
                resetPanels();
                focusSearch();
            });

            mobileNav.querySelectorAll('a').forEach((link) => {
                link.addEventListener('click', closeMenu);
            });

            document.addEventListener('click', (event) => {
                if (!mobileNav.classList.contains('is-open')) return;
                if (event.target.closest('.mobile-nav-panel') || event.target.closest('.menu-toggle-btn')) return;
                closeMenu();
            });

            window.addEventListener('keydown', (event) => {
                if (event.key === 'Escape') {
                    closeMenu();
                }
            });

            window.addEventListener('resize', () => {
                if (window.innerWidth >= 1200) {
                    closeMenu();
                }
            });
        })();

(() => {
            const overlay = document.querySelector('.utility-overlay');
            const panels = {
                search_canvas: document.getElementById('searchCanvas'),
                header_settings: document.getElementById('headerSettingsPanel'),
            };
            const triggerSelector = '.nov_btn_act[data-toggle="search_canvas"], .nov_btn_act[data-toggle="header_settings"]';
            const triggers = Array.from(document.querySelectorAll(triggerSelector));
            const closeButtons = Array.from(document.querySelectorAll('[data-utility-close]'));
            const searchInput = document.getElementById('utilitySearchInput');
            let activePanel = null;

            if (!overlay || !triggers.length) return;

            const closePanels = () => {
                Object.values(panels).forEach((panel) => {
                    if (!panel) return;
                    panel.classList.remove('is-open');
                    panel.setAttribute('aria-hidden', 'true');
                });
                overlay.classList.remove('is-open');
                overlay.hidden = true;
                document.body.classList.remove('utility-panel-open');
                activePanel = null;
            };

            const openPanel = (key) => {
                const panel = panels[key];
                if (!panel) return;

                Object.values(panels).forEach((item) => {
                    if (!item) return;
                    item.classList.toggle('is-open', item === panel);
                    item.setAttribute('aria-hidden', item === panel ? 'false' : 'true');
                });

                overlay.hidden = false;
                overlay.classList.add('is-open');
                document.body.classList.add('utility-panel-open');
                activePanel = panel;

                if (key === 'search_canvas' && searchInput) {
                    window.requestAnimationFrame(() => searchInput.focus());
                }
            };

            triggers.forEach((trigger) => {
                trigger.addEventListener('click', (event) => {
                    event.preventDefault();
                    const target = trigger.getAttribute('data-toggle');
                    if (activePanel && panels[target] === activePanel) {
                        closePanels();
                        return;
                    }
                    openPanel(target);
                });
            });

            closeButtons.forEach((button) => {
                button.addEventListener('click', closePanels);
            });

            window.addEventListener('keydown', (event) => {
                if (event.key === 'Escape' && activePanel) {
                    closePanels();
                }
            });
        })();

// Countdown timer
        (function () {
            var countdowns = document.querySelectorAll(".section-countdown-weekly .countdownfree[data-countdown]");
            if (!countdowns.length) return;
            var DAY_MS = 86400000, HOUR_MS = 3600000, MIN_MS = 60000;
            function pad(v) { return String(v).padStart(2, "0"); }
            function update() {
                var now = new Date();
                countdowns.forEach(function (el) {
                    var raw = el.getAttribute("data-countdown").replace(/\//g, "-");
                    if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) raw += "T00:00:00";
                    var target = new Date(raw);
                    if (el.getAttribute("data-restart") === "true" && target <= now) {
                        var elapsed = now - target;
                        target = new Date(target.getTime() + (Math.floor(elapsed / (7 * DAY_MS)) + 1) * 7 * DAY_MS);
                    }
                    var diff = Math.max(0, target - now);
                    var days = el.querySelector('[data-unit="days"]');
                    var hours = el.querySelector('[data-unit="hours"]');
                    var mins = el.querySelector('[data-unit="mins"]');
                    var secs = el.querySelector('[data-unit="secs"]');
                    if (days) days.textContent = pad(Math.floor(diff / DAY_MS));
                    if (hours) hours.textContent = pad(Math.floor((diff % DAY_MS) / HOUR_MS));
                    if (mins) mins.textContent = pad(Math.floor((diff % HOUR_MS) / MIN_MS));
                    if (secs) secs.textContent = pad(Math.floor((diff % MIN_MS) / 1000));
                });
            }
            update(); setInterval(update, 1000);
        })();

// New arrivals category switcher
        (function () {
            var section = document.querySelector(".section-new-arrivals");
            if (!section) return;

            var grid = section.querySelector(".new-arrivals-grid");
            var tabs = Array.from(section.querySelectorAll("[data-arrivals-tab]"));
            if (!grid || !tabs.length) return;
            var tabsWrap = section.querySelector(".new-arrivals-tabs");

            var products = {
                mouse: [
                    { title: "Eclipse RGB Gaming Mouse", image: "images/6_ffe55de6-1256-45b9-bca0-00f85957e64d_540x.webp", secondaryImage: "images/3_fb5a9e0b-2263-43eb-b897-afd1614451dd_540x.webp", price: "$164.00" },
                    { title: "Nebula Quantum Mouse", image: "images/1_1cdbd369-2009-4ac1-af11-43f178a69950_540x.webp", secondaryImage: "images/4_92a5ebaf-ad49-4489-b8c0-186aa464514e_540x.webp", price: "$222.00" },
                    { title: "Phantom Pulse Gaming Mouse", image: "images/4_92a5ebaf-ad49-4489-b8c0-186aa464514e_540x.webp", secondaryImage: "images/1_1cdbd369-2009-4ac1-af11-43f178a69950_540x.webp", price: "$192.00" },
                    { title: "Zephyr Wireless Gaming Mouse", image: "images/3_fb5a9e0b-2263-43eb-b897-afd1614451dd_540x.webp", secondaryImage: "images/6_ffe55de6-1256-45b9-bca0-00f85957e64d_540x.webp", price: "$215.00", comparePrice: "$236.00" }
                ],
                keyboard: [
                    { title: "Galaxy Striker Keyboard", image: "images/2_3eb15383-0ff8-49c5-9fd5-bc75385bccfa_540x.webp", secondaryImage: "images/5_760423b4-94cc-4aaf-9c22-84dd3fec331a_540x.webp", price: "$165.00" },
                    { title: "Aurora Sentinel Keyboard", image: "images/5_760423b4-94cc-4aaf-9c22-84dd3fec331a_540x.webp", secondaryImage: "images/2_3eb15383-0ff8-49c5-9fd5-bc75385bccfa_540x.webp", price: "$137.00" },
                    { title: "Nova Sync Mechanical Keyboard", image: "images/5_5dcff11e-9abe-4555-abe9-043d95c2b189_540x.webp", secondaryImage: "images/3_36346077-752d-4678-a552-fdda97d02184_380x.webp", price: "$178.00", comparePrice: "$205.00" },
                    { title: "RiftCore TKL Keyboard", image: "images/3_36346077-752d-4678-a552-fdda97d02184_380x.webp", secondaryImage: "images/5_5dcff11e-9abe-4555-abe9-043d95c2b189_540x.webp", price: "$149.00" }
                ],
                controller: [
                    { title: "Quantum Vanguard Controller", image: "images/img-1-16_900x.webp", secondaryImage: "images/img-1-7_1080x.webp", price: "$85.99" },
                    { title: "Vortex Reaper Controller", image: "images/img-1-7_1080x.webp", secondaryImage: "images/img-1-16_900x.webp", price: "$189.00" },
                    { title: "Pulse Raid Gamepad", image: "images/img-1-6_580x.webp", secondaryImage: "images/img-1-7_1080x.webp", price: "$128.00" },
                    { title: "StormCore Wireless Controller", image: "images/img-1-16_900x.webp", secondaryImage: "images/img-1-6_580x.webp", price: "$156.00", comparePrice: "$184.00" }
                ],
                headphone: [
                    { title: "Phantom Elite Headset Pro", image: "images/img-1-9.webp", secondaryImage: "images/img-1-8_1080x.webp", price: "$192.00" },
                    { title: "Quantum Pro Headphones", image: "images/img-1-8_1080x.webp", secondaryImage: "images/img-1-9.webp", price: "$215.00" },
                    { title: "NovaTune Gaming Headset", image: "images/img-1-5_580x.webp", secondaryImage: "images/img-1-8_1080x.webp", price: "$149.00" },
                    { title: "EchoStrike Wireless Headset", image: "images/img-1-5_580x.webp", secondaryImage: "images/img-1-9.webp", price: "$174.00" }
                ]
            };

            var mobilePicker = document.createElement("div");
            mobilePicker.className = "new-arrivals-picker";
            mobilePicker.innerHTML = '<label class="new-arrivals-picker__label visually-hidden" for="new-arrivals-select">Choose category</label><select class="new-arrivals-picker__select" id="new-arrivals-select" aria-label="Choose new arrivals category"></select>';
            var mobileSelect = mobilePicker.querySelector(".new-arrivals-picker__select");

            tabs.forEach(function (tab) {
                var option = document.createElement("option");
                option.value = tab.getAttribute("data-arrivals-tab");
                option.textContent = tab.textContent.trim();
                mobileSelect.appendChild(option);
            });

            if (tabsWrap) {
                tabsWrap.insertAdjacentElement("afterend", mobilePicker);
            }

            function renderCards(items) {
                grid.innerHTML = items.map(function (item) {
                    var secondaryImage = item.secondaryImage || item.image;
                    return `
                        <article class="arrival-card">
                            <a href="#" class="arrival-card__media">
                                <img class="arrival-card__image arrival-card__image--primary" src="${item.image}" alt="${item.title}" loading="lazy">
                                <img class="arrival-card__image arrival-card__image--secondary" src="${secondaryImage}" alt="${item.title} alternate" loading="lazy">
                            </a>
                            <div class="arrival-card__actions">
                                <a href="#" class="arrival-card__action" aria-label="Add To Wishlist"><i class="fa-regular fa-star"></i></a>
                                <a href="#" class="arrival-card__action" aria-label="Add To Cart"><i class="fa-solid fa-cart-shopping"></i></a>
                                <a href="#" class="arrival-card__action" aria-label="Quick View"><i class="fa-regular fa-eye"></i></a>
                            </div>
                            <div class="arrival-card__body">
                                <h3 class="arrival-card__title"><a href="#">${item.title}</a></h3>
                                <div class="arrival-card__rating" aria-label="Rated 5 out of 5"><span>&#9733;&#9733;&#9733;&#9733;&#9733;</span></div>
                                <div class="arrival-card__price-row">
                                    <span class="arrival-card__price">${item.price}</span>
                                    ${item.comparePrice ? `<span class="arrival-card__compare">${item.comparePrice}</span>` : ""}
                                </div>
                            </div>
                        </article>
                    `;
                }).join("");
            }

            function setActiveTab(key) {
                tabs.forEach(function (tab) {
                    var isActive = tab.getAttribute("data-arrivals-tab") === key;
                    tab.classList.toggle("is-active", isActive);
                    tab.setAttribute("aria-selected", isActive ? "true" : "false");
                    tab.setAttribute("tabindex", isActive ? "0" : "-1");
                    if (isActive && tab.id) {
                        grid.setAttribute("aria-labelledby", tab.id);
                    }
                });

                if (mobileSelect && mobileSelect.value !== key) {
                    mobileSelect.value = key;
                }

                renderCards(products[key] || products.mouse);
            }

            tabs.forEach(function (tab, index) {
                tab.addEventListener("click", function () {
                    setActiveTab(tab.getAttribute("data-arrivals-tab"));
                });

                tab.addEventListener("keydown", function (event) {
                    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
                    event.preventDefault();
                    var direction = event.key === "ArrowRight" ? 1 : -1;
                    var nextIndex = (index + direction + tabs.length) % tabs.length;
                    tabs[nextIndex].focus();
                    setActiveTab(tabs[nextIndex].getAttribute("data-arrivals-tab"));
                });
            });

            mobileSelect.addEventListener("change", function () {
                setActiveTab(mobileSelect.value);
            });

            setActiveTab("mouse");
        })();

// Keep placeholder product action links from jumping the page
        (function () {
            document.querySelectorAll('.top-rated-action[href="#"], .arrival-card__action[href="#"]').forEach(function (link) {
                link.addEventListener("click", function (event) {
                    event.preventDefault();
                });
            });
        })();

// Video play/pause
        (function () {
            document.querySelectorAll(".section-video .item.youtube").forEach(function (section) {
                var video = section.querySelector("video");
                var btn = section.querySelector(".btn-video__play");
                if (!video || !btn) return;
                video.pause();
                section.classList.remove("is-playing");
                btn.addEventListener("click", function () {
                    if (video.paused) {
                        video.play().then(function () { section.classList.add("is-playing"); btn.setAttribute("aria-label", "Pause background video"); }).catch(function () { });
                    } else {
                        video.pause(); section.classList.remove("is-playing"); btn.setAttribute("aria-label", "Play background video");
                    }
                });
            });
        })();

// Image split hover
        (function () {
            var section = document.querySelector(".section-image-split");
            if (!section) return;
            var columns = Array.from(section.querySelectorAll(".split-image__column"));
            function setActive(col) {
                columns.forEach(function (c) {
                    c.classList.toggle("is-active", c === col);
                    c.classList.toggle("act", c === col);
                });
            }
            if (columns.length && !section.querySelector(".split-image__column.is-active")) {
                setActive(columns[0]);
            }
            section.addEventListener("click", function (e) {
                var link = e.target.closest(".gallery-image__link");
                if (!link) return;
                e.preventDefault();
                var col = link.closest(".split-image__column");
                if (col) setActive(col);
            });
        })();
