"use client"
import React, {useEffect} from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const FramerMotion = ({ children, className }) => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className={className}>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default FramerMotion
