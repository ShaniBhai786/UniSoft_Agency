"use client"

import React from "react"
import Head from "next/head"
import { motion } from "framer-motion"
import "../styles.css"

const Services = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
  }

  const services = [
    {
      title: "Web Development",
      desc: "Custom websites, MERN stack apps, Next.js solutions, ecommerce platforms, and scalable business websites."
    },
    {
      title: "SEO Services",
      desc: "Global SEO solutions including technical SEO, local SEO, on-page optimization, backlinks, and ranking strategies."
    },
    {
      title: "Digital Marketing",
      desc: "Meta Ads, Google Ads, social media marketing, branding, lead generation, and online business growth."
    }
  ]

  return (
    <>
      <Head>
        {/* PRIMARY SEO */}
        <title>
          Professional Web Development, SEO & Digital Marketing Services | UniSoft
        </title>

        <meta
          name="description"
          content="UniSoft provides world-class web development, SEO, digital marketing, MERN stack, ecommerce, and branding services for businesses worldwide."
        />

        <meta
          name="keywords"
          content="
          web development services,
          SEO services,
          digital marketing agency,
          MERN stack development,
          React.js developers,
          Next.js development,
          ecommerce development,
          WordPress development,
          branding agency,
          custom software development,
          global software company,
          technical SEO,
          local SEO,
          software company USA,
          software house Pakistan,
          business automation,
          Shopify experts,
          website development company,
          online marketing services
          "
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://unisoftpvt.com/services"
        />

        {/* OPEN GRAPH */}
        <meta
          property="og:title"
          content="UniSoft Services | Web Development, SEO & Digital Marketing"
        />

        <meta
          property="og:description"
          content="Grow your business globally with professional web development, SEO, ecommerce, and digital marketing services from UniSoft."
        />

        <meta
          property="og:image"
          content="https://unisoftpvt.com/preview.png"
        />

        <meta
          property="og:url"
          content="https://unisoftpvt.com/services"
        />

        <meta property="og:type" content="website" />

        {/* TWITTER SEO */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="UniSoft Global Digital Services"
        />

        <meta
          name="twitter:description"
          content="Professional SEO, web development, and digital marketing services helping businesses grow worldwide."
        />

        <meta
          name="twitter:image"
          content="https://unisoftpvt.com/preview.png"
        />

        {/* SCHEMA MARKUP */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Web Development, SEO & Digital Marketing",
  "provider": {
    "@type": "Organization",
    "name": "UniSoft Pvt Ltd",
    "url": "https://unisoftpvt.com",
    "logo": "https://unisoftpvt.com/favicon.ico"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Worldwide"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "UniSoft Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SEO Services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Digital Marketing"
        }
      }
    ]
  }
}
`}
        </script>
      </Head>

      <section id="services" className="services">
        <motion.h1
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          Global Web Development, SEO & Marketing Services
        </motion.h1>

        <motion.p
          className="servicesSubtitle"
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          UniSoft helps startups, brands, and businesses worldwide grow with
          high-performance websites, powerful SEO strategies, and digital
          marketing solutions.
        </motion.p>

        <div className="cards">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="card"
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="cardContent">
                <h2 className="cardTitle">{service.title}</h2>

                <p>{service.desc}</p>

                <ul className="serviceList">
                  <li>✔ Professional Solutions</li>
                  <li>✔ Global Client Support</li>
                  <li>✔ SEO Optimized Strategy</li>
                  <li>✔ Scalable Business Growth</li>
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Services