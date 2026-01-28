import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { ServicesSection } from '@/app/components/ServicesSection';
import { About } from '@/app/components/About';
import { Portfolio } from '@/app/components/Portfolio';
import { Contact } from '@/app/components/Contact';
import { Footer } from '@/app/components/Footer';
import { ClientArea } from '@/app/pages/ClientArea';

function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/area-cliente" element={<ClientArea />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}