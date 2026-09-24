import React from 'react';
export default function MobileBottomNav() {
  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile quick links">
      <a href="/" className="mobile-bottom-nav__item is-active" aria-label="Home">
        <i className="fa-solid fa-house"></i>
        <span>Home</span>
      </a>
      <a href="/collections/all" className="mobile-bottom-nav__item" aria-label="Shopping">
        <i className="fa-solid fa-table-cells-large"></i>
        <span>Shopping</span>
      </a>
      <a
        href="/pages/page-wishlist"
        className="mobile-bottom-nav__item"
        aria-label="Wishlist"
        rel="nofollow"
      >
        <i className="fa-regular fa-heart"></i>
        <span>Wishlist</span>
        <span className="mobile-bottom-nav__badge">0</span>
      </a>
      <a
        href="#"
        className="mobile-bottom-nav__item nov_btn_act"
        data-toggle="header_settings"
        data-overlay="true"
        aria-label="Account"
      >
        <i className="fa-regular fa-user"></i>
        <span>Account</span>
      </a>
    </nav>
  );
}
