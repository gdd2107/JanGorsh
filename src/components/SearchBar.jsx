// src/components/SearchBar.jsx
import React from 'react';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search stories" />
      <span className="search-icon">🔍</span>
    </div>
  );
};

export default SearchBar;