import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Car as CarIcon } from 'lucide-react';

interface NotFoundProps {
  id?: string;
}

export default function NotFound({ id }: NotFoundProps) {
  return (
    <main className="flex-grow container mx-auto px-4 py-16 text-center">
      <CarIcon className="h-16 w-16 mx-auto text-muted-foreground" />
      <h1 className="text-2xl font-bold mt-4">Автомобиль не найден</h1>
      <p className="text-muted-foreground mt-2">
        {id ? `Автомобиль с ID ${id} не существует или был удален.` : 'Запрашиваемый автомобиль не найден.'}
      </p>
      <Button asChild className="mt-6">
        <Link to="/catalog">Вернуться в каталог</Link>
      </Button>
    </main>
  );
}
