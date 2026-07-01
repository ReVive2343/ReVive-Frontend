import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES, DUMMY_PRODUCTS } from '../data/mockData';
import './Home.css';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const displayedProducts = selectedCategory 
    ? DUMMY_PRODUCTS.filter(p => p.category === selectedCategory)
    : DUMMY_PRODUCTS;

  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <h1>Give items a second life.</h1>
            <p>Donate pre-loved items in your local community.</p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Start Exploring</button>
            </div>
          </div>
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

      {/* Recent Listings Section */}
      <section className="recent-listings-section container">
        <div className="section-header flex justify-between items-center">
          <h2 className="section-title">
            {selectedCategory ? `${selectedCategory} Near You` : 'Fresh Listings Near You'}
          </h2>
          <a href="/search" className="view-all-link">View all →</a>
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
                  <p className="product-location">{product.location}</p>
                  <div className="product-footer flex justify-between items-center">
                    <button className="btn btn-primary btn-sm">Add</button>
                    <Link to={`/product/${product.id}`} className="btn btn-secondary btn-sm">View</Link>
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
    </div>
  );
};

export default Home;
