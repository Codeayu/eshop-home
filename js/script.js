// Sample product data
const products = [
    { id: 1, name: "Premium Wireless Headphones", category: "electronics", price: 299.99, rating: 4.8, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&crop=center" },
    { id: 2, name: "Designer Cotton T-Shirt", category: "fashion", price: 49.99, rating: 4.5, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center" },
    { id: 3, name: "Luxury Watch Collection", category: "accessories", price: 899.99, rating: 4.9, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center" },
    { id: 4, name: "Smart Fitness Tracker", category: "electronics", price: 199.99, rating: 4.6, image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop&crop=center" },
    { id: 5, name: "Casual Denim Jacket", category: "fashion", price: 79.99, rating: 4.4, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop&crop=center" },
    { id: 6, name: "Bluetooth Speaker Pro", category: "electronics", price: 149.99, rating: 4.7, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop&crop=center" },
    { id: 7, name: "Summer Dress Collection", category: "fashion", price: 89.99, rating: 4.3, image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop&crop=center" },
    { id: 8, name: "Leather Handbag", category: "accessories", price: 199.99, rating: 4.6, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop&crop=center" },
    { id: 9, name: "Gaming Laptop Ultra", category: "electronics", price: 1299.99, rating: 4.8, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop&crop=center" },
    { id: 10, name: "Sneakers Sport Edition", category: "fashion", price: 129.99, rating: 4.5, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center" },
    { id: 11, name: "Wireless Earbuds Pro", category: "electronics", price: 179.99, rating: 4.7, image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop&crop=center" },
    { id: 12, name: "Silk Scarf Luxury", category: "accessories", price: 59.99, rating: 4.4, image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop&crop=center" },
    { id: 13, name: "Smart Home Camera", category: "electronics", price: 249.99, rating: 4.6, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center" },
    { id: 14, name: "Winter Coat Premium", category: "fashion", price: 199.99, rating: 4.8, image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop&crop=center" },
    { id: 15, name: "Tablet Pro 12-inch", category: "electronics", price: 799.99, rating: 4.7, image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=400&fit=crop&crop=center" },
    { id: 16, name: "Designer Sunglasses", category: "accessories", price: 149.99, rating: 4.5, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop&crop=center" },
    { id: 17, name: "Formal Shirt Collection", category: "fashion", price: 69.99, rating: 4.3, image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop&crop=center" },
    { id: 18, name: "Portable Power Bank", category: "electronics", price: 39.99, rating: 4.4, image: "https://images.unsplash.com/photo-1609592424686-192ffa1d6ee2?w=400&h=400&fit=crop&crop=center" },
    { id: 19, name: "Evening Gown Elegant", category: "fashion", price: 299.99, rating: 4.9, image: "https://images.unsplash.com/photo-1566479179817-0b4d4ee97b1d?w=400&h=400&fit=crop&crop=center" },
    { id: 20, name: "Smart Doorbell HD", category: "electronics", price: 199.99, rating: 4.6, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center" }
];

// Pagination and filtering variables
let currentPage = 1;
const itemsPerPage = 8;
let currentFilter = 'all';
let filteredProducts = [...products];

// DOM elements
const productsGrid = document.getElementById('productsGrid');
const paginationNumbers = document.getElementById('paginationNumbers');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const filterButtons = document.querySelectorAll('.filter-btn');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
    setupPagination();
    setupEventListeners();
    animateOnScroll();
});

// Display products based on current page and filter
function displayProducts() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);
    
    productsGrid.innerHTML = '';
    
    productsToShow.forEach((product, index) => {
        const productCard = createProductCard(product);
        productCard.style.animationDelay = `${index * 0.1}s`;
        productsGrid.appendChild(productCard);
    });
    
    // Add animation class to newly created cards
    setTimeout(() => {
        document.querySelectorAll('.product-card').forEach(card => {
            card.classList.add('fade-in');
        });
    }, 50);
}

// Create product card HTML
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;" loading="lazy" onerror="this.src='https://via.placeholder.com/400x200/e2e8f0/64748b?text=Image+Not+Found'">
        </div>
        <div class="product-info">
            <div class="product-category">${product.category}</div>
            <h3 class="product-title">${product.name}</h3>
            <div class="product-rating">
                <div class="stars">${generateStars(product.rating)}</div>
                <span class="rating-text">(${product.rating})</span>
            </div>
            <div class="product-price">$${product.price}</div>
            <button class="product-btn" onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        </div>
    `;
    return card;
}

// Generate star rating HTML
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    return starsHTML;
}

// Setup pagination
function setupPagination() {
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    
    paginationNumbers.innerHTML = '';
    
    for (let i = 1; i <= totalPages; i++) {
        const pageNumber = document.createElement('div');
        pageNumber.className = `page-number ${i === currentPage ? 'active' : ''}`;
        pageNumber.textContent = i;
        pageNumber.onclick = () => goToPage(i);
        paginationNumbers.appendChild(pageNumber);
    }
    
    // Update navigation buttons
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
}

// Navigate to specific page
function goToPage(page) {
    currentPage = page;
    displayProducts();
    setupPagination();
    scrollToTop();
}

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            currentFilter = this.dataset.filter;
            applyFilter();
        });
    });
    
    // Pagination buttons
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            goToPage(currentPage - 1);
        }
    });
    
    nextBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
        if (currentPage < totalPages) {
            goToPage(currentPage + 1);
        }
    });
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
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
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('.newsletter-input').value;
            if (email) {
                showNotification('Thank you for subscribing!', 'success');
                this.reset();
            }
        });
    }
    
    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });
}

// Apply product filter
function applyFilter() {
    if (currentFilter === 'all') {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(product => product.category === currentFilter);
    }
    
    currentPage = 1;
    displayProducts();
    setupPagination();
}

// Add to cart functionality
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        // Update cart count
        const cartCount = document.querySelector('.cart-count');
        let currentCount = parseInt(cartCount.textContent) || 0;
        cartCount.textContent = currentCount + 1;
        
        // Show notification
        showNotification(`${product.name} added to cart!`, 'success');
        
        // Add cart animation
        animateCartIcon();
    }
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 1001;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Hide notification
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Animate cart icon
function animateCartIcon() {
    const cartIcon = document.querySelector('.fa-shopping-cart');
    if (cartIcon) {
        cartIcon.style.transform = 'scale(1.2)';
        cartIcon.style.color = '#10b981';
        
        setTimeout(() => {
            cartIcon.style.transform = 'scale(1)';
            cartIcon.style.color = '';
        }, 200);
    }
}

// Scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Animate elements on scroll
function animateOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.feature-card, .product-card, .section-header').forEach(el => {
        observer.observe(el);
    });
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .animate-in {
        animation: slideInUp 0.8s ease forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 8px;
    }
    
    .nav-menu.active {
        display: flex;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: white;
        flex-direction: column;
        padding: 20px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    
    @media (max-width: 768px) {
        .nav-menu {
            display: none;
        }
    }
`;

document.head.appendChild(style);

// Search functionality (bonus feature)
function setupSearch() {
    const searchIcon = document.querySelector('.fa-search');
    if (searchIcon) {
        searchIcon.addEventListener('click', () => {
            const searchTerm = prompt('Search products:');
            if (searchTerm) {
                searchProducts(searchTerm);
            }
        });
    }
}

function searchProducts(term) {
    filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(term.toLowerCase()) ||
        product.category.toLowerCase().includes(term.toLowerCase())
    );
    
    currentPage = 1;
    displayProducts();
    setupPagination();
    
    // Update filter buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    showNotification(`Found ${filteredProducts.length} products for "${term}"`, 'info');
}

// Initialize search
setupSearch();
