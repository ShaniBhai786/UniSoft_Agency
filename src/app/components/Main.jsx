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
      <div className="textSection">
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
      </div>
        <video
          className="bgVideo"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/assets/thumbnail.png"
        >
          <source src="/assets/newVideo.mp4" type="video/mp4" />
        </video>

        <div className="overlay" />
        <motion.div className="buttons" initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.4 }}>
          <p>
          We craft powerful digital solutions that grow your business.
        </p>
          <button className="primary"><Link href="quote" className="link">Get Started</Link></button>
          <button className="secondary"><Link href="/pricing" className="link">View Services</Link></button>
        </motion.div>
      </section>
    </div>
  )
}

export default Main