import { Car } from "@/types/car";
import { sedanCars } from "./carsData/sedans";
import { hatchbackCars } from "./carsData/hatchbacks";
import { suvCars } from "./carsData/suvs";
import { 
  getCategoriesFromCars, 
  getBrandsFromCars,
  priceRanges 
} from "./carCategories";

/**
 * Объединение всех автомобилей из разных категорий
 */
export const cars: Car[] = [
  ...sedanCars,
  ...hatchbackCars,
  ...suvCars
];

/**
 * Получение списка категорий из базы автомобилей
 */
export const categories = getCategoriesFromCars(cars);

/**
 * Получение списка брендов из базы автомобилей
 */
export const brands = getBrandsFromCars(cars);

/**
 * Экспорт ценовых диапазонов для фильтров
 */
export { priceRanges };

/**
 * Функция получения автомобиля по ID
 */
export const getCarById = (id: number): Car | undefined => {
  return cars.find(car => car.id === id);
};

/**
 * Получение списка автомобилей определенной категории
 */
export const getCarsByCategory = (category: string): Car[] => {
  return cars.filter(car => car.category === category);
};

/**
 * Получение списка автомобилей определенного бренда
 */
export const getCarsByBrand = (brand: string): Car[] => {
  return cars.filter(car => car.brand === brand);
};

/**
 * Получение новых автомобилей (с пробегом менее 1000 км)
 */
export const getNewCars = (): Car[] => {
  return cars.filter(car => car.mileage < 1000);
};

/**
 * Получение автомобилей с пробегом
 */
export const getUsedCars = (): Car[] => {
  return cars.filter(car => car.mileage >= 1000);
};

/**
 * Получение списка популярных автомобилей (ТОП-N по цене)
 */
export const getPopularCars = (limit: number = 5): Car[] => {
  return [...cars]
    .sort((a, b) => b.price - a.price)
    .slice(0, limit);
};

/**
 * Получение списка доступных автомобилей (бюджетные варианты)
 */
export const getAffordableCars = (maxPrice: number = 1500000, limit: number = 5): Car[] => {
  return [...cars]
    .filter(car => car.price <= maxPrice)
    .sort((a, b) => b.price - a.price)
    .slice(0, limit);
};
