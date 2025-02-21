"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Left Section - Branding / About */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white">My Portfolio</h3>
            <p className="mt-2 text-gray-400">
              Showcasing creativity & passion through design and development.
            </p>
          </motion.div>

          {/* Middle Section - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="#portfolio" className="hover:text-blue-400 transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
              </li>
            </ul>
          </motion.div>

          {/* Right Section - Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h4 className="text-lg font-semibold text-white">Follow Me</h4>
            <div className="mt-3 flex justify-center md:justify-start space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <FaTwitter size={24} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom - Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-6"
        >
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
