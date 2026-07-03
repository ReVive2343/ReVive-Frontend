import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Hash, Share2, Camera } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        
        <div className="footer-links-group">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/search">Browse Donations</Link></li>
            <li><Link to="/add-product">Donate Item</Link></li>
            <li><Link to="#">Volunteer</Link></li>
            <li><Link to="#">About Us</Link></li>
            <li><Link to="#">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-links-group">
          <h3>Support</h3>
          <ul>
            <li><Link to="#">FAQs</Link></li>
            <li><Link to="#">Privacy Policy</Link></li>
            <li><Link to="#">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div className="footer-links-group contact-group">
          <h3>Contact</h3>
          <ul>
            <li><Mail size={16} /> <span>Email</span></li>
            <li><Phone size={16} /> <span>Phone</span></li>
            <li><MapPin size={16} /> <span>Address</span></li>
          </ul>
        </div>

        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <Heart size={24} className="text-primary" fill="currentColor" />
            <span>ReVive</span>
          </Link>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><Hash size={20} /></a>
            <a href="#" aria-label="Twitter"><Share2 size={20} /></a>
            <a href="#" aria-label="Instagram"><Camera size={20} /></a>
          </div>
        </div>
        
      </div>
      
      <div className="footer-bottom">
        <div className="container footer-bottom-content flex justify-center text-center">
          <p>&copy; 2026 ReVive. Building a Sustainable Community Through Donations.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
