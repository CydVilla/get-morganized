import React, { useEffect } from 'react';
import './Reviews.css';
import { ensureStellaFrame } from '../lib/stellaframe';

const Reviews: React.FC = () => {
  useEffect(() => {
    ensureStellaFrame();
  }, []);

  return (
    <section id="reviews" className="reviews">
      <div className="container">
        <div className="section-header">
          <h2>What Our Clients Say</h2>
          <p>Real testimonials from satisfied clients</p>
        </div>
        {/* StellaFrame — data-sf-kind lets the loader fetch the renderer alongside the data */}
        <div data-stellaframe="wgt_gcf177fbll0q" data-sf-kind="reviews"></div>
      </div>
    </section>
  );
};

export default Reviews;
