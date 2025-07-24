import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="section-header">
              <h2>About Get Morganized LLC</h2>
              <p className="about-tagline">A personalized service.</p>
            </div>
            <div className="about-description">
              <div className="about-block">
                <p>
                  <strong>Founded in February 2021</strong>, Get Morganized LLC is based on the idea that everyone deserves a special level of care and attention when crafting their resumé in order to stand out in today's competitive job market.
                </p>
                <p>
                  Morgan has worked with clients ranging from Michelin Star Chefs to Mechanical Engineers. She specializes in creating compelling, ATS-optimized resumes that not only pass through applicant tracking systems but also capture the attention of hiring managers. Morgan's approach combines industry best practices with personalized attention to ensure each client's resumé tells their unique story effectively.
                </p>
              </div>
              <div className="about-features">
                <h3 className="about-subheading">Why Choose Get Morganized?</h3>
                <div className="feature-list">
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
              <div className="meet-morgan">
                <h3 className="about-subheading">Meet Morgan</h3>
                <p>
                  Morgan is born and raised in Westchester County, NY. She is a current law student at Pace University School of Law. As an entrepreneur, she has worked with over 200 clients from all ages and backgrounds to craft one-of-a-kind resumés that highlight each of their unique skills and accomplishments.
                </p>
              </div>
              <div className="community-partnerships">
                <h3 className="about-subheading">Community Partnerships</h3>
                <p>
                  Get Morganized LLC has provided career readiness workshops to various nonprofit organizations including Family Services of Westchester (FSW), 914United, NewComm, and the Kings County District Attorney's Office Re-Entry Bureau. Through these partnerships, Morgan teaches the fundamentals of resumé writing and provides professional resumés to individuals who are re-entering the workforce after being incarcerated or who are considered at-risk.
                </p>
                <p>
                  For more information on workshops and community partnerships, please email <a href="mailto:hello@getmorganizedtoday.com">hello@getmorganizedtoday.com</a> or call Morgan at <a href="tel:914-786-2282">914-786-2282</a>
                </p>
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