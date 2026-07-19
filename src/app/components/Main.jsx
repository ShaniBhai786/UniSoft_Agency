"use client";

import React, { useState, useEffect } from "react";
import "../styles.css";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const heroImages = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
];

const statsData = [
  {
    icon: "ri-stack-line",
    val: "100+",
    label: "Projects Done",
    sub: "Delivered worldwide",
    color: "#38bdf8",
    glow: "rgba(56,189,248,0.18)",
    bg: "rgba(56,189,248,0.1)",
    border: "rgba(56,189,248,0.2)",
  },
  {
    icon: "ri-group-line",
    val: "50+",
    label: "Happy Clients",
    sub: "Long-term relationships",
    color: "#22c55e",
    glow: "rgba(34,197,94,0.18)",
    bg: "rgba(34,197,94,0.1)",
    border: "rgba(34,197,94,0.2)",
  },
  {
    icon: "ri-medal-line",
    val: "5+",
    label: "Years Experience",
    sub: "Delivering excellence",
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.18)",
    bg: "rgba(245,158,11,0.1)",
    border: "rgba(245,158,11,0.2)",
  },
  {
    icon: "ri-customer-service-2-line",
    val: "24/7",
    label: "Support",
    sub: "Always here for you",
    color: "#a855f7",
    glow: "rgba(168,85,247,0.18)",
    bg: "rgba(168,85,247,0.1)",
    border: "rgba(168,85,247,0.2)",
  },
];

const servicesData = [
  {
    id: 1,
    icon: "ri-code-s-slash-line",
    title: "Software Development",
    desc: "Custom software solutions built to solve your unique business challenges with modern tech.",
    readMore: "We build scalable, maintainable software using MERN stack, Next.js, and cloud-native architectures tailored to your goals.",
    color: "#38bdf8",
    link: "/services/software-development",
  },
  {
    id: 2,
    icon: "ri-global-line",
    title: "Web Development",
    desc: "Modern, responsive websites that are fast, secure, and user-friendly across all devices.",
    readMore: "From landing pages to full-stack web apps — we craft pixel-perfect, SEO-optimized websites that convert visitors into customers.",
    color: "#6366f1",
    link: "/services/web-development",
  },
  {
    id: 3,
    icon: "ri-settings-4-line",
    title: "AI Automation",
    desc: "Automate workflows and boost productivity with smart, intelligent automation solutions.",
    readMore: "We integrate AI-powered bots, workflow automation, and smart pipelines that save time and reduce operational costs.",
    color: "#a855f7",
    link: "/services/automation-solutions",
  },
  {
    id: 4,
    icon: "ri-smartphone-line",
    title: "Mobile App Development",
    desc: "Android & iOS apps that deliver seamless performance and outstanding user experience.",
    readMore: "Cross-platform and native mobile apps built with React Native — fast, beautiful, and ready for the app stores.",
    color: "#ec4899",
    link: "/services/software-development",
  },
  {
    id: 5,
    icon: "ri-megaphone-line",
    title: "Digital Marketing",
    desc: "SEO, Social Media, Google Ads & strategies that grow your online presence and revenue.",
    readMore: "Data-driven campaigns across Google, Meta, and organic search that bring real traffic and measurable ROI.",
    color: "#22c55e",
    link: "/services/digital-marketing",
  },
  {
    id: 6,
    icon: "ri-pen-nib-line",
    title: "UI/UX Design",
    desc: "Beautiful, intuitive designs that enhance user experience and drive engagement.",
    readMore: "From wireframes to high-fidelity prototypes — we design interfaces that users love and businesses trust.",
    color: "#eab308",
    link: "/services/ui-ux-design",
  },
];

const brands = [
  { icon: "ri-graduation-cap-line", name: "EduSmart" },
  { icon: "ri-flask-line", name: "TechNova" },
  { icon: "ri-coin-line", name: "FinanceMax" },
  { icon: "ri-heart-pulse-line", name: "HealthCare" },
  { icon: "ri-store-2-line", name: "RetailPrime" },
  { icon: "ri-building-2-line", name: "BuildCraft" },
];

const FlipCard = ({ s, isFlipped, onFlip }) => {
  return (
    <div
      className="mainFlipOuter"
      onClick={onFlip}
      title="Click to flip"
    >
      <div className={`mainFlipInner${isFlipped ? " flipped" : ""}`}>
        {/* FRONT */}
        <div className="mainFlipFront">
          <div
            className="mainFlipIcon"
            style={{ background: `${s.color}18`, border: `1px solid ${s.color}30` }}
          >
            <i className={s.icon} style={{ color: s.color, fontSize: 24 }}></i>
          </div>
          <h3 className="mainFlipTitle">{s.title}</h3>
          <p className="mainFlipDesc">{s.desc}</p>
          <span className="mainFlipHint">
            <i className="ri-refresh-line"></i> Click to read more
          </span>
        </div>
        {/* BACK */}
        <div className="mainFlipBack" style={{ borderColor: `${s.color}30` }}>
          <div
            className="mainFlipIcon"
            style={{ background: `${s.color}20`, border: `1px solid ${s.color}40` }}
          >
            <i className={s.icon} style={{ color: s.color, fontSize: 24 }}></i>
          </div>
          <h3 className="mainFlipTitle" style={{ color: s.color }}>{s.title}</h3>
          <p className="mainFlipBackDesc">{s.readMore}</p>
          <Link
            href={s.link}
            className="mainFlipBtn"
            style={{ borderColor: `${s.color}50`, color: s.color }}
            onClick={(e) => e.stopPropagation()}
          >
            Read More <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Main = () => {
  const [imgIdx, setImgIdx] = useState(0);
  const [activeFlip, setActiveFlip] = useState(null);

  const handleFlip = (id) => setActiveFlip(prev => prev === id ? null : id);

  useEffect(() => {
    const t = setInterval(() => setImgIdx((i) => (i + 1) % heroImages.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="mainPage">

      {/* ── HERO ── */}
      <section className="mainHero">
        <div className="mainInner">
          <div className="mainHeroGrid">

            {/* LEFT */}
            <motion.div initial="hidden" animate="show" variants={fadeUp}>
              <div className="mainBadge">
                <i className="ri-rocket-line"></i> Trusted Software Development Company
              </div>
              <h1 className="mainH1">
                Transforming Businesses Through{" "}
                <span className="mainGrad">
                  <TypeAnimation
                    sequence={["Software & Innovation", 2000, "Web Development", 2000, "Digital Marketing", 2000, "Business Automation", 2000]}
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
              </h1>
              <p className="mainDesc">
                UniSoft helps startups and businesses build custom software, websites, AI automation
                systems, and digital marketing solutions that accelerate growth and increase revenue.
              </p>
              <div className="mainBtns">
                <Link href="/contact" className="mainBtnPrimary">
                  Get Free Consultation <i className="ri-arrow-right-line"></i>
                </Link>
                <Link href="/services" className="mainBtnSecondary">
                  View Our Services
                </Link>
              </div>

              {/* Mini Stats */}
              <div className="mainMiniStats">
                {[
                  { val: "5+", label: "Years Exp", icon: "ri-calendar-check-line", color: "#6366f1" },
                  { val: "100+", label: "Projects", icon: "ri-bar-chart-grouped-line", color: "#38bdf8" },
                  { val: "50+", label: "Clients", icon: "ri-group-line", color: "#22c55e" },
                  { val: "24/7", label: "Support", icon: "ri-headphone-line", color: "#ec4899" },
                ].map((s, i) => (
                  <div key={i} className="mainMiniStat">
                    <div className="mainMiniStatTop">
                      <i className={s.icon} style={{ color: s.color, fontSize: 15 }}></i>
                      <span className="mainMiniVal">{s.val}</span>
                    </div>
                    <span className="mainMiniLabel">{s.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT — Image Slider */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="mainHeroRight"
            >
              <div className="mainImgCard">
                <div className="mainImgBar">
                  <span className="mainDot red"></span>
                  <span className="mainDot yellow"></span>
                  <span className="mainDot green"></span>
                  <span className="mainImgBarText">unisoft.dev</span>
                </div>
                <div className="mainImgSlider">
                  {heroImages.map((img, i) => (
                    <div
                      key={i}
                      className="mainImgSlide"
                      style={{
                        backgroundImage: `url(${img})`,
                        opacity: imgIdx === i ? 1 : 0,
                        transition: "opacity 0.8s ease",
                      }}
                    />
                  ))}
                  <div className="mainImgOverlay" />
                  <div className="mainImgDots">
                    {heroImages.map((_, i) => (
                      <button
                        key={i}
                        className={`mainImgDot${imgIdx === i ? " active" : ""}`}
                        onClick={() => setImgIdx(i)}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating tag — no AI icon */}
              <div className="mainFloatTag">
                <i className="ri-rocket-2-line" style={{ color: "#38bdf8", fontSize: 20 }}></i>
                <div>
                  <p className="mainFloatTitle">Innovation First</p>
                  <p className="mainFloatSub">Smart Enterprise Solutions</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── BRANDS TICKER ── */}
      <div className="mainBrandBanner">
        <p className="mainBrandLabel">Trusted By Businesses Worldwide</p>
        <div className="mainBrandScroll">
          <div className="mainBrandTrack">
            {[...brands, ...brands].map((b, i) => (
              <div key={i} className="mainBrandItem">
                <i className={b.icon}></i> {b.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── STATS ── */}
      <section className="mainStatsSection">
        <div className="mainInner">
          <div className="mainSectionHead">
            <span className="mainEyebrow">Our Numbers</span>
            <h2>Results That Speak For Themselves</h2>
          </div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mainStatsGrid"
          >
            {statsData.map((s) => (
              <motion.div key={s.val} variants={fadeUp} className="mainStatCard">
                <div className="mainStatCardInner" style={{ borderColor: s.border }}>
                  <div className="mainStatTopRow">
                    <div className="mainStatIconBox" style={{ background: s.bg, border: `1px solid ${s.border}` }}>
                      <i className={s.icon} style={{ color: s.color, fontSize: 24 }}></i>
                    </div>
                    <span className="mainStatNum" style={{ color: s.color }}>{s.val}</span>
                  </div>
                  <div className="mainStatDivider" />
                  <div className="mainStatInfo">
                    <div className="mainStatLabel">{s.label}</div>
                    <div className="mainStatSub">{s.sub}</div>
                  </div>
                </div>
                <div className="mainStatGlow" style={{ background: `radial-gradient(ellipse at top, ${s.glow}, transparent 70%)` }} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES — FLIP CARDS ── */}
      <section id="services" className="mainServicesSection">
        <div className="mainInner">
          <div className="mainSectionHead">
            <span className="mainEyebrow">Our Services</span>
            <h2>Solutions That Drive Your Business Forward</h2>
          </div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mainServicesGrid"
          >
            {servicesData.map((s) => (
              <motion.div key={s.id} variants={fadeUp}>
                <FlipCard s={s} isFlipped={activeFlip === s.id} onFlip={() => handleFlip(s.id)} />
              </motion.div>
            ))}
          </motion.div>
          <div className="mainSectionCta">
            <Link href="/services" className="mainBtnPrimary">
              View All Services <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section id="portfolio" className="mainPortfolioSection">
        <div className="mainInner">
          <div className="mainSectionHead">
            <span className="mainEyebrow">Featured Projects</span>
            <h2>Our Recent Work</h2>
          </div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mainPortfolioGrid"
          >
            {[
              { image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=600&q=80", title: "School Management System", type: "Web Application", icon: "ri-school-line", desc: "A complete school ERP with attendance, grades, fee management and parent portal." },
              { image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80", title: "Online Examination System", type: "Web Application", icon: "ri-file-list-3-line", desc: "Secure online exam platform with auto-grading, timer, and result analytics." },
              { image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80", title: "E-commerce Website", type: "Web Development", icon: "ri-shopping-cart-line", desc: "Full-featured online store with payments, inventory, and order tracking." },
              { image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80", title: "Smart Chatbot Solution", type: "Automation", icon: "ri-chat-3-line", desc: "AI-powered chatbot for customer support, lead capture, and 24/7 automation." },
            ].map((p) => (
              <motion.div key={p.title} variants={fadeUp} className="mainPortfolioCard">
                <div className="mainPortfolioImg" style={{ backgroundImage: `url(${p.image})` }}>
                  <div className="mainPortfolioOverlay" />
                  <span className="mainPortfolioTag">
                    <i className={p.icon}></i> {p.type}
                  </span>
                </div>
                <div className="mainPortfolioInfo">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" className="mainTestiSection">
        <div className="mainInner">
          <div className="mainSectionHead">
            <span className="mainEyebrow">Client Reviews</span>
            <h2>Trusted by Businesses, Loved by Clients</h2>
          </div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mainTestiGrid"
          >
            {[
              { initials: "AR", name: "Ahmed Raza", role: "CEO, EduSmart", text: "UniSoft delivered an amazing website for our business. Their team is professional, responsive, and highly skilled.", color: "#6366f1" },
              { initials: "SK", name: "Sarah Khan", role: "Marketing Head, TechNova", text: "The automation solution provided by UniSoft has significantly improved our business efficiency and saved us hours daily.", color: "#38bdf8" },
              { initials: "UT", name: "Usman Tariq", role: "Founder, RetailPrime", text: "Great experience working with UniSoft. They delivered our project on time and exceeded our expectations completely.", color: "#22c55e" },
            ].map((t) => (
              <motion.div key={t.name} variants={fadeUp} className="mainTestiCard">
                <div className="mainTestiQuoteIcon">
                  <i className="ri-double-quotes-l"></i>
                </div>
                <p className="mainTestiText">{t.text}</p>
                <div className="mainTestiStars">★★★★★</div>
                <div className="mainTestiClient">
                  <div className="mainTestiAvatar" style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}99)` }}>
                    {t.initials}
                  </div>
                  <div>
                    <h4>{t.name}</h4>
                    <span>{t.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FOUNDER ── */}
      <section id="about" className="mainFounderSection">
        <div className="mainInner">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mainFounderCard"
          >
            <div className="mainFounderImgBox">
              <img src="/assets/ceoo.jpeg" alt="Roshaan Ahmad - CEO UniSoft" className="mainFounderImg" />
              <div className="mainFounderImgGlow" />
              <div className="mainFounderBadgeFloat">
                <i className="ri-verified-badge-line" style={{ color: "#38bdf8" }}></i>
                <span>Verified Expert</span>
              </div>
            </div>
            <div className="mainFounderContent">
              <span className="mainEyebrow">Meet Our Founder</span>
              <h2>Roshaan Ahmad</h2>
              <h5>CEO & Full Stack Developer</h5>
              <p>
                With 5+ years of experience in software development and automation, Roshaan leads
                UniSoft with a vision to empower businesses through technology and innovation.
              </p>
              <div className="mainFounderBullets">
                {[
                  { icon: "ri-code-s-slash-line", text: "Full Stack Developer (MERN)" },
                  { icon: "ri-time-line", text: "5+ Years Experience" },
                  { icon: "ri-bar-chart-line", text: "100+ Successful Projects" },
                  { icon: "ri-settings-4-line", text: "Automation Expert" },
                  { icon: "ri-trophy-line", text: "Committed to Client Success" },
                ].map((b) => (
                  <div key={b.text} className="mainFounderBullet">
                    <i className={b.icon} style={{ color: "#38bdf8", fontSize: 16 }}></i>
                    <span>{b.text}</span>
                  </div>
                ))}
              </div>
              <div className="mainFounderSocials">
                {[
                  ["ri-linkedin-fill", "#"],
                  ["ri-facebook-fill", "#"],
                  ["ri-instagram-line", "#"],
                  ["ri-github-fill", "#"],
                ].map(([icon, href]) => (
                  <a key={icon} href={href} className="mainSocialBtn">
                    <i className={icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mainCta"
          >
            <div className="mainCtaLeft">
              <h2>Ready to Take Your Business to the Next Level?</h2>
              <p>Let&apos;s discuss how we can help you achieve your goals.</p>
            </div>
            <Link href="/contact" className="mainCtaBtn">
              Get Free Consultation <i className="ri-arrow-right-line"></i>
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default Main;
