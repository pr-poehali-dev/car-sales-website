import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Car } from '@/types/car';
import { formatPrice } from '@/data/carUtils';

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <Card className="car-card">
      <CardHeader className="p-0">
        <div className="overflow-hidden h-48 relative">
          <img
            src={car.image}
            alt={`${car.brand} ${car.model}`}
            className="car-image"
          />
          <div className="absolute top-2 right-2 bg-secondary/90 text-white px-2 py-1 rounded-md">
            {car.year}
          </div>
          <div className="absolute bottom-2 left-2 bg-primary/90 text-white px-2 py-1 rounded-md">
            {car.category}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <h3 className="text-lg font-bold mb-1">{car.brand} {car.model}</h3>
        <p className="text-xl font-semibold text-primary">{formatPrice(car.price)}</p>
        <div className="grid grid-cols-2 gap-2 mt-2 text-sm text-muted-foreground">
          <div>
            <span className="inline-block mr-1">🔧</span>
            {car.engine.volume} л, {car.engine.power} л.с.
          </div>
          <div>
            <span className="inline-block mr-1">⚙️</span>
            {car.transmission}
          </div>
          <div>
            <span className="inline-block mr-1">🛣️</span>
            {car.mileage.toLocaleString()} км
          </div>
          <div>
            <span className="inline-block mr-1">🎨</span>
            {car.color}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link to={`/cars/${car.id}`} className="w-full">
          <Button variant="default" className="w-full">
            Подробнее
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
