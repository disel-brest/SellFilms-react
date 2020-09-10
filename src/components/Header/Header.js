import React from 'react';
import logo from '../../assets/images/logo.svg';
import './Header.scss';

export default function Header() {
  return (
      <header>
          <div className="header__logo">
              <div className="header__image">
                  <img src={logo} />
              </div>
              <h1>Продажа фильмов</h1>
          </div>
          <div className="header__search">
              <div className="form">
                  <input className="form__input" type="text" placeholder="Поиск..." />
              </div>
          </div>
          <div className="header__cart">
              <span className="header__bell-notification">0</span>
              <span className="header__cart-icon icon"></span>
				Корзина
			</div>
          <button className="btn-bg">Войти</button>
      </header>
  );
}