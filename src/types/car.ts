export type CarCategory = 'Седан' | 'Хэтчбек' | 'Внедорожник' | 'Минивэн' | 'Купе';

export type CarBrand = 'Toyota' | 'Honda' | 'Volkswagen' | 'Ford' | 'BMW' | 'Mercedes' | 'Kia' | 'Hyundai' | 'Audi' | 'Nissan';

export interface CarFeature {
  icon: string;
  name: string;
  value: string;
}

export interface Car {
  id: number;
  brand: CarBrand;
  model: string;
  year: number;
  price: number;
  category: CarCategory;
  image: string;
  color: string;
  mileage: number;
  engine: {
    type: string;
    volume: number;
    power: number;
  };
  transmission: 'Автомат' | 'Механика' | 'Робот' | 'Вариатор';
  features: CarFeature[];
  description: string;
}
