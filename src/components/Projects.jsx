import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiGithub, FiExternalLink, FiLoader, FiAlertCircle } from 'react-icons/fi';

const categoryColors = {
  'AI/ML': { bg: 'rgba(108,99,255,0.15)', border: 'rgba(108,99,255,0.4)', text: '#6c63ff' },
  'IoT':   { bg: 'rgba(0,230,118,0.1)',   border: 'rgba(0,230,118,0.35)',  text: '#00e676' },
  'Web':   { bg: 'rgba(245,0,87,0.12)',   border: 'rgba(245,0,87,0.35)',   text: '#f50057' },
  'Research': { bg: 'rgba(255,152,0,0.12)', border: 'rgba(255,152,0,0.35)', text: '#ff9800' }
};

const filterTabs = ['All', 'AI/ML', 'Web', 'IoT', 'Research'];

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  const colors = categoryColors[project.category] || categoryColors['AI/ML'];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#1a1a35' : '#13132b',
        borderRadius: '16px', padding: '1.5rem',
        border: `1px solid ${hovered ? colors.border : '#2a2a4a'}`,
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? `0 12px 40px ${colors.text}22` : 'none',
        display: 'flex', flexDirection: 'column', gap: '1rem',
        position: 'relative', overflow: 'hidden'
      }}
    >
      {/* Featured badge */}
      {project.featured && (
        <div style={{
          position: 'absolute', top: '12px', right: '12px',
          background: 'linear-gradient(135deg, #6c63ff, #f50057)',
          color: '#fff', fontSize: '0.65rem', fontWeight: 700,
          padding: '0.2rem 0.6rem', borderRadius: '50px',
          letterSpacing: '1px', textTransform: 'uppercase'
        }}>
          Featured
        </div>
      )}

      {/* Header row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span style={{
          padding: '0.3rem 0.8rem', borderRadius: '50px',
          background: colors.bg, border: `1px solid ${colors.border}`,
          color: colors.text, fontSize: '0.75rem', fontWeight: 600
        }}>
          {project.category}
        </span>
        <span style={{
          color: project.status === 'Ongoing' ? '#00e676' : '#9090b0',
          fontSize: '0.78rem',
          display: 'flex', alignItems: 'center', gap: '0.3rem'
        }}>
          <span style={{
            width: '7px', height: '7px', borderRadius: '50%',
            background: project.status === 'Ongoing' ? '#00e676' : '#9090b0',
            display: 'inline-block',
            animation: project.status === 'Ongoing' ? 'pulse 1.5s infinite' : 'none'
          }} />
          {project.status}
        </span>
      </div>

      {/* Title + Year */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
          <h3 style={{
            color: '#e0e0ff', fontSize: '1.05rem',
            fontWeight: 700, lineHeight: 1.3, flex: 1
          }}>
            {project.title}
          </h3>
        </div>
        {project.year && (
          <span style={{
            color: '#9090b0', fontSize: '0.78rem',
            fontFamily: 'Fira Code, monospace'
          }}>
            📅 {project.year}
          </span>
        )}
      </div>

      {/* Description */}
      <p style={{
        color: '#9090b0', fontSize: '0.88rem',
        lineHeight: 1.7, flex: 1
      }}>
        {project.description}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {project.tags?.map(tag => (
          <span key={tag} style={{
            padding: '0.2rem 0.6rem', borderRadius: '4px',
            background: '#0d0d1a', border: '1px solid #2a2a4a',
            color: '#9090b0', fontSize: '0.72rem',
            fontFamily: 'Fira Code, monospace'
          }}>
            #{tag}
          </span>
        ))}
      </div>

      {/* Links */}
      {(project.githubLink || project.liveLink) && (
        <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '0.5rem', borderTop: '1px solid #2a2a4a' }}>
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noreferrer" style={{
              display: 'flex', alignItems: 'center', gap: '0.4rem',
              color: '#9090b0', textDecoration: 'none', fontSize: '0.85rem',
              transition: 'color 0.2s'
            }}
              onMouseOver={e => e.currentTarget.style.color = '#6c63ff'}
              onMouseOut={e => e.currentTarget.style.color = '#9090b0'}
            >
              <FiGithub /> Code
            </a>
          )}
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noreferrer" style={{
              display: 'flex', alignItems: 'center', gap: '0.4rem',
              color: '#9090b0', textDecoration: 'none', fontSize: '0.85rem',
              transition: 'color 0.2s'
            }}
              onMouseOver={e => e.currentTarget.style.color = '#f50057'}
              onMouseOut={e => e.currentTarget.style.color = '#9090b0'}
            >
              <FiExternalLink /> Live Demo
            </a>
          )}
        </div>
      )}

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
      `}</style>
    </div>
  );
}

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [seeded, setSeeded] = useState(false);

  const seedAndFetch = async () => {
    try {
      await axios.post('/api/projects/seed');
      setSeeded(true);
    } catch (err) {
      console.log('Seed error:', err.message);
    }
  };

  const fetchProjects = async (category = 'All') => {
    try {
      setLoading(true);
      setError(null);
      const params = category !== 'All' ? { category } : {};
      const res = await axios.get('/api/projects', { params });
      setProjects(res.data);
    } catch (err) {
      setError('Could not load projects. Please make sure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const init = async () => {
      await seedAndFetch();
      await fetchProjects('All');
    };
    init();
  }, []);

  const handleFilter = (cat) => {
    setActiveFilter(cat);
    fetchProjects(cat);
  };

  return (
    <section id="projects" style={{ padding: '80px 0', background: '#0f0f20' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <h2 className="section-title">Personal Projects</h2>
        <p className="section-subtitle">Things I've built along the way</p>

        {/* Filter Tabs */}
        <div style={{
          display: 'flex', gap: '0.6rem',
          justifyContent: 'center', flexWrap: 'wrap',
          marginBottom: '2.5rem'
        }}>
          {filterTabs.map(tab => (
            <button
              key={tab}
              onClick={() => handleFilter(tab)}
              style={{
                padding: '0.5rem 1.3rem', borderRadius: '50px',
                border: `2px solid ${activeFilter === tab ? '#6c63ff' : '#2a2a4a'}`,
                background: activeFilter === tab ? 'rgba(108,99,255,0.2)' : 'transparent',
                color: activeFilter === tab ? '#6c63ff' : '#9090b0',
                fontWeight: 600, fontSize: '0.88rem',
                cursor: 'pointer', transition: 'all 0.2s'
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {loading && (
          <div style={{
            display: 'flex', justifyContent: 'center',
            alignItems: 'center', gap: '0.75rem',
            padding: '4rem', color: '#6c63ff'
          }}>
            <FiLoader style={{ animation: 'spin 1s linear infinite', fontSize: '1.5rem' }} />
            <span style={{ fontFamily: 'Fira Code' }}>Loading projects...</span>
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div style={{
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: '1rem',
            padding: '3rem', color: '#f50057',
            background: 'rgba(245,0,87,0.08)',
            borderRadius: '16px', border: '1px solid rgba(245,0,87,0.2)'
          }}>
            <FiAlertCircle style={{ fontSize: '2.5rem' }} />
            <p style={{ textAlign: 'center' }}>{error}</p>
            <button
              onClick={() => fetchProjects(activeFilter)}
              style={{
                padding: '0.6rem 1.5rem', borderRadius: '50px',
                background: '#f50057', border: 'none',
                color: '#fff', cursor: 'pointer', fontWeight: 600
              }}
            >
              Retry
            </button>
          </div>
        )}

        {/* Projects Grid */}
        {!loading && !error && (
          <>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.5rem'
            }}>
              {projects.map(project => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </div>

            {projects.length === 0 && (
              <p style={{ textAlign: 'center', color: '#9090b0', padding: '3rem' }}>
                No projects found in this category.
              </p>
            )}

            {/* GitHub CTA */}
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <a
                href="https://github.com/ahsantayyab"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                  padding: '0.85rem 2rem', borderRadius: '50px',
                  border: '2px solid #6c63ff', color: '#6c63ff',
                  textDecoration: 'none', fontWeight: 600, fontSize: '1rem',
                  transition: 'all 0.2s'
                }}
                onMouseOver={e => {
                  e.currentTarget.style.background = '#6c63ff';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#6c63ff';
                }}
              >
                <FiGithub style={{ fontSize: '1.1rem' }} />
                View All on GitHub
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}