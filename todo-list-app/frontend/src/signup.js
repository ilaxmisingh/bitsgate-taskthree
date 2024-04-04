// Signup.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });
      if (!response.ok) {
        throw new Error('User already exists');
      }
      navigate('/login');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSignup}>
        <div className="form-group">
          <label>Username:</label>
          <input className="input-field" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input className="input-field" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input className="input-field" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button className="signup-button" type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
