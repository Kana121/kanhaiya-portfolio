import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Services />
        <Skills />
        <Experience />
        <Education />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;