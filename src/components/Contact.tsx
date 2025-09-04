import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get Started</h2>
          <p>Click the button below to fill out the Get Morganized LLC form and upload your resumé. <strong>Note:</strong> You’ll need to sign in with a Google account to upload your resumé (required by Google Forms).</p>
        </div>
        <div className="contact-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '40px' }}>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc4MzKDDYBRPR5z2xq8fmnVIKAzlnhSIjKfX-qUNffmhtuCAg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ fontSize: '1.3rem', padding: '1.2rem 2.5rem', marginBottom: '2rem' }}
          >
            Fill Out the Form & Upload Your Resumé
          </a>
          <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '1rem', color: '#6c757d' }}>
            <strong>Morgan typically responds to all inquiries promptly.</strong> If you do not hear back, please text or call her directly at <a href="tel:914-786-2282" style={{ color: '#60b382', textDecoration: 'none' }}>914-786-2282.</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact; 