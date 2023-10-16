// app\page.js
"use client"
import React, { useState, useEffect } from 'react';
import Loading from './loading';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className="flex min-h-screen items-center justify-center p-24 bg-ul-blue-dark">
      <div className="text-center bg-opacity-30 bg-ul-cream p-6 rounded-lg">
        <h1 className="text-5xl font-bold text-ul-orange mb-4">Welcome to UL Gallery</h1>
        <p className="text-xl text-ul-blue-dark">Explore our collection and share your feedback.</p>
      </div>
    </main>
  );
}

