import React from 'react';
import './cart_block.scss';
import { Link } from 'react-router-dom';

export const CartBlock: React.FC = () => (
  <div className="cart__block grid">
    <div className="cart__block-links">
      <Link to="/" className="cart__block-vector" />
      <a href="http://" className="cart__block-link">Back</a>
    </div>
    <div className="cart__block-title">Cart</div>

    {/* BLOCK CARTS 1 */}
    <div className="cart__block-item grid__item--desktop-1-15">
      <button type="submit" className="cart__block-reset" aria-label="text" />
      <Link to="/" className="cart__block-img1" />
      <div className="cart__block-info">
        Apple iPhone 14 Pro 128GB Silver (MQ023)
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
      <div className="cart__block-price">$999</div>
    </div>

    {/* BLOCK CARTS 2 */}
    <div className="cart__block-item grid__item--desktop-1-15">
      <button type="submit" className="cart__block-reset" aria-label="text" />
      <Link to="/" className="cart__block-img2" />
      <div className="cart__block-info">
        Apple iPhone 14 Plus 128GB PRODUCT Red (MQ513)
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
      <div className="cart__block-price">$859</div>
    </div>

    {/* BLOCK CARTS 3 */}
    <div className="cart__block-item grid__item--desktop-1-15">
      <button type="submit" className="cart__block-reset" aria-label="text" />
      <Link to="/" className="cart__block-img3" />
      <div className="cart__block-info">
        Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
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
      <div className="cart__block-price">$799</div>
    </div>

    {/* BLOCK TOTAL */}
    <div className="cart__block-total grid__item--desktop-17-23">
      <div className="cart__block-total-title">$2657</div>
      <div className="cart__block-total-subtitle">Total for 3 items</div>
      <button
        type="submit"
        className="cart__block-total-button"
      >
        Checkout
      </button>
    </div>
  </div>
);
