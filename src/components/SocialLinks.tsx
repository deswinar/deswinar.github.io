import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function SocialLinks() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Find Me On
      </h2>
      <div className="flex justify-center gap-8">
        <a
          href="https://github.com/deswinar"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-4xl text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white transition transform hover:scale-110"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-4xl text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition transform hover:scale-110"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="text-4xl text-gray-800 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-300 transition transform hover:scale-110"
        >
          <FaTwitter />
        </a>
      </div>
    </section>
  );
}
