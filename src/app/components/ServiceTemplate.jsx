"use client";
import Link from "next/link";
import { useState } from "react";
import "./service-template.css";

export default function ServiceTemplate({ data }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="stPage">
      {/* BG */}
      <div className="stGradient" />
      <div className="stGridBg" />

      <div className="stContainer">

        {/* ── 1. HERO / INTRODUCTION ── */}
        <section className="stHero">
          <span className="stBadge">{data.badge}</span>
          <h1>{data.title}</h1>
          <p>{data.intro}</p>
          <div className="stHeroBtns">
            <Link href="/quote" className="stBtnPrimary">Get Free Quote <i className="ri-arrow-right-line" /></Link>
            <Link href="/contact" className="stBtnSecondary">Talk to Expert <i className="ri-chat-1-line" /></Link>
          </div>
        </section>

        {/* ── 2. BENEFITS ── */}
        <section className="stSection">
          <div className="stSectionLabel"><i className={data.icon} /> Benefits</div>
          <h2 className="stSectionTitle">Why Choose UniSoft for {data.shortTitle}?</h2>
          <div className="stBenefitsGrid">
            {data.benefits.map((b, i) => (
              <div className="stBenefitCard" key={i}>
                <i className={b.icon} />
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 3. FEATURES ── */}
        <section className="stSection">
          <div className="stSectionLabel"><i className="ri-star-line" /> Features</div>
          <h2 className="stSectionTitle">What's Included</h2>
          <div className="stFeaturesGrid">
            {data.features.map((f, i) => (
              <div className="stFeatureCard" key={i}>
                <div className="stFeatureNum">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 4. PROCESS ── */}
        <section className="stSection">
          <div className="stSectionLabel"><i className="ri-flow-chart" /> Process</div>
          <h2 className="stSectionTitle">Our Working Process</h2>
          <div className="stProcess">
            {data.process.map((step, i) => (
              <div className="stProcessStep" key={i}>
                <div className="stProcessNum">{i + 1}</div>
                <div className="stProcessLine" />
                <div className="stProcessContent">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. TECHNOLOGIES ── */}
        <section className="stSection">
          <div className="stSectionLabel"><i className="ri-code-box-line" /> Technologies</div>
          <h2 className="stSectionTitle">Tech Stack We Use</h2>
          <div className="stTechGrid">
            {data.technologies.map((t, i) => (
              <div className="stTechCard" key={i}>
                <i className={t.icon} />
                <span>{t.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. PRICING ── */}
        <section className="stSection">
          <div className="stSectionLabel"><i className="ri-price-tag-3-line" /> Pricing</div>
          <h2 className="stSectionTitle">Transparent Pricing Plans</h2>
          <div className="stPricingGrid">
            {data.pricing.map((plan, i) => (
              <div className={`stPricingCard ${plan.popular ? "stPopular" : ""}`} key={i}>
                {plan.popular && <span className="stPopularBadge">Most Popular</span>}
                <h3>{plan.name}</h3>
                <div className="stPrice">{plan.price}<span>/project</span></div>
                <p>{plan.desc}</p>
                <ul>
                  {plan.features.map((f, j) => <li key={j}><i className="ri-check-line" />{f}</li>)}
                </ul>
                <Link href="/quote" className="stPricingBtn">Get Started</Link>
              </div>
            ))}
          </div>
        </section>

        {/* ── 7. INDUSTRIES ── */}
        <section className="stSection">
          <div className="stSectionLabel"><i className="ri-building-line" /> Industries</div>
          <h2 className="stSectionTitle">Industries We Serve</h2>
          <div className="stIndustriesGrid">
            {data.industries.map((ind, i) => (
              <div className="stIndustryCard" key={i}>
                <i className={ind.icon} />
                <span>{ind.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── 8. PORTFOLIO ── */}
        <section className="stSection">
          <div className="stSectionLabel"><i className="ri-folder-open-line" /> Portfolio</div>
          <h2 className="stSectionTitle">Recent Work</h2>
          <div className="stPortfolioGrid">
            {data.portfolio.map((p, i) => (
              <div className="stPortfolioCard" key={i}>
                <div className="stPortfolioTop">
                  <span className="stPortfolioTag">{p.tag}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="stPortfolioTech">
                  {p.tech.map((t, j) => <span key={j}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 9. CASE STUDIES ── */}
        <section className="stSection">
          <div className="stSectionLabel"><i className="ri-bar-chart-box-line" /> Case Studies</div>
          <h2 className="stSectionTitle">Real Results, Real Clients</h2>
          <div className="stCaseGrid">
            {data.caseStudies.map((c, i) => (
              <div className="stCaseCard" key={i}>
                <div className="stCaseHeader">
                  <span className="stCaseTag">{c.industry}</span>
                  <h3>{c.client}</h3>
                </div>
                <p className="stCaseChallenge"><strong>Challenge:</strong> {c.challenge}</p>
                <p className="stCaseSolution"><strong>Solution:</strong> {c.solution}</p>
                <div className="stCaseResults">
                  {c.results.map((r, j) => (
                    <div className="stCaseResult" key={j}>
                      <strong>{r.value}</strong>
                      <span>{r.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 10. TESTIMONIALS ── */}
        <section className="stSection">
          <div className="stSectionLabel"><i className="ri-chat-quote-line" /> Testimonials</div>
          <h2 className="stSectionTitle">What Our Clients Say</h2>
          <div className="stTestimonialsGrid">
            {data.testimonials.map((t, i) => (
              <div className="stTestimonialCard" key={i}>
                <i className="ri-double-quotes-l stQuoteIcon" />
                <p>"{t.text}"</p>
                <div className="stTestimonialAuthor">
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 11. FAQs ── */}
        <section className="stSection">
          <div className="stSectionLabel"><i className="ri-question-line" /> FAQs</div>
          <h2 className="stSectionTitle">Frequently Asked Questions</h2>
          <div className="stFaqList">
            {data.faqs.map((faq, i) => (
              <div className={`stFaqItem ${openFaq === i ? "stFaqOpen" : ""}`} key={i}>
                <button className="stFaqQ" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {faq.q}
                  <i className={`ri-${openFaq === i ? "subtract" : "add"}-line`} />
                </button>
                {openFaq === i && <p className="stFaqA">{faq.a}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* ── 12. CTA ── */}
        <section className="stCTA">
          <h2>Ready to Get Started?</h2>
          <p>Let's build something amazing together. Get a free consultation today.</p>
          <div className="stCTABtns">
            <Link href="/quote" className="stBtnPrimary">Get Free Quote <i className="ri-arrow-right-line" /></Link>
            <Link href="/contact" className="stBtnSecondary">Contact Us <i className="ri-mail-line" /></Link>
          </div>
        </section>

      </div>
    </main>
  );
}
