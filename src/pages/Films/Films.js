import React, { Component } from 'react';
import './Films.scss';

import FilmsList from '../../components/FilmsList';
import { connect } from 'react-redux';
import { fetchFilms } from '../../redux/actions';

import { info } from '../../API/info';

class Films extends Component {

    componentDidMount() {
       this.props.fetchFilms(info)  //при загрузке страницы вызовится action(функция)   props? хз
    }

    render() {

        const { list } = this.props;
        
        return (
            <div className='container'>
                <section className="products-wrapper">
                    <h2 className="products-title">Список фильмов</h2>
                    <FilmsList films={list}/>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{         //глобальный state=store
    return {
		list: state.films.initialList   //если несколько reducers
    };
}

export default connect(mapStateToProps , { fetchFilms:fetchFilms })(Films);