"use client";

import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    name: "Dr. Johnathan Doe",
    role: "Chief Technology Officer (CTO)",
    short: "CTO",
    img: "member1",
    desc: "Dr. Johnathan Doe leads UniSoft’s technology strategy and innovation initiatives. He specializes in building scalable, secure, and high-performance software systems while guiding the engineering team toward modern development practices.",
  },
  {
    id: 2,
    name: "Dr. Roshaan",
    role: "Chief Executive Officer (CEO)",
    short: "CEO",
    img: "member2",
    desc: "Dr. Roshaan is the Founder and CEO of UniSoft Pvt Ltd. He leads the company’s direction and growth while managing client relationships and overall operations. With strong experience in software development, SEO, and digital solutions, he focuses on helping businesses grow and succeed in the digital world",
  },
  {
    id: 3,
    name: "Deborah Smith",
    role: "Managing Director (MD)",
    short: "MD",
    img: "member3",
    desc: "Deborah Smith manages UniSoft’s daily operations and strategic planning. He ensures smooth execution of projects, maintains quality standards, and drives organizational efficiency and client satisfaction.",
  },
];

function Teams() {
  const [activeMember, setActiveMember] = useState(null);
  const [showTeam, setShowTeam] = useState(false);

 const teamsData = [
  {
    title: "Software Development Team",
    desc: "Our development team builds scalable, secure, and high-performance web and software applications using modern technologies such as React, Next.js, Node.js, and cloud-based architectures to deliver robust digital solutions.",
  },
  {
    title: "SEO & Digital Marketing Team",
    desc: "Our SEO and digital marketing specialists help businesses improve search engine rankings, increase organic traffic, and generate qualified leads through data-driven strategies and performance-focused campaigns.",
  },
  {
    title: "UI/UX Design Team",
    desc: "Our UI/UX design team creates intuitive, visually appealing, and user-centered interfaces that enhance usability, strengthen brand identity, and deliver exceptional digital experiences.",
  },
  {
    title: "Project Management Team",
    desc: "Our project management team ensures efficient planning, coordination, and execution of projects, maintaining clear communication, timely delivery, and alignment with client requirements.",
  },
  {
    title: "Quality Assurance (QA) Team",
    desc: "Our QA team performs rigorous testing and quality checks to ensure that all products are reliable, secure, and free from defects, guaranteeing a smooth user experience.",
  },
  {
    title: "Support & Maintenance Team",
    desc: "Our support and maintenance team provides continuous technical assistance, system updates, and long-term maintenance to ensure uninterrupted business operations and system stability.",
  },
];
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

  return (
    <div className="teams" id="teams">
      
      {/* SEO */}
      <Helmet>
        <title>UniSoft Software Company</title>
        <meta
          name="description"
          content="Meet the professional team of UniSoft, a leading software company in Pakistan and USA. Experts in development, SEO, and digital marketing."
        />
        <meta
          name="keywords"
          content="UniSoft team, software company Pakistan, SEO experts, web developers, IT professionals"
        />
        <link rel="canonical" href="https://unisoftpvt.com/" />

        <script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "UniSoft Pvt Ltd",
  "url": "https://unisoftpvt.com",
  "logo": "https://unisoftpvt.com/logo.png",
  "founder": {
    "@type": "Person",
    "name": "Dr.Roshaan",
    "jobTitle": "Chief Executive Officer",
    "image": "https://unisoftpvt.com/images/ceo.jpeg",
    "sameAs": [
      "https://www.linkedin.com/in/your-profile",
      "https://www.facebook.com/your-profile"
    ]
  },
  "employee": [
    {
      "@type": "Person",
      "name": "Dr. Roshaan",
      "jobTitle": "CEO",
      "image": "https://unisoftpvt.com/images/ceo.jpeg"
    }
  ]
}
`}
</script>
<meta property="og:title" content="Dr. Roshaan - CEO UniSoft" />
<meta property="og:description" content="Chief Executive Officer of UniSoft Pvt Ltd" />
<meta property="og:image" content="https://unisoftpvt.com/images/ceo.jpeg" />
<meta property="og:type" content="website" />
      </Helmet>

      {/* HEADING */}
      <div className="details">
        <h1>Our Expert Team</h1>
        <p>
          UniSoft has a team of skilled professionals specializing in software
          development, SEO services, and digital marketing globally.
        </p>
      </div> 

      {/* TEAM MEMBERS */}
      <div className="members">
        {teamMembers.map((member) => (
          <React.Fragment key={member.id}>
            <motion.div
          className="m1"
          key={member.id}
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          transition={{ delay: member.id * 0.1 }}
          viewport={{ once: true }}
        >
              <div className={member.img}></div>

              <button
                className="popover-btn"
                onClick={() => setActiveMember(member.id)}
              >
                <h3>{member.name}</h3>
                <span>{member.short}</span>
              </button>
            </motion.div>

            {activeMember === member.id && (
              <div className="user-info">
                <button
                  onClick={() => setActiveMember(null)}
                  className="close"
                >
                  ✕
                </button>

                <div className="inner">
                  <div className={member.img}></div>
                  <h2>{member.role}</h2>
                </div>

                <div className="description">
                  <h1>{member.name}</h1>
                  <p className="user-desc">{member.desc}</p>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* SHOW TEAM BUTTON */}
      <button
        onClick={() => setShowTeam(true)}
        className="submit-btn"
      >
        Show Team Info
      </button>

      {/* TEAM INFO MODAL */}
      {showTeam && (
        <div className="team-info-overlay">
          <div className="team-info">
            
            <button
              onClick={() => setShowTeam(false)}
              className="close"
            >
              ✕
            </button>

            <ul>
              {teamsData.map((team, index) => (
                <li key={index}>
                  <h3>{team.title}</h3>
                  <p className="team-desc">{team.desc}</p>
                </li>
              ))}
            </ul>

          </div>
        </div>
      )}
    </div>
  );
}

export default Teams;