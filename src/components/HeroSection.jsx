// src/components/HeroSection.jsx
import React from 'react';
import SearchBar from './SearchBar'; // ← импорт поиска

const HeroSection = () => {
  return (
    <div className="hero-section">
      <h1 className="hero-title">
        Mother Earth<br />
        Hosts Our<br />
        Travels
      </h1>
      <p className="hero-text">
        There are not many cities that have experienced such social and political extremes in recent history as Amsterdam. In the 20th century alone, Amsterdam faced the atrocities of war for the first time in 400 years, became the radical center of 1960s social movements and witnessed a complete
      </p>
      <button className="hero-button">BUY THE BOOK</button>
      <SearchBar /> {/* ← вставляем сюда */}
    </div>
  );
};

export default HeroSection;