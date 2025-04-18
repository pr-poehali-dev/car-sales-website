import { Car } from '@/types/car';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ShoppingCart, Eye } from 'lucide-react';

interface CarCardProps {
  car: Car;
}

const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0
  }).format(price);
};

const CarCard = ({ car }: CarCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative aspect-video overflow-hidden bg-secondary/20">
        <img 
          src={car.image} 
          alt={`${car.brand} ${car.model}`} 
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
        <Badge className="absolute top-2 right-2 bg-secondary text-secondary-foreground">
          {car.category}
        </Badge>
      </div>
      <CardHeader className="p-4">
        <CardTitle className="flex justify-between items-center">
          <span>{car.brand} {car.model}</span>
          <span className="text-primary font-bold">{formatPrice(car.price)}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="grid grid-cols-2 gap-2 text-sm mb-3">
          <div className="flex items-center gap-1">
            <span className="text-muted-foreground">Год:</span>
            <span className="font-medium">{car.year}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-muted-foreground">Двигатель:</span>
            <span className="font-medium">{car.engine.volume} л ({car.engine.power} л.с.)</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-muted-foreground">КПП:</span>
            <span className="font-medium">{car.transmission}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-muted-foreground">Пробег:</span>
            <span className="font-medium">{car.mileage.toLocaleString('ru-RU')} км</span>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap">
          {car.features.slice(0, 3).map((feature, index) => (
            <Badge key={index} variant="outline" className="bg-accent/10 hover:bg-accent/20">
              {feature.icon} {feature.name}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button asChild variant="secondary" className="flex-1">
          <Link to={`/car/${car.id}`}>
            <Eye className="mr-2 h-4 w-4" />
            Подробнее
          </Link>
        </Button>
        <Button className="flex-1">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Купить
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CarCard;