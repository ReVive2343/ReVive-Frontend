import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import banner1 from '../assets/banner_donate_today_1783060006371.jpg';
import banner2 from '../assets/banner_reduce_waste_1783060016969.jpg';
import banner3 from '../assets/banner_creates_hope_1783060034225.jpg';
import banner4 from '../assets/banner_give_need_1783060050407.jpg';
import './HeroCarousel.css';

const banners = [
  {
    id: 1,
    image: banner1,
    title: "Donate Today, Change Someone's Tomorrow",
    subtitle: "Be a part of a community that gives back.",
  },
  {
    id: 2,
    image: banner2,
    title: "Reduce Waste. Reuse with Purpose.",
    subtitle: "Help the environment by giving items a second life.",
  },
  {
    id: 3,
    image: banner3,
    title: "Every Donation Creates Hope",
    subtitle: "Your pre-loved items can make someone's day.",
  },
  {
    id: 4,
    image: banner4,
    title: "Give What You Don't Need, Help Someone Who Does",
    subtitle: "Join the movement of mindful consumption.",
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-carousel-section">
      <div className="carousel-container">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${banner.image})` }}
          >
            <div className="carousel-overlay">
              <div className="container carousel-content">
                <h1 className="carousel-title">{banner.title}</h1>
                <p className="carousel-subtitle">{banner.subtitle}</p>
                <div className="carousel-buttons">
                  <Link to="/add-product" className="btn btn-primary">Donate Now</Link>
                  <Link to="/search" className="btn btn-secondary glass-btn">Explore Donations</Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Dots */}
        <div className="carousel-indicators">
          {banners.map((_, index) => (
            <button
              key={index}
              className={`indicator-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
