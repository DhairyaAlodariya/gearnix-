import './Footer.css';
export default function Footer() {
  return (
    <div className="nov-footer">
      <footer>
        <div className="footer-layout pt-80 pb-70 position-relative">
          <div className="container-fluid">
            <div className="container-inner">
              <div className="row g-0">
                <div className="footer_html block_footer block-1 col-xl-2 col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="block h-100">
                    <div className="title-block">Contact us</div>
                    <div className="bl_html">
                      <p>2357 Gordon Street, CA</p>
                      <p>+ (909) - 478-2742</p>
                      <p>GearnixStore@Vinova.com</p>
                      <p>@VinovaGear</p>
                    </div>
                  </div>
                </div>
                <div className="footer_menu block_footer block-2 col-xl-2 col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="block h-100">
                    <div className="title-block">Let us help</div>
                    <ul className="site-footer__linklist list-unstyled">
                      <li className="site-footer__linklist-item">
                        <a href="#">Track My Order</a>
                      </li>
                      <li className="site-footer__linklist-item">
                        <a href="#">Cancel My Order</a>
                      </li>
                      <li className="site-footer__linklist-item">
                        <a href="#">Return My Order</a>
                      </li>
                      <li className="site-footer__linklist-item">
                        <a href="#">Search</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer_menu block_footer block-3 col-xl-2 col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="block h-100">
                    <div className="title-block">Our policies</div>
                    <ul className="site-footer__linklist list-unstyled">
                      <li className="site-footer__linklist-item">
                        <a href="#">Shipping &amp; Delivery</a>
                      </li>
                      <li className="site-footer__linklist-item">
                        <a href="#">Returns &amp; Cancellations</a>
                      </li>
                      <li className="site-footer__linklist-item">
                        <a href="#">Terms &amp; Conditions</a>
                      </li>
                      <li className="site-footer__linklist-item">
                        <a href="#">Privacy Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer_menu block_footer block-4 col-xl-2 col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="block h-100">
                    <div className="title-block">My Account</div>
                    <ul className="site-footer__linklist list-unstyled">
                      <li className="site-footer__linklist-item">
                        <a href="#">Store Location</a>
                      </li>
                      <li className="site-footer__linklist-item">
                        <a href="#">Order History</a>
                      </li>
                      <li className="site-footer__linklist-item">
                        <a href="#">Wish List</a>
                      </li>
                      <li className="site-footer__linklist-item">
                        <a href="#">Gift Cards</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer_newsletter block_footer block-5 col-xl-4 col-lg-5 col-md-8 col-sm-12 col-12">
                  <div className="block h-100">
                    <div className="title-block">
                      <p>Newsletters</p>
                    </div>
                    <div className="input-group">
                      <input
                        type="email"
                        className="input form-control"
                        placeholder="Enter your email"
                      />
                      <button type="button" className="btn btn-primary">
                        <span>Submit</span>
                      </button>
                    </div>
                    <div className="footer__payment mt-30">
                      <div className="title-block">Payments</div>
                      <div className="payment-content d-flex flex-wrap">
                        <img
                          src="/images/payment_420x.avif"
                          alt="Payment methods"
                          style={{ maxWidth: '170px' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_copyright text-center">
          <div className="container-fluid">
            <div className="copyright-content pt-40 pb-40">
              <img src="/images/logo.avif" alt="Gearnix" style={{ maxWidth: '150px' }} />
              <div className="copyright text-center mt-40">
                Copyright &copy; 2024 Vinovathemes. All Rights Reserved.
              </div>
              <div className="mt-40">
                <div className="block_social">
                  <ul className="list-inline mb-0 d-flex justify-content-center">
                    <li className="list-inline-item">
                      <a href="#" title="Facebook">
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.5988 13.5H17.1155L18.1221 9.5H14.5988V7.5C14.5988 6.47 14.5988 5.5 16.6122 5.5H18.1221V2.14C17.794 2.097 16.5548 2 15.2461 2C12.513 2 10.5722 3.657 10.5722 6.7V9.5H7.55225V13.5H10.5722V22H14.5988V13.5Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" title="Instagram">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="25" height="25">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" title="Twitter">
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.3394 2.25H21.6621L14.403 10.51L22.9428 21.75H16.2552L11.018 14.933L5.02552 21.75H1.70081L9.46516 12.915L1.27393 2.25H8.12925L12.8632 8.481L18.3374 2.25H18.3394ZM17.1733 19.77H19.0144L7.12983 4.126H5.15409L17.1733 19.77Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" title="TikTok">
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M23.324 6.32131C21.9124 6.32131 20.6097 5.85371 19.5639 5.06477C18.3645 4.1603 17.5025 2.83378 17.1982 1.30475C17.1225 0.926879 17.0821 0.536937 17.078 0.13739H13.0455V11.1562L13.0406 17.1917C13.0406 18.8052 11.9898 20.1735 10.5332 20.6545C10.1106 20.7942 9.65402 20.8603 9.17846 20.8342C8.57173 20.801 8.00314 20.6177 7.50892 20.3222C6.45709 19.6932 5.74417 18.5519 5.72468 17.2466C5.69422 15.2063 7.34372 13.5431 9.38235 13.5431C9.78491 13.5431 10.1713 13.6087 10.5332 13.728V10.7166V9.63404C10.1515 9.57751 9.76323 9.54815 9.37027 9.54815C7.13874 9.54815 5.05182 10.4757 3.55983 12.1468C2.43226 13.4097 1.75583 15.0208 1.65155 16.7104C1.5149 18.9298 2.32689 21.0395 3.90202 22.5963C4.13335 22.8248 4.37648 23.037 4.63059 23.2326C5.98098 24.2713 7.63186 24.8347 9.37055 24.8347C9.76323 24.8347 10.1518 24.8056 10.5335 24.749C12.1578 24.5084 13.6563 23.765 14.8391 22.5957C16.2924 21.1594 17.0953 19.2525 17.1038 17.223L17.083 8.2101C17.7761 8.74494 18.5343 9.18757 19.3477 9.53086C20.613 10.0646 21.9546 10.3352 23.3352 10.3349V7.40689V6.32049C23.3363 6.32131 23.3248 6.32131 23.324 6.32131Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
