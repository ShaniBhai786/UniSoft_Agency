import React from "react";
import Link  from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
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