import { renderHook, act } from '@testing-library/react';
import { useBlogFilter } from '../useBlogFilter';

// Mock the blog data
jest.mock('@/data/blogData', () => ({
  allBlogPosts: [
    {
      id: 1,
      title: 'Financial Planning Strategies',
      excerpt: 'Learn about financial planning',
      author: 'John Doe',
      category: 'Financial Planning',
      slug: 'financial-planning',
    },
    {
      id: 2,
      title: 'Tax Optimization Guide',
      excerpt: 'Optimize your taxes',
      author: 'Jane Smith',
      category: 'Tax Planning',
      slug: 'tax-optimization',
    },
  ],
}));

describe('useBlogFilter', () => {
  it('should initialize with default values', () => {
    const { result } = renderHook(() => useBlogFilter());
    
    expect(result.current.selectedCategory).toBe('All');
    expect(result.current.searchTerm).toBe('');
    expect(result.current.filteredPosts).toHaveLength(2);
    expect(result.current.hasActiveFilters).toBe(false);
  });

  it('should filter by category', () => {
    const { result } = renderHook(() => useBlogFilter());
    
    act(() => {
      result.current.setSelectedCategory('Financial Planning');
    });
    
    expect(result.current.selectedCategory).toBe('Financial Planning');
    expect(result.current.filteredPosts).toHaveLength(1);
    expect(result.current.filteredPosts[0].title).toBe('Financial Planning Strategies');
    expect(result.current.hasActiveFilters).toBe(true);
  });

  it('should filter by search term', () => {
    const { result } = renderHook(() => useBlogFilter());
    
    act(() => {
      result.current.setSearchTerm('tax');
    });
    
    expect(result.current.searchTerm).toBe('tax');
    expect(result.current.filteredPosts).toHaveLength(1);
    expect(result.current.filteredPosts[0].title).toBe('Tax Optimization Guide');
    expect(result.current.hasActiveFilters).toBe(true);
  });

  it('should combine category and search filters', () => {
    const { result } = renderHook(() => useBlogFilter());
    
    act(() => {
      result.current.setSelectedCategory('Financial Planning');
      result.current.setSearchTerm('planning');
    });
    
    expect(result.current.filteredPosts).toHaveLength(1);
    expect(result.current.filteredPosts[0].title).toBe('Financial Planning Strategies');
  });

  it('should reset filters', () => {
    const { result } = renderHook(() => useBlogFilter());
    
    // Set some filters
    act(() => {
      result.current.setSelectedCategory('Financial Planning');
      result.current.setSearchTerm('test');
    });
    
    expect(result.current.hasActiveFilters).toBe(true);
    
    // Reset filters
    act(() => {
      result.current.resetFilters();
    });
    
    expect(result.current.selectedCategory).toBe('All');
    expect(result.current.searchTerm).toBe('');
    expect(result.current.hasActiveFilters).toBe(false);
    expect(result.current.filteredPosts).toHaveLength(2);
  });

  it('should initialize with custom values', () => {
    const { result } = renderHook(() => 
      useBlogFilter({
        initialCategory: 'Tax Planning',
        initialSearchTerm: 'optimization'
      })
    );
    
    expect(result.current.selectedCategory).toBe('Tax Planning');
    expect(result.current.searchTerm).toBe('optimization');
    expect(result.current.filteredPosts).toHaveLength(1);
    expect(result.current.hasActiveFilters).toBe(true);
  });
});
