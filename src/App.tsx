import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Catalog from '@/pages/Catalog';
import CarDetails from '@/pages/CarDetails';
import NotFound from '@/pages/NotFound';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BackgroundImage from '@/components/layout/BackgroundImage';
import { Toaster } from '@/components/ui/sonner';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <BackgroundImage />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/cars/:id" element={<CarDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
