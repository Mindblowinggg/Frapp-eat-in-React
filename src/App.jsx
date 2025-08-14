import React, { useState, useEffect } from 'react';
import './App.css';
import Loginscreen from './components/loginscreen/loginscreen';
import Splashscreen from './components/splash screen';

function App() {


  {/*splash screen*/}
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash ? <Splashscreen /> : <Loginscreen />}
    </>
  );
}

export default App;