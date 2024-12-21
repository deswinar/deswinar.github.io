'use client';
import { Autoplay, Navigation, Pagination, Zoom } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import 'swiper/css/zoom';
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from 'next/link';

const projects = [
  {
    title: 'Handsign Recognition',
    description: 'A desktop application showcasing handsign recognition using Python and PyTorch using LSTM model.',
    images: [
      '/images/projects/handsign_recognition/handsign-recognition-1.JPG',
      '/images/projects/handsign_recognition/handsign-recognition-2.JPG',
      '/images/projects/handsign_recognition/handsign-recognition-3.JPG',
      '/images/projects/handsign_recognition/handsign-recognition-4.JPG',
      '/images/projects/handsign_recognition/handsign-recognition-5.JPG',
    ],
    technologies: ['Python', 'PyTorch', 'LSTM'],
    liveDemo: 'https://example.com/project-one',
    github: 'https://github.com/username/project-one',
  },
  {
    title: 'Kamila School Management',
    description: 'A mobile application to manage various school activities, such as attendance, scoring and reporting',
    images: [
      '/images/projects/kamila_icms/kamila-icms-1.jpg',
      '/images/projects/kamila_icms/kamila-icms-2.jpg',
      '/images/projects/kamila_icms/kamila-icms-3.jpg',
      '/images/projects/kamila_icms/kamila-icms-4.jpg',
      '/images/projects/kamila_icms/kamila-icms-5.jpg',
    ],
    technologies: ['Flutter', 'Firebase'],
    liveDemo: 'https://example.com/project-two',
    github: 'https://github.com/username/project-two',
  },
  {
    title: 'Vending Machine Software (Frontend)',
    description: 'Vending machine application using android and java.',
    images: [
      '/images/projects/vending_machine/vending-machine-1.jpg',
      '/images/projects/vending_machine/vending-machine-2.jpg',
      '/images/projects/vending_machine/vending-machine-3.jpg',
    ],
    technologies: ['Android', 'Java'],
    liveDemo: 'https://example.com/project-three',
    github: 'https://github.com/username/project-three',
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white">Featured Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow"
          >
            {/* Swiper Carousel with Pagination (Bullets) */}
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              zoom={{ maxRatio: 2 }}
              pagination={{ type: "bullets", clickable: true }}
              autoplay={{ delay: 5000 }}
              modules={[Zoom, Autoplay, Navigation, Pagination]}
              className="rounded-t-lg"
            >
              {project.images.map((image, imgIndex) => (
                <SwiperSlide key={imgIndex}>
                  <div className="swiper-zoom-container">
                    <img
                      src={image}
                      alt={`${project.title} - Image ${imgIndex + 1}`}
                      className="w-full h-48 object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              {/* Technologies */}
              <ul className="flex flex-wrap justify-center gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <li
                    key={techIndex}
                    className="text-sm bg-gray-200 dark:bg-gray-700 dark:text-white text-gray-900 rounded-full px-3 py-1"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              {/* Buttons */}
              <div className="flex justify-center space-x-4">
                <Link
                  href={project.liveDemo}
                  className="px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded-lg shadow hover:bg-blue-600 dark:hover:bg-blue-700"
                >
                  Live Demo
                </Link>
                <Link
                  href={project.github}
                  className="px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg shadow hover:bg-gray-900 dark:hover:bg-gray-800"
                >
                  View Code
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Link
          href="/projects"
          className="px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white rounded-lg shadow hover:bg-blue-700 dark:hover:bg-blue-800"
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
}
