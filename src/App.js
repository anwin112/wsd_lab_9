// src/App.js

import React, { useState } from 'react';
import './App.css';
import ImageGallery from './components/ImageGallery';
import Login from './components/Login';

function App() {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (name) => {
    setUsername(name);
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <h1>Electric Vehicle Trip Planner</h1>
      {isLoggedIn ? (
        <div>
          <h2 className="welcome">Welcome, {username}!</h2>
          <ImageGallery />
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
