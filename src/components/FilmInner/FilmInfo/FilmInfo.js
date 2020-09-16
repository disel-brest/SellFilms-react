import React from 'react';
import './FilmInfo.scss';

function FilmInfo(props) {

    const { film } = props;

    return (
        <>
            <div className="inner-content">
                <div className="inner-content__photo">
                    <img src={require(`../../../assets/images/${film.id}.jpg`)} alt={film.name}/>
                </div>
                <div className="inner-content__info">
                    <h2 className="inner-content__title">{film.name} ({film.year})</h2>
                    <div className="inner-content__rate">Рейтинг: {film.rating}%</div>
                    <div className="inner-content__option">Жанр: <span>{film.genre}</span></div>
                    <div className="inner-content__option">Страна: <span>{film.country}</span></div>
                    <div className="inner-content__option">Оплата: <span>{film.cashless}</span></div>
                    <div className="inner-content__description">{film.description}</div>
                    <div className="inner-content__id">id: {film.id}</div>
                </div>
            </div>
        </>
    );
}

export default FilmInfo;