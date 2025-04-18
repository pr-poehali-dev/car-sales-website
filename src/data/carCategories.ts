import { CarCategory, CarBrand } from "@/types/car";

/**
 * Доступные категории автомобилей
 */
export const availableCategories: CarCategory[] = [
  'Седан', 'Хэтчбек', 'Внедорожник', 'Минивэн', 'Купе'
];

/**
 * Доступные марки автомобилей
 */
export const availableBrands: CarBrand[] = [
  'Toyota', 'Honda', 'Volkswagen', 'Ford', 'BMW', 
  'Mercedes', 'Kia', 'Hyundai', 'Audi', 'Nissan'
];

/**
 * Стандартные ценовые диапазоны для фильтрации
 */
export const priceRanges = [
  { min: 500000, max: 1500000, label: '500 000 ₽ - 1 500 000 ₽' },
  { min: 1500000, max: 2500000, label: '1 500 000 ₽ - 2 500 000 ₽' },
  { min: 2500000, max: 3500000, label: '2 500 000 ₽ - 3 500 000 ₽' },
  { min: 3500000, max: Infinity, label: 'Свыше 3 500 000 ₽' }
];

/**
 * Получение списка категорий из имеющихся автомобилей
 */
export const getCategoriesFromCars = <T extends { category: string }>(cars: T[]): string[] => {
  return Array.from(new Set(cars.map(car => car.category)));
};

/**
 * Получение списка брендов из имеющихся автомобилей
 */
export const getBrandsFromCars = <T extends { brand: string }>(cars: T[]): string[] => {
  return Array.from(new Set(cars.map(car => car.brand)));
};
