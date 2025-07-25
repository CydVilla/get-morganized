import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Transform Your Resume, 
            <span className="highlight"> Transform Your Career</span>
          </h1>
          <p className="hero-subtitle">
            Professional resume writing services that help you stand out from the crowd. 
            Get noticed by employers and land your dream job with a compelling, ATS-optimized resume.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToContact}>Get Started Today</button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">250+</span>
              <span className="stat-label">Resumes Written</span>
            </div>
            <div className="stat">
              <span className="stat-number">5.0★</span>
              <span className="stat-label">Google Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 