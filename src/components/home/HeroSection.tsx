import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary to-accent overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-20 bg-cover bg-center"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Найдите идеальный автомобиль для вашей жизни
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Широкий выбор иномарок от проверенных брендов. Гарантия качества, выгодные цены и удобные условия покупки.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/catalog">Смотреть каталог</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/contacts">Связаться с нами</Link>
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="text-white text-3xl font-bold mb-2">15+</div>
              <div className="text-white/80">Моделей автомобилей</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="text-white text-3xl font-bold mb-2">5+</div>
              <div className="text-white/80">Лет гарантии</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="text-white text-3xl font-bold mb-2">24/7</div>
              <div className="text-white/80">Поддержка клиентов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;