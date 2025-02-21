// src/app/templates/tech-startup-launch/layout.tsx
import { ReactNode } from 'react';
import "../../../styles/globals.css";

export const metadata = {
  title: 'Tech Startup Launch',
  description: 'A modern landing page template designed for tech startups.',
};

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <main className="w-full px-0 py-0">
          {children}
        </main>
      </body>
    </html>
  );
}
