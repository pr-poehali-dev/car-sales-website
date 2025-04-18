import { Car } from "@/types/car";

/**
 * Форматирование цены в российском формате
 */
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0
  }).format(price);
};

/**
 * Фильтрация автомобилей по цене
 */
export const filterCarsByPrice = (cars: Car[], minPrice: number, maxPrice: number): Car[] => {
  return cars.filter(car => car.price >= minPrice && car.price <= maxPrice);
};

/**
 * Фильтрация автомобилей по категории
 */
export const filterCarsByCategory = (cars: Car[], categories: string[]): Car[] => {
  if (!categories.length) return cars;
  return cars.filter(car => categories.includes(car.category));
};

/**
 * Фильтрация автомобилей по бренду
 */
export const filterCarsByBrand = (cars: Car[], brands: string[]): Car[] => {
  if (!brands.length) return cars;
  return cars.filter(car => brands.includes(car.brand));
};

/**
 * Фильтрация автомобилей по году выпуска
 */
export const filterCarsByYear = (cars: Car[], minYear: number, maxYear: number): Car[] => {
  return cars.filter(car => car.year >= minYear && car.year <= maxYear);
};

/**
 * Поиск автомобилей по текстовому запросу
 */
export const searchCars = (cars: Car[], searchTerm: string): Car[] => {
  if (!searchTerm) return cars;
  
  const term = searchTerm.toLowerCase();
  return cars.filter(car => 
    car.brand.toLowerCase().includes(term) || 
    car.model.toLowerCase().includes(term) ||
    car.category.toLowerCase().includes(term) ||
    car.color.toLowerCase().includes(term) ||
    car.description.toLowerCase().includes(term)
  );
};

/**
 * Сортировка автомобилей по цене (по возрастанию или убыванию)
 */
export const sortCarsByPrice = (cars: Car[], ascending: boolean = true): Car[] => {
  return [...cars].sort((a, b) => ascending ? a.price - b.price : b.price - a.price);
};

/**
 * Получение похожих автомобилей (по категории или бренду)
 */
export const getSimilarCars = (cars: Car[], currentCar: Car, limit: number = 5): Car[] => {
  return cars
    .filter(car => 
      car.id !== currentCar.id && 
      (car.category === currentCar.category || car.brand === currentCar.brand)
    )
    .slice(0, limit);
};
