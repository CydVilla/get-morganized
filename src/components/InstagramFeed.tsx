import React, { useEffect } from 'react';

const InstagramFeed: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
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
          <div className="elfsight-app-3e74aa70-a0c7-4f20-be7d-958837213359" data-elfsight-app-lazy></div>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed; 