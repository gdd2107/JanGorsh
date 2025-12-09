import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import TravelCardsSection from './components/TravelCardsSection';
import TestimonialsSection from './components/TestimonialsSection';
import VideoSliderSection from './components/VideoSliderSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <TravelCardsSection />
      <TestimonialsSection />
      <VideoSliderSection />
      <Footer />
    </>
  );
}

export default App;