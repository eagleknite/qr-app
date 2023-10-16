// app\pages\Navbar.js
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import '../css/navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMain, setOpenMain] = useState(''); // For main menu items
  const [openSub, setOpenSub] = useState(''); // For sub-menu items

  const closeDropdown = () => {
    setIsOpen(false);
    setOpenMain('');
    setOpenSub('');
  };

  

  return (
    <nav className="text-black">
      <button onClick={() => setIsOpen(!isOpen)}>Menu</button>
      {isOpen && (
        <ul className="dropdown">
          <li onMouseEnter={() => { setOpenMain('chancellors'); }}>University Chancellers</li>
          {openMain === 'chancellors' && (
            <ul>
              <li><Link href="/pages/university-chancellers/nelson-mandela" onClick={closeDropdown}>Nelson Mandela</Link></li>
              <li><Link href="/pages/university-chancellers/nkosazana-zuma" onClick={closeDropdown}>Nkosazana Zuma</Link></li>
              {/* Add other chancellors here */}
            </ul>
          )}

          <li onMouseEnter={() => { setOpenMain('vice-chancellors'); }}>Vice Chancellers</li>
          {openMain === 'vice-chancellors' && (
            <ul>
              <li><Link href="/pages/manganye" onClick={closeDropdown}>Manganye</Link></li>
              {/* Add other vice chancellers here */}
            </ul>
          )}

          <li onMouseEnter={() => { setOpenMain('buildings'); }}>Buildings</li>
          {openMain === 'buildings' && (
            <ul>
              <li><Link href="/pages/academic-building" onClick={closeDropdown}>Academic Building</Link></li>
              <li><Link href="/pages/administration-building" onClick={closeDropdown}>Administration Building</Link></li>
              {/* Add other buildings here */}
            </ul>
          )}

          <li onMouseEnter={() => { setOpenMain('newspaper-clippings'); }}>Newspaper Clippings</li>
          {openMain === 'newspaper-clippings' && (
            <ul>       
              <li><Link href="/pages/ul-awarded-2018" onClick={closeDropdown}>UL Awarded</Link></li>
              <li><Link href="/pages/ul-awarded-2019" onClick={closeDropdown}>UL Graduates</Link></li>
              {/* Add other newspaper clippings here */}
            </ul>
          )}

          <li onMouseEnter={() => { setOpenMain('stakeholders'); setOpenSub(''); }}>Stakeholders</li>
          {openMain === 'stakeholders' && (
            <ul>
              <li onMouseEnter={(e) => { e.stopPropagation(); setOpenSub('government'); }}>Government</li>
              {openSub === 'government' && (
                <ul>
                  <li><Link href="/pages/stakeholders/government/jacob-zuma" onClick={closeDropdown}>Jacob Zuma</Link></li>
                  <li><Link href="/pages/stakeholders/government/kgalema-motlanthe" onClick={closeDropdown}>Kgalema Motlanthe</Link></li>
                  <li><Link href="/pages/stakeholders/government/ngoako-ramatlhodi" onClick={closeDropdown}>Ngoako Ramatlhodi</Link></li>
                  <li><Link href="/pages/stakeholders/government/thabo-mbeki" onClick={closeDropdown}>Thabo Mbeki</Link></li>
                </ul>
              )}
              <li onMouseEnter={(e) => { e.stopPropagation(); setOpenSub('institution-higher-learning'); }}>Institution of Higher Learning</li>
              {openSub === 'institution-higher-learning' && (
                <ul>
                  <li><Link href="/pages/institution-higher-learning-2018" onClick={closeDropdown}>2018</Link></li>
                  <li><Link href="/pages/institution-higher-learning-2019" onClick={closeDropdown}>2019</Link></li>
                  <li><Link href="/pages/institution-higher-learning-2020" onClick={closeDropdown}>2020</Link></li>
                  <li><Link href="/pages/institution-higher-learning-2021" onClick={closeDropdown}>2021</Link></li>
                </ul>
              )}
              {/* Add other stakeholders here */}
            </ul>
          )}
        </ul>
      )}
    </nav>
  );
}
