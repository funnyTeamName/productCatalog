import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from '../../types/Phone';
import { PhonesListItem } from '../ProductList';
import ipad from './tablets.json';

type Props = {
  selectedPhones: number[];
  setSelectedPhones: (value: number[]) => void;
  setPhoneId: (value: number) => void;
  likedPhones: number[];
  setLikedPhones: (value: number[]) => void;
};

export const TabletList: React.FC<Props> = ({
  selectedPhones,
  setSelectedPhones,
  setPhoneId,
  likedPhones,
  setLikedPhones,
}) => {
  const tablets: Phone[] = ipad.map(i => i);

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

            <p className="filter__logo-text">Tablets</p>
          </div>

          <h1 className="filter__title">Tablets</h1>
          <br />
          <div className="page__product-list grid--cards">
            {tablets.map((tablet: Phone) => (
              <PhonesListItem
                key={tablet.id}
                phone={tablet}
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
