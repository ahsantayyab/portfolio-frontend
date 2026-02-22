import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 1000,
      padding: '1rem 2rem',
      background: scrolled ? 'rgba(13,13,26,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid #2a2a4a' : 'none',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      transition: 'all 0.3s ease'
    }}>
      {/* Logo */}
      <div
        onClick={() => scrollTo('Home')}
        style={{
          fontFamily: 'Fira Code, monospace',
          fontSize: '1.4rem', fontWeight: 700,
          background: 'linear-gradient(135deg,#6c63ff,#f50057)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          cursor: 'pointer'
        }}
      >
        &lt;Ahsan /&gt;
      </div>

      {/* Desktop Links */}
      <ul style={{
        display: 'flex', gap: '2rem', listStyle: 'none',
        margin: 0, padding: 0
      }} className="nav-desktop">
        {navLinks.map(link => (
          <li key={link}>
            <button
              onClick={() => scrollTo(link)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: active === link ? '#6c63ff' : '#9090b0',
                fontFamily: 'Inter, sans-serif', fontSize: '0.95rem',
                fontWeight: active === link ? 600 : 400,
                padding: '0.3rem 0',
                borderBottom: active === link ? '2px solid #6c63ff' : '2px solid transparent',
                transition: 'all 0.2s ease'
              }}
            >
              {link}
            </button>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          color: '#e0e0ff', fontSize: '1.5rem', display: 'none'
        }}
        className="nav-hamburger"
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, width: '100%',
          background: 'rgba(13,13,26,0.98)', padding: '1rem 0',
          borderBottom: '1px solid #2a2a4a'
        }}>
          {navLinks.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                display: 'block', width: '100%', textAlign: 'left',
                padding: '0.75rem 2rem', background: 'none', border: 'none',
                color: active === link ? '#6c63ff' : '#e0e0ff',
                fontSize: '1rem', cursor: 'pointer', fontFamily: 'Inter'
              }}
            >
              {link}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}