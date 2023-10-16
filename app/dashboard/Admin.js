// app\dashboard\Admin.js
"use client"
import axios from 'axios';
import { useState } from 'react';

export default function Admin({ url, setUrl, children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);
  const [loginError, setLoginError] = useState(null);

  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  const handleLogin = async () => {
      try {
          const response = await axios.post(`${BACKEND_URL}/login`, {
              username: username,
              password: password
          });
          if (response.data && response.data.token) {
              setToken(response.data.token);
              axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
              setIsAuthenticated(true);
          }
      } catch (error) {
          setLoginError("Login failed. Please check your credentials.");
      }
  };

  const handleLogout = () => {
    setToken(null);
    setIsAuthenticated(false);
    axios.defaults.headers.common['Authorization'] = undefined;  // remove the authorization header
  };

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-ul-blue-dark">
        <div className="p-8 bg-opacity-30 bg-ul-cream rounded-lg shadow-md w-96">
          <h2 className="mb-6 text-2xl font-semibold text-center text-ul-blue-dark">Admin Login</h2>
          <p className="mb-4 text-center text-ul-blue-dark">Please login as an administrator to access the dashboard.</p>
          {loginError && <p className="mb-4 text-sm text-center text-red-500">{loginError}</p>}
          <input 
            type="text" 
            className="mb-4 w-full p-2 border rounded-lg text-ul-blue-dark" 
            value={username} 
            onChange={e => setUsername(e.target.value)} 
            placeholder="Username" 
          />
          <input 
            type="password" 
            className="mb-4 w-full p-2 border rounded-lg text-ul-blue-dark" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            placeholder="Password" 
          />
          <button 
            onClick={handleLogin} 
            className="w-full p-2 bg-ul-orange text-ul-cream rounded-lg shadow-md hover:bg-opacity-80">
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-ul-blue-dark">
      <div className="w-full flex justify-between items-center mb-12">
        <h1 className="text-5xl font-bold text-ul-orange">Admin Dashboard</h1>
        <button onClick={handleLogout} className="bg-ul-orange text-ul-cream px-4 py-2 rounded-lg shadow-md hover:bg-opacity-80">
          Logout
        </button>
      </div>
      
      <div className="mb-8 w-full max-w-md bg-opacity-30 bg-ul-cream p-6 rounded-lg shadow-lg">
        <label className="block text-lg font-medium text-ul-blue-dark mb-2">
          Enter URL
        </label>
        <input 
          type="text" 
          className="mt-2 w-full p-3 border rounded-lg text-ul-blue-dark mb-4" 
          value={url} 
          onChange={e => setUrl(e.target.value)} 
          placeholder="https://www.example.com/" 
        />
        <button className="px-6 py-3 bg-ul-orange text-ul-cream rounded-lg shadow-md hover:bg-opacity-80">
          Generate QR Code
        </button>
      </div>

      {children}  {/* Render the QR code here */}

      <div className="mb-8 w-full max-w-xl bg-opacity-30 bg-ul-cream p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-ul-blue-dark">User Submissions</h2>
        <ul className="divide-y divide-gray-300">
          <li className="py-4">User 1 submission...</li>
          <li className="py-4">User 2 submission...</li>
        </ul>
      </div>
    </main>
  );
}