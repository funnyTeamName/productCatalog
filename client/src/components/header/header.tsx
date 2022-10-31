import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { HeaderNav } from '../header_navigation/header_nav';
import { HeaderRight } from '../header_right-block/heder_right';
import { BurgerMenu } from '../burger_menu/burger_menu';

export const Header: React.FC = () => (
  <header className="header">
    <div className="header__logo logo">
      <Link to="/" className="logo__link" />
    </div>

    <HeaderNav />
    <HeaderRight />
    <BurgerMenu />
  </header>
);
