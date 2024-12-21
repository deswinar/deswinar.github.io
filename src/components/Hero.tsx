// components/Hero.jsx
'use client';
import Typewriter from 'typewriter-effect';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Triggered only on the client side
  }, []);

  return (
    <section className="flex flex-col items-center justify-center text-center py-20">
      <h1 className="text-5xl font-extrabold mb-6" style={{ color: 'var(--foreground)' }}>
        Welcome to <span className="text-blue-500">Deswin's Digital Space</span>
      </h1>
      <p className="text-xl mb-6 max-w-2xl" style={{ color: 'var(--secondary-foreground)' }}>
        I'm <span className="font-bold text-blue-500">Deswin</span>, a developer driven by a passion for creating impactful digital experiences.
        Whether it's crafting innovative applications or solving complex challenges, my goal is to bring ideas to life through code.
      </p>

      <div className="text-lg mb-6 max-w-2xl" style={{ color: 'var(--secondary-foreground)' }}>
        I specialize in{' '}
        <span className="text-blue-500">
          {isClient && (
            <Typewriter
              options={{
                strings: ['Web Development', 'Mobile Apps', 'AI Solutions'],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30, // Optional: Makes the deleting effect look smoother
              }}
            />
          )}
        </span>
      </div>

      <p className="text-lg mb-4 max-w-xl" style={{ color: 'var(--secondary-foreground)' }}>
        Take a journey through my portfolio to explore projects that merge creativity and technology, discover the skills that fuel my craft,
        and connect with me to collaborate on something extraordinary.
      </p>
      <a
        href="/projects"
        className="cta-button mt-6 px-8 py-3 bg-blue-500 text-white font-medium text-lg rounded-lg shadow
          hover:bg-blue-600 hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out"
      >
        Explore My Work
      </a>
    </section>
  );
}
