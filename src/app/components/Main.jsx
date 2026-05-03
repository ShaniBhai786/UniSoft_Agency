"use client"
import React, { useState } from "react"
import "../styles.css"
import { motion } from "framer-motion"
import { TypeAnimation } from 'react-type-animation'
import Link from "next/link"
import { Helmet } from "react-helmet";

const Main = () => {

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="container">
      <Helmet>
        <title>
          UniSoft – Best Software, SEO & Web Development Company in Pakistan
        </title>

        <meta
          name="description"
          content="UniSoft is a leading software company in Pakistan & USA providing web development, SEO services, digital marketing, and business automation solutions to grow your business online."
        />

        <meta
          name="keywords"
          content="
          uniSoft, ubisoft, uniSoft software company, unisoft company, unisoftpvt, unisoft in USA, unisoft software company is US, react.js next.js development services,
          software company Pakistan,
          software house in Lahore,
          SEO services Pakistan,
          web development company Pakistan,
          digital marketing agency Pakistan,
          IT company Lahore,
          best software house in Lahore,
          affordable SEO services,
          custom software development
          "
        />

        <meta
          name="google-site-verification"
          content="WsViIkxJ04PGtVYoEIi1Ki4kHW8UyjuXdEuRnHrTl3I"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* ✅ FAVICON */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* ✅ OPEN GRAPH (Facebook / WhatsApp) */}
        <meta property="og:title" content="UniSoft – Software & SEO Company" />
        <meta
          property="og:description"
          content="Grow your business with UniSoft’s SEO, software & web solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://unisoftpvt.com" />
        <meta
          property="og:image"
          content="https://unisoftpvt.com/preview.png"
        />
        <link rel="canonical" href="https://unisoftpvt.com/" />
        <meta name="author" content="UniSoft" />
        <meta property="og:image" content="https://unisoftpvt.com/preview.png" />

        {/* ✅ TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "UniSoft",
  "url": "https://unisoftpvt.com",
  "logo": "https://unisoftpvt.com/favicon.ico",
  "sameAs": [],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+92-305-3019712",
    "contactType": "customer service",
    "ceo": "Roshaan Ahmad"
  }
}
`}
</script>
      </Helmet>
      <section className="hero">
      <div className="content">
        <div className="textSection">
        <motion.h1 initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.8 }}>
          <TypeAnimation
            sequence={[
              "All-in-One Business Software Solutions for Growth and Efficiency.", 1000, "",
                "Streamline Your Business Operations with Powerful Digital Solutions.", 1000, "",
                "Boost Productivity with Advanced Software, SEO and Web Services.", 1000, "",
                "Complete IT Solutions – Websites, SEO, and Automation.", 1000, "",
                "Transform Your Business with Modern Software Solutions.", 1000, ""
            ]}
            className="typingText"
            speed={50}
            repeat={Infinity}
          />
        </motion.h1>
        <motion.p initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.2 }} className="article">
          <article>
              UniSoft provides professional software development, website design,
              SEO services, digital marketing, and business automation solutions
              to help companies grow faster and smarter in the digital world.
            </article>
        </motion.p>
      </div>
      <motion.div className="buttons" initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.4 }}>
          <p>
          <article>
              UniSoft provides professional software development, website design,
              SEO services, digital marketing, and business automation solutions
              to help companies grow faster and smarter in the digital world.
            </article>
        </p>
          <button className="primary"><Link href="/pricing" className="link">Get Started</Link></button>
          <button className="secondary"><Link href="/services" className="link">View Services</Link></button>
        </motion.div>
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
      </section>
    </div>
  )
}

export default Main