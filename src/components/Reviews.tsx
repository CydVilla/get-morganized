import React from 'react';
import './Reviews.css';
import { useStellaFrameWidget } from '../lib/stellaframe';

const Reviews: React.FC = () => {
  const widgetRef = useStellaFrameWidget('wgt_gcf177fbll0q', 'reviews');

  return (
    <section id="reviews" className="reviews">
      <div className="container">
        <div className="section-header">
          <h2>What Our Clients Say</h2>
          <p>Real testimonials from satisfied clients</p>
        </div>
        {/* StellaFrame — the hook stamps on data-stellaframe near the viewport */}
        <div ref={widgetRef} className="sf-widget sf-widget--reviews"></div>
      </div>
    </section>
  );
};

export default Reviews;
