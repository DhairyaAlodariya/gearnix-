import React from 'react'
import './WeeklyDeals.css'
export default function WeeklyDeals() {
  return (
    <section className="section-countdown-weekly"><div className="distance position-relative">
      <div className="ss-bg gr-top gradient-animate overflow_hidden" aria-hidden="true"></div>
      <div className="container-fluid"><div className="container-inner"><div className="row align-items-center">
        <div className="col-xl-4 col-lg-5 col-md-6">
          <div className="countdown-content position-relative text-left">
            <div className="title_section text-left mb-30">
              <div className="title">Weekly Deals</div>
              <div className="sub_title mt-15"><p>Don't Miss Out - Gear Up for Victory with This Week's Unmissable Deals!</p></div>
            </div>
            <div className="countdownfree d-inline-flex shadow" data-countdown="2025/09/09" data-show-days="true" data-restart="true">
              <div className="item-time"><span className="data-number" data-unit="days">00</span><span className="name-time">Days</span></div>
              <div className="item-time"><span className="data-number" data-unit="hours">00</span><span className="name-time">Hours</span></div>
              <div className="item-time"><span className="data-number" data-unit="mins">00</span><span className="name-time">Mins</span></div>
              <div className="item-time"><span className="data-number" data-unit="secs">00</span><span className="name-time">Secs</span></div>
            </div>
            <div className="countdown-action mt-30 mt-lg-20 color-background-2">
              <a href="#" className="btn"><span>Shop now</span><i className="rbb-icon-direction-55 position-relative" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
        <div className="col-xl-8 col-lg-7 col-md-6">
          <div className="img-right position-relative nov-sh-image-2"><img src="/images/img-1-9.webp" alt="Weekly deals product" /></div>
        </div>
      </div></div></div>
    </div></section>
  )
}