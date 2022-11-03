import React from 'react';
import { NavLink } from 'react-router-dom';
import './header_right.scss';

export const HeaderRight: React.FC = () => (
  <div
    className="
      header__header-right
    "
  >
    <NavLink
      to="/Liked"
      className="
        header__header-right-link
        header__header-right-link-liked
      "
    />
    <NavLink
      to="/Shopping"
      className="
        header__header-right-link
        header__header-right-link-shoping
      "
    />
  </div>
);
