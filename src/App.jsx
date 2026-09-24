import React, { useEffect } from 'react';
import Header from './components/Header.jsx';
import MobileNav from './components/MobileNav.jsx';
import MobileBottomNav from './components/MobileBottomNav.jsx';
import HeroSlideshow from './components/HeroSlideshow.jsx';
import PolicySection from './components/PolicySection.jsx';
import ImageGroup from './components/ImageGroup.jsx';
import Categories from './components/Categories.jsx';
import GalleryImage from './components/GalleryImage.jsx';
import TopRatedProducts from './components/TopRatedProducts.jsx';
import WeeklyDeals from './components/WeeklyDeals.jsx';
import NewArrivals from './components/NewArrivals.jsx';
import Brands from './components/Brands.jsx';
import VideoSection from './components/VideoSection.jsx';
import CustomerReviews from './components/CustomerReviews.jsx';
import FeaturedProduct from './components/FeaturedProduct.jsx';
import BlogSection from './components/BlogSection.jsx';
import Footer from './components/Footer.jsx';
import UtilityOverlay from './components/UtilityOverlay.jsx';
import initHeroCarousel from './js/heroCarousel.js';
import initSlideshowParallax from './js/slideshowParallax.js';
import initMobileNav from './js/mobileNav.js';
import initUtilityPanel from './js/utilityPanel.js';
import initCountdown from './js/countdown.js';
import initNewArrivals from './js/newArrivals.js';
import initVideoSection from './js/videoSection.js';
import initImageSplit from './js/imageSplit.js';

function App() {
  useEffect(() => {
    initHeroCarousel();
    initSlideshowParallax();
    initMobileNav();
    initUtilityPanel();
    initCountdown();
    initNewArrivals();
    initVideoSection();
    initImageSplit();
    document
      .querySelectorAll('.top-rated-action[href="#"],.arrival-card__action[href="#"]')
      .forEach((l) => {
        l.addEventListener('click', (e) => e.preventDefault());
      });
  }, []);
  return (
    <>
      <div
        id="shopify-section-sections--15840383205583__header"
        className="shopify-section shopify-section-group-header-group"
      >
        <Header />
        <MobileNav />
      </div>

      <MobileBottomNav />

      <main>
        <HeroSlideshow />
        <PolicySection />
        <ImageGroup />
        <Categories />
        <GalleryImage />
        <TopRatedProducts />
        <WeeklyDeals />
        <NewArrivals />
        <Brands />
        <VideoSection />
        <CustomerReviews />
        <FeaturedProduct />
        <BlogSection />
      </main>

      <Footer />
      <UtilityOverlay />
    </>
  );
}
export default App;
