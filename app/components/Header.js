import React from 'react';
import Navbar from '../pages/Navbar';
import Link from 'next/link'; 

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full p-6 bg-gradient-to-r from-blue-500 to-purple-600 shadow-md">
      <Link href="/">
        <h1 className="text-4xl font-bold text-black cursor-pointer">UL Gallery</h1>
      </Link>
      <Navbar />
    </header>
  );
}
