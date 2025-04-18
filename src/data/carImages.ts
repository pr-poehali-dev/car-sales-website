/**
 * Изображения автомобилей для разных марок
 */
export const brandImages = {
  'Toyota': '/images/cars/toyota.jpg',
  'Honda': '/images/cars/honda.jpg',
  'Volkswagen': '/images/cars/volkswagen.jpg',
  'Ford': '/images/cars/ford.jpg',
  'BMW': '/images/cars/bmw.jpg',
  'Mercedes': '/images/cars/mercedes.jpg',
  'Kia': '/images/cars/kia.jpg',
  'Hyundai': '/images/cars/hyundai.jpg',
  'Audi': '/images/cars/audi.jpg',
  'Nissan': '/images/cars/nissan.jpg',
  'Porsche': '/images/cars/porsche.jpg'
};

/**
 * Получение URL изображения для заданной марки
 * С запасным вариантом, если изображение не найдено
 */
export const getCarImageByBrand = (brand: string): string => {
  return brandImages[brand as keyof typeof brandImages] || '/placeholder.svg';
};

/**
 * Изображение для фона сайта
 */
export const backgroundImage = {
  url: '/images/background/porsche-turbo-s-red.jpg',
  alt: 'Porsche 911 Turbo S красного цвета'
};
