import { Car } from "@/types/car";
import { createCustomFeatures } from "../carFeatures";

/**
 * Данные внедорожников
 */
export const suvCars: Car[] = [
  {
    id: 3,
    brand: 'Volkswagen',
    model: 'Tiguan',
    year: 2022,
    price: 2850000,
    category: 'Внедорожник',
    image: '/placeholder.svg',
    color: 'Серый',
    mileage: 6500,
    engine: {
      type: 'Дизель',
      volume: 2.0,
      power: 150
    },
    transmission: 'Робот',
    features: createCustomFeatures('7.5 л/100 км', '5 звезд', '615 л'),
    description: 'Комфортабельный и просторный внедорожник с отличной проходимостью и немецким качеством.'
  },
  {
    id: 5,
    brand: 'BMW',
    model: 'X3',
    year: 2022,
    price: 4250000,
    category: 'Внедорожник',
    image: '/placeholder.svg',
    color: 'Черный',
    mileage: 3500,
    engine: {
      type: 'Бензин',
      volume: 2.0,
      power: 190
    },
    transmission: 'Автомат',
    features: createCustomFeatures('7.8 л/100 км', '5 звезд', '550 л'),
    description: 'Роскошный внедорожник с превосходной динамикой, комфортом и престижем.'
  },
  {
    id: 7,
    brand: 'Kia',
    model: 'Sportage',
    year: 2022,
    price: 2390000,
    category: 'Внедорожник',
    image: '/placeholder.svg',
    color: 'Зеленый',
    mileage: 4800,
    engine: {
      type: 'Бензин',
      volume: 2.0,
      power: 150
    },
    transmission: 'Автомат',
    features: createCustomFeatures('7.2 л/100 км', '5 звезд', '503 л'),
    description: 'Современный внедорожник с выразительным дизайном, просторным салоном и богатой комплектацией.'
  },
  {
    id: 10,
    brand: 'Nissan',
    model: 'X-Trail',
    year: 2021,
    price: 2450000,
    category: 'Внедорожник',
    image: '/placeholder.svg',
    color: 'Оранжевый',
    mileage: 7500,
    engine: {
      type: 'Бензин',
      volume: 2.5,
      power: 171
    },
    transmission: 'Вариатор',
    features: createCustomFeatures('7.5 л/100 км', '5 звезд', '565 л'),
    description: 'Надежный японский внедорожник с отличной проходимостью, просторным салоном и вместительным багажником.'
  },
  {
    id: 12,
    brand: 'Honda',
    model: 'CR-V',
    year: 2021,
    price: 2750000,
    category: 'Внедорожник',
    image: '/placeholder.svg',
    color: 'Синий',
    mileage: 5500,
    engine: {
      type: 'Бензин',
      volume: 2.0,
      power: 150
    },
    transmission: 'Вариатор',
    features: createCustomFeatures('7.0 л/100 км', '5 звезд', '589 л'),
    description: 'Практичный и комфортный внедорожник с просторным салоном и хорошей управляемостью.'
  },
  {
    id: 14,
    brand: 'Ford',
    model: 'Kuga',
    year: 2021,
    price: 2350000,
    category: 'Внедорожник',
    image: '/placeholder.svg',
    color: 'Серебристый',
    mileage: 6000,
    engine: {
      type: 'Бензин',
      volume: 1.5,
      power: 150
    },
    transmission: 'Автомат',
    features: createCustomFeatures('6.9 л/100 км', '5 звезд', '456 л'),
    description: 'Стильный и вместительный кроссовер с современными системами безопасности и комфорта.'
  }
];
