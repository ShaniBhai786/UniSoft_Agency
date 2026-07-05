import Image from "next/image";
import Link from "next/link";
import "../../app/ceo/ceo.css";

export const metadata = {
  title: "Dr. Roshaan Ahmad — CEO & Founder | UniSoft Pvt Ltd",
  description:
    "Meet Dr. Roshaan Ahmad, Founder & CEO of UniSoft Pvt Ltd. Expert in software development, SEO, digital transformation, and business growth. Explore his journey, skills, projects, and achievements.",
  keywords:
    "Dr Roshaan Ahmad, UniSoft CEO, software development expert, SEO specialist, digital marketing leader, tech entrepreneur Pakistan",
  alternates: { canonical: "https://unisoftpvt.com/ceo" },
  openGraph: {
    title: "Dr. Roshaan Ahmad — CEO & Founder | UniSoft",
    description:
      "Founder & CEO of UniSoft Pvt Ltd. Driving digital transformation through software, SEO, and automation.",
    url: "https://unisoftpvt.com/ceo",
    images: [{ url: "/assets/ceo.jpeg" }],
  },
};

const ceoSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dr. Roshaan Ahmad",
  jobTitle: "Founder & CEO",
  worksFor: { "@type": "Organization", name: "UniSoft Pvt Ltd", url: "https://unisoftpvt.com" },
  url: "https://unisoftpvt.com/ceo",
  image: "https://unisoftpvt.com/assets/ceo.jpeg",
  sameAs: [
    "https://linkedin.com/in/roshaan-ahmad",
    "https://github.com/roshaan-ahmad",
  ],
  description:
    "Dr. Roshaan Ahmad is the Founder and CEO of UniSoft Pvt Ltd, a leading software development and digital marketing agency.",
  knowsAbout: [
    "Software Development", "SEO", "Digital Marketing", "AI Automation",
    "Next.js", "React", "Node.js", "Business Strategy",
  ],
};

const skills = [
  { icon: "ri-code-s-slash-line", label: "Full-Stack Development", level: 95 },
  { icon: "ri-search-line", label: "SEO & Digital Marketing", level: 92 },
  { icon: "ri-robot-line", label: "AI & Automation", level: 88 },
  { icon: "ri-layout-4-line", label: "UI/UX Design", level: 85 },
  { icon: "ri-line-chart-line", label: "Business Strategy", level: 90 },
  { icon: "ri-cloud-line", label: "Cloud & DevOps", level: 80 },
];

const experience = [
  {
    year: "2022 — Present",
    role: "Founder & CEO",
    company: "UniSoft Pvt Ltd",
    desc: "Founded and scaled UniSoft into a full-service software & digital marketing agency serving clients globally. Led 50+ successful projects across web development, SEO, and automation.",
  },
  {
    year: "2020 — 2022",
    role: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
    desc: "Led development of enterprise-grade web applications using React, Node.js, and cloud infrastructure. Managed a team of 8 developers.",
  },
  {
    year: "2018 — 2020",
    role: "SEO & Growth Specialist",
    company: "Digital Ventures",
    desc: "Drove organic traffic growth of 300% for 20+ clients through technical SEO, content strategy, and link building campaigns.",
  },
  {
    year: "2016 — 2018",
    role: "Junior Web Developer",
    company: "StartUp Hub",
    desc: "Built responsive websites and e-commerce platforms. Gained expertise in JavaScript, PHP, and WordPress development.",
  },
];

const achievements = [
  { icon: "ri-trophy-line", title: "50+ Projects Delivered", desc: "Successfully delivered 50+ software and digital marketing projects globally." },
  { icon: "ri-user-star-line", title: "500+ Clients Served", desc: "Helped 500+ businesses grow their online presence and revenue." },
  { icon: "ri-global-line", title: "10+ Countries Reached", desc: "UniSoft services are trusted by clients across 10+ countries worldwide." },
  { icon: "ri-star-line", title: "98% Client Satisfaction", desc: "Consistently maintained a 98% client satisfaction rate across all projects." },
];

const certifications = [
  { icon: "ri-google-line", title: "Google Analytics Certified", org: "Google", year: "2023" },
  { icon: "ri-award-line", title: "AWS Cloud Practitioner", org: "Amazon Web Services", year: "2022" },
  { icon: "ri-medal-line", title: "Meta Digital Marketing", org: "Meta Blueprint", year: "2023" },
  { icon: "ri-code-box-line", title: "Full-Stack Web Development", org: "freeCodeCamp", year: "2021" },
];

const projects = [
  {
    title: "UniSoft Agency Platform",
    tag: "SaaS",
    desc: "Built a full-scale agency management platform with client portals, project tracking, and automated reporting.",
    tech: ["Next.js", "MongoDB", "Node.js"],
  },
  {
    title: "E-Commerce SEO Suite",
    tag: "SEO Tool",
    desc: "Developed an AI-powered SEO audit and optimization tool that increased client rankings by 200% on average.",
    tech: ["React", "Python", "OpenAI API"],
  },
  {
    title: "Business Automation System",
    tag: "Automation",
    desc: "Created an end-to-end business automation system integrating CRM, invoicing, and email marketing workflows.",
    tech: ["Node.js", "Zapier API", "MongoDB"],
  },
  {
    title: "Multi-Vendor Marketplace",
    tag: "E-Commerce",
    desc: "Designed and developed a scalable multi-vendor marketplace with real-time inventory and payment processing.",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
  },
];

const awards = [
  { icon: "ri-trophy-fill", title: "Best Tech Startup 2023", org: "Pakistan Tech Awards" },
  { icon: "ri-star-fill", title: "Top Digital Agency 2022", org: "Digital Excellence Awards" },
  { icon: "ri-medal-2-fill", title: "Innovation Leader Award", org: "South Asia Business Summit" },
];

const speaking = [
  { event: "Pakistan Tech Summit 2023", topic: "AI & The Future of Software Development", location: "Lahore, Pakistan" },
  { event: "Digital Marketing Conference 2022", topic: "SEO Strategies for 2023 and Beyond", location: "Karachi, Pakistan" },
  { event: "Startup Expo 2022", topic: "Building a Tech Agency from Scratch", location: "Islamabad, Pakistan" },
];

const media = [
  { outlet: "Dawn News Tech", title: "UniSoft CEO on Pakistan's Growing Tech Industry", year: "2023" },
  { outlet: "The News International", title: "Young Entrepreneurs Transforming Digital Pakistan", year: "2023" },
  { outlet: "TechJuice", title: "UniSoft: A Rising Star in Software Development", year: "2022" },
];

const testimonials = [
  {
    name: "James Carter",
    role: "CEO, TechVentures USA",
    text: "Dr. Roshaan's expertise in software development and SEO transformed our business. Our organic traffic grew by 400% in just 6 months.",
  },
  {
    name: "Sarah Mitchell",
    role: "Founder, E-Shop UK",
    text: "Working with Dr. Roshaan was a game-changer. His team delivered a world-class e-commerce platform on time and within budget.",
  },
  {
    name: "Ahmed Al-Rashid",
    role: "Director, Gulf Digital Solutions",
    text: "Exceptional leadership and technical knowledge. Dr. Roshaan understands business needs and delivers solutions that actually work.",
  },
];

const research = [
  {
    title: "AI-Driven SEO: The Next Frontier in Digital Marketing",
    journal: "International Journal of Digital Innovation",
    year: "2023",
    link: "#",
  },
  {
    title: "Scalable Architecture Patterns for Modern Web Applications",
    journal: "Software Engineering Review",
    year: "2022",
    link: "#",
  },
];

export default function CEOPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ceoSchema) }}
      />

      <main className="ceoPage">
        {/* BACKGROUND */}
        <div className="ceoGradient" />
        <div className="ceoGridBg" />

        <div className="ceoContainer">

          {/* ── HERO ── */}
          <section className="ceoHero">
            <div className="ceoHeroLeft">
              <span className="ceoBadge">👨‍💼 FOUNDER & CEO — UNISOFT PVT LTD</span>
              <h1>Dr. Roshaan Ahmad</h1>
              <p className="ceoTagline">
                Visionary Tech Entrepreneur · Software Architect · SEO Expert · Digital Transformation Leader
              </p>
              <p className="ceoIntro">
                Founder and CEO of UniSoft Pvt Ltd, Dr. Roshaan Ahmad is a passionate technologist and
                business strategist who has helped 500+ businesses worldwide achieve digital excellence
                through cutting-edge software, SEO, and automation solutions.
              </p>
              <div className="ceoSocials">
                <a href="https://linkedin.com/in/roshaan-ahmad" target="_blank" className="socialBtn linkedin">
                  <i className="ri-linkedin-fill" /> LinkedIn
                </a>
                <a href="https://github.com/roshaan-ahmad" target="_blank" className="socialBtn github">
                  <i className="ri-github-fill" /> GitHub
                </a>
                <a href="https://unisoftpvt.com" target="_blank" className="socialBtn portfolio">
                  <i className="ri-global-line" /> Portfolio
                </a>
              </div>
              <div className="ceoStats">
                {[["50+", "Projects"], ["500+", "Clients"], ["10+", "Countries"], ["5+", "Years Exp"]].map(([n, l]) => (
                  <div className="ceoStatItem" key={l}>
                    <strong>{n}</strong>
                    <span>{l}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="ceoHeroRight">
              <div className="ceoImgWrapper">
                <Image
                  src="/assets/ceo.jpeg"
                  alt="Dr. Roshaan Ahmad — CEO UniSoft"
                  width={420}
                  height={500}
                  className="ceoPhoto"
                  priority
                />
                <div className="ceoImgGlow" />
              </div>
            </div>
          </section>

          {/* ── BIOGRAPHY ── */}
          <section className="ceoSection">
            <div className="sectionLabel"><i className="ri-user-line" /> Biography</div>
            <div className="bioGrid">
              <div className="bioCard">
                <h2>About Dr. Roshaan Ahmad</h2>
                <p>
                  Dr. Roshaan Ahmad is a visionary technology entrepreneur and the driving force behind
                  UniSoft Pvt Ltd. With over 5 years of hands-on experience in software engineering,
                  digital marketing, and business strategy, he has established himself as one of Pakistan's
                  most innovative tech leaders.
                </p>
                <p>
                  His academic background in Computer Science, combined with real-world expertise in
                  full-stack development, SEO, and AI automation, enables him to bridge the gap between
                  technology and business outcomes. Dr. Roshaan believes that technology should be
                  accessible, impactful, and transformative for businesses of all sizes.
                </p>
                <p>
                  Under his leadership, UniSoft has grown from a small startup to a globally recognized
                  agency serving clients across 10+ countries, delivering measurable results through
                  innovative digital solutions.
                </p>
              </div>
              <div className="missionVisionGrid">
                <div className="mvCard mission">
                  <i className="ri-focus-3-line" />
                  <h3>Mission</h3>
                  <p>To empower businesses worldwide with innovative software solutions, data-driven SEO strategies, and intelligent automation that drive sustainable growth and digital excellence.</p>
                </div>
                <div className="mvCard vision">
                  <i className="ri-eye-line" />
                  <h3>Vision</h3>
                  <p>To become the world's most trusted technology partner, transforming how businesses operate and compete in the digital age through cutting-edge software and AI-powered solutions.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── JOURNEY ── */}
          <section className="ceoSection">
            <div className="sectionLabel"><i className="ri-map-pin-time-line" /> Journey</div>
            <h2 className="sectionTitle">The Road to UniSoft</h2>
            <div className="timeline">
              {[
                { year: "2016", title: "The Beginning", desc: "Started coding at age 18, self-taught web development and fell in love with building digital products." },
                { year: "2018", title: "First Professional Role", desc: "Joined a startup as a junior developer, quickly rising through the ranks due to exceptional problem-solving skills." },
                { year: "2020", title: "SEO Mastery", desc: "Discovered the power of SEO and digital marketing, helping businesses achieve 10x organic growth." },
                { year: "2022", title: "Founded UniSoft", desc: "Launched UniSoft Pvt Ltd with a vision to provide world-class software and digital marketing services." },
                { year: "2023", title: "Global Expansion", desc: "Expanded UniSoft's reach to 10+ countries, serving 500+ clients with a team of expert professionals." },
                { year: "2024", title: "AI Integration", desc: "Pioneered AI-powered automation solutions, positioning UniSoft at the forefront of the next tech revolution." },
              ].map((item) => (
                <div className="timelineItem" key={item.year}>
                  <div className="timelineYear">{item.year}</div>
                  <div className="timelineDot" />
                  <div className="timelineContent">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── EXPERIENCE ── */}
          <section className="ceoSection">
            <div className="sectionLabel"><i className="ri-briefcase-line" /> Professional Experience</div>
            <h2 className="sectionTitle">Work History</h2>
            <div className="expGrid">
              {experience.map((exp) => (
                <div className="expCard" key={exp.role}>
                  <span className="expYear">{exp.year}</span>
                  <h3>{exp.role}</h3>
                  <span className="expCompany"><i className="ri-building-line" /> {exp.company}</span>
                  <p>{exp.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── SKILLS ── */}
          <section className="ceoSection">
            <div className="sectionLabel"><i className="ri-tools-line" /> Skills</div>
            <h2 className="sectionTitle">Technical Expertise</h2>
            <div className="skillsGrid">
              {skills.map((s) => (
                <div className="skillCard" key={s.label}>
                  <div className="skillTop">
                    <i className={s.icon} />
                    <span>{s.label}</span>
                    <strong>{s.level}%</strong>
                  </div>
                  <div className="skillBar">
                    <div className="skillFill" style={{ width: `${s.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── ACHIEVEMENTS ── */}
          <section className="ceoSection">
            <div className="sectionLabel"><i className="ri-trophy-line" /> Achievements</div>
            <h2 className="sectionTitle">Key Milestones</h2>
            <div className="achieveGrid">
              {achievements.map((a) => (
                <div className="achieveCard" key={a.title}>
                  <i className={a.icon} />
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── CERTIFICATIONS ── */}
          <section className="ceoSection">
            <div className="sectionLabel"><i className="ri-award-line" /> Certifications</div>
            <h2 className="sectionTitle">Professional Certifications</h2>
            <div className="certGrid">
              {certifications.map((c) => (
                <div className="certCard" key={c.title}>
                  <i className={c.icon} />
                  <div>
                    <h4>{c.title}</h4>
                    <span>{c.org} · {c.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── PROJECTS ── */}
          <section className="ceoSection">
            <div className="sectionLabel"><i className="ri-code-box-line" /> Projects</div>
            <h2 className="sectionTitle">Featured Projects</h2>
            <div className="projectsGrid">
              {projects.map((p) => (
                <div className="projectCard" key={p.title}>
                  <span className="projectTag">{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="techTags">
                    {p.tech.map((t) => <span key={t}>{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── AWARDS ── */}
          <section className="ceoSection">
            <div className="sectionLabel"><i className="ri-medal-line" /> Awards</div>
            <h2 className="sectionTitle">Recognition & Honors</h2>
            <div className="awardsGrid">
              {awards.map((a) => (
                <div className="awardCard" key={a.title}>
                  <i className={a.icon} />
                  <h3>{a.title}</h3>
                  <span>{a.org}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── SPEAKING ── */}
          <section className="ceoSection">
            <div className="sectionLabel"><i className="ri-mic-line" /> Speaking Engagements</div>
            <h2 className="sectionTitle">Conferences & Talks</h2>
            <div className="speakingList">
              {speaking.map((s) => (
                <div className="speakingCard" key={s.event}>
                  <i className="ri-presentation-line" />
                  <div>
                    <h4>{s.event}</h4>
                    <p>"{s.topic}"</p>
                    <span><i className="ri-map-pin-line" /> {s.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── MEDIA ── */}
          <section className="ceoSection">
            <div className="sectionLabel"><i className="ri-newspaper-line" /> Media Mentions</div>
            <h2 className="sectionTitle">Press & Media</h2>
            <div className="mediaGrid">
              {media.map((m) => (
                <div className="mediaCard" key={m.title}>
                  <span className="mediaOutlet">{m.outlet}</span>
                  <h4>{m.title}</h4>
                  <span className="mediaYear">{m.year}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── RESEARCH ── */}
          <section className="ceoSection">
            <div className="sectionLabel"><i className="ri-file-paper-2-line" /> Research</div>
            <h2 className="sectionTitle">Publications & Research</h2>
            <div className="researchList">
              {research.map((r) => (
                <a href={r.link} className="researchCard" key={r.title}>
                  <i className="ri-article-line" />
                  <div>
                    <h4>{r.title}</h4>
                    <span>{r.journal} · {r.year}</span>
                  </div>
                  <i className="ri-external-link-line researchArrow" />
                </a>
              ))}
            </div>
          </section>

          {/* ── TESTIMONIALS ── */}
          <section className="ceoSection">
            <div className="sectionLabel"><i className="ri-chat-quote-line" /> Testimonials</div>
            <h2 className="sectionTitle">What Clients Say</h2>
            <div className="testimonialsGrid">
              {testimonials.map((t) => (
                <div className="testimonialCard" key={t.name}>
                  <i className="ri-double-quotes-l quoteIcon" />
                  <p>"{t.text}"</p>
                  <div className="testimonialAuthor">
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="ceoCTA">
            <h2>Let's Build Something Great Together</h2>
            <p>Ready to transform your business with world-class software and digital solutions?</p>
            <div className="ctaBtns">
              <Link href="/contact" className="ctaPrimary">
                <i className="ri-mail-line" /> Get In Touch
              </Link>
              <Link href="/services" className="ctaSecondary">
                <i className="ri-arrow-right-line" /> Explore Services
              </Link>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
