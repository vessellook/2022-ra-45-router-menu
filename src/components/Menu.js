import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

export default function Menu() {
  const className = ({ isActive }) =>
    classNames('menu__item', { 'menu__item-active': isActive });

  return (
    <nav className="menu">
      <NavLink className={className} to="/">
        Главная
      </NavLink>
      <NavLink className={className} to="/drift">
        Дрифт-такси
      </NavLink>
      <NavLink className={className} to="/timeattack">
        Time Attack
      </NavLink>
      <NavLink className={className} to="/forza">
        Forza Karting
      </NavLink>
    </nav>
  );
}
