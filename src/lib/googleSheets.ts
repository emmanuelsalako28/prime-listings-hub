// Google Sheets API Service
// This fetches data from your published Google Apps Script web app

import { House, Land, Car } from '@/data/listings';

const SHEETS_API_URL = "https://script.google.com/macros/s/AKfycbwKF7wa4t5RUJTx8BKfOT3atV_lLreG460idjNjTZf0wVlY1_7xUh-equ7bY0WrzeIUTQ/exec";

interface SheetsResponse {
  houses: House[];
  lands: Land[];
  cars: Car[];
}

export async function fetchAllListings(): Promise<SheetsResponse> {
  try {
    const response = await fetch(SHEETS_API_URL, {
      method: 'GET',
      redirect: 'follow',
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch listings: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Fetched data from Google Sheets:', data);
    
    // Handle both formats: { houses, lands, cars } or { listings: [...] }
    if (data.listings) {
      const houses = data.listings.filter((item: any) => item.type === 'house');
      const lands = data.listings.filter((item: any) => item.type === 'land');
      const cars = data.listings.filter((item: any) => item.type === 'car');
      return { houses, lands, cars };
    }
    
    return {
      houses: data.houses || [],
      lands: data.lands || [],
      cars: data.cars || [],
    };
  } catch (error) {
    console.error('Error fetching from Google Sheets:', error);
    return { houses: [], lands: [], cars: [] };
  }
}

export async function fetchHouses(): Promise<House[]> {
  const data = await fetchAllListings();
  return data.houses.map(h => ({ ...h, type: 'house' as const }));
}

export async function fetchLands(): Promise<Land[]> {
  const data = await fetchAllListings();
  return data.lands.map(l => ({ ...l, type: 'land' as const }));
}

export async function fetchCars(): Promise<Car[]> {
  const data = await fetchAllListings();
  return data.cars.map(c => ({ ...c, type: 'car' as const }));
}
