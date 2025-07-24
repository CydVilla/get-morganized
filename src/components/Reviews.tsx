import React, { useEffect } from 'react';
import './Reviews.css';

const Reviews: React.FC = () => {
  useEffect(() => {
    // Dynamically load the Elfsight script
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="reviews" className="reviews">
      <div className="container">
        <div className="section-header">
          <h2>What Our Clients Say</h2>
          <p>Real testimonials from satisfied clients</p>
        </div>
        <div className="elfsight-app-e3ffd100-baff-4a59-95b9-2f9dbc0fb359" data-elfsight-app-lazy></div>
      </div>
    </section>
  );
};

export default Reviews; 