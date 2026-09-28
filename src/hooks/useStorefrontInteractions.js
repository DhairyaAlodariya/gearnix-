import { useEffect } from 'react';
import initHeroCarousel from '../lib/interactions/heroCarousel.js';
import initSlideshowParallax from '../lib/interactions/slideshowParallax.js';
import initMobileNav from '../lib/interactions/mobileNav.js';
import initUtilityPanel from '../lib/interactions/utilityPanel.js';
import initCountdown from '../lib/interactions/countdown.js';
import initVideoSection from '../lib/interactions/videoSection.js';
import initImageSplit from '../lib/interactions/imageSplit.js';

export default function useStorefrontInteractions() {
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    initHeroCarousel(signal);
    initSlideshowParallax(signal);
    initMobileNav(signal);
    initUtilityPanel(signal);
    initCountdown(signal);
    initVideoSection(signal);
    initImageSplit(signal);

    document
      .querySelectorAll('.top-rated-action[href="#"],.arrival-card__action[href="#"]')
      .forEach((link) => {
        link.addEventListener('click', (event) => event.preventDefault(), { signal });
      });

    return () => controller.abort();
  }, []);
}
