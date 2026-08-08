import React from 'react';
import { useStellaFrameWidget } from '../lib/stellaframe';

const InstagramFeed: React.FC = () => {
  const widgetRef = useStellaFrameWidget('wgt_o6x4injfra4t', 'instagram');

  return (
    <section id="instagram" className="instagram-feed">
      <div className="container">
        <div className="section-header">
          <h2>Follow Us on Instagram</h2>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 32 }}>
          {/* StellaFrame — the hook stamps on data-stellaframe near the viewport */}
          <div ref={widgetRef} className="sf-widget sf-widget--instagram" style={{ width: '100%' }}></div>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
