import { Badge } from '@/components/ui/badge';
import { Car } from '@/types/car';

interface CarImageProps {
  car: Car;
}

export default function CarImage({ car }: CarImageProps) {
  return (
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
  );
}
