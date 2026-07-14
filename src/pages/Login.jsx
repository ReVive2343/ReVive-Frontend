import React, { useState } from 'react';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Auth = () => {
  const [view, setView] = useState('login'); // 'login', 'register', 'forgot'
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const switchView = (newView) => {
    setView(newView);
    setError('');
    setSuccess('');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      if (view === 'login') {
        const response = await fetch('https://reviveapi.defigo.in/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: formData.email, password: formData.password })
        });
        const data = await response.json();
        
        if (response.ok) {
          localStorage.setItem('token', data.token || data.access_token);
          setSuccess('Login successful!');
          setTimeout(() => navigate('/'), 1000);
        } else {
          setError(data.message || 'Login failed. Please check your credentials.');
        }
      } else if (view === 'register') {
        const response = await fetch('https://reviveapi.defigo.in/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: formData.name, email: formData.email, password: formData.password })
        });
        const data = await response.json();

        if (response.ok) {
          setSuccess('Registration successful! Please log in.');
          switchView('login');
          setFormData({ ...formData, password: '' });
        } else {
          setError(data.message || 'Registration failed.');
        }
      } else if (view === 'forgot') {
        // Implement forgot password if the API exists
        setSuccess('If the email is registered, a reset link will be sent.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container animate-fade-in">
      <div className="auth-card card glass">
        
        {error && <div className="error-message" style={{ color: '#ef4444', backgroundColor: '#fee2e2', padding: '0.75rem', borderRadius: '0.5rem', marginBottom: '1rem', fontSize: '0.875rem' }}>{error}</div>}
        {success && <div className="success-message" style={{ color: '#16a34a', backgroundColor: '#dcfce3', padding: '0.75rem', borderRadius: '0.5rem', marginBottom: '1rem', fontSize: '0.875rem' }}>{success}</div>}

        {view === 'login' && (
          <>
            <div className="auth-header">
              <h2>Welcome Back</h2>
              <p>Log in to access your account</p>
            </div>
            <form onSubmit={handleSubmit} className="auth-form">
              <div className="input-group">
                <label>Email Address</label>
                <div className="input-with-icon">
                  <Mail size={18} className="input-icon" />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@example.com" className="input-field" />
                </div>
              </div>
              <div className="input-group">
                <div className="label-with-link">
                  <label>Password</label>
                  <button type="button" className="text-link" onClick={() => switchView('forgot')}>Forgot?</button>
                </div>
                <div className="input-with-icon">
                  <Lock size={18} className="input-icon" />
                  <input type="password" name="password" value={formData.password} onChange={handleChange} required placeholder="••••••••" className="input-field" />
                </div>
              </div>
              <button type="submit" className="btn btn-primary auth-submit" disabled={loading}>
                {loading ? 'Logging in...' : 'Log In'} <ArrowRight size={18} />
              </button>
            </form>
            <div className="auth-footer">
              <p>Don't have an account? <button type="button" className="text-link" onClick={() => switchView('register')}>Sign up</button></p>
            </div>
          </>
        )}

        {view === 'register' && (
          <>
            <div className="auth-header">
              <h2>Create Account</h2>
              <p>Join our community today</p>
            </div>
            <form onSubmit={handleSubmit} className="auth-form">
              <div className="input-group">
                <label>Full Name</label>
                <div className="input-with-icon">
                  <User size={18} className="input-icon" />
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" className="input-field" />
                </div>
              </div>
              <div className="input-group">
                <label>Email Address</label>
                <div className="input-with-icon">
                  <Mail size={18} className="input-icon" />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@example.com" className="input-field" />
                </div>
              </div>
              <div className="input-group">
                <label>Password</label>
                <div className="input-with-icon">
                  <Lock size={18} className="input-icon" />
                  <input type="password" name="password" value={formData.password} onChange={handleChange} required placeholder="••••••••" className="input-field" />
                </div>
              </div>
              <button type="submit" className="btn btn-primary auth-submit" disabled={loading}>
                {loading ? 'Creating...' : 'Create Account'} <ArrowRight size={18} />
              </button>
            </form>
            <div className="auth-footer">
              <p>Already have an account? <button type="button" className="text-link" onClick={() => switchView('login')}>Log in</button></p>
            </div>
          </>
        )}

        {view === 'forgot' && (
          <>
            <div className="auth-header">
              <h2>Reset Password</h2>
              <p>We'll send you instructions to reset it</p>
            </div>
            <form onSubmit={handleSubmit} className="auth-form">
              <div className="input-group">
                <label>Email Address</label>
                <div className="input-with-icon">
                  <Mail size={18} className="input-icon" />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@example.com" className="input-field" />
                </div>
              </div>
              <button type="submit" className="btn btn-primary auth-submit" disabled={loading}>
                {loading ? 'Sending...' : 'Send Reset Link'}
              </button>
            </form>
            <div className="auth-footer">
              <p>Remember your password? <button type="button" className="text-link" onClick={() => switchView('login')}>Back to login</button></p>
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default Auth;
