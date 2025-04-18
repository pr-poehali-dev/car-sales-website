import { Car } from "@/types/car";
import { createCustomFeatures } from "../carFeatures";
import { getCarImageByBrand } from "../carImages";

/**
 * Данные седанов
 */
export const sedanCars: Car[] = [
  {
    id: 1,
    brand: 'Toyota',
    model: 'Corolla',
    year: 2022,
    price: 1850000,
    category: 'Седан',
    image: getCarImageByBrand('Toyota'),
    color: 'Белый',
    mileage: 5000,
    engine: {
      type: 'Бензин',
      volume: 1.6,
      power: 122
    },
    transmission: 'Автомат',
    features: createCustomFeatures('5.8 л/100 км', '5 звезд', '470 л'),
    description: 'Надежный японский седан с экономичным расходом топлива и высоким уровнем комфорта.'
  },
  {
    id: 6,
    brand: 'Mercedes',
    model: 'C-Class',
    year: 2021,
    price: 3850000,
    category: 'Седан',
    image: getCarImageByBrand('Mercedes'),
    color: 'Серебристый',
    mileage: 5000,
    engine: {
      type: 'Бензин',
      volume: 2.0,
      power: 197
    },
    transmission: 'Автомат',
    features: createCustomFeatures('6.5 л/100 км', '5 звезд', '455 л'),
    description: 'Элегантный седан премиум-класса с изысканным интерьером и передовыми технологиями.'
  },
  {
    id: 8,
    brand: 'Hyundai',
    model: 'Sonata',
    year: 2021,
    price: 2150000,
    category: 'Седан',
    image: getCarImageByBrand('Hyundai'),
    color: 'Белый',
    mileage: 6200,
    engine: {
      type: 'Бензин',
      volume: 2.0,
      power: 150
    },
    transmission: 'Автомат',
    features: createCustomFeatures('6.8 л/100 км', '5 звезд', '510 л'),
    description: 'Комфортабельный седан с футуристическим дизайном, просторным салоном и впечатляющим списком оборудования.'
  },
  {
    id: 9,
    brand: 'Audi',
    model: 'A4',
    year: 2022,
    price: 3950000,
    category: 'Седан',
    image: getCarImageByBrand('Audi'),
    color: 'Серый',
    mileage: 3000,
    engine: {
      type: 'Бензин',
      volume: 2.0,
      power: 190
    },
    transmission: 'Робот',
    features: createCustomFeatures('6.7 л/100 км', '5 звезд', '480 л'),
    description: 'Престижный седан с прогрессивными технологиями, утонченным дизайном и высочайшим качеством сборки.'
  },
  {
    id: 11,
    brand: 'Toyota',
    model: 'Camry',
    year: 2022,
    price: 2550000,
    category: 'Седан',
    image: getCarImageByBrand('Toyota'),
    color: 'Черный',
    mileage: 3000,
    engine: {
      type: 'Бензин',
      volume: 2.5,
      power: 181
    },
    transmission: 'Автомат',
    features: createCustomFeatures('7.1 л/100 км', '5 звезд', '493 л'),
    description: 'Бизнес-седан с впечатляющим уровнем комфорта, надежностью и динамичными характеристиками.'
  },
  {
    id: 13,
    brand: 'Volkswagen',
    model: 'Polo',
    year: 2022,
    price: 1250000,
    category: 'Седан',
    image: getCarImageByBrand('Volkswagen'),
    color: 'Белый',
    mileage: 2500,
    engine: {
      type: 'Бензин',
      volume: 1.6,
      power: 110
    },
    transmission: 'Механика',
    features: createCustomFeatures('5.7 л/100 км', '4 звезды', '460 л'),
    description: 'Компактный и экономичный седан с хорошей динамикой, немецким качеством и доступной ценой.'
  },
  {
    id: 15,
    brand: 'Kia',
    model: 'Rio',
    year: 2022,
    price: 1050000,
    category: 'Седан',
    image: getCarImageByBrand('Kia'),
    color: 'Красный',
    mileage: 1800,
    engine: {
      type: 'Бензин',
      volume: 1.6,
      power: 123
    },
    transmission: 'Автомат',
    features: createCustomFeatures('5.9 л/100 км', '4 звезды', '480 л'),
    description: 'Доступный и надежный седан с хорошей комплектацией, экономичным двигателем и стильным дизайном.'
  }
];
