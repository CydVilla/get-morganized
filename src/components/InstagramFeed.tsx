import React, { useEffect } from 'react';
import { ensureStellaFrame } from '../lib/stellaframe';

const InstagramFeed: React.FC = () => {
  useEffect(() => {
    ensureStellaFrame();
  }, []);

  return (
    <section id="instagram" className="instagram-feed">
      <div className="container">
        <div className="section-header">
          <h2>Follow Us on Instagram</h2>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 32 }}>
          {/* StellaFrame — data-sf-kind lets the loader fetch the renderer alongside the data */}
          <div data-stellaframe="wgt_o6x4injfra4t" data-sf-kind="instagram"></div>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
