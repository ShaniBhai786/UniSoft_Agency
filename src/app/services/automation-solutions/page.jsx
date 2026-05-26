import SeoSchema from "../../components/SeoSchema";
import { automationSchema } from "../..//lib/schema";
import "../../services.css"
import BackButton from "@/app/components/BackButton";
import Link from "next/link";
import FramerMotion from "@/app/components/FramerMotion";

export const metadata = {
  title: "Automation Solutions | UniSoft",
  description:
    "AI-powered business automation, workflow optimization, CRM automation, and smart systems by UniSoft.",
};

export default function Page() {
  return (
    <>
      {/* SEO SCHEMA */}
      <SeoSchema schema={automationSchema} />
      <section className="servicePage">
        <BackButton />
        <div className="serviceContainer">

          {/* HERO */}
            <FramerMotion className="serviceHero">
              <span className="serviceBadge">
                AUTOMATION SOLUTIONS ⚙️
              </span>
              <h1>
                Smart Business Automation & AI Workflow Systems
              </h1>

              <p>
                We build intelligent automation systems that reduce manual work,
                improve efficiency, and scale your business operations using AI
                and modern cloud technologies.
              </p>
            </FramerMotion>

          {/* CONTENT GRID */}
          <div className="serviceSection">

            {/* BOX 1 */}
            <Link href="/pricing">
              <FramerMotion className="serviceBox">
                <i className="ri-cpu-line serviceIcon"></i>

                <h2>AI-Powered Automation</h2>

                <ul className="serviceList">
                  <li>AI workflow automation</li>
                  <li>Smart decision systems</li>
                  <li>Task automation bots</li>
                  <li>Data processing automation</li>
                </ul>
              </FramerMotion>
            </Link>

            {/* BOX 2 */}
            <FramerMotion className="serviceBox">
              <i className="ri-settings-3-line serviceIcon"></i>

              <h2>Business Process Optimization</h2>

              <ul className="serviceList">
                <li>CRM automation systems</li>
                <li>Sales pipeline automation</li>
                <li>Lead management systems</li>
                <li>Workflow optimization</li>
              </ul>
            </FramerMotion>

            {/* BOX 3 */}
            <FramerMotion className="serviceBox">
              <i className="ri-cloud-line serviceIcon"></i>

              <h2>Cloud Integration Systems</h2>

              <ul className="serviceList">
                <li>API integrations</li>
                <li>Cloud-based workflows</li>
                <li>Real-time syncing systems</li>
                <li>Third-party integrations</li>
              </ul>
            </FramerMotion>

          </div>

          {/* CTA */}
          <FramerMotion>
            <Link href="/quote" className="serviceCTA">
              Automate Your Business Now
              <i className="ri-arrow-right-line"></i>
            </Link>
          </FramerMotion>

        </div>
      </section>
    </>
  );
}