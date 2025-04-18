import { Car } from '@/types/car';

interface CarDetailsListProps {
  car: Car;
}

export default function CarDetailsList({ car }: CarDetailsListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
      <div className="space-y-4">
        <DetailItem label="Марка" value={car.brand} />
        <DetailItem label="Модель" value={car.model} />
        <DetailItem label="Год выпуска" value={car.year.toString()} />
        <DetailItem label="Тип кузова" value={car.category} />
        <DetailItem label="Цвет" value={car.color} />
      </div>
      <div className="space-y-4">
        <DetailItem label="Тип двигателя" value={car.engine.type} />
        <DetailItem label="Объем двигателя" value={`${car.engine.volume} л`} />
        <DetailItem label="Мощность" value={`${car.engine.power} л.с.`} />
        <DetailItem label="Трансмиссия" value={car.transmission} />
        <DetailItem label="Пробег" value={`${car.mileage.toLocaleString('ru-RU')} км`} />
      </div>
    </div>
  );
}

interface DetailItemProps {
  label: string;
  value: string;
}

function DetailItem({ label, value }: DetailItemProps) {
  return (
    <div className="border-b pb-2">
      <div className="text-sm text-muted-foreground">{label}</div>
      <div className="font-medium">{value}</div>
    </div>
  );
}
