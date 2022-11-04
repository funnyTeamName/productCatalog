import { useState, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import {
  NotFoundPage,
  Home,
  Tablets,
  Accessories,
} from '../../pages';
import { PhonesList } from '../ProductList/ProductList';
import { Phone } from '../../types/Phone';
import { CartBlock } from '../CartBlock';
import './mainContent.scss';
import { PhoneInfo } from '../phoneInfo/phoneInfo';
import { Favourites } from '../Favourites';

type Props = {
  phones: Phone[];
};

export const Main: React.FC<Props> = ({ phones }) => {
  const [selectedPhones, setSelectedPhones] = useState<number[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [countItems, setCountItems] = useState(0);
  const [phoneId, setPhoneId] = useState(1);

  const visiblePhones = phones.filter(phone => (
    selectedPhones.includes(phone.id)
  ));

  const initialTotalPrice = visiblePhones
    .map(phone => phone.price * (+window.localStorage.getItem(`item:${phone.id}`)! || 1))
    .reduce((sum, value) => sum + value, 0);

  const initialItemsCount = visiblePhones
    .map(phone => 1 * (+window.localStorage.getItem(`item:${phone.id}`)! || 1))
    .reduce((sum, value) => sum + value, 0);

  useEffect(() => {
    const dataPhones = window.localStorage.getItem('Phones');

    if (dataPhones !== null) {
      setSelectedPhones(JSON.parse(dataPhones));
    }
  }, []);

  useEffect(() => {
    window.localStorage
      .setItem('Phones', JSON.stringify(selectedPhones));
    window.localStorage
      .setItem('Total Price', JSON.stringify(initialTotalPrice));
    window.localStorage
      .setItem('Items Count', JSON.stringify(initialItemsCount));
    setTotalPrice(initialTotalPrice);
  }, [selectedPhones]);

  return (
    <div className="mainContent container">
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="/" element={<Navigate to="Home" replace />} />

        <Route path="phones">
          <Route
            index
            element={(
              <PhonesList
                phones={phones}
                selectedPhones={selectedPhones}
                setSelectedPhones={setSelectedPhones}
                setPhoneId={setPhoneId}
              />
            )}
          />
          <Route
            path=":pagId"
            element={(
              <PhonesList
                phones={phones}
                selectedPhones={selectedPhones}
                setSelectedPhones={setSelectedPhones}
                setPhoneId={setPhoneId}
              />
            )}
          />
        </Route>

        <Route path="tablets" element={<Tablets />} />
        <Route path="accessories" element={<Accessories />} />

        <Route
          path="phoneInfo"
          element={(
            <PhoneInfo
              phoneId={phoneId}
              selectedPhones={selectedPhones}
              setSelectedPhones={setSelectedPhones}
            />
          )}
        />

        <Route
          path="shopping"
          element={(
            <CartBlock
              phones={phones}
              selectedPhones={selectedPhones}
              setSelectedPhones={setSelectedPhones}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
              countItems={countItems}
              setCountItems={setCountItems}
            />
          )}
        />
        <Route
          path="favourites"
          element={(
            <Favourites
              phones={phones}
              selectedPhones={selectedPhones}
              setSelectedPhones={setSelectedPhones}
              setPhoneId={setPhoneId}
            />
          )}
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
