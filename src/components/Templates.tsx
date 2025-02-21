"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const templates = [
  {
    id: 1,
    title: "Tech Startup Launch",
    description: "A cutting-edge landing page for startups looking to make an impact.",
    image: "/images/templates/templates-1-screenshot-1.png",
    price: "$3.99",
    previewUrl: "/templates/tech-startup-launch",
  },
  {
    id: 2,
    title: "Creative Portofolio Showcase",
    description: "Showcasing Creativity, One Pixel at a Time.",
    image: "/images/templates/templates-2-screenshot-1.png",
    price: "$1.99",
    previewUrl: "/templates/creative-portofolio-showcase",
  },
];

export default function Templates() {
  const [selectedTemplate, setSelectedTemplate] = useState<{
    id: number;
    title: string;
    description: string;
    image: string;
    price: string;
    previewUrl: string;
  } | null>(null);

  return (
    <section id="templates" className="py-16 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
        >
          Landing Page Templates
        </motion.h2>

        {/* Template Cards Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
              }}
              className="cursor-pointer bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300"
              onClick={() => setSelectedTemplate(template)}
            >
              <div className="relative h-48">
                <Image
                  src={template.image}
                  alt={template.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {template.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{template.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedTemplate && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={() => setSelectedTemplate(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-3/4 max-w-lg relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white"
              onClick={() => setSelectedTemplate(null)}
            >
              ✖
            </button>

            {/* Template Image */}
            <Image
              src={selectedTemplate.image}
              alt={selectedTemplate.title}
              width={600}
              height={400}
              className="rounded-lg w-full object-cover"
            />

            {/* Template Details */}
            <h3 className="text-2xl font-semibold mt-4">{selectedTemplate.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{selectedTemplate.description}</p>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-xl font-bold text-gray-800 dark:text-white">
                {selectedTemplate.price}
              </span>
              <a
                href={selectedTemplate.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300"
              >
                View Template
              </a>
            </div>

            {/* Buy Now Button Moved Inside Popup */}
            <button
              className="mt-6 w-full px-4 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-300"
            >
              {selectedTemplate.price === "$0.00" ? "Download" : "Buy Now"}
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
