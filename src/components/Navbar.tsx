'use client'; // For client-side interactions in Next.js

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setIsDarkMode(storedTheme === 'dark');
      document.documentElement.classList.toggle('dark', storedTheme === 'dark');
      console.log(`Theme loaded from localStorage: ${storedTheme}`);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
      document.documentElement.classList.toggle('dark', prefersDark);
      console.log(`System preference applied: ${prefersDark ? 'dark' : 'light'}`);
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
    localStorage.setItem('theme', newTheme);
    console.log(`Theme toggled to: ${newTheme}`);
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow transition-colors duration-300">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Creative Projects</h1>
        <div className="flex items-center space-x-6">
          <a
            href="#home"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
          >
            Contact
          </a>

          {/* Dark Mode Toggle Button */}
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
