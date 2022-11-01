import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { PhonesList } from './components/phonesList/PhonesList';
import { Phone } from './types/Phone';
import { NotFoundPage } from './pages/NotFoundPage';
import { Home } from './pages/Home';
import { Tablets } from './pages/Tablets';
import { Accessories } from './pages/Accessories';

export const App = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  useEffect(() => {
    const loadPhones = async () => {
      const response = await axios.get('http://localhost:8080/products');

      const data = await response.data;

      setPhones(data);
    };

    try {
      loadPhones();
    } catch {
      setPhones([]);
    }
  }, []);

  return (
    <div>
      <Header />

      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="/" element={<Navigate to="Home" replace />} />

        <Route path="phones">
          <Route index element={<PhonesList phones={phones} />} />
          <Route path=":pagId" element={<PhonesList phones={phones} />} />
        </Route>

        <Route path="tablets" element={<Tablets />} />
        <Route path="accessories" element={<Accessories />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  );
};
