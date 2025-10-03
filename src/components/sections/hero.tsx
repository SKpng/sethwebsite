"use client"

import Link from 'next/link'

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-image">
          <span>SK</span>
        </div>
        
        <h1 className="hero-title">Seth Karallis</h1>
        <p className="hero-subtitle">Actor • Voice Over Artist • Performer</p>
        
        <Link href="#contact" className="cta-button">
          Get in Touch
        </Link>
      </div>
    </section>
  )
}