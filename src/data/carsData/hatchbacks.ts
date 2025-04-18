import { Car } from "@/types/car";
import { createCustomFeatures } from "../carFeatures";
import { getCarImageByBrand } from "../carImages";

/**
 * Данные хэтчбеков
 */
export const hatchbackCars: Car[] = [
  {
    id: 2,
    brand: 'Honda',
    model: 'Civic',
    year: 2021,
    price: 1750000,
    category: 'Хэтчбек',
    image: getCarImageByBrand('Honda'),
    color: 'Красный',
    mileage: 8000,
    engine: {
      type: 'Бензин',
      volume: 1.5,
      power: 182
    },
    transmission: 'Вариатор',
    features: createCustomFeatures('6.2 л/100 км', '5 звезд', '420 л'),
    description: 'Спортивный и элегантный хэтчбек с превосходной управляемостью и современными технологиями.'
  },
  {
    id: 4,
    brand: 'Ford',
    model: 'Focus',
    year: 2021,
    price: 1550000,
    category: 'Хэтчбек',
    image: getCarImageByBrand('Ford'),
    color: 'Синий',
    mileage: 7800,
    engine: {
      type: 'Бензин',
      volume: 1.5,
      power: 150
    },
    transmission: 'Автомат',
    features: createCustomFeatures('6.0 л/100 км', '5 звезд', '375 л'),
    description: 'Стильный и динамичный хэтчбек с отличной управляемостью и современными системами безопасности.'
  }
];
