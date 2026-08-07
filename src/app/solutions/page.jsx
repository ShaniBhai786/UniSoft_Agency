"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import "../styles.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const categories = ["All", "Bug Fix", "Performance", "Security", "UI/UX", "Integration"];

const solutions = [
  {
    id: 1,
    title: "E-Commerce Checkout Crash Fix",
    category: "Bug Fix",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=700&q=80",
    tags: ["React", "Node.js", "Stripe"],
    problem: "Checkout page was crashing on mobile devices causing 100% cart abandonment on iOS Safari.",
    solution: "Identified async race condition in Stripe payment hook. Fixed event listener cleanup and added proper error boundaries.",
    impact: "Checkout success rate went from 0% → 94% on mobile.",
    color: "#ef4444",
    icon: "ri-bug-line",
    link: "https://stripe.com",
    year: "2024",
  },
  {
    id: 2,
    title: "WordPress Site Speed Optimization",
    category: "Performance",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80",
    tags: ["WordPress", "PHP", "CDN"],
    problem: "Business website scoring 18/100 on Google PageSpeed. Bounce rate was 78% due to 12s load time.",
    solution: "Removed 14 unused plugins, implemented lazy loading, configured Cloudflare CDN, and optimized database queries.",
    impact: "PageSpeed score jumped to 91. Load time reduced from 12s → 1.8s.",
    color: "#f59e0b",
    icon: "ri-speed-line",
    link: "https://pagespeed.web.dev",
    year: "2024",
  },
  {
    id: 3,
    title: "React App Memory Leak Resolved",
    category: "Bug Fix",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=700&q=80",
    tags: ["React", "useEffect", "JavaScript"],
    problem: "Dashboard app was consuming 2GB+ RAM after 30 minutes of use, causing browser tab crashes.",
    solution: "Found 6 useEffect hooks missing cleanup functions. Fixed WebSocket connections and interval timers not being cleared on unmount.",
    impact: "Memory usage stabilized at 180MB. Zero crashes reported after fix.",
    color: "#38bdf8",
    icon: "ri-cpu-line",
    link: "https://react.dev",
    year: "2024",
  },
  {
    id: 4,
    title: "SQL Injection Vulnerability Patched",
    category: "Security",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=700&q=80",
    tags: ["MySQL", "PHP", "Security"],
    problem: "Client's login form was vulnerable to SQL injection. Penetration test revealed full database access was possible.",
    solution: "Replaced raw SQL queries with prepared statements, added input sanitization, implemented rate limiting and WAF rules.",
    impact: "All OWASP Top 10 vulnerabilities resolved. Security audit passed with zero critical issues.",
    color: "#a855f7",
    icon: "ri-shield-check-line",
    link: "https://owasp.org",
    year: "2023",
  },
  {
    id: 5,
    title: "Next.js Hydration Error Fix",
    category: "Bug Fix",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=700&q=80",
    tags: ["Next.js", "SSR", "React"],
    problem: "Production site showing hydration mismatch errors causing white screen on first load for 30% of users.",
    solution: "Traced issue to localStorage access during SSR. Wrapped client-only code in useEffect and added dynamic imports with ssr:false.",
    impact: "Hydration errors dropped to zero. First load white screen completely eliminated.",
    color: "#22c55e",
    icon: "ri-code-s-slash-line",
    link: "https://nextjs.org",
    year: "2024",
  },
  {
    id: 6,
    title: "Mobile UI Responsiveness Overhaul",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=700&q=80",
    tags: ["CSS", "Tailwind", "Figma"],
    problem: "SaaS dashboard was completely broken on screens below 768px. Navigation was unusable on mobile.",
    solution: "Rebuilt layout using CSS Grid with proper breakpoints, replaced fixed widths with fluid units, redesigned mobile navigation.",
    impact: "Mobile usability score improved from 34 → 96. Mobile session duration increased by 3x.",
    color: "#ec4899",
    icon: "ri-smartphone-line",
    link: "https://web.dev/measure",
    year: "2024",
  },
  {
    id: 7,
    title: "WhatsApp API Integration Debugging",
    category: "Integration",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=700&q=80",
    tags: ["WhatsApp API", "Node.js", "Webhooks"],
    problem: "WhatsApp Business API webhooks were randomly failing. 40% of automated messages were not being delivered.",
    solution: "Discovered webhook verification was timing out due to slow database queries. Added Redis caching and optimized webhook response time to under 200ms.",
    impact: "Message delivery rate improved from 60% → 99.2%. Zero webhook timeouts in 3 months.",
    color: "#22c55e",
    icon: "ri-whatsapp-line",
    link: "https://developers.facebook.com/docs/whatsapp",
    year: "2024",
  },
  {
    id: 8,
    title: "Node.js API Response Time Fix",
    category: "Performance",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=80",
    tags: ["Node.js", "MongoDB", "Redis"],
    problem: "REST API endpoints taking 8-15 seconds to respond. Frontend was timing out on critical user actions.",
    solution: "Profiled queries and found N+1 problem in MongoDB aggregations. Added proper indexes, implemented Redis caching for frequent queries.",
    impact: "API response time reduced from 8s → 120ms. Server load dropped by 70%.",
    color: "#f59e0b",
    icon: "ri-server-line",
    link: "https://nodejs.org",
    year: "2023",
  },
  {
    id: 9,
    title: "JWT Auth Token Expiry Bug",
    category: "Security",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=700&q=80",
    tags: ["JWT", "Express", "Auth"],
    problem: "Users were getting logged out randomly mid-session. Some users could access protected routes after logout.",
    solution: "Found token refresh logic was not handling clock skew. Implemented token blacklisting with Redis and fixed refresh token rotation.",
    impact: "Zero unauthorized access incidents. Session stability improved to 99.9% uptime.",
    color: "#6366f1",
    icon: "ri-lock-line",
    link: "https://jwt.io",
    year: "2024",
  },
];

const stats = [
  { icon: "ri-bug-line", val: "200+", label: "Issues Resolved", color: "#ef4444" },
  { icon: "ri-timer-line", val: "48h", label: "Avg Resolution Time", color: "#f59e0b" },
  { icon: "ri-shield-check-line", val: "100%", label: "Client Satisfaction", color: "#22c55e" },
  { icon: "ri-global-line", val: "50+", label: "Live Projects Fixed", color: "#38bdf8" },
];

export default function SolutionsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expanded, setExpanded] = useState(null);

  const filtered =
    activeCategory === "All"
      ? solutions
      : solutions.filter((s) => s.category === activeCategory);

  return (
    <div className="pfPage">
      <div className="pfBg1" />
      <div className="pfBg2" />
      <div className="pfGridBg" />

      <div className="pfInner">

        {/* HERO */}
        <motion.div className="pfHero" variants={stagger} initial="hidden" animate="show">
          <motion.span variants={fadeUp} className="pfEyebrow">
            <i className="ri-tools-line"></i> Problem Solving & Debugging
          </motion.span>
          <motion.h1 variants={fadeUp} className="pfTitle">
            Real Problems. <span className="pfGrad">Real Solutions.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="pfSubtitle">
            We don&apos;t just build — we fix. Here are live projects where we diagnosed critical bugs,
            performance issues, and security vulnerabilities that others couldn&apos;t solve.
          </motion.p>
          <motion.div variants={fadeUp} className="pfHeroBtns">
            <Link href="/contact" className="pfBtnPrimary">
              <i className="ri-customer-service-2-line"></i> Get Your Issue Fixed
            </Link>
            <Link href="/portfolio" className="pfBtnSecondary">
              <i className="ri-briefcase-4-line"></i> View Portfolio
            </Link>
          </motion.div>
        </motion.div>

        {/* STATS */}
        <motion.div
          className="pfStatsRow"
          variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
        >
          {stats.map((s) => (
            <motion.div key={s.label} variants={fadeUp} className="pfStatCard">
              <div className="pfStatIcon" style={{ background: `${s.color}15`, border: `1px solid ${s.color}25` }}>
                <i className={s.icon} style={{ color: s.color, fontSize: 22 }}></i>
              </div>
              <div className="pfStatVal" style={{ color: s.color }}>{s.val}</div>
              <div className="pfStatLabel">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* FILTER */}
        <motion.div
          className="pfFilterRow"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          {categories.map((c) => (
            <button
              key={c}
              className={`pfFilterBtn${activeCategory === c ? " active" : ""}`}
              onClick={() => setActiveCategory(c)}
            >
              {c}
            </button>
          ))}
        </motion.div>

        {/* SOLUTIONS GRID */}
        <motion.div
          className="pfGrid slGrid"
          variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
          key={activeCategory}
        >
          <AnimatePresence>
            {filtered.map((s) => (
              <motion.div key={s.id} variants={fadeUp} className="pfCard slCard" layout>
                {/* Image */}
                <div className="pfCardImg" style={{ backgroundImage: `url(${s.image})` }}>
                  <div className="pfCardOverlay" />
                  <div className="pfCardTopRow">
                    <span className="pfCardCat" style={{ background: `${s.color}20`, border: `1px solid ${s.color}40`, color: s.color }}>
                      <i className={s.icon}></i> {s.category}
                    </span>
                    <span className="pfCardYear">{s.year}</span>
                  </div>
                </div>

                {/* Body */}
                <div className="pfCardBody">
                  <h3 className="pfCardTitle">{s.title}</h3>

                  {/* Problem */}
                  <div className="slProblemBox">
                    <span className="slLabel slLabelRed"><i className="ri-error-warning-line"></i> Problem</span>
                    <p className="slText">{s.problem}</p>
                  </div>

                  {/* Solution — toggle */}
                  <AnimatePresence>
                    {expanded === s.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="slProblemBox slSolutionBox">
                          <span className="slLabel slLabelGreen"><i className="ri-check-double-line"></i> Solution</span>
                          <p className="slText">{s.solution}</p>
                        </div>
                        <div className="slImpactBox">
                          <i className="ri-bar-chart-line" style={{ color: s.color }}></i>
                          <p className="slImpactText" style={{ color: s.color }}>{s.impact}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Tags */}
                  <div className="pfCardTags" style={{ marginTop: 12 }}>
                    {s.tags.map((t) => (
                      <span key={t} className="pfTag">{t}</span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="slActions">
                    <button
                      className="slToggleBtn"
                      onClick={() => setExpanded(expanded === s.id ? null : s.id)}
                    >
                      {expanded === s.id ? (
                        <><i className="ri-eye-off-line"></i> Hide Solution</>
                      ) : (
                        <><i className="ri-eye-line"></i> View Solution</>
                      )}
                    </button>
                    <a href={s.link} target="_blank" rel="noopener noreferrer" className="slLiveBtn">
                      <i className="ri-external-link-line"></i> Live Project
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="pfBottomCta"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <h2>Got a Bug We Can&apos;t Fix? We Doubt It.</h2>
          <p>From critical crashes to performance bottlenecks — our team diagnoses and resolves issues fast.</p>
          <Link href="/contact" className="pfBtnPrimary">
            Submit Your Problem <i className="ri-arrow-right-line"></i>
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
