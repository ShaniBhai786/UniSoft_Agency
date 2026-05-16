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
    <main className="dashboardHero">

      {/* BACKGROUND */}
      <div className="gradientBg" />
      <div className="gridOverlay" />

      {/* CONTENT */}
      <div className="dashboardContainer">

        {/* LEFT SIDE */}
        <motion.div
          className="leftSide"
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
          <span className="dash-badge">
            POWERING DIGITAL BUSINESSES 🚀
          </span>

          <h1 className="heroTitle">
            <TypeAnimation
              sequence={[
                "Modern Software Solutions for Smart Businesses.",
                1500,

                "Web Development, SEO & Automation Experts.",
                1500,

                "Scale Faster with UniSoft Digital Solutions.",
                1500,

                "Professional Business Growth Technology.",
                1500,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="heroDescription">
            UniSoft delivers enterprise-grade software development,
            SEO optimization, business automation, website design,
            and digital marketing solutions to help brands grow
            faster in the modern digital world.
          </p>

          {/* BUTTONS */}
          <div className="heroButtons">
            <Link href="/pricing" className="primaryBtn">
              Get Started
              <i className="ri-arrow-right-line"></i>
            </Link>

            <Link href="/services" className="secondaryBtn">
              Explore Services
            </Link>
          </div>

          {/* STATS */}
          <div className="statsGrid">

            <div className="statCard">
              <h2>50+</h2>
              <p>Projects Completed</p>
            </div>

            <div className="statCard">
              <h2>30+</h2>
              <p>Global Clients</p>
            </div>

            <div className="statCard">
              <h2>99%</h2>
              <p>Client Satisfaction</p>
            </div>

          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="rightSide"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          {/* DASHBOARD CARD */}
          <div className="dashboardCard">

            <div className="dashboardTop">
              <div className="circle red" />
              <div className="circle yellow" />
              <div className="circle green" />
            </div>

            <div className="dashboardContent">

              {/* SERVICE CARD */}
              <div className="serviceCard">
                <i className="ri-code-s-slash-line serviceIcon"></i>

                <div>
                  <h3>Custom Software</h3>
                  <p>Scalable modern applications</p>
                </div>
              </div>

              <div className="serviceCard">
                <i className="ri-line-chart-line serviceIcon"></i>

                <div>
                  <h3>SEO Optimization</h3>
                  <p>Boost rankings & traffic</p>
                </div>
              </div>

              <div className="serviceCard">
                <i className="ri-computer-line serviceIcon"></i>

                <div>
                  <h3>Web Development</h3>
                  <p>Modern responsive websites</p>
                </div>
              </div>

              <div className="serviceCard">
                <i className="ri-stack-line serviceIcon"></i>

                <div>
                  <h3>Automation</h3>
                  <p>Smart workflow integration</p>
                </div>
              </div>

            </div>
          </div>

        </motion.div>
      </div>
    </main>
  );
};

export default Main;