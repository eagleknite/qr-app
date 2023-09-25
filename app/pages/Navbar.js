"use client"
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import '../css/navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <nav className="text-black">
      <button onClick={() => setIsOpen(!isOpen)}>Menu</button>
      {isOpen && (
        <ul className="dropdown">
          <li><Link href="/pages/thabo-mbeki" onClick={closeDropdown}>Thabo Mbeki</Link></li>
          <li><Link href="/pages/nelson-mandela" onClick={closeDropdown}>Nelson Mandela</Link></li>
          <li><Link href="/pages/jacob-zuma" onClick={closeDropdown}>Jacob Zuma</Link></li>
          <li><Link href="/pages/ngoako-ramatlhodi" onClick={closeDropdown}>Ngoako Ramatlhodi</Link></li>
          <li><Link href="/pages/kgalema-motlanthe" onClick={closeDropdown}>Kgalema Motlanthe</Link></li>
          <li><Link href="/pages/newspaper-clippings" onClick={closeDropdown}>Newspaper Clippings</Link></li>
          <li><Link href="/pages/buildings" onClick={closeDropdown}>Buildings</Link></li>
          <li><Link href="/pages/photos" onClick={closeDropdown}>Photos</Link></li>
        </ul>
      )}
    </nav>
  );
}
