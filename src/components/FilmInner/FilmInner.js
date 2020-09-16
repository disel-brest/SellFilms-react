import React from 'react';
import './FilmInner.scss';

import FilmInfo from '../../components/FilmInner/FilmInfo';
import Comments from '../../components/FilmInner/Comments';

function FilmInner(props) {

    const { film } = props;

    return (
        <>
            <div className="inner-container">
                <div className="inner-top">
                    <div className="inner-top__price">Цена: 500 руб</div>
                    <button className="btn-bg">Добавить в корзину</button>
                </div>
                <FilmInfo film={film} />
                <Comments comments={film.comments} />
            </div>
            
        </>
    );
}

export default FilmInner;