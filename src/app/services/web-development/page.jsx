import BackButton from "@/app/components/BackButton";
import SeoSchema from "../../components/SeoSchema";
import { webDevelopmentSchema } from "../../lib/schema";
import "../../services.css"

export const metadata = {
  title: "Web Development Services | UniSoft",
  description:
    "Professional web development services by UniSoft including modern websites, web apps, eCommerce platforms, and custom solutions.",
};

export default function Page() {
  return (
    <>
      {/* SEO SCHEMA */}
      <SeoSchema schema={webDevelopmentSchema} />

      <section className="servicePage">
        <BackButton />
        <div className="serviceContainer">

          {/* HERO */}
          <div className="serviceHero">
            <span className="serviceBadge">
              WEB DEVELOPMENT 🌐
            </span>

            <h1>
              High-Performance Web Development for Modern Businesses
            </h1>

            <p>
              We build fast, scalable, and responsive websites and web applications
              designed to deliver performance, conversions, and long-term growth.
            </p>
          </div>

          {/* CONTENT GRID */}
          <div className="serviceSection">

            {/* BOX 1 */}
            <div className="serviceBox">
              <i className="ri-code-s-slash-line serviceIcon"></i>

              <h2>Custom Web Apps</h2>

              <ul className="serviceList">
                <li>React & Next.js applications</li>
                <li>Dashboard systems</li>
                <li>SaaS platforms</li>
                <li>API-driven apps</li>
              </ul>
            </div>

            {/* BOX 2 */}
            <div className="serviceBox">
              <i className="ri-global-line serviceIcon"></i>

              <h2>Business Websites</h2>

              <ul className="serviceList">
                <li>Corporate websites</li>
                <li>Landing pages</li>
                <li>Portfolio websites</li>
                <li>High-conversion designs</li>
              </ul>
            </div>

            {/* BOX 3 */}
            <div className="serviceBox">
              <i className="ri-shopping-cart-line serviceIcon"></i>

              <h2>E-Commerce Development</h2>

              <ul className="serviceList">
                <li>Online stores</li>
                <li>Payment integration</li>
                <li>Product management systems</li>
                <li>Conversion optimization</li>
              </ul>
            </div>

            {/* BOX 4 */}
            <div className="serviceBox">
              <i className="ri-speed-line serviceIcon"></i>

              <h2>Performance Optimization</h2>

              <ul className="serviceList">
                <li>Core Web Vitals improvement</li>
                <li>Speed optimization</li>
                <li>SEO-friendly structure</li>
                <li>Mobile responsiveness</li>
              </ul>
            </div>

          </div>

          {/* CTA */}
          <a href="/qoute" className="serviceCTA">
            Build My Website
            <i className="ri-arrow-right-line"></i>
          </a>

        </div>
      </section>
    </>
  );
}