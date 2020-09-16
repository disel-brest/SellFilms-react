import React from 'react';
import './Comments.scss';

import Comment from '../../../components/FilmInner/Comments/Comment';

function Comments(props) {
    return (
        <>
            <div className="inner-comments">
                <h2 className="inner-comments__title">Отзывы</h2>
                {props.comments.map((comment, index)=> {
                    return <Comment comment={comment} key={index}/>
                })}
                <button className="btn-bg">Добавить отзыв</button>
            </div>
        </>
    );
}

export default Comments;