import BackButton from "@/app/components/BackButton";
import SeoSchema from "../../components/SeoSchema";
import { uiuxSchema } from "../../lib/schema.js";
import "../../services.css"

export const metadata = {
  title: "UI UX Design Services | UniSoft",
  description:
    "Modern UI UX design services by UniSoft including web design, mobile app design, UX research, and conversion-focused interfaces.",
};

export default function Page() {
  return (
    <>
      {/* SEO SCHEMA */}
      <SeoSchema schema={uiuxSchema} />

      <section className="servicePage">
        <BackButton />
        <div className="serviceContainer">

          {/* HERO */}
          <div className="serviceHero">
            <span className="serviceBadge">
              UI/UX DESIGN 🎨
            </span>

            <h1>
              Modern UI UX Design That Converts Visitors Into Customers
            </h1>

            <p>
              We design clean, modern, and conversion-focused user experiences
              that improve engagement, increase usability, and drive business growth.
            </p>
          </div>

          {/* CONTENT GRID */}
          <div className="serviceSection">

            {/* BOX 1 */}
            <div className="serviceBox">
              <i className="ri-layout-2-line serviceIcon"></i>

              <h2>UI Design</h2>

              <ul className="serviceList">
                <li>Modern website interfaces</li>
                <li>Mobile app UI design</li>
                <li>Landing page design</li>
                <li>Design systems & components</li>
              </ul>
            </div>

            {/* BOX 2 */}
            <div className="serviceBox">
              <i className="ri-focus-2-line serviceIcon"></i>

              <h2>UX Research</h2>

              <ul className="serviceList">
                <li>User behavior analysis</li>
                <li>Wireframing & prototyping</li>
                <li>User journey mapping</li>
                <li>Conversion optimization</li>
              </ul>
            </div>

            {/* BOX 3 */}
            <div className="serviceBox">
              <i className="ri-smartphone-line serviceIcon"></i>

              <h2>Responsive Design</h2>

              <ul className="serviceList">
                <li>Mobile-first UI design</li>
                <li>Tablet & desktop optimization</li>
                <li>Cross-device consistency</li>
                <li>Performance-focused layouts</li>
              </ul>
            </div>

            {/* BOX 4 */}
            <div className="serviceBox">
              <i className="ri-brush-line serviceIcon"></i>

              <h2>Brand Experience</h2>

              <ul className="serviceList">
                <li>Brand identity systems</li>
                <li>Color & typography systems</li>
                <li>Visual storytelling</li>
                <li>Consistent design language</li>
              </ul>
            </div>

          </div>

          {/* CTA */}
          <a href="/quote" className="serviceCTA">
            Design My Product UI
            <i className="ri-arrow-right-line"></i>
          </a>

        </div>
      </section>
    </>
  );
}