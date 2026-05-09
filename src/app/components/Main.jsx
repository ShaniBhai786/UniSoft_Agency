"use client";

import React from "react";
import "../styles.css";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const Main = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="container">
      <section className="hero">
        <div className="content">

          {/* TEXT CONTENT */}
          <div className="textSection">
            <motion.h1
              className="asd"
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.8 }}
            >
              <TypeAnimation
                sequence={[
                  "All-in-One Business Software Solutions for Growth and Efficiency.",
                  1000,
                  "",
                  "Streamline Your Business Operations with Powerful Digital Solutions.",
                  1000,
                  "",
                  "Boost Productivity with Advanced Software, SEO and Web Services.",
                  1000,
                  "",
                  "Complete IT Solutions – Websites, SEO, and Automation.",
                  1000,
                  "",
                  "Transform Your Business with Modern Software Solutions.",
                  1000,
                  "",
                ]}
                className="typingText"
                speed={50}
                repeat={Infinity}
              />
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ delay: 0.2 }}
              className="article"
            >
              UniSoft provides professional software development,
              website design, SEO services, digital marketing,
              and business automation solutions to help companies
              grow faster and smarter in the digital world.
            </motion.p>
          </div>

          {/* VIDEO */}
          <video
            className="bgVideo"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster="/assets/thumbnail.png"
          >
            <source
              src="/assets/newVideo.mp4"
              type="video/mp4"
            />
          </video>

          {/* OVERLAY */}
          <div className="overlay" />

          {/* BUTTONS */}
          <motion.div
            className="buttons"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.4 }}
          >
            <p className="article">
              UniSoft delivers scalable web development,
              SEO optimization, digital marketing,
              branding, and automation solutions for
              startups and enterprises worldwide.
            </p>

            <button className="primary">
              <Link href="/pricing" className="link">
                Get Started
              </Link>
            </button>

            <button className="secondary">
              <Link href="/services" className="link">
                View Services
              </Link>
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Main;