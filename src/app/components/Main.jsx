"use client"
import React from "react"
import "../styles/main.css"


const Main = () => {
  return (
    <div className="container">

      <section className="hero">
        <video src="/video.mp4" autoPlay loop muted className="logoVideo" />

        <h1>Build. Scale. Dominate</h1>
        <p>We help businesses grow with powerful web development and digital solutions.</p>

        <div className="buttons">
          <button className="primary">Get Started</button>
          <button className="secondary">View Services</button>
        </div>
      </section>

      <section className="services">
        <h2>Our Services</h2>

        <div className="cards">
          <div className="card">
            <h3>Web Development</h3>
            <p>MERN & WordPress solutions built to convert visitors into clients.</p>
          </div>

          <div className="card">
            <h3>SEO Optimization</h3>
            <p>Rank higher and get consistent organic traffic.</p>
          </div>

          <div className="card">
            <h3>Digital Marketing</h3>
            <p>Campaigns that generate real business growth.</p>
          </div>
        </div>
      </section>

      <section className="about">
        <h2>Why UniSoft?</h2>
        <p>
          We combine creativity with technology to deliver scalable and high-performance solutions for modern businesses.
        </p>
      </section>

      <section className="cta">
        <h2>Ready to Grow?</h2>
        <button>Contact Us</button>
      </section>

      <footer>
        © {new Date().getFullYear()} UniSoft
      </footer>

    </div>
  )
}

export default Main