// src/components/TestimonialsSection.jsx
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    { id: 1, text: "Do A Sporting Stag Do In Birmingham" },
    { id: 2, text: "From Wetlands To Canals And Dams Amsterdam Is Alive" },
    { id: 3, text: "Stu Unger Rise And Fall Of A Poker Genius" },
    { id: 4, text: "New Ideas For A Low Cost Vacation On Water" },
  ];

  return (
    <section className="testimonials-section">
      {/* Левая колонка — статья в карточке с фоном */}
      <div className="article-card">
        <div className="article-overlay"></div>
        <div className="article-content">
          <button className="featured-badge">FEATURED</button>
          <h2 className="article-title">How To Fly A Private Jet On Your Next Trip</h2>
          <p className="article-text">
            The state of Utah in the United States is home to lots of beautiful National Parks, & Bryce Canyon National Park ranks as three of the most magnificent & awe inspiring.
          </p>
          <button className="read-article-btn">READ ARTICLE</button>
        </div>
      </div>

      {/* Правая колонка — отзывы */}
      <div className="testimonials-side">
        <h3 className="testimonials-title">Featured Stories</h3>
        <div className="testimonials-list">
          {testimonials.map((item) => (
            <div className="testimonial-card" key={item.id}>
              <div className="avatar-placeholder"></div>
              <div className="testimonial-content">
                <p className="testimonial-text">{item.text}</p>
                <p className="testimonial-date">December 3, 2019</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;