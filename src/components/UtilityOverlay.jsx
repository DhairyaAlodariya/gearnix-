import React from 'react';
export default function UtilityOverlay() {
  return (
    <>
      <div className="utility-overlay" data-utility-close hidden></div>
      <aside
        className="utility-panel"
        id="searchCanvas"
        aria-hidden="true"
        aria-labelledby="searchCanvasTitle"
      >
        <div className="utility-panel__header">
          <h2 className="utility-panel__title" id="searchCanvasTitle">
            Search
          </h2>
          <button
            className="utility-panel__close"
            type="button"
            data-utility-close
            aria-label="Close search panel"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="utility-panel__body">
          <form className="utility-search" action="/collections/all" method="get" role="search">
            <label className="visually-hidden" htmlFor="utilitySearchInput">
              Search products
            </label>
            <input
              id="utilitySearchInput"
              className="utility-search__input"
              type="search"
              name="q"
              placeholder="Search gaming gear"
            />
            <button className="utility-search__submit" type="submit">
              Search
            </button>
          </form>
          <div className="utility-panel__section">
            <h3 className="utility-panel__section-title">Trending</h3>
            <div className="utility-chip-list">
              <a href="/collections/all">Gaming Mouse</a>
              <a href="/collections/all">Mechanical Keyboard</a>
              <a href="/collections/all">Wireless Headset</a>
              <a href="/collections/all">Controllers</a>
            </div>
          </div>
        </div>
      </aside>
      <aside
        className="utility-panel"
        id="headerSettingsPanel"
        aria-hidden="true"
        aria-labelledby="headerSettingsTitle"
      >
        <div className="utility-panel__header">
          <h2 className="utility-panel__title" id="headerSettingsTitle">
            My Account
          </h2>
          <button
            className="utility-panel__close"
            type="button"
            data-utility-close
            aria-label="Close account panel"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="utility-panel__body">
          <div className="utility-panel__section">
            <p className="utility-panel__lead">Access account shortcuts from here.</p>
            <div className="utility-link-list">
              <a href="/pages/page-wishlist">Wishlist</a>
              <a href="/collections/all">Shopping</a>
              <a href="/">Back to home</a>
            </div>
          </div>
          <div className="utility-panel__section">
            <h3 className="utility-panel__section-title">Guest Actions</h3>
            <div className="utility-auth-actions">
              <a href="/pages/page-wishlist" className="utility-auth-actions__primary">
                View Wishlist
              </a>
              <a href="/collections/all" className="utility-auth-actions__secondary">
                Browse Products
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
