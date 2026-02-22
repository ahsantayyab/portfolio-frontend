import React, { useState } from 'react';
import { FiBriefcase, FiCalendar, FiMapPin, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const experiences = [
  {
    role: 'Quality Assurance Specialist',
    company: 'Lifti App',
    duration: 'August 2024 – November 2024',
    location: 'Remote',
    type: 'Full-time',
    color: '#6c63ff',
    responsibilities: [
      'Designed and executed comprehensive test cases for the Lifti mobile application.',
      'Performed manual testing across multiple devices and platforms to ensure quality.',
      'Conducted API testing using Postman to validate backend endpoints.',
      'Documented bugs with detailed reports and tracked fixes through resolution.',
      'Collaborated with the design team on UI/UX improvements and company works.',
      'Maintained QA documentation and contributed to overall product quality assurance.'
    ]
  }
];

const education = [
  {
    degree: "Bachelor's in Computer Sciences",
    major: 'Major in Artificial Intelligence',
    institution: 'Pir Mehr Ali Shah Arid Agriculture University, Rawalpindi',
    duration: '2022 – Present (Final Year)',
    color: '#f50057',
    highlights: [
      'Specializing in Machine Learning, Deep Learning, and Computer Vision',
      'Final year research project: Vehicle Re-identification & Crime Detection',
      'Active contributor to AI/ML open-source projects on GitHub',
      'Completed multiple hands-on AI projects using PyTorch, TensorFlow, and OpenCV'
    ]
  },
  {
    degree: 'Intermediate in Computer Sciences',
    institution: 'Pride Science College, Talagang',
    duration: '2020 – 2022',
    color: '#00e676',
    highlights: [
      'Completed FSc with Computer Science as major subject',
      'Built foundational knowledge in programming and mathematics'
    ]
  }
];

function TimelineItem({ item, type, index }) {
  const [expanded, setExpanded] = useState(index === 0);
  const isExp = type === 'experience';

  return (
    <div style={{
      position: 'relative',
      paddingLeft: '2.5rem',
      marginBottom: '2rem'
    }}>
      {/* Timeline line */}
      <div style={{
        position: 'absolute', left: '0', top: '0',
        width: '2px', height: '100%',
        background: `linear-gradient(to bottom, ${item.color}, transparent)`
      }} />

      {/* Timeline dot */}
      <div style={{
        position: 'absolute', left: '-7px', top: '20px',
        width: '16px', height: '16px', borderRadius: '50%',
        background: item.color,
        boxShadow: `0 0 12px ${item.color}88`,
        border: '2px solid #0d0d1a'
      }} />

      {/* Card */}
      <div style={{
        background: '#13132b', borderRadius: '16px',
        border: `1px solid ${expanded ? item.color + '44' : '#2a2a4a'}`,
        overflow: 'hidden', transition: 'all 0.3s ease'
      }}>
        {/* Card Header */}
        <div
          onClick={() => setExpanded(!expanded)}
          style={{
            padding: '1.25rem 1.5rem',
            cursor: 'pointer',
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'flex-start', gap: '1rem'
          }}
        >
          <div style={{ flex: 1 }}>
            {/* Role / Degree */}
            <h3 style={{
              color: '#e0e0ff', fontSize: '1.05rem',
              fontWeight: 700, marginBottom: '0.3rem'
            }}>
              {isExp ? item.role : item.degree}
            </h3>

            {/* Company / Institution */}
            <div style={{
              color: item.color, fontSize: '0.9rem',
              fontWeight: 600, marginBottom: '0.5rem'
            }}>
              {isExp ? item.company : item.institution}
            </div>

            {/* Meta info */}
            <div style={{
              display: 'flex', flexWrap: 'wrap',
              gap: '1rem', alignItems: 'center'
            }}>
              <span style={{
                display: 'flex', alignItems: 'center', gap: '0.3rem',
                color: '#9090b0', fontSize: '0.82rem'
              }}>
                <FiCalendar style={{ color: item.color }} />
                {item.duration}
              </span>

              {isExp && item.location && (
                <span style={{
                  display: 'flex', alignItems: 'center', gap: '0.3rem',
                  color: '#9090b0', fontSize: '0.82rem'
                }}>
                  <FiMapPin style={{ color: item.color }} />
                  {item.location}
                </span>
              )}

              {isExp && item.type && (
                <span style={{
                  padding: '0.2rem 0.7rem', borderRadius: '50px',
                  background: item.color + '22',
                  border: `1px solid ${item.color}44`,
                  color: item.color, fontSize: '0.75rem', fontWeight: 600
                }}>
                  {item.type}
                </span>
              )}

              {!isExp && item.major && (
                <span style={{
                  padding: '0.2rem 0.7rem', borderRadius: '50px',
                  background: item.color + '22',
                  border: `1px solid ${item.color}44`,
                  color: item.color, fontSize: '0.75rem', fontWeight: 600
                }}>
                  {item.major}
                </span>
              )}
            </div>
          </div>

          {/* Expand toggle */}
          <button style={{
            background: 'none', border: 'none',
            color: '#9090b0', cursor: 'pointer',
            fontSize: '1.2rem', flexShrink: 0,
            padding: '0.2rem', transition: 'color 0.2s'
          }}
            onMouseOver={e => e.currentTarget.style.color = item.color}
            onMouseOut={e => e.currentTarget.style.color = '#9090b0'}
          >
            {expanded ? <FiChevronUp /> : <FiChevronDown />}
          </button>
        </div>

        {/* Expanded Content */}
        {expanded && (
          <div style={{
            padding: '0 1.5rem 1.5rem',
            borderTop: `1px solid #2a2a4a`
          }}>
            <ul style={{
              margin: '1rem 0 0', padding: 0,
              listStyle: 'none', display: 'flex',
              flexDirection: 'column', gap: '0.6rem'
            }}>
              {(isExp ? item.responsibilities : item.highlights).map((point, i) => (
                <li key={i} style={{
                  display: 'flex', alignItems: 'flex-start',
                  gap: '0.75rem', color: '#9090b0',
                  fontSize: '0.88rem', lineHeight: 1.7
                }}>
                  <span style={{
                    color: item.color, flexShrink: 0,
                    marginTop: '0.35rem', fontSize: '0.5rem',
                    width: '6px', height: '6px', borderRadius: '50%',
                    background: item.color, display: 'inline-block'
                  }} />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="experience" style={{ padding: '80px 0', background: '#0d0d1a' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
        <h2 className="section-title">Experience & Education</h2>
        <p className="section-subtitle">My journey so far</p>

        {/* Tab Toggle */}
        <div style={{
          display: 'flex', justifyContent: 'center',
          gap: '0', marginBottom: '3rem',
          background: '#13132b', borderRadius: '12px',
          padding: '4px', width: 'fit-content',
          margin: '0 auto 3rem', border: '1px solid #2a2a4a'
        }}>
          {[
            { key: 'experience', label: '💼 Work Experience' },
            { key: 'education', label: '🎓 Education' }
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              style={{
                padding: '0.6rem 1.5rem', borderRadius: '9px',
                border: 'none', cursor: 'pointer',
                background: activeTab === tab.key
                  ? 'linear-gradient(135deg, #6c63ff, #f50057)'
                  : 'transparent',
                color: activeTab === tab.key ? '#fff' : '#9090b0',
                fontWeight: 600, fontSize: '0.9rem',
                transition: 'all 0.25s ease'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{ paddingLeft: '1rem' }}>
          {activeTab === 'experience'
            ? experiences.map((item, i) => (
                <TimelineItem key={i} item={item} type="experience" index={i} />
              ))
            : education.map((item, i) => (
                <TimelineItem key={i} item={item} type="education" index={i} />
              ))
          }
        </div>
      </div>
    </section>
  );
}