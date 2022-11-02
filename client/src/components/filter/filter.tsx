import React from 'react';
import './filter.scss';
import { Link } from 'react-router-dom';
import { FilterType } from '../../enums/FilterType';

type Props = {
  length: number | undefined;
  filterType: FilterType;
  handleFilterType: (filterType: FilterType) => void;
  phonesPerPage: number;
  setPhonesPerPage: (phonesPerPage: number) => void;
  setCurrentPage: (pageNumber: number) => void;
};

export const Filter: React.FC<Props> = ({
  length,
  filterType,
  handleFilterType,
  phonesPerPage,
  setPhonesPerPage,
  setCurrentPage,
}) => {
  const handleFilter = (value: string) => {
    switch (value) {
      case FilterType.ASC: {
        handleFilterType(FilterType.ASC);
        break;
      }

      case FilterType.DESC: {
        handleFilterType(FilterType.DESC);
        break;
      }

      case FilterType.OLDEST: {
        handleFilterType(FilterType.OLDEST);
        break;
      }

      default:
      case FilterType.NEWEST:
        handleFilterType(FilterType.NEWEST);
    }
  };

  return (
    <div className="container">
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
          <select
            name="sort"
            id="sort"
            className="sorts__select"
            value={filterType}
            onChange={event => handleFilter(event.target.value)}
          >
            <option value={FilterType.NEWEST} className="sorts__option">
              Newest
            </option>
            <option value={FilterType.OLDEST} className="sorts__option">
              Oldest
            </option>
            <option value={FilterType.ASC} className="sorts__option">
              Ascending price
            </option>
            <option value={FilterType.DESC} className="sorts__option">
              Descending price
            </option>
          </select>
        </div>

        <div className="sorts__item">
          <p className="sorts__text">Items on page</p>
          <select
            name="show"
            id="show"
            className="sorts__select"
            value={phonesPerPage}
            onChange={event => {
              setPhonesPerPage(+event.target.value);
              setCurrentPage(1);

              window.location.replace('http://localhost:3000/#/Phones');
            }}
          >
            <option value="8" className="sorts__option">8</option>
            <option value="12" className="sorts__option">12</option>
            <option value="16" className="sorts__option">18</option>
            <option value="20" className="sorts__option">20</option>
          </select>
        </div>
      </div>
    </div>
  );
};
