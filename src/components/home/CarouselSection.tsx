import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Car } from "@/types/car";
import { Link } from "react-router-dom";

interface CarouselSectionProps {
  featuredCars: Car[];
}

const CarouselSection = ({ featuredCars }: CarouselSectionProps) => {
  return (
    <section className="py-8 bg-accent/5">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Лучшие предложения</h2>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {featuredCars.map((car) => (
              <CarouselItem key={car.id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/3">
                <div className="p-2 h-full">
                  <div className="bg-card rounded-lg overflow-hidden shadow-md h-full flex flex-col">
                    <div className="relative aspect-video overflow-hidden">
                      <img 
                        src={car.image} 
                        alt={`${car.brand} ${car.model}`} 
                        className="object-cover w-full h-full transition-transform hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <h3 className="text-white font-bold">{car.brand} {car.model}</h3>
                        <p className="text-white/90 text-sm">{car.year} г.</p>
                      </div>
                    </div>
                    <div className="p-4 flex-grow flex flex-col justify-between">
                      <div>
                        <p className="text-lg font-bold text-primary">
                          {new Intl.NumberFormat('ru-RU', {
                            style: 'currency',
                            currency: 'RUB',
                            maximumFractionDigits: 0
                          }).format(car.price)}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {car.engine.volume} л • {car.engine.power} л.с. • {car.transmission}
                        </p>
                      </div>
                      <Button asChild className="mt-4 w-full">
                        <Link to={`/car/${car.id}`}>Подробнее</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default CarouselSection;