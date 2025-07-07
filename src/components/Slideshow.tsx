import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slideshow.css';

const Slideshow: React.FC = () => {
  // Placeholder images - these will be replaced with actual client photos
  const slides = [
    {
      id: 1,
      image: 'https://via.placeholder.com/600x400/667eea/ffffff?text=Resume+Sample+1',
      title: 'Professional Resume Sample',
      description: 'Clean, modern design optimized for ATS systems'
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/600x400/764ba2/ffffff?text=Resume+Sample+2',
      title: 'Executive Resume Sample',
      description: 'Senior-level resume with strategic focus'
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/600x400/ffd700/2c3e50?text=Resume+Sample+3',
      title: 'Career Change Resume',
      description: 'Successfully transitioning to a new industry'
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/600x400/28a745/ffffff?text=Before+%26+After',
      title: 'Before & After',
      description: 'See the transformation in action'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="slideshow">
      <div className="container">
        <div className="section-header">
          <h2>Our Work</h2>
          <p>See examples of our professional resume transformations</p>
        </div>
        
        <div className="slideshow-container">
          <Slider {...settings}>
            {slides.map((slide) => (
              <div key={slide.id} className="slide">
                <div className="slide-content">
                  <div className="slide-image">
                    <img src={slide.image} alt={slide.title} />
                  </div>
                  <div className="slide-info">
                    <h3>{slide.title}</h3>
                    <p>{slide.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        
        <div className="slideshow-note">
          <p>
            <strong>Note:</strong> These are placeholder images. Your actual work samples and client photos 
            will be integrated here once provided.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Slideshow; 