import { 
  Bed, 
  Activity, 
  Pill, 
  Stethoscope, 
  Shirt, 
  BookOpen, 
  Sofa, 
  Laptop, 
  Gamepad2, 
  Utensils, 
  ShoppingBasket, 
  Baby, 
  Pencil, 
  Moon, 
  Package 
} from 'lucide-react';

export const CATEGORIES = [
  { id: 'hospital_beds', name: 'Hospital Beds', icon: Bed, color: '#3b82f6' },
  { id: 'wheelchairs', name: 'Wheelchairs', icon: Activity, color: '#8b5cf6' },
  { id: 'medicines', name: 'Medicines (Unused & Valid)', icon: Pill, color: '#f59e0b' },
  { id: 'medical_equipment', name: 'Medical Equipment', icon: Stethoscope, color: '#ef4444' },
  { id: 'clothes', name: 'Clothes', icon: Shirt, color: '#ec4899' },
  { id: 'books', name: 'Books', icon: BookOpen, color: '#10b981' },
  { id: 'furniture', name: 'Furniture', icon: Sofa, color: '#f97316' },
  { id: 'electronics', name: 'Electronics', icon: Laptop, color: '#6366f1' },
  { id: 'toys', name: 'Toys', icon: Gamepad2, color: '#eab308' },
  { id: 'kitchen', name: 'Kitchen Essentials', icon: Utensils, color: '#14b8a6' },
  { id: 'grocery', name: 'Grocery & Food Supplies', icon: ShoppingBasket, color: '#84cc16' },
  { id: 'baby_care', name: 'Baby Care Items', icon: Baby, color: '#f472b6' },
  { id: 'school', name: 'School Supplies', icon: Pencil, color: '#0ea5e9' },
  { id: 'bedding', name: 'Blankets & Bedding', icon: Moon, color: '#64748b' },
  { id: 'others', name: 'Other Useful Items', icon: Package, color: '#6b7280' },
];

export const DUMMY_PRODUCTS = [
  { 
    id: 1, 
    title: 'Vintage Leather Jacket', 
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', 
    location: 'Downtown', 
    category: 'Clothes',
    condition: 'Used',
    description: 'Beautiful vintage leather jacket from the 80s. Genuine leather, well-maintained. Has a small scuff on the right sleeve but otherwise in perfect condition. Great for autumn weather. Free to a good home.',
    donor: { name: 'Alex Johnson', rating: 4.8, joined: 'Member since 2023' },
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520975954732-57dd22299614?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ]
  },
  { 
    id: 2, 
    title: 'Wheelchair in Good Condition', 
    image: 'https://plus.unsplash.com/premium_photo-1663047240391-f9250567e7c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', 
    location: 'Westside', 
    category: 'Wheelchairs',
    condition: 'Good',
    description: 'Manual wheelchair, folds easily for transport. Gently used for a few months. Donating it since it is no longer needed.',
    donor: { name: 'Sam Smith', rating: 5.0, joined: 'Member since 2024' },
    images: [
      'https://plus.unsplash.com/premium_photo-1663047240391-f9250567e7c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ]
  },
  { 
    id: 3, 
    title: 'Wooden Coffee Table', 
    image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', 
    location: 'North Area', 
    category: 'Furniture',
    condition: 'Used',
    description: 'Handcrafted solid oak coffee table. Dimensions: 40x20x18 inches. Minor wear and tear on the edges, adds to the rustic look. Free to whoever can pick it up.',
    donor: { name: 'Woodworks Co.', rating: 4.7, joined: 'Member since 2022' },
    images: [
      'https://images.unsplash.com/photo-1532372320572-cda25653a26d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1577140917170-285929fb55b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ]
  },
  { 
    id: 4, 
    title: 'Box of Children\'s Books', 
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', 
    location: 'Eastside', 
    category: 'Books',
    condition: 'Good',
    description: 'A large box filled with educational books and stories for children aged 5-10. All in great readable condition.',
    donor: { name: 'Chris Lee', rating: 4.9, joined: 'Member since 2023' },
    images: [
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ]
  }
];
