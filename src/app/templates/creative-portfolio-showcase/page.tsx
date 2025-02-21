import About from "./components/About";
import Contact from "./components/Contact";
import Educations from "./components/Educations";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";


export default function CreativePortfolioShowcasePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* Portfolio Showcase Section */}
      <Portfolio />

      {/* Experiences Section */}
      <Experiences />

      {/* Educations Section */}
      <Educations />
      
      {/* About Section */}
      <About />

      {/* Contact Section */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </>
  );
}
