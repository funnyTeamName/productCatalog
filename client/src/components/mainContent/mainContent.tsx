import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NotFoundPage } from '../../Pages/NotFoundPage';
import { Home } from '../../Pages/Home';
import { Tablets } from '../../Pages/Tablets';
import { Accessories } from '../../Pages/Accessories';
import { PhonesList } from '../ProductList/ProductList';
import { Phone } from '../../types/Phone';
import { CartBlock } from '../CartBlock';
import './MainContent.scss';

type Props = {
  phones: Phone[];
};

export const Main: React.FC<Props> = ({ phones }) => {
  const [selectedPhones, setSelectedPhones] = useState<number[] | []>([]);

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
