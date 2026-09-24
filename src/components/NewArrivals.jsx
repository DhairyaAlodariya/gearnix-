import React from 'react'
import './NewArrivals.css'
export default function NewArrivals() {
  return (
    <section className="section-new-arrivals" aria-labelledby="new-arrivals-title"><div className="distance"><div className="container-fluid"><div className="new-arrivals-shell">
      <div className="title_section text-center"><div className="title"><p id="new-arrivals-title">New Arrivals</p></div></div>
      <div className="new-arrivals-tabs" role="tablist" aria-label="New arrivals categories">
        <button className="new-arrivals-tab is-active" id="new-arrivals-tab-mouse" type="button" role="tab" aria-controls="new-arrivals-panel" aria-selected="true" tabIndex="0" data-arrivals-tab="mouse">Gaming Mouse</button>
        <button className="new-arrivals-tab" id="new-arrivals-tab-keyboard" type="button" role="tab" aria-controls="new-arrivals-panel" aria-selected="false" tabIndex="-1" data-arrivals-tab="keyboard">Keyboards</button>
        <button className="new-arrivals-tab" id="new-arrivals-tab-controller" type="button" role="tab" aria-controls="new-arrivals-panel" aria-selected="false" tabIndex="-1" data-arrivals-tab="controller">Gaming Controllers</button>
        <button className="new-arrivals-tab" id="new-arrivals-tab-headphone" type="button" role="tab" aria-controls="new-arrivals-panel" aria-selected="false" tabIndex="-1" data-arrivals-tab="headphone">Headphones</button>
      </div>
      <div className="new-arrivals-grid" id="new-arrivals-panel" role="tabpanel" aria-labelledby="new-arrivals-tab-mouse" aria-live="polite"></div>
    </div></div></div></section>
  )
}