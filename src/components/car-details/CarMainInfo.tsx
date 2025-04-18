import { Badge } from '@/components/ui/badge';
import { formatPrice } from '@/data/carUtils';
import { Car } from '@/types/car';
import { Calendar, Fuel, Gauge } from 'lucide-react';

interface CarMainInfoProps {
  car: Car;
}

export default function CarMainInfo({ car }: CarMainInfoProps) {
  return (
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
  );
}
