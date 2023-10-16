// app\pages\page.js
"use client"
import React, { useState } from 'react';

export default function Gallery({ title }) {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Feedback:', feedback);
    setFeedback('');
  };

  return (
    <div className="gallery-container p-6 bg-ul-blue-dark text-ul-cream">
      <h1 className="text-4xl font-bold mb-6">{title}</h1>

      <div className="mb-8 p-4 bg-opacity-30 bg-ul-cream text-ul-blue-dark rounded shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Image Information:</h2>
        {/* Image information goes here */}
      </div>

      <div className="p-4 bg-opacity-30 bg-ul-cream text-ul-blue-dark rounded shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Submit Feedback:</h2>
        <form onSubmit={handleSubmit}>
          <textarea 
            value={feedback} 
            onChange={(e) => setFeedback(e.target.value)} 
            placeholder="Enter feedback here..."
            className="w-full p-2 border rounded mb-4 text-ul-blue-dark"
            rows="4"
          ></textarea>
          <button 
            type="submit" 
            className="px-4 py-2 bg-ul-orange text-ul-cream rounded hover:bg-opacity-80"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}
