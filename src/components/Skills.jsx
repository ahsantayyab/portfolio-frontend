import React, { useState } from 'react';
import {
  SiPython, SiCplusplus, SiJavascript, SiReact,
  SiTensorflow, SiPytorch, SiOpencv, SiScikitlearn,
  SiKeras, SiGit, SiGithub, SiPostman, SiKaggle,
  SiArduino, SiMongodb, SiNodedotjs
} from 'react-icons/si';
import { FiCpu, FiCode, FiGlobe, FiCheckCircle, FiTool } from 'react-icons/fi';

const categories = [
  {
    name: 'AI & ML',
    icon: <FiCpu />,
    color: '#6c63ff',
    skills: [
      { name: 'PyTorch', icon: <SiPytorch />, level: 80 },
      { name: 'TensorFlow', icon: <SiTensorflow />, level: 75 },
      { name: 'Keras', icon: <SiKeras />, level: 78 },
      { name: 'Scikit-learn', icon: <SiScikitlearn />, level: 82 },
      { name: 'OpenCV', icon: <SiOpencv />, level: 85 },
      { name: 'Hugging Face', icon: <FiCpu />, level: 72 },
    ]
  },
  {
    name: 'Programming',
    icon: <FiCode />,
    color: '#f50057',
    skills: [
      { name: 'Python', icon: <SiPython />, level: 90 },
      { name: 'C/C++', icon: <SiCplusplus />, level: 70 },
      { name: 'JavaScript', icon: <SiJavascript />, level: 72 },
      { name: 'Java', icon: <FiCode />, level: 65 },
    ]
  },
  {
    name: 'Web & Tools',
    icon: <FiGlobe />,
    color: '#00e676',
    skills: [
      { name: 'React.js', icon: <SiReact />, level: 75 },
      { name: 'Node.js', icon: <SiNodedotjs />, level: 65 },
      { name: 'MongoDB', icon: <SiMongodb />, level: 65 },
      { name: 'Git/GitHub', icon: <SiGithub />, level: 85 },
      { name: 'Postman', icon: <SiPostman />, level: 80 },
      { name: 'Kaggle', icon: <SiKaggle />, level: 78 },
    ]
  },
  {
    name: 'QA & Testing',
    icon: <FiCheckCircle />,
    color: '#ff9800',
    skills: [
      { name: 'Manual Testing', icon: <FiCheckCircle />, level: 85 },
      { name: 'API Testing', icon: <SiPostman />, level: 82 },
      { name: 'Bug Reporting', icon: <FiTool />, level: 88 },
      { name: 'Test Case Design', icon: <FiCheckCircle />, level: 85 },
    ]
  }
];

const techBadges = [
  'RAG', 'Embeddings', 'LLMs', 'NLP', 'Deep Fake Detection',
  'Computer Vision', 'Google Colab', 'Blynk', 'Arduino',
  'DeepFace', 'Haar Cascade', 'Nodemailer', 'REST APIs'
];

function SkillBar({ name, icon, level, color }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#1a1a35' : '#13132b',
        borderRadius: '12px', padding: '1rem 1.2rem',
        border: `1px solid ${hovered ? color + '55' : '#2a2a4a'}`,
        transition: 'all 0.25s ease', cursor: 'default'
      }}
    >
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', marginBottom: '0.6rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ color, fontSize: '1.1rem' }}>{icon}</span>
          <span style={{ color: '#e0e0ff', fontSize: '0.9rem', fontWeight: 500 }}>{name}</span>
        </div>
        <span style={{
          color, fontSize: '0.8rem', fontFamily: 'Fira Code',
          fontWeight: 600
        }}>{level}%</span>
      </div>

      {/* Progress Bar */}
      <div style={{
        height: '5px', borderRadius: '3px',
        background: '#2a2a4a', overflow: 'hidden'
      }}>
        <div style={{
          height: '100%', borderRadius: '3px',
          width: `${level}%`,
          background: `linear-gradient(90deg, ${color}, ${color}aa)`,
          transition: 'width 1s ease',
          boxShadow: `0 0 8px ${color}66`
        }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" style={{ padding: '80px 0', background: '#0d0d1a' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">Technologies I work with</p>

        {/* Category Tabs */}
        <div style={{
          display: 'flex', gap: '0.75rem',
          justifyContent: 'center', flexWrap: 'wrap',
          marginBottom: '2.5rem'
        }}>
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(i)}
              style={{
                padding: '0.6rem 1.4rem', borderRadius: '50px',
                border: `2px solid ${activeTab === i ? cat.color : '#2a2a4a'}`,
                background: activeTab === i ? cat.color + '22' : 'transparent',
                color: activeTab === i ? cat.color : '#9090b0',
                fontWeight: 600, fontSize: '0.9rem',
                cursor: 'pointer', transition: 'all 0.2s',
                display: 'flex', alignItems: 'center', gap: '0.4rem'
              }}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1rem', marginBottom: '3rem'
        }}>
          {categories[activeTab].skills.map(skill => (
            <SkillBar
              key={skill.name}
              {...skill}
              color={categories[activeTab].color}
            />
          ))}
        </div>

        {/* Tech Badges */}
        <div style={{
          background: '#13132b', borderRadius: '16px',
          padding: '2rem', border: '1px solid #2a2a4a'
        }}>
          <h3 style={{
            textAlign: 'center', color: '#e0e0ff',
            marginBottom: '1.5rem', fontSize: '1.1rem', fontWeight: 600
          }}>
            Also familiar with
          </h3>
          <div style={{
            display: 'flex', flexWrap: 'wrap',
            gap: '0.75rem', justifyContent: 'center'
          }}>
            {techBadges.map(badge => (
              <span
                key={badge}
                style={{
                  padding: '0.4rem 1rem', borderRadius: '50px',
                  background: 'rgba(108,99,255,0.1)',
                  border: '1px solid rgba(108,99,255,0.25)',
                  color: '#a0a0d0', fontSize: '0.82rem',
                  fontFamily: 'Fira Code, monospace',
                  transition: 'all 0.2s', cursor: 'default'
                }}
                onMouseOver={e => {
                  e.currentTarget.style.background = 'rgba(108,99,255,0.25)';
                  e.currentTarget.style.color = '#6c63ff';
                  e.currentTarget.style.borderColor = '#6c63ff';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.background = 'rgba(108,99,255,0.1)';
                  e.currentTarget.style.color = '#a0a0d0';
                  e.currentTarget.style.borderColor = 'rgba(108,99,255,0.25)';
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}