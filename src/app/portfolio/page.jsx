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

// ── PDF is placed in /public/UniSoft Company Profile.pdf ──
const PDF_URL = "/UniSoft%20Company%20Profile.pdf";
const PDF_DOWNLOAD = "/UniSoft Company Profile.pdf";

const stats = [
  { icon: "ri-stack-line", val: "100+", label: "Projects Delivered", color: "#38bdf8" },
  { icon: "ri-group-line", val: "50+", label: "Happy Clients", color: "#22c55e" },
  { icon: "ri-medal-line", val: "5+", label: "Years Experience", color: "#f59e0b" },
  { icon: "ri-global-line", val: "10+", label: "Industries Served", color: "#a855f7" },
];

const categories = ["All", "Web App", "Mobile", "E-commerce", "Automation", "Design"];

const projects = [
  {
    id: 1,
    title: "School Management System",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=700&q=80",
    tags: ["Next.js", "MongoDB", "Node.js"],
    desc: "Complete school ERP — attendance, grades, fee management, parent portal & real-time notifications.",
    color: "#38bdf8",
    icon: "ri-school-line",
    year: "2024",
  },
  {
    id: 2,
    title: "Online Examination Platform",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=700&q=80",
    tags: ["React", "Express", "MySQL"],
    desc: "Secure exam platform with auto-grading, timer, anti-cheat, and detailed result analytics.",
    color: "#6366f1",
    icon: "ri-file-list-3-line",
    year: "2024",
  },
  {
    id: 3,
    title: "E-commerce Store",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80",
    tags: ["Next.js", "Stripe", "Tailwind"],
    desc: "Full-featured online store with Stripe payments, inventory management, and order tracking.",
    color: "#22c55e",
    icon: "ri-shopping-cart-line",
    year: "2023",
  },
  {
    id: 4,
    title: "Smart Chatbot Solution",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=700&q=80",
    tags: ["Python", "OpenAI", "FastAPI"],
    desc: "AI-powered chatbot for customer support, lead capture, and 24/7 business automation.",
    color: "#a855f7",
    icon: "ri-chat-3-line",
    year: "2024",
  },
  {
    id: 5,
    title: "Real Estate Platform",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=700&q=80",
    tags: ["React", "Node.js", "Maps API"],
    desc: "Property listing platform with map integration, filters, virtual tours, and agent dashboard.",
    color: "#ec4899",
    icon: "ri-building-line",
    year: "2023",
  },
  {
    id: 6,
    title: "Mobile Fitness App",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=700&q=80",
    tags: ["React Native", "Firebase", "Redux"],
    desc: "Cross-platform fitness tracker with workout plans, progress charts, and nutrition logging.",
    color: "#f59e0b",
    icon: "ri-smartphone-line",
    year: "2024",
  },
  {
    id: 7,
    title: "Restaurant Ordering System",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=700&q=80",
    tags: ["Next.js", "Prisma", "Stripe"],
    desc: "Online ordering system with table booking, kitchen dashboard, and real-time order tracking.",
    color: "#38bdf8",
    icon: "ri-restaurant-line",
    year: "2023",
  },
  {
    id: 8,
    title: "HR Management Dashboard",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80",
    tags: ["React", "Node.js", "PostgreSQL"],
    desc: "Complete HR suite — payroll, leave management, performance reviews, and employee analytics.",
    color: "#6366f1",
    icon: "ri-team-line",
    year: "2024",
  },
  {
    id: 9,
    title: "Brand Identity Design",
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=700&q=80",
    tags: ["Figma", "Illustrator", "Branding"],
    desc: "Complete brand identity — logo, color palette, typography, and full brand guidelines.",
    color: "#eab308",
    icon: "ri-pen-nib-line",
    year: "2023",
  },
];

const techStack = [
  { icon: "ri-reactjs-line", name: "React / Next.js", color: "#38bdf8" },
  { icon: "ri-nodejs-line", name: "Node.js", color: "#22c55e" },
  { icon: "ri-database-2-line", name: "MongoDB", color: "#22c55e" },
  { icon: "ri-smartphone-line", name: "React Native", color: "#6366f1" },
  { icon: "ri-cloud-line", name: "AWS / Vercel", color: "#f59e0b" },
  { icon: "ri-openai-line", name: "OpenAI / AI", color: "#a855f7" },
  { icon: "ri-css3-line", name: "Tailwind CSS", color: "#38bdf8" },
  { icon: "ri-git-branch-line", name: "Git / GitHub", color: "#ec4899" },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [pdfOpen, setPdfOpen] = useState(false);

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pfPage">
      {/* BG */}
      <div className="pfBg1" />
      <div className="pfBg2" />
      <div className="pfGridBg" />

      <div className="pfInner">

        {/* ── HERO ── */}
        <motion.div className="pfHero" variants={stagger} initial="hidden" animate="show">
          <motion.span variants={fadeUp} className="pfEyebrow">
            <i className="ri-briefcase-4-line"></i> Company Portfolio
          </motion.span>
          <motion.h1 variants={fadeUp} className="pfTitle">
            Our Work Speaks <span className="pfGrad">For Itself</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="pfSubtitle">
            Explore our portfolio of 100+ successful projects across web, mobile, automation, and design.
            Every project is built with precision, passion, and purpose.
          </motion.p>
          <motion.div variants={fadeUp} className="pfHeroBtns">
            <button className="pfBtnPrimary" onClick={() => setPdfOpen(true)}>
              <i className="ri-eye-line"></i> View Portfolio PDF
            </button>
            <a href={PDF_DOWNLOAD} download="UniSoft Company Profile.pdf" className="pfBtnSecondary">
              <i className="ri-download-2-line"></i> Download PDF
            </a>
          </motion.div>
        </motion.div>

        {/* ── STATS ── */}
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

        {/* ── FILTER TABS ── */}
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

        {/* ── PROJECTS GRID ── */}
        <motion.div
          className="pfGrid"
          variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
          key={activeCategory}
        >
          <AnimatePresence>
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                variants={fadeUp}
                className="pfCard"
                layout
              >
                <div className="pfCardImg" style={{ backgroundImage: `url(${p.image})` }}>
                  <div className="pfCardOverlay" />
                  <div className="pfCardTopRow">
                    <span className="pfCardCat" style={{ background: `${p.color}20`, border: `1px solid ${p.color}40`, color: p.color }}>
                      <i className={p.icon}></i> {p.category}
                    </span>
                    <span className="pfCardYear">{p.year}</span>
                  </div>
                </div>
                <div className="pfCardBody">
                  <h3 className="pfCardTitle">{p.title}</h3>
                  <p className="pfCardDesc">{p.desc}</p>
                  <div className="pfCardTags">
                    {p.tags.map((t) => (
                      <span key={t} className="pfTag">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── TECH STACK ── */}
        <motion.div
          className="pfTechSection"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <div className="pfSectionHead">
            <span className="pfEyebrow"><i className="ri-tools-line"></i> Tech Stack</span>
            <h2>Technologies We Master</h2>
          </div>
          <div className="pfTechGrid">
            {techStack.map((t) => (
              <div key={t.name} className="pfTechCard">
                <i className={t.icon} style={{ color: t.color, fontSize: 28 }}></i>
                <span>{t.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── PDF CTA BANNER ── */}
        <motion.div
          className="pfCtaBanner"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <div className="pfCtaLeft">
            <div className="pfCtaIconWrap">
              <i className="ri-file-pdf-2-line"></i>
            </div>
            <div>
              <h2>Download Our Full Portfolio</h2>
              <p>Get our complete company portfolio PDF with all projects, case studies, and pricing.</p>
            </div>
          </div>
          <div className="pfCtaBtns">
            <button className="pfBtnWhite" onClick={() => setPdfOpen(true)}>
              <i className="ri-eye-line"></i> Preview PDF
            </button>
            <a href={PDF_DOWNLOAD} download="UniSoft Company Profile.pdf" className="pfBtnDownload">
              <i className="ri-download-2-line"></i> Download Free
            </a>
          </div>
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          className="pfBottomCta"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <h2>Ready to Start Your Project?</h2>
          <p>Let&apos;s build something amazing together. Get a free consultation today.</p>
          <Link href="/contact" className="pfBtnPrimary">
            Get Free Consultation <i className="ri-arrow-right-line"></i>
          </Link>
        </motion.div>

      </div>

      {/* ── PDF VIEWER MODAL ── */}
      <AnimatePresence>
        {pdfOpen && (
          <motion.div
            className="pfModal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPdfOpen(false)}
          >
            <motion.div
              className="pfModalBox"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pfModalHeader">
                <div className="pfModalTitle">
                  <i className="ri-file-pdf-2-line" style={{ color: "#ef4444", fontSize: 20 }}></i>
                  <span>UniSoft Company Portfolio</span>
                </div>
                <div className="pfModalActions">
                  <a href={PDF_DOWNLOAD} download="UniSoft Company Profile.pdf" className="pfModalDownloadBtn">
                    <i className="ri-download-2-line"></i> Download
                  </a>
                  <button className="pfModalClose" onClick={() => setPdfOpen(false)}>
                    <i className="ri-close-line"></i>
                  </button>
                </div>
              </div>
              <div className="pfModalBody">
                <object
                  data={PDF_URL}
                  type="application/pdf"
                  className="pfIframe"
                  aria-label="UniSoft Portfolio PDF"
                >
                  <div className="pfPdfFallback">
                    <i className="ri-file-pdf-2-line"></i>
                    <p>PDF preview not supported in this browser.</p>
                    <a href={PDF_DOWNLOAD} download="UniSoft Company Profile.pdf" className="pfBtnDownload">
                      <i className="ri-download-2-line"></i> Download PDF Instead
                    </a>
                  </div>
                </object>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
