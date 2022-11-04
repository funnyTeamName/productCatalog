import React, { useState, useEffect } from 'react';
import { Phone } from '../../types/Phone';

type Props = {
  phone: Phone;
  selectedPhones: number[];
  setSelectedPhones: (value: number[]) => void;
  setTotalPrice: (value: number) => void;
  totalPrice: number;
  countItems: number;
  setCountItems: (value: number) => void,
};

export const CartBlockItem: React.FC<Props> = ({
  phone,
  selectedPhones,
  setSelectedPhones,
  setTotalPrice,
  totalPrice,
  countItems,
  setCountItems,
}) => {
  const [count, setCount] = useState(1);

  const handleRemove = () => {
    setSelectedPhones(selectedPhones.filter(id => id !== phone.id));
    setTotalPrice(totalPrice - phone.price * count);
    setCountItems(countItems - 1 * count);

    window.localStorage.removeItem(`item:${phone.id}`);
  };

  useEffect(() => {
    const data = window.localStorage.getItem(`item:${phone.id}`);

    if (data !== null) {
      setCount(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(`item:${phone.id}`, JSON.stringify(count));
  }, [count]);

  const changeCountSubtract = () => {
    if (count > 1) {
      setCount(count - 1);
      setTotalPrice(totalPrice - phone.price);
      setCountItems(countItems - 1);
    }
  };

  const changeCountAdd = () => {
    setCount(count + 1);
    setTotalPrice(totalPrice + phone.price);
    setCountItems(countItems + 1);
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
          className="cart__block-btn
              cart__block-btn-plus"
          onClick={changeCountSubtract}
        >
          -
        </button>
        <p className="cart__block-count">
          {count}
        </p>
        <button
          type="submit"
          className="cart__block-btn cart__block-btn-plus"
          onClick={changeCountAdd}
        >
          +
        </button>
      </div>
      <div className="cart__block-price">{phone.price * count}</div>
    </div>
  );
};
