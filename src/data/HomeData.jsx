/* Trending Image Import */
import AOC from "../assets/homeImgs/trending_items/trending_aoc_monitor.png";
import KeyboardsMice from "../assets/homeImgs/trending_items/trending_keyboards&mice.png";
import Backpacks from "../assets/homeImgs/trending_items/backpacks.png";

/* Best Deals Image Import */
import msiraiderge78 from "../assets/homeImgs/best_deals/msi_raider_ge78.png";
import msicreator from "../assets/homeImgs/best_deals/msicreator.png";
import razorblade17 from "../assets/homeImgs/best_deals/razor_blade17.png";
/* Home Page */

import heroImg1 from "../assets/homeImgs/hero_img1.jpg";
import heroImg2 from "../assets/homeImgs/hero_img2.jpg";
import heroImg3 from "../assets/homeImgs/hero_img3.jpg";
/* Hero Imgs */
export const homeHeroImgs = [
  {
    id: 1,
    img: heroImg1,
    alt: "Corsair Dominator Titanium RAM",
    path: "/",
  },
  {
    id: 2,
    img: heroImg2,
    alt: "CPU and Motherboard Bundle",
    path: "/",
  },
  {
    id: 3,
    img: heroImg3,
    alt: "CPU and AIO Cooler Bundle",
    path: "/",
  },
];
/* Trending Now */
export const trendingItems = [
  {
    id: 1,
    title: "AOC",
    path: "/aoc",
    img: AOC,
  },
  {
    id: 2,
    title: "Keyboards & Mice",
    path: "/keyboards-mice",
    img: KeyboardsMice,
  },
  {
    id: 3,
    title: "Backpack",
    path: "/laptop-backpacks",
    img: Backpacks,
  },
  {
    id: 4,
    title: "Laptops",
    path: "/gaming-laptops",
    img: "https://assets2.razerzone.com/images/pnx.assets/df55b8678b4404b48cb85675772298c5/razer-blade-14_p9.png",
  },
];

export const bestDeals = [
  {
    id: 1,
    img: msiraiderge78,
    title: "MSI Raider GE78 HX 13VH (I9-13th Gen) Black RTX4080 GDDR6 12GB",
    freeGift: "MSI Original Mouse",
    originalPrice: 3299,
    dealPrice: 3199,
    Specs: [
      {
        id: 11,
        model: "Raider GE78 HX 13VH (RTX 4080, GDDR6 12GB)w/MUX",
        display: "17 Inch 16:10 QHD+(2560 x1600), 240Hz, 100%DCI-P3, IPS-level",
        cpu: "Raptor Lake i9-13950HX",
        memory: "DDR5 16GB*2",
        storage: "2TB NVMe PCIe Gen4x4SSD",
        gpu: "RTX 4080, GDDR6 12GB",
        OS: "Windows 11 Home Advanced",
        WLAN: " Intel Killer Wi-Fi 6E AX1690(i)",
        keyboard: "Per-Key RGBgaming Keyboard by SteelSeries",
        battery: "4 cell, 99.99Whr",
        carryBag: "Titan Gaming Backpack",
        warranty: "2 Years Parts & 3 years Service",
      },
    ],
  },
  {
    id: 2,
    img: msicreator,
    title:
      "MSI Creator Z16 B12UGST (RTX3070Ti Max-Q, GDDR6 8GB) Laptop (I7-12th Gen)",
    freeGift: "MSI Original Mouse",
    originalPrice: 2899,
    dealPrice: 2789,
    Specs: [
      {
        id: 11,
        model: "Creator Z16 B12UGST (RTX3070Ti MaxQ, GDDR6 8GB)",
        display: `LCD: 16" QHD+ (2560*1600), 165Hz DCI-P3 100% typical, Finger Touch panel (support Pen Touch)`,
        cpu: "Alder Lake i7-12700H",
        memory: "DDR5 16GB*2 (4800MHz)",
        storage: "2TB NVMe PCIe Gen4x4 SSD",
        gpu: " RTX3070Ti Max-Q, GDDR6 8GB",
        OS: "Windows11 Home Plus",
        WLAN: "Intel® Killer™ Wi-Fi 6E AX1675(i)",
        keyboard: "Per key RGB Keyboard",
        battery: " 4 cell, 90Whr",
        carryBag: "MSI Topload Bag_Grey",
        warranty: "2 Years Parts & 3 years Service",
      },
    ],
  },
  {
    id: 3,
    img: razorblade17,
    title: "Razor Blade 17 (RTX 3070Ti, GDDR6 8GB) Laptop (I9-12th Gen)",
    freeGift: "MSI Original Mouse",
    originalPrice: 3399,
    dealPrice: 2299.99,
    Specs: [
      {
        id: 11,
        model: "Razor Blade 17",
        display: `17.3" 240 Hz QHD`,
        cpu: "Intel Core i9-12900H",
        memory: "16 GB 4800 MHz",
        storage: "1TB NVMe PCIe Gen4x4 SSD",
        gpu: " GeForce RTX 3070 Ti GDDR6 8GB",
        OS: "Windows 11 Home",
        WLAN: "Intel® Killer™ Wi-Fi 6E AX1675(i)",
        keyboard: "Per key RGB Keyboard",
        battery: " 4 cell, 90Whr",
        carryBag: "MSI Topload Bag_Grey",
        warranty: "2 Years Parts & 3 years Service",
      },
    ],
  },
  {
    id: 4,
    img: razorblade17,
    title: "Razor Blade 17 (RTX 3070Ti, GDDR6 8GB) Laptop (I9-12th Gen)",
    freeGift: "MSI Original Mouse",
    originalPrice: 3399,
    dealPrice: 2299.99,
    Specs: [
      {
        id: 11,
        model: "Razor Blade 17",
        display: `17.3" 240 Hz QHD`,
        cpu: "Intel Core i9-12900H",
        memory: "16 GB 4800 MHz",
        storage: "1TB NVMe PCIe Gen4x4 SSD",
        gpu: " GeForce RTX 3070 Ti GDDR6 8GB",
        OS: "Windows 11 Home",
        WLAN: "Intel® Killer™ Wi-Fi 6E AX1675(i)",
        keyboard: "Per key RGB Keyboard",
        battery: " 4 cell, 90Whr",
        carryBag: "MSI Topload Bag_Grey",
        warranty: "2 Years Parts & 3 years Service",
      },
    ],
  },
  {
    id: 5,
    img: razorblade17,
    title: "Razor Blade 17 (RTX 3070Ti, GDDR6 8GB) Laptop (I9-12th Gen)",
    freeGift: "MSI Original Mouse",
    originalPrice: 3399,
    dealPrice: 2299.99,
    Specs: [
      {
        id: 11,
        model: "Razor Blade 17",
        display: `17.3" 240 Hz QHD`,
        cpu: "Intel Core i9-12900H",
        memory: "16 GB 4800 MHz",
        storage: "1TB NVMe PCIe Gen4x4 SSD",
        gpu: " GeForce RTX 3070 Ti GDDR6 8GB",
        OS: "Windows 11 Home",
        WLAN: "Intel® Killer™ Wi-Fi 6E AX1675(i)",
        keyboard: "Per key RGB Keyboard",
        battery: " 4 cell, 90Whr",
        carryBag: "MSI Topload Bag_Grey",
        warranty: "2 Years Parts & 3 years Service",
      },
    ],
  },
  {
    id: 6,
    img: razorblade17,
    title: "Razor Blade 17 (RTX 3070Ti, GDDR6 8GB) Laptop (I9-12th Gen)",
    freeGift: "MSI Original Mouse",
    originalPrice: 3399,
    dealPrice: 2299.99,
    Specs: [
      {
        id: 11,
        model: "Razor Blade 17",
        display: `17.3" 240 Hz QHD`,
        cpu: "Intel Core i9-12900H",
        memory: "16 GB 4800 MHz",
        storage: "1TB NVMe PCIe Gen4x4 SSD",
        gpu: " GeForce RTX 3070 Ti GDDR6 8GB",
        OS: "Windows 11 Home",
        WLAN: "Intel® Killer™ Wi-Fi 6E AX1675(i)",
        keyboard: "Per key RGB Keyboard",
        battery: " 4 cell, 90Whr",
        carryBag: "MSI Topload Bag_Grey",
        warranty: "2 Years Parts & 3 years Service",
      },
    ],
  },
  {
    id: 7,
    img: razorblade17,
    title: "Razor Blade 17 (RTX 3070Ti, GDDR6 8GB) Laptop (I9-12th Gen)",
    freeGift: "MSI Original Mouse",
    originalPrice: 3399,
    dealPrice: 2299.99,
    Specs: [
      {
        id: 11,
        model: "Razor Blade 17",
        display: `17.3" 240 Hz QHD`,
        cpu: "Intel Core i9-12900H",
        memory: "16 GB 4800 MHz",
        storage: "1TB NVMe PCIe Gen4x4 SSD",
        gpu: " GeForce RTX 3070 Ti GDDR6 8GB",
        OS: "Windows 11 Home",
        WLAN: "Intel® Killer™ Wi-Fi 6E AX1675(i)",
        keyboard: "Per key RGB Keyboard",
        battery: " 4 cell, 90Whr",
        carryBag: "MSI Topload Bag_Grey",
        warranty: "2 Years Parts & 3 years Service",
      },
    ],
  },
  {
    id: 8,
    img: razorblade17,
    title: "Razor Blade 17 (RTX 3070Ti, GDDR6 8GB) Laptop (I9-12th Gen)",
    freeGift: "MSI Original Mouse",
    originalPrice: 3399,
    dealPrice: 2299.99,
    Specs: [
      {
        id: 11,
        model: "Razor Blade 17",
        display: `17.3" 240 Hz QHD`,
        cpu: "Intel Core i9-12900H",
        memory: "16 GB 4800 MHz",
        storage: "1TB NVMe PCIe Gen4x4 SSD",
        gpu: " GeForce RTX 3070 Ti GDDR6 8GB",
        OS: "Windows 11 Home",
        WLAN: "Intel® Killer™ Wi-Fi 6E AX1675(i)",
        keyboard: "Per key RGB Keyboard",
        battery: " 4 cell, 90Whr",
        carryBag: "MSI Topload Bag_Grey",
        warranty: "2 Years Parts & 3 years Service",
      },
    ],
  },
];

import rtx4060ti from "../assets/homeImgs/newProducts/msi_4060ti.png";

export const newProducts = [
  {
    id: 1,
    title: "Geforce RTX 4060ti Gaming X Slim 16GB",
    img: rtx4060ti,
    specs: [
      {
        vram: "16GB GDDR6",
        baseClock: "2310 MHZ",
        boostClock: "2535 MHZ",
        memoryClock: "2250 Mhz / 18Gbps",
        recommendedPSU: "500W",
        outputs: "1x HDMI 2.1, 3x DisplayPort 1.4a",
      },
    ],
  },
  {
    id: 2,
    title: "Geforce RTX 4070ti Gaming X Trio White 12GB",
    img: rtx4060ti,
    specs: [
      {
        vram: "12GB GDDR6X",
        baseClock: "2310 MHZ",
        boostClock: "2610 MHZ",
        memoryClock: "1313 Mhz / 21Gbps",
        recommendedPSU: "750W",
        outputs: "1x HDMI 2.1, 3x DisplayPort 1.4a",
      },
    ],
  },
];
