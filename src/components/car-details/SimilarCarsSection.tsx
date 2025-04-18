import { Car } from '@/types/car';
import CarouselSection from '@/components/home/CarouselSection';

interface SimilarCarsSectionProps {
  similarCars: Car[];
}

export default function SimilarCarsSection({ similarCars }: SimilarCarsSectionProps) {
  if (!similarCars.length) {
    return null;
  }
  
  return (
    <section className="bg-accent/5 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Похожие автомобили</h2>
        <CarouselSection featuredCars={similarCars} />
      </div>
    </section>
  );
}
