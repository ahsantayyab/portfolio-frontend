import React, { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';

const roles = [
  'AI & ML Engineer',
  'Computer Vision Developer',
  'Deep Learning Enthusiast',
  'Full Stack Developer'
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let i = typing ? displayed.length : displayed.length - 1;

    const timeout = setTimeout(() => {
      if (typing) {
        setDisplayed(current.slice(0, i + 1));
        if (i + 1 === current.length) {
          setTimeout(() => setTyping(false), 1800);
        }
      } else {
        setDisplayed(current.slice(0, i));
        if (i === 0) {
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTyping(true);
        }
      }
    }, typing ? 80 : 45);

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      justifyContent: 'center', position: 'relative', overflow: 'hidden',
      padding: '0 2rem'
    }}>
      {/* Animated background blobs */}
      <div style={{
        position: 'absolute', width: '500px', height: '500px',
        borderRadius: '50%', top: '-100px', right: '-100px',
        background: 'radial-gradient(circle, rgba(108,99,255,0.15), transparent 70%)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', width: '400px', height: '400px',
        borderRadius: '50%', bottom: '-80px', left: '-80px',
        background: 'radial-gradient(circle, rgba(245,0,87,0.1), transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div style={{ textAlign: 'center', maxWidth: '800px', zIndex: 1 }}>
        {/* Greeting */}
        <p style={{
          fontFamily: 'Fira Code, monospace', color: '#6c63ff',
          fontSize: '1rem', marginBottom: '1rem', letterSpacing: '2px'
        }}>
          👋 Hello, World! I'm
        </p>

        {/* Name */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          fontWeight: 800, marginBottom: '1rem', lineHeight: 1.1,
          background: 'linear-gradient(135deg, #ffffff, #6c63ff)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
        }}>
          Muhammad Ahsan Tayyab
        </h1>

        {/* Typed role */}
        <div style={{
          fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', fontWeight: 600,
          marginBottom: '1.5rem', height: '2.5rem',
          color: '#f50057', fontFamily: 'Fira Code, monospace'
        }}>
          {displayed}
          <span style={{ animation: 'blink 1s infinite', borderRight: '2px solid #f50057' }} />
        </div>

        {/* Bio */}
        <p style={{
          color: '#9090b0', fontSize: '1.05rem', maxWidth: '600px',
          margin: '0 auto 2.5rem', lineHeight: 1.8
        }}>
          Final year CS student specializing in AI, Machine Learning & Computer Vision.
          Building intelligent systems that solve real-world problems.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          <button
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            style={{
              padding: '0.85rem 2rem', borderRadius: '50px',
              background: 'linear-gradient(135deg, #6c63ff, #f50057)',
              border: 'none', color: '#fff', fontWeight: 600,
              fontSize: '1rem', cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(108,99,255,0.4)',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(108,99,255,0.5)'; }}
            onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(108,99,255,0.4)'; }}
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            style={{
              padding: '0.85rem 2rem', borderRadius: '50px',
              background: 'transparent',
              border: '2px solid #6c63ff', color: '#6c63ff',
              fontWeight: 600, fontSize: '1rem', cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseOver={e => { e.currentTarget.style.background = '#6c63ff'; e.currentTarget.style.color = '#fff'; }}
            onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#6c63ff'; }}
          >
            Hire Me
          </button>
        </div>

        {/* Social Links */}
        <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center' }}>
          {[
            { icon: <FiGithub />, url: 'https://github.com/ahsantayyab', label: 'GitHub' },
            { icon: <FiLinkedin />, url: 'https://linkedin.com/in/ahsan-tayyab', label: 'LinkedIn' },
            { icon: <FiMail />, url: 'mailto:ahsantayyab50999@gmail.com', label: 'Email' }
          ].map(({ icon, url, label }) => (
            <a
              key={label} href={url} target="_blank" rel="noreferrer"
              style={{
                width: '46px', height: '46px', borderRadius: '50%',
                border: '1px solid #2a2a4a', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                color: '#9090b0', fontSize: '1.2rem',
                transition: 'all 0.2s', textDecoration: 'none'
              }}
              onMouseOver={e => { e.currentTarget.style.borderColor = '#6c63ff'; e.currentTarget.style.color = '#6c63ff'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = '#2a2a4a'; e.currentTarget.style.color = '#9090b0'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem'
      }}>
        <span style={{ color: '#9090b0', fontSize: '0.75rem', fontFamily: 'Fira Code', letterSpacing: '1px' }}>
          scroll
        </span>
        <div style={{
          width: '1px', height: '40px',
          background: 'linear-gradient(to bottom, #6c63ff, transparent)',
          animation: 'scrollAnim 1.5s ease-in-out infinite'
        }} />
      </div>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes scrollAnim {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
      `}</style>
    </section>
  );
}