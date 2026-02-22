import React, { useState } from 'react';
import axios from 'axios';
import {
  FiMail, FiPhone, FiMapPin, FiGithub,
  FiLinkedin, FiSend, FiCheckCircle, FiAlertCircle
} from 'react-icons/fi';

const contactInfo = [
  {
    icon: <FiMail />, label: 'Email',
    value: 'ahsantayyab50999@gmail.com',
    href: 'mailto:ahsantayyab50999@gmail.com',
    color: '#6c63ff'
  },
  {
    icon: <FiPhone />, label: 'Phone',
    value: '+92 319 5798625',
    href: 'tel:+923195798625',
    color: '#f50057'
  },
  {
    icon: <FiMapPin />, label: 'Location',
    value: 'Rawalpindi, Pakistan',
    href: null,
    color: '#00e676'
  },
  {
    icon: <FiGithub />, label: 'GitHub',
    value: 'github.com/ahsantayyab',
    href: 'https://github.com/ahsantayyab',
    color: '#ff9800'
  },
  {
    icon: <FiLinkedin />, label: 'LinkedIn',
    value: 'linkedin.com/in/ahsan-tayyab',
    href: 'https://linkedin.com/in/ahsan-tayyab',
    color: '#0077b5'
  }
];

const initialForm = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(null); // 'loading' | 'success' | 'error'
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Invalid email address';
    if (!form.subject.trim()) newErrors.subject = 'Subject is required';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    else if (form.message.length < 10) newErrors.message = 'Message too short (min 10 chars)';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('loading');
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/contact`, form);
      setStatus('success');
      setForm(initialForm);
      setTimeout(() => setStatus(null), 5000);
    } catch (err) {
      setStatus('error');
      setTimeout(() => setStatus(null), 5000);
    }
  };

  const inputStyle = (field) => ({
    width: '100%', padding: '0.85rem 1rem',
    background: '#0d0d1a',
    border: `1px solid ${errors[field] ? '#f50057' : '#2a2a4a'}`,
    borderRadius: '10px', color: '#e0e0ff',
    fontSize: '0.92rem', fontFamily: 'Inter, sans-serif',
    outline: 'none', transition: 'border-color 0.2s',
    boxSizing: 'border-box'
  });

  return (
    <section id="contact" style={{ padding: '80px 0', background: '#0d0d1a' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Have a project in mind? Let's talk!</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.6fr',
          gap: '3rem', alignItems: 'start'
        }} className="contact-grid">

          {/* Left - Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Intro Card */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(108,99,255,0.15), rgba(245,0,87,0.1))',
              borderRadius: '16px', padding: '1.5rem',
              border: '1px solid rgba(108,99,255,0.25)'
            }}>
              <h3 style={{ color: '#e0e0ff', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                Let's build something together 🚀
              </h3>
              <p style={{ color: '#9090b0', fontSize: '0.88rem', lineHeight: 1.8 }}>
                I'm currently open to internship opportunities, freelance projects,
                and collaborations in AI/ML and web development. Feel free to reach out!
              </p>
            </div>

            {/* Contact Info Items */}
            {contactInfo.map(({ icon, label, value, href, color }) => (
              <div
                key={label}
                style={{
                  display: 'flex', alignItems: 'center',
                  gap: '1rem', background: '#13132b',
                  borderRadius: '12px', padding: '1rem 1.25rem',
                  border: '1px solid #2a2a4a',
                  transition: 'all 0.2s'
                }}
                onMouseOver={e => {
                  e.currentTarget.style.borderColor = color + '55';
                  e.currentTarget.style.background = '#1a1a35';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.borderColor = '#2a2a4a';
                  e.currentTarget.style.background = '#13132b';
                }}
              >
                <div style={{
                  width: '40px', height: '40px', borderRadius: '10px',
                  background: color + '22', border: `1px solid ${color}44`,
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'center', color, fontSize: '1.1rem',
                  flexShrink: 0
                }}>
                  {icon}
                </div>
                <div>
                  <div style={{ color: '#9090b0', fontSize: '0.75rem', marginBottom: '0.15rem' }}>
                    {label}
                  </div>
                  {href ? (
                    <a href={href} target="_blank" rel="noreferrer" style={{
                      color: '#e0e0ff', textDecoration: 'none',
                      fontSize: '0.88rem', fontWeight: 500,
                      transition: 'color 0.2s'
                    }}
                      onMouseOver={e => e.currentTarget.style.color = color}
                      onMouseOut={e => e.currentTarget.style.color = '#e0e0ff'}
                    >
                      {value}
                    </a>
                  ) : (
                    <span style={{ color: '#e0e0ff', fontSize: '0.88rem', fontWeight: 500 }}>
                      {value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right - Contact Form */}
          <div style={{
            background: '#13132b', borderRadius: '20px',
            padding: '2rem', border: '1px solid #2a2a4a'
          }}>
            <h3 style={{
              color: '#e0e0ff', fontSize: '1.15rem',
              fontWeight: 700, marginBottom: '1.5rem'
            }}>
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              {/* Name + Email row */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem'
              }} className="form-row">
                <div>
                  <label style={{ color: '#9090b0', fontSize: '0.82rem', display: 'block', marginBottom: '0.4rem' }}>
                    Your Name *
                  </label>
                  <input
                    name="name" value={form.name}
                    onChange={handleChange} placeholder="Muhammad Ahsan"
                    style={inputStyle('name')}
                    onFocus={e => e.target.style.borderColor = '#6c63ff'}
                    onBlur={e => e.target.style.borderColor = errors.name ? '#f50057' : '#2a2a4a'}
                  />
                  {errors.name && (
                    <span style={{ color: '#f50057', fontSize: '0.75rem' }}>{errors.name}</span>
                  )}
                </div>
                <div>
                  <label style={{ color: '#9090b0', fontSize: '0.82rem', display: 'block', marginBottom: '0.4rem' }}>
                    Email Address *
                  </label>
                  <input
                    name="email" value={form.email} type="email"
                    onChange={handleChange} placeholder="you@example.com"
                    style={inputStyle('email')}
                    onFocus={e => e.target.style.borderColor = '#6c63ff'}
                    onBlur={e => e.target.style.borderColor = errors.email ? '#f50057' : '#2a2a4a'}
                  />
                  {errors.email && (
                    <span style={{ color: '#f50057', fontSize: '0.75rem' }}>{errors.email}</span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label style={{ color: '#9090b0', fontSize: '0.82rem', display: 'block', marginBottom: '0.4rem' }}>
                  Subject *
                </label>
                <input
                  name="subject" value={form.subject}
                  onChange={handleChange} placeholder="Project collaboration / Job opportunity"
                  style={inputStyle('subject')}
                  onFocus={e => e.target.style.borderColor = '#6c63ff'}
                  onBlur={e => e.target.style.borderColor = errors.subject ? '#f50057' : '#2a2a4a'}
                />
                {errors.subject && (
                  <span style={{ color: '#f50057', fontSize: '0.75rem' }}>{errors.subject}</span>
                )}
              </div>

              {/* Message */}
              <div>
                <label style={{ color: '#9090b0', fontSize: '0.82rem', display: 'block', marginBottom: '0.4rem' }}>
                  Message *
                </label>
                <textarea
                  name="message" value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  style={{ ...inputStyle('message'), resize: 'vertical', minHeight: '120px' }}
                  onFocus={e => e.target.style.borderColor = '#6c63ff'}
                  onBlur={e => e.target.style.borderColor = errors.message ? '#f50057' : '#2a2a4a'}
                />
                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                }}>
                  {errors.message
                    ? <span style={{ color: '#f50057', fontSize: '0.75rem' }}>{errors.message}</span>
                    : <span />
                  }
                  <span style={{ color: '#9090b0', fontSize: '0.75rem' }}>
                    {form.message.length} chars
                  </span>
                </div>
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '0.6rem',
                  padding: '0.85rem 1rem', borderRadius: '10px',
                  background: 'rgba(0,230,118,0.1)',
                  border: '1px solid rgba(0,230,118,0.3)',
                  color: '#00e676', fontSize: '0.9rem'
                }}>
                  <FiCheckCircle />
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {status === 'error' && (
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '0.6rem',
                  padding: '0.85rem 1rem', borderRadius: '10px',
                  background: 'rgba(245,0,87,0.1)',
                  border: '1px solid rgba(245,0,87,0.3)',
                  color: '#f50057', fontSize: '0.9rem'
                }}>
                  <FiAlertCircle />
                  Failed to send. Please try again or email me directly.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                style={{
                  padding: '0.9rem 2rem', borderRadius: '10px',
                  background: status === 'loading'
                    ? '#2a2a4a'
                    : 'linear-gradient(135deg, #6c63ff, #f50057)',
                  border: 'none', color: '#fff',
                  fontWeight: 700, fontSize: '1rem',
                  cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'center', gap: '0.5rem',
                  transition: 'all 0.25s ease',
                  boxShadow: status === 'loading' ? 'none' : '0 4px 20px rgba(108,99,255,0.4)'
                }}
                onMouseOver={e => {
                  if (status !== 'loading') {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(108,99,255,0.5)';
                  }
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(108,99,255,0.4)';
                }}
              >
                {status === 'loading' ? (
                  <>
                    <div style={{
                      width: '16px', height: '16px',
                      border: '2px solid #9090b0',
                      borderTop: '2px solid #fff',
                      borderRadius: '50%',
                      animation: 'spin 0.8s linear infinite'
                    }} />
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}