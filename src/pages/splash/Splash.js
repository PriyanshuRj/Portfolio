import React, { useState } from 'react';
import './Splash.css';
import { Navigate } from 'react-router-dom';
function AnimatedSplash() {
  return (
    <div className="logo_wrapper">
      <div className="loading">
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
      </div>
    </div>
  );
}

function Splash() {
  const [stateRedirect, setRedirect] = useState(false);
  setTimeout(() => setRedirect(true), 2000);

  return stateRedirect ? <Navigate replace to="/home" /> : <AnimatedSplash />;
}

export default Splash;
