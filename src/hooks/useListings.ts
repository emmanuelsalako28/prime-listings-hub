import { useState, useEffect, useCallback } from 'react';
import { fetchHouses, fetchLands, fetchCars } from '@/lib/googleSheets';
import { House, Land, Car } from '@/data/listings';

const REFRESH_INTERVAL = 30000; // Refresh every 30 seconds

export function useHouses() {
  const [houses, setHouses] = useState<House[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const data = await fetchHouses();
      setHouses(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching houses:', err);
      setError('Failed to load houses');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, REFRESH_INTERVAL);
    return () => clearInterval(interval);
  }, [fetchData]);

  return { houses, loading, error, refetch: fetchData };
}

export function useLands() {
  const [lands, setLands] = useState<Land[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const data = await fetchLands();
      setLands(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching lands:', err);
      setError('Failed to load lands');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, REFRESH_INTERVAL);
    return () => clearInterval(interval);
  }, [fetchData]);

  return { lands, loading, error, refetch: fetchData };
}

export function useCars() {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const data = await fetchCars();
      setCars(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching cars:', err);
      setError('Failed to load cars');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, REFRESH_INTERVAL);
    return () => clearInterval(interval);
  }, [fetchData]);

  return { cars, loading, error, refetch: fetchData };
}
