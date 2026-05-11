import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="footer">
      <div className="trust-partise">
        <h2>Supporting Businesses Worldwide with Digital Solutions</h2>

        <p>
          Certified Google Partner, Meta Ads Specialist, SEO Experts,
          MERN Stack Developers, and Digital Growth Professionals helping
          businesses scale globally.
        </p>

        <div className="trust-badges">

  <div className="trust-badge">
    <i className="fa-brands fa-google badge-icon"></i>
    <span>Google Certified</span>
  </div>

  <div className="trust-badge">
    <i className="fa-brands fa-meta badge-icon"></i>
    <span>Meta Ads Specialist</span>
  </div>

  <div className="trust-badge">
    <i className="fa-solid fa-magnifying-glass-chart badge-icon"></i>
    <span>SEO Specialist</span>
  </div>

  <div className="trust-badge">
    <i className="fa-brands fa-react badge-icon"></i>
    <span>MERN Stack</span>
  </div>

  <div className="trust-badge">
    <i className="fa-solid fa-code badge-icon"></i>
    <span>Custom Web Apps</span>
  </div>

  <div className="trust-badge">
    <i className="fa-solid fa-globe badge-icon"></i>
    <span>Global Clients</span>
  </div>

  <div className="trust-badge">
    <i className="fa-solid fa-mobile-screen-button badge-icon"></i>
    <span>Responsive Design</span>
  </div>

  <div className="trust-badge">
    <i className="fa-solid fa-server badge-icon"></i>
    <span>Backend Development</span>
  </div>

  <div className="trust-badge">
    <i className="fa-solid fa-bullhorn badge-icon"></i>
    <span>Digital Marketing</span>
  </div>

  <div className="trust-badge">
    <i className="fa-solid fa-chart-line badge-icon"></i>
    <span>Business Growth</span>
  </div>

  <div className="trust-badge">
    <i className="fa-solid fa-cart-shopping badge-icon"></i>
    <span>E-Commerce Solutions</span>
  </div>

  <div className="trust-badge">
    <i className="fa-brands fa-wordpress badge-icon"></i>
    <span>WordPress Expert</span>
  </div>

</div>
      </div>
      <div className="footer-container">

        <div className="footer-section">
          <h2 className="logo">UniSoft</h2>
          <p>
            UniSoft provides professional software development, website design, SEO services, digital marketing, and business automation solutions to help companies grow faster and smarter in the digital world.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/tech">Tech</Link></li>
            <li><Link href="/school">Institute</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>Web Development</li>
            <li>App Development</li>
            <li>Graphic Designing</li>
            <li>IT Training</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p> <i className="fa fa-location-dot"></i> Wyoming, USA</p>
          <p><i className="fa fa-phone"></i> +1 (928) 4383214</p>
          <p><i className="fa fa-envelope"></i> unisoftpvt@gmail.com</p>

          <div className="social-icons">
            <a href="https://www.facebook.com/share/1FkdLuFvcd/" target="_main" className="icons"><i className="fa-brands fa-facebook"></i></a>
            <a href="#" className="icons"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#" className="icons"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://wa.me/19284383214" target="_main" className="icons"><i className="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} UniSoftpvt. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;