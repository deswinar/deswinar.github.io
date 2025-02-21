import { ReactNode } from 'react';
import "../../../styles/globals.css";

export const metadata = {
  title: 'Creative Portfolio Showcase',
  description: 'A stunning portfolio template for showcasing creative work.',
};

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <main className="w-full px-0 pt-0">
          {children}
        </main>
      </body>
    </html>
  );
}
