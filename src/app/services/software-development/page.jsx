import Link from "next/link";
import SeoSchema from "../../components/SeoSchema";
import "../../services.css";

import { softwareSchema } from "../../lib/schema.js";
import BackButton from "@/app/components/BackButton";

export const metadata = {
  title: "Custom Software Development Services | UniSoft",
  description:
    "Professional software development services by UniSoft including SaaS applications, enterprise systems, APIs, automation solutions, and scalable business software.",
};

export default function Page() {

  return (
    <>
      {/* SEO SCHEMA */}
      <SeoSchema schema={softwareSchema} />
      <section className="servicePage">
      <BackButton />

        <div className="serviceContainer">

          {/* HERO */}
          <div className="serviceHero">

            <span className="serviceBadge">
              SOFTWARE DEVELOPMENT 💻
            </span>

            <h1>
              Custom Software Development Solutions for Modern Businesses
            </h1>

            <p>
              UniSoft builds powerful, scalable, and secure software
              solutions designed to streamline operations, automate
              workflows, and accelerate business growth in the digital era.
            </p>

          </div>

          {/* SERVICES GRID */}
          <div className="serviceSection">

            {/* BOX 1 */}
            <div className="serviceBox">

              <i className="ri-code-s-slash-line serviceIcon"></i>

              <h2>Custom Software Solutions</h2>

              <ul className="serviceList">
                <li>Enterprise software systems</li>
                <li>Custom business applications</li>
                <li>Cloud-based solutions</li>
                <li>Scalable architecture design</li>
              </ul>

            </div>

            {/* BOX 2 */}
            <div className="serviceBox">

              <i className="ri-stack-line serviceIcon"></i>

              <h2>SaaS Application Development</h2>

              <ul className="serviceList">
                <li>Modern SaaS platforms</li>
                <li>Subscription-based systems</li>
                <li>User authentication & dashboards</li>
                <li>API-powered applications</li>
              </ul>

            </div>

            {/* BOX 3 */}
            <div className="serviceBox">

              <i className="ri-links-line serviceIcon"></i>

              <h2>API & System Integration</h2>

              <ul className="serviceList">
                <li>REST API development</li>
                <li>Third-party integrations</li>
                <li>Payment gateway integration</li>
                <li>Automation workflow systems</li>
              </ul>

            </div>

            {/* BOX 4 */}
            <div className="serviceBox">

              <i className="ri-cpu-line serviceIcon"></i>

              <h2>Automation & AI Systems</h2>

              <ul className="serviceList">
                <li>Business automation tools</li>
                <li>AI-powered workflows</li>
                <li>CRM & ERP integrations</li>
                <li>Process optimization systems</li>
              </ul>

            </div>

          </div>

          {/* CTA SECTION */}
          <div className="serviceBottomArea">

            <h3>
              Ready to Build Your Next Software Solution?
            </h3>

            <p>
              Let UniSoft transform your ideas into scalable,
              high-performance digital products.
            </p>

            <Link href="/contact" className="serviceCTA">
              Get Free Consultation
              <i className="ri-arrow-right-line"></i>
            </Link>

          </div>

        </div>

      </section>
    </>
  );
}