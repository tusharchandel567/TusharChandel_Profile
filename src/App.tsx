import Nav from './components/Nav';
import Hero from './components/Hero';
import CareerSwitch from './components/CareerSwitch';
import FloatingSkills from './components/FloatingSkills';
import StatsCounter from './components/StatsCounter';
import About from './components/About';
import Skills from './components/Skills';
import DashboardMockup from './components/DashboardMockup';
import Projects from './components/Projects';
import DataVizGallery from './components/DataVizGallery';
import Deliverables from './components/Deliverables';
import ResumeBuilder from './components/ResumeBuilder';
import Experience from './components/Experience';
import DataEngineering from './components/DataEngineering';
import OfferLetter from './components/OfferLetter';
import Education from './components/Education';
import OpenRoles from './components/OpenRoles';
import JobAlerts from './components/JobAlerts';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: '#050709', color: '#EDF2F7' }}>
      <Nav />
      <Hero />                         {/* Real hoodie photo with Germany flag ring */}
      <CareerSwitch />                 {/* 3-stage career story */}
      <FloatingSkills />               {/* NEW: Rotating/floating skill orbs + India+Germany flag bg */}
      <StatsCounter />                 {/* Animated count-up KPIs */}
      <About />
      <Skills />
      <DashboardMockup />              {/* Full executive dashboard preview */}
      <Projects />
      <DataVizGallery />               {/* 8 chart types + keyword cloud */}
      <Deliverables />                 {/* 6 deliverables with timelines */}
      <ResumeBuilder />                {/* AI Resume + Cover Letter Builder */}
      <Experience />
      <DataEngineering />
      <OfferLetter />                  {/* RAYGAIN offer letter */}
      <Education />
      <OpenRoles />                    {/* NEW: Open roles in India & Germany with salaries */}
      <JobAlerts />                    {/* Daily job alerts + subscribe */}
      <Testimonials />                 {/* Company endorsements */}
      <Contact />
      <Footer />
    </div>
  );
}
