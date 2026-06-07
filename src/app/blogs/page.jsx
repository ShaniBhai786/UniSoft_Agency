import { blogs } from "./data.js";
import Link from "next/link";

export default function BlogsPage() {
    return (
        <section className="blogSection">
            
            <div className="blogBgGlow"></div>

            <div className="blogContainer">
                <div className="blogHeader">
                    <h1>
                        UniSoft Blogs
                    </h1>
                    <p>
                        Web Development, SEO & Software Insights
                    </p>
                </div>

                <div className="blogGrid">
                    {blogs.map((blog, index) => (
                        <div
                            key={blog.slug}
                            className="blogCard"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <Link href={`/blogs/${blog.slug}`}>
                                <div className="blogCardInner">
                                    <div className="blogTag">
                                        Article
                                    </div>

                                    <h2>{blog.title}</h2>

                                    <p>
                                        {blog.content
                                            .replace(/<[^>]*>/g, "")
                                            .slice(0, 120)}
                                        ...
                                    </p>

                                    <div className="blogFooter">
                                        <span>Read article →</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}