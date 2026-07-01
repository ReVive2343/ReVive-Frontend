import React, { useState } from 'react';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import './Login.css';

const Auth = () => {
  const [view, setView] = useState('login'); // 'login', 'register', 'forgot'

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitting ${view} form`);
    // Mock authentication flow
  };

  return (
    <div className="auth-container animate-fade-in">
      <div className="auth-card card glass">
        
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
                  <input type="email" required placeholder="you@example.com" className="input-field" />
                </div>
              </div>
              <div className="input-group">
                <div className="label-with-link">
                  <label>Password</label>
                  <button type="button" className="text-link" onClick={() => setView('forgot')}>Forgot?</button>
                </div>
                <div className="input-with-icon">
                  <Lock size={18} className="input-icon" />
                  <input type="password" required placeholder="••••••••" className="input-field" />
                </div>
              </div>
              <button type="submit" className="btn btn-primary auth-submit">
                Log In <ArrowRight size={18} />
              </button>
            </form>
            <div className="auth-footer">
              <p>Don't have an account? <button type="button" className="text-link" onClick={() => setView('register')}>Sign up</button></p>
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
                  <input type="text" required placeholder="John Doe" className="input-field" />
                </div>
              </div>
              <div className="input-group">
                <label>Email Address</label>
                <div className="input-with-icon">
                  <Mail size={18} className="input-icon" />
                  <input type="email" required placeholder="you@example.com" className="input-field" />
                </div>
              </div>
              <div className="input-group">
                <label>Password</label>
                <div className="input-with-icon">
                  <Lock size={18} className="input-icon" />
                  <input type="password" required placeholder="••••••••" className="input-field" />
                </div>
              </div>
              <button type="submit" className="btn btn-primary auth-submit">
                Create Account <ArrowRight size={18} />
              </button>
            </form>
            <div className="auth-footer">
              <p>Already have an account? <button type="button" className="text-link" onClick={() => setView('login')}>Log in</button></p>
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
                  <input type="email" required placeholder="you@example.com" className="input-field" />
                </div>
              </div>
              <button type="submit" className="btn btn-primary auth-submit">
                Send Reset Link
              </button>
            </form>
            <div className="auth-footer">
              <p>Remember your password? <button type="button" className="text-link" onClick={() => setView('login')}>Back to login</button></p>
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default Auth;
