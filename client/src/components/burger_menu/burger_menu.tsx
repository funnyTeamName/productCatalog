import React from 'react';
import { Link } from 'react-router-dom';
import './burger_menu.scss';

export const BurgerMenu: React.FC = () => {
  return (
    <div className="burger">
      <Link to="/" className="burger_menu" />
    </div>
  );
};
