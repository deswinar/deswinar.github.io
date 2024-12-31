'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setIsDarkMode(storedTheme === 'dark');
      document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
      document.documentElement.classList.toggle('dark', prefersDark);
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
    localStorage.setItem('theme', newTheme);
  };

  const handleNavigation = (href: string) => {
    if (pathname === '/') {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    router.push('/');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 w-full transition-transform duration-300 z-50 ${
        isSticky ? 'bg-white dark:bg-gray-900 shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Creative Projects</h1>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 dark:text-white focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          )}
        </button>

        {/* Desktop and Mobile Navigation */}
        <div
          className={`flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 transition-all duration-300 ${
            isMenuOpen ? 'block' : 'hidden md:flex'
          }`}
        >
          <button
            onClick={() => handleNavigation('#home')}
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
          >
            Home
          </button>
          <button
            onClick={() => handleNavigation('#about')}
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
          >
            About
          </button>
          <button
            onClick={() => handleNavigation('#projects')}
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
          >
            Projects
          </button>
          <button
            onClick={() => handleNavigation('#contact')}
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
          >
            Contact
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-3 py-2 rounded focus:outline-none transition-colors duration-300"
            aria-label={`Toggle ${isDarkMode ? 'light' : 'dark'} mode`}
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </nav>
    </header>
  );
}
