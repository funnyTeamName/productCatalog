import React from 'react';
import './footer.scss';
import { Link, NavLink } from 'react-router-dom';

export const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer__logo logo">
      <Link to="/" className="logo__link" />
    </div>

    <div className="footer__footer-navigation footer-navigation">
      <NavLink to="/github" className="footer-navigation__link">
        Github
      </NavLink>

      <NavLink to="/contacts" className="footer-navigation__link">
        Contacts
      </NavLink>

      <NavLink to="/rights" className="footer-navigation__link">
        Rights
      </NavLink>
    </div>

    <div className="footer__footer-rollback footer-rollback">
      <Link to="/" className="footer-rollback__text"> Back to top </Link>
      <Link to="/" className="button__secondary button__secondary--up-page" />
    </div>
  </footer>
);
