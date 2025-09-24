# Custom Hooks

This directory contains reusable custom hooks for the application.

## useBlogFilter

A custom hook for filtering blog posts by category and search term.

### Usage

```jsx
import { useBlogFilter } from '@/common/hooks/useBlogFilter';

const MyComponent = () => {
  const {
    selectedCategory,
    searchTerm,
    filteredPosts,
    setSelectedCategory,
    setSearchTerm,
    resetFilters,
    hasActiveFilters,
    totalPosts,
    filteredCount,
  } = useBlogFilter({
    initialCategory: 'All',
    initialSearchTerm: '',
    syncWithURL: false
  });

  return (
    <div>
      {/* Your component JSX */}
    </div>
  );
};
```

### Options

- `initialCategory` (string, default: "All"): Initial category filter
- `initialSearchTerm` (string, default: ""): Initial search term
- `syncWithURL` (boolean, default: false): Whether to sync category with URL parameters

### Returns

- `selectedCategory`: Current selected category
- `searchTerm`: Current search term
- `filteredPosts`: Array of filtered blog posts
- `setSelectedCategory`: Function to update category (with URL sync if enabled)
- `setSearchTerm`: Function to update search term
- `resetFilters`: Function to reset all filters to initial values
- `hasActiveFilters`: Boolean indicating if any filters are active
- `totalPosts`: Total number of posts
- `filteredCount`: Number of filtered posts

### Features

- **Memoized filtering**: Uses `useMemo` to avoid unnecessary recalculations
- **URL synchronization**: Optional URL parameter sync for category filtering
- **Search functionality**: Searches across title, excerpt, and author fields
- **Helper functions**: Includes utility functions for common operations
- **Type safety**: Full TypeScript support (when using TypeScript)

### Examples

#### Basic usage
```jsx
const { filteredPosts, setSelectedCategory, setSearchTerm } = useBlogFilter();
```

#### With URL synchronization
```jsx
const { selectedCategory, setSelectedCategory } = useBlogFilter({
  syncWithURL: true
});
```

#### With custom initial values
```jsx
const { filteredPosts } = useBlogFilter({
  initialCategory: 'Investment',
  initialSearchTerm: 'portfolio'
});
```
