import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import Benefits from './components/Benefits';
import ProblemsSection from './components/ProblemsSection';
import VideoSection from './components/VideoSection';
import Services from './components/Services';
import ClinicGallery from './components/ClinicGallery';
import Testimonials from './components/Testimonials';
import PatientComments from './components/PatientComments';
import Specialist from './components/Specialist';
import LocationMap from './components/LocationMap';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1700);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>
      <Header />
      <main>
        <HeroCarousel />
        <Benefits />
        <ProblemsSection />
        <VideoSection />
        <Services />
        <ClinicGallery />
        <Testimonials />
        <PatientComments />
        <Specialist />
        <LocationMap />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
