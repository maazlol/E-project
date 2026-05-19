// catalogue-data.js

const catalogueData = [
    {
        id: "dell",
        name: "Dell",
        logo: "assets/brandPicture/Delllogo.png",
        tagline: "Authorized Partner & Computing Leader",
        products: [
            { name: "Dell Precision 5690", category: "Laptops", price: "$3,200.00", image: "assets/Pic/lap10.jpg", description: "High-end mobile workstation with ISV certification.", specs: ["RTX 5000 Ada", "4K OLED"] },
            { name: "Alienware AW3225QF", category: "Monitors", price: "$999.00", image: "assets/Pic/m3.png", description: "Stunning curved 4K QD-OLED for maximum immersion.", specs: ["1700R Curve", "4K 240Hz"] },
            { name: "Alienware AW3423DWF", category: "Monitors", price: "$799.00", image: "assets/Pic/m7.jpg", description: "The legend. Still the best value ultrawide OLED.", specs: ["34\" 1440p", "165Hz OLED"] },
            { name: "Dell XPS 15", category: "Laptops", price: "$1,999", image: "assets/brandPicture/d4.jpg", description: "High-end laptop for creators.", specs: ["4K Display", "32GB RAM"] },
            { name: "Dell PowerEdge T150", category: "Servers", price: "$1,200", image: "assets/brandPicture/d5.jpg", description: "Entry-level tower server.", specs: ["Reliable", "Quiet"] }
        ]
    },
    {
        id: "hp",
        name: "HP",
        logo: "assets/brandPicture/hplogo.png",
        tagline: "Premium Retailer for Business & Creative Solutions",
        products: [
            { name: "HP LaserJet Pro M404dn", category: "Printers", price: "$299.00", image: "assets/Pic/pr1.jpg", description: "Fast, reliable monochrome laser printer for small businesses.", specs: ["Auto Duplex", "Ethernet Port", "40 ppm Speed"] },
            { name: "HP Color LaserJet Pro M255dw", category: "Printers", price: "$299.00", image: "assets/Pic/pr8.jpg", description: "Fast color laser printing with best-in-class security.", specs: ["Touchscreen", "Dual-band WiFi"] },
            { name: "HP ScanJet Pro 2600 f1", category: "Scanners", price: "$289.00", image: "assets/Pic/snr3.jpg", description: "Fast, reliable document scanner for heavy workloads.", specs: ["Auto Document Feeder", "25 ppm"] },
            { name: "HP Spectre x360", category: "Laptops", price: "$1,399", image: "assets/brandPicture/h4.jpg", description: "Versatile 2-in-1 laptop.", specs: ["OLED Touch", "Stylus"] },
            { name: "HP OMEN 45L", category: "Desktops", price: "$2,199", image: "assets/brandPicture/h5.jpg", description: "High-performance gaming PC.", specs: ["Cryo Chamber", "Liquid Cooled"] }
        ]
    },
    {
        id: "asus",
        name: "ASUS",
        logo: "assets/brandPicture/asuslogo.png",
        tagline: "Innovation in Gaming and Hardware",
        products: [
            { name: "ASUS ROG Zephyrus G14 (2024)", category: "Laptops", price: "$1,799.00", image: "assets/Pic/ASUSROGZephyrusG14(2024).jpg", description: "Ultra-portable 14-inch OLED gaming powerhouse.", specs: ["3K OLED 120Hz", "RTX 4070"] },
            { name: "ASUS ROG Strix Scar 18", category: "Laptops", price: "$3,699.00", image: "assets/Pic/ASUSROGStrixScar18.jpg", description: "Massive 18-inch Mini-LED display for desktop-level gaming.", specs: ["Core i9-14900HX", "RTX 4090"] },
            { name: "ASUS ROG Maximus Z790 Dark Hero", category: "Motherboards", price: "$649.00", image: "assets/Pic/mb1.jpg", description: "The ultimate motherboard for Intel 14th Gen enthusiasts.", specs: ["WiFi 7", "Thunderbolt 4"] },
            { name: "Asus ROG Swift PG32UCDM", category: "Monitors", price: "$1,299.00", image: "assets/Pic/m1.jpg", description: "The gold standard for 4K QD-OLED gaming.", specs: ["4K 240Hz", "QD-OLED"] },
            { name: "ASUS Zenbook Duo", category: "Laptops", price: "$1,699", image: "assets/Pic/lap6.jpg", description: "Innovative dual-screen laptop.", specs: ["Dual OLED", "Multitasking"] }
        ]
    },
    {
        id: "logitech",
        name: "Logitech",
        logo: "assets/brandPicture/logitechlogo.png",
        tagline: "The Gold Standard for Peripherals",
        products: [
            { name: "Logitech MX Master 3S", category: "Mouse and Keyboard", price: "$99.00", image: "assets/Pic/mc6.jpg", description: "An iconic quiet mouse for ultimate productivity.", specs: ["8K DPI", "MagSpeed Scroll"] },
            { name: "Logitech G Pro X Superlight 2", category: "Mouse and Keyboard", price: "$159.00", image: "assets/Pic/mc2.jpg", description: "The iconic esports mouse, improved with optical switches.", specs: ["60g Weight", "HERO 2 Sensor"] },
            { name: "Logitech G502 X Plus", category: "Mouse and Keyboard", price: "$159.00", image: "assets/Pic/mc4.jpg", description: "World's most popular gaming mouse, now with LIGHTFORCE.", specs: ["RGB Lighting", "Hybrid Switches"] },
            { name: "Logitech G915 TKL", category: "Mouse and Keyboard", price: "$229.00", image: "assets/brandPicture/l4.jpg", description: "A breakthrough in design and engineering.", specs: ["Low Profile", "LIGHTSPEED"] },
            { name: "Logitech Brio 4K", category: "Webcams", price: "$199", image: "assets/brandPicture/l5.jpg", description: "Ultra HD webcam.", specs: ["HDR", "RightLight 3"] }
        ]
    },
    {
        id: "razer",
        name: "Razer",
        logo: "assets/brandPicture/razerlogo.png",
        tagline: "By Gamers, For Gamers",
        products: [
            { name: "Razer Blade 16 (2024)", category: "Laptops", price: "$3,299.00", image: "assets/Pic/lap7.webp", description: "The 'iPhone' of gaming laptops. Sleek, fast, and premium.", specs: ["QHD+ 240Hz OLED", "RTX 4090"] },
            { name: "Razer DeathAdder V3 Pro", category: "Mouse and Keyboard", price: "$149.00", image: "assets/Pic/mc3.png", description: "The most famous ergonomic gaming mouse, perfected.", specs: ["63g Weight", "Ergo Shape"] },
            { name: "Razer BlackWidow V4 Pro", category: "Mouse and Keyboard", price: "$229.00", image: "assets/Pic/k9.jpg", description: "Fully loaded mechanical keyboard with macro keys and dial.", specs: ["Macro Keys", "Command Dial"] },
            { name: "Razer Viper V3 Pro", category: "Mouse and Keyboard", price: "$159.00", image: "assets/brandPicture/r4.jpg", description: "Ultra-lightweight wireless mouse used by top pros.", specs: ["54g Weight", "8K Polling"] },
            { name: "Razer Leviathan V2", category: "Speakers", price: "$249", image: "assets/brandPicture/r5.jpg", description: "Gaming soundbar.", specs: ["Chroma RGB", "THX Spatial"] }
        ]
    }
];
