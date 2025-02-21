'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "../app/(home)/constants/projects";
import { AnimatePresence, motion } from "framer-motion";

export default function FeaturedProjects() {
  type ProjectType = {
    title: string;
    description: string;
    youtubeLink: string;
    images: string[];
    technologies: string[];
    liveDemo: string;
    github: string;
  };

  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const featuredProjects = projects.slice(0, 6);

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900 text-center">
      <h2 className="text-4xl font-extrabold mb-10 text-gray-900 dark:text-white">
        Featured Projects
      </h2>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden cursor-pointer relative group transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedProject(project)}
          >
            {/* Hover Effect */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">Click to View</p>
            </div>

            {/* Single Representative Image (4:3 Ratio) */}
            <div className="w-full h-auto">
              <Image
                src={project.images[0]} // Use the first image as the main preview
                alt={`${project.title} Thumbnail`}
                className="w-full h-auto object-cover"
                width={400} // 4:3 aspect ratio
                height={300}
              />
            </div>

            {/* Project Details */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 line-clamp-2">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Projects Button */}
      <div className="mt-8">
        <Link
          href="/projects"
          className="px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white rounded-lg shadow hover:bg-blue-700 dark:hover:bg-blue-800 transition-all duration-300"
        >
          View All Projects
        </Link>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg max-w-3xl w-full relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                ✖
              </button>

              {/* Project Title */}
              <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                {selectedProject.title}
              </h3>

              {/* Multiple Images in Modal */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedProject.images.map((image, imgIndex) => (
                  <Image
                    key={imgIndex}
                    src={image}
                    alt={`${selectedProject.title} - Image ${imgIndex + 1}`}
                    className="w-full h-auto object-cover rounded-lg"
                    width={400} // 4:3 aspect ratio
                    height={300}
                  />
                ))}
              </div>

              {/* Description */}
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                {selectedProject.description}
              </p>

              {/* Technologies */}
              <div className="mt-4 flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-sm bg-gray-200 dark:bg-gray-700 dark:text-white text-gray-900 rounded-full px-3 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-6 flex justify-center space-x-4">
                {selectedProject.liveDemo && (
                  <Link
                    href={selectedProject.liveDemo}
                    className="px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded-lg shadow hover:bg-blue-600 dark:hover:bg-blue-700 transition-all duration-300"
                  >
                    Live Demo
                  </Link>
                )}
                {selectedProject.github && (
                  <Link
                    href={selectedProject.github}
                    className="px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg shadow hover:bg-gray-900 dark:hover:bg-gray-800 transition-all duration-300"
                  >
                    View Code
                  </Link>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
