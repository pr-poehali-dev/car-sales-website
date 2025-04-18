import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Car } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  const handleSearch = (term: string) => {
    // Обработка поиска
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header onSearch={handleSearch} />
      
      <main className="flex-grow flex items-center justify-center bg-background">
        <div className="container max-w-md mx-auto px-4 py-16 text-center">
          <Car className="h-24 w-24 mx-auto text-muted-foreground" />
          <h1 className="mt-6 text-3xl font-bold">Страница не найдена</h1>
          <p className="mt-4 text-muted-foreground">
            Извините, мы не смогли найти страницу, которую вы ищете.
            Она могла быть перемещена или удалена.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/">
                Вернуться на главную
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/catalog">
                Просмотреть каталог
              </Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;