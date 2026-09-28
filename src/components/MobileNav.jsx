export default function MobileNav() {
  return (
    <nav className="mobile-nav" id="mobileNav" aria-label="Mobile navigation" aria-hidden="true">
      <div className="mobile-nav-panel">
        <div className="mobile-nav-inner">
          <form className="mobile-nav-search" action="#" method="get" role="search">
            <input
              className="mobile-nav-search-input"
              id="mobileNavSearch"
              type="search"
              name="q"
              placeholder="Enter your keywords"
              aria-label="Enter your keywords"
              autoComplete="off"
            />
            <button className="mobile-nav-search-submit" type="submit" aria-label="Search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <button
              className="mobile-nav-search-clear"
              type="button"
              aria-label="Clear search"
              hidden
            >
              <i className="fa-solid fa-circle-xmark"></i>
            </button>
          </form>
          <div className="mobile-nav-results" hidden>
            <div className="mobile-nav-results-title">Search Results</div>
            <ul className="mobile-nav-results-list list-unstyled mb-0"></ul>
          </div>
          <div className="mobile-nav-panels">
            <section className="mobile-menu-panel is-active" data-panel="root" data-title="Menu">
              <ul className="mobile-nav-list list-unstyled mb-0">
                <li className="mobile-nav-item">
                  <a href="/">Home</a>
                </li>
                <li className="mobile-nav-item">
                  <button
                    className="mobile-panel-next"
                    type="button"
                    data-target="collections-panel"
                  >
                    <span>Collections</span>
                    <i className="fa-solid fa-angle-right"></i>
                  </button>
                </li>
                <li className="mobile-nav-item">
                  <button className="mobile-panel-next" type="button" data-target="products-panel">
                    <span>Products</span>
                    <i className="fa-solid fa-angle-right"></i>
                  </button>
                </li>
                <li className="mobile-nav-item">
                  <button className="mobile-panel-next" type="button" data-target="pages-panel">
                    <span>Pages</span>
                    <i className="fa-solid fa-angle-right"></i>
                  </button>
                </li>
                <li className="mobile-nav-item">
                  <button className="mobile-panel-next" type="button" data-target="blog-panel">
                    <span>Blog</span>
                    <i className="fa-solid fa-angle-right"></i>
                  </button>
                </li>
              </ul>
            </section>
            <section
              className="mobile-menu-panel"
              data-panel="collections-panel"
              data-title="Collections"
            >
              <div className="mobile-panel-header">
                <button
                  className="mobile-panel-back"
                  type="button"
                  data-target="root"
                  aria-label="Back to main menu"
                >
                  <i className="fa-solid fa-angle-left"></i>
                </button>
                <div className="mobile-panel-title">Collections</div>
              </div>
              <ul className="mobile-nav-list list-unstyled mb-0">
                <li className="mobile-nav-item">
                  <button
                    className="mobile-panel-next"
                    type="button"
                    data-target="collections-group-1"
                  >
                    <span>Collection page</span>
                    <i className="fa-solid fa-angle-right"></i>
                  </button>
                </li>
                <li className="mobile-nav-item">
                  <button
                    className="mobile-panel-next"
                    type="button"
                    data-target="collections-group-2"
                  >
                    <span>Collection page</span>
                    <i className="fa-solid fa-angle-right"></i>
                  </button>
                </li>
                <li className="mobile-nav-item">
                  <button
                    className="mobile-panel-next"
                    type="button"
                    data-target="collections-group-3"
                  >
                    <span>Collection page</span>
                    <i className="fa-solid fa-angle-right"></i>
                  </button>
                </li>
              </ul>
            </section>
            <section
              className="mobile-menu-panel"
              data-panel="collections-group-1"
              data-title="Collection page"
            >
              <div className="mobile-panel-header">
                <button
                  className="mobile-panel-back"
                  type="button"
                  data-target="collections-panel"
                  aria-label="Back to collections"
                >
                  <i className="fa-solid fa-angle-left"></i>
                </button>
                <div className="mobile-panel-title">Collection page</div>
              </div>
              <ul className="mobile-nav-list list-unstyled mb-0">
                <li className="mobile-nav-item">
                  <a href="#">Collection left sidebar</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#">Collection right sidebar</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#">Collection top sidebar</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#">Collection without sidebar</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#">Collection deals</a>
                </li>
              </ul>
            </section>
            <section
              className="mobile-menu-panel"
              data-panel="collections-group-2"
              data-title="Collection page"
            >
              <div className="mobile-panel-header">
                <button
                  className="mobile-panel-back"
                  type="button"
                  data-target="collections-panel"
                  aria-label="Back to collections"
                >
                  <i className="fa-solid fa-angle-left"></i>
                </button>
                <div className="mobile-panel-title">Collection page</div>
              </div>
              <ul className="mobile-nav-list list-unstyled mb-0">
                <li className="mobile-nav-item">
                  <a href="#">Collection canvas on left</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#">Collection canvas on top</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#">Collection canvas on bottom</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#">Collection full width</a>
                </li>
              </ul>
            </section>
            <section
              className="mobile-menu-panel"
              data-panel="collections-group-3"
              data-title="Collection page"
            >
              <div className="mobile-panel-header">
                <button
                  className="mobile-panel-back"
                  type="button"
                  data-target="collections-panel"
                  aria-label="Back to collections"
                >
                  <i className="fa-solid fa-angle-left"></i>
                </button>
                <div className="mobile-panel-title">Collection page</div>
              </div>
              <ul className="mobile-nav-list list-unstyled mb-0">
                <li className="mobile-nav-item">
                  <a href="#">Numbered Pagination</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#">Load More Button</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#">Infinity Scroll Load More</a>
                </li>
              </ul>
            </section>
            <section
              className="mobile-menu-panel"
              data-panel="products-panel"
              data-title="Products"
            >
              <div className="mobile-panel-header">
                <button
                  className="mobile-panel-back"
                  type="button"
                  data-target="root"
                  aria-label="Back to main menu"
                >
                  <i className="fa-solid fa-angle-left"></i>
                </button>
                <div className="mobile-panel-title">Products</div>
              </div>
              <ul className="mobile-nav-list list-unstyled mb-0">
                <li className="mobile-nav-item">
                  <button
                    className="mobile-panel-next"
                    type="button"
                    data-target="products-group-1"
                  >
                    <span>Product detail</span>
                    <i className="fa-solid fa-angle-right"></i>
                  </button>
                </li>
                <li className="mobile-nav-item">
                  <button
                    className="mobile-panel-next"
                    type="button"
                    data-target="products-group-2"
                  >
                    <span>Product detail</span>
                    <i className="fa-solid fa-angle-right"></i>
                  </button>
                </li>
                <li className="mobile-nav-item">
                  <button
                    className="mobile-panel-next"
                    type="button"
                    data-target="products-group-3"
                  >
                    <span>Product features</span>
                    <i className="fa-solid fa-angle-right"></i>
                  </button>
                </li>
              </ul>
            </section>
            <section
              className="mobile-menu-panel"
              data-panel="products-group-1"
              data-title="Product detail"
            >
              <div className="mobile-panel-header">
                <button
                  className="mobile-panel-back"
                  type="button"
                  data-target="products-panel"
                  aria-label="Back to products"
                >
                  <i className="fa-solid fa-angle-left"></i>
                </button>
                <div className="mobile-panel-title">Product detail</div>
              </div>
              <ul className="mobile-nav-list list-unstyled mb-0">
                <li className="mobile-nav-item">
                  <a href="#">Product detail default</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#">Product detail thumb left 1</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#">Product detail thumb left 2</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#">Product detail thumb right</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#">Product deals countdown</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#">Product Detail Tab Accordion v1</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#">Product Detail Tab Accordion v2</a>
                </li>
              </ul>
            </section>
            <section
              className="mobile-menu-panel"
              data-panel="products-group-2"
              data-title="Product detail"
            >
              <div className="mobile-panel-header">
                <button
                  className="mobile-panel-back"
                  type="button"
                  data-target="products-panel"
                  aria-label="Back to products"
                >
                  <i className="fa-solid fa-angle-left"></i>
                </button>
                <div className="mobile-panel-title">Product detail</div>
              </div>
              <ul className="mobile-nav-list list-unstyled mb-0">
                <li className="mobile-nav-item">
                  <a href="#">Product detail thumb grid 1</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#">Product detail thumb grid 2</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#">Product detail image grid</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#">Product detail image scroll</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#">Product detail image slider 1</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#">Product detail image slider 2</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#">Product 3D, AR models</a>
                </li>
              </ul>
            </section>
            <section
              className="mobile-menu-panel"
              data-panel="products-group-3"
              data-title="Product features"
            >
              <div className="mobile-panel-header">
                <button
                  className="mobile-panel-back"
                  type="button"
                  data-target="products-panel"
                  aria-label="Back to products"
                >
                  <i className="fa-solid fa-angle-left"></i>
                </button>
                <div className="mobile-panel-title">Product features</div>
              </div>
              <ul className="mobile-nav-list list-unstyled mb-0">
                <li className="mobile-nav-item">
                  <a href="#">Product Video</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#">Product Pre-Order</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#">Product Variant Dropbox Style</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#">Product Variant Image Swatch</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#">Product Variant Pattern</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#">Product Sticky Add To Cart</a>
                </li>
              </ul>
            </section>
            <section className="mobile-menu-panel" data-panel="pages-panel" data-title="Pages">
              <div className="mobile-panel-header">
                <button
                  className="mobile-panel-back"
                  type="button"
                  data-target="root"
                  aria-label="Back to main menu"
                >
                  <i className="fa-solid fa-angle-left"></i>
                </button>
                <div className="mobile-panel-title">Pages</div>
              </div>
              <ul className="mobile-nav-list list-unstyled mb-0">
                <li className="mobile-nav-item">
                  <a href="#">404 Error</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#">About Us</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#">Contact Us</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#">FAQs Page</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#">Store Direction Page</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#">Store Locations Page</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#">Testimonials Page</a>
                </li>
              </ul>
            </section>
            <section className="mobile-menu-panel" data-panel="blog-panel" data-title="Blog">
              <div className="mobile-panel-header">
                <button
                  className="mobile-panel-back"
                  type="button"
                  data-target="root"
                  aria-label="Back to main menu"
                >
                  <i className="fa-solid fa-angle-left"></i>
                </button>
                <div className="mobile-panel-title">Blog</div>
              </div>
              <ul className="mobile-nav-list list-unstyled mb-0">
                <li className="mobile-nav-item">
                  <a href="#">Blog Left Sidebar</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#">Blog Right Sidebar</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#">Blog Without Sidebar</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#">Blog List View</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#">Blog Column View</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#">Blog Detail Left Sidebar</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#">Blog Detail Right Sidebar</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="#">Blog Detail Without Sidebar</a>
                </li>
              </ul>
            </section>
          </div>
          <div className="mobile-nav-footer">
            <div className="mobile-nav-contact">
              <p>
                <strong>Call Us:</strong> +123-456-789
              </p>
              <p>
                <strong>Email:</strong> info@example.com
              </p>
            </div>
            <div className="mobile-nav-social" aria-label="Social links">
              <a href="#" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" aria-label="X">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#" aria-label="TikTok">
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
