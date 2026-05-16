"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "../styles.css";
import { motion } from "framer-motion";

function Tech() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <section className="tech" id="tech">
      <i className="fa fa-arrow-left back-icon" onClick={handleBackClick}></i>

      <div className="tech-header">
        <h2>UniSoft Tech Industry</h2>
        <p>
          We build modern digital solutions to help businesses grow in the
          digital world. Our team specializes in creating reliable, scalable,
          and user-friendly software products.
        </p>
      </div>

      <div className="tech-services">
        <Link href="/pricing">
        <motion.div
          className="tech-card"
          key={1}
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          transition={{ delay: 1 * 0.1 }}
          viewport={{ once: true }}
        >
          <i className="fa fa-code tech-icon"></i>
          {/* <FontAwesomeIcon icon={faCode} className="tech-icon" /> */}
          <h3>Web Development</h3>
          <p>
            Professional websites built with modern technologies that help
            businesses create a strong online presence.
          </p>
        </motion.div>
        </Link>

        <Link href="/pricing">
          <motion.div
            className="tech-card"
            key={2}
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            transition={{ delay: 2 * 0.1 }}
            viewport={{ once: true }}
          >
            <i className="fa fa-laptop-code tech-icon"></i>
            <h3>Web Applications</h3>
            <p>
              Powerful web applications designed to automate business processes
              and improve productivity.
            </p>
          </motion.div>
        </Link>

        <Link href="/pricing">
          <motion.div
            className="tech-card"
            key={3}
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
          transition={{ delay: 2 * 0.2 }}
          viewport={{ once: true }}
        >
          <i className="fa fa-mobile-screen tech-icon"></i>
          {/* <FontAwesomeIcon icon={faMobileScreen} className="tech-icon" /> */}
          <h3>App Development</h3>
          <p>
            Custom mobile applications designed for performance, usability, and
            scalability.
          </p>
        </motion.div>
        </Link>
        <Link href="/pricing">
          <motion.div
            className="tech-card"
            key={4}
            initial="hidden"
            whileInView="show"
          variants={fadeUp}
          transition={{ delay: 2 * 0.2 }}
          viewport={{ once: true }}
        >
          <i className="fa fa-server tech-icon"></i>
          {/* <FontAwesomeIcon icon={faServer} className="tech-icon" /> */}
          <h3>Custom Software</h3>
          <p>
            Tailored software solutions built to solve unique business
            challenges and improve operational efficiency.
          </p>
        </motion.div>
        </Link>
        
        <Link href="/quote">
          <motion.div
            className="tech-card-quote"
            key={5}
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            transition={{ delay: 2 * 0.2 }}
            viewport={{ once: true }}
          >
            <i className="fa fa-book tech-icon"></i>
            {/* <FontAwesomeIcon icon={faBook} className="tech-icon" /> */}
            <h3>Get A Quote</h3>
            <p>
              Get a personalized quote for your project by contacting our sales
              team. We offer competitive pricing and flexible solutions to meet
              your
            </p>
          </motion.div>
        </Link>
      </div>
    </section>
  );
}

export default Tech;
