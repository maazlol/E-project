/**
 * catalogue.js
 * Reads `catalogueData` from assets/data/catalogue-data.js and renders
 * the brand quick-access chips + per-brand product grids.
 *
 * Expected shape of catalogueData:
 * [
 *   {
 *     id: "dell",
 *     name: "Dell",
 *     logo: "assets/images/brands/dell.png",   // optional
 *     tagline: "Reliability at its core",        // optional
 *     products: [
 *       {
 *         name: "XPS 15",
 *         image: "assets/images/products/dell-xps15.jpg",
 *         category: "Laptop",
 *         price: "$1,299",
 *         originalPrice: "$1,499",   // optional - shows strikethrough
 *         specs: ["Intel i7", "16GB RAM", "512GB SSD"],  // optional tags
 *       },
 *       ...
 *     ]
 *   },
 *   ...
 * ]
 */

(function () {
    "use strict";

    /* ── Helpers ── */
    const qs  = (sel, ctx = document) => ctx.querySelector(sel);
    const qsa = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

    function slugify(str) {
        return str.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
    }

    /* ── Build brand chip HTML ── */
    function buildBrandChip(brand) {
        const id    = brand.id || slugify(brand.name);
        const count = (brand.products || []).length;

        const imgTag = brand.logo
            ? `<img src="${brand.logo}" alt="${brand.name} logo" loading="lazy">`
            : `<span class="brand-chip-icon-fallback"><i class="bi bi-cpu"></i></span>`;

        return `
            <div class="col-6 col-sm-4 col-md-3 col-lg-2">
                <a href="#brand-${id}" class="brand-chip" data-brand="${id}" aria-label="Jump to ${brand.name}">
                    ${imgTag}
                    <span>${brand.name}</span>
                    <span class="chip-count">${count}</span>
                </a>
            </div>`;
    }

    /* ── Build single product card HTML ── */
    function buildProductCard(product, delay) {
        const specs = (product.specs || [])
            .map(s => `<span class="spec-tag">${s}</span>`)
            .join("");

        const originalPrice = product.originalPrice
            ? `<span class="original-price">${product.originalPrice}</span>`
            : "";

        const imgTag = product.image
            ? `<img src="${product.image}" alt="${product.name}" loading="lazy">`
            : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#f1f5f9;color:#cbd5e1;font-size:2rem;"><i class="bi bi-image"></i></div>`;

        return `
            <div class="col-12 col-sm-6 col-lg-4">
                <div class="cat-product-card cat-fade-in" style="animation-delay:${delay}ms">
                    <div class="cat-product-img-wrap">
                        ${imgTag}
                        ${product.category ? `<span class="cat-product-badge">${product.category}</span>` : ""}
                        <button class="cat-product-wishlist" aria-label="Add to wishlist" title="Wishlist">
                            <i class="bi bi-heart"></i>
                        </button>
                    </div>
                    <div class="cat-product-body">
                        <p class="cat-product-name">${product.name}</p>
                        ${specs ? `<div class="cat-product-specs">${specs}</div>` : ""}
                        <div class="cat-product-footer">
                            <div class="cat-product-price">
                                ${originalPrice}
                                ${product.price || "Contact us"}
                            </div>
                            <button class="cat-add-btn" aria-label="Add ${product.name} to cart"
                                    data-product='${JSON.stringify({name: product.name, price: product.price, image: product.image || ""})}'>
                                <i class="bi bi-cart-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>`;
    }

    /* ── Build full brand section HTML ── */
    function buildBrandSection(brand) {
        const id       = brand.id || slugify(brand.name);
        const products = brand.products || [];
        const tagline  = brand.tagline || `${products.length} product${products.length !== 1 ? "s" : ""} available`;

        const logoTag = brand.logo
            ? `<img src="${brand.logo}" alt="${brand.name}">`
            : `<i class="bi bi-cpu" style="font-size:1.4rem;color:#94a3b8;"></i>`;

        const productCards = products.length
            ? products.map((p, i) => buildProductCard(p, i * 60)).join("")
            : `<div class="col-12">
                   <div class="catalogue-empty">
                       <i class="bi bi-box-seam"></i>
                       <p>No products listed for ${brand.name} yet.</p>
                   </div>
               </div>`;

        return `
            <section class="brand-section" id="brand-${id}">
                <div class="brand-section-header">
                    <div class="brand-logo-wrap">${logoTag}</div>
                    <div class="brand-section-meta">
                        <h2>${brand.name}</h2>
                        <p>${tagline}</p>
                    </div>
                    <span class="brand-product-count">${products.length} item${products.length !== 1 ? "s" : ""}</span>
                </div>
                <div class="row g-4">
                    ${productCards}
                </div>
            </section>`;
    }

    /* ── Build header stats ── */
    function buildStats(data) {
        const totalBrands   = data.length;
        const totalProducts = data.reduce((n, b) => n + (b.products || []).length, 0);
        return `
            <div class="catalogue-stats">
                <div class="stat-pill"><i class="bi bi-tags"></i><strong>${totalBrands}</strong> Brands</div>
                <div class="stat-pill"><i class="bi bi-box-seam"></i><strong>${totalProducts}</strong> Products</div>
                <div class="stat-pill"><i class="bi bi-patch-check"></i>Genuine & Warranted</div>
            </div>`;
    }

    /* ── Smooth-scroll chip highlight on section enter ── */
    function initChipHighlight() {
        const chips = qsa(".brand-chip");
        if (!chips.length || !window.IntersectionObserver) return;

        const sections = qsa(".brand-section");
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const id = entry.target.id.replace("brand-", "");
                chips.forEach(c => c.classList.toggle("active", c.dataset.brand === id));
            });
        }, { rootMargin: "-30% 0px -60% 0px" });

        sections.forEach(s => observer.observe(s));
    }

    /* ── Cart add button wiring ── */
    function initCartButtons() {
        document.addEventListener("click", e => {
            const btn = e.target.closest(".cat-add-btn");
            if (!btn) return;
            try {
                const product = JSON.parse(btn.dataset.product || "{}");
                if (window.Cart && window.Cart.addItem) {
                    window.Cart.addItem(product);
                } else {
                    console.warn("Cart.addItem not found — wire up cart.js");
                }
            } catch (err) {
                console.error("Cart error:", err);
            }
            /* Quick visual feedback */
            btn.innerHTML = '<i class="bi bi-check2"></i>';
            btn.style.background = "#10b981";
            setTimeout(() => {
                btn.innerHTML = '<i class="bi bi-cart-plus"></i>';
                btn.style.background = "";
            }, 1200);
        });
    }

    /* ── Back-to-top button ── */
    function initBackToTop() {
        const btn = document.createElement("button");
        btn.className = "cat-back-top";
        btn.innerHTML = '<i class="bi bi-arrow-up"></i>';
        btn.setAttribute("aria-label", "Back to top");
        btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
        document.body.appendChild(btn);

        window.addEventListener("scroll", () => {
            btn.classList.toggle("visible", window.scrollY > 400);
        }, { passive: true });
    }

    /* ── Main render ── */
    function render() {
        /* Expect catalogueData to be defined by catalogue-data.js */
        if (typeof catalogueData === "undefined" || !Array.isArray(catalogueData)) {
            console.error("catalogue.js: catalogueData is not defined. Make sure catalogue-data.js loads first.");
            return;
        }

        const data = catalogueData;

        /* Stats in header */
        const statsTarget = qs("#catalogue-stats");
        if (statsTarget) statsTarget.innerHTML = buildStats(data);

        /* Brand chips */
        const chipGrid = qs("#brand-grid");
        if (chipGrid) chipGrid.innerHTML = data.map(buildBrandChip).join("");

        /* Brand sections */
        const sectionsTarget = qs("#catalogue-sections");
        if (sectionsTarget) sectionsTarget.innerHTML = data.map(buildBrandSection).join("");

        /* Interactions */
        initChipHighlight();
        initCartButtons();
        initBackToTop();
    }

    /* Run after DOM + other scripts are ready */
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", render);
    } else {
        render();
    }
})();