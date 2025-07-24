import React from 'react';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Professional Resume Writing',
      description: 'Custom-tailored resumes that highlight your unique skills and experience, optimized for ATS systems.',
      icon: '📄',
      price: 'Starting at $189'
    },
    {
      id: 2,
      title: 'Cover Letter Writing',
      description: 'Compelling cover letters that tell your story and connect your experience to the job requirements.',
      icon: '✉️',
      price: 'Starting at $89'
    },
    {
      id: 3,
      title: 'LinkedIn Profile Optimization',
      description: 'Transform your LinkedIn profile into a powerful networking tool that attracts recruiters.',
      icon: '💼',
      price: 'Starting at $79'
    },
    {
      id: 4,
      title: 'Resume Review & Critique',
      description: 'Get expert feedback on your existing resume with actionable improvements.',
      icon: '🔍',
      price: 'Starting at $49'
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Professional resume writing services to help you land your dream job</p>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-price">{service.price}</div>
              <button className="btn btn-outline" onClick={scrollToContact}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <h3>Ready to Transform Your Career?</h3>
          <p>Get started with a free consultation to discuss your career goals</p>
          <button className="btn btn-primary" onClick={scrollToContact}>
            Book Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services; 