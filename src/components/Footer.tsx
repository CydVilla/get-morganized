import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Get Morganized</h3>
            <p>
              Professional resume writing services to help you stand out in today's competitive job market. 
              Transform your career with our expert guidance.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <span>📘</span>
              </a>
              <a href="#" aria-label="Instagram">
                <span>📷</span>
              </a>
              <a href="#" aria-label="LinkedIn">
                <span>💼</span>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Professional Resume Writing</a></li>
              <li><a href="#services">Cover Letter Writing</a></li>
              <li><a href="#services">LinkedIn Profile Optimization</a></li>
              <li><a href="#services">Resume Review & Critique</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>📞 914-786-2282</p>
              <p>✉️ info@getmorganizedtoday.com</p>
              <p>📍 Greater New York City Area</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Get Morganized LLC. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 