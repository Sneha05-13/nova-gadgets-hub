export type Product = {
  id: string;
  name: string;
  brand: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  colors: string[];
  storage: string[];
  tagline: string;
  specs: { label: string; value: string }[];
  badge?: string;
};

export const brands = [
  "All",
  "Apple",
  "Samsung",
  "OnePlus",
  "Xiaomi",
  "Vivo",
  "Oppo",
  "Realme",
  "Nothing",
  "Google",
];

export const products: Product[] = [
  {
    id: "iphone-16-pro",
    name: "iPhone 16 Pro",
    brand: "Apple",
    price: 1199,
    oldPrice: 1299,
    rating: 4.9,
    reviews: 2418,
    colors: ["#1f2024", "#e8e1d4", "#3a3a3c", "#bfa48f"],
    storage: ["128GB", "256GB", "512GB", "1TB"],
    tagline: "Forged in titanium. Powered by A18 Pro.",
    specs: [
      { label: "Display", value: "6.3\" Super Retina XDR" },
      { label: "Chip", value: "A18 Pro" },
      { label: "Camera", value: "48MP Fusion" },
      { label: "Battery", value: "27h video" },
    ],
    badge: "New",
  },
  {
    id: "galaxy-s25-ultra",
    name: "Galaxy S25 Ultra",
    brand: "Samsung",
    price: 1299,
    rating: 4.8,
    reviews: 1820,
    colors: ["#1a1a1f", "#7d7d85", "#3b4258", "#bba38a"],
    storage: ["256GB", "512GB", "1TB"],
    tagline: "Galactic intelligence in your hand.",
    specs: [
      { label: "Display", value: "6.9\" QHD+ Dynamic AMOLED" },
      { label: "Chip", value: "Snapdragon 8 Gen 4" },
      { label: "Camera", value: "200MP Quad" },
      { label: "Battery", value: "5000 mAh" },
    ],
  },
  {
    id: "pixel-9-pro",
    name: "Pixel 9 Pro",
    brand: "Google",
    price: 999,
    rating: 4.7,
    reviews: 940,
    colors: ["#0e1a2b", "#e6e2d8", "#2a4032"],
    storage: ["128GB", "256GB", "512GB"],
    tagline: "Computational photography, perfected.",
    specs: [
      { label: "Display", value: "6.3\" LTPO OLED" },
      { label: "Chip", value: "Tensor G4" },
      { label: "Camera", value: "50MP Triple" },
      { label: "Battery", value: "4700 mAh" },
    ],
    badge: "Editor's Pick",
  },
  {
    id: "nothing-phone-3",
    name: "Nothing Phone (3)",
    brand: "Nothing",
    price: 749,
    rating: 4.7,
    reviews: 612,
    colors: ["#0a0a0a", "#f2f2f2"],
    storage: ["128GB", "256GB"],
    tagline: "Transparent design. Glyph intelligence.",
    specs: [
      { label: "Display", value: "6.7\" LTPO AMOLED" },
      { label: "Chip", value: "Snapdragon 8s Gen 3" },
      { label: "Camera", value: "50MP Dual" },
      { label: "Battery", value: "5000 mAh" },
    ],
  },
  {
    id: "oneplus-13",
    name: "OnePlus 13",
    brand: "OnePlus",
    price: 899,
    oldPrice: 999,
    rating: 4.6,
    reviews: 488,
    colors: ["#0d1b2a", "#0e3a2a", "#e8e8e8"],
    storage: ["256GB", "512GB", "1TB"],
    tagline: "Never settle, always faster.",
    specs: [
      { label: "Display", value: "6.82\" LTPO AMOLED" },
      { label: "Chip", value: "Snapdragon 8 Elite" },
      { label: "Camera", value: "Hasselblad Triple 50MP" },
      { label: "Battery", value: "6000 mAh" },
    ],
    badge: "-10%",
  },
  {
    id: "xiaomi-15-ultra",
    name: "Xiaomi 15 Ultra",
    brand: "Xiaomi",
    price: 1099,
    rating: 4.7,
    reviews: 720,
    colors: ["#0a0a0a", "#dcd0c0"],
    storage: ["256GB", "512GB", "1TB"],
    tagline: "Leica optics. Ultra everything.",
    specs: [
      { label: "Display", value: "6.73\" WQHD+ AMOLED" },
      { label: "Chip", value: "Snapdragon 8 Elite" },
      { label: "Camera", value: "Leica Quad 50MP" },
      { label: "Battery", value: "5400 mAh" },
    ],
  },
  {
    id: "vivo-x200-pro",
    name: "Vivo X200 Pro",
    brand: "Vivo",
    price: 949,
    rating: 4.6,
    reviews: 312,
    colors: ["#0c0c0c", "#1a2940"],
    storage: ["256GB", "512GB"],
    tagline: "Zeiss imaging, cinematic clarity.",
    specs: [
      { label: "Display", value: "6.78\" LTPO AMOLED" },
      { label: "Chip", value: "Dimensity 9400" },
      { label: "Camera", value: "Zeiss Triple 50MP" },
      { label: "Battery", value: "6000 mAh" },
    ],
  },
  {
    id: "oppo-find-x8-pro",
    name: "Oppo Find X8 Pro",
    brand: "Oppo",
    price: 899,
    rating: 4.5,
    reviews: 268,
    colors: ["#0d0d0d", "#2a3447"],
    storage: ["256GB", "512GB"],
    tagline: "Foldable flagship engineering.",
    specs: [
      { label: "Display", value: "6.78\" LTPO AMOLED" },
      { label: "Chip", value: "Dimensity 9400" },
      { label: "Camera", value: "Hasselblad Quad 50MP" },
      { label: "Battery", value: "5910 mAh" },
    ],
  },
  {
    id: "realme-gt7-pro",
    name: "Realme GT7 Pro",
    brand: "Realme",
    price: 649,
    oldPrice: 749,
    rating: 4.5,
    reviews: 410,
    colors: ["#0d0d0d", "#cfd5dc"],
    storage: ["256GB", "512GB"],
    tagline: "Speed beyond measure.",
    specs: [
      { label: "Display", value: "6.78\" LTPO AMOLED" },
      { label: "Chip", value: "Snapdragon 8 Elite" },
      { label: "Camera", value: "Sony LYT-808 50MP" },
      { label: "Battery", value: "6500 mAh" },
    ],
    badge: "Flash",
  },
];

export const orders = [
  {
    id: "AUR-10248",
    date: "Apr 28, 2026",
    status: "Delivered",
    total: 1199,
    items: [{ id: "iphone-16-pro", qty: 1 }],
    timeline: [
      { label: "Ordered", at: "Apr 24, 09:12" },
      { label: "Packed", at: "Apr 24, 14:30" },
      { label: "Shipped", at: "Apr 25, 08:00" },
      { label: "Out for delivery", at: "Apr 28, 09:45" },
      { label: "Delivered", at: "Apr 28, 13:22" },
    ],
  },
  {
    id: "AUR-10301",
    date: "May 09, 2026",
    status: "In transit",
    total: 749,
    items: [{ id: "nothing-phone-3", qty: 1 }],
    timeline: [
      { label: "Ordered", at: "May 09, 10:01" },
      { label: "Packed", at: "May 09, 17:55" },
      { label: "Shipped", at: "May 10, 07:20" },
      { label: "Out for delivery", at: "—" },
      { label: "Delivered", at: "—" },
    ],
  },
  {
    id: "AUR-10355",
    date: "May 15, 2026",
    status: "Processing",
    total: 1299,
    items: [{ id: "galaxy-s25-ultra", qty: 1 }],
    timeline: [
      { label: "Ordered", at: "May 15, 21:08" },
      { label: "Packed", at: "—" },
      { label: "Shipped", at: "—" },
      { label: "Out for delivery", at: "—" },
      { label: "Delivered", at: "—" },
    ],
  },
];

export const adminOrders = [
  { id: "AUR-10398", customer: "Mira Chen", total: 1199, status: "Paid", date: "May 16" },
  { id: "AUR-10397", customer: "J. Okafor", total: 749, status: "Shipped", date: "May 16" },
  { id: "AUR-10396", customer: "L. Rinaldi", total: 1299, status: "Refunded", date: "May 15" },
  { id: "AUR-10395", customer: "S. Aoki", total: 999, status: "Paid", date: "May 15" },
  { id: "AUR-10394", customer: "P. Kovac", total: 649, status: "Pending", date: "May 14" },
  { id: "AUR-10393", customer: "N. Vasquez", total: 899, status: "Paid", date: "May 14" },
  { id: "AUR-10392", customer: "Y. Tanaka", total: 1099, status: "Shipped", date: "May 13" },
];

export const adminUsers = [
  { id: "U-2418", name: "Mira Chen", email: "mira@aura.io", orders: 12, joined: "2024-03-12", tier: "Black" },
  { id: "U-2419", name: "Jide Okafor", email: "jide@aura.io", orders: 4, joined: "2025-01-04", tier: "Silver" },
  { id: "U-2420", name: "Lina Rinaldi", email: "lina@aura.io", orders: 9, joined: "2024-08-22", tier: "Gold" },
  { id: "U-2421", name: "Soma Aoki", email: "soma@aura.io", orders: 2, joined: "2025-09-11", tier: "Silver" },
  { id: "U-2422", name: "Petra Kovac", email: "petra@aura.io", orders: 6, joined: "2025-02-18", tier: "Gold" },
];

export const coupons = [
  { code: "AURA10", discount: "10%", uses: 1241, expires: "Jun 30, 2026", status: "Active" },
  { code: "FLASH50", discount: "$50", uses: 320, expires: "May 31, 2026", status: "Active" },
  { code: "TITAN200", discount: "$200", uses: 88, expires: "Jul 12, 2026", status: "Paused" },
];

export const banners = [
  { id: "B-01", title: "iPhone 16 Pro launch", placement: "Hero", status: "Live" },
  { id: "B-02", title: "Galaxy S25 trade-in", placement: "Mid-page", status: "Live" },
  { id: "B-03", title: "Nothing summer drop", placement: "Footer", status: "Draft" },
];

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
