import React, { Component } from 'react';
import './Film.scss';

import FilmInner from '../../components/FilmInner';
import { connect } from 'react-redux';
import { fetchFilm, addToCart, addComment } from '../../redux/actions';

class Film extends Component {

    componentDidMount(){
        fetch(`http://localhost:7000/api/films/${this.props.match.params.filmId}`, {    //но тут мы получаем только один фильм
            method:'GET'
        }).then(server => server.json())
          .then(data => this.props.fetchFilm(data.response))
          .catch((error) => console.log(error));
    }

    render(){

        if (!this.props.activeFilm) {        //при первичной загрузке(render) нужно
            return null;
          }

        return (
            <>
                <FilmInner 
                    film={this.props.activeFilm}
                    addToCart={this.props.addToCart}
                    addComment={this.props.addComment}
                />
                {/* FilmInner     расшифровка
                    -FilmInfo     внутри будет
                    -Comments
                    -AddComment */}
            </>
        );
    }
}

const mapStateToProps = (state)=>{         //глобальный state=store
    return {
		activeFilm: state.activeFilm
    };
}

export default connect(mapStateToProps, {
    fetchFilm: fetchFilm,
    addToCart: addToCart,
    addComment: addComment
})(Film);