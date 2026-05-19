const products = [
    // ═══════════════════════════════════════════
    //  PROCESSORS (10 Items)
    // ═══════════════════════════════════════════
    {
        id: 101,
        name: "AMD Ryzen 7 9800X3D",
        brand: "AMD",
        category: "Processors",
        price: "$479.00",
        originalPrice: "$529.00",
        onSale: true,
        image: "assets/Pic/p1.png",
        availability: "In Stock",
        description: "The fastest gaming CPU in the world with 2nd Gen 3D V-Cache.",
        features: ["8 Cores / 16 Threads", "AM5 Socket", "96MB L3 Cache"]
    },
    {
        id: 102,
        name: "Intel Core i9-14900K",
        brand: "Intel",
        category: "Processors",
        price: "$549.00",
        image: "assets/Pic/p2.png",
        availability: "In Stock",
        description: "24 cores, up to 6.0 GHz. The ultimate gaming and productivity processor.",
        features: ["24 Cores / 32 Threads", "LGA 1700 Socket", "6.0 GHz Turbo"]
    },
    {
        id: 103,
        name: "AMD Ryzen 9 7950X3D",
        brand: "AMD",
        category: "Processors",
        price: "$599.00",
        image: "assets/Pic/p3.jpg",
        availability: "In Stock",
        description: "16 cores with 3D V-Cache technology for extreme gaming and work.",
        features: ["16 Cores / 32 Threads", "AM5 Socket", "144MB Total Cache"]
    },
    {
        id: 104,
        name: "Intel Core i7-14700K",
        brand: "Intel",
        category: "Processors",
        price: "$399.00",
        image: "assets/Pic/p4.png",
        availability: "In Stock",
        description: "High-performance processor for gaming and content creation.",
        features: ["20 Cores / 28 Threads", "LGA 1700", "5.6 GHz Turbo"]
    },
    {
        id: 105,
        name: "AMD Ryzen 5 7600X",
        brand: "AMD",
        category: "Processors",
        price: "$229.00",
        image: "assets/Pic/p5.png",
        availability: "In Stock",
        description: "Best value entry point for the modern AM5 platform.",
        features: ["6 Cores / 12 Threads", "5.3 GHz Boost", "DDR5 Support"]
    },
    {
        id: 106,
        name: "Intel Core i5-13600K",
        brand: "Intel",
        category: "Processors",
        price: "$279.00",
        image: "assets/Pic/p6.png",
        availability: "In Stock",
        description: "Mid-range champion with incredible gaming performance.",
        features: ["14 Cores / 20 Threads", "LGA 1700", "PCIe 5.0 Ready"]
    },
    {
        id: 107,
        name: "AMD Ryzen 7 5700X3D",
        brand: "AMD",
        category: "Processors",
        price: "$199.00",
        image: "assets/Pic/p7.jpg",
        availability: "In Stock",
        description: "Best gaming upgrade for the legendary AM4 platform.",
        features: ["8 Cores / 16 Threads", "AM4 Socket", "96MB L3 Cache"]
    },
    {
        id: 108,
        name: "Intel Core i5-12400F",
        brand: "Intel",
        category: "Processors",
        price: "$120.00",
        image: "assets/Pic/p8.avif",
        availability: "In Stock",
        description: "The go-to choice for budget-conscious gaming builds.",
        features: ["6 Cores / 12 Threads", "Budget King", "LGA 1700"]
    },
    {
        id: 109,
        name: "AMD Ryzen 5 5600",
        brand: "AMD",
        category: "Processors",
        price: "$115.00",
        image: "assets/Pic/p9.png",
        availability: "In Stock",
        description: "Proven performance for affordable 1080p gaming setups.",
        features: ["6 Cores / 12 Threads", "Low Power", "AM4 Socket"]
    },
    {
        id: 110,
        name: "Intel Core i7-12700KF",
        brand: "Intel",
        category: "Processors",
        price: "$210.00",
        image: "assets/Pic/p10.png",
        availability: "In Stock",
        description: "Incredible value for a 12-core high-performance CPU.",
        features: ["12 Cores / 20 Threads", "Unlocked", "LGA 1700"]
    },

    // ═══════════════════════════════════════════
    //  GPUS (10 Items)
    // ═══════════════════════════════════════════
    {
        id: 501,
        name: "NVIDIA GeForce RTX 4090",
        brand: "NVIDIA",
        category: "GPUs",
        price: "$1,799.00",
        originalPrice: "$1,999.00",
        onSale: true,
        image: "assets/Pic/NVIDIAGeForceRTX4090.png",
        availability: "In Stock",
        description: "The absolute performance leader for 4K gaming and AI.",
        features: ["24GB GDDR6X", "DLSS 3.5", "Ray Tracing"]
    },
    {
        id: 502,
        name: "NVIDIA GeForce RTX 4080 Super",
        brand: "NVIDIA",
        category: "GPUs",
        price: "$999.00",
        image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500&auto=format&fit=crop&q=60",
        availability: "In Stock",
        description: "High-end 4K gaming with amazing power efficiency.",
        features: ["16GB GDDR6X", "80 Shader TFLOPS", "AV1 Encoding"]
    },
    {
        id: 503,
        name: "AMD Radeon RX 7900 XTX",
        brand: "AMD",
        category: "GPUs",
        price: "$929.00",
        image: "https://media.istockphoto.com/id/1470481356/photo/a-close-up-of-a-modern-gpu-graphic-card-on-dark-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=xpRiZ_B_zeMlqQRw46Rj6DrNShAmaBaKQD1GU9PdpgQ=",
        availability: "In Stock",
        description: "AMD's flagship GPU with massive 24GB VRAM for 4K.",
        features: ["24GB GDDR6", "DisplayPort 2.1", "FSR 3.0"]
    },
    {
        id: 504,
        name: "NVIDIA GeForce RTX 4070 Ti Super",
        brand: "NVIDIA",
        category: "GPUs",
        price: "$799.00",
        image: "assets/Pic/NVIDIAGeForceRTX4070TiSuper.png",
        availability: "In Stock",
        description: "The perfect card for high-refresh 1440p and entry 4K.",
        features: ["16GB GDDR6X", "AD103 Core", "Quiet Cooling"]
    },
    {
        id: 505,
        name: "AMD Radeon RX 7900 XT",
        brand: "AMD",
        category: "GPUs",
        price: "$729.00",
        image: "assets/Pic/NVIDIAGeForceRTX4090.png",
        availability: "In Stock",
        description: "Excellent high-end performance for enthusiasts.",
        features: ["20GB GDDR6", "320-bit Bus", "RDNA 3 Architecture"]
    },
    {
        id: 506,
        name: "NVIDIA GeForce RTX 4070 Super",
        brand: "NVIDIA",
        category: "GPUs",
        price: "$599.00",
        image: "https://images.unsplash.com/photo-1757356747708-f11f10dbda7e?w=500&auto=format&fit=crop&q=60",
        availability: "In Stock",
        description: "The best overall GPU for 1440p gaming in 2024.",
        features: ["12GB GDDR6X", "Great Efficiency", "DLSS 3.0"]
    },
    {
        id: 507,
        name: "AMD Radeon RX 7900 GRE",
        brand: "AMD",
        category: "GPUs",
        price: "$549.00",
        image: "assets/Pic/AMDRadeonRX7900GRE.png",
        availability: "In Stock",
        description: "Incredible value for 1440p ultra gaming settings.",
        features: ["16GB GDDR6", "Compact Design", "Excellent Value"]
    },
    {
        id: 508,
        name: "AMD Radeon RX 7800 XT",
        brand: "AMD",
        category: "GPUs",
        price: "$499.00",
        image: "assets/Pic/AMDRadeonRX7800XT.jpg",
        availability: "In Stock",
        description: "Dominate 1440p gaming with AMD's mid-range power.",
        features: ["16GB GDDR6", "FSR 3 Ready", "Low Noise"]
    },
    {
        id: 509,
        name: "NVIDIA GeForce RTX 4060 Ti",
        brand: "NVIDIA",
        category: "GPUs",
        price: "$389.00", 
        image: "assets/Pic/NVIDIAGeForceRTX4060Ti.jpg",
        availability: "In Stock",
        description: "Great for 1080p ultra and 1440p with Frame Gen.",
        features: ["8GB GDDR6", "Ultra-Low Power", "Ray Tracing"]
    },
    {
        id: 510,
        name: "AMD Radeon RX 7600",
        brand: "AMD",
        category: "GPUs",
        price: "$269.00",
        image: "assets/Pic/gpus10.jpg",
        availability: "In Stock",
        description: "Solid 1080p performance for budget gaming setups.",
        features: ["8GB GDDR6", "Small Form Factor", "RDNA 3"]
    },

    // ═══════════════════════════════════════════
    //  LAPTOPS (10 Items)
    // ═══════════════════════════════════════════
    {
        id: 401,
        name: "Lenovo Legion Pro 7i (Gen 9)",
        brand: "Lenovo",
        category: "Laptops",
        price: "$2,499.00",
        image: "assets/Pic/LenovoLegionPro7i(Gen 9).webp",
        availability: "In Stock",
        description: "Top-tier gaming laptop with 14th Gen Intel and RTX 4090.",
        features: ["RTX 4090", "240Hz QHD+", "32GB DDR5"]
    },
    {
        id: 402,
        name: "ASUS ROG Zephyrus G14 (2024)",
        brand: "ASUS",
        category: "Laptops",
        price: "$1,799.00",
        image: "assets/Pic/ASUSROGZephyrusG14(2024).jpg",
        availability: "In Stock",
        description: "Ultra-portable 14-inch OLED gaming powerhouse.",
        features: ["3K OLED 120Hz", "RTX 4070", "Lightweight"]
    },
    {
        id: 403,
        name: "ASUS ROG Strix Scar 18",
        brand: "ASUS",
        category: "Laptops",
        price: "$3,699.00",
        image: "assets/Pic/ASUSROGStrixScar18.jpg",
        availability: "In Stock",
        description: "Massive 18-inch Mini-LED display for desktop-level gaming.",
        features: ["Core i9-14900HX", "RTX 4090", "Mini-LED"]
    },
    {
        id: 404,
        name: "Lenovo Legion Pro 5i (Gen 9)",
        brand: "Lenovo",
        category: "Laptops",
        price: "$1,499.00",
        image: "assets/Pic/lap4.png",
        availability: "In Stock",
        description: "The balanced choice for mid-to-high end gaming performance.",
        features: ["RTX 4070", "165Hz QHD+", "Premium Build"]
    },
    {
        id: 405,
        name: "MacBook Pro 16 (M4 Max)",
        brand: "Apple",
        category: "Laptops",
        price: "$3,499.00",
        image: "assets/Pic/lap5.jpg",
        availability: "In Stock",
        description: "Unmatched performance and battery life for creators.",
        features: ["M4 Max Chip", "120Hz XDR", "48GB RAM"]
    },
    {
        id: 406,
        name: "ASUS ProArt P16 (2024)",
        brand: "ASUS",
        category: "Laptops",
        price: "$2,100.00",
        image: "assets/Pic/lap6.jpg",
        availability: "In Stock",
        description: "Sophisticated design with AI-powered creative features.",
        features: ["Ryzen AI 9 HX", "RTX 4070", "4K OLED Touch"]
    },
    {
        id: 407,
        name: "Razer Blade 16 (2024)",
        brand: "Razer",
        category: "Laptops",
        price: "$3,299.00",
        image: "assets/Pic/lap7.webp",
        availability: "In Stock",
        description: "The 'iPhone' of gaming laptops. Sleek, fast, and premium.",
        features: ["QHD+ 240Hz OLED", "RTX 4090", "Chroma RGB"]
    },
    {
        id: 408,
        name: "Lenovo Yoga Pro 9i",
        brand: "Lenovo",
        category: "Laptops",
        price: "$1,899.00",
        image: "assets/Pic/lap8.webp",
        availability: "In Stock",
        description: "Premium versatile laptop with a stunning Mini-LED screen.",
        features: ["Core i9-13905H", "RTX 4070", "3.2K Mini-LED"]
    },
    {
        id: 409,
        name: "Lenovo ThinkPad P1 Gen 7",
        brand: "Lenovo",
        category: "Laptops",
        price: "$2,899.00",
        image: "assets/Pic/lap9.jpg",
        availability: "In Stock",
        description: "Professional workstation for engineers and architects.",
        features: ["RTX 3000 Ada", "Core Ultra 9", "MIL-SPEC Tough"]
    },
    {
        id: 410,
        name: "Dell Precision 5690",
        brand: "Dell",
        category: "Laptops",
        price: "$3,200.00",
        image: "assets/Pic/lap10.jpg",
        availability: "In Stock",
        description: "High-end mobile workstation with ISV certification.",
        features: ["RTX 5000 Ada", "4K OLED", "Professional Support"]
    },

    // ═══════════════════════════════════════════
    //  MONITORS (10 Items)
    // ═══════════════════════════════════════════
    {
        id: 601,
        name: "Asus ROG Swift PG32UCDM",
        brand: "ASUS",
        category: "Monitors",
        price: "$1,299.00",
        image: "assets/Pic/m1.jpg",
        availability: "In Stock",
        description: "The gold standard for 4K QD-OLED gaming.",
        features: ["4K 240Hz", "QD-OLED", "0.03ms GTG"]
    },
    {
        id: 602,
        name: "MSI MPG 321URX",
        brand: "MSI",
        category: "Monitors",
        price: "$949.00",
        image: "assets/Pic/m2.webp",
        availability: "In Stock",
        description: "Best value 4K 240Hz QD-OLED monitor.",
        features: ["4K 240Hz", "QD-OLED", "90W USB-C"]
    },
    {
        id: 603,
        name: "Alienware AW3225QF",
        brand: "Dell",
        category: "Monitors",
        price: "$999.00",
        image: "assets/Pic/m3.png",
        availability: "In Stock",
        description: "Stunning curved 4K QD-OLED for maximum immersion.",
        features: ["1700R Curve", "4K 240Hz", "3-Year Warranty"]
    },
    {
        id: 604,
        name: "LG UltraGear 32GS95UE",
        brand: "LG",
        category: "Monitors",
        price: "$1,199.00",
        image: "assets/Pic/m4.png",
        availability: "In Stock",
        description: "Dual-mode OLED: 4K 240Hz or 1080p 480Hz.",
        features: ["Dual-Mode", "WOLED", "Pixel Sound"]
    },
    {
        id: 605,
        name: "Gigabyte Aorus FO32U2P",
        brand: "Gigabyte",
        category: "Monitors",
        price: "$1,299.00",
        image: "assets/Pic/m5.png",
        availability: "In Stock",
        description: "First monitor with DisplayPort 2.1 support.",
        features: ["DisplayPort 2.1", "4K 240Hz", "QD-OLED"]
    },
    {
        id: 606,
        name: "Samsung Odyssey G8 (G80SD)",
        brand: "Samsung",
        category: "Monitors",
        price: "$1,199.00",
        image: "assets/Pic/m6.png",
        availability: "In Stock",
        description: "Smart 4K OLED gaming monitor with AI processor.",
        features: ["Smart Hub", "4K 240Hz", "Matte Finish"]
    },
    {
        id: 607,
        name: "Alienware AW3423DWF",
        brand: "Dell",
        category: "Monitors",
        price: "$799.00",
        image: "assets/Pic/m7.jpg",
        availability: "In Stock",
        description: "The legend. Still the best value ultrawide OLED.",
        features: ["34\" 1440p", "165Hz OLED", "HDR 1000"]
    },
    {
        id: 608,
        name: "MSI MPG 341CQPX",
        brand: "MSI",
        category: "Monitors",
        price: "$899.00",
        image: "assets/Pic/m8.jpg",
        availability: "In Stock",
        description: "High-refresh 240Hz ultrawide QD-OLED.",
        features: ["34\" 240Hz", "QD-OLED", "KVM Switch"]
    },
    {
        id: 609,
        name: "Samsung Odyssey G9 (G95SC)",
        brand: "Samsung",
        category: "Monitors",
        price: "$1,299.00",
        image: "assets/Pic/m9.jpg",
        availability: "In Stock",
        description: "Massive 49-inch super ultrawide for peak immersion.",
        features: ["49\" 32:9", "240Hz OLED", "Curved"]
    },
    {
        id: 610,
        name: "LG UltraGear 39GS95QE",
        brand: "LG",
        category: "Monitors",
        price: "$1,299.00",
        image: "assets/Pic/m10.jpg",
        availability: "In Stock",
        description: "Large 39-inch ultra-curved OLED gaming monitor.",
        features: ["39\" OLED", "800R Curve", "240Hz"]
    },

    // ═══════════════════════════════════════════
    //  KEYBOARDS & MICE (20 Items)
    // ═══════════════════════════════════════════
    {
        id: 301,
        name: "SteelSeries Apex Pro Gen 3",
        brand: "SteelSeries",
        category: "Mouse and Keyboard",
        price: "$239.00",
        image: "assets/Pic/k1.jpg",
        availability: "In Stock",
        description: "Fastest mechanical keyboard with OmniPoint 3.0 switches.",
        features: ["Rapid Trigger", "Adjustable Actuation", "OLED Screen"]
    },
    {
        id: 302,
        name: "Wooting 60HE+",
        brand: "Wooting",
        category: "Mouse and Keyboard",
        price: "$175.00",
        image: "assets/Pic/k2.jpg",
        availability: "In Stock",
        description: "The cult favorite that started the Rapid Trigger revolution.",
        features: ["Lekker Switches", "0.1mm Precision", "Highly Moddable"]
    },
    {
        id: 303,
        name: "Razer Huntsman V3 Pro",
        brand: "Razer",
        category: "Mouse and Keyboard",
        price: "$249.00",
        image: "assets/Pic/k3.png",
        availability: "In Stock",
        description: "Analog optical keyboard built for competitive pros.",
        features: ["Optical Analog", "Rapid Trigger", "PBT Keycaps"]
    },
    {
        id: 304,
        name: "Corsair K70 Max",
        brand: "Corsair",
        category: "Mouse and Keyboard",
        price: "$229.00",
        image: "assets/Pic/k4.jpg",
        availability: "In Stock",
        description: "Magnetic-mechanical keyboard with 8000Hz polling.",
        features: ["MGX Switches", "8K Polling", "Aluminium Frame"]
    },
    {
        id: 305,
        name: "Keychron Q1 HE",
        brand: "Keychron",
        category: "Mouse and Keyboard",
        price: "$219.00",
        image: "assets/Pic/k5.jpg",
        availability: "In Stock",
        description: "Wireless hall-effect keyboard with premium custom build.",
        features: ["CNC Aluminium", "Wireless HE", "QMK/VIA"]
    },
    {
        id: 306,
        name: "Wooting 80HE",
        brand: "Wooting",
        category: "Mouse and Keyboard",
        price: "$199.00",
        image: "assets/Pic/k6.webp",
        availability: "In Stock",
        description: "The 80% TKL evolution of the world's best gaming keyboard.",
        features: ["8K Polling", "Rappy Snappy", "Zinc Alloy Case"]
    },
    {
        id: 307,
        name: "DrunkDeer A75",
        brand: "DrunkDeer",
        category: "Mouse and Keyboard",
        price: "$115.00",
        image: "assets/Pic/k7.jpg",
        availability: "In Stock",
        description: "Best budget-friendly analog keyboard for Valorant/CS2.",
        features: ["Magnetic Switches", "75% Layout", "Rapid Trigger"]
    },
    {
        id: 308,
        name: "Asus ROG Azoth",
        brand: "ASUS",
        category: "Mouse and Keyboard",
        price: "$249.00",
        image: "assets/Pic/k8.jpg",
        availability: "In Stock",
        description: "Wireless custom keyboard feel with ROG performance.",
        features: ["OLED Display", "Hotswap", "Tri-Mode Wireless"]
    },
    {
        id: 309,
        name: "Razer BlackWidow V4 Pro",
        brand: "Razer",
        category: "Mouse and Keyboard",
        price: "$229.00",
        image: "assets/Pic/k9.jpg",
        availability: "In Stock",
        description: "Fully loaded mechanical keyboard with macro keys and dial.",
        features: ["Macro Keys", "Command Dial", "Underglow RGB"]
    },
    {
        id: 310,
        name: "Logitech G Pro X TKL",
        brand: "Logitech",
        category: "Mouse and Keyboard",
        price: "$199.00",
        image: "assets/Pic/k10.png",
        availability: "In Stock",
        description: "Trusted by pros, now with Lightspeed wireless tech.",
        features: ["TKL Layout", "Lightspeed", "PBT Keycaps"]
    },
    {
        id: 311,
        name: "Razer Viper V3 Pro",
        brand: "Razer",
        category: "Mouse and Keyboard",
        price: "$159.00",
        image: "assets/Pic/mc1.jpg",
        availability: "In Stock",
        description: "Ultra-lightweight wireless mouse used by top pros.",
        features: ["54g Weight", "8K Polling", "35K DPI Sensor"]
    },
    {
        id: 312,
        name: "Logitech G Pro X Superlight 2",
        brand: "Logitech",
        category: "Mouse and Keyboard",
        price: "$159.00",
        image: "assets/Pic/mc2.jpg",
        availability: "In Stock",
        description: "The iconic esports mouse, improved with optical switches.",
        features: ["60g Weight", "HERO 2 Sensor", "USB-C Charging"]
    },
    {
        id: 313,
        name: "Razer DeathAdder V3 Pro",
        brand: "Razer",
        category: "Mouse and Keyboard",
        price: "$149.00",
        image: "assets/Pic/mc3.png",
        availability: "In Stock",
        description: "The most famous ergonomic gaming mouse, perfected.",
        features: ["63g Weight", "Ergo Shape", "Focus Pro 30K"]
    },
    {
        id: 314,
        name: "Logitech G502 X Plus",
        brand: "Logitech",
        category: "Mouse and Keyboard",
        price: "$159.00",
        image: "assets/Pic/mc4.jpg",
        availability: "In Stock",
        description: "World's most popular gaming mouse, now with LIGHTFORCE.",
        features: ["RGB Lighting", "Hybrid Switches", "13 Controls"]
    },
    {
        id: 315,
        name: "SteelSeries Rival 650",
        brand: "SteelSeries",
        category: "Mouse and Keyboard",
        price: "$119.00",
        image: "assets/Pic/mc5.png",
        availability: "In Stock",
        description: "First true performance wireless gaming mouse.",
        features: ["Fast Charging", "Dual Sensor", "Weight Tuning"]
    },
    {
        id: 316,
        name: "Logitech MX Master 3S",
        brand: "Logitech",
        category: "Mouse and Keyboard",
        price: "$99.00",
        image: "assets/Pic/mc6.jpg",
        availability: "In Stock",
        description: "An iconic quiet mouse for ultimate productivity.",
        features: ["8K DPI", "MagSpeed Scroll", "Multi-OS"]
    },
    {
        id: 317,
        name: "Razer Basilisk V3 Pro",
        brand: "Razer",
        category: "Mouse and Keyboard",
        price: "$159.00",
        image: "assets/Pic/mc7.png",
        availability: "In Stock",
        description: "The world's most advanced gaming mouse.",
        features: ["HyperScroll", "13-Zone RGB", "Wireless Charging"]
    },
    {
        id: 318,
        name: "SteelSeries Aerox 3 Wireless",
        brand: "SteelSeries",
        category: "Mouse and Keyboard",
        price: "$99.00",
        image: "assets/Pic/mc8.jpg",
        availability: "In Stock",
        description: "Ultra-lightweight 68g design for effortless gameplay.",
        features: ["IP54 Rated", "200h Battery", "USB-C"]
    },
    {
        id: 319,
        name: "Logitech G915 TKL",
        brand: "Logitech",
        category: "Mouse and Keyboard",
        price: "$229.00",
        image: "assets/Pic/mc9.jpg",
        availability: "In Stock",
        description: "A breakthrough in design and engineering.",
        features: ["Low Profile", "LIGHTSPEED", "RGB"]
    },
    {
        id: 320,
        name: "SteelSeries Apex 9 TKL",
        brand: "SteelSeries",
        category: "Mouse and Keyboard",
        price: "$139.00",
        image: "assets/Pic/mc10.jpg",
        availability: "In Stock",
        description: "Powered by custom OptiPoint optical switches.",
        features: ["Optical Swappable", "2-point Actuation", "Aluminium"]
    },

    // ═══════════════════════════════════════════
    //  STORAGE (10 Items)
    // ═══════════════════════════════════════════
    {
        id: 201,
        name: "Crucial T705 2TB",
        brand: "Crucial",
        category: "Storage",
        price: "$279.00",
        image: "assets/Pic/s1.png",
        availability: "In Stock",
        description: "The fastest PCIe Gen5 SSD currently available.",
        features: ["14,500 MB/s Read", "Gen5 NVMe", "Heatsink Incl."]
    },
    {
        id: 202,
        name: "Corsair MP700 Pro XT",
        brand: "Corsair",
        category: "Storage",
        price: "$289.00",
        image: "assets/Pic/s2.jpg",
        availability: "In Stock",
        description: "Pushing the limits of Gen5 bandwidth for enthusiasts.",
        features: ["14,000 MB/s", "Active Cooling", "Gen5 NVMe"]
    },
    {
        id: 203,
        name: "Samsung 990 Pro 2TB",
        brand: "Samsung",
        category: "Storage",
        price: "$179.00",
        image: "assets/Pic/s3.jpg",
        availability: "In Stock",
        description: "The king of PCIe Gen4. Unmatched reliability.",
        features: ["7,450 MB/s", "Efficient Power", "Samsung Magician"]
    },
    {
        id: 204,
        name: "WD Black SN850X 2TB",
        brand: "Western Digital",
        category: "Storage",
        price: "$159.00",
        image: "assets/Pic/s4.jpg",
        availability: "In Stock",
        description: "Top-tier gaming SSD with optimized load times.",
        features: ["7,300 MB/s", "Game Mode 2.0", "PS5 Compatible"]
    },
    {
        id: 205,
        name: "Crucial T700 2TB",
        brand: "Crucial",
        category: "Storage",
        price: "$210.00",
        image: "assets/Pic/s5.jpg",
        availability: "In Stock",
        description: "Blazing fast Gen5 speeds at a more accessible price.",
        features: ["12,400 MB/s", "DirectStorage", "Gen5 NVMe"]
    },
    {
        id: 206,
        name: "Sabrent Rocket 5 2TB",
        brand: "Sabrent",
        category: "Storage",
        price: "$310.00",
        image: "assets/Pic/s6.webp",
        availability: "In Stock",
        description: "Premium Gen5 performance for professional workflows.",
        features: ["14,000 MB/s", "High Endurance", "Cool Running"]
    },
    {
        id: 207,
        name: "SK Hynix Platinum P41",
        brand: "SK Hynix",
        category: "Storage",
        price: "$149.00",
        image: "assets/Pic/s7.jpg",
        availability: "In Stock",
        description: "Best performance-per-watt for Gen4 laptops and PCs.",
        features: ["7,000 MB/s", "Reliable Tech", "Efficient"]
    },
    {
        id: 208,
        name: "Lexar NM790 2TB",
        brand: "Lexar",
        category: "Storage",
        price: "$125.00",
        image: "assets/Pic/s8.jpg",
        availability: "In Stock",
        description: "Unbeatable value for high-speed Gen4 performance.",
        features: ["7,400 MB/s", "DRAM-less Tech", "Low Price"]
    },
    {
        id: 209,
        name: "Seagate FireCuda 540",
        brand: "Seagate",
        category: "Storage",
        price: "$259.00",
        image: "assets/Pic/s9.jpg",
        availability: "In Stock",
        description: "Enterprise-level endurance in a consumer Gen5 SSD.",
        features: ["10,000 MB/s", "Rescue Services", "High TBW"]
    },
    {
        id: 210,
        name: "Solidigm P44 Pro 2TB",
        brand: "Solidigm",
        category: "Storage",
        price: "$139.00",
        image: "assets/Pic/s10.jpg",
        availability: "In Stock",
        description: "Professional grade reliability for creators and gamers.",
        features: ["7,000 MB/s", "Low Latency", "Excellent Value"]
    },

    // ═══════════════════════════════════════════
    //  MOTHERBOARDS (10 Items)
    // ═══════════════════════════════════════════
    {
        id: 701,
        name: "ASUS ROG Maximus Z790 Dark Hero",
        brand: "ASUS",
        category: "Motherboards",
        price: "$649.00",
        image: "assets/Pic/mb1.jpg",
        availability: "In Stock",
        description: "The ultimate motherboard for Intel 14th Gen enthusiasts.",
        features: ["WiFi 7", "Thunderbolt 4", "PCIe 5.0"]
    },
    {
        id: 702,
        name: "MSI MAG Z790 Tomahawk MAX WiFi",
        brand: "MSI",
        category: "Motherboards",
        price: "$279.00",
        image: "assets/Pic/mb2.jpg",
        availability: "In Stock",
        description: "Best all-around value for Intel builds.",
        features: ["WiFi 7", "Gen5 M.2", "Solid VRM"]
    },
    {
        id: 703,
        name: "Gigabyte Z790 Aorus Elite AX",
        brand: "Gigabyte",
        category: "Motherboards",
        price: "$239.00",
        image: "assets/Pic/mb3.jpg",
        availability: "In Stock",
        description: "High-end features for Intel at a mid-range price.",
        features: ["WiFi 6E", "2.5G LAN", "EZ-Latch"]
    },
    {
        id: 704,
        name: "ASRock Z790 Nova WiFi",
        brand: "ASRock",
        category: "Motherboards",
        price: "$299.00",
        image: "assets/Pic/mb4.jpg",
        availability: "In Stock",
        description: "Storage monster with 6x M.2 slots for Intel CPUs.",
        features: ["WiFi 7", "6x M.2 Slots", "Killer 2.5G"]
    },
    {
        id: 705,
        name: "MSI MEG X670E AEC",
        brand: "MSI",
        category: "Motherboards",
        price: "$679.00",
        image: "assets/Pic/mb5.png",
        availability: "In Stock",
        description: "Premium E-ATX board for high-end Ryzen builds.",
        features: ["10G LAN", "PCIe 5.0 x16", "Enthusiast VRM"]
    },
    {
        id: 706,
        name: "Gigabyte X670E Aorus Master",
        brand: "Gigabyte",
        category: "Motherboards",
        price: "$449.00",
        image: "assets/Pic/mb6.jpg",
        availability: "In Stock",
        description: "Best all-around high-end choice for AMD Ryzen 9.",
        features: ["2x Gen5 M.2", "WiFi 6E", "Premium Audio"]
    },
    {
        id: 707,
        name: "ASRock X670E Steel Legend",
        brand: "ASRock",
        category: "Motherboards",
        price: "$259.00",
        image: "assets/Pic/mb7.jpg",
        availability: "In Stock",
        description: "Budget-friendly X670E with solid features for Ryzen.",
        features: ["WiFi 6E", "Gen5 Support", "Clean Look"]
    },
    {
        id: 708,
        name: "Gigabyte B650 Aorus Elite AX",
        brand: "Gigabyte",
        category: "Motherboards",
        price: "$209.00",
        image: "assets/Pic/mb8.jpg",
        availability: "In Stock",
        description: "The sweet spot motherboard for Ryzen 7 gaming builds.",
        features: ["WiFi 6E", "Gen5 M.2", "Easy BIOS"]
    },
    {
        id: 709,
        name: "MSI MAG B650 Tomahawk WiFi",
        brand: "MSI",
        category: "Motherboards",
        price: "$219.00",
        image: "assets/Pic/mb9.jpg",
        availability: "In Stock",
        description: "Rugged and reliable B650 board for any build.",
        features: ["WiFi 6E", "Dual M.2", "Strong VRM"]
    },
    {
        id: 710,
        name: "ASRock B650M Pro RS WiFi",
        brand: "ASRock",
        category: "Motherboards",
        price: "$149.00",
        image: "assets/Pic/mb10.jpg",
        availability: "In Stock",
        description: "Best budget Micro-ATX board for modern AMD PCs.",
        features: ["WiFi 6E", "Micro-ATX", "Gen5 M.2"]
    },

    // ═══════════════════════════════════════════
    //  MEMORY (RAM) (10 Items)
    // ═══════════════════════════════════════════
    {
        id: 801,
        name: "G.Skill Trident Z5 Neo RGB",
        brand: "G.Skill",
        category: "Memory",
        price: "$119.00",
        image: "assets/Pic/mr1.webp",
        availability: "In Stock",
        description: "The gold standard for AMD Ryzen 7000/9000 setups.",
        features: ["6000MHz CL30", "AMD EXPO", "RGB Lighting"]
    },
    {
        id: 802,
        name: "G.Skill Trident Z5 RGB",
        brand: "G.Skill",
        category: "Memory",
        price: "$145.00",
        image: "assets/Pic/mr2.jpg",
        availability: "In Stock",
        description: "Blazing fast high-speed RAM for Intel enthusiasts.",
        features: ["7200MHz CL34", "Intel XMP", "Premium Build"]
    },
    {
        id: 803,
        name: "Corsair Dominator Titanium",
        brand: "Corsair",
        category: "Memory",
        price: "$199.00",
        image: "assets/Pic/mr3.jpg",
        availability: "In Stock",
        description: "Ultra-premium memory with swappable top bars.",
        features: ["7200MHz CL34", "Patented Cooling", "iCUE Support"]
    },
    {
        id: 804,
        name: "Corsair Vengeance RGB",
        brand: "Corsair",
        category: "Memory",
        price: "$125.00",
        image: "assets/Pic/mr4.jpg",
        availability: "In Stock",
        description: "Best-selling high-performance RAM with vibrant RGB.",
        features: ["6000MHz CL30", "iCUE Ready", "Compact Design"]
    },
    {
        id: 805,
        name: "Crucial Pro DDR5",
        brand: "Crucial",
        category: "Memory",
        price: "$99.00",
        image: "assets/Pic/mr5.jpg",
        availability: "In Stock",
        description: "Reliable and efficient RAM without the RGB tax.",
        features: ["6000MHz CL36", "Low Profile", "JEDEC Stability"]
    },
    {
        id: 806,
        name: "Teamgroup T-Force Delta RGB",
        brand: "Teamgroup",
        category: "Memory",
        price: "$129.00",
        image: "assets/Pic/mr6.jpg",
        availability: "In Stock",
        description: "High-speed gaming RAM with a unique light bar.",
        features: ["7200MHz CL34", "Full RGB", "High Bandwidth"]
    },
    {
        id: 807,
        name: "Kingston Fury Beast RGB",
        brand: "Kingston",
        category: "Memory",
        price: "$119.00",
        image: "assets/Pic/mr7.png",
        availability: "In Stock",
        description: "Trusted reliability with smooth RGB effects.",
        features: ["6000MHz CL36", "Infrared Sync", "Value Choice"]
    },
    {
        id: 808,
        name: "XPG Lancer RGB",
        brand: "XPG",
        category: "Memory",
        price: "$110.00",
        image: "assets/Pic/mr8.jpg",
        availability: "In Stock",
        description: "Fast performance with an elegant design.",
        features: ["6000MHz CL30", "Heatsink Design", "RGB Apps"]
    },
    {
        id: 809,
        name: "Patriot Viper Venom",
        brand: "Patriot",
        category: "Memory",
        price: "$129.00",
        image: "assets/Pic/mr9.jpg",
        availability: "In Stock",
        description: "Excellent value for high-speed DDR5 performance.",
        features: ["7200MHz CL34", "Venom Design", "XMP Ready"]
    },
    {
        id: 810,
        name: "G.Skill Flare X5",
        brand: "G.Skill",
        category: "Memory",
        price: "$105.00",
        image: "assets/Pic/mr10.jpg",
        availability: "In Stock",
        description: "Low-profile RAM optimized for AMD platforms.",
        features: ["6000MHz CL36", "Low Profile", "AMD EXPO"]
    },

    // ═══════════════════════════════════════════
    //  PRINTERS (10 Items)
    // ═══════════════════════════════════════════
    {
        id: 901,
        name: "HP LaserJet Pro M404dn",
        brand: "HP",
        category: "Printers",
        price: "$299.00",
        image: "assets/Pic/pr1.jpg",
        availability: "In Stock",
        description: "Fast, reliable monochrome laser printer for small businesses.",
        features: ["Auto Duplex", "Ethernet Port", "40 ppm Speed"]
    },
    {
        id: 902,
        name: "Epson EcoTank ET-2850",
        brand: "Epson",
        category: "Printers",
        price: "$249.00",
        image: "assets/Pic/pr2.jpg",
        availability: "In Stock",
        description: "Cartridge-free printing with easy-to-fill ink tanks.",
        features: ["Wireless Printing", "Voice-activated", "Up to 2 Years Ink"]
    },
    {
        id: 903,
        name: "Canon PIXMA TS9520",
        brand: "Canon",
        category: "Printers",
        price: "$199.00",
        image: "assets/Pic/pr3.jpg",
        availability: "In Stock",
        description: "Versatile all-in-one printer for creative projects and photos.",
        features: ["Wide Format", "AirPrint Support", "5-Color Ink System"]
    },
    {
        id: 904,
        name: "Brother HL-L2350DW",
        brand: "Brother",
        category: "Printers",
        price: "$149.00",
        image: "assets/Pic/pr4.jpg",
        availability: "In Stock",
        description: "Compact monochrome laser printer for home or small office.",
        features: ["Wireless", "Auto Duplex", "32 ppm"]
    },
    {
        id: 905,
        name: "Samsung Xpress M2020W",
        brand: "Samsung",
        category: "Printers",
        price: "$129.00",
        image: "assets/Pic/pr5.jpg",
        availability: "In Stock",
        description: "Simple and intuitive wireless monochrome printer.",
        features: ["NFC Support", "Google Cloud Print", "One-touch WPS"]
    },
    {
        id: 906,
        name: "Lexmark C3326dw",
        brand: "Lexmark",
        category: "Printers",
        price: "$259.00",
        image: "assets/Pic/pr6.jpg",
        availability: "In Stock",
        description: "Reliable color laser printer with impressive performance.",
        features: ["Color Printing", "Cloud Connector", "600-sheet Tray"]
    },
    {
        id: 907,
        name: "Xerox Phaser 3330",
        brand: "Xerox",
        category: "Printers",
        price: "$349.00",
        image: "assets/Pic/pr7.jpg",
        availability: "In Stock",
        description: "Workhorse printer with enterprise-level features.",
        features: ["42 ppm", "NFC Touch-to-pair", "Large Paper Capacity"]
    },
    {
        id: 908,
        name: "HP Color LaserJet Pro M255dw",
        brand: "HP",
        category: "Printers",
        price: "$299.00",
        image: "assets/Pic/pr8.jpg",
        availability: "In Stock",
        description: "Fast color laser printing with best-in-class security.",
        features: ["Touchscreen", "Dual-band WiFi", "Smart App"]
    },
    {
        id: 909,
        name: "Canon imageCLASS MF264dw",
        brand: "Canon",
        category: "Printers",
        price: "$219.00",
        image: "assets/Pic/pr9.jpg",
        availability: "In Stock",
        description: "Multifunction monochrome printer for high productivity.",
        features: ["Scan/Copy", "5-line LCD", "250-sheet Cassette"]
    },
    {
        id: 910,
        name: "Epson SureColor P700",
        brand: "Epson",
        category: "Printers",
        price: "$799.00",
        image: "assets/Pic/pr10.jpg",
        availability: "In Stock",
        description: "Professional photo printer for exhibition-quality prints.",
        features: ["13-inch Wide", "UltraChrome PRO10", "Carbon Black Mode"]
    },

    // ═══════════════════════════════════════════
    //  SCANNERS (10 Items)
    // ═══════════════════════════════════════════
    {
        id: 1001,
        name: "Canon CanoScan LiDE 400",
        brand: "Canon",
        category: "Scanners",
        price: "$89.00",
        image: "assets/Pic/snr1.jpg",
        availability: "In Stock",
        description: "Compact and lightweight flatbed scanner for high-res scans.",
        features: ["4800 dpi", "USB-C Powered", "Z-Lid for Books"]
    },
    {
        id: 1002,
        name: "Epson Perfection V600",
        brand: "Epson",
        category: "Scanners",
        price: "$299.00",
        image: "assets/Pic/snr2.jpg",
        availability: "In Stock",
        description: "Professional photo and film scanner with DIGITAL ICE technology.",
        features: ["6400 dpi", "Film/Slide Scanning", "Fast Scanning"]
    },
    {
        id: 1003,
        name: "HP ScanJet Pro 2600 f1",
        brand: "HP",
        category: "Scanners",
        price: "$289.00",
        image: "assets/Pic/snr3.jpg",
        availability: "In Stock",
        description: "Fast, reliable document scanner for heavy workloads.",
        features: ["Auto Document Feeder", "One-pass Duplex", "25 ppm"]
    },
    {
        id: 1004,
        name: "Fujitsu ScanSnap iX1600",
        brand: "Fujitsu",
        category: "Scanners",
        price: "$495.00",
        image: "assets/Pic/snr4.jpg",
        availability: "In Stock",
        description: "The gold standard for wireless document digitization.",
        features: ["Touchscreen", "WiFi Enabled", "Cloud Direct"]
    },
    {
        id: 1005,
        name: "Brother ADS-2700W",
        brand: "Brother",
        category: "Scanners",
        price: "$299.00",
        image: "assets/Pic/snr5.jpg",
        availability: "In Stock",
        description: "Wireless desktop scanner for easy information sharing.",
        features: ["Color Touchscreen", "Auto Start", "Multiple Dest."]
    },
    {
        id: 1006,
        name: "Canon imageFORMULA DR-C225",
        brand: "Canon",
        category: "Scanners",
        price: "$349.00",
        image: "assets/Pic/snr6.jpg",
        availability: "In Stock",
        description: "Space-saving design with top-feed reliability.",
        features: ["Upright Design", "Fast Duplex", "Compact Footprint"]
    },
    {
        id: 1007,
        name: "Plustek OpticFilm 8200i AI",
        brand: "Plustek",
        category: "Scanners",
        price: "$489.00",
        image: "assets/Pic/snr7.jpg",
        availability: "In Stock",
        description: "High-end 35mm film scanner for professional photographers.",
        features: ["7200 dpi", "SilverFast Software", "Infrared Channel"]
    },
    {
        id: 1008,
        name: "Kodak Alaris S2050",
        brand: "Kodak Alaris",
        category: "Scanners",
        price: "$595.00",
        image: "assets/Pic/snr8.jpg",
        availability: "In Stock",
        description: "Enterprise grade scanner with built-in image processing.",
        features: ["Smart Touch", "Perfect Page Tech", "50 ppm"]
    },
    {
        id: 1009,
        name: "IRIScan Anywhere 5",
        brand: "IRIS",
        category: "Scanners",
        price: "$129.00",
        image: "assets/Pic/snr9.jpg",
        availability: "In Stock",
        description: "Battery-powered mobile scanner for use anywhere.",
        features: ["SD Card Slot", "OLED Screen", "PDF Conversion"]
    },
    {
        id: 1010,
        name: "Epson DS-530 II",
        brand: "Epson",
        category: "Scanners",
        price: "$399.00",
        image: "assets/Pic/snr10.png",
        availability: "In Stock",
        description: "Robust document scanner for busy office environments.",
        features: ["Dynamic Skew Correction", "Double-feed Detect", "35 ppm"]
    },

    // ═══════════════════════════════════════════
    //  UPS (10 Items)
    // ═══════════════════════════════════════════
    {
        id: 1101,
        name: "APC Back-UPS Pro 1500",
        brand: "APC",
        category: "UPS",
        price: "$215.00",
        image: "assets/Pic/ups1.jpg",
        availability: "In Stock",
        description: "High-performance battery backup and surge protector.",
        features: ["LCD Display", "AVR Technology", "10 Outlets"]
    },
    {
        id: 1102,
        name: "CyberPower CP1500PFCLCD",
        brand: "CyberPower",
        category: "UPS",
        price: "$219.00",
        image: "assets/Pic/ups2.jpg",
        availability: "In Stock",
        description: "Pure Sine Wave UPS for high-end gaming and workstations.",
        features: ["Pure Sine Wave", "Mini-Tower", "10 Outlets"]
    },
    {
        id: 1103,
        name: "Eaton 5S 1500LCD",
        brand: "Eaton",
        category: "UPS",
        price: "$199.00",
        image: "assets/Pic/ups3.jpg",
        availability: "In Stock",
        description: "Affordable protection for workstations and home PCs.",
        features: ["USB Interface", "Plug-and-play", "Eco-control Outlets"]
    },
    {
        id: 1104,
        name: "Tripp Lite SMART1500LCDT",
        brand: "Tripp Lite",
        category: "UPS",
        price: "$185.00",
        image: "assets/Pic/ups4.jpg",
        availability: "In Stock",
        description: "Reliable interactive UPS with digital display.",
        features: ["AVR Support", "Tower Format", "900W Capacity"]
    },
    {
        id: 1105,
        name: "APC Smart-UPS 1500",
        brand: "APC",
        category: "UPS",
        price: "$549.00",
        image: "assets/Pic/ups5.avif",
        availability: "In Stock",
        description: "Enterprise-grade protection for servers and networking.",
        features: ["Pure Sine Wave", "SmartConnect", "Rack/Tower"]
    },
    {
        id: 1106,
        name: "Vertiv Liebert GXT5",
        brand: "Vertiv",
        category: "UPS",
        price: "$699.00",
        image: "assets/Pic/ups6.jpg",
        availability: "In Stock",
        description: "Double conversion online UPS for mission-critical apps.",
        features: ["Online Double Conv.", "Gravity Sensing LCD", "Cloud Mgmt"]
    },
    {
        id: 1107,
        name: "CyberPower OR1500LCDRTXL2U",
        brand: "CyberPower",
        category: "UPS",
        price: "$459.00",
        image: "assets/Pic/ups7.jpg",
        availability: "In Stock",
        description: "Smart App LCD UPS System for office networks.",
        features: ["Rackmount", "SNMP/HTTP Remote", "Simulated Sine Wave"]
    },
    {
        id: 1108,
        name: "Eaton 9PX 2000RT",
        brand: "Eaton",
        category: "UPS",
        price: "$1,299.00",
        image: "assets/Pic/ups8.jpg",
        availability: "In Stock",
        description: "Advanced online UPS with efficiency leading features.",
        features: ["Energy Star Certified", "Graphical LCD", "Remote Monitoring"]
    },
    {
        id: 1109,
        name: "APC Back-UPS Connect",
        brand: "APC",
        category: "UPS",
        price: "$75.00",
        image: "assets/Pic/ups9.jpg",
        availability: "In Stock",
        description: "Compact UPS specifically for networking equipment.",
        features: ["Small Footprint", "Router Support", "Lithium-Ion"]
    },
    {
        id: 1110,
        name: "Tripp Lite OMNIVS1500",
        brand: "Tripp Lite",
        category: "UPS",
        price: "$165.00",
        image: "assets/Pic/ups10.jpg",
        availability: "In Stock",
        description: "Versatile tower UPS for home and office electronics.",
        features: ["AVR Protection", "8 Outlets", "USB/Serial Ports"]
    },

    // ═══════════════════════════════════════════
    //  MODEMS (10 Items)
    // ═══════════════════════════════════════════
    {
        id: 1201,
        name: "NETGEAR Nighthawk CM2000",
        brand: "NETGEAR",
        category: "Modems",
        price: "$299.00",
        image: "assets/Pic/mod1.jpg",
        availability: "In Stock",
        description: "Next-gen multi-gigabit DOCSIS 3.1 cable modem.",
        features: ["2.5Gbps Port", "DOCSIS 3.1", "Works with All Providers"]
    },
    {
        id: 1202,
        name: "TP-Link Archer CR700",
        brand: "TP-Link",
        category: "Modems",
        price: "$149.00",
        image: "assets/Pic/mod2.jpg",
        availability: "In Stock",
        description: "AC1750 Wireless Dual Band DOCSIS 3.0 Modem Router.",
        features: ["16x4 Channel Bonding", "AC1750 WiFi", "USB 2.0 Port"]
    },
    {
        id: 1203,
        name: "Arris SURFboard SB8200",
        brand: "Arris",
        category: "Modems",
        price: "$169.00",
        image: "assets/Pic/mod3.jpg",
        availability: "In Stock",
        description: "Powerful DOCSIS 3.1 modem for ultra-fast internet plans.",
        features: ["2 GigE Ports", "DOCSIS 3.1", "Xfinity/Cox Cert."]
    },
    {
        id: 1204,
        name: "Motorola MB8611",
        brand: "Motorola",
        category: "Modems",
        price: "$189.00",
        image: "assets/Pic/mod4.jpg",
        availability: "In Stock",
        description: "High-speed modem with 2.5 Gbps Ethernet port.",
        features: ["2.5G Port", "DOCSIS 3.1", "Full-Band Capture"]
    },
    {
        id: 1205,
        name: "Linksys CM3024",
        brand: "Linksys",
        category: "Modems",
        price: "$119.00",
        image: "assets/Pic/mod5.jpg",
        availability: "In Stock",
        description: "Reliable DOCSIS 3.0 modem for steady home networking.",
        features: ["24x8 Channels", "Intel Puma 6", "Plug-and-play"]
    },
    {
        id: 1206,
        name: "ASUS CM-32 AC2600",
        brand: "ASUS",
        category: "Modems",
        price: "$199.00",
        image: "assets/Pic/mod6.jpg",
        availability: "In Stock",
        description: "High-performance modem-router combo for seamless WiFi.",
        features: ["AC2600 WiFi", "32x8 Channels", "4 GigE Ports"]
    },
    {
        id: 1207,
        name: "NETGEAR CM1000",
        brand: "NETGEAR",
        category: "Modems",
        price: "$159.00",
        image: "assets/Pic/mod7.jpg",
        availability: "In Stock",
        description: "Pure cable modem for Gigabit internet speeds.",
        features: ["DOCSIS 3.1", "Gigabit Port", "Cost Effective"]
    },
    {
        id: 1208,
        name: "Arris SURFboard S33",
        brand: "Arris",
        category: "Modems",
        price: "$199.00",
        image: "assets/Pic/mod8.png",
        availability: "In Stock",
        description: "Top-of-the-line cable modem with multi-gig support.",
        features: ["2.5G + 1G Ports", "DOCSIS 3.1", "Compact Shape"]
    },
    {
        id: 1209,
        name: "TP-Link TC-7610",
        brand: "TP-Link",
        category: "Modems",
        price: "$59.00",
        image: "assets/Pic/mod9.jpg",
        availability: "In Stock",
        description: "Budget-friendly DOCSIS 3.0 modem for standard plans.",
        features: ["8x4 Channels", "IPV6 Support", "Gigabit Ethernet"]
    },
    {
        id: 1210,
        name: "Motorola MB7621",
        brand: "Motorola",
        category: "Modems",
        price: "$99.00",
        image: "assets/Pic/mod10.jpg",
        availability: "In Stock",
        description: "Reliable mid-range modem for cable internet subscribers.",
        features: ["24x8 Channels", "Digital Tuner", "Broadcom Chip"]
    }
];
