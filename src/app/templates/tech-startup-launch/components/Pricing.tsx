// src/app/templates/tech-startup-launch/components/Pricing.tsx
"use client";

import { motion } from 'framer-motion';

interface PricingPlan {
  id: number;
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
}

const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: 'Starter',
    price: '$19',
    period: 'month',
    features: [
      'Basic feature set',
      'Up to 100 users',
      'Email support',
    ],
    cta: 'Get Started',
  },
  {
    id: 2,
    name: 'Professional',
    price: '$49',
    period: 'month',
    features: [
      'All Starter features',
      'Unlimited users',
      'Priority email support',
      'Advanced analytics',
    ],
    cta: 'Upgrade Now',
  },
  {
    id: 3,
    name: 'Enterprise',
    price: '$99',
    period: 'month',
    features: [
      'All Professional features',
      'Dedicated account manager',
      'Custom integrations',
      '24/7 support',
    ],
    cta: 'Contact Sales',
  },
];

export default function Pricing() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">
          Pricing Plans
        </h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className="flex flex-col border border-gray-200 dark:border-gray-700 rounded-lg shadow hover:shadow-xl transition-shadow duration-300 p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 text-center">
                {plan.name}
              </h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-gray-800 dark:text-gray-100">
                  {plan.price}
                </span>
                <span className="text-lg text-gray-500 dark:text-gray-400">
                  /{plan.period}
                </span>
              </div>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                    <svg
                      className="w-4 h-4 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <a
                  href="#"
                  className="block text-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
