import React, { Component } from 'react';
import './Films.scss';

import FilmsList from '../../components/FilmsList';
import Sorting from '../../components/Sorting';
import { connect } from 'react-redux';
import { fetchFilms, addToCart, updateSorting } from '../../redux/actions';

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

        const { list, addToCart, sorting, updateSorting } = this.props;

        return (
            <div className='container'>
                <section className="products-wrapper">
                    <h2 className="products-title">Список фильмов</h2>
                    <Sorting sorting={sorting} updateSorting={updateSorting}/>
                    <FilmsList films={list} addToCart={addToCart}/>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{         //глобальный state=store
    return {
        list: state.films.initialList,   //если несколько reducers
        sorting: state.films.sorting
    };
}

export default connect(mapStateToProps ,{ 
    fetchFilms: fetchFilms,
    addToCart: addToCart,
    updateSorting: updateSorting 
})(Films);