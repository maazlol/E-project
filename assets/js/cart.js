// ═══════════════════════════════════════════
//  cart.js — Pc Center Shopping Cart System
//  Works across: index.html, products.html, catalogue.html
// ═══════════════════════════════════════════

const Cart = (() => {
    const STORAGE_KEY = 'pccenter_cart';

    // ── Storage helpers ──────────────────────
    function load() {
        let items = [];
        try {
            items = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        } catch {
            items = [];
        }

        // PRICE SYNC: Update item details from products-data.js if available
        if (typeof products !== 'undefined') {
            return items.map(cartItem => {
                const latest = products.find(p => String(p.id) === String(cartItem.id));
                if (latest) {
                    return { 
                        ...cartItem, 
                        price: latest.price, 
                        name: latest.name, 
                        image: latest.image,
                        onSale: latest.onSale || false,
                        originalPrice: latest.originalPrice || null
                    };
                }
                return cartItem;
            });
        }
        return items;
    }

    function save(items) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }

    // ── Cart operations ──────────────────────
    function addItem(product) {
        const items = load();
        const existing = items.find(i => String(i.id) === String(product.id));
        if (existing) {
            existing.qty += 1;
        } else {
            items.push({ ...product, qty: 1 });
        }
        save(items);
        updateUI();
        openDrawer();
    }

    function removeItem(id) {
        const filtered = load().filter(i => String(i.id) !== String(id));
        save(filtered);
        updateUI();
        if (filtered.length === 0) {
            setTimeout(closeDrawer, 1500); // Close after showing empty state
        }
    }

    function changeQty(id, delta) {
        const items = load();
        const item = items.find(i => String(i.id) === String(id));
        if (!item) return;
        item.qty = Math.max(1, item.qty + delta);
        save(items);
        updateUI();
    }

    function clearCart() {
        save([]);
        updateUI();
        setTimeout(closeDrawer, 800);
    }

    function getTotal() {
        return load().reduce((sum, i) => {
            const price = parseFloat(i.price.replace(/[$,]/g, '')) || 0;
            return sum + price * i.qty;
        }, 0);
    }

    function getTotalCount() {
        return load().reduce((sum, i) => sum + i.qty, 0);
    }

    // ── Badge update ─────────────────────────
    function updateBadge() {
        const badge = document.getElementById('cart-badge');
        if (!badge) return;
        const count = getTotalCount();
        const newText = count > 99 ? '99+' : count;
        
        // Optimization: Only update DOM if the value changed to avoid unnecessary triggers
        if (badge.textContent !== String(newText)) {
            badge.textContent = newText;
        }
        
        const newDisplay = count === 0 ? 'none' : 'flex';
        if (badge.style.display !== newDisplay) {
            badge.style.display = newDisplay;
        }
    }

    // ── Drawer HTML injection ────────────────
    function injectDrawer() {
        if (document.getElementById('cart-drawer')) return;

        document.body.insertAdjacentHTML('beforeend', `
            <div id="cart-overlay"></div>
            <div id="cart-drawer" role="dialog" aria-label="Shopping Cart">
                <div class="cart-header">
                    <h5><i class="bi bi-bag-check"></i> Shopping Bag
                        <span class="cart-count-badge" id="drawer-count">0</span>
                    </h5>
                    <button class="cart-close-btn" id="cart-close-btn">
                        <i class="bi bi-x-lg"></i>
                    </button>
                </div>
                <div class="cart-items-list" id="cart-items-list"></div>
                <div class="cart-footer" id="cart-footer">
                    <div class="cart-total-row">
                        <span class="cart-total-label">Subtotal</span>
                        <span class="cart-total-amount" id="cart-total">$0.00</span>
                    </div>
                    <button class="btn btn-cyan w-100 py-3 mb-2 fw-bold" onclick="Cart.openCheckout()">
                        Proceed to Checkout <i class="bi bi-arrow-right ms-2"></i>
                    </button>
                    <button class="btn btn-link text-muted w-100 btn-sm text-decoration-none" onclick="Cart.clearCart()">
                        Clear All
                    </button>
                </div>
            </div>
        `);

        document.getElementById('cart-close-btn').addEventListener('click', closeDrawer);
        document.getElementById('cart-overlay').addEventListener('click', closeDrawer);
    }

    // ── Render drawer items ──────────────────
    function renderDrawerItems() {
        const list = document.getElementById('cart-items-list');
        const footer = document.getElementById('cart-footer');
        const drawerCount = document.getElementById('drawer-count');
        const totalEl = document.getElementById('cart-total');
        if (!list) return;

        const items = load();
        const count = getTotalCount();

        if (drawerCount) drawerCount.textContent = count;
        if (totalEl) totalEl.textContent = '$' + getTotal().toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        if (footer) footer.style.display = items.length === 0 ? 'none' : 'block';

        if (items.length === 0) {
            list.innerHTML = `
                <div class="cart-empty py-5 text-center">
                    <i class="bi bi-bag-x fs-1 text-muted"></i>
                    <p class="mt-3 text-muted">Your bag is empty.</p>
                    <button class="btn btn-sm btn-outline-dark mt-2" onclick="Cart.closeDrawer()">Continue Shopping</button>
                </div>`;
            return;
        }

        list.innerHTML = items.map(item => `
            <div class="cart-item py-3 d-flex gap-3 border-bottom">
                <div class="position-relative">
                    ${item.onSale ? '<span class="sale-badge" style="font-size:0.5rem; padding: 2px 5px; top: -5px; left: -5px;">Sale</span>' : ''}
                    <img src="${item.image}" class="rounded" width="60" height="60" style="object-fit:cover" onerror="this.src='https://placehold.co/60x60?text=Product'">
                </div>
                <div class="flex-grow-1 min-width-0">
                    <div class="fw-bold text-truncate small" title="${item.name}">${item.name}</div>
                    <div class="d-flex align-items-center gap-2">
                        ${item.onSale ? `<span class="price-original" style="font-size:0.7rem;">${item.originalPrice}</span>` : ''}
                        <div class="text-primary fw-bold small ${item.onSale ? 'on-sale' : ''}">${item.price}</div>
                    </div>
                    <div class="d-flex align-items-center gap-2 mt-2">
                        <button class="qty-btn" onclick="Cart.changeQty('${item.id}', -1)">-</button>
                        <span class="qty-display small fw-bold">${item.qty}</span>
                        <button class="qty-btn" onclick="Cart.changeQty('${item.id}', 1)">+</button>
                    </div>
                </div>
                <button class="btn btn-link text-muted p-0 h-fit" onclick="Cart.removeItem('${item.id}')">
                    <i class="bi bi-trash3"></i>
                </button>
            </div>
        `).join('');
    }

    function openDrawer() {
        renderDrawerItems();
        const drawer = document.getElementById('cart-drawer');
        const overlay = document.getElementById('cart-overlay');
        if (drawer) drawer.classList.add('open');
        if (overlay) overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
        const drawer = document.getElementById('cart-drawer');
        const overlay = document.getElementById('cart-overlay');
        if (drawer) drawer.classList.remove('open');
        if (overlay) overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    function updateUI() {
        updateBadge();
        renderDrawerItems();
        // Dispatch custom event for pages that need to sync (like checkout)
        document.dispatchEvent(new CustomEvent('cartUpdated', { detail: { items: load() } }));
    }

    function wireNavbarButton() {
        // Use event delegation on document to handle dynamic navbar injection
        document.addEventListener('click', (e) => {
            if (e.target.closest('#navbar-cart-btn')) {
                openDrawer();
            }
        });
    }

    function wireAddToCartButtons() {
        // Use event delegation for global "Add to Cart" functionality
        // This ensures dynamically loaded products (after filters/refreshes) still work
        if (window.isCartBound) return;
        window.isCartBound = true;

        document.addEventListener('click', (e) => {
            const btn = e.target.closest('[data-add-to-cart]');
            if (btn) {
                e.preventDefault();
                const product = {
                    id: btn.dataset.id,
                    name: btn.dataset.name,
                    price: btn.dataset.price,
                    image: btn.dataset.image
                };
                addItem(product);
            }
        });
    }

    function openCheckout() {
        if (load().length === 0) return;
        window.location.href = 'checkout.html';
    }

    function init() {
        injectDrawer();
        wireNavbarButton();
        wireAddToCartButtons();
        updateUI();

        // Listen for components (navbar) being loaded to refresh UI
        document.addEventListener('pccenterComponentsLoaded', () => {
            updateUI();
            wireAddToCartButtons();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Explicitly attach to window for global access across all scripts
    window.Cart = { load, getTotal, addItem, removeItem, changeQty, clearCart, openDrawer, closeDrawer, openCheckout, wireAddToCartButtons, updateUI };
    
    return window.Cart;
})();
