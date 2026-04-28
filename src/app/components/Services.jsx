"use client"
import React from 'react'
import { motion } from "framer-motion"
import "../styles.css"

const Services = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0 }
      }
  return (
    <>
        <section id="services" className="services">
        <motion.h2 initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }}>
          Our Services
        </motion.h2>

        <div className="cards">
          {["Web Development", "SEO", "Marketing"].map((title, i) => (
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
              <h3 className="cardTitle">{title}</h3>
              <p>High-quality solutions that grow your business. </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Services