import { useEffect, useState } from 'react';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Phone } from './types/Phone';
import { Main } from './components/mainContent/mainContent';

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
      <Main phones={phones} />
      <Footer />
    </div>
  );
};
