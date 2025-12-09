import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const FeaturedCard = () => {
  return (
    <div className="featured-card">
      <div className="nav-icon left">
        <FaChevronLeft />
      </div>
      <div className="card-title">Featured</div>
      <div className="nav-icon right">
        <FaChevronRight />
      </div>
    </div>
  );
};

export default FeaturedCard;