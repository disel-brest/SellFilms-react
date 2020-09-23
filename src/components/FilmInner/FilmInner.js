import React, { Component } from 'react';
import './FilmInner.scss';

import FilmInfo from '../../components/FilmInner/FilmInfo';
import Comments from '../../components/FilmInner/Comments';
import Popup from '../../components/Popup';

class FilmInner extends Component {
    state = {
        isAddCommentVisible: false
    }

    addToCartHandler = () => this.props.addToCart(this.props.film);
    
    closeAddCommentHandler = () => this.setState({isAddCommentVisible: false});
    openAddCommentHandler = () => this.setState({isAddCommentVisible: true});

    render() {
        //const { addToCart } = this.props;   //ненужно т.к addToCart используется выше, область видимости функции
        const { film, addComment } = this.props;

        return (
            <div className="inner-container">
                <div className="inner-top">
                    <div className="inner-top__price">Цена: {film.cost} руб</div>
                    <button className="btn-bg" onClick={this.addToCartHandler}>Добавить в корзину</button>
                </div>
                <FilmInfo film={film} />
                <Comments 
                    comments={film.comments}
                    openAddComment={this.openAddCommentHandler}
                />
                {this.state.isAddCommentVisible && (
                    <Popup
                        film={film}
                        closeAddComment={this.closeAddCommentHandler}
                        addComment={addComment}
                    />
                )}
            </div>
        )
    }
}

export default FilmInner;