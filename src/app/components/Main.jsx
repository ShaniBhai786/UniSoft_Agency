"use client"
import React, { useState } from "react"
import "../styles.css"
import { motion } from "framer-motion"
import { TypeAnimation } from 'react-type-animation'
import Link from "next/link"

const Main = () => {

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="container">
      <section className="hero">
        <video autoPlay loop muted playsInline className="bgVideo">
          <source src="/assets/video.mp4" alt="video" width={100} height={100} controls playsInline type="video/mp4" />
        </video>

        <div className="overlay" />
        <motion.h1 initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.8 }}>
        <TypeAnimation
  sequence={[
    "Smart Software and Digital Solutions for Your Business Growth",
    1500,
    "",
  ]}
  className="typingText"
  speed={50}
  repeat={Infinity}
/>
        </motion.h1>
        <motion.p initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.2 }}>
          We craft powerful digital solutions that grow your business.
        </motion.p>

        <motion.div className="buttons" initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.4 }}>
          <button className="primary">Get Started</button>
          <Link href="/services"><button className="secondary">View Services</button></Link>
        </motion.div>
      </section>
    </div>
  )
}

export default Main