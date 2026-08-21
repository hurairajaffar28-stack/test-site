// ==========================================
// PECKHAM CAFÉ - JAVASCRIPT
// ==========================================

// ==========================================
// BUSINESS CONFIGURATION
// ==========================================

const business = {
    name: 'PECKHAM',
    tagline: 'Coffee • Food • Deli',
    address: {
        street: '63 Peckham High St',
        city: 'London',
        postcode: 'SE15 5EB',
        country: 'United Kingdom',
        locationCode: 'FWFH+CR London, United Kingdom'
    },
    phone: '+442033367568',
    phoneDisplay: '+44 20 3336 7568',
    priceRange: '£1–10 per person',
    status: {
        isOpen: false,
        opensAt: '10:00 AM'
    }
};

// ==========================================
// IMAGES CONFIGURATION
// ==========================================

const images = {
    hero: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=80',
    about: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&q=80',
    orderCta: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=1920&q=80',
    location: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80',
    gallery: [
        'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80', // Coffee shop interior
        'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80', // Coffee cup
        'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800&q=80', // Breakfast
        'https://images.unsplash.com/photo-1619096252214-ef06c45683e3?w=800&q=80', // Pastries
        'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=800&q=80', // Sandwich
        'https://images.unsplash.com/photo-1502462041640-b3d8b1885f0f?w=800&q=80', // Coffee preparation
        'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&q=80', // Café atmosphere
        'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800&q=80'  // Food close-up
    ],
    featured: {
        breakfastSandwich: 'https://images.unsplash.com/photo-1619894991209-e2aa59f8d244?w=400&q=80',
        pastry: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80',
        chickenBowl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80',
        grilledCheese: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80',
        coffee: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80',
        juice: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&q=80'
    }
};

// ==========================================
// FEATURED ITEMS (SAMPLE DEMO DATA)
// ==========================================

const featuredItems = [
    {
        name: 'Breakfast Sandwich',
        description: 'Freshly baked with seasonal ingredients.',
        price: '£6.50',
        image: images.featured.breakfastSandwich,
        alt: 'Breakfast sandwich with fresh ingredients'
    },
    {
        name: 'Fresh Pastry',
        description: 'Daily selection of artisan pastries.',
        price: '£3.50',
        image: images.featured.pastry,
        alt: 'Fresh artisan pastry'
    },
    {
        name: 'Chicken & Salad Bowl',
        description: 'Grilled chicken with seasonal greens.',
        price: '£9.50',
        image: images.featured.chickenBowl,
        alt: 'Chicken and salad bowl'
    },
    {
        name: 'Grilled Cheese',
        description: 'Classic comfort food done right.',
        price: '£7.50',
        image: images.featured.grilledCheese,
        alt: 'Grilled cheese sandwich'
    },
    {
        name: 'House Coffee',
        description: 'Freshly brewed specialty coffee.',
        price: '£3.00',
        image: images.featured.coffee,
        alt: 'House specialty coffee'
    },
    {
        name: 'Fresh Juice',
        description: 'Daily cold-pressed juice selection.',
        price: '£4.00',
        image: images.featured.juice,
        alt: 'Fresh pressed juice'
    }
];

// ==========================================
// MENU ITEMS (SAMPLE DEMO DATA)
// ==========================================

const menuItems = [
    // BREAKFAST
    {
        name: 'Full English Breakfast',
        description: 'Eggs, bacon, sausage, beans, tomato, toast.',
        price: '£9.50',
        category: 'breakfast',
        dietary: null
    },
    {
        name: 'Avocado Toast',
        description: 'Smashed avocado, poached eggs, sourdough.',
        price: '£7.50',
        category: 'breakfast',
        dietary: 'V'
    },
    {
        name: 'Pancakes',
        description: 'Buttermilk pancakes with maple syrup.',
        price: '£6.50',
        category: 'breakfast',
        dietary: 'V'
    },
    {
        name: 'Breakfast Wrap',
        description: 'Scrambled eggs, bacon, cheese in a wrap.',
        price: '£6.00',
        category: 'breakfast',
        dietary: null
    },
    
    // COFFEE
    {
        name: 'Espresso',
        description: 'Single or double shot.',
        price: '£2.50',
        category: 'coffee',
        dietary: null
    },
    {
        name: 'Flat White',
        description: 'Smooth espresso with steamed milk.',
        price: '£3.20',
        category: 'coffee',
        dietary: null
    },
    {
        name: 'Cappuccino',
        description: 'Classic Italian coffee.',
        price: '£3.20',
        category: 'coffee',
        dietary: null
    },
    {
        name: 'Latte',
        description: 'Espresso with steamed milk.',
        price: '£3.40',
        category: 'coffee',
        dietary: null
    },
    {
        name: 'Americano',
        description: 'Espresso with hot water.',
        price: '£2.80',
        category: 'coffee',
        dietary: null
    },
    {
        name: 'Mocha',
        description: 'Espresso, chocolate, steamed milk.',
        price: '£3.80',
        category: 'coffee',
        dietary: null
    },
    
    // FOOD
    {
        name: 'Club Sandwich',
        description: 'Triple-decker with chicken, bacon, lettuce.',
        price: '£8.50',
        category: 'food',
        dietary: null
    },
    {
        name: 'Veggie Burger',
        description: 'House-made patty with seasonal vegetables.',
        price: '£8.00',
        category: 'food',
        dietary: 'V'
    },
    {
        name: 'Fish & Chips',
        description: 'Beer-battered cod with hand-cut chips.',
        price: '£10.00',
        category: 'food',
        dietary: null
    },
    {
        name: 'Caesar Salad',
        description: 'Romaine, parmesan, croutons, classic dressing.',
        price: '£7.50',
        category: 'food',
        dietary: 'V'
    },
    {
        name: 'Soup of the Day',
        description: 'Fresh seasonal soup with bread.',
        price: '£5.50',
        category: 'food',
        dietary: null
    },
    
    // SIDES
    {
        name: 'Hand-Cut Chips',
        description: 'Crispy golden chips.',
        price: '£3.50',
        category: 'sides',
        dietary: 'V'
    },
    {
        name: 'Sweet Potato Fries',
        description: 'Crispy sweet potato fries.',
        price: '£4.00',
        category: 'sides',
        dietary: 'V'
    },
    {
        name: 'Side Salad',
        description: 'Fresh mixed greens.',
        price: '£3.00',
        category: 'sides',
        dietary: 'V'
    },
    {
        name: 'Garlic Bread',
        description: 'Toasted sourdough with garlic butter.',
        price: '£3.50',
        category: 'sides',
        dietary: 'V'
    },
    
    // DRINKS
    {
        name: 'Fresh Orange Juice',
        description: 'Freshly squeezed orange juice.',
        price: '£3.50',
        category: 'drinks',
        dietary: null
    },
    {
        name: 'Smoothie',
        description: 'Daily selection of fresh smoothies.',
        price: '£4.50',
        category: 'drinks',
        dietary: null
    },
    {
        name: 'Iced Tea',
        description: 'House-brewed iced tea.',
        price: '£3.00',
        category: 'drinks',
        dietary: null
    },
    {
        name: 'Soft Drinks',
        description: 'Selection of soft drinks.',
        price: '£2.50',
        category: 'drinks',
        dietary: null
    }
];

// ==========================================
// OPENING HOURS
// ==========================================

const openingHours = {
    monday: 'Hours to be confirmed',
    tuesday: 'Hours to be confirmed',
    wednesday: 'Hours to be confirmed',
    thursday: 'Hours to be confirmed',
    friday: 'Hours to be confirmed',
    saturday: 'Hours to be confirmed',
    sunday: 'Hours to be confirmed'
};

// ==========================================
// DOM ELEMENTS
// ==========================================

const elements = {
    nav: document.getElementById('mainNav'),
    hamburger: document.getElementById('hamburger'),
    mobileMenu: document.getElementById('mobileMenu'),
    mobileMenuLinks: document.querySelectorAll('.mobile-menu-link'),
    menuFilters: document.querySelectorAll('.menu-filter'),
    menuGrid: document.getElementById('menuGrid'),
    featuredGrid: document.getElementById('featuredGrid'),
    galleryGrid: document.getElementById('galleryGrid'),
    openingHoursDisplay: document.getElementById('openingHoursDisplay'),
    animatedElements: document.querySelectorAll('.animate-fade-up')
};

// ==========================================
// NAVIGATION
// ==========================================

function initNavigation() {
    // Sticky nav scroll effect
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            elements.nav.classList.add('scrolled');
        } else {
            elements.nav.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#order') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offset = 80;
                    const targetPosition = target.offsetTop - offset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (elements.mobileMenu.classList.contains('active')) {
                        toggleMobileMenu();
                    }
                }
            }
        });
    });
}

// ==========================================
// MOBILE MENU
// ==========================================

function toggleMobileMenu() {
    elements.hamburger.classList.toggle('active');
    elements.mobileMenu.classList.toggle('active');
    elements.hamburger.setAttribute(
        'aria-expanded',
        elements.hamburger.classList.contains('active')
    );
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = elements.mobileMenu.classList.contains('active') ? 'hidden' : '';
}

function initMobileMenu() {
    elements.hamburger.addEventListener('click', toggleMobileMenu);
    
    // Close menu when clicking a link
    elements.mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (elements.mobileMenu.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });
}

// ==========================================
// FEATURED ITEMS RENDERING
// ==========================================

function renderFeaturedItems() {
    if (!elements.featuredGrid) return;
    
    const html = featuredItems.map(item => `
        <div class="featured-item animate-fade-up">
            <div class="featured-image">
                <img src="${item.image}" alt="${item.alt}" loading="lazy">
            </div>
            <div class="featured-info">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <span class="featured-price">${item.price}</span>
            </div>
        </div>
    `).join('');
    
    elements.featuredGrid.innerHTML = html;
}

// ==========================================
// MENU FILTERING
// ==========================================

let currentCategory = 'all';

function renderMenu(category = 'all') {
    if (!elements.menuGrid) return;
    
    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);
    
    const html = filteredItems.map(item => `
        <div class="menu-item" data-category="${item.category}">
            <div class="menu-item-info">
                <div class="menu-item-header">
                    <h3 class="menu-item-name">${item.name}</h3>
                    ${item.dietary ? `<span class="menu-item-label">${item.dietary}</span>` : ''}
                </div>
                <p class="menu-item-description">${item.description}</p>
            </div>
            <span class="menu-item-price">${item.price}</span>
        </div>
    `).join('');
    
    elements.menuGrid.innerHTML = html;
    
    // Trigger animation
    setTimeout(() => {
        const menuElements = elements.menuGrid.querySelectorAll('.menu-item');
        menuElements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 50);
        });
    }, 10);
}

function initMenuFilters() {
    if (!elements.menuFilters.length) return;
    
    elements.menuFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            // Update active state
            elements.menuFilters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');
            
            // Filter menu
            const category = filter.getAttribute('data-category');
            currentCategory = category;
            renderMenu(category);
        });
    });
}

// ==========================================
// GALLERY RENDERING
// ==========================================

function renderGallery() {
    if (!elements.galleryGrid) return;
    
    const html = images.gallery.map((img, index) => `
        <div class="gallery-item animate-fade-up">
            <img src="${img}" alt="Peckham café gallery image ${index + 1}" loading="lazy">
        </div>
    `).join('');
    
    elements.galleryGrid.innerHTML = html;
}

// ==========================================
// OPENING HOURS RENDERING
// ==========================================

function renderOpeningHours() {
    if (!elements.openingHoursDisplay) return;
    
    const days = Object.entries(openingHours);
    const html = `
        <div class="opening-hours-list">
            ${days.map(([day, hours]) => `
                <div class="opening-hours-day">
                    <span class="day">${day.charAt(0).toUpperCase() + day.slice(1)}</span>
                    <span class="time">${hours}</span>
                </div>
            `).join('')}
        </div>
    `;
    
    elements.openingHoursDisplay.innerHTML = html;
}

// ==========================================
// SCROLL ANIMATIONS
// ==========================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.animate-fade-up');
    animatedElements.forEach(el => observer.observe(el));
}

// ==========================================
// INITIALIZATION
// ==========================================

function init() {
    // Initialize all components
    initNavigation();
    initMobileMenu();
    renderFeaturedItems();
    renderMenu();
    initMenuFilters();
    renderGallery();
    renderOpeningHours();
    
    // Delay scroll animations slightly to ensure DOM is ready
    setTimeout(() => {
        initScrollAnimations();
    }, 100);
    
    console.log('🍽️ Peckham Café website initialized');
}

// ==========================================
// REDUCED MOTION CHECK
// ==========================================

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
    document.documentElement.style.setProperty('--transition-base', '0.01ms');
    document.documentElement.style.setProperty('--transition-smooth', '0.01ms');
}

// ==========================================
// RUN ON DOM READY
// ==========================================

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ==========================================
// EXPORT FOR EASY CUSTOMIZATION
// ==========================================

// Make configuration accessible in console for easy editing
window.PeckhamConfig = {
    business,
    images,
    featuredItems,
    menuItems,
    openingHours
};

console.log('📝 To customize, edit window.PeckhamConfig in the console or edit js/script.js');
