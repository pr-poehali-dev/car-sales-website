import { Car } from '@/types/car';

interface CarFeaturesListProps {
  car: Car;
}

export default function CarFeaturesList({ car }: CarFeaturesListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {car.features.map((feature, index) => (
        <div key={index} className="bg-card border rounded-lg p-4">
          <div className="text-2xl mb-2">{feature.icon}</div>
          <div className="font-medium">{feature.name}</div>
          <div className="text-sm text-muted-foreground">{feature.value}</div>
        </div>
      ))}
    </div>
  );
}
