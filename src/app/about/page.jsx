"use client"
import Link from "next/link";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

function About() {
  useEffect(() => {
    window.scroll(0, 0)
  },[])
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <section className="about" id="about">

      {/* About Intro */}
      <motion.div
          className="about-intro"
          key={1}
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          transition={{ delay: 1 * 0.1 }}
          viewport={{ once: true }}
        >
        <h2>About UniSoft</h2>
        <p>
          UniSoft creates innovative digital solutions to help businesses grow, delivering high-quality software, modern websites, and reliable applications by combining creativity, technology, and experience.

        </p>
      </motion.div>

      {/* Who We Are / What We Do / Why Choose Us */}
      <div className="three-qoutes">
        <motion.div
          className="aboutCard"
          key={2}
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          transition={{ delay: 2 * 0.1 }}
          viewport={{ once: true }}
        >
          <h3>Who We Are</h3>
          <p>
            We are a team of passionate developers and designers dedicated to
            building modern software solutions for businesses. Our focus is to
            create reliable, scalable, and user-friendly digital products.
          </p>
        </motion.div>

        <motion.div
          className="aboutCard"
          key={1}
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          transition={{ delay: 3 * 0.1 }}
          viewport={{ once: true }}
        >
          <h3>What We Do</h3>
          <p>
            We develop websites, web applications, and custom software that
            help businesses improve their online presence and streamline their
            operations.
          </p>
        </motion.div>

        <motion.div
          className="aboutCard"
          key={4}
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          transition={{ delay: 4 * 0.1 }}
          viewport={{ once: true }}
        >
          <h3>Why Choose Us</h3>
          <p>
            We combine creativity, technology, and strategic thinking to
            deliver high-quality solutions that help our clients grow and
            succeed.
          </p>
        </motion.div>
      </div>

      {/* Mission & Vision */}
      <div className="mission-vision">
        <motion.div
          className="mission"
          key={5}
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          transition={{ delay: 1 * 0.1 }}
          viewport={{ once: true }}
        >
          <h3>Our Mission</h3>
          <p>
            Our mission is to empower businesses with innovative and reliable
            software solutions that drive digital transformation and growth.
          </p>
        </motion.div>

        <motion.div
          className="vision"
          key={6}
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          transition={{ delay: 2 * 0.1 }}
          viewport={{ once: true }}
        >
          <h3>Our Vision</h3>
          <p>
            Our vision is to become a trusted technology partner for businesses
            worldwide by delivering impactful digital experiences.
          </p>
        </motion.div>
      </div>

      {/* Technologies */}
      <motion.div
          className="techs"
          key={7}
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          transition={{ delay: 4 * 0.1 }}
          viewport={{ once: true }}
        >
        <h2>Technologies We Use</h2>
        <div className="tech-list">
          <span>React</span>
          <span>Node.js</span>
          <span>JavaScript</span>
          <span>Python</span>
          <span>MongoDB</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>WordPress</span>
        </div>
      </motion.div>

      {/* Company Stats */}
      <div className="stats">
        <motion.div
          className="stat"
          key={8}
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          transition={{ delay: 2 * 0.1 }}
          viewport={{ once: true }}
        >
          <h3>50+</h3>
          <p>Projects Completed</p>
        </motion.div>

        <motion.div
          className="stat"
          key={9}
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          transition={{ delay: 3 * 0.1 }}
          viewport={{ once: true }}
        >
          <h3>30+</h3>
          <p>Happy Clients</p>
        </motion.div>

        <motion.div
          className="stat"
          key={10}
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          transition={{ delay: 4 * 0.1 }}
          viewport={{ once: true }}
        >
          <h3>5+</h3>
          <p>Years Experience</p>
        </motion.div>
      </div>

      {/* Call To Action */}
      <div className="about-cta">
        <h2>Let's Build Something Great Together</h2>
        <button><Link href="/contact" >Get In Touch</Link></button>
      </div>

    </section>
  );
}

export default About;