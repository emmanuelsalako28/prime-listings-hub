// Mock data for listings

export interface House {
  id: string;
  title: string;
  price: string;
  priceValue: number;
  location: string;
  size: string;
  bedrooms: number;
  bathrooms: number;
  images: string[];
  features: string[];
  description: string;
  type: 'house';
}

export interface Land {
  id: string;
  title: string;
  price: string;
  priceValue: number;
  location: string;
  size: string;
  status: string;
  documentation: string;
  images: string[];
  description: string;
  type: 'land';
}

export interface Car {
  id: string;
  title: string;
  brand: string;
  model: string;
  year: number;
  price: string;
  priceValue: number;
  mileage: string;
  condition: 'New' | 'Used' | 'Foreign Used';
  images: string[];
  specifications: string[];
  description: string;
  type: 'car';
}

export const houses: House[] = [
  {
    id: 'house-1',
    title: 'Beautifully Finished 5-Bedroom Detached Duplex',
    price: '₦1,000,000,000',
    priceValue: 1000000000,
    location: 'Lekki Phase 1, Lagos State',
    size: '600sqm',
    bedrooms: 5,
    bathrooms: 6,
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
    ],
    features: [
      'Tasteful finishing',
      'Ample car park',
      'Swimming pool',
      'Modern lighting',
      'Spacious living area',
      'Family lounge',
      'Balcony',
      'Fully fitted kitchen',
      'All rooms en-suite',
      "Boys' quarters (BQ)",
      'Fitted wardrobes',
      'Luxury sanitary wares',
      'Secure neighborhood',
    ],
    description: 'This exquisite 5-bedroom detached duplex offers the perfect blend of luxury and comfort. Located in the prestigious Lekki Phase 1, Lagos State, this property features tasteful finishing throughout, modern amenities, and a serene environment perfect for families.',
    type: 'house',
  },
  {
    id: 'house-2',
    title: 'Modern 4-Bedroom Semi-Detached Duplex',
    price: '₦350,000,000',
    priceValue: 350000000,
    location: 'Ikoyi, Lagos State',
    size: '450sqm',
    bedrooms: 4,
    bathrooms: 5,
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
    ],
    features: [
      'Contemporary design',
      '24/7 security',
      'Smart home features',
      'Spacious rooms',
      'Modern kitchen',
      'Guest toilet',
      'Parking for 3 cars',
    ],
    description: 'A stunning semi-detached duplex with contemporary architecture in the heart of Ikoyi, Lagos State. Perfect for modern families seeking style and convenience.',
    type: 'house',
  },
  {
    id: 'house-3',
    title: 'Luxury 6-Bedroom Mansion with Pool',
    price: '₦2,500,000,000',
    priceValue: 2500000000,
    location: 'Banana Island, Lagos State',
    size: '1200sqm',
    bedrooms: 6,
    bathrooms: 8,
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800',
    ],
    features: [
      'Olympic-size pool',
      'Cinema room',
      'Gym',
      'Wine cellar',
      'Elevator',
      "Staff quarters",
      'Generator house',
      'Waterfront view',
    ],
    description: 'An ultra-luxury mansion on the exclusive Banana Island, Lagos State. This architectural masterpiece offers unparalleled luxury living with world-class amenities.',
    type: 'house',
  },
  {
    id: 'house-4',
    title: 'Charming 3-Bedroom Bungalow',
    price: '₦85,000,000',
    priceValue: 85000000,
    location: 'Gwarinpa, Abuja FCT',
    size: '350sqm',
    bedrooms: 3,
    bathrooms: 3,
    images: [
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800',
    ],
    features: [
      'Fenced compound',
      'All rooms en-suite',
      'Modern finishing',
      'Parking space',
      'Gated estate',
    ],
    description: 'A well-finished 3-bedroom bungalow in a secure estate in Gwarinpa, Abuja. Ideal for small families or first-time homeowners.',
    type: 'house',
  },
];

export const lands: Land[] = [
  {
    id: 'land-1',
    title: 'Prime 1000sqm Land in Lekki',
    price: '₦250,000,000',
    priceValue: 250000000,
    location: 'Lekki Phase 2, Lagos State',
    size: '1000sqm',
    status: 'Dry Land, Fenced',
    documentation: 'C of O',
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
    ],
    description: 'A prime piece of dry land in the fast-developing Lekki Phase 2 area, Lagos State. Fully fenced with valid Certificate of Occupancy.',
    type: 'land',
  },
  {
    id: 'land-2',
    title: 'Beachfront Land - 2 Plots',
    price: '₦500,000,000',
    priceValue: 500000000,
    location: 'Ilashe Beach, Lagos State',
    size: '1200sqm',
    status: 'Beachfront, Cleared',
    documentation: 'Governors Consent',
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    ],
    description: 'Rare beachfront land opportunity in Lagos State. Perfect for resort development or private beach house.',
    type: 'land',
  },
  {
    id: 'land-3',
    title: 'Commercial Land at Maitama',
    price: '₦1,200,000,000',
    priceValue: 1200000000,
    location: 'Maitama, Abuja FCT',
    size: '2000sqm',
    status: 'Corner Piece, Cleared',
    documentation: 'C of O',
    images: [
      'https://images.unsplash.com/photo-1494526585095-c41746248156?w=800',
    ],
    description: 'Premium commercial land in Maitama, Abuja. Ideal for office complex or mixed-use development.',
    type: 'land',
  },
  {
    id: 'land-4',
    title: 'Affordable Plot in Ibeju-Lekki',
    price: '₦15,000,000',
    priceValue: 15000000,
    location: 'Ibeju-Lekki, Lagos State',
    size: '600sqm',
    status: 'Dry Land',
    documentation: 'Gazette',
    images: [
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800',
    ],
    description: 'Affordable investment opportunity in the Lagos Free Trade Zone corridor, Lagos State. High appreciation potential.',
    type: 'land',
  },
];

export const cars: Car[] = [
  {
    id: 'car-1',
    title: '2024 Mercedes-Benz GLE 450',
    brand: 'Mercedes-Benz',
    model: 'GLE 450',
    year: 2024,
    price: '₦150,000,000',
    priceValue: 150000000,
    mileage: '0 km',
    condition: 'New',
    images: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800',
    ],
    specifications: [
      '3.0L V6 Turbo Engine',
      'All-Wheel Drive',
      'Panoramic Sunroof',
      'Premium Sound System',
      'Leather Interior',
      'Navigation System',
    ],
    description: 'Brand new 2024 Mercedes-Benz GLE 450 with full manufacturer warranty. Luxury SUV with all premium features.',
    type: 'car',
  },
  {
    id: 'car-2',
    title: '2022 Toyota Land Cruiser Prado',
    brand: 'Toyota',
    model: 'Land Cruiser Prado',
    year: 2022,
    price: '₦85,000,000',
    priceValue: 85000000,
    mileage: '15,000 km',
    condition: 'Foreign Used',
    images: [
      'https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=800',
    ],
    specifications: [
      '4.0L V6 Engine',
      'Four-Wheel Drive',
      '7 Seater',
      'Leather Seats',
      'Reverse Camera',
      'Keyless Entry',
    ],
    description: 'Pristine condition Toyota Land Cruiser Prado. Foreign used with complete documentation and service history.',
    type: 'car',
  },
  {
    id: 'car-3',
    title: '2023 Range Rover Sport',
    brand: 'Land Rover',
    model: 'Range Rover Sport',
    year: 2023,
    price: '₦250,000,000',
    priceValue: 250000000,
    mileage: '5,000 km',
    condition: 'Foreign Used',
    images: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800',
    ],
    specifications: [
      '3.0L Inline-6 Turbo',
      'Dynamic Response Pro',
      'Meridian Sound System',
      'Air Suspension',
      'Matrix LED Headlights',
      '22-inch Wheels',
    ],
    description: 'Stunning Range Rover Sport in immaculate condition. A perfect blend of luxury, performance, and capability.',
    type: 'car',
  },
  {
    id: 'car-4',
    title: '2021 Honda Accord',
    brand: 'Honda',
    model: 'Accord',
    year: 2021,
    price: '₦25,000,000',
    priceValue: 25000000,
    mileage: '30,000 km',
    condition: 'Foreign Used',
    images: [
      'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800',
    ],
    specifications: [
      '1.5L Turbo Engine',
      'CVT Transmission',
      'Apple CarPlay',
      'Honda Sensing Suite',
      'Dual Zone Climate',
    ],
    description: 'Well-maintained Honda Accord with low mileage. Reliable, fuel-efficient, and packed with modern features.',
    type: 'car',
  },
];

export const allListings = [...houses, ...lands, ...cars];
