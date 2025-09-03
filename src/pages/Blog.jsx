import React, { useState } from "react";
import PageHeader from "@/components/PageHeader";

const allBlogPosts = [
  {
    id: 1,
    title: "Financial Planning Strategies for Small Businesses",
    excerpt: "Discover effective financial planning strategies that can help small businesses optimize their cash flow and improve profitability in today's competitive market.",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    category: "Financial Planning",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 2,
    title: "Investment Portfolio Diversification Guide",
    excerpt: "A comprehensive guide to diversifying your investment portfolio to minimize risk and maximize returns in today's volatile market conditions.",
    author: "Emily Rodriguez",
    date: "March 5, 2024",
    category: "Investment",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 3,
    title: "Retirement Planning: A Complete Guide",
    excerpt: "Everything you need to know about planning for retirement, from early savings strategies to investment options that will secure your financial future.",
    author: "David Thompson",
    date: "February 28, 2024",
    category: "Retirement Planning",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 4,
    title: "Estate Planning Essentials",
    excerpt: "Key considerations and strategies for effective estate planning to protect your assets and legacy for future generations.",
    author: "Robert Martinez",
    date: "February 15, 2024",
    category: "Estate Planning",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  }
];

const categories = ["All", "Financial Planning", "Tax Planning", "Investment", "Retirement Planning", "Estate Planning"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = allBlogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="pt-16">
      <PageHeader title="Blog" />

      <section className="bg-gradient-to-br from-base-100 via-base-100 to-primary/5 py-20">
        <div className="section-container">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Latest Financial Insights
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-base-content to-base-content/70 bg-clip-text text-transparent">
              Financial Insights & Updates
            </h2>
            <p className="text-base-content/70 text-lg max-w-3xl mx-auto leading-relaxed">
              Stay informed with our expert analysis and insights on financial planning, tax strategies, investments, and more.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="group">
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-base-200/50 group-hover:-translate-y-2">
                      {/* Image */}
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Category */}
                        <div className="absolute top-4 left-4">
                          <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                            {post.category}
                          </span>
                        </div>

                        {/* Read Time */}
                        <div className="absolute top-4 right-4">
                          <span className="bg-white/90 text-base-content px-3 py-1 rounded-full text-xs font-medium">
                            {post.readTime}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8">
                        {/* Meta */}
                        <div className="flex items-center gap-4 text-sm text-base-content/60 mb-4">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                              <span className="text-primary font-semibold text-sm">
                                {post.author.split(" ").map((n) => n[0]).join("")}
                              </span>
                            </div>
                            <span className="font-medium">{post.author}</span>
                          </div>
                          <span>•</span>
                          <span>{post.date}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-base-content/70 mb-6 leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>

                        {/* Read More */}
                        <div className="flex items-center justify-between">
                          <button className="text-primary hover:text-primary-focus font-semibold text-sm group-hover:translate-x-2 transition-all duration-300 flex items-center gap-2">
                            Read More
                            <svg
                              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Empty State */}
              {filteredPosts.length === 0 && (
                <div className="text-center py-16">
                  <div className="w-24 h-24 mx-auto mb-6 bg-base-200 rounded-full flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-base-content/30"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">No articles found</h3>
                  <p className="text-base-content/60">
                    Try adjusting your search or filter criteria.
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Search Section */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-base-200/50">
                <h3 className="text-xl font-bold mb-4 text-primary">Search Articles</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-base-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                  />
                  <svg
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-base-content/50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>

              {/* Categories Section */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-base-200/50">
                <h3 className="text-xl font-bold mb-4 text-primary">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? "bg-primary text-white shadow-md"
                          : "text-base-content/70 hover:bg-primary/10 hover:text-primary"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
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
