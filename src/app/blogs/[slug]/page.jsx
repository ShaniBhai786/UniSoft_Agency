import { blogs } from "../data";
import { notFound } from "next/navigation";

export default async function BlogDetail({ params }) {
    const { slug } = await params;

    const blog = blogs.find((b) => b.slug === slug);

    if (!blog) return notFound();

    return (
        <section className="quoteSection">
            {/* BACKGROUND */}
            <div className="quoteGradient" />
            <div className="quoteGrid" />
            <article className="blog-wrapper">
                <header className="blog-header">
                    <h1 className="blog-heading">{blog.title}</h1>
                    <p className="blog-meta">
                        Published by Unisoft • Web Development & SEO Insights
                    </p>
                    <span className="blog-category">Category: <strong>{blog.category}</strong></span>
                </header>

                <section className="blog-body">
                    <p>{blog.content}</p>
                </section>

                <footer className="blog-footer">
                    <p>
                        © {new Date().getFullYear()} Unisoft. All rights reserved.
                    </p>
                </footer>
            </article>
        </section>
    );
}