import React, { useEffect } from 'react';
import './Reviews.css';

const Reviews: React.FC = () => {
  useEffect(() => {
    // Dynamically load the StellaFrame script
    const script = document.createElement('script');
    script.src = 'https://app.stellaframe.com/widget.js';
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
        {/* StellaFrame */}
        <div data-stellaframe="wgt_gcf177fbll0q"></div>
      </div>
    </section>
  );
};

export default Reviews; 