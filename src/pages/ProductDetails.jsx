import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, User, Heart, Share2, MessageCircle, ShieldCheck } from 'lucide-react';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);

  // Mock data for Sprint 1
  const product = {
    id: id || '1',
    title: 'Vintage Leather Jacket',
    price: 45.00,
    category: 'Clothes',
    location: 'Downtown, Springfield',
    description: 'Beautiful vintage leather jacket from the 80s. Genuine leather, well-maintained. Has a small scuff on the right sleeve but otherwise in perfect condition. Great for autumn weather.',
    seller: {
      name: 'Alex Johnson',
      rating: 4.8,
      joined: 'Member since 2023'
    },
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520975954732-57dd22299614?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1489987707023-afc824781682?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ]
  };

  return (
    <div className="container animate-fade-in product-details-container">
      <div className="product-layout">
        
        {/* Left Column - Images */}
        <div className="product-images-section">
          <div className="main-image-container card">
            <img src={product.images[activeImage]} alt={product.title} className="main-image" />
          </div>
          <div className="thumbnail-list">
            {product.images.map((img, index) => (
              <button 
                key={index} 
                className={`thumbnail-btn ${activeImage === index ? 'active' : ''}`}
                onClick={() => setActiveImage(index)}
              >
                <img src={img} alt={`Thumbnail ${index + 1}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column - Info */}
        <div className="product-info-section">
          <div className="breadcrumb">
            Home &gt; {product.category} &gt; {product.title}
          </div>
          
          <h1 className="product-page-title">{product.title}</h1>
          
          <div className="product-price-large">
            ${product.price.toFixed(2)}
          </div>
          
          <div className="product-meta flex items-center gap-md">
            <div className="meta-item flex items-center">
              <MapPin size={16} />
              <span>{product.location}</span>
            </div>
          </div>

          <div className="action-buttons flex gap-sm">
            <button className="btn btn-primary flex-1 flex justify-center items-center gap-sm">
              <MessageCircle size={18} /> Chat with Seller
            </button>
            <button className="btn btn-secondary icon-btn" title="Add to Wishlist">
              <Heart size={20} />
            </button>
            <button className="btn btn-secondary icon-btn" title="Share">
              <Share2 size={20} />
            </button>
          </div>

          <div className="product-description card glass mt-lg">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>

          <div className="seller-info card glass mt-md">
            <h3>About the Seller</h3>
            <div className="seller-profile flex items-center gap-md mt-sm">
              <div className="seller-avatar">
                <User size={24} />
              </div>
              <div className="seller-details flex-1">
                <div className="seller-name">{product.seller.name}</div>
                <div className="seller-rating">⭐ {product.seller.rating} / 5.0</div>
              </div>
            </div>
            <div className="safety-tip flex items-center gap-sm mt-md">
              <ShieldCheck size={18} className="text-success" />
              <span className="text-sm">Never pay in advance. Inspect the item in person.</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
