"use client";

import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-10 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Footer Top Section */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Brand & Description */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              Tech Startup
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 max-w-md">
              Empowering businesses with cutting-edge technology. Start building today!
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition">
              Features
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition">
              Pricing
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition">
              Testimonials
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition">
              Contact
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition">
              <FaTwitter size={22} />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition">
              <FaLinkedin size={22} />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition">
              <FaGithub size={22} />
            </a>
          </div>
        </motion.div>

        {/* Footer Bottom Section */}
        <motion.div 
          className="border-t border-gray-200 dark:border-gray-800 mt-6 pt-4 text-center text-gray-500 text-sm"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          &copy; {new Date().getFullYear()} Tech Startup. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
