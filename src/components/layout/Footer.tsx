import { Link } from 'react-router-dom';
import { Car, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Car className="h-6 w-6" />
              <span className="text-lg font-bold">АвтоМаркет</span>
            </div>
            <p className="text-sm">
              Ваш надежный партнер в выборе автомобиля. Широкий выбор иномарок по доступным ценам.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-accent">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-accent">Главная</Link>
              </li>
              <li>
                <Link to="/catalog" className="hover:text-accent">Каталог автомобилей</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent">О компании</Link>
              </li>
              <li>
                <Link to="/contacts" className="hover:text-accent">Контакты</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-accent">Блог</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>г. Москва, ул. Автомобильная, 123</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>info@automarket.ru</span>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-sm">Режим работы:</p>
              <p className="text-sm">Пн-Пт: 9:00 - 20:00</p>
              <p className="text-sm">Сб-Вс: 10:00 - 18:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-6 text-center text-sm">
          <p>© 2023 АвтоМаркет. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;