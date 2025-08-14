import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Loginscreen from './components/loginscreen/loginscreen';
import Splashscreen from './components/splash screen';
import Homescreen from './components/homescreen/Homescreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Splash screen ko 2 seconds baad hide karein
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {showSplash ? (
        <Splashscreen />
      ) : (
        <Routes>
          <Route path="/" element={<Loginscreen />} />
          <Route path="/home" element={<Homescreen />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;