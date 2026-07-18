import React from "react"
import Link from "next/link"

export default function Footer() {
  const year = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", path: "/", icon: "fa-house" },
    { name: "About", path: "/about", icon: "fa-user" },
    { name: "Services", path: "/services", icon: "fa-briefcase" },
    { name: "Teams", path: "/teams", icon: "fa-users" },
    { name: "CEO", path: "/ceo", icon: "fa-user-tie" },
    { name: "Contact", path: "/contact", icon: "fa-phone" },
    { name: "Pricing", path: "/pricing", icon: "fa-tags" },
  ]

  const services = [
    "Web Development",
    "App Development",
    "SEO Optimization",
    "Digital Marketing",
    "Business Automation",
  ]

  const trustBadges = [
    { name: "Google Ads Certified", icon: "fa-google", type: "fa-brands" },
    { name: "Meta Ads Specialist", icon: "fa-facebook", type: "fa-brands" },
    { name: "SEO Expert", icon: "fa-magnifying-glass-chart", type: "fa-solid" },
    { name: "MERN Stack Developer", icon: "fa-react", type: "fa-brands" },
    { name: "Stripe Payments Secured", icon: "fa-credit-card", type: "fa-solid" },
  ]

  return (
    <footer className="footer">
      <div className="footer-top">

        <div className="brand">
          <h2>UniSoft</h2>
          <p>
            We build high-performance websites, scalable web apps, and automation systems that help businesses grow globally.
          </p>

          <div className="trust-tags">
            {trustBadges.map((item, i) => (
              <span key={i}>
                <i className={`${item.type} ${item.icon}`}></i> {item.name}
              </span>
            ))}
          </div>
        </div>

        <div className="column">
          <h3>Quick Links</h3>
          {quickLinks.map((link, i) => (
            <Link key={i} href={link.path}>
              <i className={`fa-solid ${link.icon}`}></i> {link.name}
            </Link>
          ))}
        </div>

        <div className="column">
          <h3>Services</h3>
          {services.map((service, i) => (
            <span key={i}>
              <i className="fa-solid fa-check"></i> {service}
            </span>
          ))}
        </div>

        <div className="column">
          <h3>Contact</h3>

          <p><i className="fa-solid fa-location-dot"></i> Wyoming, USA</p>
          <p><i className="fa-solid fa-phone"></i> +92 (314) 8588707</p>
          <p><i className="fa-solid fa-envelope"></i> unisoftpvt@gmail.com</p>

          <div className="social">
            <a href="https://www.facebook.com/profile.php?id=61568003026936" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/unisoftpvt" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://wa.me/923148588707" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {year} UniSoft. All Rights Reserved.</p>
        <p className="stripe">
          <i className="fa-brands fa-stripe"></i> Payments secured with Stripe.
        </p>
      </div>
    </footer>
  )
}