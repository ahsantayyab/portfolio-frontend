import React from 'react';
import { FiMapPin, FiMail, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi';

const stats = [
  { value: '3+', label: 'Years Learning' },
  { value: '8+', label: 'Projects Built' },
  { value: '2', label: 'Certifications' },
  { value: '1', label: 'Work Experience' }
];

export default function About() {
  return (
    <section id="about" style={{ padding: '80px 0', background: '#0f0f20' }}>
      <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me better</p>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '4rem', alignItems: 'center'
        }} className="about-grid">

          {/* Left - Avatar & Info */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
            {/* Avatar placeholder */}
            <div style={{
              width: '200px', height: '200px', borderRadius: '50%',
              background: 'linear-gradient(135deg, #6c63ff, #f50057)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '5rem', fontWeight: 800, color: '#fff',
              boxShadow: '0 0 50px rgba(108,99,255,0.4)'
            }}>
              AT
            </div>

            {/* Contact Info Card */}
            <div style={{
              background: '#13132b', borderRadius: '16px',
              padding: '1.5rem', width: '100%',
              border: '1px solid #2a2a4a'
            }}>
              {[
                { icon: <FiMapPin />, text: 'Rawalpindi, Pakistan' },
                { icon: <FiMail />, text: 'ahsantayyab50999@gmail.com' },
                { icon: <FiPhone />, text: '+92 319 5798625' },
                { icon: <FiGithub />, text: 'github.com/ahsantayyab' },
                { icon: <FiLinkedin />, text: 'linkedin.com/in/ahsan-tayyab' }
              ].map(({ icon, text }) => (
                <div key={text} style={{
                  display: 'flex', alignItems: 'center', gap: '0.8rem',
                  padding: '0.5rem 0', borderBottom: '1px solid #1a1a35',
                  color: '#9090b0', fontSize: '0.9rem'
                }}>
                  <span style={{ color: '#6c63ff', flexShrink: 0 }}>{icon}</span>
                  <span style={{ wordBreak: 'break-all' }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Bio */}
          <div>
            <h3 style={{
              fontSize: '1.8rem', fontWeight: 700,
              marginBottom: '1rem', color: '#e0e0ff'
            }}>
              Final Year CS Student &<br />
              <span style={{
                background: 'linear-gradient(135deg,#6c63ff,#f50057)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
              }}>AI Enthusiast</span>
            </h3>

            <p style={{ color: '#9090b0', lineHeight: 1.9, marginBottom: '1rem', fontSize: '0.97rem' }}>
              I'm a final-year Computer Science student at Pir Mehr Ali Shah Arid Agriculture University,
              Rawalpindi, majoring in Artificial Intelligence. My passion lies in building AI systems
              that address real-world challenges using Machine Learning, Deep Learning, and Computer Vision.
            </p>
            <p style={{ color: '#9090b0', lineHeight: 1.9, marginBottom: '2rem', fontSize: '0.97rem' }}>
              Beyond AI, I have a solid foundation in web development and have worked as a QA Specialist.
              I enjoy contributing to open-source, exploring LLMs, and continuously upgrading my skills
              with emerging AI frameworks and tools.
            </p>

            {/* Stats */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1rem', marginBottom: '2rem'
            }}>
              {stats.map(({ value, label }) => (
                <div key={label} style={{
                  background: '#13132b', borderRadius: '12px',
                  padding: '1rem 0.5rem', textAlign: 'center',
                  border: '1px solid #2a2a4a'
                }}>
                  <div style={{
                    fontSize: '1.8rem', fontWeight: 800,
                    background: 'linear-gradient(135deg,#6c63ff,#f50057)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
                  }}>{value}</div>
                  <div style={{ color: '#9090b0', fontSize: '0.75rem', marginTop: '0.25rem' }}>{label}</div>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {['Urdu (Native)', 'English (Professional)'].map(lang => (
                <span key={lang} style={{
                  padding: '0.4rem 1rem', borderRadius: '50px',
                  background: 'rgba(108,99,255,0.15)',
                  border: '1px solid rgba(108,99,255,0.3)',
                  color: '#6c63ff', fontSize: '0.85rem'
                }}>
                  🌐 {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}