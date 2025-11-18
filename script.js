// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// The "Order Now" button now navigates directly to order.html via its href attribute in index.html,
// so the custom click event and the alert pop-up are no longer needed.
// The button is an <a> tag with href="order.html" in index.html (line 149).
// Removing the click handler to allow default navigation.

// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxClose = document.querySelector('.lightbox-close');
const galleryItems = document.querySelectorAll('.gallery-item');

// Open lightbox when clicking on a gallery item
galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        lightboxImage.src = this.src;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
});

// Close lightbox when clicking the close button
lightboxClose.addEventListener('click', function() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
});

// Close lightbox with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
});

// Gallery image hover effect
galleryItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});

// Responsive check on resize
window.addEventListener('resize', function() {
    // Any responsive adjustments can be made here if needed
    console.log('Window resized');
});


// Filter functionality
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryGrid = document.getElementById('gallery-grid');
const showMoreBtn = document.getElementById('show-more-btn');
let visibleCount = 16;
let currentFilter = 'all';

if (filterBtns.length > 0 && galleryGrid) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            currentFilter = this.getAttribute('data-filter');
            visibleCount = 12; // Reset to 12 when filtering
            
            filterGallery();
        });
    });
}

function filterGallery() {
    const items = document.querySelectorAll('.gallery-item');
    let visibleItems = 0;
    
    items.forEach((item, index) => {
        const category = item.getAttribute('data-category');
        const matchesFilter = currentFilter === 'all' || category === currentFilter;
        
        if (matchesFilter) {
            if (visibleItems < visibleCount) {
                item.classList.remove('hidden');
                visibleItems++;
            } else {
                item.classList.add('hidden');
            }
        } else {
            item.classList.add('hidden');
        }
    });
    
    // Update show more button visibility
    updateShowMoreButton();
}

function updateShowMoreButton() {
    if (!showMoreBtn) return;
    
    const items = document.querySelectorAll('.gallery-item');
    let totalMatchingItems = 0;
    
    items.forEach(item => {
        const category = item.getAttribute('data-category');
        if (currentFilter === 'all' || category === currentFilter) {
            totalMatchingItems++;
        }
    });
    
    if (totalMatchingItems > visibleCount) {
        showMoreBtn.classList.remove('hidden');
    } else {
        showMoreBtn.classList.add('hidden');
    }
}

// Show more button functionality
if (showMoreBtn) {
    showMoreBtn.addEventListener('click', function() {
        visibleCount += 4; // Show 4 more items each time
        filterGallery();
    });
}

// Initialize gallery on page load
window.addEventListener('load', function() {
    filterGallery();
});
