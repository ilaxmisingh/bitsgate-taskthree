// Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        throw new Error('Invalid credentials');
      }
      const data = await response.json();
      // Save token to local storage or session storage
      localStorage.setItem('token', data.token);
      navigate('/todolist');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Username:</label>
          <input className="input-field" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input className="input-field" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button className="login-button" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
