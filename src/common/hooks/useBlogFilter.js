import { useState, useEffect, useMemo } from "react";
import { allBlogPosts } from "@/data/blogData";

/**
 * Custom hook for filtering blog posts by category and search term
 * @param {Object} options - Configuration options
 * @param {string} options.initialCategory - Initial category filter (default: "All")
 * @param {string} options.initialSearchTerm - Initial search term (default: "")
 * @param {boolean} options.syncWithURL - Whether to sync category with URL params (default: false)
 * @returns {Object} Filter state and filtered posts
 */
export const useBlogFilter = ({ 
  initialCategory = "All", 
  initialSearchTerm = "",
  syncWithURL = false 
} = {}) => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);

  // Sync category with URL search params if enabled
  useEffect(() => {
    if (syncWithURL) {
      const urlParams = new URLSearchParams(window.location.search);
      const category = urlParams.get("category");
      if (category) {
        setSelectedCategory(category);
      }
    }
  }, [syncWithURL]);

  // Memoized filtered posts to avoid unnecessary recalculations
  const filteredPosts = useMemo(() => {
    return allBlogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  // Helper function to reset filters
  const resetFilters = () => {
    setSelectedCategory(initialCategory);
    setSearchTerm(initialSearchTerm);
  };

  // Helper function to set category and update URL if syncWithURL is enabled
  const setCategoryWithURLSync = (category) => {
    setSelectedCategory(category);
    
    if (syncWithURL) {
      const url = new URL(window.location);
      if (category === "All") {
        url.searchParams.delete("category");
      } else {
        url.searchParams.set("category", category);
      }
      window.history.replaceState({}, "", url);
    }
  };

  return {
    // State
    selectedCategory,
    searchTerm,
    filteredPosts,
    
    // Actions
    setSelectedCategory: setCategoryWithURLSync,
    setSearchTerm,
    resetFilters,
    
    // Computed values
    hasActiveFilters: selectedCategory !== "All" || searchTerm !== "",
    totalPosts: allBlogPosts.length,
    filteredCount: filteredPosts.length,
  };
};

export default useBlogFilter;
