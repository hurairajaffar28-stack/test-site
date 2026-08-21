# Quick Customization Guide

## 🔧 5-Minute Setup for Client

### Change Business Name

**File:** `index.html` + `js/script.js`

Search for `PECKHAM` and replace with your business name.
Search for `Coffee • Food • Deli` and replace with your tagline.

---

### Change Colors

**File:** `css/style.css` (lines 40-48)

```css
:root {
    --cream: #F5F1E8;        /* Background cream */
    --espresso: #3D2817;     /* Dark brown for text/buttons */
    --dark: #1A1A1A;         /* Almost black */
    --charcoal: #2C2C2C;     /* Dark gray */
    --warm-beige: #D4C5B0;   /* Light brown */
    --muted-olive: #8B8871;  /* Muted green-brown */
    --off-white: #FEFDFB;    /* Off-white */
    --accent: #C17B5C;       /* Terracotta accent */
}
```

Change any hex color value. The entire site will update automatically.

---

### Change Images

**File:** `js/script.js` (lines 30-58)

Replace all Unsplash URLs with your own images:

```javascript
const images = {
    hero: 'YOUR_IMAGE_URL',
    about: 'YOUR_IMAGE_URL',
    orderCta: 'YOUR_IMAGE_URL',
    location: 'YOUR_IMAGE_URL',
    gallery: [
        'YOUR_IMAGE_URL',
        'YOUR_IMAGE_URL',
        // ... 8 images total
    ],
    featured: {
        breakfastSandwich: 'YOUR_IMAGE_URL',
        pastry: 'YOUR_IMAGE_URL',
        // ... etc
    }
};
```

---

### Change Contact Info

**File:** `js/script.js` (lines 8-25)

```javascript
const business = {
    name: 'YOUR BUSINESS',
    tagline: 'Your Tagline',
    address: {
        street: 'Your Street',
        city: 'Your City',
        postcode: 'Your Postcode',
        country: 'Your Country',
        locationCode: 'Your Location Code'
    },
    phone: '+44XXXXXXXXXX',         // No spaces
    phoneDisplay: '+44 XX XXXX XXXX', // With spaces for display
    priceRange: '£X–X per person',
    status: {
        isOpen: false,
        opensAt: '10:00 AM'
    }
};
```

---

### Update Menu

**File:** `js/script.js` (lines 100-230)

Add, remove, or edit items in the `menuItems` array:

```javascript
{
    name: 'Your Item Name',
    description: 'Your description',
    price: '£X.XX',
    category: 'breakfast',  // breakfast, coffee, food, sides, drinks
    dietary: null           // 'V', 'VG', 'GF', or null
}
```

---

### Update Opening Hours

**File:** `js/script.js` (lines 235-245)

```javascript
const openingHours = {
    monday: '10:00 AM - 6:00 PM',
    tuesday: '10:00 AM - 6:00 PM',
    wednesday: '10:00 AM - 6:00 PM',
    thursday: '10:00 AM - 6:00 PM',
    friday: '10:00 AM - 8:00 PM',
    saturday: '9:00 AM - 8:00 PM',
    sunday: '9:00 AM - 6:00 PM'
};
```

---

### Change Fonts

**File:** `index.html` (line 19)

Replace the Google Fonts URL:

```html
<link href="https://fonts.googleapis.com/css2?family=YOUR+FONT&display=swap" rel="stylesheet">
```

**File:** `css/style.css` (line 23)

```css
body {
    font-family: 'Your Font', sans-serif;
}
```

---

## 📍 Key Locations in Code

| What to Change | File | Line(s) |
|---------------|------|---------|
| Business Name | `js/script.js` | 9 |
| Phone Number | `js/script.js` | 20-21 |
| Address | `js/script.js` | 11-17 |
| Colors | `css/style.css` | 40-48 |
| Hero Image | `js/script.js` | 31 |
| Menu Items | `js/script.js` | 100-230 |
| Featured Items | `js/script.js` | 63-98 |
| Gallery Images | `js/script.js` | 36-46 |
| Opening Hours | `js/script.js` | 235-245 |
| SEO Title | `index.html` | 6 |
| Meta Description | `index.html` | 7 |

---

## ✅ Pre-Launch Checklist

- [ ] Replace business name everywhere
- [ ] Update phone number
- [ ] Update address
- [ ] Replace all images with professional photos
- [ ] Update menu items and prices
- [ ] Set correct opening hours
- [ ] Update meta description and title
- [ ] Test on mobile phone
- [ ] Test all buttons and links
- [ ] Check menu filtering works
- [ ] Test mobile menu

---

## 🚀 How to Deploy

### Option 1: Netlify (Free)
1. Drag and drop the entire folder to netlify.com/drop
2. Done! You get a free URL.

### Option 2: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all files
3. Enable GitHub Pages in repository settings

### Option 3: Traditional Hosting
1. Upload all files via FTP
2. Ensure `index.html` is in the root directory
3. Done!

---

## 💡 Pro Tips

- **Use high-quality images** - This makes the biggest visual difference
- **Keep menu descriptions short** - 10 words or less
- **Update opening hours** - Clients notice this first
- **Test on real phones** - Not just browser resize
- **Compress images** - Use tinypng.com before uploading
- **Real photography > Stock photos** - Always

---

## ⚡ Common Issues

**Menu not filtering?**
- Check JavaScript console for errors
- Make sure `category` values match filter buttons

**Images not loading?**
- Check image URLs are correct
- Check for HTTPS if your site is HTTPS

**Mobile menu not opening?**
- Clear browser cache
- Check JavaScript is loading

**Animations not working?**
- Check if "reduce motion" is enabled in OS settings
- The site respects accessibility preferences

---

**Need help? All code is commented and organized for easy editing.**
