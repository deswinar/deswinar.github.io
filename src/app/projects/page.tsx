'use client';

import { Autoplay, Navigation, Pagination, Zoom } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '../constants/projects';

export default function ProjectsPage() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 text-center transition-colors">
      <h1 className="text-4xl font-bold mb-10 text-gray-900 dark:text-gray-100 transition-colors">
        All Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow dark:shadow-md"
          >
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              zoom={{ maxRatio: 2 }}
              pagination={{ type: 'bullets', clickable: true }}
              // autoplay={{ delay: 5000 }}
              modules={[Zoom, Autoplay, Navigation, Pagination]}
              className="rounded-t-lg"
            >
              {/* YouTube Video */}
              {project.youtubeLink && (
                <SwiperSlide>
                  <div className="relative w-full h-48 bg-black">
                    <iframe
                      src={`https://www.youtube.com/embed/${project.youtubeLink}`}
                      title={`${project.title} Video`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                  </div>
                </SwiperSlide>
              )}
              {project.images.map((image, imgIndex) => (
                <SwiperSlide key={imgIndex}>
                  <div className="swiper-zoom-container">
                    <Image
                      src={image}
                      alt={`${project.title} - Image ${imgIndex + 1}`}
                      className="w-full h-48 object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100 transition-colors">
                {project.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
                {project.description}
              </p>

              <ul className="flex flex-wrap justify-center gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <li
                    key={techIndex}
                    className="text-sm bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-full px-3 py-1 transition-colors"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="flex justify-center space-x-4">
                {project.liveDemo && (
                    <Link
                      href={project.liveDemo}
                      className="px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded-lg shadow hover:bg-blue-600 dark:hover:bg-blue-700"
                    >
                      Live Demo
                    </Link>
                  )}
                  {project.github && (
                    <Link
                      href={project.github}
                      className="px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg shadow hover:bg-gray-900 dark:hover:bg-gray-800"
                    >
                      View Code
                    </Link>
                  )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
