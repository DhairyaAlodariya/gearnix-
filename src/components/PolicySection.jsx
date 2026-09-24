import React from 'react'
const policies=[
  {icon:'/images/p-1-1_200x.avif',alt:'Free shipping icon',title:'Free Shipping',desc:'Free Shipping to Make Your Shopping Experience Seamless.'},
  {icon:'/images/p-1-2_200x.webp',alt:'Return policy icon',title:'Return Policy',desc:'Flexible Returns to Ensure a Positive Shopping Experience.'},
  {icon:'/images/p-1-3_200x.webp',alt:'Save money icon',title:'Save Money',desc:'Shop Smarter and Save Big with Our Money-Saving Offers.'},
  {icon:'/images/p-1-4_200x.webp',alt:'Support 24/7 icon',title:'Support 24/7',desc:'Unparalleled Support, Tailored to Your Needs 24 Hours a Day.'},
]
export default function PolicySection() {
  return (
    <section className="section-policy"><div className="distance"><div className="container-fluid"><div className="policy-grid">
      {policies.map((p,i)=>(
        <div key={i} className="nov-policy-item icon_animate"><div className="policy__item--content">
          <div className="policy-icon"><img src={p.icon} alt={p.alt} /></div>
          <div className="heading--policy"><div className="title-policy">{p.title}</div><div className="desc-policy">{p.desc}</div></div>
        </div></div>
      ))}
    </div></div></div></section>
  )
}