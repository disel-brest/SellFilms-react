import React from 'react';
import './Comment.scss';
import classnames from 'classnames';
import noavatar from '../../../../assets/images/noavatar.png';

function Comment(props) {

    const { comment } = props;

    return (
        <>
            <div className={classnames('inner-comments__item', comment.status === 'good' ? "positive" : "negative",)}>
                <div className="inner-comments__photo">
                    <img src={noavatar} alt={comment.author} />
                </div>
                <div className="inner-comments__info">
                    <div className="inner-comments__name">{comment.author}</div>
                    <div className="inner-comments__date">{comment.date}</div>
                    <div className="inner-comments__content">{comment.content}</div>
                </div>
            </div>
        </>
    );
}

export default Comment;