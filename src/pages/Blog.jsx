import { Link } from "@tanstack/react-router";
import { FileText, Search } from "lucide-react";
import React from "react";

import PageHeader from "@/components/PageHeader";
import { categories, allBlogPosts } from "@/data/blogData";
import { useBlogFilter } from "@/common/hooks/useBlogFilter";

const Blog = () => {
  const {
    selectedCategory,
    searchTerm,
    filteredPosts,
    setSelectedCategory,
    setSearchTerm,
  } = useBlogFilter({
    syncWithURL: true, // Enable URL synchronization for category
  });

  return (
    <main className="pt-16">
      <PageHeader title="Blog" />

      <section className="section-padding">
        <div className="section-container">
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="bg-primary/10 text-primary mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
              <span className="bg-primary h-2 w-2 rounded-full"></span>
              Latest Financial Insights
            </div>
            <h1 className="from-base-content to-base-content/80 mb-6 bg-gradient-to-r bg-clip-text font-bold text-transparent">
              Financial Insights & Updates
            </h1>
            <p className="text-base-content/80 mx-auto max-w-3xl text-lg leading-relaxed">
              Stay informed with our expert analysis and insights on financial
              planning, tax strategies, investments, and more.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="group">
                    <Link 
                      to={`/blog/${post.slug}`} 
                      onClick={() => console.log('Navigating to:', `/blog/${post.slug}`)}
                      className="block"
                    >
                      <div className="bg-base-100 border-base-200/50 overflow-hidden rounded-2xl border shadow-lg transition-all duration-500 group-hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
                        {/* Image */}
                        <div className="relative h-64 overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                          {/* Category */}
                          <div className="absolute top-4 left-4">
                            <span className="bg-primary rounded-full px-3 py-1 text-xs font-semibold text-white shadow-lg">
                              {post.category}
                            </span>
                          </div>

                          {/* Read Time */}
                          <div className="absolute top-4 right-4">
                            <span className="bg-base-100/90 text-base-content rounded-full px-3 py-1 text-xs font-medium">
                              {post.readTime}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-8">
                          {/* Meta */}
                          <div className="text-base-content/60 mb-4 flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-2">
                              <div className="bg-primary/20 flex-center h-8 w-8 rounded-full">
                                <span className="text-primary text-sm font-semibold">
                                  {post.author
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </span>
                              </div>
                              <span className="text-base-content font-medium">
                                {post.author}
                              </span>
                            </div>
                            <span>•</span>
                            <span>{post.date}</span>
                          </div>

                          {/* Title */}
                          <h3 className="text-base-content group-hover:text-primary mb-4 line-clamp-2 font-bold transition-colors duration-300">
                            {post.title}
                          </h3>

                          {/* Excerpt */}
                          <p className="text-base-content/70 mb-6 line-clamp-3 leading-relaxed">
                            {post.excerpt}
                          </p>

                          {/* Read More */}
                          <div className="flex items-center justify-between">
                            <span className="text-primary hover:text-primary-focus flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:translate-x-2 cursor-pointer">
                              Read More
                              →
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>

              {/* Empty State */}
              {filteredPosts.length === 0 && (
                <div className="py-16 text-center">
                  <div className="bg-base-200 mx-auto mb-6 flex-center h-24 w-24 rounded-full">
                    <FileText className="text-base-content/30 h-12 w-12" />
                  </div>
                  <h3 className="text-base-content mb-2 text-2xl font-bold">
                    No articles found
                  </h3>
                  <p className="text-base-content/60">
                    Try adjusting your search or filter criteria.
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Search */}
                <div className="bg-base-100 border-base-200/50 rounded-2xl border p-6 shadow-lg">
                  <h3 className="text-base-content mb-4 text-xl font-bold">
                    Search Articles
                  </h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="bg-base-200 border-base-300 focus:ring-primary text-base-content placeholder-base-content/60 w-full rounded-xl border px-4 py-3 pl-12 focus:border-transparent focus:ring-2 focus:outline-none"
                    />
                    <Search className="text-base-content/60 absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 transform" />
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-base-100 border-base-200/50 rounded-2xl border p-6 shadow-lg">
                  <h3 className="text-base-content mb-4 text-xl font-bold">
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full rounded-xl px-4 py-3 text-left transition-all duration-300 ${
                          selectedCategory === category
                            ? "bg-primary text-primary-content font-semibold"
                            : "bg-base-200 hover:bg-base-300 text-base-content hover:text-primary"
                        }`}
                      >
                        {category}
                        {category !== "All" && (
                          <span className="ml-2 text-sm opacity-70">
                            (
                            {
                              allBlogPosts.filter(
                                (post) => post.category === category
                              ).length
                            }
                            )
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Recent Posts */}
                <div className="bg-base-100 border-base-200/50 rounded-2xl border p-6 shadow-lg">
                  <h3 className="text-base-content mb-4 text-xl font-bold">
                    Recent Posts
                  </h3>
                  <div className="space-y-4">
                    {allBlogPosts.slice(0, 3).map((post) => (
                      <Link
                        key={post.id}
                        to={`/blog/${post.slug}`}
                        className="group hover:bg-base-200 block rounded-xl p-3 transition-all duration-300"
                      >
                        <div className="flex gap-3">
                          <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="text-base-content group-hover:text-primary line-clamp-2 font-semibold transition-colors">
                              {post.title}
                            </h4>
                            <p className="text-base-content/60 mt-1 text-xs">
                              {post.date}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="from-primary to-primary-focus text-primary-content rounded-2xl bg-gradient-to-br p-6 shadow-lg">
                  <h3 className="mb-2 text-xl font-bold">Stay Updated</h3>
                  <p className="text-primary-content/80 mb-4 text-sm">
                    Get the latest financial insights delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full rounded-xl border border-white/30 bg-white/20 px-4 py-3 text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:outline-none"
                    />
                    <button className="text-primary w-full rounded-xl bg-white py-3 font-semibold transition-colors hover:bg-white/90">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
