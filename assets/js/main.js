/**
 * Pc Center - Main Interactivity Script
 */

function initSearchSystem() {
    console.log("Initializing Global Search...");
    const searchForms = document.querySelectorAll('form[role="search"]');
    
    if (searchForms.length === 0) {
        console.warn("Search: No search forms found in DOM yet.");
        return;
    }

    searchForms.forEach(form => {
        const input = form.querySelector('input[type="search"]');
        const container = form.querySelector('.input-group') || form;
        
        if (!input) return;

        // Ensure container is relative for suggestion positioning
        container.style.position = 'relative';
        
        // Remove existing list if re-initializing
        const oldList = container.querySelector('#search-suggestions');
        if (oldList) oldList.remove();

        // Inject suggestion list
        const suggestionsList = document.createElement('div');
        suggestionsList.id = 'search-suggestions';
        container.appendChild(suggestionsList);

        // Input handler
        input.addEventListener('input', (e) => {
            const query = e.target.value.trim().toLowerCase();
            
            if (query.length < 2) {
                suggestionsList.classList.remove('active');
                return;
            }

            // Ensure products array is available
            if (typeof products !== 'undefined') {
                const matches = products.filter(p => 
                    p.name.toLowerCase().includes(query) || 
                    p.category.toLowerCase().includes(query) ||
                    p.brand.toLowerCase().includes(query)
                ).slice(0, 8);

                if (matches.length > 0) {
                    renderSuggestions(matches, suggestionsList);
                    suggestionsList.classList.add('active');
                } else {
                    suggestionsList.classList.remove('active');
                }
            }
        });

        // Form submission
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const query = input.value.trim();
            if (query) {
                window.location.href = `products.html?search=${encodeURIComponent(query)}`;
            }
        });
    });

    // Close suggestions when clicking outside
    document.addEventListener('click', (e) => {
        const lists = document.querySelectorAll('#search-suggestions');
        lists.forEach(list => {
            if (!list.parentElement.contains(e.target)) {
                list.classList.remove('active');
            }
        });
    });
}

function renderSuggestions(matches, list) {
    list.innerHTML = matches.map(product => `
        <a href="products.html?search=${encodeURIComponent(product.name)}" class="suggestion-item">
            <div class="suggestion-img-wrap">
                <img src="${product.image}" class="suggestion-img" alt="${product.name}" onerror="this.src='https://placehold.co/40x40?text=P'">
            </div>
            <div class="suggestion-info">
                <p class="suggestion-name">${product.name}</p>
                <p class="suggestion-category">${product.brand} | ${product.category}</p>
            </div>
        </a>
    `).join('');
}

function initNewsletterValidation() {
    const form = document.getElementById('newsletter-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!form.checkValidity()) {
            e.stopPropagation();
            form.classList.add('was-validated');
            return;
        }
        
        alert('Thank you for subscribing to our newsletter!');
        form.reset();
        form.classList.remove('was-validated');
    });
}

// Initialization Logic
document.addEventListener('DOMContentLoaded', () => {
    // If navbar is already there (unlikely with components.js), init immediately
    if (document.getElementById('navbar')?.innerHTML.trim() !== "") {
        initSearchSystem();
    }

    // Always listen for components loaded event from components.js
    document.addEventListener('pccenterComponentsLoaded', () => {
        initSearchSystem();
        initNewsletterValidation();
    });

    // ─── NAV ACTIVE STATES ───────────────────────────────────────────────
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });

    // ─── PRODUCT GALLERY ─────────────────────────────────────────────────
    const thumbnails = document.querySelectorAll('.opacity-75');
    const mainImg = document.querySelector('.col-lg-6 .card img');
    
    if (thumbnails.length > 0 && mainImg) {
        thumbnails.forEach(thumb => {
            thumb.addEventListener('mouseover', () => {
                mainImg.src = thumb.src;
                thumbnails.forEach(t => t.style.opacity = '0.5');
                thumb.style.opacity = '1';
            });
        });
    }
});
