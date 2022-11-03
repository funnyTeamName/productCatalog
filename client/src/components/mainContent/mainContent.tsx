import { useState } from 'react';
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

type Props = {
  phones: Phone[];
};

export const Main: React.FC<Props> = ({ phones }) => {
  const [selectedPhones, setSelectedPhones] = useState<number[] | []>([]);

  const [phoneId, setPhoneId] = useState(1);

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
            />
          )}
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
