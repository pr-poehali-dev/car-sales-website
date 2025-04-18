import { useState, useEffect } from 'react';
import { Car } from '@/types/car';
import { getCarById, getSimilarCars } from '@/data/carUtils';
import { cars } from '@/data/cars';

interface UseCarResult {
  car: Car | null;
  loading: boolean;
  similarCars: Car[];
}

export function useCar(id: string | undefined): UseCarResult {
  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState(true);
  const [similarCars, setSimilarCars] = useState<Car[]>([]);

  useEffect(() => {
    setLoading(true);
    
    if (id) {
      const parsedId = parseInt(id);
      const foundCar = getCarById(parsedId);
      
      setCar(foundCar || null);
      
      if (foundCar) {
        const similarCars = getSimilarCars(cars, foundCar, 5);
        setSimilarCars(similarCars);
      } else {
        setSimilarCars([]);
      }
    }
    
    setLoading(false);
  }, [id]);

  return { car, loading, similarCars };
}
