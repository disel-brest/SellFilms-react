import React, { Component } from 'react';
import './Films.scss';

import FilmsList from '../../components/FilmsList';
import { connect } from 'react-redux';
import { fetchFilms } from '../../redux/actions';

// import { info } from '../../API/info';

class Films extends Component {

    // componentDidMount() {
    //    this.props.fetchFilms(info)  //при загрузке страницы вызовится action(функция)   props? хз
    // }

    componentDidMount(){
        fetch('http://localhost:7000/api/films', {     //fetch  импортировать не надо
            method : 'GET'
        })
        .then(otvetservera => otvetservera.json())    // метод json() внутри себя преобр. данные(объект respons) что-то типа data.JSON.parse и возвращаем promis с объектом
		.then(dannieservera => {
            console.log(dannieservera);  
            this.props.propsFetchFilms(dannieservera.response)    //.then(users)        получили массив 
        })
        .catch((error) => console.log(error));
    }

    // componentDidMount() {
    //     fetch('http://localhost:7000/api/films')
    //       .then((response) => response.json())
    //       .then((data) => this.props.fetchFilms(data.response))
    //       .catch((error) => console.log(error));
    // }

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

export default connect(mapStateToProps , { propsFetchFilms:fetchFilms })(Films);