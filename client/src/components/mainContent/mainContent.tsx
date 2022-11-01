import { Navigate, Route, Routes } from 'react-router-dom';
import { NotFoundPage } from '../../pages/NotFoundPage';
import { Home } from '../../pages/Home';
import { Tablets } from '../../pages/Tablets';
import { Accessories } from '../../pages/Accessories';
import { PhonesList } from '../phonesList/PhonesList';
import { Phone } from '../../types/Phone';
import './mainContent.scss';

type Props = {
  phones: Phone[];
};

export const Main: React.FC<Props> = ({ phones }) => (
  <div className="mainContent">
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
  </div>
);
