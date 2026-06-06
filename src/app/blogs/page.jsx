import { blogs } from "./data";
import Link from "next/link";

export default function BlogsPage() {
    return (
        <section className="quoteSection">
                {/* BACKGROUND */}
                <div className="quoteGradient" />
                <div className="quoteGrid" />
            <div className="blog-container">
                <h1 className="blog-title">UniSoft Blogs <span>Web Development, SEO & Software Insights</span></h1>
                <div className="blog-list">
                    {blogs.map((blog) => (
                        <div key={blog.slug} className="blog-card">
                            <Link href={`/blogs/${blog.slug}`}>
                                <h2>{blog.title}</h2>
                                <p className="blog-excerpt">
                                    {blog.content.slice(0, 100)}...
                                </p>
                                <span className="read-more">Read more →</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
       </section>
    );
}