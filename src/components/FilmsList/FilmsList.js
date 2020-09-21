import React from 'react';
import './FilmsList.scss';

import FilmItem from './FilmItem';

function FilmsList(props) {

    const addToCartHandler = (film) => props.addToCart(film);

    return (
        <div className="products-list">
            {props.films.map((item, index)=> {
                return <FilmItem film={item} key={index} addToCart={addToCartHandler}/>
            })}
        </div>
    );
}

export default FilmsList;