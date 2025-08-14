import React from 'react';
import './Loginscreen.css';

const Loginscreen = () => {
  return (
    <div className="login-screen-container">
      <div className="login-section">
        <h2>What's your phone number or email?</h2>
        <input
          type="text"
          placeholder="Enter phone number or email"
          className="input-field"
        />
        <button className="continue-btn black-btn">Continue</button>
        <div className="divider">
          <span>or</span>
        </div>
        <button className="social-btn">
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google Logo"
            className="social-logo"
          />
          Continue with Google
        </button>
        <button className="social-btn">
          <img
            src="https://www.apple.com/favicon.ico"
            alt="Apple Logo"
            className="social-logo"
          />
          Continue with Apple
        </button>
        <div className="divider">
          <span>or</span>
        </div>
        <p className="consent-text">
          By proceeding, you consent to get calls, WhatsApp or SMS/RCS messages,
          including by automated means, from frapp and its affiliates to the
          number provided.
        </p>
      </div>
    </div>
  );
};

export default Loginscreen;