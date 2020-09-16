import React, { Component } from 'react';
import './Films.scss';

import FilmsList from '../../components/FilmsList';
import { connect } from 'react-redux';
import { fetchFilms } from '../../redux/actions';

class Films extends Component {

    componentDidMount(){
        fetch('http://localhost:7000/api/films', {
            method : 'GET'
        })
        .then(server => server.json())
		.then(data => { this.props.fetchFilms(data.response) })
        .catch((error) => console.log(error));
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

export default connect(mapStateToProps , { fetchFilms: fetchFilms })(Films);