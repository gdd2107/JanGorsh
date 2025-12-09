import React, { useState, useEffect } from 'react';

const VideoSliderSection = () => {
  const slides = [
    { 
      id: 1, 
      image: "/src/assets/images/mountain.jpg", 
      alt: "Mountain View 1" 
    },
    { 
      id: 2, 
      image: "/src/assets/images/hero-bg.jpg", 
      alt: "Main View" 
    },
    { 
      id: 3, 
      image: "/src/assets/images/mountain.jpg", 
      alt: "Mountain View 2" 
    },
    { 
      id: 4, 
      image: "/src/assets/images/hero-bg.jpg", 
      alt: "Mountain View 3" 
    },
    { 
      id: 5, 
      image: "/src/assets/images/mountain.jpg", 
      alt: "Mountain View 4" 
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(2); // Начинаем с центрального слайда
  const [visibleSlides, setVisibleSlides] = useState([]);

  // Функция для получения видимых слайдов
  const getVisibleSlides = () => {
    const result = [];
    
    // Предыдущий слайд (левый)
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    result.push({ ...slides[prevIndex], position: 'left' });
    
    // Текущий слайд (центральный)
    result.push({ ...slides[currentIndex], position: 'center' });
    
    // Следующий слайд (правый)
    const nextIndex = (currentIndex + 1) % slides.length;
    result.push({ ...slides[nextIndex], position: 'right' });
    
    return result;
  };

  // Обновляем видимые слайды при изменении currentIndex
  useEffect(() => {
    setVisibleSlides(getVisibleSlides());
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <section className="video-slider-section">
      <div className="slider-header">
        <h2 className="slider-title">A Guide To Rocky Mountain Vacations</h2>
        <p className="slider-text">
          The state of Utah in the United States is home to lots of beautiful National Parks, & Bryce Canyon National Park ranks as three of the most magnificent & awe inspiring.
        </p>
      </div>

      <div className="slider-container">
        <div className="carousel-wrapper">
          <div className="carousel-track">
            {visibleSlides.map((slide, index) => (
              <div 
                key={`${slide.id}-${index}`} 
                className={`slide-item slide-${slide.position}`}
              >
                <div className="slide-image">
                  <img src={slide.image} alt={slide.alt} />
                </div>
              </div>
            ))}
          </div>
          
          <button className="slider-arrow prev-arrow" onClick={prevSlide}>‹</button>
          <button className="slider-arrow next-arrow" onClick={nextSlide}>›</button>
        </div>
        
        {/* Индикаторы слайдов */}
        <div className="slider-indicators">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              className={`slider-indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSliderSection;