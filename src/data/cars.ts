import { Car } from "@/types/car";

export const cars: Car[] = [
  {
    id: 1,
    brand: 'Toyota',
    model: 'Corolla',
    year: 2022,
    price: 1850000,
    category: 'Седан',
    image: '/placeholder.svg',
    color: 'Белый',
    mileage: 5000,
    engine: {
      type: 'Бензин',
      volume: 1.6,
      power: 122
    },
    transmission: 'Автомат',
    features: [
      { icon: '⚡', name: 'Расход', value: '5.8 л/100 км' },
      { icon: '🛡️', name: 'Безопасность', value: '5 звезд' },
      { icon: '🛄', name: 'Багажник', value: '470 л' }
    ],
    description: 'Надежный японский седан с экономичным расходом топлива и высоким уровнем комфорта.'
  },
  {
    id: 2,
    brand: 'Honda',
    model: 'Civic',
    year: 2021,
    price: 1750000,
    category: 'Хэтчбек',
    image: '/placeholder.svg',
    color: 'Красный',
    mileage: 8000,
    engine: {
      type: 'Бензин',
      volume: 1.5,
      power: 182
    },
    transmission: 'Вариатор',
    features: [
      { icon: '⚡', name: 'Расход', value: '6.2 л/100 км' },
      { icon: '🛡️', name: 'Безопасность', value: '5 звезд' },
      { icon: '🛄', name: 'Багажник', value: '420 л' }
    ],
    description: 'Спортивный и элегантный хэтчбек с превосходной управляемостью и современными технологиями.'
  },
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
    features: [
      { icon: '⚡', name: 'Расход', value: '7.5 л/100 км' },
      { icon: '🛡️', name: 'Безопасность', value: '5 звезд' },
      { icon: '🛄', name: 'Багажник', value: '615 л' }
    ],
    description: 'Комфортабельный и просторный внедорожник с отличной проходимостью и немецким качеством.'
  },
  {
    id: 4,
    brand: 'Ford',
    model: 'Focus',
    year: 2021,
    price: 1550000,
    category: 'Хэтчбек',
    image: '/placeholder.svg',
    color: 'Синий',
    mileage: 7800,
    engine: {
      type: 'Бензин',
      volume: 1.5,
      power: 150
    },
    transmission: 'Автомат',
    features: [
      { icon: '⚡', name: 'Расход', value: '6.0 л/100 км' },
      { icon: '🛡️', name: 'Безопасность', value: '5 звезд' },
      { icon: '🛄', name: 'Багажник', value: '375 л' }
    ],
    description: 'Стильный и динамичный хэтчбек с отличной управляемостью и современными системами безопасности.'
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
    features: [
      { icon: '⚡', name: 'Расход', value: '7.8 л/100 км' },
      { icon: '🛡️', name: 'Безопасность', value: '5 звезд' },
      { icon: '🛄', name: 'Багажник', value: '550 л' }
    ],
    description: 'Роскошный внедорожник с превосходной динамикой, комфортом и престижем.'
  },
  {
    id: 6,
    brand: 'Mercedes',
    model: 'C-Class',
    year: 2021,
    price: 3850000,
    category: 'Седан',
    image: '/placeholder.svg',
    color: 'Серебристый',
    mileage: 5000,
    engine: {
      type: 'Бензин',
      volume: 2.0,
      power: 197
    },
    transmission: 'Автомат',
    features: [
      { icon: '⚡', name: 'Расход', value: '6.5 л/100 км' },
      { icon: '🛡️', name: 'Безопасность', value: '5 звезд' },
      { icon: '🛄', name: 'Багажник', value: '455 л' }
    ],
    description: 'Элегантный седан премиум-класса с изысканным интерьером и передовыми технологиями.'
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
    features: [
      { icon: '⚡', name: 'Расход', value: '7.2 л/100 км' },
      { icon: '🛡️', name: 'Безопасность', value: '5 звезд' },
      { icon: '🛄', name: 'Багажник', value: '503 л' }
    ],
    description: 'Современный внедорожник с выразительным дизайном, просторным салоном и богатой комплектацией.'
  },
  {
    id: 8,
    brand: 'Hyundai',
    model: 'Sonata',
    year: 2021,
    price: 2150000,
    category: 'Седан',
    image: '/placeholder.svg',
    color: 'Белый',
    mileage: 6200,
    engine: {
      type: 'Бензин',
      volume: 2.0,
      power: 150
    },
    transmission: 'Автомат',
    features: [
      { icon: '⚡', name: 'Расход', value: '6.8 л/100 км' },
      { icon: '🛡️', name: 'Безопасность', value: '5 звезд' },
      { icon: '🛄', name: 'Багажник', value: '510 л' }
    ],
    description: 'Комфортабельный седан с футуристическим дизайном, просторным салоном и впечатляющим списком оборудования.'
  },
  {
    id: 9,
    brand: 'Audi',
    model: 'A4',
    year: 2022,
    price: 3950000,
    category: 'Седан',
    image: '/placeholder.svg',
    color: 'Серый',
    mileage: 3000,
    engine: {
      type: 'Бензин',
      volume: 2.0,
      power: 190
    },
    transmission: 'Робот',
    features: [
      { icon: '⚡', name: 'Расход', value: '6.7 л/100 км' },
      { icon: '🛡️', name: 'Безопасность', value: '5 звезд' },
      { icon: '🛄', name: 'Багажник', value: '480 л' }
    ],
    description: 'Престижный седан с прогрессивными технологиями, утонченным дизайном и высочайшим качеством сборки.'
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
    features: [
      { icon: '⚡', name: 'Расход', value: '7.5 л/100 км' },
      { icon: '🛡️', name: 'Безопасность', value: '5 звезд' },
      { icon: '🛄', name: 'Багажник', value: '565 л' }
    ],
    description: 'Надежный японский внедорожник с отличной проходимостью, просторным салоном и вместительным багажником.'
  },
  {
    id: 11,
    brand: 'Toyota',
    model: 'Camry',
    year: 2022,
    price: 2550000,
    category: 'Седан',
    image: '/placeholder.svg',
    color: 'Черный',
    mileage: 3000,
    engine: {
      type: 'Бензин',
      volume: 2.5,
      power: 181
    },
    transmission: 'Автомат',
    features: [
      { icon: '⚡', name: 'Расход', value: '7.1 л/100 км' },
      { icon: '🛡️', name: 'Безопасность', value: '5 звезд' },
      { icon: '🛄', name: 'Багажник', value: '493 л' }
    ],
    description: 'Бизнес-седан с впечатляющим уровнем комфорта, надежностью и динамичными характеристиками.'
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
    features: [
      { icon: '⚡', name: 'Расход', value: '7.0 л/100 км' },
      { icon: '🛡️', name: 'Безопасность', value: '5 звезд' },
      { icon: '🛄', name: 'Багажник', value: '589 л' }
    ],
    description: 'Практичный и комфортный внедорожник с просторным салоном и хорошей управляемостью.'
  },
  {
    id: 13,
    brand: 'Volkswagen',
    model: 'Polo',
    year: 2022,
    price: 1250000,
    category: 'Седан',
    image: '/placeholder.svg',
    color: 'Белый',
    mileage: 2500,
    engine: {
      type: 'Бензин',
      volume: 1.6,
      power: 110
    },
    transmission: 'Механика',
    features: [
      { icon: '⚡', name: 'Расход', value: '5.7 л/100 км' },
      { icon: '🛡️', name: 'Безопасность', value: '4 звезды' },
      { icon: '🛄', name: 'Багажник', value: '460 л' }
    ],
    description: 'Компактный и экономичный седан с хорошей динамикой, немецким качеством и доступной ценой.'
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
    features: [
      { icon: '⚡', name: 'Расход', value: '6.9 л/100 км' },
      { icon: '🛡️', name: 'Безопасность', value: '5 звезд' },
      { icon: '🛄', name: 'Багажник', value: '456 л' }
    ],
    description: 'Стильный и вместительный кроссовер с современными системами безопасности и комфорта.'
  },
  {
    id: 15,
    brand: 'Kia',
    model: 'Rio',
    year: 2022,
    price: 1050000,
    category: 'Седан',
    image: '/placeholder.svg',
    color: 'Красный',
    mileage: 1800,
    engine: {
      type: 'Бензин',
      volume: 1.6,
      power: 123
    },
    transmission: 'Автомат',
    features: [
      { icon: '⚡', name: 'Расход', value: '5.9 л/100 км' },
      { icon: '🛡️', name: 'Безопасность', value: '4 звезды' },
      { icon: '🛄', name: 'Багажник', value: '480 л' }
    ],
    description: 'Доступный и надежный седан с хорошей комплектацией, экономичным двигателем и стильным дизайном.'
  }
];

export const categories = Array.from(new Set(cars.map(car => car.category)));
export const brands = Array.from(new Set(cars.map(car => car.brand)));
export const priceRanges = [
  { min: 500000, max: 1500000, label: '500 000 ₽ - 1 500 000 ₽' },
  { min: 1500000, max: 2500000, label: '1 500 000 ₽ - 2 500 000 ₽' },
  { min: 2500000, max: 3500000, label: '2 500 000 ₽ - 3 500 000 ₽' },
  { min: 3500000, max: Infinity, label: 'Свыше 3 500 000 ₽' }
];
