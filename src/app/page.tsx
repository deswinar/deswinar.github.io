import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import FeaturedProjects from '../components/FeaturedProjects';
import Skills from '../components/Skills';
import CallToAction from '../components/CallToAction';
import SocialLinks from '../components/SocialLinks';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <FeaturedProjects />
      <Skills />
      <CallToAction />
      <SocialLinks />
      <Contact />
    </div>
  );
}
