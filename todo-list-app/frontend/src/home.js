// Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'; // Import CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="title">Welcome to Your-memorizer</h1>
      <p className="subtitle">Please select an option:</p>
      <div className="buttons">
        <Link to="/login" className="button-link">
          <button className="login-button">Login</button>
        </Link>
        <Link to="/signup" className="button-link">
          <button className="signup-button">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
