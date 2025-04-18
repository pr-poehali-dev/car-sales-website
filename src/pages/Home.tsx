import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import CarouselSection from '@/components/home/CarouselSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import { cars } from '@/data/cars';

const Home = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    navigate(`/catalog?search=${encodeURIComponent(term)}`);
  };

  // Получаем 5 популярных автомобилей для карусели
  const featuredCars = cars
    .sort((a, b) => b.price - a.price)
    .slice(0, 5);

  return (
    <div className="flex flex-col min-h-screen">
      <Header onSearch={handleSearch} />
      
      <main className="flex-grow">
        <HeroSection />
        <CarouselSection featuredCars={featuredCars} />
        <FeaturesSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;