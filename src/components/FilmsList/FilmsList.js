import React from 'react';
import './FilmsList.scss';

import FilmItem from './FilmItem';

function FilmsList(props) {
    return (
        <div className="products-list">
            {props.films.map((item, index)=> {
                return <FilmItem film={item} key={index}/>
            })}
        </div>
    );
}

export default FilmsList;