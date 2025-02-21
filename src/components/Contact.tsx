"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-gray-100"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg text-center text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto"
        >
          Feel free to reach out for collaborations or just a friendly chat!
        </motion.p>

        {/* Contact Content */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Email */}
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-blue-500 dark:text-blue-400 text-2xl" />
              <p className="text-lg text-gray-700 dark:text-gray-300">
                deswinauliyaarabbani@gmail.com
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4">
              <FaPhone className="text-blue-500 dark:text-blue-400 text-2xl" />
              <p className="text-lg text-gray-700 dark:text-gray-300">
                +62 813 1984 0203
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-6 mt-4">
              <a
                href="https://linkedin.com/in/deswinar/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linkedin"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="https://github.com/deswinar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
              >
                <FaGithub size={28} />
              </a>
              <a
                href="https://x.com/auliyaa_deswin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X Twitter"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
              >
                <FaTwitter size={28} />
              </a>
              <a
                href="https://instagram.com/deswinar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
              >
                <FaInstagram size={28} />
              </a>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Message</label>
              <textarea
                rows={4}
                placeholder="Type your message..."
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-all"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}