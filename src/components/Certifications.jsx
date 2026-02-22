import React, { useState } from 'react';
import { FiAward, FiExternalLink, FiCalendar } from 'react-icons/fi';

const certifications = [
  {
    title: 'Prompt Engineering For Everyone',
    issuer: 'Cognitive Class (IBM)',
    year: '2025',
    color: '#6c63ff',
    icon: '🧠',
    skills: ['Prompt Design', 'LLMs', 'AI Interaction', 'Chain-of-Thought'],
    description: 'Learned effective prompt engineering techniques for working with large language models and AI assistants.'
  },
  {
    title: 'Reinforcement Learning and Deep Learning Essentials',
    issuer: 'Cognitive Class (IBM)',
    year: '2025',
    color: '#f50057',
    icon: '🤖',
    skills: ['Reinforcement Learning', 'Deep Learning', 'Neural Networks', 'Q-Learning'],
    description: 'Gained solid understanding of deep learning architectures and reinforcement learning algorithms and their real-world applications.'
  }
];

const learningGoals = [
  { label: 'MLOps & Model Deployment', progress: 40, color: '#6c63ff' },
  { label: 'Transformer Architecture (Research)', progress: 60, color: '#f50057' },
  { label: 'Advanced Computer Vision', progress: 70, color: '#00e676' },
  { label: 'LLM Fine-tuning', progress: 45, color: '#ff9800' }
];

function CertCard({ cert }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#1a1a35' : '#13132b',
        borderRadius: '16px', padding: '1.75rem',
        border: `1px solid ${hovered ? cert.color + '55' : '#2a2a4a'}`,
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: hovered ? `0 12px 35px ${cert.color}22` : 'none',
        display: 'flex', flexDirection: 'column', gap: '1rem'
      }}
    >
      {/* Top Row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
        {/* Icon */}
        <div style={{
          width: '56px', height: '56px', borderRadius: '14px',
          background: cert.color + '22',
          border: `1px solid ${cert.color}44`,
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: '1.8rem',
          flexShrink: 0
        }}>
          {cert.icon}
        </div>

        {/* Title & Issuer */}
        <div style={{ flex: 1 }}>
          <h3 style={{
            color: '#e0e0ff', fontSize: '1rem',
            fontWeight: 700, marginBottom: '0.3rem',
            lineHeight: 1.4
          }}>
            {cert.title}
          </h3>
          <div style={{
            color: cert.color, fontSize: '0.85rem', fontWeight: 600
          }}>
            {cert.issuer}
          </div>
        </div>
      </div>

      {/* Description */}
      <p style={{ color: '#9090b0', fontSize: '0.87rem', lineHeight: 1.7 }}>
        {cert.description}
      </p>

      {/* Skills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {cert.skills.map(skill => (
          <span key={skill} style={{
            padding: '0.25rem 0.65rem', borderRadius: '4px',
            background: cert.color + '15',
            border: `1px solid ${cert.color}33`,
            color: cert.color, fontSize: '0.74rem',
            fontFamily: 'Fira Code, monospace'
          }}>
            {skill}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', paddingTop: '0.75rem',
        borderTop: '1px solid #2a2a4a'
      }}>
        <span style={{
          display: 'flex', alignItems: 'center', gap: '0.4rem',
          color: '#9090b0', fontSize: '0.8rem'
        }}>
          <FiCalendar style={{ color: cert.color }} />
          Issued {cert.year}
        </span>

        <div style={{
          display: 'flex', alignItems: 'center', gap: '0.3rem',
          color: '#00e676', fontSize: '0.8rem', fontWeight: 600
        }}>
          <FiAward />
          Verified
        </div>
      </div>
    </div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: '80px 0', background: '#0f0f20' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">Credentials & continuous learning</p>

        {/* Cert Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem', marginBottom: '4rem'
        }}>
          {certifications.map((cert, i) => (
            <CertCard key={i} cert={cert} />
          ))}
        </div>

        {/* Currently Learning Section */}
        <div style={{
          background: '#13132b', borderRadius: '20px',
          padding: '2rem', border: '1px solid #2a2a4a'
        }}>
          <h3 style={{
            color: '#e0e0ff', fontSize: '1.2rem',
            fontWeight: 700, marginBottom: '0.5rem',
            display: 'flex', alignItems: 'center', gap: '0.5rem'
          }}>
            📚 Currently Learning
          </h3>
          <p style={{
            color: '#9090b0', fontSize: '0.88rem',
            marginBottom: '1.75rem'
          }}>
            Areas I'm actively studying and improving in
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {learningGoals.map(({ label, progress, color }) => (
              <div key={label}>
                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  marginBottom: '0.4rem'
                }}>
                  <span style={{ color: '#e0e0ff', fontSize: '0.9rem' }}>{label}</span>
                  <span style={{
                    color, fontSize: '0.82rem',
                    fontFamily: 'Fira Code', fontWeight: 600
                  }}>
                    {progress}%
                  </span>
                </div>
                <div style={{
                  height: '6px', borderRadius: '3px',
                  background: '#0d0d1a', overflow: 'hidden'
                }}>
                  <div style={{
                    height: '100%', borderRadius: '3px',
                    width: `${progress}%`,
                    background: `linear-gradient(90deg, ${color}, ${color}88)`,
                    boxShadow: `0 0 8px ${color}55`
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}