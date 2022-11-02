import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { MainBlock } from './components/main_block/main_block';
import { PhonesList } from './components/phonesList/PhonesList';
import { Phone } from './types/Phone';
import { NotFoundPage } from './pages/NotFoundPage';
import { Home } from './pages/Home';
import { Tablets } from './pages/Tablets';
import { Accessories } from './pages/Accessories';
import { CartBlock } from './components/cart_block/cart_block';

export const App = () => {
  const [phones, setPhones] = useState<Phone[] | null>(null);

  useEffect(() => {
    const loadPhones = async () => {
      const response = await axios.get('http://localhost:8080/products');

      const data = await response.data;

      setPhones(data);
    };

    loadPhones();
  }, []);

  return (
    <div>
      <Header />

      <MainBlock />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Navigate to="/" replace />} />

        <Route path="phones">
          <Route index element={<PhonesList phones={phones} />} />
          <Route path=":pagId" element={<PhonesList phones={phones} />} />
        </Route>

        <Route path="tablets" element={<Tablets />} />
        <Route path="accessories" element={<Accessories />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <CartBlock />
      <Footer />
    </div>
  );
};
