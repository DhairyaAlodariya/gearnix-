import React from 'react'
const reviews=[
  {img:'/images/img-1-13.webp',name:'Earl S. West',quote:'" I was skeptical at first, but the gaming mouse controller has become an indispensable part of my gaming setup. "',cap:'cap-1',active:true},
  {img:'/images/img-1-12.webp',name:'Timothy A. Thompson',quote:'" The headphones deliver incredible sound quality and noise cancellation that makes my streams. Highly recommended! "',cap:'cap-2',active:false},
  {img:'/images/img-1-11.webp',name:'Sally H. McDuffie',quote:'" The controllers has completely transformed my gaming experience. Absolutely worth every penny! "',cap:'cap-3',active:false},
  {img:'/images/img-1-14.webp',name:'Lindsay J. Ross',quote:'" The build quality and ergonomics of the gaming keyboards are truly next-level. "',cap:'cap-4',active:false},
  {img:'/images/img-1-15.webp',name:'Joseph S. Thomas',quote:'" The battery life is incredible, and the sound profile is perfectly tuned for gaming. I take it with me everywhere. "',cap:'cap-5',active:false},
]
export default function CustomerReviews() {
  return (
    <section className="section-image-split"><div className="distance"><div className="container-fluid">
      <div className="title_section text-center">
        <div className="title"><p>Customers Reviews</p></div>
        <div className="sub_title mt-15"><p>Listen to genuine reviews from customers</p></div>
      </div>
      <div className="row spacing-30">
        {reviews.map((r,i)=>(
          <div key={i} className={"split-image__column"+(r.active?' is-active act':'')}>
            <div className="split-image__item">
              <a className="gallery-image__link" href="#"><img src={r.img} alt={r.name+' review'} /></a>
              <div className={"gallery-image__caption "+r.cap}>
                <div className="gallery-image__text1"><p>{r.name}</p></div>
                <div className="gallery-image__text2"><p>{r.quote}</p></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div></div></section>
  )
}