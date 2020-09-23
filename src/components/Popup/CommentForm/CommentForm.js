import React from 'react';
import './CommentForm.scss';

function CommentForm(props) {

    const status = React.createRef();
    const content = React.createRef();

    const { film, closeAddComment, addComment } = props;

    const addCommentHandler = () => {
        addComment(status.current.value, content.current.value, /*film.id*/);
        closeAddComment();
    };

    return (
        <div className="popup__content">
            <span className="popup__close" onClick={closeAddComment}>x</span>       {/*но обычно span*/}
            <div className="popup__title">Добавить отзыв</div>
            <div className="popup__text">
                на фильм <strong>{film.name} ({film.year})</strong>
            </div>
            <div className="popup__select">
                <select className="input" defaultValue='' ref={status}>
                    <option value='good'>Положительный отзыв</option>
                    <option value='bad'>Отрицательный отзыв</option>
                </select>
            </div>
            <div className="popup__textarea">
                <textarea type='text' name='content' className="input" ref={content}></textarea>
            </div>
            <button className="btn-bg" onClick={addCommentHandler}>Отправить</button>
        </div>
    );
}

export default CommentForm;