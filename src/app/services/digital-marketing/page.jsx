import SeoSchema from "../../components/SeoSchema";
import { digitalMarketingSchema } from "@/app/lib/schema";

export const metadata = {
  title: "Digital Marketing Services | UniSoft",
  description:
    "Grow your business with UniSoft digital marketing services including SEO, ads, social media marketing, and lead generation strategies.",
};

export default function Page() {
  return (
    <>
      {/* SEO SCHEMA */}
      <SeoSchema schema={digitalMarketingSchema} />

      <section className="servicePage">
        <div className="serviceContainer">

          {/* HERO */}
          <div className="serviceHero">
            <span className="serviceBadge">
              DIGITAL MARKETING 🚀
            </span>

            <h1>
              High-Performance Digital Marketing & Lead Generation
            </h1>

            <p>
              We help businesses grow online using powerful marketing strategies,
              paid ads, SEO, branding, and conversion optimization systems
              that bring real customers — not just traffic.
            </p>
          </div>

          {/* CONTENT GRID */}
          <div className="serviceSection">

            {/* BOX 1 */}
            <div className="serviceBox">
              <i className="ri-megaphone-line serviceIcon"></i>

              <h2>Performance Marketing</h2>

              <ul className="serviceList">
                <li>Google Ads campaigns</li>
                <li>Facebook & Instagram ads</li>
                <li>Conversion optimization</li>
                <li>Retargeting campaigns</li>
              </ul>
            </div>

            {/* BOX 2 */}
            <div className="serviceBox">
              <i className="ri-bar-chart-2-line serviceIcon"></i>

              <h2>SEO & Organic Growth</h2>

              <ul className="serviceList">
                <li>Search engine optimization</li>
                <li>Keyword ranking strategy</li>
                <li>Technical SEO fixes</li>
                <li>Local SEO growth</li>
              </ul>
            </div>

            {/* BOX 3 */}
            <div className="serviceBox">
              <i className="ri-user-star-line serviceIcon"></i>

              <h2>Brand & Social Media</h2>

              <ul className="serviceList">
                <li>Social media management</li>
                <li>Brand identity building</li>
                <li>Content strategy</li>
                <li>Engagement growth</li>
              </ul>
            </div>

          </div>

          {/* CTA */}
          <a href="/contact" className="serviceCTA">
            Grow Your Business Today
            <i className="ri-arrow-right-line"></i>
          </a>

        </div>
      </section>
    </>
  );
}