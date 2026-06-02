import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import Benefits from './components/Benefits';
import ProblemsSection from './components/ProblemsSection';
import VideoSection from './components/VideoSection';
import Services from './components/Services';
import ClinicGallery from './components/ClinicGallery';
import Testimonials from './components/Testimonials';
import Specialist from './components/Specialist';
import LocationMap from './components/LocationMap';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroCarousel />
        <Benefits />
        <ProblemsSection />
        <VideoSection />
        <Services />
        <ClinicGallery />
        <Testimonials />
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
