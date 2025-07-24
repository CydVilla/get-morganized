import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get Started</h2>
          <p>Fill out the form below to get started with Get Morganized LLC. Upload your resume, share your goals, and Morgan will be in touch!</p>
        </div>
        <div className="contact-content" style={{ display: 'block', marginTop: '40px' }}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSc4MzKDDYBRPR5z2xq8fmnVIKAzlnhSIjKfX-qUNffmhtuCAg/viewform?embedded=true"
            width="100%"
            height="1400"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Get Morganized Form"
            style={{ background: 'white', borderRadius: '15px', boxShadow: '0 4px 24px rgba(44,62,80,0.08)' }}
            allowFullScreen
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact; 