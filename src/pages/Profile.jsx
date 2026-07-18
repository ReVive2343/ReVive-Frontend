import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Package, Heart, Settings, LogOut, Activity } from 'lucide-react';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const loadProfile = () => {
      const token = localStorage.getItem('token');
      
      if (!token) {
        navigate('/login');
        return;
      }

      let userData = null;

      // 1. Try to get user from localStorage directly
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        try {
          userData = JSON.parse(storedUser);
        } catch (e) {
          console.error('Error parsing stored user', e);
        }
      }

      // 2. Try to decode JWT
      if (!userData && token && token !== 'undefined') {
        try {
          const parts = token.split('.');
          if (parts.length > 1) {
            const base64Url = parts[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
            
            const decoded = JSON.parse(jsonPayload);
            userData = {
              name: decoded.name || decoded.username || 'User',
              email: decoded.email || decoded.sub || 'user@example.com'
            };
          }
        } catch (error) {
          console.error('Error decoding token:', error);
        }
      }

      if (userData) {
        setUser(userData);
      } else {
        // Fallback
        setUser({ name: 'User Profile', email: 'No email found' });
      }
      
      setLoading(false);
    };

    loadProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="container" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="loading-spinner">Loading profile...</div>
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="animate-fade-in">
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Dashboard Overview</h3>
            <div className="stats-grid">
              <div className="stat-card card glass">
                <div className="stat-icon" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>
                  <Package size={24} />
                </div>
                <div className="stat-info">
                  <h3>0</h3>
                  <p>Items Listed</p>
                </div>
              </div>
              <div className="stat-card card glass">
                <div className="stat-icon" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                  <Heart size={24} />
                </div>
                <div className="stat-info">
                  <h3>0</h3>
                  <p>Items Donated</p>
                </div>
              </div>
              <div className="stat-card card glass">
                <div className="stat-icon" style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' }}>
                  <Activity size={24} />
                </div>
                <div className="stat-info">
                  <h3>0</h3>
                  <p>Active Requests</p>
                </div>
              </div>
            </div>
            
            <div className="recent-activity card glass" style={{ padding: '1.5rem', borderRadius: '1rem' }}>
              <h4 style={{ marginBottom: '1rem' }}>Recent Activity</h4>
              <div className="empty-state">
                <Activity size={48} />
                <p>No recent activity found.</p>
                <button className="btn btn-primary btn-sm mt-md" onClick={() => navigate('/add-product')}>List an Item</button>
              </div>
            </div>
          </div>
        );
      case 'listings':
        return (
          <div className="animate-fade-in empty-state">
            <Package size={48} />
            <h3>Your Listings</h3>
            <p>You haven't listed any items yet.</p>
            <button className="btn btn-primary mt-md" onClick={() => navigate('/add-product')}>Add New Listing</button>
          </div>
        );
      case 'donations':
        return (
          <div className="animate-fade-in empty-state">
            <Heart size={48} />
            <h3>Your Donations</h3>
            <p>Your generous donations will appear here.</p>
          </div>
        );
      case 'settings':
        return (
          <div className="animate-fade-in empty-state">
            <Settings size={48} />
            <h3>Account Settings</h3>
            <p>Settings module coming soon.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="profile-container animate-fade-in">
      <div className="profile-header card glass">
        <div className="profile-avatar">
          {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
        </div>
        <div className="profile-info">
          <h2>{user?.name || 'User Profile'}</h2>
          <p><Mail size={16} /> {user?.email || 'No email provided'}</p>
        </div>
      </div>

      <div className="dashboard-grid">
        <aside className="dashboard-sidebar card glass">
          <nav className="sidebar-nav">
            <button 
              className={`sidebar-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              <Activity size={20} /> Overview
            </button>
            <button 
              className={`sidebar-btn ${activeTab === 'listings' ? 'active' : ''}`}
              onClick={() => setActiveTab('listings')}
            >
              <Package size={20} /> My Listings
            </button>
            <button 
              className={`sidebar-btn ${activeTab === 'donations' ? 'active' : ''}`}
              onClick={() => setActiveTab('donations')}
            >
              <Heart size={20} /> My Donations
            </button>
            <button 
              className={`sidebar-btn ${activeTab === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              <Settings size={20} /> Settings
            </button>
            
            <hr style={{ margin: '1rem 0', borderColor: 'var(--border-color)', opacity: 0.2 }} />
            
            <button className="sidebar-btn logout" onClick={handleLogout}>
              <LogOut size={20} /> Logout
            </button>
          </nav>
        </aside>

        <main className="dashboard-content card glass">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Profile;
