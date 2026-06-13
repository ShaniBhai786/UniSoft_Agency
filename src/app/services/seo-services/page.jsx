import SeoSchema from "@/app/components/SeoSchema";
import { seoSchema } from "../../lib/schema.js";
import BackButton from "@/app/components/BackButton.jsx";
import "../../services.css"

export const metadata = {
  title: "SEO Services Agency | UniSoft",
  description:
    "Boost your Google rankings with UniSoft SEO services including technical SEO, local SEO, keyword research, and full optimization strategies.",
};

export default function Page() {
  return (
    <>
      {/* SEO SCHEMA */}
      <SeoSchema schema={seoSchema} />
      <section className="servicePage">
        <BackButton />
        <div className="serviceContainer">
          {/* HERO */}
          <div className="serviceHero">
            <span className="serviceBadge">
              SEO SERVICES 📈
            </span>

            <h1>
              Rank Higher on Google with Powerful SEO Strategies
            </h1>

            <p>
              We help businesses increase organic traffic, improve search rankings,
              and generate high-quality leads through advanced SEO optimization
              techniques.
            </p>
          </div>

          {/* CONTENT GRID */}
          <div className="serviceSection">

            {/* BOX 1 */}
            <div className="serviceBox">
              <i className="ri-search-line serviceIcon"></i>

              <h2>Technical SEO</h2>

              <ul className="serviceList">
                <li>Website speed optimization</li>
                <li>Core Web Vitals improvement</li>
                <li>Indexing & crawl fixes</li>
                <li>Schema markup optimization</li>
              </ul>
            </div>

            {/* BOX 2 */}
            <div className="serviceBox">
              <i className="ri-key-2-line serviceIcon"></i>

              <h2>Keyword Strategy</h2>

              <ul className="serviceList">
                <li>High-value keyword research</li>
                <li>Competitor analysis</li>
                <li>Search intent mapping</li>
                <li>Content planning strategy</li>
              </ul>
            </div>

            {/* BOX 3 */}
            <div className="serviceBox">
              <i className="ri-map-pin-line serviceIcon"></i>

              <h2>Local SEO</h2>

              <ul className="serviceList">
                <li>Google Business Profile optimization</li>
                <li>Local ranking improvement</li>
                <li>Map visibility boost</li>
                <li>Local citations setup</li>
              </ul>
            </div>

            {/* BOX 4 */}
            <div className="serviceBox">
              <i className="ri-bar-chart-line serviceIcon"></i>

              <h2>Growth & Analytics</h2>

              <ul className="serviceList">
                <li>Traffic monitoring</li>
                <li>Ranking reports</li>
                <li>Conversion tracking</li>
                <li>SEO performance audit</li>
              </ul>
            </div>

          </div>

          {/* CTA */}
          <a href="/quote" className="serviceCTA">
            Improve My Google Ranking
            <i className="ri-arrow-right-line"></i>
          </a>

        </div>
      </section>
    </>
  );
}