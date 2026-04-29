"use client"
import React, { useState } from 'react'
import { motion } from "framer-motion";

const Pricing = () => {
  const [yearly, setYearly] = useState("")
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <>
        <section id="pricing" className="pricing">
        <motion.h2 initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }}>
          Pricing
        </motion.h2>

        <div className="toggle">
          <span className={!yearly ? "active" : ""}>Monthly</span>
          <div className="switch" onClick={() => setYearly(!yearly)}>
            <div className={`circle ${yearly ? "move" : ""}`} />
          </div>
          <span className={yearly ? "active" : ""}>Yearly</span>
        </div>

        <div className="cards">
          {[
            { name: "Starter", m: 99, y: 79 },
            { name: "Professional", m: 299, y: 249 },
            { name: "Enterprise", m: 599, y: 499 }
          ].map((plan, i) => (
            <motion.div
              key={i}
              className={`card glass ${i === 1 ? "highlight" : ""}`}
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3>{plan.name}</h3>
              <p className="price">
                ${yearly ? plan.y : plan.m}
              </p>
              <p>{yearly ? "Billed monthly" : "Billed monthly"}</p>
              <button>Choose</button>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Pricing