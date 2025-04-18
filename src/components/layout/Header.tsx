import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, ShoppingCart, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface HeaderProps {
  onSearch: (term: string) => void;
}

const Header = ({ onSearch }: HeaderProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <Car className="h-8 w-8" />
          <span className="text-xl font-bold">АвтоМаркет</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="font-medium hover:text-white/80">Главная</Link>
          <Link to="/catalog" className="font-medium hover:text-white/80">Каталог</Link>
          <Link to="/about" className="font-medium hover:text-white/80">О нас</Link>
          <Link to="/contacts" className="font-medium hover:text-white/80">Контакты</Link>
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex items-center">
          <form onSubmit={handleSearch} className="flex items-center">
            <Input
              type="search"
              placeholder="Поиск автомобиля..."
              className="h-9 w-[200px] lg:w-[300px] bg-primary-foreground text-foreground"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button 
              type="submit" 
              size="sm" 
              variant="secondary" 
              className="ml-2"
            >
              <Search className="h-4 w-4" />
            </Button>
          </form>
          <Button variant="ghost" size="icon" className="ml-4">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-background">
            <nav className="flex flex-col space-y-4 mt-8">
              <Link to="/" className="font-medium px-2 py-1 hover:bg-secondary rounded-md">Главная</Link>
              <Link to="/catalog" className="font-medium px-2 py-1 hover:bg-secondary rounded-md">Каталог</Link>
              <Link to="/about" className="font-medium px-2 py-1 hover:bg-secondary rounded-md">О нас</Link>
              <Link to="/contacts" className="font-medium px-2 py-1 hover:bg-secondary rounded-md">Контакты</Link>
              
              <div className="pt-4 border-t">
                <form onSubmit={handleSearch} className="flex items-center">
                  <Input
                    type="search"
                    placeholder="Поиск автомобиля..."
                    className="h-9"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Button type="submit" size="sm" variant="secondary" className="ml-2">
                    <Search className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;