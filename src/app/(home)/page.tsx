import Hero from '../../components/Hero';
import AboutMe from '../../components/AboutMe';
import FeaturedProjects from '../../components/FeaturedProjects';
import Skills from '../../components/Skills';
import CallToAction from '../../components/CallToAction';
import SocialLinks from '../../components/SocialLinks';
import Contact from '../../components/Contact';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <FeaturedProjects />
      <Skills />
      <CallToAction />
      <AboutMe />
      <Contact />
      <SocialLinks />
    </div>
  );
}
