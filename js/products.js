// Enhanced products data with more details
const products = [
    { id: 1, name: "Premium Wireless Headphones", category: "electronics", price: 299.99, originalPrice: 399.99, rating: 4.8, reviews: 256, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&crop=center", sale: true },
    { id: 2, name: "Designer Cotton T-Shirt", category: "fashion", price: 49.99, rating: 4.5, reviews: 128, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center" },
    { id: 3, name: "Luxury Watch Collection", category: "accessories", price: 899.99, rating: 4.9, reviews: 89, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center" },
    { id: 4, name: "Smart Fitness Tracker", category: "electronics", price: 199.99, originalPrice: 249.99, rating: 4.6, reviews: 342, image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop&crop=center", sale: true },
    { id: 5, name: "Casual Denim Jacket", category: "fashion", price: 79.99, rating: 4.4, reviews: 156, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop&crop=center" },
    { id: 6, name: "Bluetooth Speaker Pro", category: "electronics", price: 149.99, rating: 4.7, reviews: 223, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop&crop=center" },
    { id: 7, name: "Summer Dress Collection", category: "fashion", price: 89.99, originalPrice: 119.99, rating: 4.3, reviews: 94, image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop&crop=center", sale: true },
    { id: 8, name: "Leather Handbag", category: "accessories", price: 199.99, rating: 4.6, reviews: 167, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop&crop=center" },
    { id: 9, name: "Gaming Laptop Ultra", category: "electronics", price: 1299.99, rating: 4.8, reviews: 78, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop&crop=center" },
    { id: 10, name: "Sneakers Sport Edition", category: "fashion", price: 129.99, rating: 4.5, reviews: 312, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center" },
    { id: 11, name: "Wireless Earbuds Pro", category: "electronics", price: 179.99, originalPrice: 199.99, rating: 4.7, reviews: 445, image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop&crop=center", sale: true },
    { id: 12, name: "Silk Scarf Luxury", category: "accessories", price: 59.99, rating: 4.4, reviews: 67, image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop&crop=center" },
    { id: 13, name: "Smart Home Camera", category: "electronics", price: 249.99, rating: 4.6, reviews: 189, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center" },
    { id: 14, name: "Winter Coat Premium", category: "fashion", price: 199.99, originalPrice: 279.99, rating: 4.8, reviews: 123, image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop&crop=center", sale: true },
    { id: 15, name: "Tablet Pro 12-inch", category: "electronics", price: 799.99, rating: 4.7, reviews: 201, image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=400&fit=crop&crop=center" },
    { id: 16, name: "Designer Sunglasses", category: "accessories", price: 149.99, rating: 4.5, reviews: 145, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop&crop=center" },
    { id: 17, name: "Formal Shirt Collection", category: "fashion", price: 69.99, rating: 4.3, reviews: 178, image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop&crop=center" },
    { id: 18, name: "Portable Power Bank", category: "electronics", price: 39.99, originalPrice: 59.99, rating: 4.4, reviews: 567, image: "https://images.unsplash.com/photo-1609592424686-192ffa1d6ee2?w=400&h=400&fit=crop&crop=center", sale: true },
    { id: 19, name: "Evening Gown Elegant", category: "fashion", price: 299.99, rating: 4.9, reviews: 43, image: "https://images.unsplash.com/photo-1566479179817-0b4d4ee97b1d?w=400&h=400&fit=crop&crop=center" },
    { id: 20, name: "Smart Doorbell HD", category: "electronics", price: 199.99, rating: 4.6, reviews: 234, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center" },
    { id: 21, name: "Running Shoes Pro", category: "fashion", price: 159.99, rating: 4.7, reviews: 298, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=center" },
    { id: 22, name: "Wireless Mouse Gaming", category: "electronics", price: 89.99, originalPrice: 109.99, rating: 4.5, reviews: 356, image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop&crop=center", sale: true },
    { id: 23, name: "Pearl Necklace Set", category: "accessories", price: 349.99, rating: 4.8, reviews: 72, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center" },
    { id: 24, name: "Leather Wallet Premium", category: "accessories", price: 79.99, rating: 4.6, reviews: 189, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center" }
];

// Pagination and filtering variables
let currentPage = 1;
const itemsPerPage = 12;
let currentFilter = 'all';
let filteredProducts = [...products];
let currentGridCols = 4;

// DOM elements
const productsGrid = document.getElementById('productsGrid');
const paginationNumbers = document.getElementById('paginationNumbers');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const searchInput = document.getElementById('searchInput');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
    setupPagination();
    setupEventListeners();
    updateCartCount();
});

// Display products based on current page and filter
function displayProducts() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);
    
    productsGrid.innerHTML = '';
    
    // Update grid classes based on current grid setting
    const gridClass = currentGridCols === 3 ? 
        'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 
        'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
    
    productsGrid.className = `grid ${gridClass} gap-6 mb-8`;
    
    productsToShow.forEach((product, index) => {
        const productCard = createProductCard(product);
        productCard.style.opacity = '0';
        productCard.style.transform = 'translateY(20px)';
        productsGrid.appendChild(productCard);
        
        // Animate card appearance
        setTimeout(() => {
            productCard.style.transition = 'all 0.3s ease';
            productCard.style.opacity = '1';
            productCard.style.transform = 'translateY(0)';
        }, index * 50);
    });
}

// Create product card HTML with Tailwind classes
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer';
    
    const saleTag = product.sale ? '<div class="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">SALE</div>' : '';
    const originalPrice = product.originalPrice ? `<span class="text-gray-400 line-through text-sm">$${product.originalPrice}</span>` : '';
    
    card.innerHTML = `
        <div class="relative">
            ${saleTag}
            <div class="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden group">
                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover transition-transform group-hover:scale-110 duration-300" loading="lazy" onerror="this.src='https://via.placeholder.com/400x400/e2e8f0/64748b?text=Image+Not+Found'">
                <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
            </div>
            <button class="absolute top-2 right-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100" onclick="toggleWishlist(${product.id}, event)">
                <i class="fas fa-heart text-sm"></i>
            </button>
        </div>
        <div class="p-4">
            <div class="text-xs text-primary font-semibold uppercase tracking-wide mb-1">${product.category}</div>
            <h3 class="font-semibold text-gray-900 mb-2 line-clamp-2">${product.name}</h3>
            <div class="flex items-center mb-2">
                <div class="flex text-secondary text-sm mr-2">
                    ${generateStars(product.rating)}
                </div>
                <span class="text-xs text-gray-500">(${product.reviews})</span>
            </div>
            <div class="flex items-center justify-between mb-3">
                <div class="flex items-center space-x-2">
                    <span class="text-lg font-bold text-secondary">$${product.price}</span>
                    ${originalPrice}
                </div>
            </div>
            <button class="w-full bg-primary text-white py-2 px-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors transform hover:scale-105 active:scale-95" onclick="addToCart(${product.id}, event)">
                Add to Cart
            </button>
        </div>
    `;
    
    // Add click event to navigate to product detail
    card.addEventListener('click', (e) => {
        if (!e.target.closest('button')) {
            window.location.href = `product-detail.html?id=${product.id}`;
        }
    });
    
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
    
    // Show max 5 page numbers
    const maxPages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPages / 2));
    let endPage = Math.min(totalPages, startPage + maxPages - 1);
    
    if (endPage - startPage + 1 < maxPages) {
        startPage = Math.max(1, endPage - maxPages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
        const pageNumber = document.createElement('button');
        pageNumber.className = `px-3 py-2 border border-gray-300 rounded-lg font-medium transition-colors ${
            i === currentPage 
                ? 'bg-primary text-white border-primary' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
        }`;
        pageNumber.textContent = i;
        pageNumber.onclick = () => goToPage(i);
        paginationNumbers.appendChild(pageNumber);
    }
    
    // Update navigation buttons
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
    
    prevBtn.className = `px-4 py-2 border border-gray-300 rounded-lg transition-colors ${
        currentPage === 1 
            ? 'opacity-50 cursor-not-allowed bg-gray-100' 
            : 'hover:bg-gray-100 bg-white'
    }`;
    
    nextBtn.className = `px-4 py-2 border border-gray-300 rounded-lg transition-colors ${
        currentPage === totalPages 
            ? 'opacity-50 cursor-not-allowed bg-gray-100' 
            : 'hover:bg-gray-100 bg-white'
    }`;
}

// Navigate to specific page
function goToPage(page) {
    currentPage = page;
    displayProducts();
    setupPagination();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Setup event listeners
function setupEventListeners() {
    // Category filters
    document.querySelectorAll('input[name="category"]').forEach(radio => {
        radio.addEventListener('change', function() {
            currentFilter = this.value;
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
    
    // Search functionality
    searchInput.addEventListener('input', debounce(searchProducts, 300));
    
    // Sort functionality
    document.querySelector('select').addEventListener('change', function() {
        sortProducts(this.value);
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

// Search products
function searchProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    
    if (searchTerm === '') {
        applyFilter();
        return;
    }
    
    filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    
    currentPage = 1;
    displayProducts();
    setupPagination();
}

// Sort products
function sortProducts(sortBy) {
    switch(sortBy) {
        case 'Price: Low to High':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'Price: High to Low':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'Rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'Newest':
            filteredProducts.sort((a, b) => b.id - a.id);
            break;
        default:
            // Featured - reset to original order
            applyFilter();
            return;
    }
    
    currentPage = 1;
    displayProducts();
    setupPagination();
}

// Toggle search bar
function toggleSearch() {
    const searchBar = document.getElementById('searchBar');
    searchBar.classList.toggle('hidden');
    if (!searchBar.classList.contains('hidden')) {
        searchInput.focus();
    }
}

// Set grid view
function setGridView(cols) {
    currentGridCols = cols;
    displayProducts();
    
    // Update button states
    document.querySelectorAll('button[onclick^="setGridView"]').forEach(btn => {
        btn.classList.remove('bg-gray-100');
    });
    event.target.classList.add('bg-gray-100');
}

// Clear filters
function clearFilters() {
    document.querySelector('input[value="all"]').checked = true;
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
    document.querySelector('select').selectedIndex = 0;
    searchInput.value = '';
    
    currentFilter = 'all';
    applyFilter();
}

// Add to cart functionality
function addToCart(productId, event) {
    event.stopPropagation();
    const product = products.find(p => p.id === productId);
    if (product) {
        // Update cart count
        updateCartCount();
        
        // Show notification
        showNotification(`${product.name} added to cart!`, 'success');
        
        // Add animation to button
        const button = event.target;
        button.innerHTML = '<i class="fas fa-check"></i> Added!';
        button.classList.add('bg-green-500');
        
        setTimeout(() => {
            button.innerHTML = 'Add to Cart';
            button.classList.remove('bg-green-500');
        }, 1500);
    }
}

// Toggle wishlist
function toggleWishlist(productId, event) {
    event.stopPropagation();
    const button = event.target.closest('button');
    const icon = button.querySelector('i');
    
    if (icon.classList.contains('fas')) {
        icon.classList.remove('fas');
        icon.classList.add('far');
        button.classList.remove('text-red-500');
        button.classList.add('text-gray-600');
        showNotification('Removed from wishlist', 'info');
    } else {
        icon.classList.remove('far');
        icon.classList.add('fas');
        button.classList.remove('text-gray-600');
        button.classList.add('text-red-500');
        showNotification('Added to wishlist!', 'success');
    }
}

// Update cart count
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    let currentCount = parseInt(cartCount.textContent) || 0;
    cartCount.textContent = currentCount + 1;
    
    // Add bounce animation
    cartCount.style.transform = 'scale(1.3)';
    setTimeout(() => {
        cartCount.style.transform = 'scale(1)';
    }, 150);
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-4 z-50 px-6 py-3 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full ${
        type === 'success' ? 'bg-green-500 text-white' : 
        type === 'error' ? 'bg-red-500 text-white' : 
        'bg-blue-500 text-white'
    }`;
    
    notification.innerHTML = `
        <div class="flex items-center space-x-2">
            <i class="fas ${
                type === 'success' ? 'fa-check-circle' : 
                type === 'error' ? 'fa-times-circle' : 
                'fa-info-circle'
            }"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Hide notification
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Debounce function for search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
