export type Category = "electronics" | "clothing" | "home";

export type Product = {
  id: string;
  title: string;
  price: number;
  category: Category;
  brand: string;
  image: string;
  rating: number;
  description: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: "running-shoes",
    title: "Running Shoes",
    price: 99,
    category: "clothing",
    brand: "Nova",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80&auto=format&fit=crop",
    rating: 4.3,
    description:
      "Lightweight running shoes with breathable mesh upper and cushioned sole, built for daily training.",
  },
  {
    id: "wireless-headphones",
    title: "Wireless Headphones",
    price: 89,
    category: "electronics",
    brand: "Sonic",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80&auto=format&fit=crop",
    rating: 4.5,
    description:
      "Over-ear wireless headphones with active noise cancellation and 30-hour battery life.",
  },
  {
    id: "backpack",
    title: "Backpack",
    price: 129,
    category: "home",
    brand: "Urban",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80&auto=format&fit=crop",
    rating: 4.1,
    description:
      "Durable everyday backpack with padded laptop compartment and water-resistant fabric.",
  },
  {
    id: "smartwatch",
    title: "Smartwatch",
    price: 249,
    category: "electronics",
    brand: "Pulse",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80&auto=format&fit=crop",
    rating: 4.6,
    description:
      "Fitness smartwatch with heart-rate tracking, GPS, and a week-long battery life.",
  },
  {
    id: "sunglasses",
    title: "Sunglasses",
    price: 149,
    category: "clothing",
    brand: "Nova",
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80&auto=format&fit=crop",
    rating: 4.0,
    description:
      "Polarized UV-protection sunglasses with a lightweight acetate frame.",
  },
  {
    id: "digital-camera",
    title: "Digital Camera",
    price: 499,
    category: "electronics",
    brand: "Lumen",
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&q=80&auto=format&fit=crop",
    rating: 4.7,
    description:
      "Mirrorless digital camera with 24MP sensor, 4K video, and interchangeable lenses.",
  },
  {
    id: "t-shirt",
    title: "T-shirt",
    price: 29,
    category: "clothing",
    brand: "Basics",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80&auto=format&fit=crop",
    rating: 4.2,
    description: "Soft cotton crew-neck t-shirt, available in multiple colors.",
  },
  {
    id: "smartphone",
    title: "Smartphone",
    price: 699,
    category: "electronics",
    brand: "Pulse",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80&auto=format&fit=crop",
    rating: 4.4,
    description:
      "Lorem ipsum dolor amet, consectetur euisagend.",
    featured: true,
  },
  {
    id: "desk-lamp",
    title: "Desk Lamp",
    price: 39,
    category: "home",
    brand: "Urban",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80&auto=format&fit=crop",
    rating: 4.0,
    description: "Adjustable LED desk lamp with three brightness levels and USB charging port.",
  },
  {
    id: "coffee-maker",
    title: "Coffee Maker",
    price: 79,
    category: "home",
    brand: "Basics",
    image:
      "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=600&q=80&auto=format&fit=crop",
    rating: 4.3,
    description: "Programmable drip coffee maker with a 12-cup glass carafe.",
  },
  {
    id: "hoodie",
    title: "Hoodie",
    price: 59,
    category: "clothing",
    brand: "Basics",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80&auto=format&fit=crop",
    rating: 4.5,
    description: "Fleece-lined pullover hoodie with a relaxed fit.",
  },
  {
    id: "bluetooth-speaker",
    title: "Bluetooth Speaker",
    price: 59,
    category: "electronics",
    brand: "Sonic",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80&auto=format&fit=crop",
    rating: 4.2,
    description: "Portable waterproof speaker with 12 hours of playback.",
  },
];

export const categories: { label: string; value: Category | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Electronics", value: "electronics" },
  { label: "Clothing", value: "clothing" },
  { label: "Home", value: "home" },
];

export const brands = Array.from(new Set(products.map((p) => p.brand))).sort();

export const PRICE_MIN = 0;
export const PRICE_MAX = 1000;
