import React from 'react';
import './CartItem.scss';

function CartItem(props) {

    const { film: { data, count, id } } = props;

    //const removeFromCartHandler = () => props.removeFromCart(id);          //IGOR     removeFromCart action
    const removeFromCartHandler = () => props.removeFromCart(props.film);    //SERGEY   removeFromCart action
    
    //const increaseCountHandler = () => props.increaseCountCart(id);        //IGOR     increaseCount action
    const increaseCountHandler = () => props.increaseCountCart(props.film);  //SERGEY   increaseCount action

    //const decreaseCountHandler = () => props.decreaseCountCart(id);        //IGOR     decreaseCount action
    const decreaseCountHandler = () => props.decreaseCountCart(props.film);  //SERGEY   decreaseCount action
    
    return (
        <article className="cart-product">
            <div className="cart-product__foto">
                <img src={require(`../../../assets/images/${data.id}.jpg`)} alt={data.name} />
            </div>
            <div className="cart-product__descr">
                <div className="cart-product__title">{data.name} ({data.year})</div>
                <div className="cart-product__property">Жанр фильма: {data.genre}</div>
                <div className="cart-product__property">Страна производства: {data.country}</div>
                <div className="cart-product__property">Рейтинг: {data.rating} %</div>
            </div>
            <div className="cart-product__quantity">
                <div className="cart-product__addcount">
                    <button className="btn-sm" onClick={decreaseCountHandler}>&#60;</button>
                    <div className="cart-product__count">{count}</div>
                    <button className="btn-sm" onClick={increaseCountHandler}>&#62;</button>
                </div>
                <div className="cart-product__remove" onClick={removeFromCartHandler}>Удалить</div>
            </div>
            <div className="cart-product__info">
                <div className="cart-product__price">Цена: {data.cost} руб.</div>
            </div>
        </article>
    );
}

export default CartItem;