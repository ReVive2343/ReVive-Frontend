import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Search, Quote } from 'lucide-react';
import HeroCarousel from '../components/HeroCarousel';
import { CATEGORIES, DUMMY_PRODUCTS } from '../data/mockData';
import volunteerImg from '../assets/volunteer.jpg';
import './Home.css';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const displayedProducts = selectedCategory 
    ? DUMMY_PRODUCTS.filter(p => p.category === selectedCategory)
    : DUMMY_PRODUCTS;

  return (
    <div className="home-page animate-fade-in">
      <HeroCarousel />

      {/* Quick Actions Section */}
      <section className="quick-actions-section container">
        <div className="action-cards-container">
          <Link to="/add-product" className="action-card card donate-card">
            <div className="action-icon-wrapper">
              <Heart size={40} className="action-icon" />
            </div>
            <div className="action-text">
              <h2>Donate an Item</h2>
              <p>Give your items a second life</p>
            </div>
          </Link>
          
          <Link to="/search" className="action-card card browse-card">
            <div className="action-icon-wrapper">
              <Search size={40} className="action-icon" />
            </div>
            <div className="action-text">
              <h2>Browse Donations</h2>
              <p>Find what you need locally</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Categories Section (Epic 4: US-014 to US-020) */}
      <section className="categories-section container">
        <h2 className="section-title">Explore Categories</h2>
        <div className="categories-grid">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.name;
            return (
              <div 
                key={cat.id} 
                className={`category-card card flex-col items-center justify-center ${isActive ? 'active-category' : ''}`}
                onClick={() => setSelectedCategory(isActive ? null : cat.name)}
                style={isActive ? { borderColor: cat.color, boxShadow: `0 0 0 2px ${cat.color}30` } : {}}
              >
                <div className="category-icon-wrapper" style={{ backgroundColor: `${cat.color}20`, color: cat.color }}>
                  <Icon size={32} />
                </div>
                <span className="category-name">{cat.name}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Donations Section */}
      <section className="featured-donations-section container">
        <div className="section-header flex justify-between items-center">
          <h2 className="section-title">
            {selectedCategory ? `${selectedCategory} Near You` : 'Featured Donations'}
          </h2>
          <Link to="/search" className="view-all-link">View all →</Link>
        </div>
        
        <div className="products-grid">
          {displayedProducts.length > 0 ? (
            displayedProducts.map(product => (
              <div key={product.id} className="product-card card">
                <div className="product-image-container">
                  <img src={product.image} alt={product.title} className="product-image" />
                  <span className="product-category-badge">{product.category}</span>
                </div>
                <div className="product-details">
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-condition">{product.condition} Condition</p>
                  <p className="product-location">{product.location}</p>
                  <div className="product-footer flex justify-center items-center mt-sm">
                    <Link to={`/product/${product.id}`} className="btn btn-primary btn-sm w-full" style={{ width: '100%' }}>Request Item</Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-products-msg" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>
              No items found in {selectedCategory} yet.
            </div>
          )}
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="volunteer-section container">
        <div className="volunteer-card card glass">
          <div className="volunteer-content">
            <h2>Become a Volunteer</h2>
            <p>Help us connect donors with people in need. Volunteers play an important role in collecting, verifying, and distributing donated items.</p>
            <button className="btn btn-primary">Join as Volunteer</button>
          </div>
          <div className="volunteer-image-container">
            <img src={volunteerImg} alt="Volunteers helping" className="volunteer-image" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section container">
        <h2 className="section-title" style={{ textAlign: 'center' }}>Community Stories</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card card glass">
            <Quote size={32} className="quote-icon" />
            <p className="testimonial-text">"ReVive helped me receive a wheelchair for my father. The process was simple and heartwarming."</p>
            <div className="testimonial-author">
              <div className="author-avatar">S</div>
              <div className="author-info">
                <h4>Sunita M.</h4>
                <span>Bhubaneswar</span>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card card glass">
            <Quote size={32} className="quote-icon" />
            <p className="testimonial-text">"I had so many children's books sitting in my attic. Seeing them go to a local school library was incredible."</p>
            <div className="testimonial-author">
              <div className="author-avatar">R</div>
              <div className="author-info">
                <h4>Rahul D.</h4>
                <span>Donor</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="cta-section container">
        <div className="cta-card card">
          <h2>Your Unused Item Could Change Someone's Life</h2>
          <p>Instead of throwing useful items away, donate them through ReVive and make a positive impact on your community.</p>
          <div className="cta-buttons">
            <Link to="/add-product" className="btn btn-primary cta-btn">Donate Now</Link>
            <Link to="/search" className="btn btn-secondary cta-btn">Browse Donations</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
