"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import heroBg from "../assets/images/hero-bg.jpg";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroBg}
          alt="Creative Portfolio"
          layout="fill"
          objectFit="cover"
          className="opacity-60"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Showcasing Creativity, <br />
          One Pixel at a Time.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
        >
          Elevate your brand with stunning visuals and cutting-edge design.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8 flex gap-4 justify-center"
        >
          <a
            href="#portfolio"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg transition-all duration-300"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white text-lg font-semibold rounded-lg shadow-lg transition-all duration-300"
          >
            Hire Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
