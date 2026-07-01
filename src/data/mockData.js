import { BookOpen, Laptop, Sofa, Shirt, Trophy, Wrench, Package } from 'lucide-react';

export const CATEGORIES = [
  { id: 'books', name: 'Books', icon: BookOpen, color: '#3b82f6' },
  { id: 'electronics', name: 'Electronics', icon: Laptop, color: '#8b5cf6' },
  { id: 'furniture', name: 'Furniture', icon: Sofa, color: '#f59e0b' },
  { id: 'clothes', name: 'Clothes', icon: Shirt, color: '#ec4899' },
  { id: 'sports', name: 'Sports', icon: Trophy, color: '#10b981' },
  { id: 'tools', name: 'Tools', icon: Wrench, color: '#64748b' },
  { id: 'others', name: 'Others', icon: Package, color: '#f43f5e' },
];

export const DUMMY_PRODUCTS = [
  { 
    id: 1, 
    title: 'Vintage Leather Jacket', 
    price: 45, 
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', 
    location: 'Downtown', 
    category: 'Clothes',
    description: 'Beautiful vintage leather jacket from the 80s. Genuine leather, well-maintained. Has a small scuff on the right sleeve but otherwise in perfect condition. Great for autumn weather.',
    seller: { name: 'Alex Johnson', rating: 4.8, joined: 'Member since 2023' },
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520975954732-57dd22299614?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ]
  },
  { 
    id: 2, 
    title: 'MacBook Pro 2021', 
    price: 950, 
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', 
    location: 'Westside', 
    category: 'Electronics',
    description: 'MacBook Pro 2021 with M1 Pro chip. 16GB RAM, 512GB SSD. Perfect condition, used only for web development. Battery cycle count is under 150.',
    seller: { name: 'Sam Smith', rating: 5.0, joined: 'Member since 2024' },
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ]
  },
  { 
    id: 3, 
    title: 'Wooden Coffee Table', 
    price: 120, 
    image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', 
    location: 'North Area', 
    category: 'Furniture',
    description: 'Handcrafted solid oak coffee table. Dimensions: 40x20x18 inches. Minor wear and tear on the edges, adds to the rustic look.',
    seller: { name: 'Woodworks Co.', rating: 4.7, joined: 'Member since 2022' },
    images: [
      'https://images.unsplash.com/photo-1532372320572-cda25653a26d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1577140917170-285929fb55b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ]
  },
  { 
    id: 4, 
    title: 'Mountain Bike', 
    price: 250, 
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', 
    location: 'Eastside', 
    category: 'Sports',
    description: '21-speed mountain bike. Just serviced, new brake pads and tires. Ready for the trails! Selling because I upgraded.',
    seller: { name: 'Chris Lee', rating: 4.9, joined: 'Member since 2023' },
    images: [
      'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ]
  }
];
