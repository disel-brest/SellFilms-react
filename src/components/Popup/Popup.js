import React from 'react';
import ReactDOM from 'react-dom';
import './Popup.scss';

import CommentForm from '../Popup/CommentForm';

function Popup(props) {
    
    return ReactDOM.createPortal(
        <div className="popup open">
            <div className="popup__body">
                <CommentForm {...props} />  
            </div>
        </div >,
        document.querySelector('#popup'),    //чистый js ищет id=popup во всем проекте начиная с родителя index.html
    );
}

export default Popup;