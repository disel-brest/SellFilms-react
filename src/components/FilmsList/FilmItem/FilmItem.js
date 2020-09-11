import React from 'react';
import './FilmItem.scss';

function FilmItem(props) {

    const { film } = props;

    return (
        <article className="product">
            <div className="product__foto">
                <img src={require(`../../../assets/images/${film.id}.jpg`)} alt=""/>
            </div>
            <div className="product__descr">
                <div className="product__title">{film.name} (2017)</div>
                <div className="product__property">Жанр фильма: Боевик</div>
                <div className="product__property">Страна производства: Зарубежный</div>
                <div className="product__property">Рейтинг: 56 %</div>
            </div>
            <div className="product__info">
                <div className="product__price">Цена: 2560 руб.</div>
                <div className="product__container">
                    <div className="product__cart">В корзину</div>
                    <a href="#" className="product__more">Подробнее...</a>
                </div>
            </div>
        </article>
    );
}

export default FilmItem;