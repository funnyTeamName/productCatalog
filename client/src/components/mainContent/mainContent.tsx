import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NotFoundPage } from '../../pages/NotFoundPage';
import { Home } from '../../pages/Home';
import { Tablets } from '../../pages/Tablets';
import { Accessories } from '../../pages/Accessories';
import { PhonesList } from '../phonesList/PhonesList';
import { Phone } from '../../types/Phone';
import './mainContent.scss';
import { CartBlock } from '../cart_block/cart_block';
import { PhoneInfo } from '../phone_info/phone_info';

type Props = {
  phones: Phone[];
};

export const Main: React.FC<Props> = ({ phones }) => {
  const [selectedPhones, setSelectedPhones] = useState<number[] | []>([]);

  return (
    <div className="mainContent">
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
              />
            )}
          />
        </Route>

        <Route path="tablets" element={<Tablets />} />
        <Route path="accessories" element={<Accessories />} />

        <Route path="phoneInfo" element={<PhoneInfo phones={phones} />} />

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
