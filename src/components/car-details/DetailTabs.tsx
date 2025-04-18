import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Car } from '@/types/car';
import CarDetailsList from './CarDetailsList';
import CarDescription from './CarDescription';
import CarFeaturesList from './CarFeaturesList';

interface DetailTabsProps {
  car: Car;
}

export default function DetailTabs({ car }: DetailTabsProps) {
  return (
    <Tabs defaultValue="details">
      <TabsList className="mb-6">
        <TabsTrigger value="details">Характеристики</TabsTrigger>
        <TabsTrigger value="description">Описание</TabsTrigger>
        <TabsTrigger value="features">Особенности</TabsTrigger>
      </TabsList>
      
      <TabsContent value="details">
        <CarDetailsList car={car} />
      </TabsContent>
      
      <TabsContent value="description">
        <CarDescription car={car} />
      </TabsContent>
      
      <TabsContent value="features">
        <CarFeaturesList car={car} />
      </TabsContent>
    </Tabs>
  );
}
