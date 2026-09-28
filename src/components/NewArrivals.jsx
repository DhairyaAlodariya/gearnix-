import { useState } from 'react';
import './NewArrivals.css';
import newArrivals from '../data/newArrivals.js';

const categories = [
  { id: 'mouse', label: 'Gaming Mouse' },
  { id: 'keyboard', label: 'Keyboards' },
  { id: 'controller', label: 'Gaming Controllers' },
  { id: 'headphone', label: 'Headphones' },
];

export default function NewArrivals() {
  const [activeCategory, setActiveCategory] = useState('mouse');

  function handleTabKeyDown(event, currentIndex) {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;

    event.preventDefault();
    const direction = event.key === 'ArrowRight' ? 1 : -1;
    const nextIndex = (currentIndex + direction + categories.length) % categories.length;
    const nextCategory = categories[nextIndex];

    setActiveCategory(nextCategory.id);
    document.getElementById(`new-arrivals-tab-${nextCategory.id}`)?.focus();
  }

  return (
    <section className="section-new-arrivals" aria-labelledby="new-arrivals-title">
      <div className="distance">
        <div className="container-fluid">
          <div className="new-arrivals-shell">
            <div className="title_section text-center">
              <div className="title">
                <p id="new-arrivals-title">New Arrivals</p>
              </div>
            </div>
            <div className="new-arrivals-tabs" role="tablist" aria-label="New arrivals categories">
              {categories.map((category, index) => (
                <button
                  key={category.id}
                  className={`new-arrivals-tab${activeCategory === category.id ? ' is-active' : ''}`}
                  id={`new-arrivals-tab-${category.id}`}
                  type="button"
                  role="tab"
                  aria-controls="new-arrivals-panel"
                  aria-selected={activeCategory === category.id}
                  tabIndex={activeCategory === category.id ? 0 : -1}
                  onClick={() => setActiveCategory(category.id)}
                  onKeyDown={(event) => handleTabKeyDown(event, index)}
                >
                  {category.label}
                </button>
              ))}
            </div>
            <div className="new-arrivals-picker">
              <label className="new-arrivals-picker__label" htmlFor="new-arrivals-select">
                Choose category
              </label>
              <select
                className="new-arrivals-picker__select"
                id="new-arrivals-select"
                value={activeCategory}
                onChange={(event) => setActiveCategory(event.target.value)}
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
            <div
              className="new-arrivals-grid"
              id="new-arrivals-panel"
              role="tabpanel"
              aria-labelledby={`new-arrivals-tab-${activeCategory}`}
              aria-live="polite"
            >
              {newArrivals[activeCategory].map((product) => (
                <article className="arrival-card" key={product.title}>
                  <a href="#" className="arrival-card__media">
                    <img
                      className="arrival-card__image arrival-card__image--primary"
                      src={product.image}
                      alt={product.title}
                      loading="lazy"
                    />
                    <img
                      className="arrival-card__image arrival-card__image--secondary"
                      src={product.secondaryImage}
                      alt={`${product.title} alternate`}
                      loading="lazy"
                    />
                  </a>
                  <div className="arrival-card__actions">
                    <a href="#" className="arrival-card__action" aria-label="Add To Wishlist">
                      <i className="fa-regular fa-star" />
                    </a>
                    <a href="#" className="arrival-card__action" aria-label="Add To Cart">
                      <i className="fa-solid fa-cart-shopping" />
                    </a>
                    <a href="#" className="arrival-card__action" aria-label="Quick View">
                      <i className="fa-regular fa-eye" />
                    </a>
                  </div>
                  <div className="arrival-card__body">
                    <h3 className="arrival-card__title">
                      <a href="#">{product.title}</a>
                    </h3>
                    <div className="arrival-card__rating" aria-label="Rated 5 out of 5">
                      <span aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                    </div>
                    <div className="arrival-card__price-row">
                      <span className="arrival-card__price">{product.price}</span>
                      {product.comparePrice && (
                        <span className="arrival-card__compare">{product.comparePrice}</span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
