import React from 'react';
import {
  FiGithub, FiLinkedin, FiMail,
  FiHeart, FiArrowUp
} from 'react-icons/fi';

const footerLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' }
];

const socials = [
  {
    icon: <FiGithub />,
    href: 'https://github.com/ahsantayyab',
    label: 'GitHub',
    color: '#e0e0ff'
  },
  {
    icon: <FiLinkedin />,
    href: 'https://linkedin.com/in/ahsan-tayyab',
    label: 'LinkedIn',
    color: '#0077b5'
  },
  {
    icon: <FiMail />,
    href: 'mailto:ahsantayyab50999@gmail.com',
    label: 'Email',
    color: '#6c63ff'
  }
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: '#080812',
      borderTop: '1px solid #2a2a4a',
      padding: '3rem 0 1.5rem'
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>

        {/* Top Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr',
          gap: '3rem',
          marginBottom: '3rem'
        }} className="footer-grid">

          {/* Brand Column */}
          <div>
            <div style={{
              fontFamily: 'Fira Code, monospace',
              fontSize: '1.6rem', fontWeight: 800,
              background: 'linear-gradient(135deg, #6c63ff, #f50057)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '1rem'
            }}>
              &lt;Ahsan /&gt;
            </div>
            <p style={{
              color: '#9090b0', fontSize: '0.88rem',
              lineHeight: 1.8, maxWidth: '280px',
              marginBottom: '1.5rem'
            }}>
              Final year CS student & AI enthusiast based in Rawalpindi, Pakistan.
              Building intelligent systems that bridge AI with real-world applications.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {socials.map(({ icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  title={label}
                  style={{
                    width: '40px', height: '40px',
                    borderRadius: '10px',
                    background: '#13132b',
                    border: '1px solid #2a2a4a',
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'center',
                    color: '#9090b0', fontSize: '1.1rem',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.borderColor = color;
                    e.currentTarget.style.color = color;
                    e.currentTarget.style.background = color + '15';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.borderColor = '#2a2a4a';
                    e.currentTarget.style.color = '#9090b0';
                    e.currentTarget.style.background = '#13132b';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              color: '#e0e0ff', fontSize: '0.95rem',
              fontWeight: 700, marginBottom: '1.25rem',
              display: 'flex', alignItems: 'center', gap: '0.5rem'
            }}>
              <span style={{
                width: '20px', height: '2px',
                background: 'linear-gradient(90deg, #6c63ff, #f50057)',
                display: 'inline-block', borderRadius: '2px'
              }} />
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {footerLinks.map(link => (
                <li key={link.id} style={{ marginBottom: '0.6rem' }}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    style={{
                      background: 'none', border: 'none',
                      color: '#9090b0', cursor: 'pointer',
                      fontSize: '0.88rem', padding: 0,
                      fontFamily: 'Inter, sans-serif',
                      transition: 'color 0.2s',
                      display: 'flex', alignItems: 'center', gap: '0.4rem'
                    }}
                    onMouseOver={e => e.currentTarget.style.color = '#6c63ff'}
                    onMouseOut={e => e.currentTarget.style.color = '#9090b0'}
                  >
                    <span style={{ color: '#6c63ff', fontSize: '0.7rem' }}>▸</span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 style={{
              color: '#e0e0ff', fontSize: '0.95rem',
              fontWeight: 700, marginBottom: '1.25rem',
              display: 'flex', alignItems: 'center', gap: '0.5rem'
            }}>
              <span style={{
                width: '20px', height: '2px',
                background: 'linear-gradient(90deg, #6c63ff, #f50057)',
                display: 'inline-block', borderRadius: '2px'
              }} />
              Tech Stack
            </h4>
            <div style={{
              display: 'flex', flexDirection: 'column', gap: '0.5rem'
            }}>
              {[
                { label: 'Frontend', value: 'React.js', color: '#61dafb' },
                { label: 'Backend', value: 'Node.js + Express', color: '#68a063' },
                { label: 'Database', value: 'MongoDB', color: '#47a248' },
                { label: 'Styling', value: 'Pure CSS-in-JS', color: '#6c63ff' },
                { label: 'Icons', value: 'React Icons', color: '#f50057' }
              ].map(({ label, value, color }) => (
                <div key={label} style={{
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'center', padding: '0.4rem 0',
                  borderBottom: '1px solid #1a1a35'
                }}>
                  <span style={{ color: '#9090b0', fontSize: '0.8rem' }}>{label}</span>
                  <span style={{
                    color, fontSize: '0.8rem',
                    fontFamily: 'Fira Code, monospace', fontWeight: 500
                  }}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #2a2a4a, transparent)',
          marginBottom: '1.5rem'
        }} />

        {/* Bottom Row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap', gap: '1rem'
        }}>
          <p style={{
            color: '#9090b0', fontSize: '0.82rem',
            display: 'flex', alignItems: 'center', gap: '0.4rem'
          }}>
            © {new Date().getFullYear()} Muhammad Ahsan Tayyab. Made with
            <FiHeart style={{ color: '#f50057' }} />
            in Pakistan
          </p>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.4rem',
              background: 'rgba(108,99,255,0.15)',
              border: '1px solid rgba(108,99,255,0.3)',
              color: '#6c63ff', padding: '0.5rem 1rem',
              borderRadius: '50px', cursor: 'pointer',
              fontSize: '0.82rem', fontWeight: 600,
              fontFamily: 'Inter, sans-serif',
              transition: 'all 0.2s'
            }}
            onMouseOver={e => {
              e.currentTarget.style.background = 'rgba(108,99,255,0.3)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.background = 'rgba(108,99,255,0.15)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <FiArrowUp /> Back to Top
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </footer>
  );
}