import React from 'react';
import { NavLink } from 'react-router-dom';
import './header_nav.scss';

export const HeaderNav: React.FC = () => (
  <nav className="header__header-navigation">
    <NavLink
      to="/Home"
      className="header-navigation__link"
    >
      Home
    </NavLink>
    <NavLink
      to="/Phone"
      className="header-navigation__link"
    >
      Phone
    </NavLink>
    <NavLink
      to="/Tablets"
      className="header-navigation__link"
    >
      Tablets
    </NavLink>
    <NavLink
      to="/Accessories"
      className="header-navigation__link"
    >
      Accessories
    </NavLink>
  </nav>
);
