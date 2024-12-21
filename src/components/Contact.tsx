export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-green-50 to-green-100 dark:from-gray-700 dark:to-gray-800 text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Contact Me
      </h2>
      <p className="text-lg mb-8 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
        I'd love to hear from you. Feel free to reach out via email!
      </p>
      <a
        href="mailto:your-email@example.com"
        className="px-8 py-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 transition transform hover:scale-105"
        aria-label="Send an Email"
      >
        Send an Email
      </a>
    </section>
  );
}
