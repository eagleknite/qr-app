import React from 'react';

export default function Admin({ url, setUrl, children }) {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <p className="text-xl text-red-500">You are not authorized to view this page.</p>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-r from-blue-400 to-purple-500">
      <h1 className="text-5xl font-bold mb-12 text-white">Admin Dashboard</h1>
      
      <div className="mb-8 w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <label className="block text-lg font-medium text-gray-700 mb-2">
          Enter URL
        </label>
        <input 
          type="text" 
          className="mt-2 w-full p-3 border rounded-lg text-gray-900 mb-4" 
          value={url} 
          onChange={e => setUrl(e.target.value)} 
          placeholder="https://www.example.com/" 
        />
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
          Generate QR Code
        </button>
      </div>

      {children}  {/* Render the QR code here */}

      <div className="mb-8 w-full max-w-xl bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-black">User Submissions</h2>
        <ul className="divide-y divide-gray-300">
          <li className="py-4">User 1 submission...</li>
          <li className="py-4">User 2 submission...</li>
        </ul>
      </div>
    </main>
  );
}

