import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
import  Button  from './Button';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1920&q=80',
      title: 'CONNECTING YOU TO THE WORLD, ONE SHIPMENT AT A TIME'
    },
    {
      image: 'https://images.unsplash.com/photo-1606964212858-c215029db704?w=1920&q=80',
      title: 'YOUR TRUSTED LOGISTIC PARTNER IN WORLDWIDE SMART WAY'
    },
    {
      image: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1920&q=80',
      title: 'DELIVERING SPEED, RELIABILITY AND EXCELLENCE'
    },
    {
      image: 'https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?w=1920&q=80',
      title: 'FAST AND SECURE GLOBAL SHIPPING SOLUTIONS'
    },
    {
      image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?w=1920&q=80',
      title: 'OPTIMIZE YOUR BUSINESS WITH OUR LOGISTICS EXPERTISE'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div id="home" className="relative h-screen w-full overflow-hidden mt-20">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center px-4 max-w-5xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                {slide.title}
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-6 text-lg"
                >
                  DISCOVER MORE
                </Button>
                <Button
                  size="lg"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 text-lg"
                >
                  LOGIN
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
      >
        <ChevronRight size={24} />
      </button> */}

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-emerald-500 w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;