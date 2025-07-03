"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

export default function Hero() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 md:px-12"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[url('/images/hero-bg.jpg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-40"></div>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-xl text-center md:text-left"
        >
          {/* Title with Hover Animation */}
          <motion.h1
            whileHover={{ scale: 1.1, color: "#facc15" }} // Yellow on hover
            transition={{ type: "spring", stiffness: 200 }}
            className="text-4xl md:text-5xl font-extrabold mb-4 text-white leading-tight cursor-pointer"
          >
            Hi, I'm Deswin, a Software Developer
          </motion.h1>

          <p className="text-lg md:text-xl mb-4 text-white opacity-80">
            I specialize in building modern mobile and web applications that are fast, responsive, and user-friendly.
          </p>

          <div className="text-lg md:text-xl mb-6 text-white">
            I bring{" "}
            <span className="font-bold">
              {isClient && (
                <Typewriter
                  options={{
                    strings: ["Frontend Excellence", "Clean Code", "Scalable Architecture"],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                  }}
                />
              )}
            </span>
            {" "}to every project I work on.
          </div>

          <motion.a
            href="/#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-blue-500 text-white font-medium text-lg rounded-lg shadow-lg
                      hover:bg-blue-600 transition-all duration-300"
          >
            View My Work
          </motion.a>
        </motion.div>

        {/* Profile Image with Hover Animation */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1, rotate: 5 }} // Slight scale & rotation
          transition={{ duration: 0.4 }}
          className="relative w-72 h-72 md:w-96 md:h-96 rounded-lg overflow-hidden shadow-lg cursor-pointer"
        >
          <Image
            src="/images/hero-image.png" // ✅ Uses image from public folder
            alt="Template Preview"
            fill
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
