import React, { Suspense, lazy } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

// Lazy load non-critical sections for performance
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Projects = lazy(() => import('./components/Projects'));
const FrameScrollAnimation = lazy(() => import('./components/FrameScrollAnimation'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      
      <Suspense fallback={<div className="h-screen bg-black" />}>
        {/* Welcome to Portfolio Section */}
        <FrameScrollAnimation frameCount={240} />
        <About />
        <Projects />
        <Services />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
