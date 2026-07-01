import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Laptop, Sofa, Shirt, Trophy, Wrench, Package } from 'lucide-react';
import './Home.css';

const CATEGORIES = [
  { id: 'books', name: 'Books', icon: BookOpen, color: '#3b82f6' },
  { id: 'electronics', name: 'Electronics', icon: Laptop, color: '#8b5cf6' },
  { id: 'furniture', name: 'Furniture', icon: Sofa, color: '#f59e0b' },
  { id: 'clothes', name: 'Clothes', icon: Shirt, color: '#ec4899' },
  { id: 'sports', name: 'Sports', icon: Trophy, color: '#10b981' },
  { id: 'tools', name: 'Tools', icon: Wrench, color: '#64748b' },
  { id: 'others', name: 'Others', icon: Package, color: '#f43f5e' },
];

const DUMMY_PRODUCTS = [
  { id: 1, title: 'Vintage Leather Jacket', price: 45, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', location: 'Downtown', category: 'Clothes' },
  { id: 2, title: 'MacBook Pro 2021', price: 950, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', location: 'Westside', category: 'Electronics' },
  { id: 3, title: 'Wooden Coffee Table', price: 120, image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', location: 'North Area', category: 'Furniture' },
  { id: 4, title: 'Mountain Bike', price: 250, image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', location: 'Eastside', category: 'Sports' }
];

const Home = () => {
  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <h1>Give items a second life.</h1>
            <p>Buy, sell, or donate pre-loved items in your local community.</p>
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
            return (
              <div key={cat.id} className="category-card card flex-col items-center justify-center">
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
          <h2 className="section-title">Fresh Listings Near You</h2>
          <a href="/search" className="view-all-link">View all →</a>
        </div>
        
        <div className="products-grid">
          {DUMMY_PRODUCTS.map(product => (
            <div key={product.id} className="product-card card">
              <div className="product-image-container">
                <img src={product.image} alt={product.title} className="product-image" />
                <span className="product-category-badge">{product.category}</span>
              </div>
              <div className="product-details">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-location">{product.location}</p>
                <div className="product-footer flex justify-between items-center">
                  <span className="product-price">${product.price}</span>
                  <Link to={`/product/${product.id}`} className="btn btn-secondary btn-sm">View</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
