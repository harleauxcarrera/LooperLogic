import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import FAQ from './pages/FAQ';
import Resources from './pages/Resources';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import ParallaxStars from './components/ParallaxStars';

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen flex flex-col relative">
        <div className="fixed inset-0">
          <Canvas
            camera={{ position: [0, 0, 1] }}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          >
            <ParallaxStars />
          </Canvas>
        </div>
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/success" element={<Success />} />
              <Route path="/cancel" element={<Cancel />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;