import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, User, PlusCircle, LogIn } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // In Sprint 1, search can just log or route to a dummy results page
    const query = e.target.search.value;
    console.log("Searching for:", query);
  };

  return (
    <nav className="navbar glass">
      <div className="container navbar-container">
        <Link to="/" className="navbar-brand">
          <span className="brand-highlight">Re</span>Vive
        </Link>
        
        <form className="navbar-search" onSubmit={handleSearch}>
          <input 
            type="text" 
            name="search" 
            placeholder="Search for items, categories..." 
            className="search-input"
          />
          <button type="submit" className="search-btn">
            <Search size={18} />
          </button>
        </form>

        <div className="navbar-actions">
          <button className="btn btn-secondary action-btn" onClick={() => navigate('/add-product')}>
            <PlusCircle size={18} style={{marginRight: '8px'}} />
            Donate Item
          </button>
          <Link to="/login" className="nav-link icon-link">
            <LogIn size={20} />
            <span>Login</span>
          </Link>
          <Link to="/profile" className="nav-link icon-link">
            <User size={20} />
            <span>Profile</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
