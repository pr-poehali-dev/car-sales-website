import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CarCard from '@/components/catalog/CarCard';
import FilterPanel, { FilterOptions } from '@/components/catalog/FilterPanel';
import { cars, categories, brands, priceRanges } from '@/data/cars';
import { Car } from '@/types/car';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { SlidersHorizontal, Car as CarIcon, Grid3X3, LayoutList } from 'lucide-react';

const Catalog = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialSearchTerm = queryParams.get('search') || '';

  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [filteredCars, setFilteredCars] = useState<Car[]>(cars);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const applyFilters = (filters: FilterOptions) => {
    let result = [...cars];
    
    // Фильтрация по поисковому запросу
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      result = result.filter(car => 
        car.brand.toLowerCase().includes(searchLower) || 
        car.model.toLowerCase().includes(searchLower)
      );
    }
    
    // Фильтрация по категориям
    if (filters.categories.length > 0) {
      result = result.filter(car => filters.categories.includes(car.category));
    }
    
    // Фильтрация по брендам
    if (filters.brands.length > 0) {
      result = result.filter(car => filters.brands.includes(car.brand));
    }
    
    // Фильтрация по цене
    result = result.filter(car => 
      car.price >= filters.priceRange[0] && car.price <= filters.priceRange[1]
    );
    
    // Фильтрация по году выпуска
    result = result.filter(car => 
      car.year >= filters.years[0] && car.year <= filters.years[1]
    );
    
    setFilteredCars(result);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    applyFilters({
      categories: [],
      brands: [],
      priceRange: [500000, 5000000],
      years: [new Date().getFullYear() - 10, new Date().getFullYear()]
    });
  };

  useEffect(() => {
    if (initialSearchTerm) {
      applyFilters({
        categories: [],
        brands: [],
        priceRange: [500000, 5000000],
        years: [new Date().getFullYear() - 10, new Date().getFullYear()]
      });
    }
  }, [initialSearchTerm]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header onSearch={handleSearch} />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Каталог автомобилей</h1>
              <p className="text-muted-foreground">
                Найдено {filteredCars.length} автомобилей
                {searchTerm && ` по запросу "${searchTerm}"`}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden"
              >
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                Фильтры
              </Button>
              <div className="border rounded-md p-1 flex">
                <Button 
                  variant={viewMode === 'grid' ? "secondary" : "ghost"} 
                  size="icon" 
                  onClick={() => setViewMode('grid')}
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button 
                  variant={viewMode === 'list' ? "secondary" : "ghost"} 
                  size="icon" 
                  onClick={() => setViewMode('list')}
                >
                  <LayoutList className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className={`md:w-1/4 ${showFilters ? 'block' : 'hidden'} md:block`}>
              <FilterPanel 
                categories={categories}
                brands={brands}
                priceRanges={priceRanges}
                onFilter={applyFilters}
              />
            </div>
            
            <div className="md:w-3/4">
              <Tabs defaultValue="all" className="mb-6">
                <TabsList>
                  <TabsTrigger value="all">Все автомобили</TabsTrigger>
                  <TabsTrigger value="new">Новые</TabsTrigger>
                  <TabsTrigger value="used">С пробегом</TabsTrigger>
                </TabsList>
                <TabsContent value="all">
                  {filteredCars.length === 0 ? (
                    <div className="text-center py-16">
                      <CarIcon className="mx-auto h-12 w-12 text-muted-foreground" />
                      <h3 className="mt-4 text-lg font-medium">Автомобили не найдены</h3>
                      <p className="mt-2 text-muted-foreground">
                        Попробуйте изменить параметры поиска или фильтры.
                      </p>
                    </div>
                  ) : (
                    <div className={
                      viewMode === 'grid' 
                        ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" 
                        : "flex flex-col gap-4"
                    }>
                      {filteredCars.map((car) => (
                        <CarCard key={car.id} car={car} />
                      ))}
                    </div>
                  )}
                </TabsContent>
                <TabsContent value="new">
                  <div className={
                    viewMode === 'grid' 
                      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" 
                      : "flex flex-col gap-4"
                  }>
                    {filteredCars
                      .filter(car => car.mileage < 1000)
                      .map((car) => (
                        <CarCard key={car.id} car={car} />
                      ))}
                  </div>
                </TabsContent>
                <TabsContent value="used">
                  <div className={
                    viewMode === 'grid' 
                      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" 
                      : "flex flex-col gap-4"
                  }>
                    {filteredCars
                      .filter(car => car.mileage >= 1000)
                      .map((car) => (
                        <CarCard key={car.id} car={car} />
                      ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Catalog;