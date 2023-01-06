import { Link } from 'react-router-dom';
import { Phone } from '../../types/Phone';
import { PhonesListItem } from '../ProductList';
import covers from './accessories.json';

type Props = {
  selectedPhones: number[];
  setSelectedPhones: (value: number[]) => void;
  setPhoneId: (value: number) => void;
  likedPhones: number[];
  setLikedPhones: (value: number[]) => void;
};

export const AccessoriesList: React.FC<Props> = ({
  selectedPhones,
  setSelectedPhones,
  setPhoneId,
  likedPhones,
  setLikedPhones,
}) => {
  const accessories: Phone[] = covers.map(i => i);

  return (
    <div className="container">
      <div className="grid">
        <div
          className="
            filter
            page__filter
            grid__item--mobile-1-4
          "
        >
          <div className="filter__logo">
            <Link to="/" className="filter__logo-home" />

            <Link to="/" className="filter__logo-vector" />

            <p className="filter__logo-text">Accessories</p>
          </div>

          <h1 className="filter__title">Accessories</h1>

          <div className="page__product-list grid--cards">
            {accessories.map((accessory: Phone) => (
              <PhonesListItem
                key={accessory.id}
                phone={accessory}
                selectedPhones={selectedPhones}
                setSelectedPhones={setSelectedPhones}
                setPhoneId={setPhoneId}
                size
                likedPhones={likedPhones}
                setLikedPhones={setLikedPhones}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};
