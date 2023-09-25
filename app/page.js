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
    <main className="flex min-h-screen items-center justify-center p-24 bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-4">Welcome to UL Gallery</h1>
        <p className="text-xl text-white">Explore our collection and share your feedback.</p>
      </div>
    </main>
  );
}
