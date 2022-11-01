import React from 'react';
import './filter.scss';
import { Link } from 'react-router-dom';

type Props = {
  length: number | undefined;
};

export const Filter: React.FC<Props> = ({ length }) => (
  <div className="container">
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div className="container__logo">
      <Link to="/" className="container__logo-home" />
      <Link to="/" className="container__logo-vector" />
      <p className="container__logo-text">Phones</p>
    </div>

    <h1 className="container__title">Mobile phones</h1>
    <div className="device__count device__count-margin">
      {`${length} models`}
    </div>

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
            Ascending price
          </option>
          <option
            value="price"
            className="sorts__option"
          >
            Descending price
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
);
