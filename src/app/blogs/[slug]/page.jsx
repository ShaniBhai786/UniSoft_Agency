import { blogs } from "../data";
import { notFound } from "next/navigation";
import Link from "next/link";

function formatContent(content) {
    const lines = content
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean);

    return lines.map((line, i) => {
        // headings for bullet-like lines or important sections
        if (line.endsWith(":")) {
            return <h2 key={i}>{line.replace(":", "")}</h2>;
        }

        // bullet points
        if (line.startsWith("-")) {
            return (
                <li key={i} className="blog-li">
                    {line.replace("-", "").trim()}
                </li>
            );
        }

        // numbered points
        if (/^\d+\./.test(line)) {
            return (
                <h3 key={i} className="blog-h3">
                    {line}
                </h3>
            );
        }

        return (
            <p key={i} className="blog-p">
                {line}
            </p>
        );
    });
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const blog = blogs.find((b) => b.slug === slug);

    if (!blog) {
        return {
            title: "Blog Not Found | UniSoft",
        };
    }

    return {
        title: `${blog.title} | Unisoft`,
        description: blog.content.slice(0, 160),
        keywords: `${blog.category}, web development, SEO, Next.js, Unisoft`,
        openGraph: {
            title: blog.title,
            description: blog.content.slice(0, 160),
            type: "article",
            url: `https://unisoftpvt.com/blogs/${slug}`,
        },
        twitter: {
            card: "summary_large_image",
            title: blog.title,
            description: blog.content.slice(0, 160),
        },
    };
}

export default async function BlogDetail({ params }) {
    const { slug } = await params;

    const blog = blogs.find((b) => b.slug === slug);

    if (!blog) return notFound();

    return (
        <section className="blogPage">
            <div className="blogGlow" />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        headline: blog.title,
                        description: blog.content.slice(0, 160),
                        author: {
                            "@type": "Organization",
                            name: "UniSoft",
                        },
                        publisher: {
                            "@type": "Organization",
                            name: "UniSoft",
                            logo: {
                                "@type": "ImageObject",
                                url: "https://unisoftpvt.com/logo.jpeg",
                            },
                        },
                        url: `https://unisoftpvt.com/blogs/${slug}`,
                    }),
                }}
            />
            <article className="blogWrapper">

                {/* HEADER */}
                <header className="blogHeader">
                    <span className="blogBadge">{blog.category}</span>

                    <h1 id="blogTitle">{blog.title}</h1>

                    <p className="blogMeta">
                        Published by <strong><Link href="/">UniSoft</Link></strong> •{" "}
                        {new Date().toDateString()}

                    </p>
                    
                </header>

                {/* CONTENT */}
                <div className="blogContent">
                    {formatContent(blog.content)}
                </div>

                {/* FOOTER */}
                <footer className="blogFooter">
                    © {new Date().getFullYear()} UniSoft. All rights reserved.
                </footer>
            </article>
        </section>
    );
}