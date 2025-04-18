import { useState } from 'react';
import { CarCategory, CarBrand } from '@/types/car';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Search, RefreshCw } from 'lucide-react';

interface FilterPanelProps {
  categories: string[];
  brands: string[];
  priceRanges: { min: number; max: number; label: string }[];
  onFilter: (filters: FilterOptions) => void;
}

export interface FilterOptions {
  categories: string[];
  brands: string[];
  priceRange: [number, number];
  years: [number, number];
}

const currentYear = new Date().getFullYear();

const FilterPanel = ({ categories, brands, priceRanges, onFilter }: FilterPanelProps) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([500000, 5000000]);
  const [yearRange, setYearRange] = useState<[number, number]>([currentYear - 10, currentYear]);

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    }
  };

  const handleBrandChange = (brand: string, checked: boolean) => {
    if (checked) {
      setSelectedBrands([...selectedBrands, brand]);
    } else {
      setSelectedBrands(selectedBrands.filter(b => b !== brand));
    }
  };

  const handlePriceChange = (value: number[]) => {
    setPriceRange([value[0], value[1]]);
  };

  const handleYearChange = (value: number[]) => {
    setYearRange([value[0], value[1]]);
  };

  const applyFilters = () => {
    onFilter({
      categories: selectedCategories,
      brands: selectedBrands,
      priceRange,
      years: yearRange
    });
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setPriceRange([500000, 5000000]);
    setYearRange([currentYear - 10, currentYear]);
    
    onFilter({
      categories: [],
      brands: [],
      priceRange: [500000, 5000000],
      years: [currentYear - 10, currentYear]
    });
  };

  return (
    <div className="bg-card p-4 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Фильтры</h2>
      
      <Accordion type="multiple" defaultValue={["categories", "brands", "price"]}>
        <AccordionItem value="categories">
          <AccordionTrigger className="py-2">Тип кузова</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`category-${category}`} 
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={(checked) => 
                      handleCategoryChange(category, checked as boolean)
                    }
                  />
                  <Label htmlFor={`category-${category}`} className="cursor-pointer">
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="brands">
          <AccordionTrigger className="py-2">Марка</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {brands.map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`brand-${brand}`} 
                    checked={selectedBrands.includes(brand)}
                    onCheckedChange={(checked) => 
                      handleBrandChange(brand, checked as boolean)
                    }
                  />
                  <Label htmlFor={`brand-${brand}`} className="cursor-pointer">
                    {brand}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger className="py-2">Цена</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-6">
              <div>
                <Slider 
                  min={500000} 
                  max={5000000} 
                  step={50000} 
                  value={[priceRange[0], priceRange[1]]}
                  onValueChange={handlePriceChange}
                  className="my-6"
                />
                <div className="flex justify-between text-sm">
                  <span>{new Intl.NumberFormat('ru-RU').format(priceRange[0])} ₽</span>
                  <span>{new Intl.NumberFormat('ru-RU').format(priceRange[1])} ₽</span>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="year">
          <AccordionTrigger className="py-2">Год выпуска</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-6">
              <div>
                <Slider 
                  min={currentYear - 10} 
                  max={currentYear}
                  step={1}
                  value={[yearRange[0], yearRange[1]]}
                  onValueChange={handleYearChange}
                  className="my-6"
                />
                <div className="flex justify-between text-sm">
                  <span>{yearRange[0]}</span>
                  <span>{yearRange[1]}</span>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <div className="mt-6 space-y-2">
        <Button onClick={applyFilters} className="w-full">
          <Search className="mr-2 h-4 w-4" />
          Применить фильтры
        </Button>
        <Button onClick={resetFilters} variant="outline" className="w-full">
          <RefreshCw className="mr-2 h-4 w-4" />
          Сбросить
        </Button>
      </div>
    </div>
  );
};

export default FilterPanel;