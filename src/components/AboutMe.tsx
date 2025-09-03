'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import Image from 'next/image';

const experiences = [
  {
    id: 1,
    title: 'Fullstack Developer',
    company: 'PT. Bersama Kreatif Teknologi',
    duration: 'May 2025 - Present',
    location: 'Jakarta, Indonesia',
    description: 'Developed a Flutter-based property listing app, enabling users to explore and submit listings through property owners and share referral codes with other users.\nDesigned an optimization for backend cron job system by consolidating multiple task schedulers into a centralized cron runner, reducing redundant executions and lowering server resource usage by ~60%.',
  },
  {
    id: 2,
    title: 'Freelance Software Developer',
    company: 'Freelance',
    duration: 'August 2020 - Present',
    location: 'Jakarta, Indonesia',
    description: 'Developed Flutter and Android apps with a focus on user-friendly designs. Built Next.js web applications with performance optimization and AI integration. Integrated Firebase and Supabase for backend services, and used Python for machine learning projects.',
  },
  {
    id: 3,
    title: 'Website and Mobile Developer',
    company: 'Jakarta Bike Hub',
    duration: 'October 2019 - March 2020',
    location: 'Jakarta, Indonesia',
    description: 'Developed an Android app for e-bike rentals with Xendit payment gateway and Google Maps API integration. Built IoT communication services using Node.js and TCP. Designed a responsive landing page website to enhance user engagement.',
  },
  {
    id: 4,
    title: 'Website Developer',
    company: 'PT. Maxxima Innovative Engineering',
    duration: 'October 2018 - October 2019',
    location: 'Jakarta, Indonesia',
    description: 'Developed dynamic web applications using Laravel and CodeIgniter. Performed maintenance and bug fixing for existing applications. Collaborated with teams to deliver custom web solutions that enhanced client workflows.',
  },
];

const education = [
  {
    id: 1,
    degree: 'Bootcamp Mobile Apps Development',
    institution: 'Dibimbing.id',
    duration: 'May 2025 – Present',
    location: 'Jakarta, Indonesia',
    description: `Learned Dart basics, OOP, package management, state management, responsive and custom widgets, routing, Git, API consumption, Firebase Auth, and Firestore.`,
    skills: ['Dart', 'Flutter', 'Git', 'Firebase'],
  },
  {
    id: 2,
    degree: 'Flutter Mobile Apps Development',
    institution: 'Sanbercode',
    duration: 'Feb 2025 – Mar 2025',
    location: 'Jakarta, Indonesia',
    description: `Learned Dart, Git, OOP, GetX, REST API, Figma slicing, Firebase Auth, and more. Final project was a CBT quiz app — featured by Sanbercode. Graduated as Top 1 student of the batch.`,
    skills: ['Dart', 'Flutter', 'Git', 'Firebase', 'GetX', 'Figma'],
  },
  {
    id: 3,
    degree: 'Associate Degree',
    major: 'Industrial Electrical Engineering',
    institution: 'Politeknik Negeri Jakarta',
    duration: '2015 - 2018',
    gpa: '3.42',
    location: 'Jakarta, Indonesia',
    description: 'Final project: Developed a prototype of a Rupiah banknote denomination exchange machine using Python and Raspberry Pi 3.',
  },
];

export default function AboutMe() {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900 text-center">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-10 text-gray-900 dark:text-white"
        >
          About Me
        </motion.h2>

        {/* Left Section - Text Content */}
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col-reverse md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I&apos;m a passionate <span className="font-semibold text-blue-500">Software Developer</span> dedicated to crafting robust and user-friendly applications. I love turning ideas into reality through code and design.
          </p>

          {/* Key Highlights */}
          <div className="mt-6 flex flex-wrap gap-6 justify-center md:justify-start">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-500">4+</p>
              <p className="text-gray-600 dark:text-gray-300">Years Experience</p>
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
        {/* Profile Picture */}
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto md:mx-0"
          >
            <Image
              src="/images/profile-picture.jpg" // Replace with your profile picture path
              alt="Profile Picture"
              width={250}
              height={250}
              className="rounded-full shadow-lg"
            />
          </motion.div>
        </div>

        {/* Working Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Work Experience</h3>
          <div className="relative border-l-4 border-blue-500 dark:border-blue-400">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3, duration: 0.8 }}
                className="relative pl-8 pb-8 group"
              >
                {/* Dot Indicator */}
                <div className="absolute -left-[14px] w-7 h-7 bg-blue-500 dark:bg-blue-400 rounded-full flex items-center justify-center">
                  <FaBriefcase className="text-white text-lg" />
                </div>

                {/* Content */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">{exp.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">{exp.company} | {exp.duration}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{exp.location}</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Education</h3>
          <div className="relative border-l-4 border-green-500 dark:border-green-400">
            {education.map((edu, index) => (
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
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                    {edu.degree}
                    {edu.major && ` in ${edu.major}`}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 font-medium">
                    {edu.institution} | {edu.duration}
                  </p>

                  {edu.location && (
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                      {edu.location}
                    </p>
                  )}

                  {edu.gpa && (
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      GPA: {edu.gpa}
                    </p>
                  )}

                  {edu.description && (
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      {edu.description}
                    </p>
                  )}

                  {edu.skills && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      <span className="font-semibold">Technical Skills:</span> {edu.skills.join(', ')}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}