"use client"
import React, {useEffect} from "react";
import SeoSchema from "../../components/SeoSchema";
import "../../services.css";
import { softwareSchema } from "../../lib/schema.js";

export default function Page() {
  useEffect(() => {
    document.title = "Custom Software Development Services | UniSoft Agency";
    window.scrollTo(0, 0);
  })
  return (
    <section className="servicePage">
      <SeoSchema schema={softwareSchema} /> 
      <div className="serviceContainer">

        <div className="serviceHero">
          <span className="serviceBadge">SOFTWARE DEVELOPMENT</span>

          <h1>Custom Software Development Services</h1>

          <p>
            We build scalable SaaS, APIs, enterprise software,
            and business automation systems.
          </p>
        </div>

        <div className="serviceSection">

          <div className="serviceBox">
            <i className="ri-code-s-slash-line serviceIcon"></i>
            <h2>What We Build</h2>

            <ul className="serviceList">
              <li>SaaS Applications</li>
              <li>Enterprise Systems</li>
              <li>Custom APIs</li>
              <li>Automation Tools</li>
            </ul>
          </div>

        </div>

        <a href="/contact" className="serviceCTA">
          Get Free Consultation <i className="ri-arrow-right-line"></i>
        </a>

      </div>
    </section>
  );
}