import Nav from './components/Nav';
import Hero from './components/Hero';
import CareerSwitch from './components/CareerSwitch';
import FloatingSkills from './components/FloatingSkills';
import StatsCounter from './components/StatsCounter';
import About from './components/About';
import Skills from './components/Skills';
import FrontendSkills from './components/FrontendSkills';
import FrontendProjects from './components/FrontendProjects';
import Projects from './components/Projects';
import CodeStats from './components/CodeStats';
import TechRadar from './components/TechRadar';
import PortfolioGallery from './components/PortfolioGallery';
import Freelancing from './components/Freelancing';
import ResumeBuilder from './components/ResumeBuilder';
import AITools from './components/AITools';
import Experience from './components/Experience';
import OfferLetter from './components/OfferLetter';
import Education from './components/Education';
import GermanLearning from './components/GermanLearning';
import OpenRoles from './components/OpenRoles';
import JobAlerts from './components/JobAlerts';
import Community from './components/Community';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: '#050709', color: '#EDF2F7' }}>
      <Nav />
      <Hero />                       {/* 🇮🇳🇩🇪 Big blinking floating flags */}
      <CareerSwitch />
      <FloatingSkills />
      <StatsCounter />
      <About />
      <Skills />
      <FrontendSkills />
      <PortfolioGallery />           {/* NEW: 6 project cards with filter */}
      <FrontendProjects />
      <Projects />
      <CodeStats />                 {/* NEW: GitHub stats, heatmap, language dist */}
      <TechRadar />                 {/* NEW: Adopt/Trial/Assess/Hold radar */}
      <Freelancing />               {/* NEW: 6 platforms + categories */}
      <ResumeBuilder />
      <AITools />
      <Experience />
      <OfferLetter />
      <Education />
      <GermanLearning />            {/* 🇩🇪 B2 learning journey */}
      <OpenRoles />
      <JobAlerts />
      <Community />                {/* NEW: 8 platforms + blog posts */}
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
