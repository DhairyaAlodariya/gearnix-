import React from 'react'
import './FeaturedProduct.css'
export default function FeaturedProduct() {
  return (
    <section className="section-featured-product overflow_hidden"><div className="wow fadeInUp"><div className="container-fluid"><div className="container-inner distance position-relative"><div className="row">
      <div className="col-lg-6 order-lg-1">
        <div className="block-image h-100 position-relative nov-sh-image-2">
          <div className="respone_image" style={{paddingTop:'63.33333333333333%'}}><img className="lazyautosizes ls-is-cached lazyloaded" src="/images/img-1-16_900x.webp" alt="Quantum Vanguard Gaming Controller" /></div>
        </div>
      </div>
      <div className="col-lg-6 pt-20 mt-md-0 pt-md-0 order-lg-0 d-flex align-items-center justify-content-center">
        <div className="block-text-content position-relative pt-20 pb-20 pt-md-50">
          <div className="nov-text font-700 f_pr block-1 wow fadeInUp" data-wow-delay="0.1s"><p>Quantum Vanguard Gaming Controller</p></div>
          <div className="nov-text font-400 f_df block-2 wow fadeInUp" data-wow-delay="0.2s"><p>Quantum - Suggests advanced, cutting-edge technology powering the controller. It conveys a sense of innovation and high-performance.</p></div>
          <div className="block-btn d-flex align-items-center block-3 wow fadeInUp" data-wow-delay="0.3s">
            <div className="box-price font-600 d-flex align-items-center"><span className="price">$85.99</span></div>
            <div className="block-btn-content d-flex align-items-center"><a href="#" className="btn"><span>Buy Now</span><i className="rbb-icon-direction-55 position-relative" aria-hidden="true"></i></a></div>
          </div>
        </div>
      </div>
    </div></div></div></div></section>
  )
}