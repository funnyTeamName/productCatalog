import React from 'react';
import './main_block.scss';
import { Link } from 'react-router-dom';

export const MainBlock: React.FC = () => (
  <main className="main">
    <div className="container">
      <div className="container__logo">
        <Link to="/" className="container__logo-home" />
        <Link to="/" className="container__logo-vector" />
        {/* <span className="logo__text">Phones</span> */}
        <a href="http://" className="container__logo-text">Phones</a>
      </div>

      <h1 className="container__title">Mobile phones</h1>
      <div className="device__count device__count-margin">95 models</div>

      <div className="container__sorts">
        <div className="sorts__item sorts__item-margin">
          <p className="sorts__text">Sort by</p>
          <select name="sort" id="sort" className="sorts__select">
            <option
              value="name"
              className="sorts__option"
              selected
            >
              Newest
            </option>
            <option value="name" className="sorts__option">Oldest</option>
            <option
              value="price"
              className="sorts__option"
            >
              Price to low
            </option>
            <option
              value="price"
              className="sorts__option"
            >
              Price to high
            </option>
          </select>
        </div>
        <div className="sorts__item">
          <p className="sorts__text">Items on page</p>
          <select name="show" id="show" className="sorts__select">
            <option value="12" className="sorts__option">12</option>
            <option value="24" className="sorts__option" selected>16</option>
            <option value="24" className="sorts__option">24</option>
            <option value="36" className="sorts__option">36</option>
          </select>
        </div>
      </div>
    </div>
  </main>
);
