import React, { useState } from 'react';
import './Login.css';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className='divbox'>
    <div>
      <h2 className='head'>Employee Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='input'>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit"><h4>Login</h4></button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;
