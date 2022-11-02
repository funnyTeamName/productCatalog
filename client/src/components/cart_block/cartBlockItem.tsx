import React from 'react';
import { Phone } from '../../types/Phone';

type Props = {
  phone: Phone;
  selectedPhones: number[];
  setSelectedPhones: (value: number[]) => void;
};

export const CartBlockItem: React.FC<Props> = ({
  phone,
  selectedPhones,
  setSelectedPhones,
}) => {
  const handleRemove = () => {
    setSelectedPhones(selectedPhones.filter(id => id !== phone.id));
  };

  return (
    <div className="cart__block-item grid__item--desktop-1-15">
      <button
        type="submit"
        className="cart__block-reset"
        aria-label="text"
        onClick={handleRemove}
      />
      <a href="/">
        <img
          src={`http://localhost:8080/${phone.image}`}
          className="cart__block-img"
          alt=""
        />
      </a>
      <div className="cart__block-info">
        {phone.name}
      </div>
      <div className="cart__block-buttons">
        <button
          type="submit"
          className="cart__block-btn-min"
        >
          -
        </button>
        <p className="cart__block-count">1</p>
        <button
          type="submit"
          className="cart__block-btn
              cart__block-btn-plus"
        >
          +
        </button>
      </div>
      <div className="cart__block-price">{phone.price}</div>
    </div>
  );
};
