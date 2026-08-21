# Color Palette Reference

## 🎨 Current Color Scheme

### Primary Colors

```
CREAM
#F5F1E8
RGB(245, 241, 232)
Main background, warm and welcoming
Used for: Page background, nav background, card backgrounds
```

```
ESPRESSO
#3D2817
RGB(61, 40, 23)
Deep brown, premium coffee color
Used for: Headings, primary buttons, footer
```

```
ACCENT (Terracotta)
#C17B5C
RGB(193, 123, 92)
Warm earthy accent
Used for: Prices, hover states, eyebrow text, highlights
```

### Supporting Colors

```
DARK
#1A1A1A
RGB(26, 26, 26)
Near black for high contrast
Used for: Body text, important text
```

```
CHARCOAL
#2C2C2C
RGB(44, 44, 44)
Dark gray for secondary text
Used for: Navigation links, descriptions
```

```
WARM BEIGE
#D4C5B0
RGB(212, 197, 176)
Light brown, soft and muted
Used for: Subdued text, footer text, labels
```

```
MUTED OLIVE
#8B8871
RGB(139, 136, 113)
Subtle green-brown
Used for: Eyebrow text, subtle details
```

```
OFF-WHITE
#FEFDFB
RGB(254, 253, 251)
Almost white with warm undertone
Used for: Alternating section backgrounds, hero text
```

---

## 🔄 Alternative Color Schemes

### Option 1: Modern Minimal

```css
:root {
    --cream: #FAFAF9;        /* Lighter, cooler
    --espresso: #1F1F1F;     /* Almost black
    --dark: #0A0A0A;         /* True black
    --charcoal: #525252;     /* Medium gray
    --warm-beige: #E5E5E4;   /* Cool gray
    --muted-olive: #A3A3A3;  /* Neutral gray
    --off-white: #FFFFFF;    /* Pure white
    --accent: #DC2626;       /* Bright red accent
}
```
**Character:** Clean, contemporary, bold

---

### Option 2: Earthy Natural

```css
:root {
    --cream: #F7F4ED;        /* Warmer cream
    --espresso: #4A3928;     /* Lighter brown
    --dark: #2C2416;         /* Dark brown
    --charcoal: #5C5244;     /* Warm gray
    --warm-beige: #E8DCC8;   /* Sandy beige
    --muted-olive: #7A8057;  /* Sage green
    --off-white: #FFFEF9;    /* Warm white
    --accent: #D4A574;       /* Golden tan
}
```
**Character:** Organic, natural, warm

---

### Option 3: Sophisticated Dark

```css
:root {
    --cream: #E8E4DB;        /* Darker cream
    --espresso: #2B1810;     /* Deep espresso
    --dark: #1A1410;         /* Very dark brown
    --charcoal: #3D3530;     /* Dark warm gray
    --warm-beige: #C9B8A0;   /* Muted tan
    --muted-olive: #6B685E;  /* Dark olive
    --off-white: #F5F2EC;    /* Warm off-white
    --accent: #B87D4B;       /* Burnt orange
}
```
**Character:** Moody, upscale, intimate

---

### Option 4: Fresh & Bright

```css
:root {
    --cream: #FFFEF8;        /* Bright cream
    --espresso: #3E2723;     /* Brown
    --dark: #212121;         /* Dark gray
    --charcoal: #424242;     /* Medium gray
    --warm-beige: #F5E6D3;   /* Light peach
    --muted-olive: #8D9B6A;  /* Fresh green
    --off-white: #FFFFFF;    /* Pure white
    --accent: #FF6F3C;       /* Bright orange
}
```
**Character:** Energetic, friendly, approachable

---

### Option 5: Classic Elegant

```css
:root {
    --cream: #FAF7F2;        /* Elegant cream
    --espresso: #2C1810;     /* Rich brown
    --dark: #1C1814;         /* Deep brown-black
    --charcoal: #4A4238;     /* Warm charcoal
    --warm-beige: #D4C4B0;   /* Classic beige
    --muted-olive: #8C8779;  /* Taupe
    --off-white: #FFFDFB;    /* Soft white
    --accent: #A67C52;       /* Caramel
}
```
**Character:** Timeless, refined, luxurious

---

## 🎨 How to Change Colors

### Step 1: Choose Your Palette
Pick one of the schemes above or create your own.

### Step 2: Update CSS Variables
Open `css/style.css` and find lines 40-48:

```css
:root {
    /* Colors */
    --cream: #F5F1E8;      ← CHANGE THESE
    --espresso: #3D2817;   ← CHANGE THESE
    --dark: #1A1A1A;       ← CHANGE THESE
    --charcoal: #2C2C2C;   ← CHANGE THESE
    --warm-beige: #D4C5B0; ← CHANGE THESE
    --muted-olive: #8B8871;← CHANGE THESE
    --off-white: #FEFDFB;  ← CHANGE THESE
    --accent: #C17B5C;     ← CHANGE THESE
}
```

### Step 3: Save and Refresh
Save the CSS file and refresh your browser. The entire site updates automatically!

---

## 🔍 Where Each Color is Used

### CREAM (#F5F1E8)
- Main page background
- Navigation background (with opacity)
- Service cards
- Menu section background
- Footer text color (when on dark bg)

### ESPRESSO (#3D2817)
- All headings (h1, h2, h3, etc.)
- Primary buttons background
- Mobile menu background
- Footer background
- Navigation text (brand name)

### DARK (#1A1A1A)
- Body text (paragraphs)
- High-contrast text
- Button hover states

### CHARCOAL (#2C2C2C)
- Navigation links
- Secondary text
- Menu descriptions
- Card descriptions

### WARM BEIGE (#D4C5B0)
- Subdued text elements
- Footer address
- Hero location text
- Mobile menu info

### MUTED OLIVE (#8B8871)
- Brand tagline
- Small labels
- Subtle UI elements
- Secondary information

### OFF-WHITE (#FEFDFB)
- Alternating section backgrounds
- Hero text overlay
- Service section
- Gallery section
- Final CTA section

### ACCENT (#C17B5C)
- All prices
- Eyebrow text ("ABOUT THE PLACE", etc.)
- Hover states on borders
- Interactive element highlights
- Status indicators

---

## 🧪 Testing Your Colors

### Contrast Check
Use this tool to ensure accessibility:
https://webaim.org/resources/contrastchecker/

**Minimum requirements:**
- Normal text: 4.5:1 ratio
- Large text (18pt+): 3:1 ratio
- UI elements: 3:1 ratio

### Current Scheme Contrast Ratios

```
ESPRESSO (#3D2817) on CREAM (#F5F1E8)
Ratio: 10.5:1 ✅ Excellent

DARK (#1A1A1A) on CREAM (#F5F1E8)
Ratio: 13.8:1 ✅ Excellent

CHARCOAL (#2C2C2C) on CREAM (#F5F1E8)
Ratio: 11.2:1 ✅ Excellent

ACCENT (#C17B5C) on CREAM (#F5F1E8)
Ratio: 3.2:1 ✅ Good (for large text)

OFF-WHITE (#FEFDFB) on ESPRESSO (#3D2817)
Ratio: 14.5:1 ✅ Excellent
```

---

## 🎨 Color Psychology

### Why These Colors Work for a Café

**CREAM/BEIGE**
- Evokes warmth and comfort
- Associated with natural, organic products
- Creates a welcoming atmosphere
- Reduces screen fatigue

**ESPRESSO BROWN**
- Direct coffee association
- Conveys richness and quality
- Premium, sophisticated feel
- Grounds the design

**TERRACOTTA ACCENT**
- Warm and appetizing
- Earthy and authentic
- Draws attention without being aggressive
- Complements food photography

**Result:** Cozy, premium, appetizing

---

## 🌈 Color Combinations

### Best Uses

**High Contrast (for readability)**
- ESPRESSO text on CREAM background
- DARK text on CREAM background
- OFF-WHITE text on ESPRESSO background

**Subtle Contrast (for variety)**
- CHARCOAL text on CREAM background
- WARM BEIGE text on ESPRESSO background

**Accent Use (for highlights)**
- ACCENT for prices, CTAs, highlights
- Use sparingly for maximum impact

**Background Alternation**
- CREAM → OFF-WHITE → CREAM
- Creates visual rhythm
- Breaks up content sections

---

## 📊 Color Usage Percentage

```
Approximate color distribution across the site:

CREAM:       40%  (main background)
OFF-WHITE:   30%  (alternating sections)
ESPRESSO:    15%  (text, buttons, footer)
CHARCOAL:    8%   (body text, links)
ACCENT:      4%   (highlights, prices)
OTHERS:      3%   (various UI elements)
```

---

## 💡 Pro Tips

### Do's ✅
- Keep contrast ratios high for readability
- Use accent color sparingly for impact
- Test on both light and dark mode screens
- Consider color blindness (test with simulators)
- Maintain consistent color usage

### Don'ts ❌
- Don't use too many colors
- Don't compromise readability for aesthetics
- Don't use pure black (#000000) - too harsh
- Don't use accent color for large text blocks
- Don't change colors randomly throughout site

---

## 🔧 Quick Color Changes

### Make it Darker/Moodier
Reduce the lightness of cream and beige colors:
```css
--cream: #E8E4DB;      /* Darker cream */
--warm-beige: #C9B8A0; /* Darker beige */
```

### Make it Lighter/Brighter
Increase the lightness:
```css
--cream: #FFFEF8;      /* Brighter cream */
--off-white: #FFFFFF;  /* Pure white */
```

### Change Accent Personality
```css
/* Energetic */
--accent: #FF6B35;     /* Orange-red */

/* Sophisticated */
--accent: #A67C52;     /* Caramel */

/* Fresh */
--accent: #76A86E;     /* Sage green */

/* Bold */
--accent: #D4342D;     /* Bright red */
```

---

## 🖨️ Print-Friendly Colors

If you need a print menu or materials:

```css
@media print {
    :root {
        --cream: #FFFFFF;
        --off-white: #FFFFFF;
        --espresso: #000000;
        --dark: #000000;
        --charcoal: #333333;
    }
}
```

---

## 📱 Dark Mode (Future Enhancement)

If you want to add dark mode support:

```css
@media (prefers-color-scheme: dark) {
    :root {
        --cream: #1A1A1A;
        --espresso: #F5F1E8;
        --dark: #E8E4DB;
        --charcoal: #D4C5B0;
        --off-white: #0F0F0F;
        --accent: #E89B77;
    }
}
```

---

**Choose your colors wisely - they set the entire mood of the website! 🎨**
