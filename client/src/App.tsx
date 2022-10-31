import { useEffect, useState } from 'react';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { PhonesList } from './components/phonesList/PhonesList';
import { Phone } from './types/Phone';

export const App = () => {
  const [phones, setPhones] = useState<Phone[] | null>(null);

  useEffect(() => {
    fetch('http://localhost:8080/products')
      .then(res => res.json())
      .then(data => setPhones(data));
  }, []);

  return (
    <div>
      <Header />

      <PhonesList phones={phones} />

      <Footer />
    </div>
  );
};
