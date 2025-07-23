import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="section-header">
              <h2>About Get Morganized</h2>
              <p>Your trusted partner in career transformation</p>
            </div>
            
            <div className="about-description">
              <p>
                At Get Morganized, we believe that every professional deserves a resume that truly represents 
                their potential. Our founder, Morgan, brings years of experience in career development and 
                resume writing to help you stand out in today's competitive job market.
              </p>
              
              <p>
                We specialize in creating compelling, ATS-optimized resumes that not only pass through 
                applicant tracking systems but also capture the attention of hiring managers. Our approach 
                combines industry best practices with personalized attention to ensure your resume tells 
                your unique story effectively.
              </p>
              
              <div className="about-features">
                <div className="feature">
                  <div className="feature-icon">🎯</div>
                  <div className="feature-text">
                    <h4>ATS Optimized</h4>
                    <p>Resumes designed to pass through applicant tracking systems</p>
                  </div>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">💡</div>
                  <div className="feature-text">
                    <h4>Personalized Approach</h4>
                    <p>One-on-one consultation to understand your unique career goals</p>
                  </div>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">⚡</div>
                  <div className="feature-text">
                    <h4>Fast Turnaround</h4>
                    <p>Quick delivery without compromising on quality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <div className="headshot-container">
              <img src={`${process.env.PUBLIC_URL}/headshot.jpeg`} alt="Morgan's Professional Headshot" className="headshot-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 