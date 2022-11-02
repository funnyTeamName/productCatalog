import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './cart_block.scss';
import { Phone } from '../../types/Phone';
import { CartBlockItem } from './cartBlockItem';

type Props = {
  phones: Phone[];
};

export const CartBlock: React.FC<Props> = ({ phones }) => {
  const visiblePhones = phones.filter(phone => phone.price > 1800);
  const [totalPrice, setTotalPrice] = useState(0);
  const [countItems, setCountItems] = useState(0);

  const initialTotalPrice = visiblePhones
    .map(phone => phone.price)
    .reduce((sum, value) => sum + value, 0);

  useEffect(() => {
    setTotalPrice(initialTotalPrice);
    setCountItems(visiblePhones.length);
  }, [initialTotalPrice]);

  const navigate = useNavigate();

  return (
    <div className="cart__block grid">
      <div className="cart__block-links">
        <Link to="/" className="cart__block-vector" />
        <button
          type="submit"
          className="cart__block-link"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
      <div className="cart__block-title">Cart</div>

      {visiblePhones.map(phone => (
        <CartBlockItem
          key={phone.id}
          phone={phone}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
          countItems={countItems}
          setCountItems={setCountItems}
        />
      ))}

      <div className="cart__block-total grid__item--desktop-17-23">
        <div className="cart__block-total-title">{`$${totalPrice}`}</div>
        <div className="cart__block-total-subtitle">{`Total for ${countItems} items`}</div>
        <button
          type="submit"
          className="cart__block-total-button"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};
