import React, { useState } from 'react';
import { Upload, X, MapPin, DollarSign, Tag, AlignLeft } from 'lucide-react';
import './AddProduct.css';

const AddProduct = () => {
  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map(file => ({
      url: URL.createObjectURL(file),
      file
    }));
    setImages(prev => [...prev, ...newImages].slice(0, 5)); // max 5 images
  };

  const removeImage = (index) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting product with", images.length, "images");
  };

  return (
    <div className="container animate-fade-in add-product-container">
      <div className="header-section">
        <h2>List a New Item</h2>
        <p>Provide details about the item you want to sell or donate.</p>
      </div>

      <form className="add-product-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          
          {/* Left Column - Details */}
          <div className="form-column">
            <div className="card glass form-card">
              <h3>Item Details</h3>
              
              <div className="input-group">
                <label>Title</label>
                <input type="text" required placeholder="e.g. Vintage Leather Jacket" className="input-field" />
              </div>

              <div className="form-row">
                <div className="input-group flex-1">
                  <label>Price ($)</label>
                  <div className="input-with-icon">
                    <DollarSign size={18} className="input-icon" />
                    <input type="number" required min="0" step="0.01" placeholder="0.00" className="input-field" />
                  </div>
                  <span className="helper-text">Enter 0 to list as a Donation.</span>
                </div>
                
                <div className="input-group flex-1">
                  <label>Category</label>
                  <div className="input-with-icon">
                    <Tag size={18} className="input-icon" />
                    <select required className="input-field select-field">
                      <option value="">Select category...</option>
                      <option value="books">Books</option>
                      <option value="electronics">Electronics</option>
                      <option value="furniture">Furniture</option>
                      <option value="clothes">Clothes</option>
                      <option value="sports">Sports</option>
                      <option value="tools">Tools</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="input-group">
                <label>Location</label>
                <div className="input-with-icon">
                  <MapPin size={18} className="input-icon" />
                  <input type="text" required placeholder="Neighborhood, City, or Zip" className="input-field" />
                </div>
              </div>

              <div className="input-group">
                <label>Description</label>
                <div className="textarea-with-icon">
                  <AlignLeft size={18} className="input-icon textarea-icon" />
                  <textarea required rows="4" placeholder="Describe the condition, features, and reason for selling..." className="input-field"></textarea>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="form-column">
            <div className="card glass form-card">
              <h3>Photos (Epic 5)</h3>
              <p className="helper-text mb-md">Upload up to 5 images. The first image will be the cover.</p>
              
              <div className="image-upload-area">
                <input 
                  type="file" 
                  id="image-upload" 
                  multiple 
                  accept="image/*" 
                  onChange={handleImageUpload} 
                  className="hidden-input"
                />
                <label htmlFor="image-upload" className="upload-label">
                  <Upload size={32} />
                  <span>Click to browse or drag & drop</span>
                  <span className="supported-formats">PNG, JPG, WEBP up to 5MB</span>
                </label>
              </div>

              {images.length > 0 && (
                <div className="image-preview-grid">
                  {images.map((img, index) => (
                    <div key={index} className="image-preview-item">
                      <img src={img.url} alt={`Preview ${index}`} />
                      <button 
                        type="button" 
                        className="remove-img-btn"
                        onClick={() => removeImage(index)}
                      >
                        <X size={14} />
                      </button>
                      {index === 0 && <span className="cover-badge">Cover</span>}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="submit-section">
              <button type="button" className="btn btn-secondary flex-1">Cancel</button>
              <button type="submit" className="btn btn-primary flex-2">Publish Listing</button>
            </div>
          </div>

        </div>
      </form>
    </div>
  );
};

export default AddProduct;
