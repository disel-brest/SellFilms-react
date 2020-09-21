import React from 'react';
import './FilmItem.scss';

import { Link } from 'react-router-dom';

function FilmItem(props) {

    const { film, addToCart } = props;
    const onClickHandler = () => addToCart(film);

    return (
        <article className="product">
            <div className="product__foto">
                <img src={require(`../../../assets/images/${film.id}.jpg`)} alt=""/>
            </div>
            <div className="product__descr">
                <div className="product__title">{film.name} ({film.year})</div>
                <div className="product__property">Жанр фильма: {film.genre}</div>
                <div className="product__property">Страна производства: {film.country}</div>
                <div className="product__property">Рейтинг: {film.rating} %</div>
            </div>
            <div className="product__info">
                <div className="product__price">Цена: {film.cost} руб.</div>
                <div className="product__container">
                    <div className="product__cart" onClick={onClickHandler}>В корзину</div>
                    <Link className="product__more" to={`/films/${film.id}`}>Подробнее...</Link>
                </div>
            </div>
        </article>
    );
}

export default FilmItem;