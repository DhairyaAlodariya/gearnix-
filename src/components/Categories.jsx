import React from 'react'
import './Categories.css'
const cats=[
  {img:'/images/img-1-3_580x.webp',label:'Keyboards',aria:'Shop keyboards',block:'block-1'},
  {img:'/images/img-1-4_580x.webp',label:'Gaming Mouse',aria:'Shop gaming mouse',block:'block-2'},
  {img:'/images/img-1-5_580x.webp',label:'Headphones',aria:'Shop headphones',block:'block-3'},
  {img:'/images/img-1-6_580x.webp',label:'Gaming Controllers',aria:'Shop gaming controllers',block:'block-4'},
]
export default function Categories() {
  return (
    <section className="section-slider-image section-categories"><div className="distance"><div className="container-fluid">
      <div className="title_section text-center"><div className="title"><p>CATEGORIES</p></div></div>
      <div className="row categories-grid">
        {cats.map((c,i)=>(
          <div key={i} className="col-6 col-xl-3 col-lg-3 col-md-6">
            <div className={"image-slider__item position-relative overflow-hidden "+c.block}>
              <a href="#" className="image-slider__link" aria-label={c.aria}><div className="respone_image"><img src={c.img} alt={c.label} /></div></a>
              <div className="bl_t position-absolute">
                <div className="title font-500 f_pr">{c.label}</div>
                <a href="#" className="btn-shopnow font-500 mt-10 d-inline-flex align-items-center"><span>Shop Now</span><i aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div></div></section>
  )
}