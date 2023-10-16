// app\components\Header.js
import React from 'react';
import Navbar from '../pages/Navbar';
import Link from 'next/link'; 

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full p-6 bg-gradient-to-r from-ul-blue-dark to-ul-blue shadow-md">
      <Link href="/">
        <h1 className="text-4xl font-bold text-ul-orange cursor-pointer">UL Gallery</h1>
      </Link>
      <div className="flex items-center space-x-4">
        <Link href="/dashboard">
          <span className="text-ul-cream hover:text-ul-orange cursor-pointer">Dashboard</span>
        </Link>
        <Navbar />
      </div>
    </header>
  );
}
