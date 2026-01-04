const products = [
  {
    id: 1,
    title: "Smart Phone",
    price: 2499,
    rating: "★★★★☆ (1,234)",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Laptop ASUS",
    price: 49999,
    rating: "★★★★★ (512)",
    image:
      "https://images.unsplash.com/photo-1593642532400-2682810df593?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Makeup Box",
    price: 1799,
    rating: "★★★★☆ (876)",
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Smart Watch — Fitness",
    price: 6299,
    rating: "★★★★☆ (2,345)",
    image:
      "https://images.unsplash.com/photo-1491897554428-130a60dd4757?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Portable Chair",
    price: 3199,
    rating: "★★★★★ (1,678)",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Gaming Mouse",
    price: 2099,
    rating: "★★★★☆ (945)",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Wireless Charger",
    price: 1299,
    rating: "★★★★☆ (1,234)",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Fitness Tracker",
    price: 4499,
    rating: "★★★★★ (2,012)",
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 9,
    title: "Laptop Stand",
    price: 1299,
    rating: "★★★★☆ (756)",
    image:
      "https://images.unsplash.com/photo-1585386959984-a41552231693?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 10,
    title: "Android Smartphone — 128GB",
    price: 14999,
    rating: "★★★★★ (3,456)",
    image:
      "https://images.unsplash.com/photo-1541503547571-2bb38f4a1e1d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 11,
    title: "Noise Cancelling Earbuds",
    price: 2899,
    rating: "★★★★☆ (1,289)",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 12,
    title: "Mechanical Keyboard",
    price: 3599,
    rating: "★★★★☆ (2,001)",
    image:
      "https://images.unsplash.com/photo-1580894894513-4b27e5c9e6bb?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 13,
    title: "Thin & Light Laptop",
    price: 54999,
    rating: "★★★★★ (4,789)",
    image:
      "https://images.unsplash.com/photo-1593642532400-2682810df593?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 14,
    title: "10000mAh Power Bank",
    price: 999,
    rating: "★★★★☆ (812)",
    image:
      "https://images.unsplash.com/photo-1539885111038-84654e2f208e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 15,
    title: "DSLR Camera — 24MP",
    price: 28499,
    rating: "★★★★★ (1,112)",
    image:
      "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=800&auto=format&fit=crop",
  },
  // — Added new products —
  {
    id: 16,
    title: "Bluetooth Speaker",
    price: 2199,
    rating: "★★★★☆ (1,502)",
    image:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 17,
    title: "LED Desk Lamp",
    price: 1299,
    rating: "★★★★☆ (623)",
    image:
      "https://images.unsplash.com/photo-1582719478146-d7e4e6f11685?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 18,
    title: "Smart Thermostat",
    price: 7499,
    rating: "★★★★★ (856)",
    image:
      "https://images.unsplash.com/photo-1580894908361-d7b1c6e7c3da?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 19,
    title: "Portable Projector",
    price: 13499,
    rating: "★★★★☆ (1,145)",
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c4431c5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 20,
    title: "Electric Kettle",
    price: 999,
    rating: "★★★★☆ (978)",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e83f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 21,
    title: "Air Purifier",
    price: 8999,
    rating: "★★★★★ (1,234)",
    image:
      "https://images.unsplash.com/photo-1582719478105-2b37227b6b49?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 22,
    title: "VR Headset",
    price: 15999,
    rating: "★★★★☆ (789)",
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 23,
    title: "Smart Door Lock",
    price: 6999,
    rating: "★★★★★ (643)",
    image:
      "https://images.unsplash.com/photo-1598032895953-094f6f98c22f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 24,
    title: "Digital Camera Lens",
    price: 13499,
    rating: "★★★★☆ (321)",
    image:
      "https://images.unsplash.com/photo-1519183071298-a2962a1070b7?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 25,
    title: "Portable Hard Drive — 2TB",
    price: 4999,
    rating: "★★★★☆ (1,054)",
    image:
      "https://images.unsplash.com/photo-1587825140708-36de5e0efefc?q=80&w=800&auto=format&fit=crop",
  },
];

export default products;
