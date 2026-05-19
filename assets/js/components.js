function renderNavbar() {
    console.log("Attempting to render navbar...");
    const navbar = document.getElementById('navbar');
    if (!navbar) {
        console.error("Navbar element NOT found in DOM");
        return;
    }
    
    navbar.innerHTML = `
    <nav class="navbar navbar-expand-lg sticky-top">
        <div class="container">
            <span class="navbar-brand">Pc Center</span>
            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="products.html">Shop</a></li>
                    <li class="nav-item"><a class="nav-link" href="pc-builder.html">PC Builder</a></li>
                    <li class="nav-item"><a class="nav-link" href="categories.html">Categories</a></li>
                    <li class="nav-item"><a class="nav-link" href="catalogue.html">Catalogue</a></li>
                    <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="faq.html">FAQ</a></li>
                </ul>
                <div class="d-flex align-items-center gap-3">
                    <form class="d-none d-lg-block" role="search">
                        <div class="input-group search-wrapper">
                            <input class="form-control" type="search" placeholder="Search products..." aria-label="Search">
                            <button class="btn" type="submit"><i class="bi bi-search"></i></button>
                        </div>
                    </form>
                    <button id="navbar-cart-btn" class="nav-link position-relative p-0 border-0 bg-transparent">
                        <i class="bi bi-bag fs-4"></i>
                        <span id="cart-badge" class="badge rounded-pill bg-primary position-absolute top-0 start-100 translate-middle" style="display:none; font-size: 0.6rem;">0</span>
                    </button>
                    <a href="contact.html" class="btn btn-cyan d-none d-md-block">Contact</a>
                </div>
            </div>
        </div>
    </nav>
    `;
    console.log("Navbar rendered successfully");
}

function renderFooter() {
    console.log("Attempting to render footer...");
    const footer = document.getElementById('footer');
    if (!footer) {
        console.error("Footer element NOT found in DOM");
        return;
    }

    footer.innerHTML = `
    <footer class="footer pt-5 pb-4 mt-5">
        <div class="container">
            <div class="row g-4 mb-5">
                <div class="col-lg-4">
                    <h5 class="fw-bold mb-4">Pc Center</h5>
                    <p class="text-muted pe-lg-5">Your premier destination for high-end computer hardware and professional electronics. Redefining the tech shopping experience.</p>
                </div>
                <div class="col-6 col-lg-2">
                    <h6 class="fw-bold mb-4">Shop</h6>
                    <a href="products.html" class="footer-link d-block mb-2">Laptops</a>
                    <a href="products.html" class="footer-link d-block mb-2">GPUs</a>
                    <a href="products.html" class="footer-link d-block mb-2">Processors</a>
                    <a href="products.html?cat=Printers" class="footer-link d-block mb-2">Printers & Scanners</a>
                    <a href="products.html?cat=Modems" class="footer-link d-block mb-2">Networking</a>
                </div>
                <div class="col-6 col-lg-2">
                    <h6 class="fw-bold mb-4">Support</h6>
                    <a href="about.html" class="footer-link d-block mb-2">About Us</a>
                    <a href="contact.html" class="footer-link d-block mb-2">Contact</a>
                    <a href="faq.html" class="footer-link d-block mb-2">FAQs</a>
                </div>
                <div class="col-lg-4">
                    <h6 class="fw-bold mb-4">Stay Updated</h6>
                    <form id="newsletter-form" class="needs-validation" novalidate>
                        <div class="input-group mb-3">
                            <input type="email" class="form-control border-light" placeholder="Email address" required>
                            <button class="btn btn-cyan px-4" type="submit">Join</button>
                            <div class="invalid-feedback">Please provide a valid email.</div>
                        </div>
                    </form>
                </div>
            </div>
            <hr class="opacity-10">
            <p class="small text-muted text-center mb-0">&copy; 2026 Pc Center. All rights reserved.</p>
        </div>
    </footer>
    `;
    console.log("Footer rendered successfully");
}

// Global initialization
window.initComponents = function() {
    // Ensure products data is available for global search
    if (typeof products === 'undefined') {
        const dataScript = document.createElement('script');
        dataScript.src = 'assets/data/products-data.js';
        document.head.appendChild(dataScript);
    }

    renderNavbar();
    renderFooter();
    // Signal that components are ready
    document.dispatchEvent(new CustomEvent('pccenterComponentsLoaded'));
};

// Execute
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.initComponents);
} else {
    window.initComponents();
}

// Failsafe
setTimeout(window.initComponents, 100);
