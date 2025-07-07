# Get Morganized - Resume Review Business Website

A modern, responsive React website for Get Morganized LLC, a professional resume writing service.

## Features

- **Hero Section**: Big hero image with compelling copy (inspired by 914United)
- **Services Section**: Clean, card-based layout showcasing resume services
- **About Section**: Company story with placeholder for Morgan's photo
- **Slideshow**: Image carousel for work samples and client photos
- **Reviews Section**: Google Reviews integration (ready for API setup)
- **Contact Form**: Professional contact form with business information
- **Responsive Design**: Mobile-first approach that works on all devices
- **Modern UI**: Clean, professional design inspired by TopStack Resume

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd morganized
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Customization Guide

### 1. Replace Placeholder Images

The website currently uses placeholder images. Replace them with your actual content:

- **Hero Background**: Update the gradient in `src/components/Hero.css` or add a background image
- **Morgan's Photo**: Replace the placeholder in the About section with Morgan's professional headshot
- **Work Samples**: Add actual resume samples and before/after photos to the slideshow
- **Client Photos**: Add client photos to the slideshow section

### 2. Google Reviews Integration

To integrate real Google Reviews:

1. Set up a Google My Business API account
2. Get your API credentials
3. Create a `.env` file in the root directory:
   ```
   REACT_APP_GOOGLE_PLACES_API_KEY=your_api_key_here
   ```
4. Update the Reviews component to fetch real data from the Google Places API

### 3. Update Business Information

Update the following information throughout the website:

- **Phone Number**: 914-786-2282 (already set)
- **Email**: info@getmorganizedtoday.com (already set)
- **Location**: Greater New York City Area (already set)
- **Services and Pricing**: Update in the Services component
- **Social Media Links**: Add actual social media URLs in the Footer

### 4. Domain Configuration

To use your Weebly domain:

1. Build the production version:
   ```bash
   npm run build
   ```

2. Upload the contents of the `build` folder to your Weebly hosting
3. Configure your domain to point to the uploaded files

### 5. Contact Form Setup

The contact form currently shows an alert. To make it functional:

1. Set up a backend service (e.g., Netlify Forms, Formspree, or your own server)
2. Update the form submission handler in `src/components/Contact.tsx`
3. Add form validation and error handling

## File Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx           # Hero section with big image
│   ├── Services.tsx       # Services showcase
│   ├── About.tsx          # About section
│   ├── Slideshow.tsx      # Image carousel
│   ├── Reviews.tsx        # Google reviews
│   ├── Contact.tsx        # Contact form
│   ├── Footer.tsx         # Footer
│   └── *.css              # Component-specific styles
├── App.tsx                # Main app component
├── App.css                # Global styles
└── index.tsx              # App entry point
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (not recommended)

## Technologies Used

- **React 18** - Frontend framework
- **TypeScript** - Type safety
- **React Router** - Navigation
- **React Slick** - Image carousel
- **CSS3** - Styling with modern features
- **Responsive Design** - Mobile-first approach

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

The website is optimized for:
- Fast loading times
- SEO-friendly structure
- Mobile performance
- Accessibility standards

## Support

For questions or customization help, contact the development team or refer to the React documentation.

## License

This project is created for Get Morganized LLC. All rights reserved.
