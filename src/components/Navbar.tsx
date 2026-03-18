'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('about');

  // Enhanced Scroll Handler
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();

    if (id === 'about') {
      // Smoothest way to get back to the absolute top
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('about');
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(id);
      }
    }
  };

  useEffect(() => {
    // List all sections including the contact "trigger"
    const sections = ['about', 'experience', 'projects', 'skills', 'contact'];

    const observerOptions = {
      root: null,
      // Top: -10% means as soon as you scroll up and 'Experience' leaves the top, 'About' takes over
      // Bottom: -60% means the highlight clears before you hit the very bottom
      rootMargin: '-10% 0px -60% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // CRITICAL: Monitor the "Top of Page" manually
    const handleManualScroll = () => {
      // If we are anywhere in the first 200px, it's definitely 'About'
      if (window.scrollY < 200) {
        setActiveSection('about');
      }
    };

    window.addEventListener('scroll', handleManualScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleManualScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#070913]/80 backdrop-blur-lg border-b border-white/5 py-4 px-6 md:px-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Link href="/" className="text-xl font-bold tracking-widest text-white uppercase">
          ABILASH ABRAHAM
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-10">
        {['About', 'Experience', 'Projects', 'Skills'].map((item) => {
          const id = item.toLowerCase();
          const isActive = activeSection === id;

          return (
            <a
              key={item}
              href={`#${id}`}
              onClick={(e) => handleScroll(e, id)}
              className={`text-sm font-medium transition-all duration-300 relative py-1
                ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`}
            >
              {item}
              {isActive && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,1)]" />
              )}
            </a>
          );
        })}
      </div>

      <div>
        <a
          href="#contact"
          onClick={(e) => handleScroll(e, 'contact')}
          className={`hidden md:inline-flex px-6 py-2 rounded-full border text-sm font-medium transition-all duration-300
            ${activeSection === 'contact'
              ? 'bg-indigo-500 border-indigo-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.6)]'
              : 'border-indigo-500/30 text-white hover:bg-indigo-500/20'}`}
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
}