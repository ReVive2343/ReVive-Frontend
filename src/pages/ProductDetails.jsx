import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, User, Heart, Share2, MessageCircle, ShieldCheck } from 'lucide-react';
import { DUMMY_PRODUCTS } from '../data/mockData';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://reviveapi.defigo.in/products/${id}`);
        if (response.ok) {
          const data = await response.json();
          setProduct(data);
        } else {
          // Fallback to mock data if not found
          setProduct(DUMMY_PRODUCTS.find(p => p.id.toString() === id) || DUMMY_PRODUCTS[0]);
        }
      } catch (error) {
        console.error("Error fetching product, falling back to mock data:", error);
        setProduct(DUMMY_PRODUCTS.find(p => p.id.toString() === id) || DUMMY_PRODUCTS[0]);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="container animate-fade-in product-details-container flex justify-center items-center" style={{ minHeight: '50vh' }}>
        <div className="loading-spinner">Loading product details...</div>
      </div>
    );
  }

  if (!product) {
    return <div className="container mt-xl text-center">Product not found.</div>;
  }

  // Ensure images array exists
  const images = product.images && product.images.length > 0 
    ? product.images 
    : [product.image || 'https://via.placeholder.com/600'];

  return (
    <div className="container animate-fade-in product-details-container">
      <div className="product-layout">
        
        {/* Left Column - Images */}
        <div className="product-images-section">
          <div className="main-image-container card">
            <img src={images[activeImage]} alt={product.title} className="main-image" />
          </div>
          {images.length > 1 && (
            <div className="thumbnail-list">
              {images.map((img, index) => (
                <button 
                  key={index} 
                  className={`thumbnail-btn ${activeImage === index ? 'active' : ''}`}
                  onClick={() => setActiveImage(index)}
                >
                  <img src={img} alt={`Thumbnail ${index + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column - Info */}
        <div className="product-info-section">
          <div className="breadcrumb">
            Home &gt; {product.category} &gt; {product.title}
          </div>
          
          <h1 className="product-page-title">{product.title}</h1>
          
          <div className="product-meta flex items-center gap-md">
            <div className="meta-item flex items-center">
              <MapPin size={16} />
              <span>{product.location}</span>
            </div>
          </div>

          <div className="action-buttons flex gap-sm">
            <button className="btn btn-primary flex-1 flex justify-center items-center gap-sm">
              <MessageCircle size={18} /> Chat with Donor
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
            <h3>About the Donor</h3>
            <div className="seller-profile flex items-center gap-md mt-sm">
              <div className="seller-avatar">
                <User size={24} />
              </div>
              <div className="seller-details flex-1">
                <div className="seller-name">{product.donor?.name || 'Anonymous Donor'}</div>
                <div className="seller-rating">⭐ {product.donor?.rating || 'New'} / 5.0</div>
              </div>
            </div>
            <div className="safety-tip flex items-center gap-sm mt-md">
              <ShieldCheck size={18} className="text-success" />
              <span className="text-sm">Always meet in a public place. Inspect the item in person.</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
