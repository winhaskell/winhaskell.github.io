// Main JavaScript for 绝摆哥炒饭
// Shopping Cart
let cart = [];

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Mobile menu toggle
    setupMobileMenu();
    
    // Load menu items
    loadMenuItems('all');
    
    // Setup menu category filters
    setupMenuFilters();
    
    // Setup reservation form
    setupReservationForm();
    
    // Setup cart functionality
    setupCartFunctionality();
    
    // Setup smooth scrolling
    setupSmoothScroll();
    
    // Setup scroll to top button
    setupScrollToTop();
    
    // Set minimum date for reservation
    setMinReservationDate();
    
    // Load cart from localStorage
    loadCartFromStorage();
}

// Mobile Menu
function setupMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
}

// Load Menu Items
function loadMenuItems(category) {
    const menuGrid = document.getElementById('menuGrid');
    const orderGrid = document.getElementById('orderGrid');
    
    if (!menuGrid && !orderGrid) return;
    
    let filteredItems = category === 'all' 
        ? menuData 
        : menuData.filter(item => item.category === category);
    
    const menuHTML = filteredItems.map(item => createMenuCard(item)).join('');
    
    if (menuGrid) {
        menuGrid.innerHTML = menuHTML;
    }
    
    if (orderGrid) {
        orderGrid.innerHTML = menuHTML;
    }
    
    // Add event listeners to all "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const itemId = parseInt(e.currentTarget.dataset.id);
            addToCart(itemId);
        });
    });
}

// Create Menu Card HTML
function createMenuCard(item) {
    const badgeHTML = item.badge ? `
        <span class="menu-card-badge badge-${item.badge}">
            ${item.badge === 'signature' ? '招牌' : item.badge === 'hot' ? '热卖' : '新品'}
        </span>
    ` : '';
    
    return `
        <div class="menu-card" data-category="${item.category}">
            <img src="${item.image}" alt="${item.name}" class="menu-card-image">
            <div class="menu-card-content">
                ${badgeHTML}
                <h3 class="menu-card-title">${item.name}</h3>
                <p class="menu-card-description">${item.description}</p>
                <div class="menu-card-footer">
                    <span class="menu-card-price">¥${item.price}</span>
                    <button class="add-to-cart-btn" data-id="${item.id}">
                        <i class="fas fa-plus"></i>
                        <span>加入我的点餐</span>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Menu Filters
function setupMenuFilters() {
    const filterButtons = document.querySelectorAll('.menu-category-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Load filtered items
            const category = btn.dataset.category;
            loadMenuItems(category);
        });
    });
}

// Add to Cart
function addToCart(itemId) {
    const item = menuData.find(i => i.id === itemId);
    if (!item) return;
    
    const existingItem = cart.find(i => i.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...item,
            quantity: 1
        });
    }
    
    updateCart();
    saveCartToStorage();
    showToast('success', `已添加 ${item.name} 到 我的点餐`);
}

// Update Cart Display
function updateCart() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const cartSummary = document.getElementById('cartSummary');
    const cartModalContent = document.getElementById('cartModalContent');
    const cartModalTotal = document.getElementById('cartModalTotal');
    
    // Calculate total items and price
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Update cart count badge
    if (cartCount) {
        if (totalItems > 0) {
            cartCount.textContent = totalItems;
            cartCount.classList.remove('hidden');
        } else {
            cartCount.classList.add('hidden');
        }
    }
    
    // Update cart items display
    const cartHTML = cart.length > 0 
        ? cart.map(item => createCartItemHTML(item)).join('') 
        : '<p class="text-gray-500 text-center py-4">我的点餐是空的</p>';
    
    if (cartItems) {
        cartItems.innerHTML = cartHTML;
    }
    
    if (cartModalContent) {
        cartModalContent.innerHTML = cartHTML;
    }
    
    // Update total price
    if (cartTotal) {
        cartTotal.textContent = totalPrice.toFixed(2);
    }
    
    if (cartModalTotal) {
        cartModalTotal.textContent = totalPrice.toFixed(2);
    }
    
    // Show/hide cart summary
    if (cartSummary) {
        if (cart.length > 0) {
            cartSummary.classList.remove('hidden');
        } else {
            cartSummary.classList.add('hidden');
        }
    }
    
    // Setup cart item controls
    setupCartItemControls();
}

// Create Cart Item HTML
function createCartItemHTML(item) {
    return `
        <div class="cart-item">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">¥${item.price}</div>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn decrease-btn" data-id="${item.id}">-</button>
                <span class="quantity-number">${item.quantity}</span>
                <button class="quantity-btn increase-btn" data-id="${item.id}">+</button>
            </div>
            <div class="cart-item-remove" data-id="${item.id}">
                <i class="fas fa-trash"></i>
            </div>
        </div>
    `;
}

// Setup Cart Item Controls
function setupCartItemControls() {
    // Increase quantity
    document.querySelectorAll('.increase-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const itemId = parseInt(e.currentTarget.dataset.id);
            updateCartItemQuantity(itemId, 1);
        });
    });
    
    // Decrease quantity
    document.querySelectorAll('.decrease-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const itemId = parseInt(e.currentTarget.dataset.id);
            updateCartItemQuantity(itemId, -1);
        });
    });
    
    // Remove item
    document.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const itemId = parseInt(e.currentTarget.dataset.id);
            removeFromCart(itemId);
        });
    });
}

// Update Cart Item Quantity
function updateCartItemQuantity(itemId, change) {
    const item = cart.find(i => i.id === itemId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(itemId);
    } else {
        updateCart();
        saveCartToStorage();
    }
}

// Remove from Cart
function removeFromCart(itemId) {
    cart = cart.filter(i => i.id !== itemId);
    updateCart();
    saveCartToStorage();
    showToast('info', '已从我的点餐移除');
}

// Setup Cart Functionality
function setupCartFunctionality() {
    // Cart button - open modal
    const cartBtn = document.getElementById('cartBtn');
    const cartModal = document.getElementById('cartModal');
    const closeCartModal = document.getElementById('closeCartModal');
    
    if (cartBtn && cartModal) {
        cartBtn.addEventListener('click', () => {
            cartModal.classList.remove('hidden');
            cartModal.classList.add('flex');
            updateCart();
        });
    }
    
    if (closeCartModal && cartModal) {
        closeCartModal.addEventListener('click', () => {
            cartModal.classList.add('hidden');
            cartModal.classList.remove('flex');
        });
    }
    
    // Click outside modal to close
    if (cartModal) {
        cartModal.addEventListener('click', (e) => {
            if (e.target === cartModal) {
                cartModal.classList.add('hidden');
                cartModal.classList.remove('flex');
            }
        });
    }
    
    // Clear cart
    const clearCartBtn = document.getElementById('clearCart');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', () => {
            if (confirm('确定要清空我的点餐吗？')) {
                cart = [];
                updateCart();
                saveCartToStorage();
                showToast('info', '我的点餐已清空');
            }
        });
    }
    
    // Checkout buttons
    const checkoutBtn = document.getElementById('checkoutBtn');
    const cartModalCheckout = document.getElementById('cartModalCheckout');
    
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', handleCheckout);
    }
    
    if (cartModalCheckout) {
        cartModalCheckout.addEventListener('click', handleCheckout);
    }
}

// Handle Checkout
async function handleCheckout() {
    if (cart.length === 0) {
        showToast('error', '我的点餐是空的');
        return;
    }
    
    try {
        // Prepare order data
        const orderData = {
            items: cart.map(item => ({
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity
            })),
            total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
            orderTime: new Date().toISOString(),
            status: 'pending'
        };
        
        // Save order to database (if table exists)
        // await saveOrder(orderData);
        
        // Clear cart
        cart = [];
        updateCart();
        saveCartToStorage();
        
        // Close cart modal
        const cartModal = document.getElementById('cartModal');
        if (cartModal) {
            cartModal.classList.add('hidden');
            cartModal.classList.remove('flex');
        }
        
        // Show success modal
        showSuccessModal();
        
    } catch (error) {
        console.error('Order submission error:', error);
        showToast('error', '订单提交失败，请重试');
    }
}

// Show Success Modal
function showSuccessModal() {
    const successModal = document.getElementById('successModal');
    const closeSuccessModal = document.getElementById('closeSuccessModal');
    
    if (successModal) {
        successModal.classList.remove('hidden');
        successModal.classList.add('flex');
    }
    
    if (closeSuccessModal) {
        closeSuccessModal.addEventListener('click', () => {
            successModal.classList.add('hidden');
            successModal.classList.remove('flex');
        });
    }
}

// Setup Reservation Form
function setupReservationForm() {
    const form = document.getElementById('reservationForm');
    
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const reservationData = {
                name: formData.get('name'),
                phone: formData.get('phone'),
                date: formData.get('date'),
                time: formData.get('time'),
                guests: formData.get('guests'),
                notes: formData.get('notes'),
                status: 'pending',
                createdAt: new Date().toISOString()
            };
            
            try {
                // Save reservation to database (if table exists)
                // await saveReservation(reservationData);
                
                showToast('success', '预订成功！我们会尽快与您联系确认');
                form.reset();
                
                // Scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' });
                
            } catch (error) {
                console.error('Reservation error:', error);
                showToast('error', '预订提交失败，请重试或致电我们');
            }
        });
    }
}

// Set Minimum Reservation Date
function setMinReservationDate() {
    const dateInput = document.querySelector('input[name="date"]');
    if (dateInput) {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const minDate = tomorrow.toISOString().split('T')[0];
        dateInput.setAttribute('min', minDate);
    }
}

// Show Toast Notification
function showToast(type, message) {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icon = type === 'success' ? '✓' : type === 'error' ? '✗' : 'ℹ';
    
    toast.innerHTML = `
        <span class="toast-icon">${icon}</span>
        <span class="toast-message">${message}</span>
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slide-in-right 0.3s ease-out reverse';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// Smooth Scrolling
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80; // Navigation height
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll to Top Button
function setupScrollToTop() {
    // Create scroll to top button
    const scrollBtn = document.createElement('div');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollBtn);
    
    // Show/hide on scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top on click
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// LocalStorage Functions
function saveCartToStorage() {
    localStorage.setItem('juebaige-cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('juebaige-cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
}

// Database Functions (to be implemented with Table API)
async function saveOrder(orderData) {
    try {
        const response = await fetch('tables/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderData)
        });
        
        if (!response.ok) {
            throw new Error('Failed to save order');
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error saving order:', error);
        throw error;
    }
}

async function saveReservation(reservationData) {
    try {
        const response = await fetch('tables/reservations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reservationData)
        });
        
        if (!response.ok) {
            throw new Error('Failed to save reservation');
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error saving reservation:', error);
        throw error;
    }
}
