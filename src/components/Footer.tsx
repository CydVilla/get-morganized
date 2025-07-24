import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-flex">
        <div className="footer-main">
          <div className="footer-brand">
            <span className="footer-logo-text">GET MORGANIZED LLC</span>
            <p className="footer-tagline">Professional resume writing services to help you stand out in today's competitive job market.</p>
          </div>
          <div className="footer-contact">
            <p><span role="img" aria-label="phone">📞</span> <a href="tel:914-786-2282">914-786-2282</a></p>
            <p><span role="img" aria-label="email">✉️</span> <a href="mailto:info@getmorganizedtoday.com">info@getmorganizedtoday.com</a></p>
            <p><span role="img" aria-label="location">📍</span> Greater New York City Area</p>
          </div>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><span>📘</span></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><span>📷</span></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><span>💼</span></a>
          </div>
        </div>
        {/* Removed footer-links-row for compactness */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <span className="footer-copyright">&copy; {new Date().getFullYear()} Get Morganized LLC. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 