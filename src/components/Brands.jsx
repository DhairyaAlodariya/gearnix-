import React from 'react'
const brands=['m1','m2','m3','m4','m5','m6','m7','m8','m9']
export default function Brands() {
  return (
    <section className="section-manufacture"><div className="distance"><div className="container-fluid">
      <div className="title_section text-center"><div className="title"><p>SHOP BY<br />POPULAR BRANDS</p></div></div>
      <div className="nov-grid-type row justify-content-center">
        {brands.map((b,i)=>(
          <div key={i} className="sp-item brand-col">
            <div className="manufacture__item text-center d-flex align-items-center justify-content-center">
              <a href="#"><div className="image"><img src={'/images/'+b+'.webp'} className="img-fluid" alt={'Brand '+(i+1)} /></div></a>
            </div>
          </div>
        ))}
      </div>
    </div></div></section>
  )
}