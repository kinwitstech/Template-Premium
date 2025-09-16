import React from "react";
import { Link } from "@tanstack/react-router";

const blogPosts = [
  {
    id: 1,
    slug: "financial-planning-strategies-small-businesses",
    title: "Financial Planning Strategies for Small Businesses",
    excerpt: "Discover effective financial planning strategies that can help small businesses optimize their cash flow and improve profitability.",
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
    excerpt: "A comprehensive guide to diversifying your investment portfolio to minimize risk and maximize returns in today's market.",
    author: "Emily Rodriguez",
    date: "March 5, 2024",
    category: "Investment",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  }
];

export default function BlogSection() {

  return (
    <section className="bg-base-100 w-full">
      <div className="section-container section-padding flex-col gap-8">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <p className="section-badge">Latest Insights</p>
            <h1 className="section-title">
              Financial Insights & Updates
            </h1>
            <p className="text-base-content/80 mt-4 max-w-2xl">
              Stay informed with our latest articles on financial planning, tax strategies, and investment insights.
            </p>
          </div>
          <Link to="/blog" className="btn btn-primary">
            View All Posts
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="group">
              <Link to={`/blog/${post.slug}`}>
                <div className="bg-base-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="badge badge-primary">{post.category}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-base-content/60 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-base-content group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-base-content/70 mb-4 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-semibold text-sm">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-base-content">{post.author}</span>
                    </div>
                    
                    <span className="text-primary hover:text-primary-focus font-medium text-sm group-hover:translate-x-1 transition-transform">
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