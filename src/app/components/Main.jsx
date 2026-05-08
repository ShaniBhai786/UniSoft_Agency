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
        {/* =========================
      PRIMARY SEO
  ========================== */}
        <title>
          UniSoft Pvt Ltd | Global Software, SEO & Web Development Company
        </title>

        <meta
          name="description"
          content="UniSoft Pvt Ltd is a global software company providing professional web development, SEO, digital marketing, MERN stack, WordPress, ecommerce, UI/UX, branding, and custom software solutions for businesses worldwide."
        />

        <meta
          name="keywords"
          content="
    UniSoft,
    UniSoft Pvt Ltd,
    unisoftpvt,
    software company,
    global software company,
    web development company,
    SEO agency,
    digital marketing company,
    MERN stack developers,
    React.js development,
    Next.js development,
    Node.js developers,
    WordPress development,
    ecommerce development,
    custom software development,
    branding agency,
    UI UX design,
    Meta Ads experts,
    Shopify development, 
    mobile app development,
    SaaS development,
    software house Pakistan,
    software company USA,
    web agency worldwide,
    affordable SEO services,
    business automation solutions,
    international software company
    "
        />

        <meta name="robots" content="index, follow, max-image-preview:large" />

        <meta name="author" content="UniSoft Pvt Ltd" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="theme-color" content="#000000" />

        <meta
          name="google-site-verification"
          content="WsViIkxJ04PGtVYoEIi1Ki4kHW8UyjuXdEuRnHrTl3I"
        />

        <link rel="canonical" href="https://unisoftpvt.com/" />

        {/* =========================
      FAVICON
  ========================== */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* =========================
      OPEN GRAPH / FACEBOOK / LINKEDIN
  ========================== */}
        <meta
          property="og:title"
          content="UniSoft Pvt Ltd | Global Software & SEO Agency"
        />

        <meta
          property="og:description"
          content="Professional web development, SEO, digital marketing, ecommerce, and software solutions helping businesses grow worldwide."
        />

        <meta property="og:type" content="website" />

        <meta property="og:url" content="https://unisoftpvt.com/" />

        <meta
          property="og:image"
          content="https://unisoftpvt.com/preview.png"
        />

        <meta property="og:site_name" content="UniSoft Pvt Ltd" />

        <meta property="og:locale" content="en_US" />

        {/* =========================
      TWITTER SEO
  ========================== */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="UniSoft Pvt Ltd | Web Development & SEO Experts"
        />

        <meta
          name="twitter:description"
          content="Global software company offering web development, SEO, branding, ecommerce, and digital marketing services."
        />

        <meta
          name="twitter:image"
          content="https://unisoftpvt.com/preview.png"
        />

        {/* =========================
      GEO & LANGUAGE SEO
  ========================== */}
        <meta name="language" content="English" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />

        {/* =========================
      STRUCTURED DATA / SCHEMA
  ========================== */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "UniSoft Pvt Ltd",
  "url": "https://unisoftpvt.com",
  "logo": "https://unisoftpvt.com/favicon.ico",
  "image": "https://unisoftpvt.com/preview.png",
  "description": "UniSoft Pvt Ltd is an international software company providing web development, SEO, branding, ecommerce, digital marketing, and custom software solutions globally.",
  "telephone": "+1-928-438-3214",
  "email": "info@unisoftpvt.com",
  "founder": {
    "@type": "Person",
    "name": "Dr. Roshaan",
    "jobTitle": "Chief Executive Officer"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "United States"
    },
    {
      "@type": "Country",
      "name": "Pakistan"
    },
    {
      "@type": "Country",
      "name": "United Kingdom"
    },
    {
      "@type": "Country",
      "name": "Canada"
    },
    {
      "@type": "Country",
      "name": "Australia"
    }
  ],
  "serviceType": [
    "Web Development",
    "SEO Services",
    "Digital Marketing",
    "MERN Stack Development",
    "React.js Development",
    "Next.js Development",
    "WordPress Development",
    "Shopify Development",
    "UI UX Design",
    "Ecommerce Development",
    "Meta Ads",
    "Branding",
    "Custom Software Development"
  ],
  "sameAs": [
    "https://www.linkedin.com/",
    "https://www.facebook.com/",
    "https://www.instagram.com/"
  ]
}
`}
        </script>
      </Helmet>
      <section className="hero">
        <div className="content">
          <div className="textSection">
            <motion.h1 className="asd" initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.8 }}>
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
            <p className="article">
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
      </section>
    </div>
  )
}

export default Main