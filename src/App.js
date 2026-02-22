import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1800);
  }, []);

  if (loading) {
    return (
      <div style={{
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        height: '100vh', background: '#0d0d1a', gap: '1.2rem'
      }}>
        {/* Animated Logo */}
        <div style={{
          fontFamily: 'Fira Code, monospace',
          fontSize: '2rem', fontWeight: 800,
          background: 'linear-gradient(135deg, #6c63ff, #f50057)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'pulse 1.2s ease-in-out infinite'
        }}>
          &lt;Ahsan /&gt;
        </div>

        {/* Spinner */}
        <div style={{
          width: '40px', height: '40px',
          border: '3px solid #2a2a4a',
          borderTop: '3px solid #6c63ff',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite'
        }} />

        <p style={{
          color: '#9090b0',
          fontFamily: 'Fira Code, monospace',
          fontSize: '0.85rem', letterSpacing: '2px'
        }}>
          Loading portfolio...
        </p>

        <style>{`
          @keyframes spin { to { transform: rotate(360deg); } }
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;