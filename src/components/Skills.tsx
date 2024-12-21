'use client'; // This marks the component as a client component

const skills = [
  { name: 'Python', icon: '/icons/python.svg' },
  { name: 'PyTorch', icon: '/icons/pytorch.svg' },
  { name: 'Next.js', icon: '/icons/nextjs.svg' },
  { name: 'TypeScript', icon: '/icons/typescript.svg' },
  { name: 'TailwindCSS', icon: '/icons/tailwindcss.svg' },
  { name: 'Flutter', icon: '/icons/flutter.svg' },
  { name: 'Android Java', icon: '/icons/java.svg' },
];

export default function Skills() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-700 text-center">
      <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white">
        Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition-transform transform hover:scale-105"
          >
            {/* Single Icon for both themes */}
            <img
              src={skill.icon}
              alt={`${skill.name} Icon`}
              aria-label={skill.name}
              className="h-16 mb-4 dark:filter dark:brightness-90"
            />
            <p className="text-lg font-medium text-gray-900 dark:text-gray-300">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
