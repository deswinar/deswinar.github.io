// src/app/templates/tech-startup-launch/components/Contact.tsx
"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative w-full py-20 flex items-center justify-center bg-gray-900 text-white">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold"
        >
          Let's Connect
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 text-lg text-gray-300"
        >
          Reach out to us for collaboration, support, or just to say hi!
        </motion.p>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-8 space-y-6"
        >
          <div className="flex items-center justify-center space-x-4">
            <Mail className="w-6 h-6 text-blue-400" />
            <span className="text-lg">contact@startup.com</span>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <Phone className="w-6 h-6 text-green-400" />
            <span className="text-lg">+1 234 567 890</span>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <MapPin className="w-6 h-6 text-red-400" />
            <span className="text-lg">123 Startup St, Tech City</span>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8"
        >
          <a
            href="mailto:contact@startup.com"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-colors"
          >
            Send a Message
          </a>
        </motion.div>
      </div>
    </section>
  );
}
