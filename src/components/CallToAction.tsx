export default function CallToAction() {
  return (
    <section className="py-20 bg-blue-500 dark:bg-blue-700 text-white text-center">
      <h2 className="text-3xl font-bold mb-6">Let&apos;s Collaborate</h2>
      <p className="text-lg mb-8 max-w-lg mx-auto">
        Have an exciting project in mind? I&apos;m always open to new opportunities and collaborations. Let&apos;s build something great together!
      </p>
      <a
        href="#contact"
        className="inline-block px-8 py-3 bg-white text-blue-500 rounded-lg shadow-lg hover:bg-gray-100 dark:hover:bg-gray-200 dark:text-blue-700 transition focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Get in Touch
      </a>
    </section>
  );
}
