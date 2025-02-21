// src/app/templates/tech-startup-launch/components/Testimonials.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

import testimonial1 from "../assets/images/testimonial1.jpg";
import testimonial2 from "../assets/images/testimonial2.jpg";
import testimonial3 from "../assets/images/testimonial3.jpg";
import testimonial4 from "../assets/images/testimonial4.jpg";
import testimonial5 from "../assets/images/testimonial5.jpg";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: StaticImageData;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, Acme Corp",
    quote:
      "This tech solution revolutionized our workflow, making it more efficient and scalable.",
    image: testimonial1,
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "CTO, Beta Inc",
    quote:
      "The seamless integration and robust infrastructure exceeded our expectations.",
    image: testimonial2,
  },
  {
    id: 3,
    name: "Alice Johnson",
    role: "Founder, Gamma Startups",
    quote:
      "A truly innovative approach that has taken our business to the next level.",
    image: testimonial3,
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "VP, Delta Solutions",
    quote:
      "An outstanding service that allowed us to scale our operations effortlessly.",
    image: testimonial4,
  },
  {
    id: 5,
    name: "Emily White",
    role: "COO, Zeta Enterprises",
    quote:
      "Highly recommended for any business looking to modernize their tech stack.",
    image: testimonial5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-screen-md mx-auto px-4 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
          What Our Clients Say
        </h2>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <AnimatePresence>
            <motion.div
              key={testimonials[current].id}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 relative rounded-full overflow-hidden">
                  <Image
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {testimonials[current].name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                {testimonials[current].role}
              </p>
              <p className="text-gray-600 dark:text-gray-300 italic">
                “{testimonials[current].quote}”
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white p-2 rounded-full shadow-md hover:bg-gray-400 dark:hover:bg-gray-600 transition"
          onClick={prevSlide}
        >
          ❮
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white p-2 rounded-full shadow-md hover:bg-gray-400 dark:hover:bg-gray-600 transition"
          onClick={nextSlide}
        >
          ❯
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === current ? "bg-blue-600" : "bg-gray-400"
              } transition`}
              onClick={() => setCurrent(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
