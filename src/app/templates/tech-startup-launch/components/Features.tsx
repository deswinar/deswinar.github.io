"use client";

import { motion } from "framer-motion";

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Cutting-Edge Technology",
    description: "Leveraging the latest innovations to drive your business forward.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m0-8v2m3.536 3.536l1.414 1.414m-9.9-1.414l-1.414 1.414M15 12h2m-8 0H5m3.536-3.536L7.122 7.05m9.9 0l-1.414 1.414" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Seamless Integration",
    description: "Connect effortlessly with your favorite tools and platforms.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 010 5.656m-3.414-5.657a4 4 0 015.657 5.657m-3.535-3.536a4 4 0 000-5.657m3.535 3.535L15 15m-3-3L9 9" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Scalable Infrastructure",
    description: "Built to grow with your business, ensuring performance and reliability.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h4v11H3zM9 6h4v15H9zM15 14h4v7h-4z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "AI-Powered Analytics",
    description: "Gain valuable insights with machine learning-driven analytics.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 0h6m-3 0v2m-6-6V7a2 2 0 012-2h4a2 2 0 012 2v4" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Secure & Reliable",
    description: "Industry-leading security to keep your data safe and secure.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m0-8v2m4 4v6H8v-6m-3-2a9 9 0 1118 0M12 3v2m4 4H8" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "24/7 Support",
    description: "Our team is available anytime to assist you with any issues.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 16v-2m8-6h2M4 12H2m15.536-5.536l1.414-1.414M5.05 5.05L6.464 6.464M17.95 17.95l1.414 1.414M6.464 17.95l-1.414 1.414" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">
          Our Key Features
        </h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 255, 0.2)" }}
            >
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} className="mb-4">
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
