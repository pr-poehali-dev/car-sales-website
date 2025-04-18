import { Button } from '@/components/ui/button';
import { formatPrice } from '@/data/carUtils';
import { Car } from '@/types/car';
import { Phone, Share2, ShoppingCart } from 'lucide-react';

interface SidePanelProps {
  car: Car;
}

export default function SidePanel({ car }: SidePanelProps) {
  return (
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
      
      <CreditCalculator car={car} />
    </div>
  );
}

interface CreditCalculatorProps {
  car: Car;
}

function CreditCalculator({ car }: CreditCalculatorProps) {
  const initialPayment = car.price * 0.2;
  const monthlyPayment = car.price * 0.8 / 60 * 1.1;
  
  return (
    <div className="mt-6 pt-6 border-t">
      <h4 className="font-semibold mb-2">Кредитный калькулятор</h4>
      <div className="text-sm text-muted-foreground mb-4">
        Расчет примерного ежемесячного платежа для автомобиля стоимостью {formatPrice(car.price)}
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span>Первоначальный взнос 20%</span>
          <span className="font-medium">{formatPrice(initialPayment)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Срок кредита 5 лет</span>
          <span className="font-medium">60 месяцев</span>
        </div>
        <div className="flex justify-between items-center border-t border-border pt-2 mt-2">
          <span className="font-semibold">Ежемесячный платеж</span>
          <span className="font-bold text-lg text-primary">
            {formatPrice(monthlyPayment)}
          </span>
        </div>
      </div>
    </div>
  );
}
