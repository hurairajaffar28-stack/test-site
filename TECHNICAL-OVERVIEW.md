# Technical Overview

## 🏗️ Architecture

### Technology Stack
- **HTML5** - Semantic markup, structured data
- **CSS3** - Modern layout (Grid, Flexbox), Custom Properties, Animations
- **Vanilla JavaScript (ES6+)** - No frameworks, no dependencies
- **Google Fonts** - Libre Baskerville (serif), Inter (sans-serif)

### File Structure
```
peckham-cafe/
│
├── index.html                      # Main HTML (complete single page)
├── css/
│   └── style.css                   # All styles (~1200 lines, organized)
├── js/
│   └── script.js                   # All JavaScript (~500 lines, modular)
├── README.md                       # Main documentation
├── CUSTOMIZATION-QUICK-GUIDE.md    # Quick reference
├── CLIENT-PRESENTATION-NOTES.md    # Presentation guide
└── TECHNICAL-OVERVIEW.md           # This file
```

---

## 📐 CSS Architecture

### Design System (CSS Custom Properties)
```css
:root {
    /* Colors */
    --cream: #F5F1E8;
    --espresso: #3D2817;
    --dark: #1A1A1A;
    --charcoal: #2C2C2C;
    --warm-beige: #D4C5B0;
    --muted-olive: #8B8871;
    --off-white: #FEFDFB;
    --accent: #C17B5C;
    
    /* Shadows */
    --shadow-sm: 0 2px 8px rgba(29, 29, 29, 0.08);
    --shadow-md: 0 4px 16px rgba(29, 29, 29, 0.12);
    --shadow-lg: 0 8px 32px rgba(29, 29, 29, 0.16);
    
    /* Transitions */
    --transition-base: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-smooth: 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Layout Strategy
- **Mobile-first** approach with progressive enhancement
- **CSS Grid** for complex layouts (about, location, footer)
- **Flexbox** for simpler, one-dimensional layouts
- **Responsive breakpoints**: 768px, 1024px
- **Fluid typography** using `clamp()` function

### Section Organization
1. CSS Reset & Base
2. CSS Variables (Design System)
3. Typography
4. Layout Utilities
5. Announcement Bar
6. Navigation
7. Mobile Menu
8. Buttons
9. Hero Section
10. Services Section
11. About Section
12. Featured Food Section
13. Menu Section
14. Order CTA Section
15. Gallery Section
16. Location Section
17. Final CTA Section
18. Footer
19. Animations
20. Reduced Motion Support
21. Utility Classes
22. Responsive Adjustments

---

## 🎯 JavaScript Architecture

### Module Pattern
All functionality is organized into clear, modular functions:

```javascript
// Configuration Objects
- business {}
- images {}
- featuredItems []
- menuItems []
- openingHours {}

// DOM Elements
- elements {}

// Initialization Functions
- initNavigation()
- initMobileMenu()
- renderFeaturedItems()
- renderMenu()
- initMenuFilters()
- renderGallery()
- renderOpeningHours()
- initScrollAnimations()
- init()
```

### Key Features

**1. Dynamic Content Rendering**
- Featured items generated from data array
- Menu items generated from data array
- Gallery generated from image array
- Opening hours generated from object

**2. Menu Filtering**
- Category-based filtering with smooth animations
- Active state management
- Staggered fade-in animations

**3. Scroll Animations**
- IntersectionObserver API for performance
- Elements fade up when entering viewport
- One-time animations (don't repeat on scroll up)

**4. Mobile Menu**
- Toggle with smooth animations
- Body scroll lock when open
- Auto-close on navigation
- Staggered link animations

**5. Navigation**
- Sticky positioning
- Scroll state changes (background, shadow)
- Smooth scroll to anchor links
- Active link highlighting

### Performance Optimizations
- Lazy loading images with `loading="lazy"`
- IntersectionObserver for scroll animations (not scroll events)
- Event delegation where appropriate
- Minimal DOM manipulation
- CSS transforms for animations (GPU accelerated)

---

## ♿ Accessibility Features

### Semantic HTML
- Proper heading hierarchy (h1 → h6)
- Semantic elements (`<nav>`, `<section>`, `<footer>`, etc.)
- Landmark roles implicit in semantic elements

### ARIA Implementation
- `aria-label` on hamburger button
- `aria-expanded` state on mobile menu
- Meaningful alt text on all images
- Focus management for keyboard navigation

### Keyboard Navigation
- All interactive elements keyboard accessible
- Visible focus states
- Logical tab order
- No keyboard traps

### Visual Accessibility
- High contrast text (WCAG AA compliant)
- Sufficient font sizes
- Touch targets minimum 44x44px
- No color-only information conveyance

### Reduced Motion Support
```css
@media (prefers-reduced-motion: reduce) {
    /* Disable non-essential animations */
}
```

JavaScript also checks for reduced motion preference and adjusts transitions.

---

## 🔍 SEO Implementation

### Meta Tags
```html
<title>Peckham Café & Food | Coffee, Food & Delivery in London</title>
<meta name="description" content="...">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:type" content="restaurant">
```

### Structured Data (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Peckham",
  "address": {...},
  "telephone": "...",
  "priceRange": "...",
  "openingHours": "..."
}
```

### Semantic Structure
- Proper heading hierarchy
- Descriptive link text
- Alt text on all images
- Semantic HTML5 elements

### Performance
- Optimized images
- Minimal HTTP requests
- No render-blocking resources
- Fast initial paint

---

## 📱 Responsive Design

### Breakpoints
```css
/* Mobile First (default) - 320px+ */

@media (min-width: 768px) {
    /* Tablet */
}

@media (min-width: 1024px) {
    /* Desktop */
}
```

### Tested Viewports
- 320px (iPhone SE)
- 375px (iPhone 12/13 Mini)
- 390px (iPhone 12/13/14)
- 430px (iPhone 14 Pro Max)
- 768px (iPad)
- 1024px (iPad Pro, Small Laptop)
- 1280px (Desktop)
- 1440px (Large Desktop)
- 1920px (Full HD)

### Responsive Strategies
1. **Fluid Typography** - `clamp()` for responsive font sizes
2. **Flexible Grid** - Grid columns adjust per breakpoint
3. **Adaptive Images** - `object-fit`, aspect ratios
4. **Mobile Menu** - Hamburger on mobile, full nav on desktop
5. **Reflow Content** - Single column → multi-column

---

## 🎨 Design Principles

### Color Psychology
- **Cream/Beige** - Warm, welcoming, natural
- **Espresso Brown** - Rich, premium, coffee association
- **Terracotta Accent** - Warm, appetizing, earthy

### Typography Hierarchy
```
Hero Title:     clamp(2.5rem, 8vw, 5rem)
Section Title:  clamp(2rem, 5vw, 3.5rem)
Subsection:     1.25rem - 1.5rem
Body:           clamp(0.9375rem, 0.8rem + 0.5vw, 1.0625rem)
Small:          0.75rem - 0.875rem
```

### Spacing System
- Consistent use of padding/margin
- Generous white space for premium feel
- Responsive spacing (adjusts with viewport)

### Visual Hierarchy
1. Large hero image with overlay
2. Clear section divisions
3. Contrasting backgrounds (cream ↔ off-white)
4. Strategic use of accent color
5. Editorial-style asymmetric layouts

---

## ⚡ Performance

### Optimization Techniques
1. **Lazy Loading** - Images load as they enter viewport
2. **Minimal Dependencies** - No heavy frameworks
3. **CSS Optimization** - Organized, no redundancy
4. **JavaScript Efficiency** - Event delegation, IntersectionObserver
5. **Image Optimization** - Unsplash auto-optimizes, advise client to compress

### Load Time Targets
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Total Load**: < 5s

### File Sizes (Approximate)
- HTML: ~20KB
- CSS: ~25KB
- JavaScript: ~15KB
- **Total (before images)**: ~60KB

---

## 🔧 Browser Compatibility

### Supported Browsers
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Safari (iOS 13+)
- Chrome Mobile

### Progressive Enhancement
Core content accessible even if:
- JavaScript disabled (content still visible)
- CSS animations not supported (content still readable)
- Images fail to load (alt text provides context)

### Fallbacks
- CSS Grid fallback: Flexbox
- Custom Properties fallback: Hard-coded values in old browsers
- IntersectionObserver fallback: Content visible by default

---

## 🚀 Deployment Options

### 1. Static Hosting (Recommended)
- **Netlify** (Free tier available)
- **Vercel** (Free tier available)
- **GitHub Pages** (Free)
- **Cloudflare Pages** (Free)

### 2. Traditional Web Hosting
- Upload via FTP/SFTP
- Place `index.html` in root directory
- Ensure proper MIME types for CSS/JS

### 3. CDN
- Can be served entirely from CDN
- No server-side processing required
- Cache-friendly (static assets)

---

## 📊 Analytics Integration (Future)

Easy to add:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🔐 Security Considerations

### Current Status
- No user input forms (no XSS vulnerability)
- No backend (no server-side vulnerabilities)
- External links use `rel="noopener"` where appropriate
- HTTPS recommended when deployed

### Recommendations for Production
1. Serve over HTTPS
2. Set proper Content Security Policy headers
3. Use Subresource Integrity (SRI) for CDN resources
4. Keep external dependencies minimal

---

## 🧪 Testing Checklist

### Functional Testing
- [x] Navigation links work
- [x] Mobile menu opens/closes
- [x] Menu filtering works
- [x] Smooth scroll functions
- [x] Phone links work (tel:)
- [x] Map links work
- [x] All buttons have actions

### Visual Testing
- [x] Typography renders correctly
- [x] Images load properly
- [x] Layout doesn't break at any viewport
- [x] No horizontal scroll
- [x] Animations smooth
- [x] Hover states work

### Accessibility Testing
- [x] Keyboard navigation works
- [x] Screen reader friendly
- [x] Color contrast sufficient
- [x] Focus states visible
- [x] ARIA labels present

### Performance Testing
- [x] Fast load time
- [x] No JavaScript errors
- [x] No console warnings
- [x] Images optimized
- [x] Animations smooth 60fps

---

## 🔄 Future Enhancement Ideas

### Easy Additions
- Newsletter signup form
- Instagram feed integration
- Customer reviews/testimonials
- Special offers banner
- Cookie consent banner
- Language switcher

### Advanced Features
- Online ordering integration
- Table reservation system
- Loyalty program
- Gift card purchase
- Event calendar
- Blog section

---

## 📚 Code Quality

### Standards Followed
- HTML5 semantic markup
- BEM-like CSS naming (where appropriate)
- ES6+ JavaScript
- DRY principles
- Commented code for clarity
- Consistent formatting

### Maintainability
- Organized file structure
- Clear separation of concerns
- Configuration objects for easy editing
- Modular JavaScript functions
- CSS organized by section
- Comprehensive comments

---

## 💻 Development Workflow

### Local Development
1. Edit files in code editor
2. Refresh browser to see changes
3. No build process needed
4. No dependencies to install

### Testing
1. Open `index.html` in multiple browsers
2. Use browser DevTools for responsive testing
3. Test on real devices
4. Validate HTML/CSS

### Deployment
1. Ensure all changes saved
2. Upload to hosting
3. Clear cache
4. Test live site

---

## 🎓 Learning Resources

If you need to understand the code better:

- **HTML**: [MDN Web Docs - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- **CSS Grid**: [CSS-Tricks Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- **Flexbox**: [CSS-Tricks Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- **JavaScript**: [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- **Accessibility**: [WebAIM](https://webaim.org/)

---

**This is production-ready code. Well-structured, documented, and maintainable.**
