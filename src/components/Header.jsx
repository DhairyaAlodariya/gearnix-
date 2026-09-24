import React from 'react'
import './Header.css'
export default function Header() {
  return (
    <header className="site-header sticky-header color-scheme-b49eb042-1b96-4650-91c9-2f486801d4e8"
      data-section-id="sections--15840383205583__header" data-section-type="nov-slick"
      style={{"--bg-gradient-time": "20s", height: "auto"}}>
      <div className="header-content position-relative header-search__parent d-none d-md-block color-scheme-b49eb042-1b96-4650-91c9-2f486801d4e8 gradient-animate">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-3 pt-35 pb-35 pt-md-20 pb-md-20 d-flex align-items-center">
              <button className="site-nav--btn menu-toggle-btn d-flex d-xl-none align-items-center" type="button" aria-label="Toggle navigation" aria-expanded="false" aria-controls="mobileNav"><span></span></button>
              <div className="contentsticky_logo d-flex align-items-center">
                <a href="/" className="site-header__logo d-flex position-relative"><img src="/images/logo.avif" alt="Gearnix" className="w-100" /></a>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <div className="contentsticky_menu d-none d-xl-block">
                <nav id="AccessibleNav">
                  <ul className="site-nav">
                    <li className="nav--lv1 site-nav--active"><a href="/" className="site-nav__link--main" title="Home"><span className="site-nav--title">Home</span></a></li>
                    <li className="nav--lv1 parent--lv1 has-dropdown has-mega">
                      <a href="#" className="site-nav__link--main" title="Collections"><span className="site-nav--title">Collections</span><span className="site-nav--direc"><i className="fa-solid fa-chevron-down"></i></span></a>
                      <div className="nav-dropdown--lv1 megaMenu">
                        <div className="site-nav__mega--content row g-0 align-items-start">
                          <div className="col-xl-3 col-lg-3 site--nav-collection">
                            <div className="nav--collec-item"><a href="#"><span>Best Sellers</span><i>&#8250;</i></a></div>
                            <div className="nav--collec-item"><a href="#"><span>New Arrival</span><i>&#8250;</i></a></div>
                            <div className="nav--collec-item"><a href="#"><span>Top Trending</span><i>&#8250;</i></a></div>
                            <div className="nav--collec-item"><a href="#"><span>Denim Collection</span><i>&#8250;</i></a></div>
                          </div>
                          <div className="col-xl-9 col-lg-9">
                            <div className="row g-0 align-items-start">
                              <div className="col-xl-4 col-lg-4">
                                <ul className="site-nav--MenuLinks">
                                  <li className="site-nav__link--title"><a href="#">Collection Page</a></li>
                                  <li><a href="#" className="site-nav__link">Collection left sidebar</a></li>
                                  <li><a href="#" className="site-nav__link">Collection right sidebar</a></li>
                                  <li><a href="#" className="site-nav__link">Collection top sidebar</a></li>
                                  <li><a href="#" className="site-nav__link">Collection without sidebar</a></li>
                                  <li><a href="#" className="site-nav__link">Collection deals</a></li>
                                </ul>
                              </div>
                              <div className="col-xl-4 col-lg-4">
                                <ul className="site-nav--MenuLinks">
                                  <li className="site-nav__link--title"><a href="#">Collection Page</a></li>
                                  <li><a href="#" className="site-nav__link">Collection canvas on left</a></li>
                                  <li><a href="#" className="site-nav__link">Collection canvas on top</a></li>
                                  <li><a href="#" className="site-nav__link">Collection canvas on bottom</a></li>
                                  <li><a href="#" className="site-nav__link">Collection full width</a></li>
                                </ul>
                              </div>
                              <div className="col-xl-4 col-lg-4">
                                <ul className="site-nav--MenuLinks">
                                  <li className="site-nav__link--title"><a href="#">Collection Page</a></li>
                                  <li><a href="#" className="site-nav__link">Numbered Pagination</a></li>
                                  <li><a href="#" className="site-nav__link">Load More Button</a></li>
                                  <li><a href="#" className="site-nav__link">Infinity Scroll Load More</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav--lv1 parent--lv1 has-dropdown has-mega">
                      <a href="#" className="site-nav__link--main" title="Products"><span className="site-nav--title">Products</span><span className="site-nav--direc"><i className="fa-solid fa-chevron-down"></i></span></a>
                      <div className="nav-dropdown--lv1 megaMenu">
                        <div className="site-nav__mega--content row g-0 align-items-start">
                          <div className="col-xl-10 col-lg-8">
                            <div className="row g-0 align-items-start">
                              <div className="col-xl-4 col-lg-4">
                                <ul className="site-nav--MenuLinks">
                                  <li className="site-nav__link--title"><a href="#">Product Detail</a></li>
                                  <li><a href="#" className="site-nav__link">Product detail default</a></li>
                                  <li><a href="#" className="site-nav__link">Product detail thumb left 1</a></li>
                                  <li><a href="#" className="site-nav__link">Product detail thumb left 2</a></li>
                                  <li><a href="#" className="site-nav__link">Product detail thumb right</a></li>
                                  <li><a href="#" className="site-nav__link">Product deals countdown</a></li>
                                  <li><a href="#" className="site-nav__link">Product Detail Tab Accordion v1</a></li>
                                  <li><a href="#" className="site-nav__link">Product Detail Tab Accordion v2</a></li>
                                </ul>
                              </div>
                              <div className="col-xl-4 col-lg-4">
                                <ul className="site-nav--MenuLinks">
                                  <li className="site-nav__link--title"><a href="#">Product Detail</a></li>
                                  <li><a href="#" className="site-nav__link">Product detail thumb grid 1</a></li>
                                  <li><a href="#" className="site-nav__link">Product detail thumb grid 2</a></li>
                                  <li><a href="#" className="site-nav__link">Product detail image grid</a></li>
                                  <li><a href="#" className="site-nav__link">Product detail image scroll</a></li>
                                  <li><a href="#" className="site-nav__link">Product detail image slider 1</a></li>
                                  <li><a href="#" className="site-nav__link">Product detail image slider 2</a></li>
                                  <li><a href="#" className="site-nav__link">Product 3D, AR models</a></li>
                                </ul>
                              </div>
                              <div className="col-xl-4 col-lg-4">
                                <ul className="site-nav--MenuLinks">
                                  <li className="site-nav__link--title"><a href="#">Product Features</a></li>
                                  <li><a href="#" className="site-nav__link">Product Video</a></li>
                                  <li><a href="#" className="site-nav__link">Product Pre-Order</a></li>
                                  <li><a href="#" className="site-nav__link">Product Variant Dropbox Style</a></li>
                                  <li><a href="#" className="site-nav__link">Product Variant Image Swatch</a></li>
                                  <li><a href="#" className="site-nav__link">Product Variant Pattern</a></li>
                                  <li><a href="#" className="site-nav__link">Product Sticky Add To Cart</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-2 col-lg-4 nav--product">
                            <div className="site-nav--title__product"><span>Featured Product</span></div>
                            <div className="item-product">
                              <div className="thumbnail-container"><a href="#"><img src="/images/3_36346077-752d-4678-a552-fdda97d02184_380x.webp" alt="Onyx Predator" /></a></div>
                              <div className="product__info">
                                <div className="product__title"><a href="#">Onyx Predator</a></div>
                                <div className="product__price price-st"><span className="product-price__price">$19.99</span></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav--lv1 parent--lv1 has-dropdown">
                      <a href="#" className="site-nav__link--main" title="Pages"><span className="site-nav--title">Pages</span><span className="site-nav--direc"><i className="fa-solid fa-chevron-down"></i></span></a>
                      <div className="nav-dropdown--lv1 MenuDefault"><ul>
                        <li><a href="#" className="site-nav__link">404 Error</a></li>
                        <li><a href="#" className="site-nav__link">About Us</a></li>
                        <li><a href="#" className="site-nav__link">Contact Us</a></li>
                        <li><a href="#" className="site-nav__link">FAQs Page</a></li>
                        <li><a href="#" className="site-nav__link">Store Direction Page</a></li>
                        <li><a href="#" className="site-nav__link">Store Locations Page</a></li>
                        <li><a href="#" className="site-nav__link">Testimonials Page</a></li>
                      </ul></div>
                    </li>
                    <li className="nav--lv1 parent--lv1 has-dropdown">
                      <a href="#" className="site-nav__link--main" title="Blog"><span className="site-nav--title">Blog</span><span className="site-nav--direc"><i className="fa-solid fa-chevron-down"></i></span></a>
                      <div className="nav-dropdown--lv1 MenuDefault"><ul>
                        <li><a href="#" className="site-nav__link">Blog Left Sidebar</a></li>
                        <li><a href="#" className="site-nav__link">Blog Right Sidebar</a></li>
                        <li><a href="#" className="site-nav__link">Blog Without Sidebar</a></li>
                        <li><a href="#" className="site-nav__link">Blog List View</a></li>
                        <li><a href="#" className="site-nav__link">Blog Column View</a></li>
                        <li><a href="#" className="site-nav__link">Blog Detail Left Sidebar</a></li>
                        <li><a href="#" className="site-nav__link">Blog Detail Right Sidebar</a></li>
                        <li><a href="#" className="site-nav__link">Blog Detail Without Sidebar</a></li>
                      </ul></div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-md-3 d-flex align-items-center justify-content-end">
              <div className="header-group-item d-flex align-items-center justify-content-end">
                <div className="contentsticky_search">
                  <a href="#" className="header-icon search__btn-overlay nov_btn_act d-flex align-items-center link pointer position-relative" data-toggle="search_canvas" data-overlay="true" aria-label="Search">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" /><path d="M20 20L16.5 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                  </a>
                </div>
                <div className="contentsticky_account site-header__myaccount pointer">
                  <a href="#" className="header-icon nov_btn_act" data-toggle="header_settings" data-overlay="true" aria-label="Account">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 21C4 16.7395 7.68629 14 11 14H13C16.3137 14 20 16.7395 20 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7C16 9.20914 14.2091 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                  </a>
                </div>
                <div className="contentsticky_wishlist header--wishlist">
                  <a href="/pages/page-wishlist" className="position-relative text-center" rel="nofollow" title="Wishlist" aria-label="Wishlist">
                    <span className="header-icon d-flex align-items-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3L14.9 9L21.5 10L16.7 14.6L17.9 21L12 17.7L6.1 21L7.3 14.6L2.5 10L9.1 9L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></svg>
                    </span>
                    <span className="WishlistCount text-center">0</span>
                  </a>
                </div>
                <div className="contentsticky_cart cart_canvas">
                  <a href="#" className="site-header__cart-icon header-icon position-relative" aria-label="Cart">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.67909 21.9998C8.46034 21.9998 7.46877 21.0365 7.46877 19.8525C7.46877 18.6685 8.46034 17.7056 9.67909 17.7056C10.8978 17.7056 11.8894 18.6685 11.8894 19.8525C11.8894 21.0365 10.8978 21.9998 9.67909 21.9998Z" fill="currentColor" /><path d="M17.3626 21.9998C16.1438 21.9998 15.1526 21.0365 15.1526 19.8525C15.1526 18.6685 16.1438 17.7056 17.3626 17.7056C18.5813 17.7056 19.5729 18.6685 19.5729 19.8525C19.5729 21.0365 18.581 21.9998 17.3626 21.9998Z" fill="currentColor" /><path d="M18.9809 16.0412H8.08398C7.02373 16.0412 6.11816 15.3401 5.88163 14.336L3.61997 4.74099C3.59015 4.61431 3.49997 4.50581 3.37858 4.45123L1.5026 3.60652C1.06837 3.4111 0.879349 2.91041 1.08051 2.48822C1.28167 2.06638 1.7974 1.88274 2.23163 2.07817L4.10761 2.92287C4.71213 3.19478 5.16196 3.73388 5.3104 4.36497L7.57206 13.9606C7.62686 14.1938 7.83738 14.3569 8.08398 14.3569H18.9809C19.2265 14.3569 19.4366 14.1948 19.4928 13.9623L21.2512 6.61269C21.3015 6.40379 21.21 6.25183 21.1514 6.18006C21.0924 6.10795 20.9606 5.98733 20.74 5.98733H7.90744C7.42847 5.98733 7.04038 5.6103 7.04038 5.14498C7.04038 4.67967 7.42847 4.30264 7.90744 4.30264H20.74C21.4333 4.30264 22.0777 4.60487 22.5092 5.13218C22.9406 5.65949 23.0974 6.33808 22.9406 6.9941L21.1819 14.3441C20.9422 15.3431 20.0374 16.0412 18.9809 16.0412Z" fill="currentColor" /></svg>
                    <span className="site-header__cart-count">0</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-mobile d-md-none sticky-header-mobile">
        <div className="header-mobile-content gradient-animate">
          <div className="container-fluid">
            <div className="mobile-header-bar">
              <div className="mobile-header-controls">
                <button className="mobile-menu-btn menu-toggle-btn" type="button" aria-label="Toggle navigation" aria-expanded="false" aria-controls="mobileNav"><span></span><span></span><span></span></button>
                <button className="mobile-header-search-btn mobile-search-trigger" type="button" aria-label="Search" aria-controls="mobileNav"><i className="fa-solid fa-magnifying-glass"></i></button>
              </div>
              <a href="/" className="mobile-logo d-inline-block"><img src="/images/logo.avif" alt="Gearnix" /></a>
              <a href="#" className="header-icon position-relative site-header__cart-icon mobile-header-cart" aria-label="Cart"><i className="fa-solid fa-cart-shopping"></i><span className="site-header__cart-count">0</span></a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}