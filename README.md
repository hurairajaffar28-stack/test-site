# PECKHAM CAFÉ WEBSITE

A premium, client-ready website demonstration for a London café business.

## 🎯 About This Project

This is a complete, professional single-page website built with vanilla HTML5, CSS3, and JavaScript. It's designed to be shown directly to clients as a polished website concept that looks like it was created by a premium London creative agency.

## ✨ Features

- **Premium Design** - Editorial layout with sophisticated typography and spacing
- **Fully Responsive** - Works flawlessly from 320px to 4K displays
- **Smooth Animations** - Professional scroll reveals and transitions
- **Interactive Menu** - Category filtering with smooth animations
- **Mobile-First** - Beautiful mobile menu and touch-optimized interactions
- **Accessibility** - Semantic HTML, ARIA labels, keyboard navigation, reduced motion support
- **SEO Ready** - Structured data, meta tags, semantic markup
- **Performance** - Optimized loading, lazy loading images
- **No Dependencies** - Pure vanilla JavaScript, no frameworks or libraries

## 🚀 How to Use

### Quick Start

1. **Download/Clone** this project
2. **Open `index.html`** in any modern web browser
3. That's it! No build process, no installation, no setup.

### File Structure

```
peckham-cafe/
│
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles
├── js/
│   └── script.js       # All JavaScript
└── README.md           # This file
```

## 🎨 Customization Guide

All business information, menu items, images, and content can be easily customized by editing the configuration in `js/script.js`.

### 1. Change Business Information

Edit the `business` object in `js/script.js`:

```javascript
const business = {
    name: 'YOUR BUSINESS NAME',
    tagline: 'Your • Tagline • Here',
    address: {
        street: 'Your Street Address',
        city: 'Your City',
        postcode: 'Postcode',
        country: 'Country',
        locationCode: 'Location Code'
    },
    phone: '+44...',
    phoneDisplay: '+44 ...',
    priceRange: '£X–X per person',
    status: {
        isOpen: false,
        opensAt: '10:00 AM'
    }
};
```

### 2. Update Images

Edit the `images` object in `js/script.js`:

```javascript
const images = {
    hero: 'path/to/your/hero-image.jpg',
    about: 'path/to/your/about-image.jpg',
    // ... etc
};
```

Replace the Unsplash URLs with your own images. You can use:
- Local images (place in an `assets/images/` folder)
- Your own CDN URLs
- Any other image hosting service

### 3. Update Menu Items

Edit the `menuItems` array in `js/script.js`:

```javascript
const menuItems = [
    {
        name: 'Item Name',
        description: 'Item description',
        price: '£X.XX',
        category: 'breakfast', // breakfast, coffee, food, sides, drinks
        dietary: 'V' // V for vegetarian, VG for vegan, GF for gluten-free, or null
    },
    // Add more items...
];
```

### 4. Update Featured Items

Edit the `featuredItems` array in `js/script.js`:

```javascript
const featuredItems = [
    {
        name: 'Item Name',
        description: 'Short description',
        price: '£X.XX',
        image: 'path/to/image.jpg',
        alt: 'Image description'
    },
    // Add more items...
];
```

### 5. Update Opening Hours

Edit the `openingHours` object in `js/script.js`:

```javascript
const openingHours = {
    monday: '10:00 AM - 6:00 PM',
    tuesday: '10:00 AM - 6:00 PM',
    // ... etc
};
```

### 6. Change Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
    --cream: #F5F1E8;
    --espresso: #3D2817;
    --dark: #1A1A1A;
    --charcoal: #2C2C2C;
    --warm-beige: #D4C5B0;
    --muted-olive: #8B8871;
    --off-white: #FEFDFB;
    --accent: #C17B5C;
}
```

### 7. Change Fonts

The website uses:
- **Libre Baskerville** (serif, for headings)
- **Inter** (sans-serif, for body text)

To change fonts, update the Google Fonts link in `index.html` and the font-family in `css/style.css`.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠️ Technical Details

### Built With

- HTML5 (semantic markup)
- CSS3 (Grid, Flexbox, Custom Properties, Animations)
- Vanilla JavaScript (ES6+)
- Google Fonts (Libre Baskerville, Inter)
- Unsplash (demo images - replace with your own)

### Key Features

- **CSS Grid & Flexbox** for modern layouts
- **CSS Custom Properties** for easy theming
- **IntersectionObserver API** for scroll animations
- **Responsive typography** with clamp()
- **Mobile-first approach**
- **Semantic HTML5** elements
- **ARIA attributes** for accessibility
- **Structured data** (JSON-LD) for SEO
- **Meta tags** for social sharing

## 📋 SEO

The website includes:
- Semantic HTML5 structure
- Meta description
- Open Graph tags
- LocalBusiness structured data (JSON-LD)
- Proper heading hierarchy
- Alt text for images
- Mobile-friendly viewport

To customize SEO, edit the `<head>` section in `index.html`.

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- Sufficient color contrast
- Reduced motion support
- Alt text on all images

## 📝 License

This is a demonstration/template project. Feel free to use it for client work, personal projects, or commercial purposes.

## 💡 Tips for Showing to Clients

1. **Open in fullscreen mode** for best impression
2. **Start at the top** and scroll down to show flow
3. **Demonstrate mobile menu** by resizing browser
4. **Show interactive menu filtering**
5. **Explain easy customization** (colors, content, images)
6. **Emphasize no ongoing costs** (no frameworks, no dependencies)

## 🎯 Next Steps

After client approval:

1. Replace demo images with professional photography
2. Add real menu items and prices
3. Update business information
4. Add real opening hours
5. Connect order buttons to actual ordering system
6. Add analytics (Google Analytics, etc.)
7. Deploy to web hosting

## 📞 Support

For questions about customization or usage, refer to the code comments in:
- `js/script.js` - All JavaScript configuration
- `css/style.css` - All styling
- `index.html` - HTML structure

## 🙏 Credits

- Fonts: Google Fonts (Libre Baskerville, Inter)
- Demo Images: Unsplash (replace with your own)
- Design & Development: Custom

---

**Built with care for premium presentation. Ready to impress clients.**
