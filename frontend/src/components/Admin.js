import React, { useState } from 'react';

import axios from 'axios';

const AdminComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [messages, setMessages] = useState([]);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email === 'admin@mail.com' && password === 'password') {
      setIsLoggedIn(true);
      fetchMessages();
    } else {
      alert('Invalid credentials');
    }
  };

  const fetchMessages = async () => {
    try {
      const response = await axios.get('/api/messages'); 
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  return (
    <div className="bg-container">
      {!isLoggedIn ? (
        <div className="form-container">
          <h2 className="header">Admin Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn">Login</button>
          </form>
        </div>
      ) : (
        <div className="messages-container">
          <h2 className="header">Submitted Messages</h2>
          {messages.length > 0 ? (
            <ul className="messages-list">
              {messages.map((message, index) => (
                <li key={index} className="message-item">
                  <p><strong>Name:</strong> {message.name}</p>
                  <p><strong>Email:</strong> {message.email}</p>
                  <p><strong>Message:</strong> {message.message}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No messages found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminComponent;
