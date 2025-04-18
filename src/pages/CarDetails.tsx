import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CarImage from '@/components/car-details/CarImage';
import CarMainInfo from '@/components/car-details/CarMainInfo';
import DetailTabs from '@/components/car-details/DetailTabs';
import SidePanel from '@/components/car-details/SidePanel';
import SimilarCarsSection from '@/components/car-details/SimilarCarsSection';
import NotFound from '@/components/car-details/NotFound';
import Loading from '@/components/car-details/Loading';
import { useCar } from '@/hooks/useCar';

export default function CarDetails() {
  const { id } = useParams<{ id: string }>();
  const { car, loading, similarCars } = useCar(id);

  // Обработка загрузки
  if (loading) {
    return <Loading />;
  }

  // Обработка отсутствия автомобиля
  if (!car) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <NotFound id={id} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
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
              <CarImage car={car} />
              <CarMainInfo car={car} />
              <DetailTabs car={car} />
            </div>

            <div className="lg:col-span-1">
              <SidePanel car={car} />
            </div>
          </div>
        </div>
        
        <SimilarCarsSection similarCars={similarCars} />
      </main>
      
      <Footer />
    </div>
  );
}
