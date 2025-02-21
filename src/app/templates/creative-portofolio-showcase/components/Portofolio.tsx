"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Import Images Directly
import portfolio1 from "../assets/images/portofolio1.png";
import portfolio2 from "../assets/images/portofolio2.png";
import portfolio3 from "../assets/images/portofolio3.png";
import portfolio4 from "../assets/images/portofolio4.png";

interface Project {
  id: number;
  title: string;
  description: string;
  image: any;
  category: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Brand Identity Design",
    description: "A unique and modern branding project for a startup.",
    image: portfolio1,
    category: "Branding",
    link: "https://example.com/project1",
  },
  {
    id: 2,
    title: "Mobile App UI/UX",
    description: "Designed a sleek and user-friendly mobile application.",
    image: portfolio2,
    category: "UI/UX",
    link: "https://example.com/project2",
  },
  {
    id: 3,
    title: "Web Design & Development",
    description: "Created an interactive website for an online business.",
    image: portfolio3,
    category: "Web Design",
    link: "https://example.com/project3",
  },
  {
    id: 4,
    title: "Illustration & Art",
    description: "Custom illustrations and digital artwork for marketing.",
    image: portfolio4,
    category: "Illustrations",
    link: "https://example.com/project4",
  },
];

const categories = ["All", "Branding", "UI/UX", "Web Design", "Illustrations"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter projects based on selected category
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-gray-100"
        >
          My Portfolio
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg text-center text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto"
        >
          A collection of my best creative works. Click on a project to explore
          more.
        </motion.p>

        {/* Category Filters */}
        <div className="flex justify-center mt-8 space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${
                activeCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay Effect */}
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center text-white px-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm mt-2">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-3/4 max-w-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white"
              onClick={() => setSelectedProject(null)}
            >
              ✖
            </button>
            <Image
              src={selectedProject.image}
              alt={selectedProject.title}
              width={600}
              height={400}
              className="rounded-lg w-full object-cover"
            />
            <h3 className="text-2xl font-semibold mt-4">
              {selectedProject.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {selectedProject.description}
            </p>
            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300"
            >
              View Project
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
