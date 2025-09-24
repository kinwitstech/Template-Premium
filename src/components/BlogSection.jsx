import { Link } from "@tanstack/react-router";
import React from "react";

import { allBlogPosts } from "@/data/blogData";

export default function BlogSection() {
  return (
    <section className="bg-base-100 w-full">
      <div className="section-container section-padding flex-col gap-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="section-badge">Latest Insights</p>
            <h1 className="section-title">Financial Insights & Updates</h1>
            <p className="text-base-content/80 mt-4 max-w-2xl">
              Stay informed with our latest articles on financial planning, tax
              strategies, and investment insights.
            </p>
          </div>
          <Link to="/blog" className="btn btn-primary">
            View All Posts
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {allBlogPosts.slice(0, 3).map((post) => (
            <article key={post.id} className="group">
              <Link to={`/blog/${post.slug}`}>
                <div className="bg-base-200 overflow-hidden rounded-lg shadow-lg transition-all duration-300 group-hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="badge badge-primary">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="text-base-content/60 mb-3 flex items-center gap-4 text-sm">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-base-content group-hover:text-primary mb-3 text-xl font-semibold transition-colors">
                      {post.title}
                    </h3>

                    <p
                      className="text-base-content/70 mb-4 overflow-hidden"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="bg-primary/20 flex h-8 w-8 items-center justify-center rounded-full">
                          <span className="text-primary text-sm font-semibold">
                            {post.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <span className="text-base-content text-sm font-medium">
                          {post.author}
                        </span>
                      </div>

                      <span className="text-primary hover:text-primary-focus text-sm font-medium transition-transform group-hover:translate-x-1">
                        Read More →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
