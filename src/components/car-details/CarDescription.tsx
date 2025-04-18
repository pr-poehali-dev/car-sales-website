import { Car } from '@/types/car';

interface CarDescriptionProps {
  car: Car;
}

export default function CarDescription({ car }: CarDescriptionProps) {
  return (
    <div className="prose max-w-none">
      <p>{car.description}</p>
    </div>
  );
}
