// src/app/templates/tech-startup-launch/components/Hero.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import heroBg from "../assets/images/hero-bg.jpg";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with subtle zoom effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={heroBg}
          alt="Tech Startup Background"
          fill
          className="object-cover brightness-75"
        />
      </motion.div>

      {/* Floating Particles */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.3, y: 0 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-20 left-10 w-16 h-16 bg-blue-500/30 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.3, y: 0 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror", delay: 1 }}
        className="absolute bottom-20 right-10 w-20 h-20 bg-purple-500/30 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Title with hover animation */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold text-white"
          whileHover={{ color: "#3B82F6", y: -10 }}  // Slight color and position change
        >
          Empowering Your Tech Journey
        </motion.h1>

        {/* Subtitle with hover fade effect */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="mt-4 text-lg md:text-2xl text-white max-w-2xl mx-auto"
          whileHover={{ opacity: 0.7 }}  // Fade effect on hover
        >
          Innovative solutions for tech startups aiming to change the world.
        </motion.p>

        {/* Animated Call-to-Action Button with Hover and Click Effects */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="mt-8"
        >
          <motion.a
            href="#get-started"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full font-semibold shadow-lg transition-colors relative overflow-hidden"
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 20px rgba(59,130,246,0.5)", // Blue glow effect
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
            {/* Background hover effect */}
            <motion.span
              className="absolute inset-0 bg-blue-500/30 blur-xl opacity-0"
              whileHover={{ opacity: 0.4 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
