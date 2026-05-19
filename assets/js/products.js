document.addEventListener('DOMContentLoaded', function() {
    const productContainer = document.getElementById('product-container');
    const productCountEl = document.getElementById('product-count');
    const categoryFilters = document.getElementById('category-filters');
    const searchInput = document.getElementById('product-search');
    const searchBtn = document.getElementById('search-btn');
    const priceRange = document.getElementById('priceRange');
    const sortSelect = document.getElementById('sort-select');
    const applyFiltersBtn = document.getElementById('apply-filters-btn');

    const priceValue = document.getElementById('price-value');

    let currentCategory = 'All';

    const activeFiltersContainer = document.getElementById('active-filters-container');

    function renderActiveFilters() {
        if (!activeFiltersContainer) return;
        activeFiltersContainer.innerHTML = '';
        
        const searchTerm = searchInput.value.trim();
        const filters = [];

        // Search Filter
        if (searchTerm) {
            filters.push({
                label: `Search: "${searchTerm}"`,
                clear: () => {
                    searchInput.value = '';
                    renderProducts();
                }
            });
        }

        // Category Filter
        if (currentCategory !== 'All') {
            filters.push({
                label: `Category: ${currentCategory}`,
                clear: () => {
                    currentCategory = 'All';
                    const buttons = categoryFilters.querySelectorAll('.category-filter');
                    buttons.forEach(btn => {
                        if (btn.getAttribute('data-category') === 'All') btn.classList.add('active');
                        else btn.classList.remove('active');
                    });
                    renderProducts();
                }
            });
        }

        if (filters.length > 0) {
            filters.forEach(f => {
                const chip = document.createElement('div');
                chip.className = 'filter-chip';
                chip.innerHTML = `${f.label} <i class="bi bi-x-lg ms-2"></i>`;
                chip.onclick = f.clear;
                activeFiltersContainer.appendChild(chip);
            });

            const clearAll = document.createElement('button');
            clearAll.className = 'btn btn-link btn-sm text-danger text-decoration-none fw-bold p-0 ms-2';
            clearAll.textContent = 'Clear All';
            clearAll.onclick = () => {
                searchInput.value = '';
                currentCategory = 'All';
                const buttons = categoryFilters.querySelectorAll('.category-filter');
                buttons.forEach(btn => {
                    if (btn.getAttribute('data-category') === 'All') btn.classList.add('active');
                    else btn.classList.remove('active');
                });
                renderProducts();
            };
            activeFiltersContainer.appendChild(clearAll);
        }
    }

    function renderProducts() {
        if (!productContainer) return;
        
        renderActiveFilters();
        
        productContainer.innerHTML = '';
        const searchTerm = searchInput.value.toLowerCase().trim();
        const maxPrice = parseInt(priceRange.value);
        
        if (priceValue) priceValue.textContent = `$${maxPrice.toLocaleString()}`;

        let filteredProducts = products.filter(p => {
            const matchesCategory = currentCategory === 'All' || p.category === currentCategory;
            const matchesSearch = p.name.toLowerCase().includes(searchTerm) || p.description.toLowerCase().includes(searchTerm);
            const price = parseFloat(p.price.replace(/[$,]/g, ''));
            const matchesPrice = price <= maxPrice;
            
            return matchesCategory && matchesSearch && matchesPrice;
        });

        // Sorting
        const sortBy = sortSelect.value;
        if (sortBy === 'low') {
            filteredProducts.sort((a, b) => parseFloat(a.price.replace(/[$,]/g, '')) - parseFloat(b.price.replace(/[$,]/g, '')));
        } else if (sortBy === 'high') {
            filteredProducts.sort((a, b) => parseFloat(b.price.replace(/[$,]/g, '')) - parseFloat(a.price.replace(/[$,]/g, '')));
        }

        productCountEl.textContent = `Showing ${filteredProducts.length} products`;

        if (filteredProducts.length === 0) {
            productContainer.innerHTML = '<div class="col-12 text-center py-5"><i class="bi bi-search fs-1 text-muted d-block mb-3"></i><p class="text-muted">No products found matching your filters.</p></div>';
            return;
        }

        let productsHtml = '';
        filteredProducts.forEach(product => {
            productsHtml += `
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="product-card h-100 shadow-sm border-0">
                        <div class="position-relative overflow-hidden">
                            ${product.onSale ? '<span class="sale-badge">Sale</span>' : ''}
                            <img src="${product.image}" class="card-img-top" alt="${product.name}">
                            <span class="badge bg-dark position-absolute top-0 end-0 m-3">${product.category}</span>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title fs-6 fw-bold">${product.name}</h5>
                            <p class="small text-muted mb-3 line-clamp-2">${product.description}</p>
                            <div class="d-flex justify-content-between align-items-center mt-auto">
                                <div class="d-flex flex-column">
                                    ${product.onSale ? `<span class="price-original">${product.originalPrice}</span>` : ''}
                                    <span class="product-price ${product.onSale ? 'on-sale' : ''}">${product.price}</span>
                                </div>
                                <button class="btn btn-sm btn-dark"
                                    data-add-to-cart
                                    data-id="${product.id}"
                                    data-name="${product.name}"
                                    data-price="${product.price}"
                                    data-image="${product.image}">
                                    <i class="bi bi-cart-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        productContainer.innerHTML = productsHtml;

        // Re-wire cart buttons for newly rendered elements
        if (window.Cart && window.Cart.wireAddToCartButtons) {
            window.Cart.wireAddToCartButtons();
        }
    }

    // Event Listeners
    if (categoryFilters) {
        categoryFilters.addEventListener('click', (e) => {
            if (e.target.classList.contains('category-filter')) {
                const buttons = categoryFilters.querySelectorAll('.category-filter');
                buttons.forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
                currentCategory = e.target.getAttribute('data-category');
                renderProducts();
            }
        });
    }

    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', renderProducts);
    }

    if (searchBtn) {
        searchBtn.addEventListener('click', renderProducts);
    }

    if (searchInput) {
        searchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') renderProducts();
        });
    }

    if (sortSelect) {
        sortSelect.addEventListener('change', renderProducts);
    }

    if (priceRange) {
        priceRange.addEventListener('input', renderProducts);
    }

    // Initial render logic with URL parameter handling
    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get('cat');
    const searchParam = urlParams.get('search');
    
    if (catParam) {
        // Find matching category
        const buttons = categoryFilters.querySelectorAll('.category-filter');
        buttons.forEach(btn => {
            if (btn.getAttribute('data-category').toLowerCase() === catParam.toLowerCase()) {
                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentCategory = btn.getAttribute('data-category');
            }
        });
    }

    if (searchParam) {
        searchInput.value = searchParam;
    }

    renderProducts();
});
