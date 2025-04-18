import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { cars } from '@/data/cars';
import { Car } from '@/types/car';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ChevronLeft, 
  ShoppingCart, 
  Phone, 
  Calendar, 
  Fuel, 
  Gauge, 
  Car as CarIcon,
  Share2
} from 'lucide-react';
import CarouselSection from '@/components/home/CarouselSection';

const CarDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (id) {
      const foundCar = cars.find(c => c.id === parseInt(id));
      setCar(foundCar || null);
      setLoading(false);
    }
  }, [id]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!car) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header onSearch={handleSearch} />
        <main className="flex-grow container mx-auto px-4 py-16 text-center">
          <CarIcon className="h-16 w-16 mx-auto text-muted-foreground" />
          <h1 className="text-2xl font-bold mt-4">Автомобиль не найден</h1>
          <p className="text-muted-foreground mt-2">
            Автомобиль с ID {id} не существует или был удален.
          </p>
          <Button asChild className="mt-6">
            <Link to="/catalog">Вернуться в каталог</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const similarCars = cars
    .filter(c => c.id !== car.id && (c.category === car.category || c.brand === car.brand))
    .slice(0, 5);

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onSearch={handleSearch} />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-4">
            <Button asChild variant="ghost" className="pl-0">
              <Link to="/catalog">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Назад в каталог
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="relative aspect-video bg-secondary/20 rounded-lg overflow-hidden mb-6">
                <img 
                  src={car.image} 
                  alt={`${car.brand} ${car.model}`} 
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 right-4 text-sm bg-secondary text-secondary-foreground">
                  {car.category}
                </Badge>
              </div>

              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="flex-grow">
                  <h1 className="text-3xl font-bold">
                    {car.brand} {car.model}
                  </h1>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="outline" className="bg-primary/10">
                      <Calendar className="h-3 w-3 mr-1" />
                      {car.year} год
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10">
                      <Fuel className="h-3 w-3 mr-1" />
                      {car.engine.type}
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10">
                      <Gauge className="h-3 w-3 mr-1" />
                      {car.mileage.toLocaleString('ru-RU')} км
                    </Badge>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary">
                    {formatPrice(car.price)}
                  </div>
                </div>
              </div>

              <Tabs defaultValue="details">
                <TabsList className="mb-6">
                  <TabsTrigger value="details">Характеристики</TabsTrigger>
                  <TabsTrigger value="description">Описание</TabsTrigger>
                  <TabsTrigger value="features">Особенности</TabsTrigger>
                </TabsList>
                
                <TabsContent value="details">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    <div className="space-y-4">
                      <div className="border-b pb-2">
                        <div className="text-sm text-muted-foreground">Марка</div>
                        <div className="font-medium">{car.brand}</div>
                      </div>
                      <div className="border-b pb-2">
                        <div className="text-sm text-muted-foreground">Модель</div>
                        <div className="font-medium">{car.model}</div>
                      </div>
                      <div className="border-b pb-2">
                        <div className="text-sm text-muted-foreground">Год выпуска</div>
                        <div className="font-medium">{car.year}</div>
                      </div>
                      <div className="border-b pb-2">
                        <div className="text-sm text-muted-foreground">Тип кузова</div>
                        <div className="font-medium">{car.category}</div>
                      </div>
                      <div className="border-b pb-2">
                        <div className="text-sm text-muted-foreground">Цвет</div>
                        <div className="font-medium">{car.color}</div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="border-b pb-2">
                        <div className="text-sm text-muted-foreground">Тип двигателя</div>
                        <div className="font-medium">{car.engine.type}</div>
                      </div>
                      <div className="border-b pb-2">
                        <div className="text-sm text-muted-foreground">Объем двигателя</div>
                        <div className="font-medium">{car.engine.volume} л</div>
                      </div>
                      <div className="border-b pb-2">
                        <div className="text-sm text-muted-foreground">Мощность</div>
                        <div className="font-medium">{car.engine.power} л.с.</div>
                      </div>
                      <div className="border-b pb-2">
                        <div className="text-sm text-muted-foreground">Трансмиссия</div>
                        <div className="font-medium">{car.transmission}</div>
                      </div>
                      <div className="border-b pb-2">
                        <div className="text-sm text-muted-foreground">Пробег</div>
                        <div className="font-medium">{car.mileage.toLocaleString('ru-RU')} км</div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="description">
                  <div className="prose max-w-none">
                    <p>{car.description}</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="features">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {car.features.map((feature, index) => (
                      <div key={index} className="bg-card border rounded-lg p-4">
                        <div className="text-2xl mb-2">{feature.icon}</div>
                        <div className="font-medium">{feature.name}</div>
                        <div className="text-sm text-muted-foreground">{feature.value}</div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-card border rounded-lg p-6 sticky top-20">
                <h3 className="text-xl font-bold mb-4">Заинтересовались?</h3>
                
                <div className="space-y-4">
                  <Button className="w-full">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Купить сейчас
                  </Button>
                  
                  <Button variant="outline" className="w-full">
                    <Phone className="mr-2 h-4 w-4" />
                    Позвонить нам
                  </Button>
                  
                  <Button variant="ghost" className="w-full">
                    <Share2 className="mr-2 h-4 w-4" />
                    Поделиться
                  </Button>
                </div>
                
                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-semibold mb-2">Кредитный калькулятор</h4>
                  <div className="text-sm text-muted-foreground mb-4">
                    Расчет примерного ежемесячного платежа для автомобиля стоимостью {formatPrice(car.price)}
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>Первоначальный взнос 20%</span>
                      <span className="font-medium">{formatPrice(car.price * 0.2)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Срок кредита 5 лет</span>
                      <span className="font-medium">60 месяцев</span>
                    </div>
                    <div className="flex justify-between items-center border-t border-border pt-2 mt-2">
                      <span className="font-semibold">Ежемесячный платеж</span>
                      <span className="font-bold text-lg text-primary">
                        {formatPrice(car.price * 0.8 / 60 * 1.1)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {similarCars.length > 0 && (
          <section className="bg-accent/5 py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-8">Похожие автомобили</h2>
              <CarouselSection featuredCars={similarCars} />
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default CarDetails;