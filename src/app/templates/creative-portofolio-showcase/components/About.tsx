"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import profilePic from "../assets/images/profile.png"; // Change this to your profile picture

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left Section - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100">
            About Me
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I&apos;m a passionate <span className="font-semibold text-blue-500">UI/UX Designer</span> &  
            <span className="font-semibold text-blue-500"> Frontend Developer</span> dedicated to  
            crafting beautiful and user-friendly digital experiences. I love  
            turning ideas into reality through design and code.
          </p>

          {/* Key Highlights */}
          <div className="mt-6 flex flex-wrap gap-6 justify-center md:justify-start">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-500">5+</p>
              <p className="text-gray-600 dark:text-gray-300">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-500">50+</p>
              <p className="text-gray-600 dark:text-gray-300">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-500">10+</p>
              <p className="text-gray-600 dark:text-gray-300">Happy Clients</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <a
              href="#portfolio"
              className="px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 font-semibold rounded-lg shadow-md transition-all duration-300"
            >
              View My Work
            </a>
          </div>
        </motion.div>

        {/* Right Section - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg">
            <Image
              src={profilePic}
              alt="Profile Picture"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-110"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
