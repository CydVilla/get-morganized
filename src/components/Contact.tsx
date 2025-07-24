import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get Started</h2>
          <p>Click the button below to fill out the Get Morganized LLC form and upload your resume. <strong>Note:</strong> You’ll need to sign in with a Google account to upload your resume (required by Google Forms).</p>
        </div>
        <div className="contact-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '40px' }}>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc4MzKDDYBRPR5z2xq8fmnVIKAzlnhSIjKfX-qUNffmhtuCAg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ fontSize: '1.3rem', padding: '1.2rem 2.5rem', marginBottom: '2rem' }}
          >
            Fill Out the Form & Upload Your Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact; 