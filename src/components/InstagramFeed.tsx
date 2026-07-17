import React, { useEffect } from 'react';

const InstagramFeed: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.stellaframe.com/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="instagram" className="instagram-feed">
      <div className="container">
        <div className="section-header">
          <h2>Follow Us on Instagram</h2>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 32 }}>
          {/* StellaFrame */}
          <div data-stellaframe="wgt_o6x4injfra4t"></div>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed; 