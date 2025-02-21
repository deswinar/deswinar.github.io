"use client";

import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const educations = [
  {
    id: 1,
    degree: 'Diploma 3',
    major: 'Industrial Electrical Engineering',
    institution: 'Politeknik Negeri Jakarta',
    duration: '2015 - 2018',
    gpa: '3.42',
  },
];

export default function Educations() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-gray-100"
        >
          Educations
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg text-center text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto"
        >
          A timeline of my studies.
        </motion.p>

        {/* Timeline */}
        <div className="mt-12 relative border-l-4 border-blue-500 dark:border-blue-400">
          {educations.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              className="relative pl-8 pb-8 group"
              >
              {/* Dot Indicator */}
              <div className="absolute -left-[14px] w-7 h-7 bg-green-500 dark:bg-green-400 rounded-full flex items-center justify-center">
                  <FaGraduationCap className="text-white text-lg" />
              </div>

              {/* Content */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">{edu.degree} in {edu.major}</h3>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">{edu.institution} | {edu.duration}</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">GPA: {edu.gpa}</p>
              </div>
              </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
