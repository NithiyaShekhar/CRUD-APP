import React, { useState } from 'react';
import './LoginPage.scss';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      onLogin(); 
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className='container'>
      <h2 className='heading'>Login Page</h2>
      <div className='input-text'>
      <label className='label'>User Name:</label>
      <input
        className='input'
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      </div>
      <br />
      <div className='input-text'>
      <label className='label'>Password</label>
      <input
        className='input'
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      </div>
      <br />
      <button className="button" onClick={handleLogin}>Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default LoginForm;
