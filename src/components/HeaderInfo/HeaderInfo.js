import React from 'react';
import logo from '../../assets/images/logo.svg';
import './HeaderInfo.scss';

import { NavLink } from 'react-router-dom';


function HeaderInfo(props) {
    return (
        <header>
            <NavLink className="header__logo" to='/'>
                <div className="header__image">
                    <img src={logo} alt='logo' />
                </div>
                <h1>Продажа фильмов</h1>
            </NavLink>
            
            <div className="header__search">
                <div className="form">
                    <input className="form__input" type="text" placeholder="Поиск..." />
                </div>
            </div>

            <NavLink className="header__cart" to='/cart'>
                <span className="header__bell-notification">{props.list.length}</span>
                <span className="header__cart-icon icon"></span>
                <p>Корзина</p>
            </NavLink>

            <button className="btn-bg">Войти</button>
        </header>
    );
}

export default HeaderInfo;