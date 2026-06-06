import { blogs } from "../data";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
    const { slug } = await params;

    const blog = blogs.find((b) => b.slug === slug);

    if (!blog) {
        return {
            title: "Blog Not Found | Unisoft",
            description: "The requested blog does not exist.",
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
        <section className="quoteSection">
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
            <div className="quoteGradient" />
            <div className="quoteGrid" />

            <article className="blog-wrapper">
                <header className="blog-header">
                    <h1 className="blog-heading">{blog.title}</h1>

                    <p className="blog-meta">
                        Published by Unisoft • Web Development & SEO Insights
                    </p>

                    <span className="blog-category">
                        Category: <strong>{blog.category}</strong>
                    </span>
                </header>

                <section className="blog-body">
                    <p>{blog.content}</p>
                </section>

                <footer className="blog-footer">
                    <p>© {new Date().getFullYear()} Unisoft. All rights reserved.</p>
                </footer>
            </article>
        </section>
    );
}