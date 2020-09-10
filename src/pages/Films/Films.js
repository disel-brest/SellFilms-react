import React, { Component } from 'react';
import './Films.scss';

import FilmsList from '../../components/FilmsList';
import {info} from '../../API/info';                      

class Films extends Component {
    state = {
        films: info
    }

    render() {
        return (
            <div className='container'>
                <section className="products-wrapper">
                    <h2 className="products-title">Список фильмов</h2>
                    <FilmsList films={this.state.films} />
                </section>
            </div>
        );
    }
}

export default Films;