import React from 'react';
import './style.scss';
import { Link, NavLink } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <div>
      <header className="header">
        <div className="header__logo logo">
          <Link to="/" className="logo__link" />
        </div>
        <nav className="header__header-navigation">
          <NavLink
            to="/about"
            className="header-navigation__link"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="header-navigation__link"
          >
            Phone
          </NavLink>
          <NavLink
            to="/about"
            className="header-navigation__link"
          >
            Tablets
          </NavLink>
          <NavLink
            to="/about"
            className="header-navigation__link"
          >
            Accessories
          </NavLink>
        </nav>

        <div className="header__header-right">
          <NavLink
            to="/"
            className="
              header__header-right-link
              header__header-right-link-liked
            "
          />
          <NavLink
            to="/"
            className="
              header__header-right-link
              header__header-right-link-shoping
            "
          />
        </div>
        <div className="burger">
          <Link to="/" className="burger_menu" />
        </div>
      </header>
    </div>
  );
};
