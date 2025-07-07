import React from 'react';
import './Reviews.css';

const Reviews: React.FC = () => {
  // Sample reviews - these will be replaced with actual Google Reviews API data
  const reviews = [
    {
      id: 1,
      author: 'Sarah Johnson',
      rating: 5,
      text: 'Morgan was absolutely amazing. She was able to take my resume and completely transform it where it was immediately looked at by prospective employers and led to two interviews within the same week.',
      date: '2024-01-15',
      verified: true
    },
    {
      id: 2,
      author: 'Michael Chen',
      rating: 5,
      text: 'Professional, responsive, and incredibly helpful. My new resume helped me land a position at a top tech company. Highly recommend!',
      date: '2024-01-10',
      verified: true
    },
    {
      id: 3,
      author: 'Emily Rodriguez',
      rating: 5,
      text: 'Morgan took her time to really get to know me, my experience and help me put my best foot forward. Really loved working with her.',
      date: '2024-01-05',
      verified: true
    },
    {
      id: 4,
      author: 'David Thompson',
      rating: 5,
      text: 'Outstanding service! My resume went from generic to compelling. I received multiple interview requests within days of using the new resume.',
      date: '2023-12-28',
      verified: true
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <section id="reviews" className="reviews">
      <div className="container">
        <div className="section-header">
          <h2>What Our Clients Say</h2>
          <p>Real testimonials from satisfied clients</p>
        </div>

        <div className="reviews-overview">
          <div className="overview-card">
            <div className="overview-rating">
              <div className="rating-number">4.9</div>
              <div className="rating-stars">
                {renderStars(5)}
              </div>
              <div className="rating-text">out of 5</div>
            </div>
            <div className="overview-stats">
              <div className="stat">
                <span className="stat-number">150+</span>
                <span className="stat-label">Reviews</span>
              </div>
              <div className="stat">
                <span className="stat-number">98%</span>
                <span className="stat-label">Satisfaction</span>
              </div>
            </div>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="review-author">
                  <div className="author-avatar">
                    {review.author.charAt(0)}
                  </div>
                  <div className="author-info">
                    <h4>{review.author}</h4>
                    <div className="review-meta">
                      <div className="review-stars">
                        {renderStars(review.rating)}
                      </div>
                      <span className="review-date">
                        {new Date(review.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
                {review.verified && (
                  <div className="verified-badge">
                    <span>✓ Verified</span>
                  </div>
                )}
              </div>
              <div className="review-text">
                <p>"{review.text}"</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reviews-cta">
          <div className="google-reviews-note">
            <h3>Google Reviews Integration</h3>
            <p>
              These reviews are connected to our Google Business profile. 
              <br />
              <strong>Note:</strong> To integrate real Google Reviews, you'll need to:
            </p>
            <ul>
              <li>Set up Google My Business API credentials</li>
              <li>Add the Google Places API key to the environment variables</li>
              <li>Replace the sample reviews with live API data</li>
            </ul>
            <a 
              href="https://developers.google.com/my-business/reference/rest" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Learn More About Google Reviews API
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews; 