import React from 'react'
const products=[
  {title:'Phantom Elite Headset Pro',img:'/images/6_ffe55de6-1256-45b9-bca0-00f85957e64d_540x.webp',imgAlt:'/images/3_fb5a9e0b-2263-43eb-b897-afd1614451dd_540x.webp',price:'$192.00',ratingClass:'top-rated-rating--muted'},
  {title:'Galaxy Striker',img:'/images/2_3eb15383-0ff8-49c5-9fd5-bc75385bccfa_540x.webp',imgAlt:'/images/5_760423b4-94cc-4aaf-9c22-84dd3fec331a_540x.webp',price:'$165.00',ratingClass:'top-rated-rating--filled'},
  {title:'Aurora Sentinel',img:'/images/5_760423b4-94cc-4aaf-9c22-84dd3fec331a_540x.webp',imgAlt:'/images/2_3eb15383-0ff8-49c5-9fd5-bc75385bccfa_540x.webp',price:'$137.00',ratingClass:'top-rated-rating--filled'},
  {title:'Eclipse RGB Gaming Mouse',img:'/images/6_ffe55de6-1256-45b9-bca0-00f85957e64d_540x.webp',imgAlt:'/images/3_fb5a9e0b-2263-43eb-b897-afd1614451dd_540x.webp',price:'$164.00',ratingClass:'top-rated-rating--filled'},
]
export default function TopRatedProducts() {
  return (
    <section className="section-product-slider"><div className="distance position-relative"><div className="container-fluid">
      <div className="title_section text-center">
        <div className="title"><p>Top Rated Product's</p></div>
        <div className="sub_title mt-15"><p>Master Your Battleground Elevate Your Game with Our Elite-Reviewed Gear</p></div>
      </div>
      <div className="row top-rated-grid">
        {products.map((p,i)=>(
          <div key={i} className="col-6 col-xl-3 col-lg-3 col-md-6">
            <article className="top-rated-card">
              <a href="#" className="top-rated-media">
                <img className="top-rated-image top-rated-image--primary" src={p.img} alt={p.title} />
                <img className="top-rated-image top-rated-image--secondary" src={p.imgAlt} alt={p.title+' alternate'} />
              </a>
              <div className="top-rated-actions">
                <a href="#" className="top-rated-action" aria-label="Add To Wishlist"><i className="fa-regular fa-star"></i></a>
                <a href="#" className="top-rated-action" aria-label="Add To Cart"><i className="fa-solid fa-cart-shopping"></i></a>
                <a href="#" className="top-rated-action" aria-label="Quick View"><i className="fa-regular fa-eye"></i></a>
              </div>
              <div className="top-rated-body">
                <h3 className="top-rated-title"><a href="#">{p.title}</a></h3>
                <div className={"top-rated-rating "+p.ratingClass} aria-label="Rated 5 out of 5"><span>&#9733;&#9733;&#9733;&#9733;&#9733;</span></div>
                <div className="top-rated-price">{p.price}</div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div></div></section>
  )
}