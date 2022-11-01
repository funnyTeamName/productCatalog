import React from 'react';
import { NavLink } from 'react-router-dom';
import './menu.scss';

type Props = {
  items: {
    value: string;
    href: string;
  }[];
  active: boolean;
  setActive: (active: boolean) => void;
};

export const Menu: React.FC<Props> = ({
  items,
  active,
  setActive,
}) => {
  return (
    <menu>
      <button
        type="button"
        className={active
          ? 'menu active'
          : 'menu'}
        onClick={() => setActive(false)}
      >
        <div
          onClick={(event) => event.stopPropagation()}
          aria-hidden="true"
          className="menu__content"
        >
          <ul className="menu__list">
            {items.map((item) => (
              <li className="menu__items">
                <a className="menu__link" href={item.href}>{item.value}</a>
              </li>
            ))}
          </ul>
          <div className="menu__bottom">
            <NavLink
              to="/Liked"
              className="
                header__header-right-link
                header__header-right-link-liked
                menu__bottom-link
              "
            />
            <NavLink
              to="/Shoping"
              className="
                header__header-right-link
                header__header-right-link-shoping
                menu__bottom-link
              "
            />
          </div>
        </div>
      </button>
    </menu>
  );
};
