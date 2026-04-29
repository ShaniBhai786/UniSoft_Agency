"use client"
import React, { useEffect, useState } from 'react'
import Feedback from '../components/Feedback'
import ContactUs from '../components/ContactUs'
import Loading from '../components/Loading';
import "../styles.css"
import { motion } from "framer-motion";

function Contact() {
  const [loading, setLoading] = useState(false)

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };
  useEffect(() => {
    window.scroll(0, 0)
  })
  return (
    <>
      <div className='contact' id='contact'>
        <motion.div
          className="c"
          key={1}
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          transition={{ delay: 3 * 0.1 }}
          viewport={{ once: true }}
        >
          <Feedback setLoading={setLoading} />
        </motion.div>

        <motion.div
          className="f"
          key={2}
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          transition={{ delay: 1 * 0.1 }}
          viewport={{ once: true }}
        ><ContactUs /></motion.div>
        {loading && <Loading />}
      </div>
    </>
  )
}

export default Contact
