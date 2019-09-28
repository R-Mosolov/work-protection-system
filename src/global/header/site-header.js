import React from 'react';
import { Link } from 'react-router-dom';

import '../css/style.css';
import './css/desktop.css';
import './css/tablet-and-desktop.css';

import menuBurger from './js/menu-burger';
import Logo from './img/companionship.svg';

const SiteHeader = () => {
  return (
    <div className="site-header">
      <nav className="navbar navbar-expand-xl navbar-light shadow-sm">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Логотип" style={{width: 37, height: 37}} className="mr-3" />
          Система охраны труда
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={menuBurger}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/workers-list">
                Работники
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/companies">
                Предприятия
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Настройки
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default SiteHeader;
