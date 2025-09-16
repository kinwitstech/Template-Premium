import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import { blogPostRoute } from "@/routes/home.routes";
import PageHeader from "@/components/PageHeader";

const BlogPost = () => {
  const { slug } = blogPostRoute.useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  // Mock blog posts data (in real app, this would come from API)
  const blogPosts = [
    {
      id: 1,
      slug: "financial-planning-strategies-small-businesses",
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
      slug: "tax-optimization-techniques-2024",
      title: "Tax Optimization Techniques for 2024",
      excerpt: "Learn about the latest tax optimization techniques and strategies to maximize your savings while staying compliant with regulations.",
      author: "Michael Chen",
      date: "March 10, 2024",
      category: "Tax Planning",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      slug: "investment-portfolio-diversification-guide",
      title: "Investment Portfolio Diversification Guide",
      excerpt: "A comprehensive guide to diversifying your investment portfolio to minimize risk and maximize returns in today's volatile market conditions.",
      author: "Emily Rodriguez",
      date: "March 5, 2024",
      category: "Investment",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      slug: "retirement-planning-complete-guide",
      title: "Retirement Planning: A Complete Guide",
      excerpt: "Everything you need to know about planning for retirement, from early savings strategies to investment options that will secure your financial future.",
      author: "David Thompson",
      date: "February 28, 2024",
      category: "Retirement Planning",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 5,
      slug: "estate-planning-essentials",
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

  const post = blogPosts.find(p => p.slug === slug);

  // Filter posts for sidebar
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (!post) {
    return (
      <main className="pt-16">
        <PageHeader title="Post Not Found" />
        <section className="py-20">
          <div className="section-container text-center">
            <h2 className="text-4xl font-bold mb-4">Blog Post Not Found</h2>
            <p className="text-base-content/70 mb-8">
              The blog post you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/blog" className="btn btn-primary">
              Back to Blog
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="pt-16 bg-base-100 dark:bg-gray-900 min-h-screen">
      <PageHeader title={post.title} />

      <article className="py-20 bg-base-100 dark:bg-gray-900">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="max-w-4xl mx-auto bg-transparent">
            {/* Featured Image */}
            <div className="relative h-96 mb-12 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Category Badge */}
              <div className="absolute top-6 left-6">
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  {post.category}
                </span>
              </div>

              {/* Read Time Badge */}
              <div className="absolute top-6 right-6">
                <span className="bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  {post.readTime}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="bg-base-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-base-200/50 p-8 md:p-12">
              {/* Meta Info */}
              <div className="flex items-center gap-6 text-sm text-base-content/70 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">
                      {post.author.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <span className="font-semibold text-base-content">{post.author}</span>
                </div>
                <span className="w-1 h-1 bg-base-content/40 rounded-full"></span>
                <span className="text-base-content/70">{post.date}</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold mb-8 text-base-content leading-tight">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-xl text-base-content/80 leading-relaxed mb-12">
                {post.excerpt}
              </p>


              {/* Article Date and Meta */}
              <div className="flex items-center gap-6 mb-8 pb-6 border-b border-base-200">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-base-content/70 font-medium">{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-base-content/70 font-medium">{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span className="text-base-content/70 font-medium">1,234 views</span>
                </div>
              </div>

              {/* Introduction */}
              <div className="prose prose-lg max-w-none text-base-content mb-12">
                <h2 className="text-2xl font-bold text-base-content mb-6">Understanding {post.category}</h2>
                <p className="text-lg leading-relaxed mb-6 text-base-content/80">
                  This comprehensive guide provides detailed insights into {post.category.toLowerCase()}, 
                  offering practical strategies and expert advice to help you make informed decisions about your financial future.
                </p>
                <p className="text-lg leading-relaxed mb-8 text-base-content/80">
                  In today's rapidly changing financial landscape, having a solid understanding of {post.category.toLowerCase()} 
                  is crucial for building and maintaining wealth. Our expert team has compiled this detailed analysis to help 
                  you navigate the complexities and opportunities in this field.
                </p>
              </div>

              {/* Featured Image Section */}
              <div className="mb-12">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-sm font-medium">Featured Image: {post.category} Strategy</p>
                  </div>
                </div>
              </div>

              {/* Detailed Content */}
              <div className="prose prose-lg max-w-none text-base-content mb-12">
                <h3 className="text-xl font-semibold text-base-content mb-6">Key Strategies and Insights</h3>
                
                <p className="text-lg leading-relaxed mb-6 text-base-content/80">
                  Our research and experience have identified several critical factors that contribute to success in {post.category.toLowerCase()}. 
                  These strategies are based on real-world case studies and years of professional experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-base-content mb-2">Strategic Planning</h4>
                      <p className="text-base leading-relaxed text-base-content/80">
                        Effective {post.category.toLowerCase()} requires a comprehensive approach that considers your unique financial situation, 
                        goals, and risk tolerance. This involves detailed analysis and personalized recommendations.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-base-content mb-2">Risk Management</h4>
                      <p className="text-base leading-relaxed text-base-content/80">
                        Understanding and managing risk is fundamental to successful financial planning. We'll explore various 
                        risk mitigation strategies and how they apply to your specific circumstances.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-base-content mb-2">Implementation</h4>
                      <p className="text-base leading-relaxed text-base-content/80">
                        The best strategies are only effective when properly implemented and continuously monitored. 
                        We'll provide step-by-step guidance for execution and ongoing management.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-base-content mb-2">Monitoring</h4>
                      <p className="text-base leading-relaxed text-base-content/80">
                        Continuous monitoring and adjustment of your financial strategy ensures long-term success. 
                        Regular reviews help maintain alignment with your evolving goals and market conditions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-base-200 rounded-xl p-6 mb-8">
                  <h4 className="text-lg font-semibold text-base-content mb-4">💡 Expert Tip</h4>
                  <p className="text-base-content/80 italic">
                    "The key to successful {post.category.toLowerCase()} is not just having the right strategy, 
                    but also having the discipline to stick with it and adapt when necessary."
                  </p>
                  <p className="text-sm text-base-content/60 mt-2">- {post.author}, Senior Financial Consultant</p>
                </div>
              </div>

              {/* Social Media and Sharing */}
              <div className="bg-base-100 rounded-2xl p-8 mb-12 border border-base-200">
                <h3 className="text-xl font-bold text-base-content mb-6">Share This Article</h3>
                <div className="flex flex-wrap gap-4">
                  <button className="w-12 h-12 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-xl flex items-center justify-center transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </button>
                  <button className="w-12 h-12 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-xl flex items-center justify-center transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </button>
                  <button className="w-12 h-12 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-xl flex items-center justify-center transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>
                  <button className="w-12 h-12 bg-red-100 hover:bg-red-200 text-red-600 rounded-xl flex items-center justify-center transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Comments Section */}
              <div className="bg-base-100 rounded-2xl p-8 border border-base-200">
                <h3 className="text-xl font-bold text-base-content mb-6">Leave a Reply</h3>
                <p className="text-base-content/70 mb-6">Share your thoughts and questions about this article.</p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-base-content mb-2">Name *</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-base-200 border border-base-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-base-content"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-base-content mb-2">Email *</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-base-200 border border-base-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-base-content"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-base-content mb-2">Comment *</label>
                    <textarea
                      rows="6"
                      className="w-full px-4 py-3 bg-base-200 border border-base-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-base-content"
                      placeholder="Share your thoughts..."
                    ></textarea>
                  </div>
                  <div className="flex items-center gap-4">
                    <button type="submit" className="btn btn-primary">
                      Post Comment
                    </button>
                    <label className="flex items-center gap-2 text-sm text-base-content/70">
                      <input type="checkbox" className="checkbox checkbox-sm" />
                      <span>Notify me of follow-up comments</span>
                    </label>
                  </div>
                </form>

                {/* Existing Comments */}
                <div className="mt-12">
                  <h4 className="text-lg font-semibold text-base-content mb-6">Comments (3)</h4>
                  <div className="space-y-6">
                    <div className="flex gap-4 p-6 bg-base-200 rounded-xl">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">JD</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h5 className="font-semibold text-base-content">John Doe</h5>
                          <span className="text-sm text-base-content/60">2 days ago</span>
                        </div>
                        <p className="text-base-content/80 mb-3">
                          Excellent article! This really helped me understand the key concepts. 
                          I'd love to learn more about the implementation strategies.
                        </p>
                        <button className="text-sm text-primary hover:text-primary-focus font-medium">
                          Reply
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 p-6 bg-base-200 rounded-xl">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">SM</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h5 className="font-semibold text-base-content">Sarah Miller</h5>
                          <span className="text-sm text-base-content/60">1 week ago</span>
                        </div>
                        <p className="text-base-content/80 mb-3">
                          Very informative! I've been looking for this kind of detailed analysis. 
                          The expert tips section was particularly helpful.
                        </p>
                        <button className="text-sm text-primary hover:text-primary-focus font-medium">
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Author Info */}
              <div className="mt-16 pt-8 border-t border-base-200">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">
                      {post.author.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-base-content mb-2">
                      {post.author}
                    </h3>
                    <p className="text-base-content/70 text-lg">
                      Senior Financial Consultant & Investment Advisor
                    </p>
                    <p className="text-base-content/60 text-sm mt-2">
                      Certified Financial Planner with 15+ years of experience
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-12 flex flex-wrap gap-4">
                <button className="btn btn-primary btn-lg">
                  Get Free Consultation
                </button>
                <button className="btn btn-outline btn-lg">
                  Download PDF Guide
                </button>
                <button className="btn btn-ghost btn-lg">
                  Share Article
                </button>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 flex justify-between items-center">
              <Link to="/blog" className="btn btn-outline">
                ← Back to Blog
              </Link>
              <div className="flex gap-2">
                <button className="btn btn-outline">
                  Share
                </button>
                <button className="btn btn-outline">
                  Print
                </button>
              </div>
            </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Search */}
                <div className="bg-base-100 rounded-2xl shadow-lg p-6 border border-base-200/50">
                  <h3 className="text-xl font-bold text-base-content mb-4">Search Articles</h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-4 py-3 pl-12 bg-base-200 border border-base-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-base-content placeholder-base-content/60"
                    />
                    <svg
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-base-content/60"
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

                {/* Categories */}
                <div className="bg-base-100 rounded-2xl shadow-lg p-6 border border-base-200/50">
                  <h3 className="text-xl font-bold text-base-content mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <Link
                        key={category}
                        to={`/blog${category === "All" ? "" : `?category=${encodeURIComponent(category)}`}`}
                        className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 block ${
                          selectedCategory === category
                            ? "bg-primary text-primary-content font-semibold"
                            : "bg-base-200 hover:bg-base-300 text-base-content hover:text-primary"
                        }`}
                      >
                        {category}
                        {category !== "All" && (
                          <span className="ml-2 text-sm opacity-70">
                            ({blogPosts.filter(post => post.category === category).length})
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Related Posts */}
                <div className="bg-base-100 rounded-2xl shadow-lg p-6 border border-base-200/50">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-base-content">Related Posts</h3>
                    {filteredPosts.length > 3 && (
                      <Link
                        to={`/blog${selectedCategory === "All" ? "" : `?category=${encodeURIComponent(selectedCategory)}`}`}
                        className="text-sm text-primary hover:text-primary-focus font-medium"
                      >
                        View All ({filteredPosts.length})
                      </Link>
                    )}
                  </div>
                  <div className="space-y-4">
                    {filteredPosts.slice(0, 3).map((relatedPost) => (
                      <Link
                        key={relatedPost.id}
                        to={`/blog/${relatedPost.slug}`}
                        className="group block hover:bg-base-200 rounded-xl p-3 transition-all duration-300"
                      >
                        <div className="flex gap-3">
                          <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                            <img
                              src={relatedPost.image}
                              alt={relatedPost.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-base-content text-sm line-clamp-2 group-hover:text-primary transition-colors">
                              {relatedPost.title}
                            </h4>
                            <p className="text-xs text-base-content/60 mt-1">
                              {relatedPost.date}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                    {filteredPosts.length === 0 && (
                      <p className="text-base-content/60 text-sm text-center py-4">
                        No posts found matching your criteria.
                      </p>
                    )}
                  </div>
                </div>

                {/* Recent Posts */}
                <div className="bg-base-100 rounded-2xl shadow-lg p-6 border border-base-200/50">
                  <h3 className="text-xl font-bold text-base-content mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 4).map((recentPost) => (
                      <Link
                        key={recentPost.id}
                        to={`/blog/${recentPost.slug}`}
                        className="group block hover:bg-base-200 rounded-xl p-3 transition-all duration-300"
                      >
                        <div className="flex gap-3">
                          <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                            <img
                              src={recentPost.image}
                              alt={recentPost.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-base-content text-sm line-clamp-2 group-hover:text-primary transition-colors">
                              {recentPost.title}
                            </h4>
                            <p className="text-xs text-base-content/60 mt-1">
                              {recentPost.date}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Archives */}
                <div className="bg-base-100 rounded-2xl shadow-lg p-6 border border-base-200/50">
                  <h3 className="text-xl font-bold text-base-content mb-4">Archives</h3>
                  <div className="space-y-2">
                    {[
                      { month: "December 2024", count: 8 },
                      { month: "November 2024", count: 12 },
                      { month: "October 2024", count: 15 },
                      { month: "September 2024", count: 10 },
                      { month: "August 2024", count: 7 }
                    ].map((archive) => (
                      <Link
                        key={archive.month}
                        to="/blog"
                        className="flex justify-between items-center px-3 py-2 rounded-lg hover:bg-base-200 transition-colors text-base-content/80 hover:text-primary"
                      >
                        <span className="text-sm">{archive.month}</span>
                        <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                          {archive.count}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Tags Cloud */}
                <div className="bg-base-100 rounded-2xl shadow-lg p-6 border border-base-200/50">
                  <h3 className="text-xl font-bold text-base-content mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Investment", "Retirement", "Tax Planning", "Insurance", 
                      "Estate Planning", "Financial Planning", "Wealth Management", 
                      "Budgeting", "Debt Management", "Real Estate"
                    ].map((tag) => (
                      <Link
                        key={tag}
                        to="/blog"
                        className="text-xs bg-base-200 hover:bg-primary hover:text-primary-content text-base-content/70 hover:text-primary-content px-3 py-1 rounded-full transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Author Bio */}
                <div className="bg-base-100 rounded-2xl shadow-lg p-6 border border-base-200/50">
                  <h3 className="text-xl font-bold text-base-content mb-4">About Author</h3>
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <span className="text-primary font-bold text-2xl">
                        {post.author.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                    <h4 className="font-semibold text-base-content mb-2">{post.author}</h4>
                    <p className="text-sm text-base-content/70 mb-4">
                      Senior Financial Consultant with over 15 years of experience in wealth management and financial planning.
                    </p>
                    <div className="flex justify-center gap-2">
                      <button className="w-8 h-8 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-full flex items-center justify-center transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </button>
                      <button className="w-8 h-8 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full flex items-center justify-center transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </button>
                      <button className="w-8 h-8 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-full flex items-center justify-center transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Social Media Selection */}
                <div className="bg-base-100 rounded-2xl shadow-lg p-6 border border-base-200/50">
                  <h3 className="text-xl font-bold text-base-content mb-4">Follow Us</h3>
                  <div className="space-y-3">
                    <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-base-200 transition-colors group">
                      <div className="w-10 h-10 bg-blue-100 group-hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors">
                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-base-content group-hover:text-primary transition-colors">Facebook</h4>
                        <p className="text-sm text-base-content/60">Join our community</p>
                      </div>
                      <svg className="w-4 h-4 text-base-content/40 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>

                    <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-base-200 transition-colors group">
                      <div className="w-10 h-10 bg-blue-100 group-hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors">
                        <svg className="w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-base-content group-hover:text-primary transition-colors">LinkedIn</h4>
                        <p className="text-sm text-base-content/60">Professional network</p>
                      </div>
                      <svg className="w-4 h-4 text-base-content/40 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>

                    <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-base-200 transition-colors group">
                      <div className="w-10 h-10 bg-blue-100 group-hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors">
                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-base-content group-hover:text-primary transition-colors">Twitter</h4>
                        <p className="text-sm text-base-content/60">Latest updates</p>
                      </div>
                      <svg className="w-4 h-4 text-base-content/40 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>

                    <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-base-200 transition-colors group">
                      <div className="w-10 h-10 bg-red-100 group-hover:bg-red-200 rounded-full flex items-center justify-center transition-colors">
                        <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-base-content group-hover:text-primary transition-colors">Pinterest</h4>
                        <p className="text-sm text-base-content/60">Visual inspiration</p>
                      </div>
                      <svg className="w-4 h-4 text-base-content/40 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>

                    <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-base-200 transition-colors group">
                      <div className="w-10 h-10 bg-gray-100 group-hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
                        <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-base-content group-hover:text-primary transition-colors">Instagram</h4>
                        <p className="text-sm text-base-content/60">Visual stories</p>
                      </div>
                      <svg className="w-4 h-4 text-base-content/40 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-base-100 rounded-2xl shadow-lg p-6 border border-base-200/50">
                  <h3 className="text-xl font-bold text-base-content mb-4">Get In Touch</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-sm text-base-content/80">info@kinwits.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <span className="text-sm text-base-content/80">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <span className="text-sm text-base-content/80">123 Financial St, City</span>
                    </div>
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-br from-primary to-primary-focus rounded-2xl shadow-lg p-6 text-primary-content">
                  <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
                  <p className="text-primary-content/80 text-sm mb-4">
                    Get the latest financial insights delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/70"
                    />
                    <button className="w-full bg-white text-primary font-semibold py-3 rounded-xl hover:bg-white/90 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default BlogPost;
