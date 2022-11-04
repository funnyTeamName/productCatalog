import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from '../../types/Phone';
import { PhonesListItem } from '../ProductList/ProductListItem';
import './Favorite.scss';

type Props = {
  phones: Phone[];
  selectedPhones: number[];
  setSelectedPhones: (value: number[]) => void;
  setPhoneId: (value: number) => void;
};

export const Favorite: React.FC<Props> = ({
  phones,
  selectedPhones,
  setSelectedPhones,
  setPhoneId,
}) => {
  const visiblePhones = phones.filter(phone => (
    selectedPhones.includes(phone.id)
  ));

  return (
    <div className="favorite">
      <div className="favorite__logo">
        <Link to="/" className="favorite__logo-home" />
        <Link to="/" className="favorite__logo-vector" />
        <p className="favorite__logo-vector-text">
          Favorites
        </p>
      </div>
      <div className="favorite__title">
        <p className="favorite__title-text">
          Favorites
        </p>
        <p className="favorite__count">
          {selectedPhones.length}
          &nbsp;items
        </p>
      </div>

      <div className="favorite__phones grid__cards">
        {visiblePhones.map(phone => (
          <PhonesListItem
            key={phone.id}
            phone={phone}
            selectedPhones={selectedPhones}
            setSelectedPhones={setSelectedPhones}
            setPhoneId={setPhoneId}
          />
        ))}
      </div>
    </div>
  );
};
