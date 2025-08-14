import React from "react";
import { useNavigate } from "react-router-dom";
import "./Loginscreen.css";

const Loginscreen = () => {
  const navigate = useNavigate();

  const handleSkip = () => {
    navigate('/home'); // User ko '/home' route par redirect karega
  };

  return (
    <div className="login-screen-container">
      <div className="h-[10%] w-full flex items-center px-15 text-3xl bg-black absolute top-0 text-white">
        Frapp Eats
      </div>
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
        <button className="social-btn" onClick={handleSkip}>
          Skip
        </button>
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