import Link from "next/link";

export const metadata = {
  title: "Our Services | UniSoft",
  description:
    "UniSoft offers software development, SEO, web development, UI/UX design, automation, and digital marketing services to grow your business.",
};

const services = [
  {
    title: "Software Development",
    href: "/services/software-development",
    desc: "Scalable custom software, SaaS platforms, APIs & enterprise solutions.",
    icon: "ri-code-s-slash-line",
  },
  {
    title: "SEO Services",
    href: "/services/seo-services",
    desc: "Rank higher on Google with advanced technical and local SEO strategies.",
    icon: "ri-line-chart-line",
  },
  {
    title: "Web Development",
    href: "/services/web-development",
    desc: "High-performance websites and web apps built with modern tech stacks.",
    icon: "ri-global-line",
  },
  {
    title: "Digital Marketing",
    href: "/services/digital-marketing",
    desc: "Lead generation, ads management, and brand growth strategies.",
    icon: "ri-megaphone-line",
  },
  {
    title: "UI/UX Design",
    href: "/services/ui-ux-design",
    desc: "Modern, clean, conversion-focused UI/UX designs for web & mobile.",
    icon: "ri-palette-line",
  },
  {
    title: "Automation Solutions",
    href: "/services/automation-solutions",
    desc: "AI-powered workflows and business automation systems.",
    icon: "ri-cpu-line",
  },
];

export default function ServicesPage() {
  return (
    <section className="srvSection">
      <div className="srvContainer">

        {/* HEADER */}
        <div className="srvHeader">
          <span className="srvBadge">OUR EXPERT SERVICES</span>

          <h1>
            Build, Scale & Grow Your Business With Powerful Digital Solutions
          </h1>

          <p>
            We provide high-performance software development, SEO,
            automation, and marketing services designed to scale modern businesses.
          </p>
        </div>

        {/* GRID */}
        <div className="srvGrid">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="srvCard"
            >
              <div className="srvTop">
                <div className="srvIcon">
                  <i className={service.icon}></i>
                </div>

                <span className="srvTag">Service</span>
              </div>

              <h2>{service.title}</h2>

              <p>{service.desc}</p>

              <div className="srvBottom">
                <span className="srvLink">
                  Explore More <i className="ri-arrow-right-line"></i>
                </span>

                <span className="srvNumber">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}