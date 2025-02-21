import About from "./components/About";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Portfolio from "./components/Portofolio";


export default function CreativePortfolioShowcasePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* Portfolio Showcase Section */}
      <Portfolio />

      {/* Experiences Section */}
      <Experiences />
      
      {/* About Section */}
      <About />

      {/* Contact Section */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </>
  );
}
