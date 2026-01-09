// Google Sheets API Service
// This fetches data from your published Google Apps Script web app

const SHEETS_API_URL = "https://script.google.com/macros/s/AKfycbwRq-7wIKRyZBzTWDvqzz88ujBuUyRuDIzuL_DBtxsRHtFbtdb-y4Ou9IfXOQrCwcQ-BQ/exec";

export interface SheetListing {
  id: string;
  type: 'house' | 'land' | 'car';
  title: string;
  price: string;
  priceValue: number;
  location: string;
  images: string[];
  description: string;
  // House specific
  bedrooms?: number;
  bathrooms?: number;
  size?: string;
  features?: string[];
  // Land specific
  status?: string;
  documentation?: string;
  // Car specific
  brand?: string;
  model?: string;
  year?: number;
  mileage?: string;
  condition?: 'New' | 'Used' | 'Foreign Used';
  specifications?: string[];
}

export async function fetchListingsFromSheets(): Promise<SheetListing[]> {
  try {
    const response = await fetch(SHEETS_API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch listings from Google Sheets');
    }
    const data = await response.json();
    return data.listings || [];
  } catch (error) {
    console.error('Error fetching from Google Sheets:', error);
    return [];
  }
}

export async function fetchHousesFromSheets() {
  const listings = await fetchListingsFromSheets();
  return listings.filter(l => l.type === 'house');
}

export async function fetchLandsFromSheets() {
  const listings = await fetchListingsFromSheets();
  return listings.filter(l => l.type === 'land');
}

export async function fetchCarsFromSheets() {
  const listings = await fetchListingsFromSheets();
  return listings.filter(l => l.type === 'car');
}
